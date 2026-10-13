# Playground Prompt 00B — Capability Spike Corrections

Use this prompt in the existing **Night Shift Protocol** Playground game after Prompt 00A.

Do not rebuild the game from scratch. Preserve the hotel, camera, 8 NPCs, routines, Leverage, per-NPC Suspicion, Global Exposure, debug inspector, interaction highlights, and existing art.

## Prompt

Update the existing **Night Shift Protocol** capability prototype. The interaction legibility improvements are useful, but the manual test found four blocking problems. Fix only these problems and do not add new game systems yet.

### 1. Fix the shift timer

The shift timer is currently stuck at `0:00 / 5:00`, and the debug inspector also remains at `0s / 300s` while gameplay continues.

Make the timer start when the player presses **Begin Night Shift** and advance continuously during active gameplay.

Requirements:
- HUD timer counts from `0:00` to `5:00`.
- Debug `Global Shift Time` matches the real timer.
- Pause the timer only when the game is genuinely paused, not during normal NPC/door interactions.
- At approximately `2:00`, trigger the existing keycard/anomaly event.
- At `5:00`, trigger **SHIFT HANDOFF** and show the existing end-of-shift summary.
- Restart must return the timer to zero and make it start correctly on the next run.

### 2. Make the test Leverage economy completable in one run

The prototype currently starts with 1 Leverage and the one-time Service Bar duty grants only +1. That creates only 2 total Leverage, but the test requires spending 1 on an NPC favor and 2 on temporary restricted access.

For this capability test only:
- start with **1 Leverage** as before;
- change the one-time Service Bar restock reward to **+2 Leverage** instead of +1;
- after restocking, the player should therefore have 3 Leverage if none has been spent;
- keep NPC favor cost at 1;
- keep temporary restricted access cost at 2.

Update all Service Bar labels, toasts, briefing text, and objective text to show **+2 Leverage** accurately.

This is temporary prototype balancing so all required interactions can be tested in one run.

### 3. Implement the restricted-door choice menu exactly

Interacting with a restricted door must not simply say that the door is locked or requires Leverage.

When the player presses Interact at the **Staff Utility Room**, **Security Office**, or designated suspicious guest-room door, always open a clear choice menu with exactly these actions:

1. **Leave**
2. **Spend 2 Leverage — Request Temporary Access**
3. **Enter Without Permission**

Behavior:
- `Leave` closes the menu with no effect.
- `Spend 2 Leverage` is visible at all times. If the player has fewer than 2 Leverage, show it disabled with the cost requirement. If affordable, deduct 2 Leverage and grant a visible 60-second temporary permit for that specific restricted area.
- `Enter Without Permission` must always remain selectable, even with 0 Leverage. It allows entry but counts as an unauthorized action.

Temporary authorized entry must never create Suspicion or Exposure for merely crossing that authorized boundary.

### 4. Make witnessed and unwitnessed unauthorized entry testable

When the player chooses **Enter Without Permission**:
- immediately check which NPCs have valid line-of-sight to the action;
- only those actual witnesses gain individual Suspicion;
- each witness should gain approximately +18 Suspicion;
- Global Exposure should increase by approximately +6 if the violation was witnessed;
- NPCs who could not see the action must not gain Suspicion.

Show explicit engineering feedback:

If witnessed:
`WITNESSED BY: [NPC Name] (+18 Suspicion, +6 Exposure)`

If multiple NPCs saw it, list all actual witnesses while applying Suspicion independently.

If nobody saw it:
`UNSEEN — no witness Suspicion gained`

For an unseen violation, do not increase individual NPC Suspicion. Keep Global Exposure unchanged for this test unless another existing system independently justifies it.

The debug inspector must make it possible to verify the result immediately.

### 5. Add the persistent capability-test checklist

Keep a compact collapsible checklist visible during gameplay, separate from temporary interaction cards.

It must show:
- `[ ] Restock Service Bar to earn +2 Leverage`
- `[ ] Spend 1 Leverage on an NPC favor`
- `[ ] Spend 2 Leverage for temporary restricted access`
- `[ ] Perform one witnessed unauthorized action`
- `[ ] Perform one UNSEEN unauthorized action`

Mark each item complete only after the corresponding behavior really occurs.

The checklist is engineering scaffolding and may be removed later, but it must remain visible enough for this capability test.

### 6. Preserve existing working behavior

Do not remove or regress:
- exactly 8 named NPCs;
- distinct NPC routines;
- NPC-specific Suspicion values;
- separate Global Exposure;
- Leverage HUD;
- contextual target cards/highlights;
- NPC favor interaction;
- telemetry/debug inspector;
- graphic-noir 3D hotel presentation;
- desktop controls;
- clean restart.

### 7. Do not expand scope

Do not add:
- murder or a full mystery;
- Roles or private Agendas beyond the existing Night Clerk setup;
- Edges, Approaches, Assets, skill trees, or permanent progression;
- multiplayer;
- new floors or locations;
- combat, health, weapons, or enemies;
- mobile controls;
- additional story systems.

The purpose of this update is to finish the capability spike. A successful run must let one player, in one session, visibly complete every checklist item, observe correct witness-specific Suspicion behavior, see the timer advance and anomaly trigger, reach Shift Handoff at five minutes, and then restart into a clean new run.