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
| Enablis pod | Delivery Lead + Forward Deployed AI Engineer (DL covers the value model) | DL + FDE + Commercial BA |
| Client time needed | ~8–10 person-hours total | ~30–40 person-hours across the department |
| Client gets | Working prototype · £ value case · go / adjust / stop · workflow-sized op model | Ranked backlog · AI-readiness assessment · build-vs-buy · quantified business case · prototypes of the top workflows |
| Ends in | Build POC on the chosen workflow — the value case becomes the scope | Build POC on the chosen workflow, plus a standing backlog |

---

## Principles that shape both journeys

- **Value first, never pure discovery.** We prototype while we assess. If a week passes with no working artefact, we've drifted into a study.
- **Assess prototypes. Build proves.** The boundary is *data*, not effort. Sample or synthetic data, disposable, days → prototype. Real integrated data → that's a POC, and it's Build's clock and price.
- **Unknowns are findings.** Every tool scores "don't know" as zero rather than blocking. A blank is a question for tomorrow's interview, not a reason to stop.
- **Ask for the last example, not the policy.** "What's your approval process?" gets you a diagram. "Walk me through the last system that went live — who signed what, and when?" gets you the truth.
- **Every engagement ends on a decision**, including an honest stop.

---

## Who you need — and what for

### The Enablis pod

| Role | Owns | Present for |
|---|---|---|
| **Delivery Lead** | The engagement and the "so what?". Workshops, workflow immersion, readiness assessment, ranked backlog, the gates. | Everything |
| **Forward Deployed AI Engineer** | Prototypes on real examples; scores data and technology in the readiness assessment; runs feasibility probes. | Day 0 onwards; heaviest days 2–4 / weeks 2–3 |
| **Commercial BA** | Baselines, value case, build-vs-buy, quantified business case. On light engagements the DL covers this at lower depth. | Journey 2 throughout; Journey 1 day 1 and 3 if available |

### Client-side people, and what each one unlocks

| Who | What only they can give you | Time to ask for |
|---|---|---|
| **Executive sponsor** | Ambition and target stage, budget reality, what "worth it" means, the success threshold | 60 min up front, 60 min at readout |
| **Workflow owner / team lead** | How the work really happens, volumes, exceptions, who's good at it | 90 min + access to their team |
| **The people doing the task** | The truth. Time per case, workarounds, what they'd never trust a machine with | 2–3 hrs shadowing, 3–4 people |
| **Finance / FP&A** | Fully-loaded cost per head, cost centre view, whether a saving is cashable | 30 min |
| **Data owner** | Whether you can have the data, and what state it's in | 45 min |
| **Platform / architecture lead** | Where AI can run, integration reality, approved tooling | 45 min |
| **Security / risk / DPO** | The route to a yes, and the hard stops | 45 min |
| **Change lead / PMO** | Whether change sticks here, past post-implementation reviews | 30 min |
| **HR / L&D** | Training capacity, existing AI licences and usage, salary bands | 30 min |

If you can't get security and the data owner in the first week, say so at the readout — an assessment that never spoke to them has a hole in it.

---

## The advance data request

Send this when the engagement is confirmed, not on day 1. Give the fallback in the same email so a "we don't have that" doesn't stall you.

| Ask for | Feeds | If they don't have it |
|---|---|---|
| Headcount on the workflow, and rough % of their time | Baseline, value case | Team lead's estimate, then sanity-check by shadowing |
| Volume of cases per year (system export or report) | Baseline, sizing cross-check | Count a week manually and annualise; mark as estimated |
| Fully-loaded cost per head, or salary band | Value case | Salary × 1.3 as the working assumption — say so in the assumption register |
| 15–30 real worked examples with outcomes (anonymised) | Prototype, feasibility probe, test set | Ask the team to screenshot or export 20 from last month, spanning easy / hard / awkward |
| Sample data extract (anonymised, non-integrated) | Prototype | Synthetic data built from the worked examples — never delay the prototype waiting for an extract |
| Error / rework / complaint rate | Value case | Quality log, complaints data, or the team's own estimate |
| List of systems the workflow touches | Tech readiness, op model | Whiteboard it during immersion |
| AI policy / acceptable-use guidance, if any | Governance dimension | Ask what staff are allowed to paste into a chatbot today — the answer *is* the finding |
| The approval trail for the last system that went live | Process signals, approvals map | Ask the person who took it live to talk you through it |
| Post-implementation review of a recent change | Adoption dimension | Ask "is that system used the way you intended?" and listen for the hesitation |
| Existing AI licence counts and usage stats | Skills dimension | Ask IT how many Copilot/ChatGPT seats are deployed and how many are active |

**Rule:** never let a missing artefact stop the work. Every tool scores "don't know" as zero and flags it — that's a finding you present, not a blocker you wait on.

---

# Journey 1 — Validate (light, ~5 days)

One workflow the client already has in mind. Prove it's worth doing and show them something working.

## Day 0 · Free half-day workshop

**In the room** — DL + FDE · sponsor, workflow owner, 1–2 people who do the task. IT or security if you can get them for the last 30 minutes.

**Data you need today** — none. This session *generates* the first data.

**Activities**
- Download the problem: goals, users, constraints. Walk the workflow end to end on a whiteboard.
- Run the **AI Readiness organisation layer live on screen** — 18 questions, ~20 minutes, out loud. Asking these in the room (rather than sending a survey) is what makes it feel like an assessment rather than a form.
- Score the one workflow on the use-case layer.
- Agree what "worth it" means and who owns the answer.

**How to get the answers**
- Strategy and budget → sponsor, directly. Ask *"how did the last AI spend get approved?"*
- Governance → *"what are your staff allowed to paste into ChatGPT today?"* The hesitation tells you the stage.
- Adoption → *"think of the last new system — is it used the way you intended?"*
- Data and tech → whoever's in the room; mark them **guessed** and confirm in week/day 1.

**Tool** — AI Readiness Assessment, light mode.

**Output** — readiness ceiling with the capping dimension named; first-cut value × readiness for the workflow; a go/no-go on the engagement itself.

**Watch for** — a Stage 1 governance ceiling plus regulated data. You've learned in half a day that Validate is the wrong sale, and saying so wins more trust than proceeding.

## Day 1 · Baseline and immersion

**In the room** — DL + BA (or DL alone) · the people doing the task, the team lead. Finance for 30 minutes. FDE is with the data owner.

**Data you need**

| Item | Source | How to get it |
|---|---|---|
| Volume of cases | System export | Ask the team lead to run their standard report; if none, count a representative week |
| Time per case | Observation | Shadow 5–8 real cases with a stopwatch. Don't ask — time it |
| % of the team's week on this task | Team lead + shadowing | Cross-check the lead's estimate against what you saw |
| Fully-loaded cost per head | Finance or HR | Ask for the band; fall back to salary × 1.3 |
| Error / rework rate and its cost | Quality log, complaints, finance | If untracked, ask the team how often work comes back and what it costs to fix |
| 15–30 worked examples | The team | Ask for a spread: a few typical, a few harder, a couple genuinely awkward |
| Sample data extract | Data owner | Anonymised, non-integrated. Synthetic from the examples if it'll take more than a day |

**Activities** — shadow the work; harvest examples; get the sponsor's success threshold in a number, not a direction.

**Tool** — Value Assessment, sections 1–2. Tag the baseline honestly: measured / estimated / none. If "none", you've just found the most important gap in the engagement.

**Output** — a defensible baseline and the number that would make leadership call this a success.

## Day 2 · First prototype and the operating picture

**In the room** — FDE heads-down building. DL with: whoever owns change and release, risk or compliance, IT security, the team lead.

**Data you need**

| Item | Source | How to get it |
|---|---|---|
| The approval route to production | Change/release owner | *"If this proved itself tomorrow, what would have to happen for it to run for real? Walk me through every approval, in order."* |
| What evidence each approver needs | Each approver | Ask what the last system had to show them |
| Who could veto late | Security, legal, works council | Ask the sponsor who could stop this in month three |
| Systems the workflow touches, and connector state | Platform lead | Ask which have APIs and what the last integration took |
| The ten capabilities: who holds each, at what level | Team lead + the individuals | Ask *"who would fix this if it broke on a Tuesday?"* and *"who checks whether the answer is right?"* |
| Hours per week each capability would take | Team lead | Estimate together; refine during the build |

**Activities** — prototype v1 demoed to real users by end of day. Structured interviews for process, people and tech.

**Tools** — Mini Op Model, light mode (~40 min) including the **skill scan**: ten capabilities, required vs current, named holders.

**Output** — prototype v1; readiness-to-run signals; ownership readiness verdict and key-person risks named on day 2 rather than at handover.

## Day 3 · The value case

**In the room** — BA (or DL) + finance, 45 minutes. FDE iterating the prototype with users.

**Data you need** — yesterday's baseline plus: how much of the task time AI could plausibly remove (start from the prototype's behaviour, not a benchmark); licence and platform costs (vendor pricing or our estimate); build effort (our estimate); run cost (**take the hrs/week straight from the skill scan**).

**How to get the adoption, effectiveness and integration discounts** — these are judgement calls, but ground them: adoption from what the team said on day 2 about trust; effectiveness from how the prototype actually performed on the awkward examples; integration from the platform lead's connector answers.

**Tool** — Value Assessment, sections 3–8.

**Output** — potential vs realistic £, benefit:cost, payback, steady-state net, and an assumption register showing what's still a guess.

## Day 4 · Assemble and cross-check

**In the room** — the pod, no client.

**Cross-checks that matter**
- Does the op model's standing effort appear in the value case's run cost? Usually it doesn't, and the case is optimistic until it does.
- Does the skill scan change the verdict? A GO with four must-own capabilities missing is an ADJUST with a training plan attached.
- Does the readiness ceiling gate this workflow? Say it in the readout, not after contracting.
- Do the two sizing routes agree — people × hours versus volume × time per case? More than 2× apart means one of them is wrong.

**Output** — one consistent story across prototype, numbers and operating picture; rehearsed.

## Day 5 · Readout and decision

**In the room** — sponsor, workflow owner, finance, IT. 90 minutes.

**Deliverables**
1. **Working prototype**, demonstrated on their real examples.
2. **£ value case** — the copied report, assumption register visible.
3. **Go / adjust / stop verdict**, with rationale — including the honest case to stop.
4. **Workflow-sized op model** — who approves it, who runs it, what skills it needs, plus the phased action list with owners.

**On GO** — the value case becomes the Build scope, which protects the fixed price from drift. The op model's action list becomes the Build's non-technical workstream.

---

# Journey 2 — Prioritise (detailed, 2–4 weeks)

A department with several candidate workflows and no agreed order.

## Week 0 · Scoping and the free workshop

**Activities** — agree scope (which department, how many workflows, who we can talk to), name the sponsor, **book every interview slot now** — access is the single biggest schedule risk. Send the advance data request. Run the free half-day workshop as in Journey 1, treating the organisation scores as provisional.

## Week 1 · Frame and scan

**In the room this week** — sponsor (60 min), 8–12 interviewees across the department (45 min each), data owner, platform lead, security, change lead, HR.

**Split** — DL takes strategy, governance, adoption. FDE takes data and technology. BA sits in on anything with a number in it.

**Data you need**

| Item | Source | How to get it |
|---|---|---|
| The 12-month ambition | Sponsor | *"What do you want to be true in 12 months?"* — this sets the target stage. Don't assume Stage 5 |
| Pain points across the department | Interviews | Ask what wastes their week; log verbatim, tag to candidates |
| Longlist of candidate workflows | Interviews + team leads | Six to twelve; take what people complain about, not what leadership proposes |
| Approved AI services / cloud tenancy | Platform lead | Ask for the approved software list |
| Data landscape for the department | Data owner | Ask where the top three workflows' data lives and who signs off access |
| AI policy, approval routes, past DPIAs | Risk / DPO | Ask for the last one completed |
| Post-implementation reviews | PMO / change lead | Two recent ones tell you more about adoption than any survey |
| Licence deployment and usage | IT / HR | Seats deployed vs seats active |

**Tools** — AI Readiness, deep mode: organisation layer re-scored with **evidence and confidence tags** on every answer; **interview log** with pains tagged to candidates; light-score the longlist to cut it fast.

**Output** — readiness ceiling with evidence strength; longlist cut to a shortlist of 5–6; interview record that answers "why this one?"

**Watch for** — a Stage 1–2 ceiling on governance or adoption. That's a programme-level finding that changes the recommendation's shape: fix the foundation or no use case will land.

## Week 2 · Deepen and test

**In the room** — the people doing each shortlisted workflow (2–3 hrs each), their team leads, finance, data owner again.

**Data you need per shortlisted candidate**

| Item | Source | How to get it |
|---|---|---|
| The 4–8 workflow steps and % of time each | Immersion | Whiteboard with the people doing it; agree the percentages out loud |
| Volume, time per case, headcount, cost | System exports + shadowing + finance | Both sizing routes, so the cross-check works |
| 10 real cases for the probe | The team | A few typical, a few harder, a couple awkward — real material, not tidied |
| Data access reality | Data owner | Ask directly for access and note whether the answer is yes, slow or no |
| Systems and integration effort | Platform lead | Read-only extract vs write-back into core records changes everything |
| Who'd champion it, who'd check it, who'd own it | Team lead | Names, not roles |

**Activities** — workflow immersion; BA baselines the top candidates; **FDE runs a two-hour feasibility probe per candidate**: name the core uncertainty, run ~10 real cases in a model playground, score credible / partial / wrong.

**Tools** — AI Readiness use-case layer in deep mode (48 factual checks), step maps, probes, sizing cross-check.

**Output** — evidence-backed scores, probe verdicts that replace the precedent guess, indicative £ ranges with a stated basis, portfolio view showing programme-level weak dimensions.

## Week 3 · Value, shape and build-vs-buy

**In the room** — finance (2 × 45 min), the winning workflow's team lead and experts, platform lead, security.

**Data you need**

| Item | Source | How to get it |
|---|---|---|
| Confirmed baselines for the top 2–3 | Finance + team | Get finance to say the numbers are fair — that's what makes the case defensible |
| Named tools that already do this | FDE desk research | Search the category properly; "none found" is a valid, useful answer |
| Competitive-edge call | Sponsor | *"Is this workflow something you do differently from competitors?"* |
| Licence and platform pricing | Vendors / our estimates | Include the 12-month price-rise risk |
| Skill scan for the leading candidate | Team lead + individuals | The ten capabilities, with named holders and backups |
| Standing hours per capability | Team lead | Feeds the run cost, which is otherwise guessed |

**Activities** — FDE builds prototypes of the top 2–3 on real examples; BA runs the full value model on each; DL runs the Mini Op Model and skill scan on the leading candidate.

**Tools** — Value Assessment (one pass per candidate — watch that potential-vs-realistic stays inside 2–10×); AI Readiness build-vs-buy block (the *why*, not just the call); Mini Op Model + skill scan.

**Output** — quantified business case per top candidate; build-vs-buy with rationale; prototypes; ownership readiness and key-person risks for the winner.

## Week 4 · Synthesise and play back

**In the room** — pod only for three days; leadership for the 2-hour playback (sponsor, department head, IT, finance, risk).

**Data you need** — nothing new. If you're still collecting in week 4, the scope was too wide.

**Activities** — generate the outputs, reconcile them against each other, pressure-test the ranking with the sponsor **before** the playback (no surprises in the room), rehearse.

**Deliverables**
1. Ranked opportunity backlog, ready to feed their roadmap — with which organisation gap gates each candidate.
2. AI-readiness assessment — data, technology and skills scored, ceiling named, gap-closure roadmap phased 90 days / 3–6 months / 6–12 months.
3. Build-vs-buy calls with rationale.
4. Quantified business case.
5. Working prototypes of the top workflows.

**Exit** — Build POC on the chosen workflow (where readiness allows this can start in-engagement, still priced and gated as Build), or the roadmap stands alone.

---

## Tool touchpoint map

| Tool | Journey 1 (light) | Journey 2 (detailed) |
|---|---|---|
| **AI Readiness Assessment** | Day 0, light: org layer live in the workshop + one use case | Week 1 deep: org layer with evidence, interview log, longlist → shortlist. Week 2: 48 checks, step maps, probes. Week 4: report, gap roadmap, backlog |
| **Value Assessment** | Day 1 baseline, Day 3 full model, Day 5 verdict | Week 2 baselines, Week 3 full model on top 2–3, Week 4 into the business case |
| **Mini Op Model + Skill Scan** | Day 2, light (~40 min) | Week 3 on the leading candidate; deep tables once a build is running |

**Rules of thumb**
- Score the organisation layer **once per client**, not per workflow.
- Run the **skill scan before you promise a handover**. "Can they run it without us?" has a specific answer, usually "not yet".
- **Light mode on day one, always.** Deep only when the output must survive a board, procurement, or a fixed-price scope.
- Export JSON at the end of each engagement day. It's the only backup.

## Where each promised output comes from

| Offering promises | Produced by |
|---|---|
| Working prototype on real examples | FDE, from the examples gathered during immersion |
| £ value case a CFO can defend | Value Assessment — baseline → realistic value → costs, with the assumption register |
| Go / adjust / stop verdict | Value Assessment verdict, cross-checked against op model and readiness ceiling |
| Ranked opportunity backlog | AI Readiness — ranked backlog, gated by org readiness |
| AI-readiness assessment (data, technology, skills scored) | AI Readiness — organisation scorecard and gap roadmap |
| Build-vs-buy calls, and why | AI Readiness — build-vs-buy block with rationale |
| Quantified business case | Value Assessment across top candidates, plus indicative ranges from the readiness sizing |
| The mini operating model around it | Mini Op Model — blueprint and phased action list |

## Traps worth naming

- **Sizing without the step map.** People × hours × cost is *gross time cost*, not the opportunity. Without knowing what share the AI touches you'll quote a number you can't defend.
- **Accepting the estimate instead of timing the work.** "About an hour a case" is almost always wrong in both directions. Shadow five cases.
- **Waiting on a data extract.** Build the prototype on synthetic data from the worked examples and keep moving.
- **A GO on top of an unscored skill scan.** The build lands and then sits unowned.
- **Never meeting security or the data owner.** Two conversations that reliably kill month-three momentum if skipped.
- **Deep mode everywhere.** Light mode plus honest unknowns beats a half-finished deep assessment.
- **Letting the prototype become a POC.** The moment you're on real integrated data you're in Build — reprice it.
