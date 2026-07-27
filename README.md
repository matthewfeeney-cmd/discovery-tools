# Enablis Discovery Tools

Three lightweight, single-file tools that support the **Assess** phase of the Enablis service offering. Each is a form a delivery/discovery person can fill in — no discovery experience required — and get a score or a usable output at the end.

## The tools, and where they fit

| # | Tool | Offering stage | Fill-in time | Output |
|---|------|----------------|--------------|--------|
| 1 | **Use Case Discovery Screen** (`tools/discovery-screen.html`) | Assess · Prioritise | Light: ~20 min per candidate · Deep: ~1 week per department | Light: Value /8 + AI-readiness /24 (fit · data · tech · skills), £ at stake, build-vs-buy, **ranked backlog**. Deep adds: evidence + confidence per score, workflow step map, 10-case feasibility probe, cross-checked sizing, build-vs-buy rationale, interview/pain log, wave plan, portfolio view with programme-level gaps |
| 2 | **Value Assessment Tool** (`tools/value-assessment.html`) | Assess · Validate + Build | ~30–45 min with the workflow owner + finance | £ value case: baseline → PEV → REV (adoption × effectiveness × integration) → costs → benefit:cost, payback, steady-state net → **go / adjust / stop** |
| 3 | **Mini Op Model** (`tools/mini-op-model.html`) | Assess + Build (one workflow) | Light: ~30 min · Deep: 3–5 days alongside the build | Light: process · people · tech readiness %, blocker list, **one-page op model**. Deep adds: approvals map, named-roles table, system & data inventories, POC-vs-production log, safeguards register, measurement plan — compiled into a **beyond-POC blueprint with an owned action list** |

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

## Deep modes — how depth is earned

Both the Discovery Screen and the Mini Op Model have a **light/deep switch**. The principle: deep mode changes **how the scores are made**, not how much gets written down.

- **Discovery Screen deep:** each of the 16 questions is computed from three narrower, factual checks (48 in all) — one gut-feel tap can never carry a score. The feasibility probe's tested result (10 real cases in a playground) **replaces** the "has this been done before?" guess in the readiness score. The step map decides what share of the task's time the AI actually touches — and that coverage drives the £ opportunity. Evidence tags per question report how much of the ranking is confirmed vs guessed.
- **Mini Op Model deep:** the evidence tables (approvals, roles, systems, data sources) **rate the nine signals automatically** — every row you record recalculates readiness. Manual taps override; tapping again hands the rating back to the tables. Every gap compiles into an action list with owners.

Light answers carry over as fallback when you switch; nothing is lost. Use light on day one, deep when the output has to survive scrutiny.

## Status / changelog

- **v0.6** — deep modes rebuilt for accuracy, not documentation: computed scores from 48 granular checks (Discovery), probe result feeds the score, step-map coverage drives the £ range, and table-derived signal ratings with manual override (Op Model).

- **v0.5** — deep modes. Discovery Screen: evidence + confidence tags on every score (backlog reports "% evidenced"), workflow step map with missed-heavy-step flag, 10-case feasibility probe with verdict, volume×time cross-check on sizing with 25–50% capture range, build-vs-buy rationale with suggested call, interview & pain-point log (demand signal), dependency field, wave plan (Now/Next/Later) and portfolio view with programme-level gap flags. Mini Op Model: approvals map with calendar/late-veto flags, named-roles table with expert-hours reality check, system & data source inventories (sensitivity flagged), POC-vs-production difference log, safeguards register (propose-review-apply default), measurement & trust plan, and an auto-compiled action list where every gap has an owner.
- **v0.4** — plain-language pass across all three tools (no method acronyms in headings, "fully loaded" and "sinks" explained, FTE spelled out); Discovery Screen adds client/screened-by/date and a per-candidate contact ("who knows this workflow best"), and its backlog now ends with actionable next steps (prototype → value case → op model, early-POC note); Value Assessment adds team/users, relabels headcount equivalent, and the GO verdict states the value case becomes the Build scope; Mini Op Model intro tied to Build's "mini operating model" promise.
- **v0.3** — AI-readiness made robust: four dimensions (fit · data · tech · skills) × three checks each, scored /24 with per-dimension sub-scores; verdicts now name the weakest dimension to fix; ranking weights value and readiness evenly; v0.2 sessions migrate automatically.
- **v0.2** — Discovery Screen restructured to the service offering (value × AI-readiness with data/tech/skills, £ sizing, build-vs-buy). Stress-test fixes: slider defaults now register (REV no longer £0 untouched), contingency label matches maths, benefit:cost labelling, steady-state net (yr 2+), print auto-generates outputs, partial-score caveats, New client reset, safer delete/copy.
- **v0.1** — initial three tools, decoupled from an earlier combined workbook prototype.

Feedback: #discovery-tools or matthew.feeney@enablis.co
