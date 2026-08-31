# Working on this project

## What this project is
A single-file AI readiness assessment tool. **`assess.html` is the whole application.** It must
stay a single self-contained file that runs offline from `file://`, with no server and no external
dependencies at runtime. Client data must never leave the browser. These properties are the
product — never trade them for tidiness.

## Before you finish any change, always
1. Run the whole test suite: **`npm test`**. It must end with exit code 0.
   (That runs, in order: `checks.js`, `checks2.js`, `ladder.js`, the `fuzz.js` structural fuzzer
   at 3000 clients, and `stale.js` — the hostile-state check. All live in `test/`.)
2. Generate a sample report and read it as a client would. The tests check the arithmetic; they
   cannot read English. Prose bugs only show up by reading — every real prose bug this tool has
   had was invisible to a green test suite.
3. Make one change at a time and commit it before starting the next.

## How the tests work
- `test/t.js` loads `assess.html`, runs its script in a fake browser, and exposes the internal
  functions so the other files can call them. Everything `require`s it.
- `npm run test:quick` skips the 3000-client fuzzer for a faster loop; `npm run fuzz` runs only it.
- After changing report wording, regenerate the eight sample reports in `examples/` and eyeball the
  diff — a wording change should be a small, deliberate, readable diff.

## Never
- Add a framework, a build tool that produces anything other than one HTML file, or a server the
  tool depends on.
- Store client engagement data anywhere except the browser, unless I have explicitly asked for it
  in that specific conversation.
- Change what a report says without showing me the before-and-after wording first.

## Known-fragile areas (where bugs have hidden before)
- **The same roadmap action is built in three separate places** (the client report, the on-screen
  roadmap, and the markdown export) and they can drift apart. Prefer a single shared function that
  produces the whole action over editing three copies.
- **Report wording is buried inside the layout code** — long HTML template strings. This is where
  the fiddly prose bugs come from; separating the words from the layout is a standing goal.
- **Reading `S` directly instead of through the helper functions** (`evOf`, `DTGT`, `actWhy`, etc.)
  has caused silent bugs. Prefer the accessors.
Prefer fixing these causes over patching symptoms.
