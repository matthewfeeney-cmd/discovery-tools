# Enablis Discovery Tools

Three lightweight, single-file tools that support the **Assess** phase of the Enablis service offering. Each is a form a delivery/discovery person can fill in — no discovery experience required — and get a score or a usable output at the end.

## The tools, and where they fit

| # | Tool | Offering stage | Fill-in time | Output |
|---|------|----------------|--------------|--------|
| 1 | **AI Readiness Assessment** (`tools/discovery-screen.html`) | Assess · Prioritise | Org layer ~20 min once · then ~20 min per candidate (Deep: ~1 week) | Light: Value /8 + AI-readiness /24 (fit · data · tech · skills), £ at stake, build-vs-buy, **ranked backlog**. Deep adds: evidence + confidence per score, workflow step map, 10-case feasibility probe, cross-checked sizing, build-vs-buy rationale, interview/pain log, wave plan, portfolio view with programme-level gaps |
| 2 | **Value Assessment Tool** (`tools/value-assessment.html`) | Assess · Validate + Build | ~30–45 min with the workflow owner + finance | £ value case: baseline → PEV → REV (adoption × effectiveness × integration) → costs → benefit:cost, payback, steady-state net → **go / adjust / stop** |
| 3 | **Mini Op Model + Skill Scan** (`tools/mini-op-model.html`) | Assess + Build (one workflow) | Light: ~40 min · Deep: 3–5 days alongside the build | Light: process · people · tech readiness %, blocker list, **one-page op model**. Deep adds: approvals map, named-roles table, system & data inventories, POC-vs-production log, safeguards register, measurement plan — compiled into a **beyond-POC blueprint with an owned action list** |

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

- **v0.9** — **skill scan** added to the Mini Op Model, built on the required-vs-current shape used in workforce planning. Ten capabilities in four bands (Run · Assure · Improve · Sustain) — the jobs that exist the day after go-live — each with an editable required level, a current level on a 0–4 scale (none / aware / with help / independent / can teach), and a named holder. Seven are flagged **must own**: the capabilities the client needs if they're to run it without us. Scoring: coverage %, **ownership readiness** (weakest link across the must-own set — the OWN gate), key-person risk (covered but only one person), and standing effort in hrs/week → FTE, which feeds the Value Assessment's run cost. The People signals are now **computed from the scan** rather than hand-rated. Deep mode adds backups, hours and a **Four Bs route per gap** (build / buy / borrow / bot). Output gains a skills heatmap and a "can they run it without us?" verdict, with transfer actions folded into the existing phased action list.
- **v0.8** — the Discovery Screen becomes the **AI Readiness Assessment**, benchmarked against how the major firms structure these. Split into two layers: an organisation layer (18 questions across six dimensions — strategy & sponsorship, data, technology, skills, governance & risk, adoption & change — each scored on a named 1–5 stage scale: Exploring → Experimenting → Operationalising → Scaling → AI-native), and the existing per-workflow use-case layer with the org-level questions removed. Scoring is now **constraint-based**: readiness is the *lowest* dimension (the weakest link sets the ceiling), reported against a weighted potential using **10/20/70** (tooling / data & technology / people, process & change). A 12-month **target stage** captures the client's ambition, so every dimension below target becomes a gap. Gaps are ranked by leverage (does it cap the ceiling, how many use cases does it unblock, how big is the step) and phased into 90 days / 3–6 months / 6–12 months with a concrete next action per stage. Each use case now shows which organisation gap gates it. New outputs: readiness report, gap-closure roadmap, gated backlog.
- **v0.7** — outputs turned into roadmap actions. Discovery Screen: new Roadmap section — every weak answer becomes an owned, tagged action (ASK / MEASURE / TEST / DECIDE) with the check that triggered it; grouped Now (start the winners: prototype, £ case, op model) / Next (the specific fixes that promote a Big bet, with the promotion threshold) / Later (parked, with reason) / programme-level fixes; copyable as a checklist. Mini Op Model: actions now phased (Now — during the POC → Before MVP → Before pilot/go-live) in both modes; light mode generates actions from the signals, deep mode from the tables (table-rated signals defer to their specific row actions — no duplicates); new Copy actions button produces a paste-ready checklist.
- **v0.6** — deep modes rebuilt for accuracy, not documentation: computed scores from 48 granular checks (Discovery), probe result feeds the score, step-map coverage drives the £ range, and table-derived signal ratings with manual override (Op Model).

- **v0.5** — deep modes. Discovery Screen: evidence + confidence tags on every score (backlog reports "% evidenced"), workflow step map with missed-heavy-step flag, 10-case feasibility probe with verdict, volume×time cross-check on sizing with 25–50% capture range, build-vs-buy rationale with suggested call, interview & pain-point log (demand signal), dependency field, wave plan (Now/Next/Later) and portfolio view with programme-level gap flags. Mini Op Model: approvals map with calendar/late-veto flags, named-roles table with expert-hours reality check, system & data source inventories (sensitivity flagged), POC-vs-production difference log, safeguards register (propose-review-apply default), measurement & trust plan, and an auto-compiled action list where every gap has an owner.
- **v0.4** — plain-language pass across all three tools (no method acronyms in headings, "fully loaded" and "sinks" explained, FTE spelled out); Discovery Screen adds client/screened-by/date and a per-candidate contact ("who knows this workflow best"), and its backlog now ends with actionable next steps (prototype → value case → op model, early-POC note); Value Assessment adds team/users, relabels headcount equivalent, and the GO verdict states the value case becomes the Build scope; Mini Op Model intro tied to Build's "mini operating model" promise.
- **v0.3** — AI-readiness made robust: four dimensions (fit · data · tech · skills) × three checks each, scored /24 with per-dimension sub-scores; verdicts now name the weakest dimension to fix; ranking weights value and readiness evenly; v0.2 sessions migrate automatically.
- **v0.2** — Discovery Screen restructured to the service offering (value × AI-readiness with data/tech/skills, £ sizing, build-vs-buy). Stress-test fixes: slider defaults now register (REV no longer £0 untouched), contingency label matches maths, benefit:cost labelling, steady-state net (yr 2+), print auto-generates outputs, partial-score caveats, New client reset, safer delete/copy.
- **v0.1** — initial three tools, decoupled from an earlier combined workbook prototype.

Feedback: #discovery-tools or matthew.feeney@enablis.co
