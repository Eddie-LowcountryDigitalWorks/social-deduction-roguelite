import test from "node:test";
import assert from "node:assert/strict";
import { NPCS, ZONES, createRun, perform, publicView, locationAt } from "./core.mjs";

const step = (run, action, target) => {
  const result = perform(run, action, target);
  assert.equal(result.ok, true, action + ": " + result.message);
  return result.state;
};
const incident = (seed = 1) => step(step(createRun(seed), "wait"), "wait");

test("one player, eight uniquely identifiable NPCs, four deterministic zones", () => {
  const p = publicView(createRun(1));
  assert.equal(p.people.length, 8);
  assert.equal(new Set(p.people.map((x) => x.id)).size, 8);
  for (const person of NPCS) {
    for (let t = 0; t < 12; t++) assert.ok(ZONES.includes(locationAt(person.id, t)));
  }
  assert.equal(locationAt("missing", 0), null);
});

test("seed is deterministic and rejects unsafe or negative inputs", () => {
  assert.deepEqual(createRun(17), createRun(17));
  assert.notEqual(createRun(1).truth.culpritId, createRun(2).truth.culpritId);
  assert.throws(() => createRun(-1), TypeError);
  assert.throws(() => createRun(1.1), TypeError);
  assert.throws(() => createRun(Number.MAX_SAFE_INTEGER + 1), TypeError);
});

test("invalid and premature actions leave original state identity untouched", () => {
  const run = createRun(4);
  assert.strictEqual(perform(run, "ledger").state, run);
  assert.strictEqual(perform(run, "question", "arthur").state, run);
  assert.strictEqual(perform(run, "camera").state, run);
  assert.strictEqual(perform(run, "accuse", "arthur").state, run);
  assert.strictEqual(perform(run, "not-an-action").state, run);
  assert.strictEqual(perform(run, "accuse", "missing").state, run);
});

test("02:00 incident is reliable and no early case evidence is visible", () => {
  const run = createRun(1);
  const one = step(run, "wait");
  assert.equal(publicView(one).incident, false);
  assert.equal(publicView(one).evidence.length, 0);
  const two = step(one, "wait");
  assert.equal(publicView(two).incident, true);
  assert.equal(two.feed.filter((x) => x.includes("keycard has vanished")).length, 1);
  assert.equal(run.minute, 0, "input state must remain unmodified");
});

test("duty economy supports two gains and two distinct contextual spends", () => {
  let r = step(createRun(1), "desk");
  const duplicate = perform(r, "desk");
  assert.equal(duplicate.ok, false);
  assert.strictEqual(duplicate.state, r);
  r = step(r, "delivery");
  assert.equal(r.leverage, 3);
  const afterLedger = step(r, "ledger");
  assert.equal(afterLedger.leverage, 2);
  const afterCamera = step(afterLedger, "camera");
  assert.equal(afterCamera.leverage, 0);
  assert.equal(afterCamera.evidence.length, 2);
  assert.ok(afterLedger.evidence[0].description.includes("West"));
  assert.ok(afterCamera.evidence[1].description.includes("lanyard"));
  assert.equal(r.leverage, 3, "previous immutable snapshot remains intact");
});

test("one NPC's suspicion is independent from global Exposure", () => {
  const r = incident(3);
  const after = step(r, "question", "nora");
  assert.equal(after.suspicion.nora, 4);
  assert.equal(after.suspicion.cam, 0);
  assert.equal(after.exposure, 0);
  assert.equal(r.suspicion.nora, 0);
  const risk = step(after, "service");
  assert.equal(risk.suspicion.iris, 18);
  assert.equal(risk.exposure, 12);
});

test("an unrelated secret exists on a different guest, not a universal guilt tell", () => {
  for (let seed = 0; seed < 16; seed++) {
    const r = createRun(seed);
    assert.notEqual(r.truth.culpritId, r.truth.unrelatedSecretId);
    const secret = step(incident(seed), "question", r.truth.unrelatedSecretId);
    assert.ok(secret.evidence.some((x) => x.key.startsWith("secret:")));
    assert.equal(secret.ended, false);
  }
});

test("ordinary questioning does not identify culprit through unique answer wording", () => {
  for (let seed = 0; seed < 16; seed++) {
    const start = incident(seed);
    const culprit = NPCS.find((person) => person.id === start.truth.culpritId);
    const neutral = NPCS.find((person) => person.role === "Guest"
      && person.id !== start.truth.culpritId && person.id !== start.truth.unrelatedSecretId);
    const culpritAnswer = step(start, "question", culprit.id).evidence.at(-1).description.replace(culprit.name, "[guest]");
    const neutralAnswer = step(start, "question", neutral.id).evidence.at(-1).description.replace(neutral.name, "[guest]");
    assert.equal(culpritAnswer, neutralAnswer);
  }
});

test("normal and debug projections never include internal seed or hidden-truth keys", () => {
  let r = createRun(2);
  for (let action of ["desk", "delivery", "ledger", "camera", "question"]) {
    r = step(r, action, action === "question" ? "cam" : null);
    const publicJson = JSON.stringify(publicView(r));
    assert.equal(publicJson.includes('"truth"'), false);
    assert.equal(publicJson.includes('"seed"'), false);
    assert.equal(publicJson.includes('"culpritId"'), false);
    assert.equal(publicJson.includes('"unrelatedSecretId"'), false);
  }
});

test("correct accusation, false accusation, and abstention are differentiated", () => {
  const correct = step(incident(1), "accuse", "elena");
  const incorrect = step(incident(1), "accuse", "arthur");
  const abstain = step(incident(1), "pass");
  assert.equal(correct.outcome.verdict, "Correct accusation");
  assert.equal(incorrect.outcome.verdict, "Incorrect accusation");
  assert.equal(abstain.outcome.verdict, "No accusation");
  assert.equal(correct.outcome.culprit, "Elena Gomez");
  assert.equal(publicView(correct).outcome.verdict, "Correct accusation");
  assert.strictEqual(perform(correct, "wait").state, correct, "closed state rejects new actions");
});

test("risk can reach exposed consequence before dawn", () => {
  let r = createRun(1);
  for (let i = 0; i < 4; i++) r = step(r, "sneak");
  assert.equal(r.exposure, 100);
  assert.equal(r.ended, true);
  assert.match(r.outcome.verdict, /^EXPOSED/);
  assert.equal(r.suspicion.iris, 72);
});

test("dawn is terminal, and a clean restart has no carried-over state", () => {
  let r = createRun(8);
  for (let i = 0; i < 12; i++) r = step(r, "wait");
  assert.equal(r.ended, true);
  assert.equal(r.outcome.verdict, "No accusation");
  const restart = createRun(8);
  assert.equal(restart.minute, 0);
  assert.equal(restart.leverage, 1);
  assert.equal(restart.exposure, 0);
  assert.equal(restart.evidence.length, 0);
  assert.equal(restart.ended, false);
  assert.deepEqual(restart, createRun(8));
});
