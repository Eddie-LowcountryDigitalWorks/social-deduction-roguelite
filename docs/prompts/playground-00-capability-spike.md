# Playground Prompt 00 â€” Hotel Social-Simulation Capability Spike

## Purpose

Paste the prompt below into a **new Google Labs Playground game generation**. This is deliberately a systems test, not the finished game.

After generation, play it before requesting additional features. Record observed behavior against `docs/production/PLAYTEST_CRITERIA.md`.

---

## Prompt

Create a small single-player systems prototype for a future social-deduction roguelite. This is a **capability spike, not a finished game**. Please implement only the systems described below and do not invent a larger campaign, combat system, inventory loot system, multiplayer mode, or complex story.

### Presentation

Make a compact stylized 3D hotel environment viewed from an **elevated third-person 3/4 camera**. The camera should be close enough that individual characters are recognizable but high/wide enough that the player can see nearby doors, people, and who might witness an action.

Use a simple **graphic-noir cel-shaded** direction: low-complexity stylized geometry, strong silhouettes/outlines, muted hotel colors, and clear selective UI colors. Prioritize readability and performance over detailed art.

The playable character is the **Night Clerk**.

Support desktop movement with WASD or arrow keys and a clear interact control. For this capability spike, prioritize reliable desktop controls and simulation behavior; do not spend generation complexity on touch/mobile controls yet.

### Small hotel layout

Create only these connected areas:
- lobby/front desk;
- one guest-room corridor with six guest-room doors;
- a small staff/service room;
- a small security office that is normally restricted.

Do not create additional floors or a large hotel.

### NPCs

Create exactly **8 named NPCs**. Make each one visually distinguishable through silhouette, clothing, color, hairstyle, or accessories. Show their names when the player is near them.

NPC composition:
- 4 hotel guests;
- 2 hotel staff;
- 1 maintenance worker;
- 1 security employee.

Each NPC should have a simple repeating routine using plausible locations, such as lobby â†’ corridor â†’ room, staff room â†’ corridor â†’ lobby, or security office â†’ patrol â†’ office.

Their routines should not all be identical. NPCs should continue their routines when the player is not interacting with them.

### Context interactions

When near an NPC or important object, show a clear contextual interaction prompt.

Include simple interactions for:
- talking to an NPC;
- front desk;
- staff-room door;
- security-office door;
- one guest-room door;
- one service object in the lobby.

The player should not have unrestricted access everywhere.

### Leverage

Add an in-run resource called **Leverage**.

Start the player with **1 Leverage**.

Leverage represents favors/social influence, not money.

Add one small hotel duty/favor that the player can complete to gain **+1 Leverage**.

Add at least two contextual ways to spend it:
- spend 1 Leverage to get a cooperative NPC to provide a small favor or useful non-solution piece of information;
- spend 2 Leverage to persuade staff/security to allow one temporary exception or access opportunity.

Leverage must never reveal a hidden answer or automatically identify a guilty person. It only creates cooperation, access, or opportunity.

Show current Leverage clearly in the HUD.

### Individual Suspicion

Every NPC must independently track **Suspicion toward the player from 0 to 100**.

For this prototype, use these approximate rules:
- normal role-appropriate behavior: +0;
- player enters a mildly inappropriate area while witnessed: +8 Suspicion for the NPC who witnessed it;
- player attempts/enters a clearly restricted area while witnessed: +18 for the witness;
- a successful contextual explanation/favor can lower that NPC's Suspicion by about 5â€“15.

Do **not** make Suspicion one shared global number. Different NPCs must be able to have very different opinions of the player at the same time.

NPC behavior should visibly change at rough thresholds:
- 0â€“24: unconcerned;
- 25â€“49: attentive;
- 50â€“74: suspicious / may question the player;
- 75â€“99: strongly suspicious / may refuse cooperation or report behavior;
- 100: takes a strong contextual action such as alerting security.

### Global Exposure

Also add a separate **Global Exposure** meter from 0 to 100.

Exposure represents how broadly the player has become part of the hotel's attention/problem. It should rise more slowly than individual Suspicion.

Examples:
- witnessed mild boundary violation: about +2 Exposure;
- witnessed clearly restricted action: about +6 Exposure;
- multiple NPCs becoming highly suspicious can add additional Exposure.

Show Exposure clearly in the HUD.

At 100 Exposure, trigger a serious hotel consequence such as security confronting/detaining the player and end the prototype with an **EXPOSED** result. Do not use health or combat.

### Timed event

The prototype should run for about **5â€“8 minutes**.

At approximately 2 minutes, trigger one visible hotel anomaly: one guest requests a replacement key, then shortly afterward another NPC enters the corridor or staff area at an unusual time.

This event does not need a full mystery solution. Its purpose is to verify that timed world events can occur while NPC routines and social state continue functioning.

At the end of the timer, trigger **SHIFT HANDOFF** and show a summary containing:
- final Leverage;
- final Exposure;
- highest individual NPC Suspicion;
- whether the player completed the favor/duty;
- whether the player was Exposed.

Include a Restart button that cleanly resets the complete simulation.

### Debug/testing support

Because this is an engineering prototype, add a toggleable **debug panel** that shows for every NPC:
- name;
- current routine state/location target;
- current Suspicion value.

Also show the current global timer, Leverage, and Exposure in the debug panel.

The normal HUD should remain simple; debug values may be more technical.

### Important constraints

- No combat, weapons, attacks, health, or enemies.
- No cards or board-game presentation.
- No procedural campaign yet.
- No murderer or full crime mystery yet.
- No permanent progression yet.
- No multiplayer yet.
- No giant map.
- Do not add unrelated mechanics.
- Keep the code/state structure clear enough that these systems can be expanded later.

The goal of this generation is to prove that a compact hotel, eight distinct NPC routines, contextual interactions, Leverage, per-NPC Suspicion, Global Exposure, timed events, and a clean restart can all work together reliably.
