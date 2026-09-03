/* One action, one story. The same roadmap action is shown in three places — the client report
   (clientReport), the on-screen roadmap (renderOut) and the text/markdown export (actLine). They
   used to re-derive the reason, sponsor, owner and definition of done independently, and drift:
   the report carried the tailored line while the screen and export fell back to generic library
   text. Everything now resolves through actView(g). This test pulls each action back OUT of all
   three rendered surfaces and fails if they disagree on why / sponsor / owner / done. It is red
   on the pre-unification code and green after. */
const fs=require("fs"),path=require("path");
const {T,ctx}=require("./t.js");
const EX=path.join(__dirname,"..","examples")+"/";
const FILES=["ardent-risk-group","ardent-full-engagement","brightside-retail","cavendish-lending",
  "halloran-finch","loom-systems","northgate-water","ridgeway-logistics"];

let fail=0,pass=0,checks=0;
const ok=(c,m)=>{checks++; if(c)pass++; else{fail++; if(fail<=40)console.log("  FAIL: "+m);}};
/* esc() encodes & < " only — invert exactly that, & last */
const unesc=s=>String(s).replace(/&lt;/g,"<").replace(/&quot;/g,'"').replace(/&amp;/g,"&");
/* how a resolved sponsor reads once escalation is folded in — the shared expectation */
const spText=R=>R.sponsor.up?R.sponsor.t+" — "+R.sponsor.because:R.sponsor.t;

/* the library actions on the current roadmap (skip the synthetic NOW / — / ASK pseudo-actions) */
function libActions(){const out=[];
  ctx.phasedGaps().forEach(p=>{if(p.parked)return;
    p.items.forEach(g=>{if(g.act&&/^A\d+$/.test(g.act.id))out.push(g);});});
  return out;}

/* --- pull each field back out of each rendered surface --- */
function fromExport(g){const t=ctx.actLine(g).join("\n");
  return{
    why:(t.match(/^Why: ([\s\S]*?)$/m)||[])[1]||"",
    sp:(t.match(/^Sponsor: ([\s\S]*?) · Owner: /m)||[])[1]||"",
    ow:(t.match(/ · Owner: ([\s\S]*?) · /m)||[])[1]||"",
    done:(t.match(/^Done when: ([\s\S]*?)$/m)||[])[1]||""};}

function reportBlocks(html){const m={};
  html.split('<div class="act">').forEach(b=>{
    const id=(b.match(/<span class="aid">(A\d+)<\/span>/)||[])[1];
    if(id)m[id]=b;});
  return m;}
function fromReport(b){
  return{
    why:unesc((b.match(/<p>(?:<b>Why here\.<\/b> )?([\s\S]*?)<\/p>/)||[])[1]||""),
    sp:unesc(((b.match(/<td>Sponsor<\/td><td>([\s\S]*?)<\/td>/)||[])[1]||"").replace(/<\/?b>/g,"")),
    ow:unesc((b.match(/<td>Owner<\/td><td>([\s\S]*?)<\/td>/)||[])[1]||""),
    done:unesc((b.match(/<td>Done when<\/td><td>([\s\S]*?)<\/td>/)||[])[1]||"")};}

/* the on-screen roadmap writes into #roadOut — hand renderOut a readable element and capture it */
function screenHTML(){const road={};const orig=ctx.document.getElementById;
  ctx.document.getElementById=id=>id==="roadOut"?road:{};
  try{ctx.renderOut();}finally{ctx.document.getElementById=orig;}
  return road.innerHTML||"";}

console.log("\n=== ONE ACTION, ONE STORY — the three surfaces must agree per action ===");
for(const f of FILES){
  T.S=T.migrate(JSON.parse(fs.readFileSync(EX+f+".json","utf8")));
  const report=ctx.clientReport(), rb=reportBlocks(report), screen=screenHTML();
  const acts=libActions();
  let n=0;
  acts.forEach(g=>{n++;
    const R=ctx.actView(g), id=g.act.id, X=fromExport(g);
    const B=rb[id]; ok(!!B,`${f} ${id}: action missing from client report`);
    const RP=B?fromReport(B):{why:"",sp:"",ow:"",done:""};

    /* REASON — the field the whole exercise is about */
    ok(X.why===R.why.t,   `${f} ${id}: export reason differs from actView`);
    ok(RP.why===R.why.t,  `${f} ${id}: report reason differs from actView`);
    ok(X.why===RP.why,    `${f} ${id}: export and report give different reasons`);
    if(R.why.t)ok(screen.includes(ctx.esc(R.why.t.slice(0,150))),`${f} ${id}: screen reason not from actView`);

    /* SPONSOR */
    ok(X.sp===spText(R),  `${f} ${id}: export sponsor differs from actView`);
    ok(RP.sp===spText(R), `${f} ${id}: report sponsor differs from actView`);
    ok(screen.includes(ctx.esc(R.sponsor.t)),`${f} ${id}: screen sponsor not from actView`);

    /* OWNER */
    ok(X.ow===R.owner.t,  `${f} ${id}: export owner differs from actView`);
    ok(RP.ow===R.owner.t, `${f} ${id}: report owner differs from actView`);

    /* DEFINITION OF DONE */
    ok(X.done===R.done,   `${f} ${id}: export "done when" differs from actView`);
    ok(RP.done===R.done,  `${f} ${id}: report "done when" differs from actView`);
    if(R.done)ok(screen.includes(ctx.esc(R.done)),`${f} ${id}: screen "done when" not from actView`);
  });
  console.log(`  ${f.padEnd(24)} ${String(n).padStart(2)} library actions checked across report · screen · export`);
}
console.log(`\n${checks} checks — ${pass} passed, ${fail} failed`);
process.exit(fail?1:0);
