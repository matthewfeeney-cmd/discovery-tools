# Enablis Discovery Tools

Three lightweight, single-file tools that support the **Assess** phase of the Enablis service offering. Each is a form a delivery/discovery person can fill in — no discovery experience required — and get a score or a usable output at the end.

## The tools, and where they fit

| # | Tool | Offering stage | Fill-in time | Output |
|---|------|----------------|--------------|--------|
| 1 | **Use Case Discovery Screen** (`tools/discovery-screen.html`) | Assess · Prioritise (light) | ~15 min per candidate workflow | Value /8 + AI-readiness /8 (data · tech · skills), indicative £ at stake, build-vs-buy call, verdict per candidate, **ranked backlog** (copy/paste text) |
| 2 | **Value Assessment Tool** (`tools/value-assessment.html`) | Assess · Validate + Build | ~30–45 min with the workflow owner + finance | £ value case: baseline → PEV → REV (adoption × effectiveness × integration) → costs → benefit:cost, payback, steady-state net → **go / adjust / stop** |
| 3 | **Mini Op Model** (`tools/mini-op-model.html`) | Assess + Build (one workflow) | ~30 min across 2–3 short conversations | Process · people · tech readiness %, blocker list, **one-page op model** |

They chain: screen many workflows (1) → size the winner's £ (2) → prove the path to run it for real (3). Each also works standalone.

**Method notes:** the value logic (potential value → realisable value, discounted for adoption, effectiveness and integration; cashable vs non-cashable; assumption RAGs) and the op-model lenses reflect proven AI value-assessment practice, cut down to the light-touch shape of the Enablis offering — deliberately a screen, not a full transformation blueprint.

## Quick start (reviewers)

1. Open `index.html` in any modern browser (double-click works — no build, no server, no dependencies).
2. Enter the review password (shared separately — check Slack).
3. Click into a tool and try it on a workflow you know.

Everything you type autosaves to **your browser only** (localStorage). `New client` clears a tool; `Export JSON` saves your session to a file; `Import` restores it. `Print / PDF` gives the client-facing output.

## Hosting a shared review copy

Any static host works. Two easy routes:

- **GitHub Pages:** push this repo, enable Pages on `main`, share the URL + password.
- **Netlify:** drag the folder into app.netlify.com/drop. For real protection, add Netlify's built-in password protection (Site settings → Access control) instead of relying on the gate.

## Changing the password

The gate stores a SHA-256 hash in `index.html` (`const HASH=...`). To change it:

```bash
node -e 'console.log(require("crypto").createHash("sha256").update("your-new-password").digest("hex"))'
```

Paste the result into `HASH` in `index.html`.

> **Security note:** the gate is a client-side courtesy lock so casual visitors can't wander in — it is **not** security. Fine for sharing prototype tools with the team; do **not** put real client data on a public deployment. For encrypted client-facing sharing use enablis.co/share.

## Repo layout

```
index.html                    password gate + launcher
tools/discovery-screen.html   tool 1 — Prioritise screen
tools/value-assessment.html   tool 2 — £ value case
tools/mini-op-model.html      tool 3 — op model for one workflow
```

Each tool is fully self-contained (HTML + CSS + JS in one file, no external requests), so they can also be emailed or dropped into the showcase individually.

## Design principles (please hold us to these)

- **Key fields only** — if a field doesn't change a score or the output, it doesn't go in. Add fields only when a real engagement demanded one.
- **Unknowns are findings** — every question has a "don't know" answer that scores zero rather than blocking progress.
- **Output over ceremony** — every tool ends in something you can paste into an email or hand to a client: a ranked backlog, a value case, a one-page op model.
- Deep-dive material (full question batteries, knowledge capture, action inventories) belongs in engagement playbooks, not here.

## Status / changelog

- **v0.2** — Discovery Screen restructured to the service offering (value × AI-readiness with data/tech/skills, £ sizing, build-vs-buy). Stress-test fixes: slider defaults now register (REV no longer £0 untouched), contingency label matches maths, benefit:cost labelling, steady-state net (yr 2+), print auto-generates outputs, partial-score caveats, New client reset, safer delete/copy.
- **v0.1** — initial three tools, decoupled from an earlier combined workbook prototype.

Feedback: #discovery-tools or matthew.feeney@enablis.co
