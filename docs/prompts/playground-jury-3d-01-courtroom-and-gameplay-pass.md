# Playground — Jury of One 3D Prompt 01

Update the existing **Jury of One** 3D prototype. Preserve the working single-player case logic, but substantially improve the courtroom fantasy, visual staging, evidence interaction, deliberation, Leverage economy, time pressure, audio feedback, and UI readability.

This is still a prototype. Do not add permanent progression, skill trees, campaign systems, or multiplayer yet.

## 1. Make it unmistakably a real courtroom

The current build feels like sitting in a generic office. Replace the main testimony scene with a clearly staged courtroom containing visible 3D characters and architecture.

The Courtroom scene must visibly include:
- Judge elevated at the bench;
- bailiff near the judge / courtroom entrance;
- court clerk / reporter area;
- prosecutor table;
- defense attorney table;
- defendant seated with defense counsel;
- witness stand;
- full 6-person jury box including the human player as Juror #6;
- gallery with at least 6–10 low-detail spectator NPCs;
- evidence display / exhibit screen;
- courtroom doors and architectural context visible as scenery only; the player does not physically navigate them.

The camera begins from Juror #6's believable seat in the jury box, not from an office desk.

Other jurors must be physically visible from the player's normal courtroom view when possible.

## 2. Use cinematic courtroom camera language

Keep the player stationary; do not add free-roaming movement.

Use controlled camera cuts / zooms during important moments:
- witness begins testimony -> frame witness stand;
- attorney asks a major question -> briefly frame attorney and witness;
- contradiction is challenged -> close-up on witness reaction;
- exhibit introduced -> focus on evidence display;
- defendant reacts to major testimony -> brief cutaway;
- judge rules / transitions phase -> frame judge;
- juror reaction to major evidence -> brief cut to that juror;
- verdict -> show defendant, attorneys, judge, and jury reactions.

Return to Juror #6's courtroom perspective after each short cinematic cut.

Do not require player camera precision.

## 3. Give characters readable reactions

Add simple but visible facial/body reactions using the animation capability available:
- nervous / evasive;
- confident;
- irritated;
- surprised;
- relieved;
- concerned;
- skeptical juror reaction.

These reactions are soft clues only. They must never automatically prove lying or guilt.

Use body posture, head turns, hand gestures, and facial expression where possible.

## 4. Create truly distinct physical scenes

Use separate 3D environments, not the same generic room with a different modal.

### COURTROOM
Witness testimony, exhibits, objections, judge, attorneys, defendant, jury box, gallery.

### RECESS
A courthouse jury lounge / hallway alcove with benches, vending machine or water cooler, windows, and 2–3 nearby jurors. The player selects limited recess actions here. No free roaming is required; use fixed camera positions and selectable interaction targets.

### JURY DELIBERATION ROOM
A separate enclosed room with one table, evidence board / display, clock, coffee, papers, and all 6 jurors seated around the table.

All 5 AI jurors must be physically present and visually identifiable during deliberation.

Scene transitions should use brief fades / title cards such as `RECESS — 4:18 PM` and `JURY DELIBERATION — 5:02 PM`.

## 5. Add a clear concept of time

Target a run of about 10–12 minutes.

Display a small **Court Clock** and current phase.

Suggested phase budgets:
- Case Brief: ~1 minute
- Testimony: ~4 minutes
- Recess: ~2 minutes
- Closing Arguments: ~1 minute
- Deliberation: ~3–4 minutes

Time should advance as testimony/actions occur.

During recess, the player may choose only 2 optional actions before the recess timer expires.

During deliberation, choosing **Keep Deliberating** consumes meaningful time.

If deliberation time runs very low, warn the player that the foreperson is calling for a vote soon.

Do not make the timer so aggressive that normal reading becomes impossible.

## 6. Reduce text-wall UI

The current game is too text heavy and modal-heavy.

Redesign normal gameplay so the 3D scene remains visible for most of the run.

Requirements:
- dialogue text uses a compact subtitle / lower-third area;
- show no more than 1–3 short sentences at once;
- large menus should appear only when the player explicitly opens Case File, Evidence Inspection, Recess Choice, or Deliberation actions;
- menus should occupy no more screen space than necessary;
- allow the player to close Case File and return immediately to the courtroom view;
- use icons, portraits, timelines, evidence thumbnails, juror leaning indicators, and short labels instead of long paragraphs where possible.

## 7. Add courtroom audio and character voice feedback

Add persistent courtroom ambience:
- quiet room tone;
- paper movement;
- chair movement;
- distant gallery murmurs;
- judge gavel / transition sound;
- evidence presentation cue;
- low dramatic music only at key moments.

If generated spoken dialogue / synthetic character voices are supported, give major testimony and attorney questions simple distinct voices while retaining subtitles.

If full spoken dialogue is not supported, use short voice-like barks / murmurs / reaction sounds and strong subtitles instead.

Do not block gameplay waiting for unavailable voice generation.

## 8. Make evidence something the player actually examines

Do not represent every exhibit as only a paragraph of text.

When evidence is introduced, let the player enter a dedicated **Inspect Exhibit** view.

Create 4–6 visual evidence objects per run such as:
- access-card log;
- receipt;
- security still / photograph;
- handwritten schedule;
- message transcript;
- financial ledger;
- recovered key / object.

For physical objects:
- show a large 3D or illustrated object;
- allow simple rotate / zoom if supported;
- provide 2–4 selectable hotspots.

For documents:
- show the actual document visually;
- allow selecting highlighted fields such as timestamp, signature, account total, room number, or name.

Inspecting a meaningful hotspot adds a concise Case Note.

The player should be able to pin two Case Notes side-by-side to compare them.

## 9. Make contradictions interactive

When the player believes a witness statement conflicts with evidence:
- choose **Challenge Claim**;
- select the specific witness statement;
- select the specific evidence / Case Note that contradicts it;
- submit the comparison.

If the contradiction is genuinely supported:
- gain +1 Leverage;
- gain Credibility;
- show a short reason such as `Supported contradiction: timeline conflict`;
- trigger a visible witness / courtroom reaction.

If unsupported:
- lose Credibility;
- do not gain Leverage;
- show why the challenge was weak without revealing the whole case solution.

Do not provide a generic "this is a lie" button.

## 10. Make Leverage understandable and renewable

Leverage must have visible causes and concrete uses.

Start with **1 Leverage**, not a large unexplained pool.

### Earn Leverage
The player can gain +1 Leverage from:
- proving a supported contradiction;
- completing one optional recess task successfully;
- making an accurate evidence connection during deliberation;
- responsibly revealing useful private juror information at the correct time.

Whenever gained, show a concise toast:
`+1 LEVERAGE — Supported contradiction`

### Spend Leverage
Every Leverage option must display its exact cost and result category before purchase.

Examples:
- `Spend 1 — Request exhibit review`
- `Spend 1 — Ask juror to explain their reasoning`
- `Spend 2 — Request clarification of prior testimony`
- `Spend 1 — Extend deliberation by 30 seconds`

After spending, show exactly what opportunity was created.

Leverage never directly changes a juror's vote and never reveals the correct verdict.

Add a small Help tooltip explaining:
`Leverage = earned procedural/social opportunity. Earn it by reasoning well; spend it to create another chance to learn or persuade.`

## 11. Make Credibility equally clear

Whenever Credibility changes, show the cause:
- `+8 CREDIBILITY — Evidence-backed claim`
- `+10 CREDIBILITY — Correct contradiction`
- `-12 CREDIBILITY — Unsupported accusation`
- `-8 CREDIBILITY — Misrepresented exhibit`

Credibility affects how seriously AI jurors take the player's arguments, but does not force them to agree.

## 12. Implement real jury deliberation

The current deliberation must become an actual evidence-driven conversation with the 5 AI jurors.

In the separate Jury Deliberation Room:
- show all 5 AI jurors around the table;
- show only their broad current leaning: Guilty / Unsure / Not Guilty;
- each juror has a visible personality / evidence priority;
- jurors make short arguments to one another, not only to the player;
- jurors can disagree with each other;
- jurors can change leaning after persuasive evidence discussion.

The player should be able to select a juror and choose one of these actions:
1. `Ask Why` — hear their current reasoning;
2. `Present Evidence` — select one exhibit/Case Note and make an argument;
3. `Compare Evidence` — select two notes and point out a relationship;
4. `Use Private Information` — when relevant;
5. `Spend 1 Leverage — Press for Reconsideration` — only after presenting evidence, never as a magic persuade button.

When evidence is presented, that juror should respond specifically to it according to their personality and existing beliefs.

Example:
A process-focused engineer should react strongly to timestamp/log inconsistencies.
An empathetic teacher may care more about witness reliability and motive.

The player must be able to influence jurors through reasoning, but persuasion should not always succeed.

## 13. Preserve push-your-luck

During deliberation, periodically offer:
- **CALL FOR THE VOTE NOW**
- **KEEP DELIBERATING**

Keeping deliberating consumes time but allows more juror conversations/evidence comparisons.

This choice should matter.

## 14. Improve the verdict sequence

When voting:
- show the jury room vote sequence;
- each AI juror reveals their vote;
- player chooses Guilty / Not Guilty and Low / Medium / High confidence;
- transition back to the courtroom for the verdict reading;
- show visible reactions from judge, defendant, attorneys, jury, and gallery.

Then show the post-trial truth breakdown:
- actual ground truth;
- important evidence;
- misleading / false / mistaken testimony;
- player verdict correctness;
- AI juror final votes;
- final Credibility;
- Leverage earned and spent;
- private information impact;
- reasoning score based on supported evidence connections.

## 15. Preserve what already works

Preserve:
- exactly one human player, Juror #6;
- 5 AI jurors;
- procedural hidden case truth;
- testimony and evidence derived from that truth;
- private juror information;
- Case File;
- Leverage concept;
- Credibility concept;
- five broad trial phases;
- debug view;
- no free-roaming movement;
- no combat.

## 16. Do not expand scope yet

Do not add:
- permanent Edges / skill trees;
- Stakes;
- meta progression;
- campaign story;
- multiplayer;
- open-world courthouse navigation;
- crafting;
- combat;
- graphic violence.

The acceptance target for this update is that the player feels like they are **sitting through and participating in a living courtroom trial**, visually examining evidence, watching people react, using earned Leverage for understandable opportunities, and then physically deliberating with five distinct AI jurors in a separate jury room before returning to court for a verdict.