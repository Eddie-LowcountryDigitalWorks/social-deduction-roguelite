# Playground 2D Hotel Prompt 00A — Force True Single-Player Runtime

Update the existing **Nocturne Desk** 2D hotel prototype. Preserve its current 2D noir hotel layout, NPC routines, clues, Leverage, Suspicion, Exposure, Case Notes, debug suite, and deduction loop.

The current build was intended to be single player, but the published game incorrectly launches as a multiplayer room with invite slots. Correct this so the game is a true single-player experience.

## 1. Remove multiplayer completely

The runtime must have exactly **one human-controlled player**: the Night Clerk.

Remove or disable all multiplayer-only behavior:
- no room code;
- no invite link;
- no player lobby;
- no 1/4 or other player-count display;
- no waiting for other human players;
- no networked player slots;
- no human-controlled guest/staff roles;
- no requirement for another player to start or complete the game.

The game must launch directly into the solo game after the player presses Play.

## 2. All other people are AI-controlled NPCs

Every guest and employee in the hotel must be controlled by the simulation, not by remote human players.

Keep exactly 6 named hotel NPCs:
- 3 guests;
- 1 concierge;
- 1 maintenance worker;
- 1 security employee.

Each must continue to:
- follow an independent routine;
- have private knowledge/secrets;
- provide testimony according to what they know;
- track individual Suspicion toward the player;
- react to the player's actions according to the existing systems.

The player should never need another human participant for the mystery to function.

## 3. Preserve the solo mystery loop

The single human player must be able to complete the full run alone:
- perform Night Clerk duties;
- earn and spend Leverage;
- observe AI NPC routines;
- inspect rooms/records;
- gather Clues;
- review Case Notes;
- compare testimony;
- manage Exposure;
- reach the Resolution/Indictment step;
- accuse an NPC or decline to accuse when evidence is insufficient;
- receive an end-of-run outcome.

Do not simplify the deduction systems merely to remove multiplayer.

## 4. Preserve development/debug support

Keep the existing debug panel showing:
- NPC locations/routines;
- NPC Suspicion;
- NPC secrets;
- NPC incident knowledge;
- the ground-truth incident solution;
- Leverage;
- Exposure;
- timer/phase.

This debug information is for development only and must not require multiplayer.

## 5. Correct game metadata if possible

The game should be presented as:
- **Single player**;
- **2D**;
- noir social-deduction / mystery / adventure or puzzle-adventure;

Do not classify or present it as a multiplayer room-based game.

If genre metadata must be chosen, prefer **Mystery**, **Puzzle**, **Adventure**, or **Social deduction** over **Word puzzle**.

## 6. Do not expand scope

Do not add:
- multiplayer bots masquerading as human player slots;
- co-op;
- PvP;
- matchmaking;
- new locations;
- combat;
- permanent progression;
- skill trees;
- additional incident templates beyond the current prototype;
- 3D navigation.

The goal of this update is only to make **Nocturne Desk** function exactly as originally intended: one human Night Clerk playing a complete mystery run against a hotel populated entirely by AI-controlled NPCs.