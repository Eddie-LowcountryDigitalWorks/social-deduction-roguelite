# Google Playground — Jury of One 2D Prototype

Creation settings:
- 2D
- Single player
- No uploaded assets for the first generation

## Prompt

Create a **2D SINGLE-PLAYER procedural courtroom deduction roguelite** with the working title **Jury of One**.

This is a fresh prototype. It should test whether a short replayable mystery/deduction run can work primarily through testimony, evidence, private information, AI jurors, Leverage, uncertainty, and a final verdict.

## Critical player-mode requirement

There is exactly **ONE human-controlled player**.

The human player is **Juror #6**.

Every other participant is AI-controlled:
- judge;
- prosecutor;
- defense attorney;
- witnesses;
- defendant;
- court staff;
- 5 fellow jurors.

Do not require another human player to start or complete the game.

Do not create:
- human player lobbies;
- invite links;
- matchmaking;
- required co-op;
- PvP;
- additional human-controlled jurors.

**Fallback requirement:** if the platform still creates a multiplayer wrapper despite the Single player creation setting, automatically fill every other slot with AI juror bots and let the lone human host start immediately. Never block the run waiting for another human.

## Presentation

Use a stylized **2D graphic-noir courtroom presentation** with darkly humorous character exaggeration and tense dramatic lighting.

Do not require free-roaming movement.

Use a clear scene-based interface with three primary scenes:
1. **Courtroom** — testimony, objections, exhibits, observation;
2. **Recess** — limited conversations and optional information gathering;
3. **Jury Room** — evidence review, discussion, and final vote.

All important UI should be fixed screen-space UI with no overlapping floating boxes.

Suggested layout during testimony:
- witness portrait / stand in the center;
- judge and attorneys visible;
- evidence/exhibit area;
- fellow-juror status strip;
- private Notes panel;
- Leverage meter;
- remaining trial time / phase indicator.

## Run length

Target a complete run of approximately **8–12 minutes**.

Use these phases:
- PHASE 1 — OPENING / CASE BRIEF
- PHASE 2 — TESTIMONY
- PHASE 3 — RECESS / OPTIONAL INVESTIGATION
- PHASE 4 — CLOSING ARGUMENTS
- PHASE 5 — DELIBERATION / VERDICT

## Procedural case truth

At the beginning of each run, secretly choose or generate one coherent case from a small set of templates such as:
1. theft from an employer;
2. falsified financial records;
3. unauthorized access to a restricted room;
4. deliberate property damage;
5. a framed innocent defendant.

Do not use graphic violence for this prototype.

The game must generate one internal **ground truth** containing:
- what actually happened;
- whether the defendant is guilty of the charged act;
- who else was involved;
- motive or reason;
- timeline;
- which witnesses know which facts;
- which evidence is reliable;
- which statements are lies, mistakes, omissions, or truthful.

All testimony and evidence must derive from this ground truth.

Do not create impossible contradictions unless they are explained by:
- deliberate lying;
- faulty memory;
- incomplete knowledge;
- bias;
- misleading presentation;
- evidence tampering where the selected case supports it.

## Private juror information

At the start of each run, Juror #6 receives **one private piece of contextual information** that the rest of the jury does not automatically know.

Examples:
- the player recognizes the location mentioned by a witness;
- the player has professional knowledge that makes one financial claim suspicious;
- the player recognizes that a described travel time is implausible;
- the player has seen one witness somewhere before;
- someone improperly approached the player before court;
- the player knows a specific ordinary detail that changes how one statement should be interpreted.

This private information must not directly say whether the defendant is guilty.

It should create uncertainty and force the player to decide whether, when, and how to use it.

## AI jurors

Create exactly **5 AI-controlled fellow jurors**.

Each AI juror should have:
- a distinct name and visual identity;
- one perspective/bias or background trait;
- an initial leaning: Guilty / Unsure / Not Guilty;
- confidence from 0–100;
- one thing they care about most when evaluating a case;
- memory of major testimony/evidence;
- the ability to change their leaning when shown persuasive evidence or contradictions.

Examples of juror perspectives:
- detail-oriented accountant;
- skeptical retiree;
- empathetic teacher;
- process-focused engineer;
- impatient small-business owner.

These are perspectives, not fixed alignment or morality.

AI jurors may disagree honestly.

## Testimony system

Present 3–4 witnesses per run.

Each witness should provide short testimony broken into several claims.

The player can:
- listen;
- mark a statement as important;
- compare it to existing Notes;
- spend Leverage for one limited follow-up opportunity during appropriate moments;
- notice a contradiction when supported by evidence or private knowledge.

Do not let the game simply label every lie as `LIE`.

The player must infer contradictions from information.

## Evidence

Include 4–6 pieces of evidence per run, such as:
- access log;
- receipt;
- photograph;
- schedule;
- security record;
- message transcript;
- financial record;
- object recovered from a location.

Every piece of evidence must have:
- source;
- time/context;
- what it literally establishes;
- reliability status known internally by the debug system.

Add discovered evidence and testimony to a **Case File** / Notes interface.

Do not automatically explain the final conclusion.

## Leverage

Leverage is an **in-run resource representing social capital, credibility, favors, and procedural influence**.

Start with **2 Leverage**.

Gain Leverage by:
- correctly identifying a supported contradiction;
- helping clarify a confusing point during jury discussion;
- completing one optional juror task during recess;
- responsibly sharing useful private information at an appropriate time.

Spend Leverage to:
- ask one limited follow-up question through the court process;
- persuade an AI juror to reconsider one specific piece of evidence;
- request that the jury review one exhibit again;
- get one AI juror to reveal the reasoning behind their current leaning;
- extend deliberation briefly instead of forcing an immediate vote.

Leverage must never reveal the correct verdict or the hidden truth directly.

## Doubt / Exposure equivalent

For Jury of One, do not reuse Hotel Exposure as a crime meter.

Instead track **Credibility** from 0–100 for the player.

The player begins at 60 Credibility.

Credibility changes based on how the player behaves:
- citing supported evidence: increase;
- making claims unsupported by the Case File: decrease;
- repeatedly pushing irrelevant private knowledge: decrease;
- catching a real contradiction: increase;
- falsely accusing a witness of lying: decrease.

Low Credibility makes other jurors less receptive to persuasion.

High Credibility makes Leverage actions more effective but never guarantees agreement.

## Recess

Include one short recess before closing arguments.

During recess, offer exactly **3 optional actions**, from a generated set such as:
- speak privately with one fellow juror;
- review one exhibit again;
- organize Notes into a timeline;
- reflect on the player's private information;
- observe a witness or attorney from a distance without interacting improperly.

The player may choose only **2 of the 3** actions before recess ends.

This creates a push-your-luck / opportunity-cost decision.

## Deliberation

In the Jury Room:
- show all 5 AI jurors and their current leaning, but not hidden certainty calculations;
- allow evidence-based discussion;
- allow the player to select a Case Note and ask another juror to address it;
- use Leverage for limited persuasion/review actions;
- allow jurors to change opinions naturally.

The player's goal is not necessarily to make everyone agree with them.

The goal is to reach the best-supported verdict based on the evidence.

## Final verdict

The human player must ultimately vote:
- **GUILTY**
- **NOT GUILTY**

Also ask the player for a confidence level:
- Low
- Medium
- High

Then reveal a concise post-run breakdown:
- actual ground truth;
- whether the player's verdict matched the supported truth;
- which evidence mattered most;
- which testimony was truthful, mistaken, incomplete, or deceptive;
- how each AI juror voted;
- final player Credibility;
- Leverage spent/remaining;
- private information impact.

A correct verdict with weak reasoning should score less than a correct verdict supported by strong evidence.

A wrong verdict reached with high confidence should be penalized more than a cautious wrong verdict.

## Push-your-luck decision

During deliberation, once enough evidence has been reviewed, present a recurring choice:
- **Call for the Vote Now**
- **Keep Deliberating**

Continuing deliberation may reveal more reasoning from AI jurors or allow another evidence comparison, but:
- costs trial time;
- may consume Leverage;
- may lower Credibility if the player keeps pressing unsupported claims.

This should create genuine tension about when the player knows enough.

## Replayability

For each new run, vary:
- case template;
- actual culprit/guilt state;
- witness reliability;
- evidence distribution;
- AI juror perspectives;
- player private information;
- initial juror leanings.

The same evidence combination should not always imply the same answer across all case templates.

## Debug mode

Add a toggleable developer debug panel showing:
- true case ground truth;
- defendant guilt state;
- each witness's actual knowledge;
- which testimony claims are true / false / mistaken / omitted;
- evidence reliability;
- each AI juror's current leaning and confidence;
- player Credibility;
- Leverage;
- timer / phase.

Debug mode is for development only and should not be required for normal play.

## Important constraints

Do not add:
- combat;
- health;
- weapons;
- free-roaming map navigation;
- crafting;
- cards or a board-game table presentation;
- permanent skill trees yet;
- meta progression yet;
- graphic murder scenes;
- large legal-procedure simulation.

Keep legal procedure intentionally simplified and fictionalized for game clarity.

The purpose of this prototype is to prove that a short solo run can create satisfying deduction from coherent hidden truth, conflicting testimony, private information, AI juror perspectives, Leverage, Credibility, and a final verdict.
