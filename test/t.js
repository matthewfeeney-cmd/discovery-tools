/* DOM stub so assess.html's script can be evaluated in node */
const fs=require("fs"),vm=require("vm");
const SRC=require("path").join(__dirname,"..","assess.html");
const html=fs.readFileSync(SRC,"utf8");
const scripts=[...html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g)].map(m=>m[1]);
/* top-level const/let in a vm script don't land on the context object, so export explicitly */
const EXPORTS=["ORG_DIMS","ORG_QS","ACTIONS","NONE","SV","migrate","corrLvl","orgDim","ceiling",
  "potential","projected","activeDims","wPct","dimOff","qOf","orgTotalQ","orgAnswered",
  "calcVal","rampY1","rampWhy","RAMP","ucHours","ranked","ucGates","waveOf","verdictOf",
  "clientReport","rptUseCases","rptPortfolio","rptWorkflow","EXAMPLES","loadExample","cbScores","save"];
const body=scripts.join("\n;\n")+"\n;globalThis.__T={"+
  EXPORTS.map(n=>`get ${n}(){try{return ${n}}catch(e){return undefined}}`).join(",")+
  ",get S(){return S},set S(v){S=v}};";
if(process.env.DBG)console.error("script blocks:",scripts.map(s=>s.length));

const store={};
function el(){return{style:{},classList:{add(){},remove(){},toggle(){}},
  set innerHTML(v){this._h=v},get innerHTML(){return this._h||""},
  set textContent(v){this._t=v},get textContent(){return this._t||""},
  set value(v){this._v=v},get value(){return this._v||""},
  appendChild(){},removeChild(){},querySelector(){return el()},querySelectorAll(){return[]},
  addEventListener(){},click(){},focus(){},setAttribute(){},getAttribute(){return null},
  insertAdjacentHTML(){},remove(){},checked:false,files:[],dataset:{}};}

const ctx={
  console,
  localStorage:{getItem:k=>store[k]||null,setItem:(k,v)=>{store[k]=v},removeItem:k=>{delete store[k]}},
  sessionStorage:{getItem:()=>null,setItem(){},removeItem(){}},
  document:{getElementById:()=>el(),querySelector:()=>el(),querySelectorAll:()=>[],
    createElement:()=>el(),body:el(),head:el(),addEventListener(){},
    documentElement:el(),title:""},
  window:{location:{search:"",href:"",replace(){},assign(){},reload(){},pathname:"/assess.html",hash:""},addEventListener(){},scrollTo(){},matchMedia:()=>({matches:false,addListener(){}}),print(){},open:()=>({document:{write(){},close(){}},focus(){},print(){}})},
  setTimeout,clearTimeout,setInterval,clearInterval,
  URL:{createObjectURL:()=>"blob:x",revokeObjectURL(){}},
  Blob:function(){},FileReader:function(){},
  alert(){},confirm:()=>true,prompt:()=>"",
  requestAnimationFrame:f=>f(),
  navigator:{clipboard:{writeText:async()=>{}}},
  URLSearchParams,TextEncoder,TextDecoder,Promise,Map,Set,Symbol,Intl,
  Math,JSON,Date,Array,Object,String,Number,Boolean,RegExp,Error,isNaN,isFinite,parseFloat,parseInt,
};
ctx.globalThis=ctx; ctx.self=ctx; ctx.window.document=ctx.document;
ctx.location=ctx.window.location; ctx.history={pushState(){},replaceState(){}};
vm.createContext(ctx);
try{ vm.runInContext(body,ctx,{filename:"assess.js"}); }
catch(e){ console.error("EVAL ERROR:",e.message); process.exit(1); }
module.exports={ctx,store,T:ctx.__T};
