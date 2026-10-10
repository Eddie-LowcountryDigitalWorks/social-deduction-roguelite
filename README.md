# Social Deduction Roguelite

Public pre-production repository for a solo-first, non-combat social-deduction roguelite. **Loose Ends** is only a working title.

## High concept

Enter closed social environments with an ordinary public **Role** and a private **Agenda**. Perform believable duties, observe people, pursue objectives, collect and spend **Leverage**, manage individual **Suspicion** and global **Exposure**, develop a temporary run build from **Assets**, and use a persistent **Approach / Edge** loadout to shape how you operate.

Every run is generated from an underlying truth before clues are derived from it. Everyone may have something to hide; suspicious behavior does not imply guilt, and even the player's briefing may not be completely reliable.

The game is designed around repeatable runs, permanent progression, configurable pre-run **Stakes**, Milestones, multiple locations, and a larger campaign mystery connecting apparently unrelated incidents.

## Design pillars

1. **No conventional combat required.** Tension comes from information, time, access, trust, deception, obligations, and consequences.
2. **Truth first, evidence second.** The simulation generates what actually happened, then derives testimony, records, observations, lies, mistakes, and noise.
3. **Everyone has a reason to behave suspiciously.** Lies and secrets are not equivalent to guilt.
4. **Buildcraft matters.** Persistent Edges shape a playstyle; temporary Assets and synergies make each run adapt and diverge.
5. **Leverage bends situations, never buys truth.** Players can create opportunities, not purchase the answer.
6. **Push your luck.** Resolve with incomplete certainty or keep digging while time, Stakes, Suspicion, and Exposure worsen.
7. **Progression expands possibility rather than raw power.** New Edges, Assets, Roles, Agendas, incidents, modifiers, and locations deepen future runs.
8. **Darkly humorous until suddenly it is not.** The intended tone supports absurd social situations, cruelty, paranoia, and genuine tension.

## Initial location roadmap

1. Hotel — access, routines, rooms, keys, staff duties, dawn resolution.
2. Bullet train — linear geography, moving population, timed station departures.
3. Estate — relationships, inheritance, invitations, social events.
4. Airplane — confinement, manifests, seat assignments, turbulence and routine restrictions.
5. Prison — strict schedules, favors, alliances, contraband, institutional roles.
6. Courthouse / Jury — restricted information, private juror context, deliberation and verdict.

Additional locations and multiplayer modes are intentionally deferred until the solo simulation proves compelling.

## Development strategy

Google Labs Playground is the first prototyping environment. The design remains runtime-agnostic so a successful prototype can later move to exported web code, Unity / Unity Spark, or another production engine.

The first implementation target is a **Hotel capability spike**, followed by a **Minimum Viable Complete Run (MVCR)** that proves the entire loop: start → duties → incident → build/economy → escalation → resolution → meta reward → desire for another run.

See `docs/` for the working design authority.