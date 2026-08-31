const fs=require("fs");const {T,ctx}=require("./t.js");
const EX=require("path").join(__dirname,"..","examples")+"/";
let pass=0,fail=0; const ok=(c,m)=>{c?pass++:(fail++,console.log("  FAIL: "+m))};
function load(f){const s=T.migrate(JSON.parse(fs.readFileSync(EX+f,"utf8")));
  ["dimOff","orgEv","dimNote","tskills","coh","tgt"].forEach(k=>s[k]=s[k]||{});
  s.frame=s.frame||{};["amb","spon3"].forEach(k=>s.frame[k]=s.frame[k]||["","",""]);
  ["tried","funded","cap"].forEach(k=>s.frame[k]=s.frame[k]||[]);
  s.ints=s.ints||[];s.wfs=s.wfs||[];s.cb=s.cb||{has:null,repoAccess:"",checkAccess:"",repos:[],ow:{},gt:{},gtNotes:{},notes:""};
  s.curWf=0;s.curUc=0;T.S=s;return s;}

console.log("\n=== 1. ROADMAP SIZE — before vs after ===");
const BEFORE={"ardent-risk-group.json":37,"ridgeway-logistics.json":27};  /* pre-frame sizes */
for(const f of Object.keys(BEFORE)){
  const s=load(f);
  const size=ctx.roadmapSize(), focus=ctx.focusItems().length;
  const parked=(ctx.phasedGaps().find(p=>p.parked)||{items:[]}).items.length;
  const drop=Math.round((1-size/BEFORE[f])*100);
  console.log(`  ${s.meta.client.padEnd(26)} ${BEFORE[f]} -> ${size} (-${drop}%) | focus ${focus} | parked ${parked} | capacity ${ctx.capDays()} d/mo`);
  ok(size<BEFORE[f],`${f}: roadmap should shrink`);
  ok(focus>=1,`${f}: focus list should be non-empty, got ${focus}`);
  ok(size/ctx.capDays()<12,`${f}: sanity on items-per-day`);
}

console.log("\n=== 2. REGRESSION — ceiling and potential unchanged ===");
for(const [f,e] of Object.entries({"ardent-risk-group.json":[1,"1.65"],"ridgeway-logistics.json":[1,"2.32"]})){
  load(f); const c=T.ceiling(),p=T.potential().toFixed(2);
  console.log(`  ${f}: ceiling ${c.stage}, potential ${p}`);
  ok(c.stage===e[0],`${f} ceiling`); ok(p===e[1],`${f} potential ${p} != ${e[1]}`);
}

console.log("\n=== 3. PARKING behaves ===");
{ const s=load("ardent-risk-group.json");
  ok(ctx.DTGT("d6")===0,"d6 parked in the example");
  ok(ctx.DTGT("d1")===3,"d1 falls back to the engagement default of 3");
  const dims=ctx.parked().map(d=>d.id);
  console.log("  parked:",dims.join(", ")||"none");
  ok(dims.length>=1,"at least one parked");
  const ph=ctx.phasedGaps();
  const acted=ph.filter(p=>!p.parked).flatMap(p=>p.items).map(i=>i.dim.id);
  const leak=dims.filter(d=>acted.includes(d));
  ok(!leak.length,"parked dimensions must not generate roadmap actions, leaked: "+leak);
  ok(T.ceiling().stage===1,"parking must not change the ceiling");
  console.log("  parked dims still counted in ceiling and score: yes");
}
{ const s=load("ridgeway-logistics.json"); s.tgt={};s.target=4;
  const a=ctx.roadmapSize(); s.target=3; const b=ctx.roadmapSize();
  console.log(`  target 4 -> ${a} items | target 3 -> ${b} items`);
  ok(b<a,"lower target must mean a shorter roadmap");
}

console.log("\n=== 4. REPORTS render, and lead with the focus ===");
for(const f of ["ardent-risk-group.json","ridgeway-logistics.json","ardent-full-engagement.json"]){
  load(f); let h; try{h=T.clientReport();}catch(e){ok(false,`${f} threw ${e.message}`);continue;}
  const o=(h.match(/<div/g)||[]).length,c=(h.match(/<\/div>/g)||[]).length;
  const secs=[...h.matchAll(/<span class="num">(\S+?)<\/span><h2>([^<]+)<\/h2>/g)].map(m=>m[2]);
  const iBoard=secs.indexOf("Fix these first"), iPlan=secs.indexOf("The plan, in sequence"), iSeam=secs.indexOf("Where this goes next"), iMeth=secs.indexOf("How we assessed this");
  console.log(`  ${f}: ${h.length}c divs ${o}/${c} | board:${h.includes("Fix these first")} | board@${iBoard} plan@${iPlan} seam@${iSeam}`);
  ok(o===c,`${f} div balance`);
  ok(!/NaN/.test(h),`${f} no NaN`);
  ok(h.includes("Fix these first"),`${f} urgency board present`);
  ok(iBoard>=0&&iBoard<iPlan,`${f} the board must come before the sequenced plan`);
  ok(iSeam<0||iSeam<iMeth,`${f} the handover must come before the method section, not after it`);
  ok(!secs.includes("The next ninety days"),`${f} the ninety-day section duplicated the board and should be gone`);
}

console.log("\n=== 5. EMPTY FRAME still works (a consultant who skips it) ===");
{ const s=load("ridgeway-logistics.json");
  s.frame={amb:["","",""],spon3:["","",""],tried:[],funded:[],cap:[]};
  ok(ctx.capDays()===0,"no capacity recorded");
  let h; try{h=T.clientReport(); ok(h.length>5000,"report still renders");
    ok(!/NaN|undefined/.test(h.replace(/undefined-/g,"")),"no NaN/undefined with an empty frame");
    ok(!h.includes("Against your capacity"),"capacity paragraph suppressed when unknown");
    console.log("  renders at "+h.length+" chars with no frame data");
  }catch(e){ok(false,"threw on empty frame: "+e.message);}
}

console.log("\n=== 6. ALL PARKED — degenerate case ===");
{ const s=load("ridgeway-logistics.json");
  s.tgt={}; T.ORG_DIMS.forEach(d=>s.tgt[d.id]=0);
  ok(ctx.roadmapSize()===0,"nothing on the roadmap when everything is parked");
  let h; try{h=T.clientReport(); ok(h.length>3000,"report still renders with an empty roadmap");
    console.log("  renders at "+h.length+" chars, roadmap 0, containment still shown: "+h.includes("to deal with now"));
  }catch(e){ok(false,"threw when all parked: "+e.message);}
}

console.log(`\n${fail?"X":"OK"} ${pass} passed, ${fail} failed\n`);
process.exit(fail?1:0);
