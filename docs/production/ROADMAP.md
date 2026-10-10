# Development Roadmap

## Guiding principle

Do not scale content before proving the core social simulation and replay loop.

Each phase must answer a different risk question. Advancement requires evidence, not enthusiasm.

---

# Phase 0 — Design Foundation

**Goal:** establish coherent terminology, systems, and first-run scope.

Deliverables:
- game vision;
- living GDD/index;
- Roles/Agendas model;
- Approaches/Edges model;
- Assets/synergies model;
- Leverage/Suspicion/Exposure baseline;
- truth/evidence generation rules;
- Raise the Stakes / Milestone direction;
- campaign truth candidates;
- Hotel MVCR spec;
- Google Playground capability-spike prompt.

Exit condition:
The first capability spike can be described without asking the generator to invent core rules.

---

# Phase 1 — Playground Capability Spike

**Goal:** determine whether Google Labs Playground can support the minimum simulation/presentation requirements.

Target: 5–8 minute sandbox, intentionally disposable.

Must test:
- elevated third-person 3/4 movement/camera;
- one compact hotel floor/lobby;
- ~8 individually recognizable NPCs;
- simple NPC routines;
- context interactions;
- timed events;
- NPC-local Suspicion state;
- Global Exposure state;
- simple Leverage gain/spend;
- basic HUD and event log;
- deterministic enough state that bugs can be reproduced during one session.

Explicitly out of scope:
- campaign;
- broad procedural generation;
- large Edge/Asset pools;
- multiplayer;
- final art;
- advanced mystery generation.

Exit condition:
The prototype demonstrates that the environment, NPC routines, social state, and interaction model can coexist reliably enough to justify the Hotel MVP.

If it fails:
Export/inspect generated code, simplify presentation, or move the prototype to a conventional web runtime before expanding scope.

---

# Phase 2 — Hotel MVP

**Goal:** prove that ordinary duties plus suspicion/information gameplay are intrinsically interesting.

Target: 6–10 minute playable loop.

Add:
- Night Clerk Role;
- meaningful job duties;
- one central incident;
- one unrelated secret;
- simple evidence/testimony;
- two Approaches;
- two equipped Edges;
- initial Assets;
- one resolution path.

Exit condition:
Players form theories, care about what NPCs are doing, and understand why actions affect Leverage/Suspicion/Exposure.

---

# Phase 3 — MVCR

**Goal:** prove the complete roguelike loop.

Target: 8–12 minute full run.

Add:
- 2+ truth-first incident templates;
- 3 player Agenda variants;
- ~8 named NPCs;
- ~8–10 Assets;
- 5+ meaningful synergies;
- push-your-luck decision;
- resolution grading;
- first persistent account progression;
- first Milestone → unlock;
- clear post-run reason to replay.

Exit condition:
A player voluntarily starts another run because they want a different build, Agenda, outcome, or unlock—not merely because the developer asks them to test again.

---

# Phase 4 — Roguelike Vertical Slice

**Goal:** prove replayability beyond novelty.

Target: 15–20 minute Hotel runs.

Add/tune:
- 3 Hotel Roles;
- 4 Approaches represented;
- ~15–20 Edges;
- ~20–30 Assets;
- richer synergy pool;
- 4–6 incident families;
- deeper unrelated schemes;
- initial Raise the Stakes system;
- ~10–15 Milestones;
- account mastery/loadout progression;
- limited campaign/Case File discoveries;
- first polished visual/audio pass.

Exit condition:
Repeated Hotel runs feel structurally different and builds materially alter decision-making.

---

# Phase 5 — Bullet Train System Validation

**Goal:** prove the engine is location-generic.

Add:
- Bullet Train Location;
- linear car topology;
- station countdown/departure system;
- passenger population changes;
- Train Roles/Assets/Stakes;
- reuse of core truth/evidence/social systems.

Architecture gate:
If Train requires rewriting the core Role/Agenda/Leverage/Suspicion/Exposure/truth systems, stop and refactor before creating more locations.

Exit condition:
Train feels like a genuinely different game pressure while clearly belonging to the same game.

---

# Phase 6 — Campaign Alpha

**Goal:** prove long-term narrative motivation.

Content target:
- Hotel;
- Bullet Train;
- Estate;
- recurring characters;
- selected campaign truth direction;
- Case Files / persistent narrative hub;
- major placement anomalies;
- first authored Anchor/major cases;
- meaningful location unlock sequence.

Exit condition:
Players want to continue not only for builds/unlocks but to learn why the incidents connect.

---

# Phase 7 — Full Solo Production

**Goal:** production-scale content and balance.

Target systems/content:
- Hotel, Train, Estate, Airplane, Prison, Courthouse/Jury;
- 25–35 minute tuned runs depending on Location;
- mature Approach/Edge trees;
- large Asset/synergy pool;
- broad Agenda/incident library;
- full Raise the Stakes ladder;
- Milestones/platform-achievement mapping;
- complete campaign;
- accessibility/controller/save options;
- robust procedural validation;
- shipping-quality art/audio/UI.

---

# Phase 8 — Multiplayer R&D

**Goal:** determine which multiplayer structures improve rather than dilute the game.

Candidates:
- Conspiracy (1 vs many);
- Partners (2 vs many);
- Blind Cell (allies unknown to each other);
- Crossed Wires (small hidden teams);
- Everyone for Themselves;
- Masquerade (players hidden among NPC population);
- Infected (team conversion / uncertain infection).

Do not begin serious multiplayer production until solo NPC routines, identity, suspicion, and procedural truth are proven.

---

# Phase 9 — Platform Production

Potential targets:
- Steam / Windows;
- additional desktop platforms;
- consoles including PlayStation/Xbox/Switch or successors where practical;
- Android/iOS where UI/performance supports it.

Requires:
- production runtime decision (Unity / exported web evolution / other engine);
- platform achievements/trophies;
- save/cloud strategy;
- controller certification;
- performance/QA matrix;
- multiplayer backend if applicable;
- accessibility and platform compliance.

---

# Scope rule

New locations, multiplayer, and campaign content are rewards for proving the engine—not substitutes for proving it.