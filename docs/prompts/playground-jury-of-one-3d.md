# Google Playground — Jury of One 3D Prototype

Creation settings:
- 3D
- Single player
- No uploaded assets for the first generation

## Prompt

Create a **3D SINGLE-PLAYER procedural courtroom deduction roguelite** with the working title **Jury of One**.

This is a fresh prototype intended to match the core logic of the 2D Jury of One experiment while changing only the presentation to 3D.

The purpose is an A/B comparison: same deduction structure, same case logic, same Leverage/Credibility systems, but rendered as a controlled 3D courtroom experience.

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

Do not create:
- multiplayer;
- co-op;
- PvP;
- player rooms;
- invite links;
- networked player slots;
- matchmaking;
- human-controlled witnesses or jurors.

The player must be able to complete the entire run alone.

## 3D presentation philosophy

Do **not** build a free-roaming courthouse.

Do **not** require the player to walk through doors, hallways, or rooms.

Use a **scene-based 3D presentation** specifically to avoid navigation/collision problems.

The player remains seated or anchored to safe fixed positions.

Use three primary 3D scenes:
1. **Courtroom Juror Seat** — testimony and evidence;
2. **Recess Alcove** — limited optional conversations/review actions;
3. **Jury Room Seat** — deliberation and final vote.

Move between scenes with explicit UI buttons / controlled scene transitions, not physical walking.

The player may rotate the camera slightly or select highlighted people/evidence, but should never need precision movement.

## Art direction

Use stylized **graphic-noir 3D**:
- cel-shaded or illustrated-looking materials;
- strong silhouettes;
- dramatic directional courtroom lighting;
- expressive, slightly exaggerated faces and poses;
- restrained palette with selective accent color;
- dark humor in character presentation without making the case itself slapstick.

Prioritize readable faces, gestures, and evidence over environmental detail.

All interaction UI should be fixed screen-space UI. Avoid floating boxes that overlap characters or menus.

## Run length

Target a complete run of approximately **8–12 minutes**.

Use these phases:
- PHASE 1 — OPENING / CASE BRIEF
- PHASE 2 — TESTIMONY
- PHASE 3 — RECESS / OPTIONAL INVESTIGATION
- PHASE 4 — CLOSING ARGUMENTS
- PHASE 5 — DELIBERATION / VERDICT

## Procedural case truth

At the start of each run, secretly choose or generate one coherent case from a small set of templates such as:
1. theft from an employer;
2. falsified financial records;
3. unauthorized access to a restricted room;
4. deliberate property damage;
5. a framed innocent defendant.

Do not use graphic violence for this prototype.

Generate one internal **ground truth** containing:
- what actually happened;
- whether the defendant is guilty of the charged act;
- who else was involved;
- motive or reason;
- timeline;
- which witnesses know which facts;
- which evidence is reliable;
- which statements are lies, mistakes, omissions, or truthful.

All testimony and evidence must derive from this ground truth.

Do not create impossible contradictions unless explained by:
- deliberate lying;
- faulty memory;
- incomplete knowledge;
- bias;
- misleading presentation;
- evidence tampering where the case supports it.

## Private juror information

At the beginning of the run, Juror #6 receives **one private piece of contextual information** that the rest of the jury does not automatically know.

Examples:
- recognizing a location described by a witness;
- professional knowledge that makes one financial claim questionable;
- knowing a described travel time is implausible;
- recognizing a witness from somewhere else;
- being improperly approached before court;
- knowing one mundane fact that changes how a statement should be interpreted.

The private information must never directly say whether the defendant is guilty.

## AI jurors

Create exactly **5 AI-controlled fellow jurors**.

Each AI juror should have:
- distinct name and visual identity;
- one perspective/background trait;
- initial leaning: Guilty / Unsure / Not Guilty;
- confidence from 0–100;
- one thing they care about most;
- memory of major testimony/evidence;
- ability to change their leaning when shown convincing evidence or contradictions.

Example perspectives:
- detail-oriented accountant;
- skeptical retiree;
- empathetic teacher;
- process-focused engineer;
- impatient small-business owner.

They should disagree honestly and not function as fixed teams.

## Courtroom testimony interaction

Present 3–4 witnesses.

While a witness speaks:
- keep the player seated in the jury box;
- frame the witness clearly with camera focus;
- allow selecting highlighted testimony claims or evidence references;
- show concise subtitles / statement text;
- allow marking a statement as important;
- allow comparing it to existing Notes;
- allow one limited Leverage-based follow-up through the court process when appropriate.

Do not label every lie as `LIE`.

The player must infer contradictions.

Use character animation/gesture only as soft flavor, not as guaranteed lie detection.

## Evidence

Include 4–6 pieces of evidence per run, such as:
- access log;
- receipt;
- photograph;
- schedule;
- security record;
- message transcript;
- financial record;
- recovered object.

When evidence is introduced:
- show a clear 3D exhibit presentation or screen/podium view;
- also add a readable entry to the player's Case File.

Every item must have:
- source;
- time/context;
- literal factual implication;
- hidden reliability state available in debug mode.

Do not automatically explain the final conclusion.

## Leverage

Leverage is an **in-run social/procedural resource**.

Start with **2 Leverage**.

Gain Leverage by:
- correctly identifying a supported contradiction;
- helping clarify a confusing point during jury discussion;
- completing one optional recess task;
- responsibly sharing useful private information at the right time.

Spend Leverage to:
- request one limited follow-up question;
- persuade an AI juror to reconsider one specific piece of evidence;
- request a replay/review of one exhibit;
- get a juror to explain their reasoning;
- extend deliberation briefly.

Leverage must never reveal the correct verdict or hidden truth directly.

## Credibility

Track **Credibility** from 0–100.

Start at 60.

Increase Credibility for:
- citing supported evidence;
- identifying a real contradiction;
- accurately summarizing a witness statement;
- sharing useful private information responsibly.

Decrease Credibility for:
- making unsupported claims;
- repeatedly pushing irrelevant private knowledge;
- falsely accusing a witness of lying;
- misrepresenting evidence.

Low Credibility makes AI jurors less receptive.

High Credibility improves persuasion opportunities but never forces agreement.

## Recess scene

Transition the player to a safe fixed 3D recess alcove or jury waiting area.

Offer exactly **3 optional actions** from a generated set:
- speak privately with one fellow juror;
- review one exhibit;
- organize Notes into a timeline;
- reflect on private information;
- quietly observe a witness or attorney from a distance.

Allow the player to choose only **2 of the 3** before recess ends.

Do not require walking around the environment.

Use clear UI selections / scene cuts.

## Jury Room deliberation

Transition to a seated 3D jury-room scene.

Show the 5 AI jurors around the table.

Display each juror's current broad leaning:
- Guilty;
- Unsure;
- Not Guilty.

Do not reveal hidden internal confidence numbers in normal play.

Allow the player to:
- select a Case Note;
- ask a specific juror to address it;
- compare two pieces of evidence;
- spend Leverage for limited persuasion/review actions;
- hear brief AI juror reasoning;
- call for the vote when ready.

AI jurors should be able to change their mind naturally.

## Push-your-luck decision

During deliberation, once enough evidence has been reviewed, repeatedly offer:
- **Call for the Vote Now**
- **Keep Deliberating**

Continuing may reveal additional reasoning or allow one more comparison, but costs time and may cost Leverage or Credibility if the player keeps pressing weak arguments.

This should create tension around deciding when the case is sufficiently understood.

## Final verdict

The player ultimately votes:
- **GUILTY**
- **NOT GUILTY**

Then selects confidence:
- Low
- Medium
- High

After the vote, reveal a concise post-run breakdown:
- actual ground truth;
- whether the player's verdict matched the supported truth;
- which evidence mattered most;
- which testimony was truthful, mistaken, incomplete, or deceptive;
- how each AI juror voted;
- final Credibility;
- Leverage spent/remaining;
- impact of the player's private information.

A correct verdict with weak reasoning should score less than a correct verdict reached through strong evidence.

A wrong high-confidence verdict should score worse than a cautious wrong verdict.

## Replayability

Vary across runs:
- case template;
- defendant guilt state;
- witness reliability;
- evidence distribution;
- AI juror perspectives;
- private player information;
- juror initial leanings.

## Debug mode

Add a toggleable developer debug panel showing:
- true case ground truth;
- defendant guilt state;
- witness knowledge;
- which claims are true / false / mistaken / omitted;
- evidence reliability;
- each AI juror's current leaning and confidence;
- player Credibility;
- Leverage;
- timer / phase.

Debug mode must not be required for normal play.

## Important constraints

Do not add:
- multiplayer;
- free-roaming movement;
- hallways to navigate;
- physical door interaction;
- combat;
- health;
- weapons;
- crafting;
- cards or board-game-table presentation;
- permanent progression yet;
- skill trees yet;
- graphic murder scenes;
- complex real-world legal procedure.

Keep legal procedure simplified and fictionalized for gameplay clarity.

The purpose of this prototype is to prove that a **controlled 3D scene-based presentation** can support the same procedural deduction loop as the 2D prototype without introducing navigation, collision, or interaction-state problems.
