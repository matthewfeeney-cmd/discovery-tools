# Working on this project

`assess.html` is the whole application — one self-contained file that runs offline,
no server, no runtime dependencies, and client data never leaves the browser. Those
properties are the product. Don't trade them for tidiness, and don't add a framework,
a build step, or a server.

Before finishing any change:

1. Run `npm test` — it must pass.
2. Generate a sample report and read it. The tests check the numbers; they can't read
   English, and every real bug this tool has had was invisible to a green suite.
3. One change at a time; commit before the next.

Don't change what a report says without showing me the before-and-after wording first.

Test detail is in `test/README.md`. Notes on the rough parts of the code are in the
code review document kept with the project.
