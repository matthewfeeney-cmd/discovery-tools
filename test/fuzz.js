/* Structural fuzzer.
   Hand-written examples test whether the NARRATIVE reads well. They are expensive — Northgate
   took an hour — and they only ever cover the shapes I happen to think of. This covers the
   shapes I do not: it generates clients across the whole parameter space and asserts things
   that must be true of any of them. It found real bugs the three worked examples never would. */
const fs=require("fs");const {T,ctx}=require("./t.js");

let seed=20260824;
const rnd=()=>((seed=(seed*1103515245+12345)&0x7fffffff)/0x7fffffff);
const pick=a=>a[Math.floor(rnd()*a.length)];
const chance=p=>rnd()<p;

const EV=["confirmed","told","guessed","absent","unknown","notasked",""];
const MODES=["noowner","deadlock","nobudget","ignored","nofollow","worked",""];

function client(i){
  const s={sv:3,meta:{client:"Fuzz "+i,by:"t",date:"2026-08-24",ambition:chance(.8)?"x":""},
    mode:chance(.5)?"deep":"light",target:pick([3,3,3,4]),
    org:{},orgC:{},dimOff:{},orgEv:{},dimNote:{},tskills:{},coh:{},ints:[],
    tgt:{},shape:{},screen:{},actNote:{},actOwn:{},
    cb:{has:null,repoAccess:"",checkAccess:"",repos:[],ow:{},gt:{},gtNotes:{},notes:""},
    wfs:[],curWf:0,curUc:0,num:{},
    frame:{amb:["","",""],ambDims:[[],[],[]],spon3:["","",""],tried:[],funded:[],cap:[]}};

  /* maturity regimes — including the mature end, which the worked examples never reach */
  const regime=pick(["floor","weak","mixed","strong","ceiling5","flat3"]);
  const base=()=>({floor:1,weak:1+Math.floor(rnd()*2),mixed:1+Math.floor(rnd()*4),
    strong:3+Math.floor(rnd()*2),ceiling5:5,flat3:3}[regime]);

  for(let d=1;d<=17;d++){
    if(chance(.12)){s.dimOff["d"+d]=true;continue;}        // N/A
    if(chance(.10)){continue;}                              // simply unanswered
    const v=Math.max(1,Math.min(5,base()));
    s.org["q"+d+"s"]=v;
    const q=T.ORG_QS.find(x=>x.k==="q"+d+"c");
    if(q){const n=Math.max(0,Math.min(q.c.length,Math.round((v-1)/4*q.c.length)));
      s.orgC["q"+d+"c"]=n===0?[q.c.length]:Array.from({length:n},(_,j)=>j);}
    const e=pick(EV);
    if(e)s.orgEv["q"+d+"s"]={t:chance(.6)?"someone":"",c:e,x:chance(.5)?"context":""};
    if(chance(.5))s.dimNote["d"+d]={improve:chance(.7)?"what has to change":"",riskNot:chance(.5)?"the risk":""};
    if(chance(.15))s.tgt["d"+d]=0;                          // parked
    else if(chance(.1))s.tgt["d"+d]=4;
  }
  /* frame, sometimes empty, sometimes contradictory */
  const nAmb=Math.floor(rnd()*4);
  for(let a=0;a<nAmb&&a<3;a++){s.frame.amb[a]="capability "+a;
    if(chance(.7))s.frame.ambDims[a]=Array.from({length:1+Math.floor(rnd()*3)},()=>"d"+(1+Math.floor(rnd()*17)));}
  for(let t=0;t<Math.floor(rnd()*3);t++)
    s.frame.tried.push({what:"tried "+t,when:"once",end:"failed",why:"reasons",
      dims:chance(.7)?["d"+(1+Math.floor(rnd()*17))]:[],mode:pick(MODES)});
  for(let t=0;t<Math.floor(rnd()*3);t++)
    s.frame.funded.push({prog:"prog "+t,owner:"o",covers:"c",when:"w",
      dims:chance(.7)?["d"+(1+Math.floor(rnd()*17))]:[],late:chance(.5)});
  for(let c=0;c<Math.floor(rnd()*5);c++)
    s.frame.cap.push({name:"p"+c,role:"r",days:String(pick([0.5,1,2,3,5,10]))});
  SHAPEKEYS.forEach(k=>{if(chance(.7))s.shape[k]=pick(SHAPEVALS[k]);});
  ["juris","art5","art50","art4","art22c","dpia","smf","duty"].forEach(k=>{
    if(chance(.6))s.screen[k]=pick(["Yes","No","Could not establish"]);});
  return T.migrate(s);
}
const SHAPEKEYS=["builds","outsourced","inprod","role","entities","regulated"];
const SHAPEVALS={builds:["Yes","No — bought and outsourced"],outsourced:["No","Yes"],
  inprod:["No","Yes — and we can name it","Suspected, unconfirmed"],
  role:["Deploy only","Fine-tune or wrap","Build models"],
  entities:["One","Two to five","More than five"],regulated:["No","FCA","Other regulator"]};

const N=Number(process.argv[2]||400);
let fail=0; const seen={};
const problems=[];
function bad(i,m){fail++;if(problems.length<14)problems.push(`  client ${i}: ${m}`);}

for(let i=0;i<N;i++){
  const s=client(i); T.S=s;
  let ph,urg,fit,html;
  try{ ph=ctx.phasedGaps(); urg=ctx.urgentList(); fit=ctx.capacityFit(); }
  catch(e){ bad(i,"engine threw: "+e.message); continue; }
  try{ html=T.clientReport(); }
  catch(e){ bad(i,"report threw: "+e.message); continue; }

  const ceil=T.ceiling();
  /* --- invariants that must hold for ANY client --- */
  if(/NaN|undefined/.test(html.replace(/undefined-/g,""))) bad(i,"NaN or undefined in the report");
  const o=(html.match(/<div/g)||[]).length, c=(html.match(/<\/div>/g)||[]).length;
  if(o!==c) bad(i,`div imbalance ${o}/${c}`);
  if(ceil&&(ceil.stage<1||ceil.stage>5)) bad(i,"ceiling out of range: "+ceil.stage);
  const pot=T.potential(); if(pot!==null&&(pot<1||pot>5)) bad(i,"potential out of range: "+pot);
  const proj=T.projected(); if(proj!==null&&pot!==null&&proj<pot-1e-9) bad(i,"projection below today");
  /* Parked dimensions may still appear, but only for two legitimate reasons, and the tool must
     say which. Silent appearance is the bug; appearance with an explanation is correct.
       - live exposure: you cannot park something already causing harm
       - dependency: something you did not park needs it first  */
  const parked=ctx.parked().map(d=>d.id);
  ph.filter(p=>!p.parked&&!p.contain).forEach(p=>p.items.forEach(g=>{
    if(parked.includes(g.dim.id)&&!g.viaDep)
      bad(i,"parked dimension "+g.dim.id+" generated "+g.act.id+" with no explanation");}));
  ctx.containment().forEach(c=>{
    if(parked.includes(c.dim.id)&&!c.parkedAnyway) bad(i,"parked containment not flagged as a contradiction");});
  /* deliberate absence must never be reported as live exposure */
  ctx.abstained().forEach(a=>{
    if(ctx.containment().some(x=>x.dim.id===a.dim.id)) bad(i,"confirmed-absent "+a.dim.id+" reported as containment");
    if(html.includes(a.dim.rf)) bad(i,"confirmed-absent "+a.dim.id+" leaked its risk flag into the report");});
  /* the board must stay a board */
  if(urg.length>14) bad(i,"board ballooned to "+urg.length);
  /* capacity arithmetic must be sane */
  if(fit){ if(fit.inYear.length+fit.beyond.length!==ctx.roadmapSize()) bad(i,"capacity split loses items");
    if(fit.years<0||!isFinite(fit.years)) bad(i,"capacity years not finite"); }
  /* the seam must not recommend a candidate that is more blocked than another */
  const cands=ctx.candidates(), lgi=ctx.leastGatedIdx(cands);
  if(lgi>=0){ const best=cands[lgi];
    cands.filter(x=>x.kind==="ambition"&&ctx.ambDimsOf(x.i).length).forEach(x=>{
      if(x.gates.length<best.gates.length&&x.blocked<=best.blocked)
        bad(i,"seam recommended a more-blocked candidate");});}
  const reg=[ceil?ceil.stage:"-",Object.keys(s.dimOff).length,parked.length,urg.length];
  seen[reg.join("/")]=(seen[reg.join("/")]||0)+1;
}
console.log(`\n${N} generated clients across six maturity regimes`);
console.log(`  distinct ceiling/N-A/parked/board shapes exercised: ${Object.keys(seen).length}`);
console.log(fail?`\n✗ ${fail} invariant violations\n`+problems.join("\n"):"\n✓ no invariant violations");
process.exit(fail?1:0);
