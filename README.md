# Enablis Discovery Tools

A single-file toolkit for the **Assess** phase of the Enablis service offering. Forms a delivery lead or BA can fill in — no discovery experience required — producing scores, £ cases and owned actions. Three journeys, from a 1–2 day team assessment to a 2–4 week departmental one.

## Structure — three target groups

The toolkit is organised around **who is being assessed**, not around documents.

| Module | Target group | What it holds | Runs alone? |
|---|---|---|---|
| **1 · Team** | The organisation for a small business; a department or team for a large one | AI readiness (14 dimensions, 28 questions, 1–5 stages, DORA-sourced weights, weakest link sets the ceiling) · team skill scan (7 capabilities, required levels scale with the 12-month target) · cohort breakdown · interview log · **codebase review** ([Overwatch](https://github.com/enablis-co/overwatch) — nine stages, twelve dimensions, two report angles) | **Yes — this is the wedge.** Three scans sold as one two-week DL+FDE engagement; `assess.html?m=team` opens it standalone |
| **2 · Workflow** | One workflow, or many — repeat per workflow | Operating model: approvals, systems, data, safeguards, and the run-capability scan (10 jobs that exist the day after go-live) | Needs no portfolio; works with a single workflow |
| **3 · Portfolio** | Multiple workflows / many use cases | Ranking across every use case, wave plan, aggregate business case, programme-level weak spots | Appears automatically at 2+ use cases |

**Use cases sit inside workflows.** Readiness scoring and the £ value model are per use case, because value accrues per use case. The operating model is per workflow, because approvals, roles and systems are shared by everything inside it. That's what makes "one workflow with a few use cases" and "many workflows with many use cases" the same tool at different scales.

**What computes from what:** the team skill scan sets the readiness Skills dimension · the readiness ceiling gates each use case · the workflow's evidence tables rate its signals · the run-capability scan's standing effort feeds each use case's run cost · use-case values aggregate into the portfolio.

## Files

```
index.html          launcher (password gate)
assess.html         the toolkit — team, workflows, use cases, portfolio, outputs
assess.html?m=team  the wedge — team readiness and skills only
journey.html        visual journey map
PLAYBOOK.md         written playbook
tools/              the three previous standalone tools (superseded)
```

## The journey map and playbook

`journey.html` is the visual version — both journeys as a swimlane map (activities · our pod · client people · data needed · tools in use · outputs), with click-through detail per step and an A3 print layout for the wall. It reads the same content as the playbook below.

## The playbook

`PLAYBOOK.md` sets out how the consulting team uses these three tools across the Assess phase — two journeys, **Validate** (~5 days, one workflow) and **Prioritise** (2–4 weeks, a department), with day-by-day and week-by-week activities, the tool touchpoints, and a map from each promised offering output to the tool that produces it. Internal; durations are working assumptions, not client-facing commitments.

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

- **v1.7** — realigned to [`enablis-co/AI-Maturity-Tool`](https://github.com/enablis-co/AI-Maturity-Tool) (requirements v0.4) so the two Enablis assessments score a client the same way. **Dimensions:** 8 → **14** (12 core + 2 that can be marked N/A), using her IDs, groups and DORA-sourced weights — four amplifier dimensions at ×1.5, weights renormalising over whatever is active. Splits our old Technology into *Internal platform quality* (×1.5) and *Version control & change safety* (×1.0), which carried different weights and different actions; adds *Value stream visibility & flow* and *Agentic readiness*, neither of which we had. **Questions:** each dimension now has a **spine** question that sets the level and a **corroborating checklist** that confirms or contradicts it — where they disagree the tool scores the midpoint and flags it, because that disagreement is usually the finding. **Actions:** our 32 inline actions replaced by her library — **A001–A040**, each with sponsor, owner, horizon, effort, the dimensions it also lifts, and an *evidence of completion* line that survives into a re-assessment. **Sequencing** now follows the library's own dependency graph rather than a fixed calendar: the roadmap walks each dimension's transition chain, pulls in prerequisites the client hasn't already outgrown, topologically sorts, and holds back anything gated by a dimension that has to move first (blocking is transitive). **Risk flags** split into unconditional and conditional, per her rubric. Kept ours: the ceiling, cost as a scored core dimension, the £ value model, workflows and use cases, Overwatch, the cohort skills scan, and the `t_integrate` question her model has no home for. Stage names unchanged pending the decision with Catherine — the mapping to hers is now printed on the Engagement tab.
- **v1.6** — changes agreed with Catherine Wicks, grounded in the [DORA 2025 AI Capabilities Model](https://dora.dev/ai/capabilities-model/). Two new dimensions: **Delivery & user focus** (user-centricity, feedback loops, batch size — DORA's finding is that teams *without* a user focus get measurably worse with AI) and **Cost** (what AI costs today, whether it can be attributed, and productivity tools vs building for a workflow — Mark's "nobody wants this without cost"). **Data deepened** from 3 to 5 questions, adding a unified-vs-siloed check and AI-accessible internal data, with ownership and lineage folded into the existing two. Governance's policy question reframed around DORA's insight that ambiguity causes both timid underuse and reckless overuse; Technology's engineering question reframed around version control and rollback. Every question now takes **evidence and a context line**, always visible. Every dimension takes a **narrative** — doing well · to improve · **risk if not fixed** · **risk if they push on anyway** · why it matters — which flows into the report. Actions carry a **rationale** and declare **which other dimensions they lift**. New **radar chart** (current vs target) and a **Worked example** button that loads a complete fictional engagement. Weights renormalised across eight dimensions; DORA's own weightings not yet applied.

- **v1.5** — v1.4 reverted. The launcher offers three named entries again: **AI Readiness** (the wedge — readiness + skills scan + Overwatch, `assess.html?m=team`), the **Full AI Discovery Toolkit** (all three levels: team · workflow · use cases and portfolio, with AI Readiness as its first level), and the **User Journey** map. Same single data model behind all of them.

- **v1.3** — codebase review rebuilt against the real [Overwatch](https://github.com/enablis-co/overwatch) rather than the placeholder. The nine-stage pipeline (recon · explore · plan · propose bespoke · audit · verify · dedupe · synthesize · assemble), the twelve catalogue audit dimensions with their prefixes and Opus floors, per-dimension 0–100 scores with red/amber/green bands transcribed from `report.json`, Planned / Not applicable / **Incomplete** states honouring fail-loud, bespoke dimensions, MoSCoW must-count, branch-and-commit provenance, and a live-secrets flag that generates a same-day rotation action and a do-not-circulate warning. The two report angles are now weighted rollups across the real dimensions — AI readiness leans on AI-assisted engineering, testing, delivery infrastructure and security. Playbook and journey map updated to match, including the correct prerequisites (repo access plus an Overwatch run environment, not "check providers").

- **v1.2** — the wedge becomes a full two-week engagement. Added to the team module: **cohort breakdown** (every capability scored for leaders, practitioners and technical staff separately, producing costable training tracks), an **interview log** that flags any cohort you haven't spoken to, and the **codebase review** — access tracking for repos and check providers, a repository inventory, Overwatch's eight-step tracker with the disprove-your-own-findings gate, and Ground Truth's four-part score deriving two report angles (engineering quality · AI readiness of the codebase), fed as advisory evidence into the Technology and Skills dimensions. Codebase review runs only where the client has their own code; marked not-applicable otherwise and the report says so. Playbook Journey 0 and the journey map rewritten as a two-week, day-by-day engagement. **Step names and the four scoring parts are provisional placeholders** — confirm against the Launch Pad definitions before a client sees a score.

- **v1.1** — stress-tested against the restructure. App: Outputs tab now reachable in wedge mode; the 12-month target starts unset and is required before skill levels mean anything; partly-scored readiness is labelled provisional rather than reporting a confident ceiling; backups and hours moved into light mode (key-person risk no longer false-positives); one addressable-hours model with a two-route sizing cross-check; new **£ value case** export with an assumption register; build-vs-buy rationale captured and carried into the backlog. Docs: playbook and journey map rewritten against the new module/tab names, the two skill scans named and distinguished throughout, and a third journey added — **Ready?**, the 1–2 day team wedge.

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
