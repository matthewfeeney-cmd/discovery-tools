/* The maturity ladder as a regression test. Everything the tool did before was validated at
   ceiling Stage 1; these assert that the output stays sensible all the way up, and that the
   things which SHOULD change with maturity actually do. */
const fs=require("fs");const {T,ctx}=require("./t.js");
const EX="/sessions/gifted-gracious-gates/mnt/Assess Tools/discovery-tools/examples/";
let fail=0,pass=0; const ok=(c,m)=>{c?pass++:(fail++,console.log("  FAIL: "+m))};
const L=[["ardent-risk-group.json","S1"],["halloran-finch.json","S2"],["brightside-retail.json","S3"],
         ["cavendish-lending.json","S4"],["loom-systems.json","S5"]];
function load(f){const s=T.migrate(JSON.parse(fs.readFileSync(EX+f,"utf8")));T.S=s;return s;}

console.log("\n=== THE LADDER — output must stay sensible at every maturity ===");
const row=[];
for(const [f,lab] of L){ const s=load(f);
  let h; try{h=T.clientReport();}catch(e){ok(false,`${lab} report threw: ${e.message}`);continue;}
  const c=T.ceiling(), r={lab,ceil:c?c.stage:0,contain:ctx.containment().length,
    board:ctx.urgentList().length,plan:ctx.roadmapSize(),len:h.length,html:h};
  row.push(r);
  console.log(`  ${lab} ${s.meta.client.slice(0,24).padEnd(26)} ceiling ${r.ceil} · contain ${String(r.contain).padStart(2)} · board ${String(r.board).padStart(2)} · plan ${String(r.plan).padStart(2)}`);
  ok(h.length>4000,`${lab}: report has substance`);
  ok(!/NaN/.test(h),`${lab}: no NaN`);
  ok((h.match(/<div/g)||[]).length===(h.match(/<\/div>/g)||[]).length,`${lab}: divs balanced`);
  /* internal instructions must never reach a client */
  ok(!/add it to the library|Write the recommendation, then/.test(h),`${lab}: no internal library instruction in the client report`);
  /* a report must always tell the client what to do, or say plainly that there is nothing */
  ok(/Fix these first|Nothing on the urgent list/.test(h),`${lab}: report must have an action section or say there is none`);
  /* the headline must never list more than four dimensions by name */
  const m=h.match(/<p class="lede">([^<]*)/);
  if(m){const names=T.ORG_DIMS.filter(d=>m[1].includes(d.name)).length;
    ok(names<=4,`${lab}: headline names ${names} dimensions — should summarise above four`);}
}
console.log("\n=== MONOTONICITY — these must move with maturity, not randomly ===");
const byCeil=row.slice().sort((a,b)=>a.ceil-b.ceil);
for(let i=1;i<byCeil.length;i++){
  const lo=byCeil[i-1],hi=byCeil[i];
  if(lo.ceil===hi.ceil)continue;
  ok(hi.contain<=lo.contain,`containment should not rise with maturity: ${lo.lab}(${lo.contain}) -> ${hi.lab}(${hi.contain})`);
  ok(hi.plan<=lo.plan+4,`plan should not balloon with maturity: ${lo.lab}(${lo.plan}) -> ${hi.lab}(${hi.plan})`);
}
console.log("  containment by ceiling: "+byCeil.map(r=>`${r.lab}@${r.ceil}=${r.contain}`).join("  "));
console.log("  board by ceiling:       "+byCeil.map(r=>`${r.lab}@${r.ceil}=${r.board}`).join("  "));

console.log("\n=== TOP OF THE LADDER — the specific failures a mature client used to hit ===");
{ load("loom-systems.json"); const h=T.clientReport();
  ok(/Nothing on the urgent list/.test(h),"an empty board must render a section, not vanish");
  ok(/flat rather than spiky/.test(h),"a flat profile must be named as one");
  ok(/artefact of the instrument/.test(h),"a Stage 5 target must carry the checklist-caps-at-4 caveat");
  ok(/we have nothing to offer you/i.test(h),"running out of library must be said honestly, once");
  console.log("  all four top-of-ladder behaviours present"); }
{ load("cavendish-lending.json"); const h=T.clientReport();
  ok(/no sequencing advice to give you/.test(h),"when nothing is gated the seam must say so rather than fall silent");
  ok(!/a use case sitting on a Stage 1 dimension/.test(h),"Stage 1 language must not appear for a mature client");
  console.log("  mature-client seam behaves"); }
console.log(`\n${fail?"✗":"✓"} ${pass} passed, ${fail} failed\n`);
process.exit(fail?1:0);
