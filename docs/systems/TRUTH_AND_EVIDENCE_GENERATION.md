# Truth & Evidence Generation

## Core rule

The game generates **what actually happened first**. Evidence, testimony, records, observations, lies, mistakes, and misleading coincidences are derived afterward.

This prevents mysteries from being assembled as disconnected random clues and gives every conclusion a causal history.

## Run-generation layers

### 1. Cast
Generate/select named NPCs with:
- Role;
- schedule/routine;
- relationships;
- relevant traits;
- goals;
- secrets;
- access rights;
- knowledge boundaries.

### 2. Relationship graph
Create meaningful links:
- family;
- coworkers;
- debts;
- romantic ties;
- rivals;
- prior contact;
- strangers;
- hidden affiliations.

Relationships should affect opportunity, motive, testimony, and willingness to cooperate.

### 3. Central incident truth
Choose an incident template and assign participants.

Create a canonical event timeline such as:

`23:20 — Mara argues with Daniel`

`23:31 — Daniel enters Room 412`

`23:47 — Victor uses service corridor`

`00:08 — central incident occurs`

`00:13 — Victor exits service corridor`

### 4. Unrelated schemes/noise
Generate at least one independent secret or objective that can produce suspicious behavior.

Examples:
- affair;
- theft unrelated to incident;
- debt meeting;
- secret job interview;
- prohibited access for an innocent reason;
- employee covering a mistake;
- guest using a false name for privacy rather than crime.

### 5. Observability
Determine which events could be perceived by:
- player;
- each NPC;
- cameras;
- logs/records;
- physical traces;
- location systems.

An event that has no observer may still create physical/system evidence if causally appropriate.

### 6. Knowledge graph
For every relevant fact, record:
- who knows it;
- how they know it;
- whether they remember it precisely;
- whether they understand its significance;
- whether they are willing to disclose it.

### 7. Statements
NPC testimony derives from knowledge plus motive.

A statement may be:
- truthful and precise;
- truthful but incomplete;
- mistaken;
- intentionally misleading;
- a lie about an unrelated secret;
- a lie central to the incident.

**Lie ≠ guilt.**

### 8. Records/evidence
Generate only evidence supported by the canonical truth and systems.

Examples:
- key/access logs;
- guest ledger;
- ticket/seat records;
- camera timestamps;
- service requests;
- item location/history;
- schedule deviations.

### 9. Player briefing
The briefing has provenance just like other information.

Most early runs can treat it as reliable. Later Agendas/Stakes may introduce:
- outdated data;
- false assumptions;
- manipulated source;
- incomplete context;
- intentional framing.

The journal should be able to represent source and certainty rather than treating all discovered text as objective truth.

## Certainty model

Working information states:
- **Observed** — personally witnessed or directly measured.
- **Recorded** — supported by a system/document; records can still be manipulated under advanced rules.
- **Reported** — provided by an NPC/source.
- **Corroborated** — supported independently by multiple sources.
- **Contradicted** — conflicts with another known fact/source.
- **Inferred** — player/system inference, not direct evidence.

The game should avoid converting these labels into an automatic solution score wherever possible.

## Solvability constraints

A central incident should satisfy:
1. There is a canonical answer/history.
2. Enough evidence can exist for a careful player to form a justified conclusion.
3. No single default clue always solves the incident.
4. Some evidence may be inaccessible depending on build/choices, requiring alternative paths.
5. False or unrelated suspicious behavior cannot make the canonical truth logically impossible to recover.
6. High Stakes may make certainty harder, but should not make success depend purely on guessing.

## Procedural validation

Eventually every generated run should be machine-checkable before play:
- canonical timeline contains no impossible location/time conflicts unless intentionally supported;
- required participants have plausible access/opportunity;
- knowledge does not precede observation/source;
- evidence derives from actual events;
- at least one viable evidence path exists for the intended Resolution;
- unrelated schemes do not overwrite required incident evidence;
- Agenda win conditions are simultaneously possible unless the scenario explicitly creates conflict.

This validation is important if procedural generation grows beyond hand-authored templates.

## Design target

The player should leave a run able to say:

> "I was wrong because I believed Thomas's lie was about the incident, but he was actually hiding an affair. The key record and bartender timeline pointed somewhere else."

That is a successful procedural mystery story.