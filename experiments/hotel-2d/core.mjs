// NATIVE-2D-001: deterministic, scene-independent social state. No services or storage.
export const NPCS = Object.freeze([
  { id: "arthur", name: "Arthur Vance", role: "Guest", room: "201", wing: "West", accessory: "Scarf", color: "#d77a68" },
  { id: "elena", name: "Elena Gomez", role: "Guest", room: "202", wing: "West", accessory: "Lanyard", color: "#d9b56b" },
  { id: "mina", name: "Mina Park", role: "Guest", room: "203", wing: "East", accessory: "Scarf", color: "#62a7b2" },
  { id: "theo", name: "Theo Rowe", role: "Guest", room: "204", wing: "East", accessory: "Lanyard", color: "#a08ac1" },
  { id: "nora", name: "Nora Bell", role: "Receptionist", color: "#88b891" },
  { id: "cam", name: "Cam Ward", role: "Porter", color: "#739dce" },
  { id: "iris", name: "Iris Vale", role: "Security", color: "#c9a1a0" },
  { id: "finn", name: "Finn Moss", role: "Maintenance", color: "#acba7a" }
]);
export const ZONES = Object.freeze(["Lobby", "Corridor", "Service", "Security"]);
const SCHEDULES = Object.freeze({
  arthur: ["Lobby", "Corridor", "Lobby", "Corridor"],
  elena: ["Corridor", "Lobby", "Corridor", "Lobby"],
  mina: ["Lobby", "Corridor", "Corridor", "Lobby"],
  theo: ["Corridor", "Lobby", "Lobby", "Corridor"],
  nora: ["Lobby", "Lobby", "Service", "Lobby"],
  cam: ["Service", "Corridor", "Lobby", "Service"],
  iris: ["Security", "Lobby", "Security", "Corridor"],
  finn: ["Service", "Service", "Corridor", "Security"]
});
const npc = (id) => NPCS.find((person) => person.id === id);
const clamp = (n) => Math.max(0, Math.min(100, n));
export function locationAt(personId, minute) {
  if (!SCHEDULES[personId] || !Number.isFinite(minute) || minute < 0) return null;
  return SCHEDULES[personId][Math.floor(minute / 3) % 4];
}
export function createRun(seed = 1) {
  if (!Number.isSafeInteger(seed) || seed < 0) throw new TypeError("Seed must be a nonnegative safe integer");
  const culprit = NPCS[seed % 4];
  const innocent = NPCS[(seed + 1) % 4];
  return {
    seed, minute: 0, leverage: 1, exposure: 0, duties: [],
    suspicion: Object.fromEntries(NPCS.map((person) => [person.id, 0])),
    used: [], evidence: [], feed: ["00:00 — Your shift begins. You are the only human-controlled clerk."],
    ended: false, outcome: null,
    truth: { culpritId: culprit.id, unrelatedSecretId: innocent.id, stolenWing: culprit.wing, recordedAccessory: culprit.accessory }
  };
}
function evidence(state, key, description) {
  if (!state.evidence.some((item) => item.key === key)) state.evidence.push({ key, description });
}
function closeShift(state, accusation = null) {
  state.ended = true;
  const culprit = npc(state.truth.culpritId);
  const secret = npc(state.truth.unrelatedSecretId);
  state.outcome = {
    verdict: accusation === null ? "No accusation" : accusation === culprit.id ? "Correct accusation" : "Incorrect accusation",
    accused: accusation ? npc(accusation)?.name : null,
    culprit: culprit.name,
    unrelatedSecret: secret.name + " hid a personal surprise unrelated to the missing keycard.",
    duties: state.duties.length,
    evidence: state.evidence.length,
    exposure: state.exposure,
    leverage: state.leverage,
    explanation: "The sign-out ledger gives a wing; camera footage gives an accessory. Their intersection identifies the person who used the spare card."
  };
}
function tick(state, minutes = 1) {
  const before = state.minute;
  state.minute = Math.min(12, state.minute + minutes);
  if (before < 2 && state.minute >= 2) {
    state.feed.push("02:00 — A spare keycard has vanished. Someone entered the service corridor.");
  }
  if (state.exposure >= 100) {
    closeShift(state);
    state.outcome.verdict = "EXPOSED — security ended your shift";
  } else if (state.minute >= 12) {
    closeShift(state);
    state.feed.push("12:00 — Dawn handoff. The investigation is over.");
  }
}
export function perform(run, action, target = null) {
  if (!run || run.ended) return { ok: false, state: run, message: "Run finished; restart to continue." };
  const validPerson = npc(target);
  const oneTime = ["desk", "delivery", "ledger", "camera", "service"];
  if (oneTime.includes(action) && run.used.includes(action)) {
    return { ok: false, state: run, message: "That opportunity has already been used." };
  }
  if (action === "question" && (!validPerson || run.used.includes("question:" + target))) {
    return { ok: false, state: run, message: "Choose someone you have not questioned." };
  }
  if (["ledger", "camera", "service", "question", "accuse", "pass"].includes(action) && run.minute < 2) {
    return { ok: false, state: run, message: "The keycard incident has not occurred yet." };
  }
  if ((action === "ledger" && run.leverage < 1) || (action === "camera" && run.leverage < 2)) {
    return { ok: false, state: run, message: "Not enough Leverage for this contextual request." };
  }
  if (action === "accuse" && !validPerson) return { ok: false, state: run, message: "Select an NPC to accuse." };
  if (!["wait", "desk", "delivery", "ledger", "camera", "service", "question", "sneak", "accuse", "pass"].includes(action)) {
    return { ok: false, state: run, message: "Unknown action." };
  }
  const state = {
    ...run,
    duties: [...run.duties], suspicion: { ...run.suspicion },
    used: [...run.used], evidence: run.evidence.map((item) => ({ ...item })),
    feed: [...run.feed], outcome: run.outcome ? { ...run.outcome } : null,
    truth: { ...run.truth }
  };
  let message = "";
  if (action === "desk" || action === "delivery") {
    state.used.push(action);
    state.duties.push(action);
    state.leverage += 1;
    message = action === "desk" ? "Checked the guest ledger at the front desk. +1 Leverage." : "Delivered a guest request. +1 Leverage.";
  } else if (action === "ledger") {
    state.used.push(action);
    state.leverage -= 1;
    evidence(state, "wing", "The spare-card sign-out lists the " + state.truth.stolenWing + " wing. This narrows the guests to two.");
    message = "A favor lets you inspect the restricted sign-out ledger. −1 Leverage.";
  } else if (action === "camera") {
    state.used.push(action);
    state.leverage -= 2;
    evidence(state, "accessory", "Blurred camera footage shows a " + state.truth.recordedAccessory.toLowerCase() + ", shared by two guests.");
    message = "Security grants limited footage access. −2 Leverage.";
  } else if (action === "service") {
    state.used.push(action);
    state.suspicion.iris = clamp(state.suspicion.iris + 18);
    state.exposure = clamp(state.exposure + 12);
    evidence(state, "room", "A damaged service slip mentions room " + npc(state.truth.culpritId).room + ". This is strong evidence, not an automatic verdict.");
    message = "You entered the restricted service room; security noticed. Suspicion +18 (Iris), Exposure +12.";
  } else if (action === "question") {
    state.used.push("question:" + target);
    state.suspicion[target] = clamp(state.suspicion[target] + 4);
    if (validPerson.role === "Guest" && target === state.truth.unrelatedSecretId) {
      evidence(state, "secret:" + target, validPerson.name + " evasively mentions hiding a personal surprise; this is not evidence of keycard guilt.");
    } else if (validPerson.role === "Guest") {
      evidence(state, "statement:" + target, validPerson.name + " says their evening was ordinary and denies knowing where the spare card went.");
    } else if (target === "cam") {
      evidence(state, "witness", "Cam heard the service door open around 02:00 but saw no face.");
    } else {
      evidence(state, "statement:" + target, validPerson.name + " reports nothing definitive about the spare card.");
    }
    message = "Questioned " + validPerson.name + ". Local Suspicion +4; Global Exposure unchanged.";
  } else if (action === "sneak") {
    state.suspicion.iris = clamp(state.suspicion.iris + 18);
    state.exposure = clamp(state.exposure + 25);
    message = "You took an obvious unauthorized shortcut. Iris Suspicion +18, Global Exposure +25.";
  } else if (action === "wait") {
    message = "You watched the hotel settle into its next routine.";
  } else if (action === "accuse" || action === "pass") {
    closeShift(state, action === "accuse" ? target : null);
    message = action === "accuse" ? "You submitted your accusation and handed off the shift." : "You chose to resolve without an accusation.";
    state.feed.push(String(state.minute).padStart(2, "0") + ":00 — " + message);
    return { ok: true, state, message };
  }
  state.feed.push(String(state.minute).padStart(2, "0") + ":00 — " + message);
  tick(state);
  return { ok: true, state, message };
}
// The default UI and its debug panel use only this deliberate projection, never the truth object.
export function publicView(run) {
  return {
    minute: run.minute, leverage: run.leverage, exposure: run.exposure,
    incident: run.minute >= 2, ended: run.ended, duties: [...run.duties],
    people: NPCS.map((person) => ({ ...person, location: locationAt(person.id, run.minute), suspicion: run.suspicion[person.id] })),
    evidence: run.evidence.map((item) => ({ ...item })),
    feed: [...run.feed], outcome: run.ended ? { ...run.outcome } : null
  };
}
