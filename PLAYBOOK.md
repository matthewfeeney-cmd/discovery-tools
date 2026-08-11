# Assess playbook — how the team uses the toolkit

Internal. Three journeys through the Assess phase, mapped to what we sell and to the toolkit. Durations here are **internal working assumptions** — we sell on evidence and outcomes, not calendars, so don't print them in client material.

Everything runs in one app: **`assess.html`**. Tabs across the top are Engagement · 1 · Team · 2 · Workflow · Use cases · 3 · Portfolio · Outputs.

---

## How the toolkit is shaped — read this before your first engagement

**Three modules, matching the three things you might be assessing.**

- **1 · Team** — the organisation for a small business; a department or team for a large one. AI readiness across six dimensions, plus the **team skill scan**. Scored once per engagement. It stands alone as a deliverable — that's Journey 0.
- **2 · Workflow** — repeated per workflow. The operating model (approvals, systems, data, safeguards) and the **run-capability scan**. Approvals, roles and systems are shared by everything inside a workflow, which is why they sit here.
- **Use cases live inside workflows.** Each use case has its own readiness scoring and its own £ value model, because value accrues per use case. A workflow with three use cases is normal.
- **3 · Portfolio** — appears once there are two or more use cases: ranking, waves, aggregate value.

**Two skill scans. Don't mix them up.**

| | **Team skill scan** | **Run-capability scan** |
|---|---|---|
| Question | "Can these people work with AI at all?" | "Can they run *this* live solution without us?" |
| Where | `1 · Team` | `2 · Workflow` → B |
| How often | Once per engagement | Once per workflow |
| What | 7 capabilities — literacy, task design, judging output, data judgement, redesigning work, governance awareness, coaching | 10 capabilities — use, monitor, escalate, judge, risk review, update, test, data, security, train |
| Feeds | The readiness **Skills dimension** — it overrides the three Skills questions once 4 of 7 are scored | The standing run cost, and the "could they own it?" verdict |

**Light or Deep is set once, for the whole engagement,** on the Engagement tab. Deep adds evidence tags, the 48 factual checks behind use-case scores, the step map, the feasibility probe and the sourcing route on the run-capability scan. Light answers are kept as a fallback but stop being editable once you switch — so go Light on day one and switch deliberately.

**The 12-month target stage is load-bearing.** It sets the required level for every team skill capability and it's the bar every gap is measured against. Agree it with the sponsor *before* the skill scan. The tool leaves it unset on purpose and will nag you.

---

## Principles

- **Value first, never pure discovery.** We prototype while we assess. A week with no working artefact means we've drifted into a study.
- **Assess prototypes. Build proves.** The boundary is *data*, not effort. Sample or synthetic data, disposable, days → prototype. Real integrated data → that's a POC, on Build's clock and price.
- **Unknowns are findings — but pick the lowest option, don't leave a blank.** A blank is *excluded* from the score and flatters the result; a zero is a finding you can act on.
- **Ask for the last example, not the policy.** "What's your approval process?" gets a diagram. "Walk me through the last system that went live — who signed what?" gets the truth.
- **Every engagement ends on a decision**, including an honest stop.

## Who you need

### The Enablis pod

| Role | Owns | Present for |
|---|---|---|
| **Delivery Lead** | The engagement and the "so what?". Workshops, immersion, the team module, the backlog, the gates. | Everything |
| **Forward Deployed AI Engineer** | Prototypes on real examples; scores Data and Technology honestly; runs the feasibility probes. | Day 0 onwards; heaviest days 2–4 / weeks 2–3 |
| **Commercial BA** | Baselines, value models, build-vs-buy, the business case. On light engagements the DL covers this at lower depth. | Journeys 1–2 |

### Client-side, and what each one unlocks

| Who | What only they can give you | Book |
|---|---|---|
| **Executive sponsor** | The 12-month target stage, budget reality, what "worth it" means | 60 min up front, 60 min at readout |
| **Workflow owner / team lead** | How the work really happens, volumes, exceptions, who's good at it — and the team skill scan | 90 min + access to their team |
| **The people doing the task** | The truth. Time per case, workarounds, what they'd never trust a machine with | 2–3 hrs shadowing, 3–4 people |
| **Finance / FP&A** | Fully-loaded cost per head, whether a saving is cashable | 30 min |
| **Data owner** | Whether you can have the data, and what state it's in | 45 min |
| **Platform / architecture lead** | Where AI can run, integration reality, approved tooling | 45 min |
| **Security / risk / DPO** | The route to a yes, and the hard stops | 45 min |
| **Change lead / PMO** | Whether change sticks here; past post-implementation reviews | 30 min |
| **HR / L&D** | Training capacity, licence deployment vs active usage, who trains whom | 30 min |

## The advance data request

Send it when the engagement is confirmed, with the fallbacks in the same email.

| Ask for | Feeds | If they don't have it |
|---|---|---|
| **The 12-month ambition, in the sponsor's words** | **The target stage — sets every required team skill level** | Ask "what do you want to be true in 12 months?" in the first session. Never leave it unset |
| Headcount on the workflow, and rough % of their time | Baseline, value model | Team lead's estimate, then sanity-check by shadowing |
| Volume of cases per year | Baseline, sizing cross-check | Count a week manually and annualise; mark as estimated |
| Fully-loaded cost per head | Value model | Salary × 1.3 as the working assumption — say so |
| 15–30 real worked examples with outcomes | Prototype, feasibility probe, test set | Ask the team to export 20 from last month spanning easy / hard / awkward |
| Sample data extract (anonymised, non-integrated) | Prototype | Synthetic data from the worked examples — never delay the prototype |
| Error / rework / complaint rate | Value model | Quality log, complaints data, or the team's estimate |
| List of systems the workflow touches | Workflow module | Whiteboard it during immersion |
| AI licence counts — seats deployed **vs seats active** | Team skill scan: literacy level and how widely held | Ask IT for both numbers; deployed is vanity, active is the finding |
| Who currently trains whom on AI tools | Team skill scan: coaching, and the champion names | Ask the team lead who people go to when a tool gives a wrong answer |
| AI policy / acceptable-use guidance | Governance dimension | Ask what staff may paste into a chatbot today — the answer *is* the finding |
| The approval trail for the last system that went live | Workflow approvals map | Ask the person who took it live to talk you through it |
| Post-implementation review of a recent change | Adoption dimension | Ask "is that system used the way you intended?" and listen for the hesitation |

**Rule:** never let a missing artefact stop the work. Score the lowest option and move on — that's a finding you present.

---

# Journey 0 — Ready? (team wedge, 1–2 days)

The smallest saleable engagement, and the one to lead with when a client isn't ready to name a workflow. No workflows, no use cases. Open **`assess.html?m=team`** — it hides everything else.

**Buyer question** — "Are we ready to do anything with AI, and can our people carry it?"
**Pod** — Delivery Lead, with the FDE for 90 minutes to score Data and Technology honestly.
**Client time** — ~4–5 person-hours.

### Step 1 · Half-day workshop (3 hrs)

**In the room** — sponsor, team lead, 2–3 people who'd actually use AI in their work.

1. **Agree the 12-month target stage first.** "What do you want to be true in 12 months?" Everything downstream is measured against it, so don't let the room drift into Stage 5 by default.
2. **The 18 readiness questions, live on screen.** Out loud, as a conversation. Asking them in the room is what makes it feel like an assessment rather than a survey.
3. **The team skill scan** — 7 capabilities, ~10 minutes. For each: the typical level across the team, how widely it's held, and a named champion. Ask the practitioners, not the sponsor.

### Step 2 · Confirm the guesses (2 hrs, same day or next)

| Who | 45 min each | What you're confirming |
|---|---|---|
| Platform / IT lead | Technology dimension | Approved AI services, integration reality, licence seats deployed vs active |
| Data owner | Data dimension | Where data lives, quality, how fast access really is |
| Change lead / PMO | Adoption dimension | The last post-implementation review; does change stick? |

Re-score anything you guessed in the workshop. In Deep mode, tag each answer confirmed / told / guessed.

### Step 3 · Generate and read out (half-day, then 60 min)

**Outputs tab** → `Team readiness & skills report` and `Gap-closure roadmap`.

**Deliverables** — the readiness ceiling with the capping dimension named; the team skills profile, required vs actual against their target; the "held too narrowly" list; a gap-closure roadmap phased 90 days / 3–6 / 6–12 months.

**Watch for** — a Stage 4 ambition sitting on a Stage 1 skills reality. That gap *is* the finding, and it's worth more to them than any use-case list.

**Exit** — into Validate ("now bring us one workflow"), or a capability-building engagement.

---

# Journey 1 — Validate (light, ~5 days)

One workflow the client already has in mind. Prove it's worth doing and show them something working.

## Day 0 · Free half-day workshop

**In the room** — DL + FDE · sponsor, workflow owner, 1–2 people who do the task. IT or security for the last 30 minutes if you can.

**Activities**
- Download the problem: goals, users, constraints. Walk the workflow end to end on a whiteboard.
- **Agree the 12-month target stage with the sponsor** — before anything is scored.
- Run the **18 readiness questions** live on screen (`1 · Team`).
- Run the **team skill scan** — 7 capabilities with the sponsor, team lead and practitioners in the room, ~10 minutes.
- On the **Engagement** tab, add the workflow. Inside it, add one use case and score its 16 questions.

**How to get the answers** — strategy and budget from the sponsor ("how did the last AI spend get approved?"); governance from "what are staff allowed to paste into ChatGPT today?"; adoption from "the last new system — is it used the way you intended?"; data and tech from whoever's in the room, marked *guessed* and confirmed on day 1.

**Tool** — `assess.html`, tab `1 · Team`, then `Engagement` → add workflow → `Use cases`.

**Output** — readiness ceiling with the capping dimension named; team skills profile; a first-cut value × readiness for the workflow; a go/no-go on the engagement itself.

**Watch for** — name the ceiling only *after* the skill scan, because the Skills dimension is computed from it and can move the ceiling. And a Stage 1 governance ceiling plus regulated data means Validate is the wrong sale — saying so wins more trust than proceeding.

## Day 1 · Baseline and immersion

**In the room** — DL + BA · the people doing the task, the team lead. Finance 30 min. FDE with the data owner.

| Data you need | Source | How to get it |
|---|---|---|
| Volume of cases | System export | Ask the team lead to run their standard report; if none, count a representative week |
| Time per case | Observation | Shadow 5–8 real cases with a stopwatch. Don't ask — time it |
| % of the team's week on the task | Team lead + shadowing | Cross-check the estimate against what you saw |
| Fully-loaded cost per head | Finance or HR | Ask for the band; fall back to salary × 1.3 and say so |
| Error / rework rate and its cost | Quality log, complaints | If untracked, ask how often work comes back and what it costs to fix |
| 15–30 worked examples | The team | A spread: typical, harder, genuinely awkward |
| Sample data extract | Data owner | Anonymised, non-integrated. Go synthetic if it'll take more than a day |

**Tool** — `Use cases` tab → **Value model** card. Pick the sizing basis, fill the baseline, and tag its quality honestly: measured / estimated / none.

**Output** — a defensible baseline and the number that would make leadership call this a success. If the baseline is "none", you've found the most important gap in the engagement.

## Day 2 · Prototype and the operating picture

**In the room** — FDE heads-down building. DL with: whoever owns change and release, risk or compliance, IT security, platform lead, team lead.

| Data you need | Source | How to get it |
|---|---|---|
| The approval route to production | Change/release owner | "If this proved itself tomorrow, walk me through every approval, in order" |
| What evidence each approver needs | Each approver | Ask what the last system had to show them |
| Systems touched, and connector state | Platform lead | Which have APIs, and what did the last integration take? |
| The ten run capabilities: who holds each, at what level | Team lead + individuals | "Who'd fix this if it broke on a Tuesday?" · "Who checks the answer is right?" |
| Hours per week each capability takes | Team lead | Estimate together; refine during the build |

**Tool** — `2 · Workflow` tab: the approvals table (A), the **run-capability scan** (B), systems, data and safeguards (C).

**Output** — prototype v1 demoed; readiness-to-run signals (several auto-rate from the tables you just filled); ownership readiness and key-person risks named on day 2 rather than at handover.

**Watch for** — contrast the two scans out loud. Team-level *judging output quality* at 1 alongside run-level *judge whether output is right* at 4 is a contradiction someone has to explain.

## Day 3 · The value case

**In the room** — BA (or DL) + finance, 45 min. FDE iterating the prototype with users.

**Data you need** — yesterday's baseline plus: how much of the task time AI could plausibly remove (start from how the prototype behaved, not a benchmark); licence and platform costs; build effort; **run cost — take the hrs/week straight from the run-capability scan**, the tool shows you the number.

**Grounding the three discounts** — adoption from what the team said on day 2 about trust; effectiveness from how the prototype did on the *awkward* examples; integration from the platform lead's connector answers.

**Tool** — `Use cases` → Value model card, potential → realistic → cost.

**Output** — potential vs realistic £, benefit:cost, payback, steady-state net, and an assumption register showing what's still a guess.

## Day 4 · Assemble and cross-check

**In the room** — the pod, no client.

The tool already flags three of these — your job is to confirm and explain them, not discover them:

- **Run cost vs standing effort.** The value model states the run-capability scan's hrs/week. If the cost you entered ignores it, the case is optimistic.
- **Readiness gates.** Each use case shows ⛔ where a team-level dimension gates it. Say it in the readout, not after contracting.
- **Sizing cross-check.** Fill both routes — people × % of time, and cases × time per case. The tool tells you when they disagree by more than 2×.
- **Does the skill scan change the verdict?** A GO with four must-own run capabilities missing is an ADJUST with a training plan attached. This one is still yours to judge.

**Output** — one consistent story across prototype, numbers and operating picture; rehearsed.

## Day 5 · Readout and decision

**In the room** — sponsor, workflow owner, finance, IT. 90 minutes.

**Deliverables** — from the **Outputs** tab:
1. **Working prototype**, demonstrated on their real examples.
2. **£ value case** (`£ value case` button) — with the assumption register visible.
3. **Go / adjust / stop verdict**, recorded on the use case with its rationale.
4. **Workflow blueprint** (`Workflow blueprint` button) — who approves it, who runs it, what skills it needs, and the phased action list with owners.

**On GO** — the value case becomes the Build scope, which protects the fixed price from drift. The blueprint's action list becomes the Build's non-technical workstream.

---

# Journey 2 — Prioritise (detailed, 2–4 weeks)

A department with several candidate workflows and no agreed order.

## Week 0 · Scoping and free workshop

Agree scope, name the sponsor, **book every interview slot now** — access is the biggest schedule risk. Send the advance data request. Run the free half-day workshop as Journey 1 Day 0, treating the team scores as provisional. Keep the engagement in **Light** for now.

## Week 1 · Frame and scan

**In the room** — sponsor (60 min), 8–12 interviewees (45 min each), data owner, platform lead, security, change lead, HR/L&D.

**Split** — DL takes strategy, governance, adoption and the team skill scan. FDE takes data and technology. BA sits in on anything with a number.

| Data you need | Source | How to get it |
|---|---|---|
| The 12-month ambition | Sponsor | Sets the target stage. Don't assume Stage 5 |
| Pain points across the department | Interviews | Ask what wastes their week; capture verbatim in each use case's one-line description |
| Longlist of candidate workflows | Interviews + team leads | Take what people complain about, not what leadership proposes |
| Team skill levels and spread | Team leads, HR/L&D, practitioners | Licence seats active vs deployed; who people ask when a tool is wrong |
| Approved AI services / cloud | Platform lead | Ask for the approved software list |
| Data landscape | Data owner | Where the top workflows' data lives, and who signs off access |
| AI policy, approval routes, past DPIAs | Risk / DPO | Ask for the last one completed |
| Post-implementation reviews | PMO | Two recent ones beat any adoption survey |

**Tool** — `1 · Team`: 18 questions plus the team skill scan. Then create **one workflow per longlist candidate** on the Engagement tab, with **one use case each**, and score only the four Value questions to cut the list fast.

**Output** — readiness ceiling; longlist cut to a shortlist of 5–6; team skills profile.

**Watch for** — a Stage 1–2 ceiling on governance or adoption is a programme-level finding that changes the whole recommendation: fix the foundation or no use case will land.

## Week 2 · Deepen and test

**Switch the engagement to Deep** at the start of the week, then re-score the team module with evidence tags.

**In the room** — the people doing each shortlisted workflow (2–3 hrs each), team leads, finance, data owner again.

| Data you need per candidate | Source | How to get it |
|---|---|---|
| The 4–8 workflow steps with % of time | Immersion | Whiteboard with the people doing it; agree percentages out loud |
| Volume, time per case, headcount, cost | Exports + shadowing + finance | Fill **both** sizing routes so the cross-check works |
| 10 real cases for the probe | The team | Typical, harder, awkward — real material, not tidied |
| Data access reality | Data owner | Ask directly; note whether it's yes, slow, or no |
| Integration depth | Platform lead | Read-only extract vs write-back into core records changes everything |
| Champion, checker, owner | Team lead | Names, not roles |

**Tool** — `Use cases`: the 48 factual checks behind each score, the step map, and the **feasibility probe** — once 5+ cases are scored the tested result replaces the precedent guess.

**Output** — evidence-backed scores, probe verdicts, £ ranges with a stated basis.

## Week 3 · Value, shape and build-vs-buy

**In the room** — finance (2 × 45 min), the winning workflow's team lead and experts, platform lead, security.

| Data you need | Source | How to get it |
|---|---|---|
| Confirmed baselines for the top 2–3 | Finance + team | Get finance to say the numbers are fair — that's what makes it defensible |
| Named tools that already do this | FDE desk research | Search the category properly; "none found" is a valid answer |
| Competitive-edge call | Sponsor | "Is this something you do differently from competitors?" |
| Run capabilities for the leading workflow | Team lead + individuals | The ten capabilities, named holders and backups |
| Standing hours per capability | Team lead | Feeds the run cost, otherwise guessed |

**Tool** — Value model on the top 2–3 use cases; the **build-vs-buy call plus its why** on each use case; the `2 · Workflow` **run-capability scan** on the leading workflow.

**Output** — quantified business case per top candidate; build-vs-buy with rationale; prototypes; ownership readiness and key-person risks.

## Week 4 · Synthesise and play back

**In the room** — pod only for three days; leadership for a 2-hour playback.

**Activities** — generate the outputs, reconcile them, pressure-test the ranking with the sponsor *before* the room, rehearse. If you're still collecting data in week 4, the scope was too wide.

**Deliverables** — from the **Outputs** tab and the **Portfolio** tab:
1. Ranked opportunity backlog, showing which team-level gap gates each use case.
2. AI-readiness assessment — data, technology and skills scored, ceiling named, gap roadmap phased 90 days / 3–6 / 6–12 months.
3. Build-vs-buy calls with rationale.
4. Quantified business case, aggregated across use cases.
5. Working prototypes of the top workflows.

**Exit** — Build POC on the chosen workflow, or the roadmap stands alone.

---

## Where to click, by journey

| Module / tab | Journey 0 (wedge) | Journey 1 (Validate) | Journey 2 (Prioritise) |
|---|---|---|---|
| **Engagement** | Client, date, **target stage**, Light | Same, Day 0 · add the workflow | Same, Week 0 · add one workflow per candidate |
| **1 · Team** | The whole engagement — 18 questions + team skill scan | Day 0, live in the workshop | Week 1 light, re-scored Deep in Week 2 |
| **2 · Workflow** | — | Day 2: approvals, run-capability scan, systems, data, safeguards | Week 3 on the leading workflow |
| **Use cases** | — | Day 0 score, Day 1 baseline, Day 3 value model | Week 1 to cut the list · Week 2 deep · Week 3 value |
| **3 · Portfolio** | — | Only if the workflow has 2+ use cases | Week 4 — ranking, waves, aggregate |
| **Outputs** | Team report + gap roadmap | Value case + workflow blueprint | All four |

**Rules of thumb**

- **Set the target stage first.** Nothing in the team module means anything without it.
- **Score the team module once per engagement**, not per workflow.
- **Run the team skill scan before you name the ceiling** — the Skills dimension is computed from it.
- **Run the run-capability scan before you promise a handover.** "Can they run it without us?" has a specific answer, usually "not yet".
- **Light for the whole engagement on day one.** The switch is engagement-wide. Go Deep only when the output must survive a board, procurement or a fixed-price scope — and note that light answers stay as a fallback but stop being editable.
- **Export JSON at the end of each engagement day.** It's the only backup.

## Where each promised output comes from

| Offering promises | Produced by |
|---|---|
| Working prototype on real examples | FDE, from the examples gathered during immersion |
| £ value case a CFO can defend | Outputs → **£ value case** — baseline, potential, realistic, costs, assumption register |
| Go / adjust / stop verdict | Recorded on the use case; cross-checked against the blueprint and the readiness ceiling |
| Ranked opportunity backlog | Outputs → **Ranked backlog**, gated by team readiness |
| AI-readiness assessment (data, technology, skills scored) | Outputs → **Team readiness & skills report** — scorecard, ceiling, skills profile |
| Team skills profile and training plan | The team skill scan, inside the same report |
| Build-vs-buy calls, and why | The call plus its rationale on each use case; carried into the ranked backlog |
| Quantified business case | Value models across the top use cases, aggregated on the Portfolio tab |
| The mini operating model around it | Outputs → **Workflow blueprint** — approvals, roles, systems, safeguards, phased actions |
| Gap-closure roadmap | Outputs → **Gap-closure roadmap** — team gaps, workflow actions, use-case actions |

## Traps worth naming

- **Leaving the target stage unset.** Every required skill level and every gap depends on it. The tool refuses to guess; don't guess either.
- **Naming the ceiling before the skill scan.** Skills is computed from the scan and can move the ceiling under you.
- **Confusing the two scans.** Team scan = can these people work with AI. Run scan = can they run this thing. Different questions, different tabs.
- **Sizing without the step map.** People × hours × cost is *gross time cost*, not the opportunity.
- **Accepting the estimate instead of timing the work.** "About an hour a case" is almost always wrong in both directions.
- **Waiting on a data extract.** Build the prototype on synthetic data from the worked examples and keep moving.
- **A GO on top of an unscored run-capability scan.** The build lands and then sits unowned.
- **Never meeting security or the data owner.** Two conversations that reliably kill month-three momentum if skipped.
- **Letting the prototype become a POC.** The moment you're on real integrated data you're in Build — reprice it.
