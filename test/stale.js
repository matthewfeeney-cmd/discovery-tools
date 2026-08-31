const fs=require("fs");
const {ctx,T}=require("./t.js");
const EX=require("path").join(__dirname,"..","examples")+"/";
const els={};
ctx.document.getElementById=(id)=>{
  if(!els[id])els[id]={id,style:{},classList:{add(){},remove(){},toggle(){}},
    _h:"",set innerHTML(v){this._h=v},get innerHTML(){return this._h},
    _t:"",set textContent(v){this._t=v},get textContent(){return this._t},
    value:"",oninput:null,dataset:{},querySelectorAll:()=>[],appendChild(){},remove(){}};
  return els[id];};
let bad=0;
function trial(name,mut){
  const raw=JSON.parse(fs.readFileSync(EX+"ardent-full-engagement.json","utf8"));
  mut(raw);
  const timer=setTimeout(()=>{console.log(`  ${name}: !!! HUNG`);process.exit(2);},8000);
  try{ T.S=ctx.migrate(raw); ctx.renderAll(); clearTimeout(timer);
    console.log(`  OK    ${name}   (target ${T.S.target})`);
  }catch(e){ clearTimeout(timer); bad++;
    console.log(`  THREW ${name}: ${e.message}`);
    console.log("        "+e.stack.split("\n")[1].trim()); }
}
console.log("Stale / hostile state through migrate() + renderAll():");
trial("no tgt, no frame, target 4, sv1", s=>{delete s.tgt;delete s.frame;delete s.sv;s.target=4;});
trial("tgt present, frame missing",      s=>{delete s.frame;});
trial("frame present, tgt missing",      s=>{delete s.tgt;});
trial("frame half-built",                s=>{s.frame={amb:["a","b","c"]};});
trial("frame keys wrong type",           s=>{s.frame={amb:"nope",tried:null,cap:{},funded:7,spon3:undefined};});
trial("tgt with string values",          s=>{s.tgt={d6:"0",d7:"4",d8:"nonsense"};});
trial("tgt with junk key",               s=>{s.tgt={dZZ:0};});
trial("target null",                     s=>{s.target=null;});
trial("target 5",                        s=>{s.target=5;});
trial("completely empty object",         s=>{Object.keys(s).forEach(k=>delete s[k]);});
console.log(bad?`\n${bad} FAILED`:"\nall clean");
process.exit(bad?1:0);
