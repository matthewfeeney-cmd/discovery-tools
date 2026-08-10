# Assess playbook — how the team uses the toolkit

Internal. Two journeys through the Assess phase, mapped to what we sell and to the three tools. Durations here are **internal working assumptions** — we sell on evidence and outcomes, not calendars, so don't print them in client material.

---

## The two journeys at a glance

| | **Journey 1 — Validate (light)** | **Journey 2 — Prioritise (detailed)** |
|---|---|---|
| Buyer question | "Is this idea good — and what's it worth?" | "What's worth doing here, and in what order?" |
| Scope | One workflow, brought by the client | A department or team, mapped workflow by workflow |
| Package | 01 · One workflow, proven | 02 · Pick one, then prove it |
| Internal duration | ~5 working days | 2–4 weeks |
| Pod | Delivery Lead + Forward Deployed AI Engineer (DL covers the value model) | DL + FDE + Commercial BA |
| Client gets | Working prototype · £ value case · go / adjust / stop · workflow-sized op model | Ranked backlog · AI-readiness assessment · build-vs-buy · quantified business case · prototypes of the top workflows |
| Ends in | Build POC on the chosen workflow — the value case becomes the scope | Build POC on the chosen workflow, plus a standing backlog |

---

## Principles that shape both journeys

- **Value first, never pure discovery.** We prototype while we assess. If a week passes with no working artefact, we've drifted into a study.
- **Assess prototypes. Build proves.** The boundary is *data*, not effort. Sample or synthetic data, disposable, days → prototype. Real integrated data → that's a POC, and it's Build's clock and price.
- **Unknowns are findings.** Every tool scores "don't know" as zero rather than blocking. A blank is a question for tomorrow's interview, not a reason to stop.
- **Every engagement ends on a decision**, including an honest stop. Go / adjust / stop is a deliverable, not a formality.

## Who does what

- **Delivery Lead** — owns the engagement and the "so what?". Runs workshops and workflow immersion, owns the readiness assessment, the ranked backlog and the gates.
- **Forward Deployed AI Engineer** — builds the prototypes on real examples; scores data and technology in the readiness assessment; runs the feasibility probes.
- **Commercial BA** — owns the numbers: baselines, the value case, build-vs-buy, the quantified business case. On light engagements the DL covers this at lower depth.

---

# Journey 1 — Validate (light, ~5 days)

One workflow the client already has in mind. The job is to prove it's worth doing and show them something working.

## Day 0 · Free half-day workshop

**Purpose** — download the problem: goals, users, constraints. Qualify honestly.

**Activities** — sponsor and workflow owner in the room. Walk the workflow end to end. Agree what "worth it" would mean.

**Tools**
- **AI Readiness Assessment · light mode** — run the 18-question organisation layer live in the room (20 minutes, on screen, out loud). Then score the one workflow on the use-case layer.

**Why it earns its place** — you leave the room with a stage and a ceiling ("you're at Stage 2, capped by governance"), which is a genuine free insight and qualifies the deal. If the ceiling is Stage 1 on governance and the workflow touches regulated data, you've learned in half a day that Validate is the wrong sale.

**Output** — readiness ceiling; a first-cut value × readiness score for the workflow; a decision on whether to proceed.

## Day 1 · Baseline and immersion

**Purpose** — establish what the work costs today, before anyone gets excited.

**Activities** — DL sits with the people doing the task; shadow real cases. FDE collects 10–20 real examples and gets a sample data extract. Identify the sponsor's success threshold.

**Tools**
- **Value Assessment · sections 1–2** — use case, OKR link, success threshold, baseline (people, % time, volume, time per case, cost). Tag the baseline honestly as measured / estimated / none — if it's "none", shadow the task and measure it yourself this week.

**Output** — a measured or credibly estimated baseline, and the number that would make leadership call this a success.

## Day 2 · First prototype and the operating picture

**Purpose** — something tangible in front of users by end of day; start the "what would it take to run this" conversation.

**Activities** — FDE builds prototype v1 on the real examples. DL interviews whoever owns change, risk and the platform.

**Tools**
- **Mini Op Model · light mode** (~40 min) — process, people and tech signals; complete the **skill scan** with the team lead: ten capabilities, what running this needs versus what they have, who holds each.

**Why it earns its place** — the skill scan surfaces the single-expert problem on day 2 rather than at handover, and the standing-effort total feeds the run cost in the value case.

**Output** — prototype v1 demoed; readiness-to-run signals rated; ownership readiness verdict and key-person risks named.

## Day 3 · The value case

**Purpose** — turn the baseline into a number a CFO can interrogate.

**Activities** — BA (or DL) completes the value model with finance input. FDE iterates the prototype on feedback from day 2.

**Tools**
- **Value Assessment · sections 3–8** — potential value, then realistic value discounted for adoption × effectiveness × integration; costs including the standing effort from the skill scan; sensitivity; the assumption register RAG-tagged.

**Output** — £ potential vs realistic, benefit:cost, payback, steady-state net, and an explicit list of which assumptions are still guesses.

## Day 4 · Assemble and cross-check

**Purpose** — make the three tools agree before a client sees them.

**Activities** — generate all outputs; reconcile them. Rehearse the readout.

**Cross-checks that matter**
- Does the op model's standing effort (hrs/week → FTE) appear in the value case's run cost? It usually doesn't, and the case is optimistic until it does.
- Does the skill scan change the verdict? A GO with four must-own capabilities missing is really an ADJUST with a training plan attached.
- Does the readiness ceiling gate this workflow? If so, say it in the readout rather than letting it surface after contracting.

**Output** — one consistent story across prototype, numbers and operating picture.

## Day 5 · Readout and decision

**Purpose** — a decision, not a document.

**Deliverables**
1. **Working prototype**, demonstrated on their real examples.
2. **£ value case** — the Value Assessment's copied report, with the assumption register visible.
3. **Go / adjust / stop verdict** — recorded in the tool, with the rationale, including the honest case to stop.
4. **Workflow-sized op model** — the Mini Op Model blueprint: who approves it, who runs it, what skills it needs, and the phased action list with owners.

**On GO** — the value case becomes the scope of the Build, which protects the fixed price from drift. The op model's action list becomes the Build's non-technical workstream.

---

# Journey 2 — Prioritise (detailed, 2–4 weeks)

A department with several candidate workflows and no agreed order. The job is a defensible ranking, a business case, and prototypes that sell it.

## Week 0 · Scoping call and free workshop

Agree scope (which department, how many workflows, who we can talk to), name the sponsor, book the interview slots. Run the free half-day workshop as in Journey 1 — but treat the organisation layer as provisional, to be re-scored with evidence in week 1.

## Week 1 · Frame and scan

**Purpose** — set the ambition, get the ceiling right, build the longlist.

**Activities**
- Sponsor session: what do they want to be true in 12 months? This sets the **target stage** — don't assume Stage 5.
- 8–12 structured interviews across the department.
- Longlist 6–12 candidate workflows from what people actually complain about.

**Tools**
- **AI Readiness Assessment · deep mode**
  - Organisation layer re-scored with **evidence and confidence tags** on every answer (confirmed / told / guessed). FDE scores data and technology; DL takes strategy, governance and adoption.
  - **Interview log** — who you spoke to, the pains in their words, tagged to candidates. This becomes the demand signal behind the ranking and the audit trail when someone asks "why this one?"
  - Light-score each longlist candidate (16 questions) to cut it down fast.

**Output** — readiness ceiling with evidence strength; longlist scored and cut to a shortlist of 5–6; interview record.

**Watch for** — a ceiling of Stage 1–2 on governance or adoption. That's a programme-level finding, and it changes the shape of the recommendation: fix the foundation before any use case will land.

## Week 2 · Deepen and test

**Purpose** — replace opinion with evidence on the shortlist.

**Activities**
- Workflow immersion on each shortlisted candidate — sit with the people doing the work.
- BA baselines the top candidates with finance.
- FDE runs feasibility probes.

**Tools**
- **AI Readiness · use-case layer, deep mode** — each of the 16 questions computed from three narrower factual checks (48 in total), so no gut-feel tap carries a score.
- **Step map** per candidate — the 4–8 steps with % of time, and which the AI would touch. This sets how much of the £ the AI can actually reach; it routinely halves an inflated number and sometimes points at a better candidate one step over.
- **Feasibility probe** — two hours per candidate: name the core uncertainty, run ~10 real cases in a model playground, score credible / partial / wrong. Once 5+ are scored the tested result **replaces** the "has this been done before?" guess in the readiness score.
- **Sizing cross-check** — people × hours versus volume × time-per-case. When they disagree by more than 2×, reconcile before quoting anything.

**Output** — evidence-backed scores per candidate, probe verdicts, indicative £ ranges with stated basis, portfolio view showing programme-level weak dimensions.

## Week 3 · Value, shape and build-vs-buy

**Purpose** — turn the top candidates into a business case and prove the shape of the winner.

**Activities**
- FDE builds working prototypes of the top 2–3 workflows on real examples.
- BA runs the full value model on the top 2–3.
- DL shapes the operating model for the likely winner.

**Tools**
- **Value Assessment** — one pass per top candidate: baseline → potential → realistic (adoption × effectiveness × integration) → costs → verdict. Watch the potential-vs-realistic ratio: outside 2–10× and your discounts are probably optimistic.
- **AI Readiness · build-vs-buy block** — named tools that already do this, competitive-edge call, integration depth, data sensitivity → a suggested call with a stated rationale. The offering promises "what to buy, what to build, **and why**"; this is the why.
- **Mini Op Model + skill scan** on the leading candidate — process, people, tech, and the ten capabilities scored required-vs-current with named holders.

**Output** — quantified business case per top candidate; build-vs-buy calls with rationale; prototypes; ownership readiness and key-person risks for the winner.

## Week 4 · Synthesise and play back

**Purpose** — a roadmap the client can act on Monday.

**Activities** — assemble, sanity-check, rehearse, present to leadership.

**Tools — the three outputs, generated not written**
- **Readiness report** — stage per dimension, the ceiling named, weighted potential, target gap.
- **Gap-closure roadmap** — every dimension below target becomes an action, ranked by leverage (does it cap the ceiling? how many use cases does it unblock?) and phased 90 days / 3–6 months / 6–12 months.
- **Ranked backlog** — value × readiness per candidate, £ at stake, buy/build call, verdict, and **which organisation gap gates each one**.
- Plus the **wave plan** (Now / Next / Later) and the use-case action list with owners.

**Deliverables to the client**
1. Ranked opportunity backlog, ready to feed their roadmap.
2. AI-readiness assessment — data, technology and skills scored, with the ceiling and the gap roadmap.
3. Build-vs-buy calls with rationale.
4. Quantified business case — £ numbers to prioritise investment.
5. Working prototypes of the top workflows.

**Exit** — Build POC on the chosen workflow (where readiness allows, this can start in-engagement, still priced and gated as Build), or the roadmap stands alone.

---

## Tool touchpoint map

| Tool | Journey 1 (light) | Journey 2 (detailed) |
|---|---|---|
| **AI Readiness Assessment** | Day 0, light mode: org layer live in the workshop + one use case | Week 1 deep: org layer with evidence, interview log, longlist → shortlist. Week 2: 48 checks, step maps, probes. Week 4: report, gap roadmap, backlog |
| **Value Assessment** | Day 1 baseline, Day 3 full model, Day 5 verdict | Week 2 baselines, Week 3 full model on top 2–3, Week 4 into the business case |
| **Mini Op Model + Skill Scan** | Day 2, light mode (~40 min) | Week 3 on the leading candidate; deep tables if a build is already running |

**Rules of thumb**
- Score the organisation layer **once per client**, not per workflow. It sets the ceiling for everything.
- Run the **skill scan before you promise a handover**. "Can they run it without us?" has a specific answer and it is usually "not yet".
- Use **light mode on day one, always.** Switch to deep only when the output has to survive scrutiny — a board, a procurement process, or a fixed-price scope.
- Export JSON at the end of each engagement day. It's the only backup.

## Where each promised output comes from

| Offering promises | Produced by |
|---|---|
| Working prototype on real examples | FDE, from the examples gathered during immersion |
| £ value case a CFO can defend | Value Assessment — baseline → realistic value → costs, with the assumption register |
| Go / adjust / stop verdict | Value Assessment verdict, cross-checked against the op model and readiness ceiling |
| Ranked opportunity backlog | AI Readiness — ranked backlog output, gated by org readiness |
| AI-readiness assessment (data, technology, skills scored) | AI Readiness — organisation layer scorecard and gap roadmap |
| Build-vs-buy calls, and why | AI Readiness — build-vs-buy block with rationale |
| Quantified business case | Value Assessment across the top candidates, plus indicative ranges from the readiness sizing |
| The mini operating model around it | Mini Op Model — blueprint and phased action list |

## Traps worth naming

- **Sizing without the step map.** People × hours × cost is the *gross* time cost, not the opportunity. Without knowing what share the AI touches, you'll quote a number you can't defend.
- **A GO on top of an unscored skill scan.** The build will land and then sit unowned.
- **Treating the free workshop as a sales meeting.** Run the readiness layer properly and the qualification is a by-product.
- **Deep mode everywhere.** It's for engagements that need to survive scrutiny. Light mode plus honest unknowns beats a half-finished deep assessment.
- **Letting the prototype become a POC.** The moment you're on real integrated data, you're in Build — reprice it.
