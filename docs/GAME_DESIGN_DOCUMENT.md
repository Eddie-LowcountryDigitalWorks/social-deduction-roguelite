# Game Design Document — Living Index

This is the canonical high-level index for the project. Detailed systems live in focused documents under `docs/` and should be updated there rather than duplicated here.

## Current design status

**Phase:** Pre-production / capability-spike preparation

**Working title:** Loose Ends (strong working title, not final)

**Genre:** solo-first, non-combat social-deduction roguelite with procedural mystery simulation, persistent buildcraft, and configurable difficulty.

## Accepted direction

- Solo-first design; multiplayer is later R&D.
- No conventional combat requirement.
- Closed social environments with reusable core systems.
- Elevated third-person 3/4 camera is the current preferred presentation.
- Graphic-noir cel-shaded visual direction.
- Darkly humorous and somewhat cruel tone with genuine tension/horror potential.
- Full runs target roughly 25–35 minutes; first complete prototype targets 8–12.
- Truth-first procedural generation: canonical events before evidence/testimony.
- Role and Agenda are separate.
- Approaches are persistent skill-tree families.
- Edges are persistent unlockable/equippable perks.
- Assets are temporary run-specific tools/access/advantages.
- Build synergies combine Edges, Assets, Role, Location, Agenda, and state.
- Leverage is temporary in-run influence; it bends situations but cannot buy truth.
- Individual Suspicion and Global Exposure remain distinct systems.
- Markers are personal NPC obligations rather than another fungible currency.
- Raise the Stakes is the pre-run difficulty/challenge system.
- Milestones reward specific accomplishments and unlock possibilities.
- Broad account mastery track exists; final name is not locked (Acuity / Instinct currently lead).
- Campaign is driven by apparently engineered placements/collisions across unrelated incidents.
- Google Labs Playground is the first prototyping environment, not necessarily the final shipping engine.

## Detailed design authority

### Vision and vocabulary
- `GAME_VISION.md`
- `TERMINOLOGY.md`

### Systems
- `systems/APPROACHES_AND_EDGES.md`
- `systems/ASSETS_AND_SYNERGIES.md`
- `systems/LEVERAGE_EXPOSURE_SUSPICION.md`
- `systems/ROLES_AND_AGENDAS.md`
- `systems/STAKES_AND_MILESTONES.md`
- `systems/TRUTH_AND_EVIDENCE_GENERATION.md`

### Campaign / content
- `campaign/CAMPAIGN_OPTIONS.md`
- `campaign/LOCATIONS.md`

### Production
- `production/MVCR.md`
- `production/ROADMAP.md`
- `production/GOOGLE_PLAYGROUND_PLAN.md`
- `production/PLAYTEST_CRITERIA.md`

### Prompt package
- `prompts/playground-00-capability-spike.md`

## Major unresolved design decisions

1. Final title.
2. Final name for broad account mastery/progression.
3. Campaign truth/endgame: grounded Outcome Market, psychological Witness Problem, speculative Convergence Engine, or hybrid.
4. Exact relationship between account mastery, Edge-point acquisition, and loadout capacity.
5. Exact visibility of Suspicion numbers versus behavioral/UI bands.
6. Whether Leverage can go into debt / create future obligations.
7. Final amount of procedural variation versus authored incident templates.
8. How much self-uncertainty is safe before it feels unfair.
9. Whether/when murderer Agenda enters solo progression.
10. Multiplayer modes and NPC-player ambiguity — explicitly deferred until solo validation.

## Design test

Any proposed feature should answer at least one of these:
- Does it create a better deduction story?
- Does it create a more interesting build?
- Does it create a meaningful risk/reward decision?
- Does it make a Role/Location more distinct?
- Does it improve long-term replay/progression?
- Does it support the campaign mystery without reducing procedural freedom?

If not, it is probably scope rather than design.