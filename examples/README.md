# Worked examples

Three worked engagements across two fictional PE-backed mid-market clients. Two show the AI Readiness wedge; the third carries one of them through all three levels of the full toolkit.

**Easiest way to read them:** open `assess.html` and click **Worked examples** in the header. Both are built into the tool — pick one and it loads. No downloading, no importing.

These `.json` files are the same two engagements as portable files, for editing, diffing, or loading via **Import**. Either route replaces whatever is currently in the tool, so export first if you have live work in there.

Neither company exists. Any resemblance to a real client is accidental, and nothing here should be shared outside Enablis as a case study.

---

## Why two

They fail differently, and the contrast is the point.

| | **Ardent Risk Group** | **Ridgeway Logistics Group** |
|---|---|---|
| Sector | Specialist insurance broking, FCA-regulated. B2B commercial lines plus a personal-lines book | Contract logistics and last-mile. B2B contracts plus a growing B2C arm |
| Shape | £31m revenue, 340 staff, 4 acquisitions since 2022 | £145m revenue, 890 staff, 6 depots |
| Sponsor position | Entry 2022, exit target 2027, 400bps mandate | Entry 2021, exit already a year late |
| Own engineering? | No — IT outsourced, so no code audit | Yes — 12 developers, so Overwatch runs |
| Ceiling | Stage 1, capped by **four** dimensions | Stage 1, capped by **two** |
| Weighted potential | 1.81 | 2.41 |
| The story | Weak more or less everywhere. The ceiling is systemic and the roadmap is long | Strong operations, strong engineering, no AI stance and no AI governance. Almost everything is ready for more than those two allow |

Ridgeway is the better demonstration of why the ceiling matters: a genuinely well-run business, excellent at flow measurement, held at Stage 1 by two documents that don't exist. Ardent is the more common shape — nothing is badly wrong, nothing is ready either.

---

## What each one teaches

**Ardent — the spine and the checklist disagree on governance.** The Chief Risk Officer says AI risk is covered by the existing model-risk framework and believes it (spine: 3). Walking the framework shows it predates generative AI, covers pricing models only, and has no approved-vendor list, no human-review requirement and no audit trail (checklist: 2). The tool scores 2.5 and flags it. That gap between the confidence and the controls is the most valuable thing in the report, and a single-question instrument would have recorded whichever one the consultant heard first.

**Ridgeway — one excellent team is not an organisational capability.** The engineering team runs coding agents with better discipline than most: written boundaries, scoped service accounts, human review of every agent-raised PR, activity logged. Score that and you get a 4. But it's one team's own standard, undocumented outside their guild, and nothing at all covers the Power Platform automations the planning team is building. The spine scores the organisation (2), the checklist scores what exists where agents are used (4), and the report explains why we scored the lower one.

**Both — exposure is contained, not sequenced.** Each has findings that are live problems rather than maturity gaps: an unauthorised automation emailing policyholders from a personal account at Ardent; consignee addresses going into consumer AI tools at Ridgeway. These appear in a *Before the roadmap* block, outside the dependency sequence, because a live exposure shouldn't wait for a prerequisite chain.

**Ridgeway — a strength worth protecting.** Value stream visibility scores 4, the highest score in either example. Logistics businesses measure flow because flow is the product. Worth saying plainly in a readout, because the leadership assumption is usually that technology is the constraint.

**Ardent — a strength that is also a warning.** Brokers know their clients' businesses in detail, which is why user-centric focus scores 3 in a business that scores 1 or 2 nearly everywhere else. It's also the argument for pointing AI at the admin around the broker rather than at the broking.

---

## The third one — Ardent, full engagement

`ardent-full-engagement.json` is the same Ardent assessment carried into the Workflow and Use cases tabs, so you can see the whole chain rather than just the wedge. It is deliberately the *same client* rather than a third company, because that is how a real engagement progresses — Runway, then the business case.

**Workflow: commercial renewals.** Nine readiness signals, the ten-capability run scan ("could they run this without us?" — they could not), three approval gates, four system connections, five data sources and three guardrails. The workflow note carries the finding that matters: the team-level work measured 9 of 14 elapsed renewal days as queue time, so the prize is the wait between steps, not broker typing speed. Two of the four use cases attack drafting and neither touches the queue — worth saying out loud at a readout where the sponsor assumed brokers were the bottleneck.

**Four use cases, three different verdicts.**

| Use case | Value | Ease | Verdict | Year-1 REV | Payback |
|---|---|---|---|---|---|
| Renewal report first draft | 11/12 | 27/36 | **Do first** | £66k | 19 months |
| Insurer quote comparison | 11/12 | 20/36 | **Big bet** | £19k | — |
| Claims acknowledgement drafting | 7/12 | 27/36 | **Fill-in** | £11k | — |
| Policy wording change detection | 4/12 | 32/36 | **Fill-in** | £9k | — |

The instructive one is the claims acknowledgement. That is the automation the wedge found running unauthorised on a personal account — and by value it scores as a *fill-in*, not a priority. The reason to act on it is governance, not return. A portfolio that ranked purely on money would leave it running.

The quote comparison is the other one worth walking through: strong value, poor readiness, and the constraint is the quality of what insurers send, which we do not control. The recommendation narrows it to the four insurers that send structured responses rather than attempting the whole book.

Note also what the £ model does to the headline. Renewal drafting has a potential value of £158k and a realistic value of £66k once adoption, effectiveness and integration are applied. Most business cases quote the first number.

## Sample client reports

`sample-report-ardent.html` and `sample-report-ridgeway.html` are the client-facing documents generated from these two engagements — what the client actually receives. Open either in a browser; print to PDF from there. They are produced by **Outputs → Client report** in the tool, so they regenerate whenever the assessment changes.

## What's in each file

Everything the wedge captures: all 28 scored questions, the evidence and context notes behind them, the per-dimension narrative including both risk framings, the seven-capability skill scan with the cohort breakdown, and the interview log. Ridgeway additionally carries a full Overwatch record — three repositories, all nine stages, twelve audit dimensions scored, with three reds.

The two wedge files carry no workflows or use cases — they match the two-week engagement as scoped. `ardent-full-engagement.json` adds them.

---

## Using them

- **Training a new delivery lead.** Load one, walk the Team tab top to bottom, and look at how the evidence and context fields are written. The context notes are what make a report read bespoke rather than templated — these are worth copying in style, not content.
- **Showing the tool internally.** Ridgeway makes the sharper demo: the ceiling story lands in about thirty seconds.
- **Regression testing.** If a change to the scoring breaks something, these will show it. Ardent should hold at ceiling Stage 1, potential 1.81; Ridgeway at ceiling Stage 1, potential 2.41.
