# Playground Prompt 00C — Navigation, Interaction UI, and Anomaly Clarity

Paste the prompt below into the existing **Night Shift Protocol** Playground game. This is intended to be the final capability-spike correction pass before moving to the Hotel MVP.

---

Update the existing **Night Shift Protocol** capability prototype. Preserve the working simulation systems, but fix three remaining blocker usability problems: unreliable room entry/exit, overlapping/floating interaction UI, and an anomaly that occurs without a sufficiently clear player-facing consequence.

Do not add new game systems yet.

## 1. Make every room and restricted-area transition reliable

The player must never become trapped inside a room or unable to use a doorway from either side.

For the Staff Utility Room, Security Office, Room 105, and any other enterable test room:
- use a generous interaction/door trigger zone on both sides of the doorway;
- when the player is outside, the nearest-door interaction must reliably offer the existing access choices;
- after the player enters, provide an obvious interaction target on the inside labeled `E — Exit to Corridor`;
- entering or exiting must place the player at a safe navigation anchor with enough clearance from walls, furniture, door geometry, and NPCs;
- never place the player inside collision geometry;
- do not require precise camera positioning to activate the exit;
- if physical swinging-door collision is unreliable, prioritize robust gameplay over realism: use a short door-open transition or controlled doorway/teleport-to-anchor transition rather than allowing the player to become stuck;
- authorized vs unauthorized entry rules still apply exactly as already implemented;
- exiting a room must never itself generate Suspicion or Exposure.

Test each enterable room in both directions before considering this update complete.

## 2. Replace overlapping world-space boxes with one clean interaction presentation

The current floating labels/cards can sit too far forward, overlap one another, overlap NPC names, or cover other text.

Change interaction presentation so that:
- only the **single nearest valid interactable target** receives the active interaction highlight;
- show at most one active contextual interaction prompt/card at a time;
- anchor the main interaction prompt to a consistent screen-space location near the lower center of the game view, not as a large floating box projected far in front of the world;
- the prompt should remain concise, such as `E — Talk to Samira Roy` or `E — Security Office [Restricted]`;
- important objects may keep a subtle icon/outline in the world, but remove large persistent floating text boxes from distant objects;
- NPC name labels should remain readable and must not stack on top of interaction cards;
- temporary toasts such as Leverage gains or witness feedback must use a separate consistent screen-space notification area and must not overlap the capability checklist;
- modal choice panels for NPC favors or restricted doors should appear centered and readable, with the rest of the world visually de-emphasized while the modal is open;
- the debug inspector may remain technical, but when open it must not cover the active door/favor choice buttons.

The objective is that at any moment the player can answer immediately: **What will happen if I press E right now?**

## 3. Make the 2:00 anomaly unmistakable and behaviorally meaningful

The existing Arthur Vance keycard anomaly triggers at about 2:00, but the player may not be near the front desk when it happens and currently cannot clearly tell what changed.

When the anomaly triggers:
- show a prominent but brief banner: `INCIDENT: KEYCARD DISPUTE — Arthur Vance needs assistance at the Front Desk`;
- play a distinct non-combat notification sound if supported;
- add a temporary incident objective to the HUD: `Go to the Front Desk and speak with Arthur Vance`;
- add a subtle directional/waypoint marker toward the Front Desk while this objective is active;
- Arthur Vance must visibly break from his normal routine, travel to the Front Desk, and remain there waiting for assistance;
- at least one relevant hotel employee should also temporarily react or redirect toward the desk so the world visibly changes;
- the debug inspector must show Arthur's routine/state as an anomaly-specific state such as `KEYCARD_DISPUTE_AT_DESK` rather than his normal patrol/routine state;
- when the player reaches Arthur, provide a simple contextual interaction that acknowledges the incident and resolves the temporary event;
- after resolution, clear the incident objective/waypoint and return affected NPCs to valid normal routines;
- if the player ignores the incident, let it remain active for a reasonable test window so it is still observable even if the player was inside another room when it began.

This does not need to become a mystery yet. The purpose is to prove that timed incidents can interrupt routine, communicate clearly to the player, and then restore normal simulation behavior.

## 4. Preserve the existing capability systems

Do not remove or regress:
- exactly 8 named NPCs;
- independent NPC routines;
- the advancing 5-minute shift timer;
- the 2-minute anomaly trigger timing;
- Shift Handoff at 5:00;
- clean restart;
- Leverage earning and spending;
- the restricted-door three-choice menu;
- 60-second temporary authorized access;
- Enter Without Permission;
- witness-specific Suspicion;
- separate Global Exposure;
- WITNESSED BY / UNSEEN feedback;
- the persistent capability checklist;
- the debug inspector;
- desktop controls;
- the current compact 3D hotel and elevated 3/4 camera.

## 5. Do not expand scope

Do not add:
- murder or a full mystery;
- private Agendas;
- Approaches, Edges, Assets, skill trees, or permanent progression;
- multiplayer;
- additional hotel floors or locations;
- combat, weapons, enemies, or health;
- mobile controls;
- a larger campaign or story.

## Acceptance target

This capability spike is complete when a player can:
1. enter and exit every test room repeatedly without becoming stuck;
2. always identify the single currently selected interactable without overlapping UI;
3. see the 2:00 incident even when away from the front desk;
4. observe Arthur Vance and at least one relevant NPC visibly change routine because of that incident;
5. travel to the incident, interact with Arthur, resolve it, and see normal routines resume;
6. retain all previously working Leverage, Suspicion, Exposure, timer, Shift Handoff, checklist, and restart behavior.

Prioritize robust navigation, clear cause-and-effect, and readable UI over additional visual detail.