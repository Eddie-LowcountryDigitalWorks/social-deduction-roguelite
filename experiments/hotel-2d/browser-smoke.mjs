// Browser interaction regression for NATIVE-2D-001. Uses only Node and local Chrome CDP.
import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { createServer } from "node:http";
import { readFile, mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join, extname } from "node:path";
import { fileURLToPath } from "node:url";
import { setTimeout as sleep } from "node:timers/promises";

const root = fileURLToPath(new URL(".", import.meta.url));
const types = { ".html": "text/html; charset=utf-8", ".mjs": "text/javascript; charset=utf-8" };
const server = createServer(async (req, res) => {
  const name = new URL(req.url || "/", "http://localhost").pathname;
  if (!["/", "/index.html", "/core.mjs"].includes(name)) {
    res.writeHead(404).end("not found");
    return;
  }
  const filename = name === "/" ? "index.html" : name.slice(1);
  try {
    const bytes = await readFile(join(root, filename));
    res.writeHead(200, { "content-type": types[extname(filename)] });
    res.end(bytes);
  } catch {
    res.writeHead(500).end("failed to load");
  }
});
const listen = (s) => new Promise((resolve, reject) => {
  s.once("error", reject);
  s.listen(0, "127.0.0.1", () => resolve(s.address().port));
});
const close = (s) => new Promise((resolve) => s.close(resolve));
let browser = null, socket = null, profile = null, appStarted = false;
let seq = 0;
const pending = new Map(), failures = [];
function call(method, params = {}) {
  return new Promise((resolve, reject) => {
    const id = ++seq;
    const timer = setTimeout(() => { pending.delete(id); reject(new Error("CDP timeout: " + method)); }, 10000);
    pending.set(id, { resolve, reject, timer });
    socket.send(JSON.stringify({ id, method, params }));
  });
}
async function js(expression) {
  const result = await call("Runtime.evaluate", { expression, returnByValue: true, awaitPromise: true });
  if (result.exceptionDetails) throw new Error("Browser JS exception: " + result.exceptionDetails.text);
  return result.result.value;
}
async function waitFor(callback, message) {
  for (let i = 0; i < 70; i++) {
    try { if (await callback()) return; } catch { /* module loading */ }
    await sleep(100);
  }
  throw new Error("Timed out: " + message);
}
async function socketUrl(port) {
  for (let i = 0; i < 90; i++) {
    try {
      if (browser.exitCode !== null) throw new Error("Chrome quit before CDP was ready");
      const response = await fetch("http://127.0.0.1:" + port + "/json/list", { signal: AbortSignal.timeout(600) });
      const pages = await response.json();
      const page = pages.find((p) => p.type === "page" && p.webSocketDebuggerUrl);
      if (page) return page.webSocketDebuggerUrl;
    } catch { /* process may be starting */ }
    await sleep(100);
  }
  throw new Error("Chrome CDP endpoint unavailable");
}
async function main() {
  const port = await listen(server);
  appStarted = true;
  const probe = createServer();
  const debugPort = await listen(probe);
  await close(probe);
  profile = await mkdtemp(join(tmpdir(), "hotel-2d-"));
  browser = spawn(process.env.CHROME_BIN || "google-chrome", [
    "--headless=new", "--disable-gpu", "--no-sandbox", "--no-first-run",
    "--no-default-browser-check", "--disable-background-networking",
    "--no-proxy-server", "--user-data-dir=" + profile,
    "--remote-debugging-port=" + debugPort, "about:blank"
  ], { stdio: "ignore" });
  browser.on("error", (e) => failures.push(e.message));
  socket = new WebSocket(await socketUrl(debugPort));
  await new Promise((resolve, reject) => {
    socket.addEventListener("open", resolve, { once: true });
    socket.addEventListener("error", reject, { once: true });
  });
  socket.addEventListener("message", (event) => {
    const item = JSON.parse(event.data);
    if (item.method === "Runtime.exceptionThrown") failures.push(item.params.exceptionDetails.text);
    if (item.id && pending.has(item.id)) {
      const p = pending.get(item.id);
      pending.delete(item.id);
      clearTimeout(p.timer);
      item.error ? p.reject(new Error(JSON.stringify(item.error))) : p.resolve(item.result);
    }
  });
  await call("Runtime.enable");
  await call("Page.enable");
  await call("Page.navigate", { url: "http://127.0.0.1:" + port + "/" });
  await waitFor(async () => js('document.querySelectorAll("#map .zone").length === 4'), "UI initialization");
  assert.equal(await js('document.querySelector("#clock").textContent'), "00:00");
  assert.equal(await js('document.querySelector("#leverage").textContent'), "1");
  assert.equal(await js('document.querySelector("#exposure").textContent'), "0 / 100");
  assert.equal(await js('document.querySelectorAll(".person").length'), 8);
  assert.equal(await js('document.querySelector("[data-action=ledger]").disabled'), true);

  await js('document.querySelector("[data-action=desk]").click()');
  await js('document.querySelector("[data-action=delivery]").click()');
  assert.equal(await js('document.querySelector("#clock").textContent'), "02:00");
  assert.equal(await js('document.querySelector("#leverage").textContent'), "3");
  assert.equal(await js('document.querySelector("[data-action=ledger]").disabled'), false);
  assert.match(await js('document.querySelector("#incident").textContent'), /missing/);

  await js('document.querySelector("[data-action=ledger]").click()');
  await js('document.querySelector("[data-action=camera]").click()');
  assert.equal(await js('document.querySelectorAll("#evidence li").length'), 2);
  assert.match(await js('document.querySelector("#evidence").textContent'), /West/);
  assert.match(await js('document.querySelector("#evidence").textContent'), /lanyard/);
  assert.equal(await js('document.querySelector("#leverage").textContent'), "0");
  assert.equal(await js('document.querySelector("#clock").textContent'), "04:00");

  await js('document.querySelector("#show-debug").click()');
  const debugText = await js('document.querySelector("#debug").textContent');
  assert.match(debugText, /Iris Vale/);
  assert.doesNotMatch(debugText, /culpritId|unrelatedSecretId/);
  await js('document.querySelector("#person").value = "elena"; document.querySelector("[data-action=accuse]").click()');
  assert.equal(await js('document.querySelector("#outcome").hidden'), false);
  assert.match(await js('document.querySelector("#result").textContent'), /Correct accusation/);
  assert.match(await js('document.querySelector("#result").textContent'), /Elena Gomez/);
  assert.equal(await js('document.querySelector("[data-action=desk]").disabled'), true);

  await js('document.querySelector("#restart").click()');
  assert.equal(await js('document.querySelector("#clock").textContent'), "00:00");
  assert.equal(await js('document.querySelector("#leverage").textContent'), "1");
  assert.equal(await js('document.querySelector("#outcome").hidden'), true);
  assert.match(await js('document.querySelector("#evidence").textContent'), /No evidence/);

  await call("Emulation.setDeviceMetricsOverride", {
    width: 390, height: 800, deviceScaleFactor: 1, mobile: true
  });
  assert.equal(await js('document.querySelectorAll("#map .zone").length'), 4);
  const width = await js('({scroll:document.documentElement.scrollWidth, viewport:window.innerWidth})');
  assert.ok(width.scroll <= width.viewport + 2, "mobile viewport must not overflow horizontally");
  assert.deepEqual(failures, [], "no browser runtime errors");
  console.log("HOTEL_BROWSER_SMOKE_PASS: flow, clues, verdict, reset and mobile viewport; zero JS exceptions");
}
try {
  await main();
} catch (e) {
  console.error("HOTEL_BROWSER_SMOKE_FAIL", e.stack || e);
  process.exitCode = 1;
} finally {
  if (socket) socket.close();
  for (const value of pending.values()) {
    clearTimeout(value.timer);
    value.reject(new Error("Browser closed"));
  }
  pending.clear();
  if (browser && browser.exitCode === null) {
    browser.kill("SIGTERM");
    await sleep(100);
    if (browser.exitCode === null) browser.kill("SIGKILL");
  }
  if (appStarted) await close(server).catch(() => {});
  if (profile) await rm(profile, { recursive: true, force: true }).catch(() => {});
}
