# Assets & Synergies

## Purpose

Assets are temporary run-specific build components. They preserve roguelike adaptation even when the player enters with a deliberate persistent Edge loadout.

An Asset may be a physical tool, temporary access right, record, disguise, contact, relationship advantage, piece of equipment, or other contextual capability.

## Design rule

An Asset should create **new choices**, not merely add a passive percentage.

Bad: `+10% investigation speed`.

Better: `Pocket Recorder — conversations you personally hear can be replayed/checked later.`

## Asset tags

Working tags:
- OBSERVATION
- ACCESS
- SOCIAL
- DECEPTION
- LOGISTICS
- RECORDS
- COMMUNICATION
- DISGUISE
- RISK

Tags allow Edges and synergies to reference categories without hard-coding every item pair.

## Hotel prototype pool

1. **Pocket Notebook** — preserves selected observations in an explicit timeline.
2. **Pocket Recorder** — preserves conversations heard by the player.
3. **Staff Radio** — remote communication with eligible staff.
4. **Service Key** — opens staff/service access and selected rooms when policy allows.
5. **Guest Ledger** — official occupancy/check-in record.
6. **Security Camera Access** — review limited camera history or live feeds.
7. **Lost-and-Found Access** — inspect deposited/missing objects and records.
8. **Staff Jacket** — improves plausibility in staff spaces while worn, but may create problems around guests or management.
9. **Disposable Phone** — one private communication channel with reduced linkage to the player's normal identity.
10. **Named Favor** — temporary relationship advantage with a specific NPC; may become a Marker through a qualifying Edge.

## Synergy grammar

Synergies should emerge from one of four structures:

### Edge + Asset
Persistent playstyle changes what a temporary tool can do.

Example: **Corroborate + Pocket Recorder**
Recorded statements can be cross-checked automatically against other known statements/facts.

### Asset + Asset
Two temporary tools unlock a new capability.

Example: **Guest Ledger + Security Camera Access**
Known occupancy can be matched to camera timestamps, surfacing discrepancies without explaining them.

### Edge + state
The player's current risk/social state activates an Edge.

Example: **Daredevil + Exposure ≥ 60**
Optional objectives pay increased Leverage/reward.

### Asset + Role / Location
An Asset becomes stronger or weaker because of what the player is expected to be doing.

Example: **Service Key + Night Clerk**
Some access is legitimate; the same key in the hands of a random guest creates much more Suspicion.

## Prototype synergies

- **Pocket Recorder + Corroborate** → recorded contradictions are surfaced when a second independent source conflicts.
- **Staff Radio + Remember That Thing I Did for You?** → eligible staff Markers/favors can be redeemed remotely.
- **Service Key + Act Natural** → first plausible service-area access during an active duty does not increase Global Exposure.
- **Guest Ledger + Pocket Notebook** → player can compare personally observed room/time facts with official room occupancy.
- **Security Camera Access + Guest Ledger** → identify location-record anomalies without auto-solving the mystery.
- **Staff Jacket + Doppelgänger** → observing another staff routine can temporarily broaden where the player appears to belong.
- **Disposable Phone + Illusionist** → create one alternate plausible explanation/contact trail at a Leverage cost.
- **Lost-and-Found Access + Observer Edge** → identify when an object's claimed timeline conflicts with intake records.

## Acquisition

Assets should be obtained through several routes:
- performing Role duties;
- spending Leverage contextually;
- earning trust/favors;
- discovering location systems;
- optional risky objectives;
- Agenda-specific opportunities;
- Milestone/meta unlocks that add Assets to future run pools.

There should not be a universal fantasy vending machine. Acquisition must make sense in the Location.

## Rarity / availability direction

Do not overcomplicate the prototype with color rarity tiers.

For the full game, prefer **availability classes** over pure rarity:
- Common occupational
- Situational
- Restricted
- Agenda-linked
- High-Stakes-only
- Campaign / Case File-linked

This reinforces fiction and reduces loot-game visual clutter.

## Balance principles

- A strong Asset should often increase Exposure, require Leverage, create an obligation, or be useful only in a narrower context.
- The player should rarely see the same exact Asset package in consecutive runs.
- No Asset or synergy may directly output the hidden solution.
- Synergies should create stories: "I used the radio + Marker to get housekeeping to cover the desk while I checked the camera room," not merely larger numbers.
- Temporary Assets disappear at run end; persistent progression can unlock them into future pools but should not let the player permanently start with an entire solved kit.