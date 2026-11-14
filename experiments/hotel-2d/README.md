# Native 2D Hotel interaction-state reference (NATIVE-2D-001)

**Status:** experimental control, not a finished game or accepted Hotel MVP.

The earlier Google Playground 3D Hotel spike did not reliably handle room transitions, UI prompts, or incident resolution; 2D Playground experiments unexpectedly generated multiplayer lobbies despite a single-player selection. This independent conventional-browser reference tests whether the **underlying rules** can work when the generated runtime and free-roam movement are taken out of the equation.

## Try it locally

Run a local static server from the repository root:

    python -m http.server 8000

Open [http://127.0.0.1:8000/experiments/hotel-2d/](http://127.0.0.1:8000/experiments/hotel-2d/). No signup, external API, telemetry, backend, data persistence, third-party script, or install step is required. A browser is needed because this prototype uses native JavaScript modules, which are not guaranteed to load through a direct `file://` URL.

The only human-controlled role is the Night Clerk. Eight independently scheduled NPCs move between four schematic hotel zones. Actions advance simulated minutes; a keycard incident occurs at 02:00 and dawn handoff occurs at 12:00, unless the player resolves the case sooner.

1. Complete desk or delivery duties to earn Leverage.
2. Observe ordinary schedules before the incident.
3. After 02:00, question NPCs, request the sign-out ledger, ask for camera footage, or risk inspecting the restricted service room.
4. The ledger narrows **wing**; footage narrows **accessory**. No single paid social request directly declares a culprit. An unrelated secret is deliberately present.
5. Choose to accuse someone, leave the case unresolved, or spend more time collecting information.
6. At handoff, compare the verdict, original truth, duties, clues, Exposure, and collateral consequences. Restart the same scenario or advance to a different deterministic seed.

The repeatable **Risk shortcut** earns **+1 Leverage** in exchange for **+25 Global Exposure** and **+18 Suspicion from Iris** per use. Unlike the two one-time safe duties, this permits a riskier clue-funding route after duties are exhausted or skipped; four uses end the shift through Exposure. That makes the risk action an actual tradeoff instead of a strictly harmful wait substitute.

The **debug checkbox** shows NPC location and individual Suspicion, never internal culprit or unrelated-secret identifiers before the final verdict. Global Exposure is separate. Invalid or premature actions do not mutate the authoritative state.

## Deterministic tests

Requires an existing Node.js installation; no packages are installed:

    node --test experiments/hotel-2d/core.test.mjs

Tests cover NPC identity/schedules, repeatable generation, invalid-action no-ops, incident timing, contextual Leverage, NPC-local Suspicion versus global Exposure, unrelated innocence, hidden-state projection, accusation outcomes, exposure consequence, and clean restart. GitHub Actions runs this same dependency-free suite on relevant PR/push changes.

## Real Chromium interaction smoke

Requires Node.js 22+ with built-in WebSocket and an existing Chrome/Chromium binary. This smoke launches a localhost-only static server plus headless browser, uses Chrome DevTools Protocol without npm packages, and cleans up the ephemeral browser profile. It covers UI initialization, NPCs, incident timing, clues, accusation, terminal state, restart and a 390px mobile viewport:

    node experiments/hotel-2d/browser-smoke.mjs

If Chrome is installed under another executable name, supply `CHROME_BIN=/path/to/chromium` in the environment. The harness asks Chrome to allocate a loopback-only debugging port and reads the selected port from its isolated temporary profile, rather than reserving and releasing a guessed port. It fails on malformed/out-of-loopback endpoints and cleans up after itself. GitHub Actions runs both the deterministic Node suite and the real Chromium interaction smoke on PR/push changes. This is automated UI functionality evidence, not a human playtest, animation proof, or UX acceptance.

## Human playtest protocol — NOT YET PERFORMED

This is the minimum manual acceptance evidence for issue #4, not an automated PASS. Use the browser experiment above on a desktop and a narrow touch-screen viewport. Test two distinct starting cases: the initial case after loading the page, then choose **Try a different scenario** once for the second case. Complete a full verdict or abstention in each case.

Record for each case: device and input method; whether the action buttons, time advancement, NPC positions, local Suspicion and global Exposure are understandable before consulting this README; what evidence led to the verdict; whether the unrelated-secret red herring felt fair; any confusion or unexpected disablement; risk/reward usefulness; narrow-screen clipping or unreachable controls; and whether another run sounds appealing. Do not record names, private household information, accounts, or other sensitive data.

A human reviewer should separately give 1–5 subjective scores for clarity, deduction fairness, pacing and replay interest, plus one concrete improvement. A reproducible malfunction requires steps, observed/expected result, and whether restarting the same case reproduces it. Keep these observations in the existing issue #4/PR #5 rather than inventing a second tracking system. Neither scripted success nor one favorable impression establishes a finished product.

## Deliberate limitations

This is a **room-card/top-down schematic**, not physical 2D movement, collision, animated NPC navigation, multiplayer, AI conversation, final art, full truth-first procedural mystery, asset/edge progression, or release candidate. The incident and clue variants are only enough to test control and state integrity. The experiment is **not** evidence that people enjoy the game, that the mystery is replayable enough, or that Playground's single-player defect is repaired.

Compare any actual browser playtest against `docs/production/PLAYTEST_CRITERIA.md` and issue #3; do not promote #2 MVCR from synthetic/unit tests alone. Issue #4 owns this bounded experiment. Incremental spend: $0.
