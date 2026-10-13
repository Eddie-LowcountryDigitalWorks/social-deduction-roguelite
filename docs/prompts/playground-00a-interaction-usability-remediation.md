# Playground Prompt 00A — Interaction & Usability Remediation

## Purpose

Apply this prompt to the existing `Night Shift Protocol` Playground prototype. This is a focused remediation pass for Issue #1. Preserve the existing 3D hotel, 8 NPCs, routines, Suspicion, Exposure, timer, debug panel, and Shift Handoff. Do not add campaign, mystery, combat, multiplayer, permanent progression, Edges, Assets, or unrelated features.

---

## Prompt

Update the existing **Night Shift Protocol** prototype without rebuilding it from scratch. The core simulation is promising, but the current player-facing interaction loop is too unclear to test reliably.

Preserve the existing:
- compact 3D hotel;
- elevated third-person 3/4 camera;
- exactly 8 named NPCs and their independent routines;
- per-NPC Suspicion;
- separate Global Exposure;
- Leverage resource;
- timed anomaly;
- debug inspector;
- Shift Handoff and restart.

Make only the focused changes below.

## 1. Make every interactable obvious

Whenever the player is close enough to interact with an NPC, door, or important object:
- give the target a clear but tasteful outline/highlight;
- show a small interaction icon over or beside the target;
- show a concise contextual prompt near the target, not only in a distant generic UI box;
- include the target's name/type in the prompt.

Examples:
- `E — Talk to Samira Roy`
- `E — Restock Service Bar  (+1 Leverage)`
- `E — Staff Utility Room  [Restricted]`
- `E — Security Office  [Restricted]`

Only the nearest valid target should be selected at one time. It must be visually clear what pressing Interact will affect.

## 2. Add a tiny objective/help panel

At the beginning of the shift, briefly show:
- Move: WASD / arrows
- Interact: E
- Debug: Tab or `
- Current test objective: **Earn Leverage, spend Leverage, and test Suspicion while witnessed.**

Keep a small optional objective tracker on screen:
- [ ] Restock Service Bar to earn +1 Leverage
- [ ] Spend 1 Leverage on an NPC favor
- [ ] Spend 2 Leverage for temporary restricted access
- [ ] Perform one witnessed unauthorized action

This is test scaffolding for the prototype, not final-game UI.

## 3. Make earning Leverage unmistakable

The Lobby Service Bar must be clearly marked as an interactable task.

When the player interacts with it:
- show a short 1–2 second restock/progress action;
- complete the duty once per run;
- grant **+1 Leverage**;
- show a clear toast such as `Favor completed — +1 Leverage`;
- update the HUD immediately;
- mark the objective tracker item complete.

Do not require the player to guess that this object grants Leverage.

## 4. Make spending 1 Leverage unmistakable

At least two cooperative NPCs must offer a visible contextual conversation option:

`Spend 1 Leverage — Ask a favor`

The option should remain visible even if the player has insufficient Leverage, but be disabled and show the required cost.

When used successfully:
- subtract exactly 1 Leverage;
- provide a small contextual benefit such as a non-solution piece of information OR reduce that NPC's Suspicion by 10;
- show a clear toast explaining what happened;
- mark the objective tracker item complete.

Leverage must not reveal a culprit or solve a mystery.

## 5. Make spending 2 Leverage on access unmistakable

The Staff Utility Room and Security Office must clearly communicate their access state.

When the player interacts with a restricted door, show a small contextual choice panel:

- `Leave`
- `Spend 2 Leverage — Request Temporary Access`
- `Enter Without Permission` (only when physically possible for this test)

If the player has fewer than 2 Leverage, the temporary-access option remains visible but disabled with the cost shown.

If temporary access is purchased:
- subtract exactly 2 Leverage;
- grant access for a short visible duration, such as 60 seconds;
- show `Temporary Access Granted`;
- lawful entry during that period must not generate Suspicion;
- mark the objective tracker item complete.

## 6. Add explicit suspicious test actions

The player currently lacks a reliable way to test Suspicion. Add deliberate, non-combat unauthorized actions purely for the capability test.

At a restricted door, `Enter Without Permission` should:
- allow the player to cross the restriction without paying Leverage;
- count as an unauthorized action;
- generate Suspicion only for NPCs who actually witness the action;
- increase Global Exposure by the smaller amount already defined for the prototype.

Also allow one clearly inappropriate guest-room interaction, such as attempting to enter a guest room without authorization, to serve as another suspicious test action.

Normal Night Clerk actions must remain non-suspicious.

## 7. Show witness feedback during this prototype

For testing only, whenever a suspicious action is observed, show brief feedback such as:

`WITNESSED BY: Samira Roy  (+18 Suspicion, +6 Exposure)`

If nobody sees it, show:

`UNSEEN — no witness Suspicion gained`

This feedback is deliberately explicit because this is an engineering capability spike. It can become subtler in the finished game.

The debug inspector must continue showing each NPC's individual Suspicion so the result can be verified.

## 8. Preserve cause and effect

Do not make all NPCs suspicious when one NPC sees something.

Example test:
- Samira sees the player enter Security without permission;
- Samira's Suspicion rises;
- an NPC in a guest room or another location who could not see the action should remain unchanged;
- Global Exposure may rise separately.

Temporary authorized access must not count as unauthorized entry.

## 9. Do not expand scope

Do not add:
- murder or a full mystery;
- weapons, health, attacks, or enemies;
- inventory loot systems;
- Edges, Assets, skill trees, or permanent progression;
- multiplayer;
- extra floors or a larger hotel;
- new campaign/story systems;
- mobile controls.

The goal of this update is simple: **a player must immediately understand what can be interacted with, how Leverage is earned, how Leverage is spent, how a suspicious action is intentionally performed, who witnessed it, and how that changes individual Suspicion versus Global Exposure.**
