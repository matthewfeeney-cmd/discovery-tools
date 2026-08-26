# Worked examples

Four worked engagements across three fictional clients. Two are PE-backed mid-market companies assessed whole; the third is a **department inside a large regulated business**, which is the shape most real assessments take. A fourth file carries one of them through all three levels of the full toolkit.

**Easiest way to read them:** open `assess.html` and click **Worked examples** in the header. All four are built into the tool — pick one and it loads. No downloading, no importing.

These `.json` files are the same engagements as portable files, for editing, diffing, or loading via **Import**. Either route replaces whatever is currently in the tool, so export first if you have live work in there.

None of these companies exist. Any resemblance to a real client is accidental, and nothing here should be shared outside Enablis as a case study.

---

## Why three

They fail differently, and the contrast is the point. Northgate is the one to read if you only read one — it is the realistic shape, and it is the one that exposed three bugs the tidier examples never would.

| | **Ardent Risk Group** | **Ridgeway Logistics Group** |
|---|---|---|
| Sector | Specialist insurance broking, FCA-regulated. B2B commercial lines plus a personal-lines book | Contract logistics and last-mile. B2B contracts plus a growing B2C arm |
| Shape | £31m revenue, 340 staff, 4 acquisitions since 2022 | £145m revenue, 890 staff, 6 depots |
| Sponsor position | Entry 2022, exit target 2027, 400bps mandate | Entry 2021, exit already a year late |
| Own engineering? | No — IT outsourced, so no code audit | Yes — 12 developers, so Overwatch runs |
| Ceiling | Stage 1, capped by **six** dimensions | Stage 1, capped by **three** |
| Weighted potential | 1.65 | 2.32 |
| The story | Weak more or less everywhere. The ceiling is systemic and the roadmap is long | Strong operations, strong engineering, no AI stance and no AI governance. Almost everything is ready for more than those two allow |

Ridgeway is the better demonstration of why the ceiling matters: a genuinely well-run business, excellent at flow measurement, held at Stage 1 by two documents that don't exist. Ardent is the more common shape — nothing is badly wrong, nothing is ready either.

---

## The third client — Northgate Water, Asset Management directorate

A 600-person directorate inside a 4,000-person regulated utility. Structurally unlike the other two in every way that matters, and deliberately so:

| | |
|---|---|
| Unit of assessment | A **department**, not a company — group functions are out of reach |
| Builds or buys | **Builds its own models**; the only example where that is true |
| Maturity | **Genuinely mixed**: weighted average 2.5 against a Stage 1 ceiling |
| Regulator | Ofwat, not the FCA |
| Access | **Four dimensions could not be established at all** — Group Risk and Group Procurement would not meet the team inside the engagement |
| Capacity | 9 days a month, and the plan actually fits inside the year |

**What it teaches.** The strongest data estate in any of the examples sits next to the weakest vendor assurance, because twenty years of regulatory reporting produces excellent data and nothing about AI contracts. The sponsor is the best of the three and can still do nothing about the constraint, because the constraint sits at group. Four unanswerable questions get reported as *"nobody could tell us"* rather than scored low and forgotten — and the report says outright that four of them in one assessment is a pattern, and that the pattern is usually that the answers sit above the level being assessed.

It is also the example where the client has **deliberately** not done something: no agents, on a reasoned view that autonomous action on an asset estate is not appropriate yet. Before this example existed, that produced a containment item instructing them to inventory the agents they do not have. Now it reports the restraint, scores the absence of a *written* position, and keeps the two apart.

**Three bugs it found**, none of which the tidy examples would ever have surfaced: containment firing on deliberate absence; "get an answer on…" repeated once per unanswerable dimension instead of consolidated; and chase-the-answer work being generated for dimensions the client had already parked.

---

## What each one teaches

**Ardent — the spine and the checklist disagree on governance.** The Chief Risk Officer says AI risk is covered by the existing model-risk framework and believes it (spine: 3). Walking the framework shows it predates generative AI, covers pricing models only, and has no approved-vendor list, no human-review requirement and no audit trail (checklist: 2). The tool scores 2.5 and flags it. That gap between the confidence and the controls is the most valuable thing in the report, and a single-question instrument would have recorded whichever one the consultant heard first.

**Ridgeway — one excellent team is not an organisational capability.** The engineering team runs coding agents with better discipline than most: written boundaries, scoped service accounts, human review of every agent-raised PR, activity logged. Score that and you get a 4. But it's one team's own standard, undocumented outside their guild, and nothing at all covers the Power Platform automations the planning team is building. The spine scores the organisation (2), the checklist scores what exists where agents are used (4), and the report explains why we scored the lower one.

**Both — exposure is contained, not sequenced.** Each has findings that are live problems rather than maturity gaps: an unauthorised automation emailing policyholders from a personal account at Ardent; consignee addresses going into consumer AI tools at Ridgeway. These appear in a *Before the roadmap* block, outside the dependency sequence, because a live exposure shouldn't wait for a prerequisite chain.

**Ridgeway — a strength worth protecting.** Value stream visibility scores 4, the highest score in either example. Logistics businesses measure flow because flow is the product. Worth saying plainly in a readout, because the leadership assumption is usually that technology is the constraint.

**Ardent — a strength that is also a warning.** Brokers know their clients' businesses in detail, which is why user-centric focus scores 3 in a business that scores 1 or 2 nearly everywhere else. It's also the argument for pointing AI at the admin around the broker rather than at the broking.

---

## The fourth file — Ardent, full engagement

`ardent-full-engagement.json` is the same Ardent assessment carried into the Workflow and Use cases tabs, so you can see the whole chain rather than just the wedge. It is deliberately the *same client* rather than a fourth company, because that is how a real engagement progresses — Runway, then the business case.

**Workflow: commercial renewals.** Nine readiness signals, the ten-capability run scan ("could they run this without us?" — they could not), three approval gates, four system connections, five data sources and three guardrails. The workflow note carries the finding that matters: the team-level work measured 9 of 14 elapsed renewal days as queue time, so the prize is the wait between steps, not broker typing speed. Two of the four use cases attack drafting and neither touches the queue — worth saying out loud at a readout where the sponsor assumed brokers were the bottleneck.

**Four use cases, three different verdicts.**

| Use case | Value | Ease | Verdict | Steady state | Year one | Payback |
|---|---|---|---|---|---|---|
| Renewal report first draft | 11/12 | 27/36 | **Do first** | £66k | £23k | 31 months |
| Insurer quote comparison | 11/12 | 20/36 | **Big bet** | £19k | £7k | — |
| Claims acknowledgement drafting | 7/12 | 27/36 | **Fill-in** | £11k | £4k | — |
| Policy wording change detection | 4/12 | 32/36 | **Fill-in** | £9k | £3k | — |

The year-one column is the J-curve. Ardent's ceiling is Stage 1, so the model assumes only 35% of steady-state value lands in the first year, and payback is walked across that curve rather than assumed flat — which is why renewal drafting reads 31 months rather than the 19 a flat model gives. That percentage is our assumption, not a measured figure, and it is the number to argue about in a readout.

The instructive one is the claims acknowledgement. That is the automation the wedge found running unauthorised on a personal account — and by value it scores as a *fill-in*, not a priority. The reason to act on it is governance, not return. A portfolio that ranked purely on money would leave it running.

The quote comparison is the other one worth walking through: strong value, poor readiness, and the constraint is the quality of what insurers send, which we do not control. The recommendation narrows it to the four insurers that send structured responses rather than attempting the whole book.

Note also what the £ model does to the headline. Renewal drafting has a potential value of £158k, a steady-state value of £66k once adoption, effectiveness and integration are applied, and £23k actually landing in year one against a £95k year-one cost. Most business cases quote the first number.

## Sample client reports

`sample-report-ardent.html`, `sample-report-ridgeway.html`, `sample-report-northgate.html` and `sample-report-ardent-full.html` are the client-facing documents generated from these engagements. The full-engagement one is the interesting comparison: same client, same readiness content, plus the workflow, the four costed candidates and the portfolio. They are the same documents — what the client actually receives. Open either in a browser; print to PDF from there. They are produced by **Outputs → Client report** in the tool, so they regenerate whenever the assessment changes.

## What's in each file

Everything the wedge captures: the scored questions across every dimension the census left active (30 for Ardent, 34 for Ridgeway), the evidence and context notes behind them, the per-dimension narrative including both risk framings, the seven-capability skill scan with the cohort breakdown, and the interview log. Ridgeway additionally carries a full Overwatch record — three repositories, all nine stages, twelve audit dimensions scored, with three reds.

The two wedge files carry no workflows or use cases — they match the two-week engagement as scoped. `ardent-full-engagement.json` adds them.

---

## Using them

- **Training a new delivery lead.** Load one, walk the Team tab top to bottom, and look at how the evidence and context fields are written. The context notes are what make a report read bespoke rather than templated — these are worth copying in style, not content.
- **Showing the tool internally.** Ridgeway makes the sharper demo: the ceiling story lands in about thirty seconds. Northgate makes the more honest one, because it is what a real fortnight actually produces.
- **Regression testing.** If a change to the scoring breaks something, these will show it. Ardent should hold at ceiling Stage 1, potential 1.65; Ridgeway at ceiling Stage 1, potential 2.32; Northgate at ceiling Stage 1, potential 2.51. Ridgeway is also the schema-migration case: its governance checklist is answered "none of these", so it catches any change that shifts that stored index.
