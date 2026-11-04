# Native 2D Hotel interaction-state reference (NATIVE-2D-001)

**Status:** experimental control, not a finished game or accepted Hotel MVP.

The earlier Google Playground 3D Hotel spike did not reliably handle room transitions, UI prompts, or incident resolution; 2D Playground experiments unexpectedly generated multiplayer lobbies despite a single-player selection. This independent conventional-browser reference tests whether the **underlying rules** can work when the generated runtime and free-roam movement are taken out of the equation.

## Try it locally

Run a local static server from the repository root:

    python -m http.server 8000

Open [http://127.0.0.1:8000/experiments/hotel-2d/](http://127.0.0.1:8000/experiments/hotel-2d/). No signup, external API, telemetry, backend, data persistence, third-party script, or install step is required. A browser is needed because this prototype uses native JavaScript modules, which are not guaranteed to load through a direct \`file://\` URL.

The only human-controlled role is the Night Clerk. Eight independently scheduled NPCs move between four schematic hotel zones. Actions advance simulated minutes; a keycard incident occurs at 02:00 and dawn handoff occurs at 12:00, unless the player resolves the case sooner.

1. Complete desk or delivery duties to earn Leverage.
2. Observe ordinary schedules before the incident.
3. After 02:00, question NPCs, request the sign-out ledger, ask for camera footage, or risk inspecting the restricted service room.
4. The ledger narrows **wing**; footage narrows **accessory**. No single paid social request directly declares a culprit. An unrelated secret is deliberately present.
5. Choose to accuse someone, leave the case unresolved, or spend more time collecting information.
6. At handoff, compare the verdict, original truth, duties, clues, Exposure, and collateral consequences. Restart the same scenario or advance to a different deterministic seed.

The **debug checkbox** shows NPC location and individual Suspicion, never internal culprit or unrelated-secret identifiers before the final verdict. Global Exposure is separate. Invalid or premature actions do not mutate the authoritative state.

## Deterministic tests

Requires an existing Node.js installation; no packages are installed:

    node --test experiments/hotel-2d/core.test.mjs

Tests cover NPC identity/schedules, repeatable generation, invalid-action no-ops, incident timing, contextual Leverage, NPC-local Suspicion versus global Exposure, unrelated innocence, hidden-state projection, accusation outcomes, exposure consequence, and clean restart. GitHub Actions runs this same dependency-free suite on relevant PR/push changes.

## Deliberate limitations

This is a **room-card/top-down schematic**, not physical 2D movement, collision, animated NPC navigation, multiplayer, AI conversation, final art, full truth-first procedural mystery, asset/edge progression, or release candidate. The incident and clue variants are only enough to test control and state integrity. The experiment is **not** evidence that people enjoy the game, that the mystery is replayable enough, or that Playground's single-player defect is repaired.

Compare any actual browser playtest against \`docs/production/PLAYTEST_CRITERIA.md\` and issue #3; do not promote #2 MVCR from synthetic/unit tests alone. Issue #4 owns this bounded experiment. Incremental spend: $0.
