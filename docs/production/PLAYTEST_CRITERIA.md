# Playtest Criteria

## Principle

A prototype passes only if it proves player-facing behavior, not merely that features exist.

## Capability Spike — pass criteria

The first Playground spike passes if all are true:

1. Player movement and elevated 3/4 camera are readable and controllable.
2. Eight NPCs remain individually distinguishable by appearance/name/behavior.
3. NPCs follow simple routines without obvious constant collisions or freezing.
4. Player can interact contextually with NPCs and key objects.
5. At least one timed event occurs reliably.
6. Each NPC can maintain a separate Suspicion state toward the player.
7. Global Exposure changes independently from a single NPC's Suspicion.
8. Leverage can be earned and spent on at least two contextual interactions.
9. HUD makes current Leverage and Exposure understandable without covering the playfield.
10. Game reaches a clean end state and can restart without broken state.

### Fail / investigate conditions
- all NPCs visibly move in identical patterns;
- player can trivially identify event-critical NPCs from presentation alone;
- social state resets incorrectly when scenes/areas change;
- Leverage behaves as generic coins rather than contextual influence;
- Suspicion is global rather than per-NPC;
- camera prevents reading who could have witnessed an action;
- routine behavior is too chaotic to establish a baseline.

## Hotel MVP — experiential criteria

A tester should be able to answer yes to most of these:

- I understood what my normal Night Clerk duties were.
- I noticed at least one NPC routine before the central incident mattered.
- I had a reason to leave the desk and a reason to return.
- I formed a theory about at least one character.
- Someone lied or acted suspiciously for a reason that was not simply "they did it."
- I intentionally spent Leverage because I valued the opportunity it created.
- I understood why a person became suspicious of me.
- I changed behavior because my Exposure was rising.
- I wanted to inspect one more lead before Resolution.

## MVCR — experiential criteria

A successful complete run should produce:

1. **Theory** — player forms an interpretation of events.
2. **Surprise** — at least one initial assumption is challenged.
3. **Build identity** — Edge/Asset combination changes available tactics.
4. **Risk choice** — player deliberately chooses to resolve or keep digging.
5. **Causality** — success/failure is understandable after the fact.
6. **Persistent reward** — player sees a meaningful unlock/progression result.
7. **Replay desire** — player wants another Agenda, incident, Asset combination, or Milestone attempt.

## Mystery fairness questions

After a run ask:
- Was the correct history actually recoverable?
- Which facts were essential?
- Could at least two different builds obtain enough information?
- Did any red herring become logically indistinguishable from the truth?
- Did the game hide something the player character obviously should have known?
- Did any UI element accidentally reveal the culprit/Agenda?
- Did the player feel tricked by fair misdirection or cheated by missing information?

## Buildcraft questions

- Did equipped Edges meaningfully alter decisions?
- Did temporary Assets cause adaptation?
- Did a synergy create a new option rather than just a bigger number?
- Was there a dominant always-correct Asset/Edge?
- Did the player pivot from the intended pre-run Approach because of what they found?
- Could the player explain their build in a sentence after the run?

Example successful answer:
> "I was a Fixer who used the staff radio and favors to get other people to cover my job while I investigated."

## Economy questions

- Did Leverage feel scarce enough to create choices?
- Was earning it connected to meaningful behavior?
- Were Leverage prices understandable?
- Did the player hoard it because no spend felt worthwhile?
- Did any spend effectively purchase the answer?
- Did local Suspicion and Global Exposure feel different in practice?
- Did high Exposure create interesting pressure rather than only punishment?

## Timing targets

Capability spike: 5–8 minutes.

Hotel MVP: 6–10 minutes.

MVCR: 8–12 minutes.

Vertical slice Hotel: 15–20 minutes.

Full game: generally 25–35 minutes, with location-specific variation.

## Evidence capture

For each major Playground iteration record:
- prompt/change request;
- build date/version or exported snapshot;
- what was tested;
- what worked;
- reproducible failures;
- gameplay duration;
- decisions made from the evidence;
- next focused modification prompt.

Do not preserve features merely because they took effort to generate.