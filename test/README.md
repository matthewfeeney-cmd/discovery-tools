# Tests

Run the whole suite from the project root:

```
npm test
```

It runs, in order, and stops on the first failure:

| File | What it checks |
|---|---|
| `checks.js` | Core scoring, migration, the J-curve value model, report renders — 47 assertions |
| `checks2.js` | The outputs: roadmap size, parking, capacity, the seam, section order — 40 assertions |
| `ladder.js` | The five maturity stages (Stage 1 → 5), and that things move monotonically with maturity |
| `fuzz.js` | 3000 randomly-generated clients across six maturity regimes, checking invariants that must hold for any client. Run alone with `npm run fuzz` |
| `stale.js` | The hostile-state check — ten malformed/old save-file shapes through the engine, none may crash or hang |

`t.js` is the shared harness that loads `assess.html` into a fake browser; the others depend on it.

`npm run test:quick` runs everything except the fuzzer, for a faster edit loop.
