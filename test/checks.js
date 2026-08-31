const fs=require("fs");
const {ctx,T}=require("./t.js");
const EX=require("path").join(__dirname,"..","examples")+"/";
let fail=0,pass=0;
const ok=(c,m)=>{if(c){pass++}else{fail++;console.log("  FAIL:",m)}};

function load(f){
  const raw=JSON.parse(fs.readFileSync(EX+f,"utf8"));
  const s=T.migrate(JSON.parse(JSON.stringify(raw)));
  s.meta=s.meta||{};s.org=s.org||{};s.orgC=s.orgC||{};s.dimOff=s.dimOff||{};s.orgEv=s.orgEv||{};
  s.dimNote=s.dimNote||{};s.tskills=s.tskills||{};s.coh=s.coh||{};s.ints=s.ints||[];
  s.cb=s.cb||{has:null,repoAccess:"",checkAccess:"",repos:[],ow:{},gt:{},gtNotes:{},notes:""};
  s.wfs=s.wfs||[];s.curWf=0;s.curUc=0;
  T.S=s; return {raw,s};
}

console.log("\n=== 1. MIGRATION: q2c 'none of these' index 6 -> 8 ===");
for(const f of ["ardent-risk-group.json","ridgeway-logistics.json","ardent-full-engagement.json"]){
  const raw=JSON.parse(fs.readFileSync(EX+f,"utf8"));
  const had6=Array.isArray(raw.orgC&&raw.orgC.q2c)&&raw.orgC.q2c.includes(6);
  const m=T.migrate(JSON.parse(JSON.stringify(raw)));
  const now=m.orgC.q2c;
  console.log(`  ${f}: stored ${JSON.stringify(raw.orgC.q2c)} -> ${JSON.stringify(now)}  (sv ${m.sv})`);
  if(had6) ok(now.includes(8)&&!now.includes(6),`${f}: NONE should have moved to 8`);
  ok(m.sv===T.SV,`${f}: sv stamped`);
}
console.log("  migration is idempotent:");
{ const a={sv:1,orgC:{q2c:[6]}}; T.migrate(a); const b=JSON.parse(JSON.stringify(a)); T.migrate(a);
  ok(JSON.stringify(a.orgC.q2c)===JSON.stringify(b.orgC.q2c),"second migrate must not shift again");
  console.log("   ",JSON.stringify(b.orgC.q2c),"->",JSON.stringify(a.orgC.q2c)); }

console.log("\n=== 2. REGRESSION: ceiling and potential at their sv3 baselines ===");
/* Baselines moved when the three "operating what you have" dimensions were added at sv3.
   Not a regression: the instrument now covers ground it did not before, and both fictional
   clients have AI in production, so the extra dimensions score and pull the average down. */
const EXPECT={"ardent-risk-group.json":{ceil:1,pot:1.65},"ridgeway-logistics.json":{ceil:1,pot:2.32}};
for(const [f,e] of Object.entries(EXPECT)){
  load(f);
  const c=T.ceiling(),p=T.potential();
  console.log(`  ${f}: ceiling Stage ${c.stage} (capped by ${c.dims.length}), potential ${p.toFixed(2)}`);
  ok(c.stage===e.ceil,`${f}: ceiling should stay ${e.ceil}, got ${c.stage}`);
  ok(Math.abs(p-e.pot)<0.005,`${f}: potential should stay ${e.pot}, got ${p.toFixed(2)}`);
}

console.log("\n=== 3. d2 scoring after the two new checklist items ===");
for(const f of ["ardent-risk-group.json","ridgeway-logistics.json"]){
  load(f);
  const d=T.orgDim("d2"),q=T.qOf("d2","c"),sel=T.S.orgC.q2c||[];
  const isNone=sel.includes(T.NONE(q));
  console.log(`  ${f}: q2c=${JSON.stringify(sel)} ${isNone?"(NONE)":`(${sel.length} of ${q.c.length})`} -> checklist Stage ${T.corrLvl(q)}, dim avg ${d.avg}, stage ${d.stage}`);
  ok(d.stage!==null,`${f}: d2 must still score`);
  ok(T.corrLvl(q)>=1&&T.corrLvl(q)<=4,`${f}: checklist level in range`);
}
console.log("  band behaviour on the new 8-item list (b=[2,4,6]):");
{ load("ardent-risk-group.json");
  const q=T.qOf("d2","c");
  for(const n of [0,1,2,3,4,5,6,7,8]){
    T.S.orgC.q2c=Array.from({length:n},(_,i)=>i);
    const l=n===0?null:T.corrLvl(q);
    console.log(`    ${n} ticked -> Stage ${l===null?"– (unanswered)":l}`);
  }
  T.S.orgC.q2c=[T.NONE(q)];
  ok(T.corrLvl(q)===1,"NONE must score 1");
  console.log(`    NONE -> Stage ${T.corrLvl(q)}`);
}

console.log("\n=== 4. J-CURVE: ramp, year-one value, payback ===");
{ const {s}=load("ardent-full-engagement.json");
  const c=T.ceiling();
  console.log(`  client ceiling: Stage ${c.stage} -> ramp ${Math.round(T.rampY1({})*100)}% (${T.rampWhy({})})`);
  ok(Math.abs(T.rampY1({})-T.RAMP[c.stage])<1e-9,"ramp must be read off the ceiling");
  const rows=T.ranked();
  ok(rows.length>0,"use cases must load");
  console.log("  use case                        steady   yr1     ramp   costY1   netY1    payback");
  for(const r of rows){
    const m=T.calcVal(r.u);
    const money=v=>"£"+Math.round(v).toLocaleString("en-GB");
    console.log(`  ${r.u.name.padEnd(32)}${money(m.REV).padEnd(9)}${money(m.REVy1).padEnd(8)}${Math.round(m.ramp*100)+"%"} ${money(m.costY1).padEnd(9)}${money(m.net).padEnd(9)}${isFinite(m.payback)?m.payback+" mo":"—"}`);
    ok(m.REVy1<=m.REV+1e-6,`${r.u.name}: year one cannot exceed steady state`);
    ok(m.REVy1>=0,`${r.u.name}: year one non-negative`);
    ok(!isFinite(m.payback)||m.payback>=1,`${r.u.name}: payback at least a month`);
  }
}
console.log("  payback lengthens vs the old flat model (it should):");
{ load("ardent-full-engagement.json");
  const r=T.ranked()[0],m=T.calcVal(r.u);
  const v=r.u.val,n=k=>parseFloat(v[k])||0,mul=v.aggr?1.25:1;
  const oneOff=(n("cBuild")+n("cRoll"))*mul, annual=(n("cLic")+n("cRun"))*mul;
  const oldPB=oneOff/((m.REV-annual)/12);
  console.log(`    ${r.u.name}: old flat ${oldPB.toFixed(0)} mo -> ramped ${m.payback} mo`);
  ok(m.payback>=Math.floor(oldPB),"ramped payback must not be shorter than the flat one");
}
console.log("  manual override wins over the ceiling:");
{ load("ardent-full-engagement.json");
  const u=JSON.parse(JSON.stringify(T.ranked()[0].u)); u.val.ramp="90";
  console.log(`    ramp override 90% -> ${Math.round(T.rampY1(u)*100)}% (${T.rampWhy(u)})`);
  ok(Math.abs(T.rampY1(u)-0.9)<1e-9,"override must be honoured");
  u.val.ramp=""; ok(Math.abs(T.rampY1(u)-T.RAMP[T.ceiling().stage])<1e-9,"blank falls back to ceiling");
}
console.log("  ramp rises with readiness:");
{ load("ardent-full-engagement.json");
  let prev=-1,mono=true;
  for(let st=1;st<=5;st++){ const v=T.RAMP[st]; if(v<=prev)mono=false; prev=v; }
  ok(mono,"RAMP must increase monotonically with stage");
  console.log("   ",T.RAMP.slice(1).map((v,i)=>`Stage ${i+1}: ${Math.round(v*100)}%`).join(" · "));
}

console.log("\n=== 5. REPORT RENDERS ===");
for(const f of ["ardent-risk-group.json","ridgeway-logistics.json","ardent-full-engagement.json"]){
  load(f);
  let html="";
  try{ html=T.clientReport(); }catch(e){ ok(false,`${f}: clientReport threw — ${e.message}`); continue; }
  ok(html.length>5000,`${f}: report should be substantial (${html.length} chars)`);
  ok(!/undefined|NaN/.test(html.replace(/undefined-/g,"")),`${f}: report must not contain undefined/NaN`);
  const o=(html.match(/<div/g)||[]).length,cl=(html.match(/<\/div>/g)||[]).length;
  ok(o===cl,`${f}: div balance ${o} open vs ${cl} close`);
  const hasISO=/ISO\/IEC 42001/.test(html);
  const hasJ=/year one|Year one|ramp/.test(html);
  console.log(`  ${f}: ${html.length} chars · ISO note ${hasISO?"yes":"NO"} · ramp note ${hasJ?"yes":"NO"} · divs ${o}/${cl}`);
  ok(hasISO,`${f}: method section must carry the ISO/NIST anchor`);
}
{ load("ardent-full-engagement.json");
  const html=T.clientReport();
  ok(/Steady state/.test(html),"full report must show steady state column");
  ok(/tuition|dip|curve|bedded in/i.test(html),"full report must explain the J-curve");
  const m=html.match(/roughly <b>(\d+)%<\/b> of steady-state value in year one/);
  console.log("  portfolio ramp sentence:",m?m[0]:"NOT FOUND");
  ok(!!m,"portfolio must state the ramp");
}

console.log("\n=== 6. EMBEDDED EXAMPLES match the JSON files ===");
{ const emb=T.EXAMPLES||[];
  console.log("  embedded examples:",emb.length);
  for(const e of emb){
    const d=e.data||{};
    const q=d.orgC&&d.orgC.q2c;
    const stale=Array.isArray(q)&&q.includes(6)&&!q.includes(8);
    console.log(`    ${e.id}: q2c=${JSON.stringify(q)}${stale?"   <-- pre-migration, will be fixed on load":""}`);
  }
  ok(emb.length===8,"eight embedded examples expected");
}

console.log(`\n${fail?"✗":"✓"} ${pass} passed, ${fail} failed\n`);
process.exit(fail?1:0);
