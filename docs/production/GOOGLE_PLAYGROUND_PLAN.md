# Google Labs Playground Plan

## Current platform facts — verified 2026-10-10

Google Playground currently supports:
- plain-text game creation;
- conversational editing of gameplay logic, graphics, and rules;
- PNG/JPG reference images for visual influence;
- browser gameplay across desktop/mobile with responsiveness depending on the game;
- single-player and early-preview turn-based/real-time multiplayer;
- Draft, Private, Unlisted, and Listed visibility;
- export of the complete generated HTML, JavaScript, CSS, and generated assets as a ZIP.

Google's Help Center explicitly recommends making **clear, focused modifications rather than combining many complex requests into one large edit prompt**. Prompt complexity can also contribute to slow or failed generation.

Therefore, this project's canonical GDD should **not** be pasted wholesale into every generation request.

## Strategy

Use Playground as a staged prototyping tool:

1. Generate the smallest capability spike that tests the risky technical assumptions.
2. Play it before requesting additional systems.
3. Make one coherent modification at a time.
4. Keep a prompt/change log in this repository.
5. Export milestone builds as ZIPs.
6. Inspect exported code when behavior becomes difficult to reason about conversationally.
7. If the prototype outgrows Playground, preserve the design and exported assets/code rather than forcing the platform beyond its strengths.

## Prompt hierarchy

### Canonical GDD
Lives in this repository and contains the whole game design.

### Generation brief
A compact description of only the systems required for the current prototype phase.

### Modification prompts
Focused requests that alter one subsystem or tightly related cluster at a time.

### Playtest evidence
Observed behavior, failures, screenshots, and reproducible cases used to write the next modification prompt.

## Stage 00 — Capability spike

Purpose: answer whether Playground can support the core simulation shape.

Do not ask for:
- procedural campaign;
- multiple Locations;
- full progression;
- dozens of Edges/Assets;
- multiplayer;
- final art.

Test:
- elevated third-person 3/4 view;
- compact hotel;
- eight distinguishable NPCs;
- routine movement;
- interaction prompts;
- Leverage;
- individual Suspicion;
- Global Exposure;
- timed event;
- clear HUD;
- basic win/end condition.

## Stage 01 — Role duties

If Stage 00 is stable:
- make Night Clerk duties meaningful;
- create believable reasons to move away from/return to the desk;
- add consequences for duty neglect;
- ensure routine actions are distinguishable from suspicious actions.

## Stage 02 — Truth-first incident

Add one canonical incident timeline and one unrelated secret.

Verify:
- evidence follows from truth;
- NPC knowledge is limited by what they could know;
- lying does not automatically equal culpability;
- the player can form a reasoned theory without an auto-solve button.

## Stage 03 — Edges / Assets / synergies

Add:
- Observer and Fixer starting options;
- two pre-run Edges;
- a small Asset pool;
- at least three synergies;
- contextual Asset acquisition.

## Stage 04 — MVCR

Add:
- second incident template;
- three Agenda variants;
- push-your-luck resolution decision;
- resolution grading;
- one persistent Milestone/unlock;
- post-run replay hook.

## Stage 05 — Raise the Stakes

Only after MVCR replayability is visible:
- 2–3 Stakes modifiers;
- reward multiplier / Milestone eligibility;
- validate that modifiers change decisions rather than merely inflate numbers.

## Export policy

Export a ZIP at meaningful gates:
- first stable capability spike;
- first stable Hotel MVP;
- accepted MVCR;
- accepted vertical slice.

Store exported code in Git only after inspection and a deliberate decision about repository structure/licensing; do not blindly commit every generated artifact.

## Visual references

Reference images can be useful later for the graphic-noir cel-shaded direction. Do not spend generation credits chasing final visual polish before the core loop works.

## Initial success question

The first Google session is successful if it tells us one of two things clearly:

1. **Yes:** this environment can sustain our basic NPC/social-state simulation, so continue iteratively.
2. **No:** the current Playground runtime struggles with this simulation shape, so export what is useful and move the prototype to a conventional browser/Unity workflow.

Either answer is useful.