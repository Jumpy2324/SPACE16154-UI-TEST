// SPACE16154 — PRE-03:02 GRAPHICS + FUNCTIONAL MODEL UPDATE
// Grafica base: ultimo pacchetto pre-03:02 (V4.0 cache-bust family).
// Nessun logo.svg: l'identità resta testuale come nella grafica buona.

const CONFIG={
  version:"11.1.0-v61-polish-live",
  leagues:["Serie A","Premier League","La Liga","Bundesliga","Ligue 1"],
  weights:{threat:.22,defense:.20,form:.20,opponent:.18,pressing:.14,availability:.06},
  thresholds:{confidence:75,value:10,form:12}
};

const RAW_TEAMS=[
 {id:"milan",name:"Milan",code:"MIL",cls:"milan",league:"Serie A",played:12,last5:["W","W","D","W","W"],trend:[72,74,75,77,79],
  raw:{xg:1.84,xga:.94,third:64,shotq:.13,shots:14.2,oppShots:9.1,form:2.55,opp:74,ppda:8.7,highRec:8.8,counter:78,availability:91}},
 {id:"roma",name:"Roma",code:"ROM",cls:"roma",league:"Serie A",played:12,last5:["W","D","L","W","D"],trend:[70,69,68,67,68],
  raw:{xg:1.21,xga:1.37,third:47,shotq:.10,shots:10.1,oppShots:13.5,form:1.68,opp:78,ppda:12.4,highRec:5.9,counter:61,availability:84}},
 {id:"inter",name:"Inter",code:"INT",cls:"inter",league:"Serie A",played:12,last5:["W","W","W","D","W"],trend:[78,80,81,83,84],
  raw:{xg:2.02,xga:.82,third:72,shotq:.14,shots:16.1,oppShots:8.3,form:2.68,opp:76,ppda:8.1,highRec:9.1,counter:81,availability:94}},
 {id:"napoli",name:"Napoli",code:"NAP",cls:"napoli",league:"Serie A",played:12,last5:["W","D","W","W","L"],trend:[72,73,74,75,76],
  raw:{xg:1.71,xga:1.05,third:61,shotq:.12,shots:13.5,oppShots:11.2,form:2.30,opp:73,ppda:10.4,highRec:7.0,counter:72,availability:88}},
 {id:"arsenal",name:"Arsenal",code:"ARS",cls:"arsenal",league:"Premier League",played:12,last5:["W","W","D","W","W"],trend:[75,77,78,80,81],
  raw:{xg:1.92,xga:.93,third:68,shotq:.13,shots:15.1,oppShots:9.5,form:2.48,opp:77,ppda:8.7,highRec:8.6,counter:78,availability:89}},
 {id:"chelsea",name:"Chelsea",code:"CHE",cls:"chelsea",league:"Premier League",played:12,last5:["D","W","W","L","W"],trend:[71,72,74,73,75],
  raw:{xg:1.55,xga:1.18,third:57,shotq:.11,shots:12.8,oppShots:11.9,form:2.04,opp:75,ppda:10.1,highRec:7.1,counter:70,availability:87}},
 {id:"barcelona",name:"Barcelona",code:"BAR",cls:"barcelona",league:"La Liga",played:12,last5:["W","W","W","W","D"],trend:[78,80,81,83,84],
  raw:{xg:2.21,xga:.91,third:75,shotq:.15,shots:17.0,oppShots:9.4,form:2.66,opp:75,ppda:8.3,highRec:9.0,counter:82,availability:90}},
 {id:"sevilla",name:"Sevilla",code:"SEV",cls:"sevilla",league:"La Liga",played:12,last5:["L","W","D","L","W"],trend:[65,66,65,67,66],
  raw:{xg:1.18,xga:1.52,third:44,shotq:.09,shots:9.7,oppShots:14.2,form:1.42,opp:73,ppda:13.0,highRec:5.4,counter:58,availability:85}},
 {id:"bayern",name:"Bayern",code:"BAY",cls:"bayern",league:"Bundesliga",played:12,last5:["W","W","D","W","W"],trend:[79,81,82,84,85],
  raw:{xg:2.22,xga:.98,third:77,shotq:.15,shots:17.4,oppShots:9.7,form:2.58,opp:72,ppda:8.0,highRec:9.6,counter:84,availability:92}},
 {id:"leverkusen",name:"Leverkusen",code:"LEV",cls:"leverkusen",league:"Bundesliga",played:12,last5:["W","D","W","W","D"],trend:[77,78,79,80,81],
  raw:{xg:1.85,xga:1.07,third:66,shotq:.12,shots:14.8,oppShots:10.6,form:2.38,opp:74,ppda:9.2,highRec:8.1,counter:77,availability:89}},
 {id:"psg",name:"PSG",code:"PSG",cls:"psg",league:"Ligue 1",played:12,last5:["W","W","W","W","D"],trend:[80,82,83,85,86],
  raw:{xg:2.26,xga:.91,third:79,shotq:.15,shots:17.6,oppShots:9.4,form:2.65,opp:70,ppda:8.3,highRec:9.2,counter:83,availability:93}},
 {id:"lyon",name:"Lyon",code:"LYO",cls:"lyon",league:"Ligue 1",played:12,last5:["D","W","L","D","W"],trend:[68,69,68,70,71],
  raw:{xg:1.42,xga:1.33,third:52,shotq:.10,shots:11.8,oppShots:13.0,form:1.83,opp:71,ppda:11.8,highRec:6.2,counter:64,availability:86}}
];

const MATCH_INPUTS=[
 {id:"milan-roma",home:"milan",away:"roma",time:"18:00",league:"Serie A",venue:"San Siro",weather:"16°C · Sereno",referee:"D. Orsato",last:"Milan 3–1 Roma · 14/01/2025",odds:{one:1.82,x:3.65,two:4.70,under:2.00,over:1.82,gg:1.75,ng:2.05},
  abs:[["Milan",[["R. Leão","In dubbio","chiave"],["Thiaw","Out","titolare"],["Loftus-Cheek","Out","rotazione"]]],["Roma",[["Dybala","In dubbio","chiave"],["Smalling","Out","titolare"],["Azmoun","Out","rotazione"]]]]},
 {id:"arsenal-chelsea",home:"arsenal",away:"chelsea",time:"18:30",league:"Premier League",venue:"Emirates Stadium",weather:"14°C · Coperto",referee:"M. Oliver",last:"Chelsea 1–1 Arsenal",odds:{one:1.92,x:3.55,two:4.10,under:2.05,over:1.78,gg:1.68,ng:2.12},
  abs:[["Arsenal",[["Saka","In dubbio","chiave"]]],["Chelsea",[["James","Out","titolare"]]]]},
 {id:"barcelona-sevilla",home:"barcelona",away:"sevilla",time:"20:00",league:"La Liga",venue:"Estadi Olímpic",weather:"20°C · Sereno",referee:"J. Sánchez",last:"Sevilla 1–3 Barcelona",odds:{one:1.45,x:4.60,two:6.20,under:2.55,over:1.52,gg:1.70,ng:2.08},
  abs:[["Barcelona",[["Pedri","In dubbio","chiave"]]],["Sevilla",[["Badé","Out","titolare"]]]]},
 {id:"bayern-leverkusen",home:"bayern",away:"leverkusen",time:"20:30",league:"Bundesliga",venue:"Allianz Arena",weather:"12°C · Coperto",referee:"F. Zwayer",last:"Leverkusen 1–1 Bayern",odds:{one:1.72,x:4.10,two:4.20,under:2.75,over:1.45,gg:1.55,ng:2.40},
  abs:[["Bayern",[["Musiala","In dubbio","chiave"]]],["Leverkusen",[["Frimpong","In dubbio","titolare"]]]]},
 {id:"psg-lyon",home:"psg",away:"lyon",time:"21:00",league:"Ligue 1",venue:"Parc des Princes",weather:"15°C · Sereno",referee:"C. Turpin",last:"Lyon 1–4 PSG",odds:{one:1.50,x:4.45,two:5.80,under:2.65,over:1.48,gg:1.65,ng:2.18},
  abs:[["PSG",[["Marquinhos","In dubbio","chiave"]]],["Lyon",[["Lacazette","In dubbio","chiave"]]]]}
];

const clamp=(v,a=0,b=100)=>Math.max(a,Math.min(b,v));
const norm=(v,a,b)=>clamp((v-a)/(b-a)*100);
const inv=(v,a,b)=>100-norm(v,a,b);
const avg=a=>a.reduce((x,y)=>x+y,0)/a.length;
const W=(pairs)=>pairs.reduce((s,[v,w])=>s+v*w,0)/pairs.reduce((s,[,w])=>s+w,0);
const R=Math.round;

function buildTeam(t){
 const r=t.raw;
 const m={
   threat:R(W([[norm(r.xg,.7,2.4),.30],[norm(r.third,35,82),.22],[norm(r.shotq,.07,.16),.20],[norm(r.shots,7,19),.16],[norm(r.highRec,3,11),.12]])),
   defense:R(W([[inv(r.xga,.65,1.75),.48],[inv(r.oppShots,7,16),.32],[norm(r.availability,70,100),.20]])),
   form:R(norm(r.form,.8,2.8)),
   opponent:R(norm(r.opp,58,84)),
   pressing:R(W([[inv(r.ppda,7,15),.45],[norm(r.highRec,4,11),.30],[norm(r.counter,50,90),.25]])),
   availability:R(r.availability)
 };
 const score=R(m.threat*CONFIG.weights.threat+m.defense*CONFIG.weights.defense+m.form*CONFIG.weights.form+m.opponent*CONFIG.weights.opponent+m.pressing*CONFIG.weights.pressing+m.availability*CONFIG.weights.availability);
 return {...t,m,score};
}
const TEAMS=RAW_TEAMS.map(buildTeam),TEAM=Object.fromEntries(TEAMS.map(t=>[t.id,t]));

function probs(h,a){
 const d=(h.score-a.score)/13;
 const e1=Math.exp(d), ex=Math.exp(-.65-Math.abs(d)*.1), e2=Math.exp(-d), s=e1+ex+e2;
 let one=R(e1/s*100),x=R(ex/s*100); let two=100-one-x;
 const over=R(clamp(42+(h.m.threat+a.m.threat-135)*.27-(h.m.defense+a.m.defense-135)*.08,30,76));
 const gg=R(clamp(42+(h.m.threat+a.m.threat-130)*.30-(h.m.defense+a.m.defense-130)*.10,30,78));
 return {one,x,two,over,under:100-over,gg,ng:100-gg};
}
function fav(p){return [["1",p.one],["X",p.x],["2",p.two]].sort((a,b)=>b[1]-a[1])[0]}
const implied=o=>100/o;
function signalData(mi,h,a,p){
 const f=fav(p);
 const dir=CONFIG.weights;
 const diffs=["threat","defense","form","opponent","pressing","availability"].map(k=>h.m[k]-a.m[k]);
 const agree=diffs.filter(v=>v*(h.score-a.score)>=0).length/6*100;
 const conf=R(clamp((f[1]-33)*1.05 + avg(diffs.map(Math.abs))*2.0 + agree*.28));
 const oddKey=f[0]==="1"?"one":f[0]==="X"?"x":"two";
 const edge=R(f[1]-implied(mi.odds[oddKey]));
 const formEdge=R(Math.abs(h.m.form-a.m.form));
 const sig=[];
 if(conf>=CONFIG.thresholds.confidence) sig.push({type:"Confidence",kind:"confidence",score:conf,pick:f[0],prob:f[1],reason:"Più famiglie di indicatori importanti puntano nella stessa direzione."});
 if(edge>=CONFIG.thresholds.value) sig.push({type:"Value",kind:"value",score:edge,pick:f[0],prob:f[1],reason:`La stima del modello supera di circa ${edge} punti la probabilità implicita nella quota demo.`});
 if(formEdge>=CONFIG.thresholds.form) sig.push({type:"Forma",kind:"form",score:formEdge,pick:f[0],prob:f[1],reason:`Il differenziale di forma recente, già pesata per gli avversari, è pari a ${formEdge} punti.`});
 return {confidence:conf,value:edge,formEdge,signals:sig};
}
const MATCHES=MATCH_INPUTS.map(mi=>{
 const h=TEAM[mi.home],a=TEAM[mi.away],p=probs(h,a),s=signalData(mi,h,a,p);
 return {...mi,h,a,p,...s};
});

const INFO={
 threat:"Valuta la capacità di creare occasioni pericolose. Combina xG, qualità tiro, produzione nell'ultimo terzo, volume offensivo e recuperi alti.",
 defense:"Valuta la solidità con cui la squadra limita occasioni e pressione avversaria. Combina xGA, tiri concessi e disponibilità difensiva.",
 form:"Forma recente già corretta per la forza degli avversari affrontati: una prestazione contro un avversario forte pesa di più.",
 opponent:"Misura la qualità media degli avversari affrontati e serve a contestualizzare le prestazioni recenti.",
 pressing:"Combina PPDA, recuperi alti e contro-pressione. Il PPDA non viene letto isolatamente.",
 availability:"Valuta disponibilità e impatto delle assenze: un giocatore chiave pesa più di una rotazione."
};
const TECH_INFO={
 "xG":"Expected Goals: qualità e quantità delle occasioni create.",
 "xGA":"Expected Goals Against: qualità delle occasioni concesse.",
 "Ultimo terzo":"Presenza e qualità delle azioni portate nelle zone avanzate.",
 "Qualità tiro":"Qualità media delle conclusioni; evita di premiare soltanto il volume.",
 "PPDA":"Passaggi concessi all'avversario prima di un'azione difensiva. Più basso tende a indicare pressione più aggressiva."
};
const MACROS=[["threat","Threat Creation"],["defense","Defense Stability"],["form","Forma"],["opponent","Opponent Strength"],["pressing","Pressing / PPDA"],["availability","Availability"]];

const crest=(c,cl="")=>`<div class="crest ${cl}"><span>${c}</span></div>`;
const info=(t,x)=>`<button class="info" aria-label="Info ${t}" data-info="${encodeURIComponent(x)}">i</button>`;
const nav=(id,ic,label,a)=>`<button class="nav-item ${a===id?"active":""}" data-nav="${id}"><span class="nav-icon">${ic}</span><span>${label}</span></button>`;
function shell(a="dashboard"){
 return `<header class="topbar v2-topbar v7-topbar">
   <div class="v7-logo" role="img" aria-label="SPACE16154 Football Intelligence"></div>
</header>
 <main id="main"></main>
 <nav class="bottom-nav v2-bottom-nav">${nav("dashboard","⌂","Dashboard",a)}${nav("matches","□","Matches",a)}${nav("analysis","▥","Analysis",a)}${nav("signals","◎","Top Signals",a)}${`<button class="nav-item ${a==="more"?"active":""}" data-nav="more"><span class="nav-icon v14-more-icon">•••<i class="v14-live-dot"></i></span><span>Altro</span></button>`}</nav>`;
}
function stat(t,v,s,i,p,g){return `<button class="stat-card" ${g?`data-nav="${g}"`:""}><div class="stat-top"><span>${t}</span><b>${i}</b></div><strong>${v}</strong><small>${s}</small><div class="progress"><i style="width:${p}%"></i></div></button>`}
function pred(a,b,c,d,green=true){return `<div class="pred-card ${green?"pred-best":""}"><small>${a}</small><span>${b}</span><strong>${c}</strong><em>${d}%</em></div>`}
function topOutcome(m){const f=fav(m.p);return f}
function featured(m=MATCHES[0]){
 const f=topOutcome(m),g=m.p.gg>=m.p.ng?["GOL",m.p.gg]:["NO GOL",m.p.ng],o=m.p.over>=m.p.under?["OVER 2.5",m.p.over]:["UNDER 2.5",m.p.under];
 return `<section class="panel"><div class="section-head"><h2>☆ &nbsp; MATCH IN EVIDENZA</h2><span>${m.league}</span></div>
 <div class="match-hero"><div class="club">${crest(m.h.code,m.h.cls)}<strong>${m.h.name}</strong></div><div class="match-time"><b>${m.time}</b><span>OGGI</span><em>VS</em></div><div class="club">${crest(m.a.code,m.a.cls)}<strong>${m.a.name}</strong></div></div>
 <div class="prediction-grid">${pred("1X2","ESITO PIÙ PROBABILE",f[0],f[1])}${pred("GOL / NO GOL","ESITO PIÙ PROBABILE",g[0],g[1])}${pred("OVER / UNDER 2.5","ESITO PIÙ PROBABILE",o[0],o[1])}</div>
 <button class="primary-btn" data-match="${m.id}">VAI ALL'ANALISI COMPLETA <span>›</span></button></section>`;
}
function upcoming(){
 return `<section class="panel"><div class="section-head"><h2>PROSSIME PARTITE</h2><button class="text-btn" data-nav="matches">VEDI TUTTE ›</button></div>${MATCHES.slice(1).map(m=>`<button class="fixture" data-match="${m.id}"><div class="fixture-time"><b>${m.time}</b><small>OGGI</small></div><div class="fixture-team">${crest(m.h.code,m.h.cls)}<span>${m.h.name}</span></div><b class="vs">VS</b><div class="fixture-team away"><span>${m.a.name}</span>${crest(m.a.code,m.a.cls)}</div><span class="competition">${m.league}</span><span class="chev">›</span></button>`).join("")}</section>`;
}
function signalLabel(s){return s.type==="Confidence"?"ALTA CONVERGENZA":s.type==="Value"?"VALUE / EDGE":"FORMA"}
function signalCard(s,m){
 return `<article class="signal ${s.kind}"><div class="signal-type">${signalLabel(s)} ${info(s.type,s.reason)}</div><div class="signal-main">${s.pick}</div><div class="signal-match">${m.h.name} vs ${m.a.name}</div><div class="signal-bottom"><span>${s.type==="Value"?"EDGE":s.type==="Forma"?"FORMA":"CONFIDENCE"}</span><strong>${s.type==="Value"?"+"+s.score+"%":s.type==="Forma"?"+"+s.score:s.score+"%"}</strong></div></article>`;
}
function dashboardSignalMatch(m){
 return `<button class="dash-signal-match" data-match="${m.id}">
   <div class="dash-signal-match-head">
     <div><b>${m.h.name} — ${m.a.name}</b><small>${m.league} · ${topOutcome(m)[0]} · ${topOutcome(m)[1]}%</small></div>
     <span>›</span>
   </div>
   <div class="dash-signal-lines">
     ${m.signals.map(s=>`<div class="dash-signal-line ${s.kind}">
       <span class="dash-signal-dot"></span>
       <b>${signalLabel(s)}</b>
       <strong>${s.type==="Value"?"+"+s.score+"%":s.type==="Forma"?"+"+s.score:s.score+"%"}</strong>
     </div>`).join("")}
   </div>
 </button>`;
}




const MONTHS_IT = ["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"];
const V31_NOW = ()=>new Date();
const V31_INITIAL_DATE = V31_NOW();
let DASH_YEAR = V31_INITIAL_DATE.getFullYear();
let DASH_MONTH = V31_INITIAL_DATE.getMonth();
let DASH_DAY = V31_INITIAL_DATE.getDate();
let DASH_DATE_MANUAL = false;

function dashDateMeta(){
  return {
    id:`${DASH_YEAR}-${String(DASH_MONTH+1).padStart(2,"0")}-${String(DASH_DAY).padStart(2,"0")}`,
    label:`${DASH_DAY} ${MONTHS_IT[DASH_MONTH]} ${DASH_YEAR}`,
    short:`${String(DASH_DAY).padStart(2,"0")} ${MONTHS_IT[DASH_MONTH].slice(0,3)}`
  };
}
function daysInMonth(year,month){return new Date(year,month+1,0).getDate()}
function normalizeDashDay(){DASH_DAY=Math.min(DASH_DAY,daysInMonth(DASH_YEAR,DASH_MONTH))}
function matchesForSelectedDate(){
  const seed=(DASH_MONTH*31 + DASH_DAY) % MATCHES.length;
  return Array.from({length:3},(_,i)=>MATCHES[(seed+i)%MATCHES.length]);
}
function closeDashDropdowns(){
  document.querySelectorAll(".v8-dropdown").forEach(x=>x.remove());
}
function openDashDropdown(type,anchor){
  closeDashDropdowns();
  const dd=document.createElement("div");
  dd.className="v8-dropdown";
  const rect=anchor.getBoundingClientRect();
  dd.style.top=`${rect.bottom+6}px`;
  dd.style.right=`${Math.max(8,window.innerWidth-rect.right)}px`;

  if(type==="month"){
    dd.innerHTML=`<div class="v8-dropdown-title">MESE</div><div class="v8-scroll-list">${MONTHS_IT.map((m,i)=>`<button data-v8-month="${i}" class="${i===DASH_MONTH?"active":""}">${m}</button>`).join("")}</div>`;
    dd.querySelectorAll("[data-v8-month]").forEach(b=>b.onclick=()=>{
      DASH_DATE_MANUAL=true; DASH_MONTH=Number(b.dataset.v8Month); normalizeDashDay(); dd.remove(); route("dashboard");
    });
  } else {
    const n=daysInMonth(DASH_YEAR,DASH_MONTH);
    dd.innerHTML=`<div class="v8-dropdown-title">GIORNO</div><div class="v8-scroll-list v8-days-list">${Array.from({length:n},(_,i)=>i+1).map(d=>`<button data-v8-day="${d}" class="${d===DASH_DAY?"active":""}">${String(d).padStart(2,"0")}</button>`).join("")}</div>`;
    dd.querySelectorAll("[data-v8-day]").forEach(b=>b.onclick=()=>{
      DASH_DATE_MANUAL=true; DASH_DAY=Number(b.dataset.v8Day); dd.remove(); route("dashboard");
    });
  }
  document.body.appendChild(dd);
  setTimeout(()=>{
    const active=dd.querySelector(".active"); if(active) active.scrollIntoView({block:"center"});
    document.addEventListener("click",function closer(e){
      if(!dd.contains(e.target) && !e.target.closest(".v8-date-control")){
        dd.remove();document.removeEventListener("click",closer);
      }
    });
  },0);
}



/* ===== V31 REAL DATE + MIDNIGHT ROLLOVER ===== */
function v31TodayParts(now=V31_NOW()){
  return {year:now.getFullYear(),month:now.getMonth(),day:now.getDate()};
}
function v31SetToday(now=V31_NOW(), force=false){
  const t=v31TodayParts(now);
  if(force || !DASH_DATE_MANUAL){
    const changed=DASH_YEAR!==t.year || DASH_MONTH!==t.month || DASH_DAY!==t.day;
    DASH_YEAR=t.year; DASH_MONTH=t.month; DASH_DAY=t.day;
    return changed;
  }
  return false;
}
function v31NextMidnightDelay(now=V31_NOW()){
  const next=new Date(now.getFullYear(),now.getMonth(),now.getDate()+1,0,0,0,120);
  return Math.max(1000,next-now);
}
let V31_MIDNIGHT_TIMER=null;
function v31ScheduleMidnightWatcher(){
  if(V31_MIDNIGHT_TIMER) clearTimeout(V31_MIDNIGHT_TIMER);
  V31_MIDNIGHT_TIMER=setTimeout(()=>{
    const changed=v31SetToday(V31_NOW(),false);
    if(changed && document.querySelector(".v20-dashboard-label")){
      route("dashboard");
    }
    v31ScheduleMidnightWatcher();
  },v31NextMidnightDelay());
}
v31SetToday(V31_NOW(),true);
v31ScheduleMidnightWatcher();

function dashboard(){
 const dayMatches=matchesForSelectedDate();
 const m=dayMatches[0] || MATCHES[0], best=topOutcome(m);
 const oneX2=[["1",m.p.one],["X",m.p.x],["2",m.p.two]];
 const gg=[["GOL",m.p.gg],["NO GOL",m.p.ng]];
 const ou=[["OVER",m.p.over],["UNDER",m.p.under]];
 const leaders=dayMatches.filter(x=>x.signals.length).slice(0,3);
 const all=dayMatches.flatMap(x=>x.signals);
 const confAll=all.filter(s=>s.type==="Confidence"), valueAll=all.filter(s=>s.type==="Value"), formAll=all.filter(s=>s.type==="Forma");
 const pair=(title,arr)=>`<div class="v2-submarket"><b>${title}</b><div>${arr.map(x=>`<span class="${x[1]===Math.max(...arr.map(y=>y[1]))?"best":""}"><small>${x[0]}</small><strong>${x[1]}%</strong></span>`).join("")}</div></div>`;
 const pct=s=>s.type==="Confidence"?s.score:s.type==="Value"?Math.max(0,Math.min(100,R(50+s.score))):Math.max(0,Math.min(100,R(50+s.score/2)));
 const meta=dashDateMeta();

 document.querySelector("#main").innerHTML=`<div class="page v2-dashboard">
   <div class="dash-global-head v8-global-head">
     <div class="v20-dashboard-label"><span class="dash-global-kicker">DASHBOARD</span></div>
     <div class="v8-date-pair" aria-label="Selettore data">
       <button class="v8-date-control" data-open-month>
         <small>MESE</small><strong>${MONTHS_IT[DASH_MONTH].slice(0,3).toUpperCase()}</strong><span class="v18-toggle">+</span>
       </button>
       <button class="v8-date-control day" data-open-day>
         <small>GIORNO</small><strong>${String(DASH_DAY).padStart(2,"0")}</strong><span class="v18-toggle">+</span>
       </button>
     </div>
   </div>

   <section class="v6-hero-combined">
    <div class="v2-panel-head"><h2>MATCH IN EVIDENZA <span>☆</span></h2><b>${meta.short.toUpperCase()}</b></div>
    <div class="v2-meta">${m.league} <i>•</i> ${meta.short} <i>•</i> ${m.time}</div>
    <div class="v2-match">
     <div class="v2-club">${crest(m.h.code,m.h.cls)}<strong>${m.h.name.toUpperCase()}</strong></div>
     <div class="v2-center"><b>VS</b><button data-match="${m.id}">⌁ &nbsp; Analisi completa</button></div>
     <div class="v2-club">${crest(m.a.code,m.a.cls)}<strong>${m.a.name.toUpperCase()}</strong></div>
    </div>
    <div class="v6-prob-divider"></div>
    <div class="v6-prob-title">ESITO PIÙ PROBABILE</div>
    <div class="v2-1x2">${oneX2.map(x=>`<div class="${x[1]===best[1]?"best":""}"><span>${x[0]}</span><strong>${x[1]}%</strong><i></i></div>`).join("")}</div>
    <div class="v2-other-markets">${pair("GOL / NO GOL",gg)}${pair("OVER / UNDER 2.5",ou)}</div>
   </section>

   <section class="v5-upcoming">
    <div class="v2-panel-head"><h2>PROSSIME PARTITE</h2><button data-nav="matches">Vedi tutte ›</button></div>
    <div class="v5-upcoming-list">
      ${dayMatches.slice(1,4).map(x=>`<div class="v23-match-card">
        <div class="v23-time">${x.time}</div>
        <div class="v23-match-row">
          <div class="v23-team home">${crest(x.h.code,x.h.cls)}<b>${x.h.name}</b></div>
          <button class="v23-analysis" data-match="${x.id}">ANALISI</button>
          <div class="v23-team away"><b>${x.a.name}</b>${crest(x.a.code,x.a.cls)}</div>
        </div>
      </div>`).join("") || `<div class="empty-note">Nessun'altra partita disponibile per questa data.</div>`}
    </div>
   </section>

   <section class="v2-signals">
    <div class="v2-panel-head"><h2>TOP SIGNALS</h2><button data-nav="signals">Tutti ›</button></div>
    <div class="v2-signal-list">${leaders.map(x=>{
      const p=topOutcome(x), c=x.signals.find(s=>s.type==="Confidence"), v=x.signals.find(s=>s.type==="Value"), f=x.signals.find(s=>s.type==="Forma");
      return `<button class="v2-signal-row v4-signal-row" data-match="${x.id}">
        <div class="v4-signal-match">
          <div class="v4-team-side home">${crest(x.h.code,x.h.cls)}<span>${x.h.name}</span></div>
          <div class="v4-signal-center">
            <span class="v5-match-time">${x.time}</span>
            <b>${x.h.name} — ${x.a.name}</b>
            <strong>Esito: ${p[0]}</strong>
          </div>
          <div class="v4-team-side away">${crest(x.a.code,x.a.cls)}<span>${x.a.name}</span></div>
          <em>›</em>
        </div>
        <div class="v2-signal-metrics v4-signal-metrics">
         <div><small>Probabilità</small><b>${p[1]}%</b></div>
         <div><small>Confidence</small><b class="${c?"green":""}">${c?c.score+"%":"—"}</b></div>
         <div><small>Value</small><b class="${v?"orange":""}">${v?pct(v)+"%":"—"}</b></div>
         <div><small>Forma</small><b class="${f?"blue":""}">${f?pct(f)+"%":"—"}</b></div>
        </div>
      </button>`;
     }).join("") || `<div class="empty-note">Nessun Top Signal per questa data.</div>`}</div>
    <button class="v2-all-signals" data-nav="signals">▥ &nbsp; Vedi tutti i segnali &nbsp; ›</button>
   </section>

   <section class="v2-overview">
    <div class="v2-panel-head"><h2>PANORAMICA ${meta.short.toUpperCase()}</h2></div>
    <div class="v2-overview-grid">
     <div><i class="green">↗</i><strong>${confAll.length}</strong><b>Segnali<br>High Confidence</b><small>Segnali con forte convergenza degli indicatori.</small></div>
     <div><i class="orange">☆</i><strong>${valueAll.length}</strong><b>Value Bet<br>Disponibili</b><small>Segnali con valore positivo rispetto alla quota demo.</small></div>
     <div><i class="blue">◎</i><strong>${all.length?R(avg(dayMatches.map(x=>topOutcome(x)[1])))+"%":"—"}</strong><b>Probabilità media<br>segnali</b><small>Media della probabilità degli esiti segnalati.</small></div>
     <div><i class="purple">♨</i><strong>${formAll.length}</strong><b>Segnali<br>Forma</b><small>Partite con differenziale di forma sopra soglia.</small></div>
     <div><i class="teal">✦</i><strong>${confAll.length?R(avg(confAll.map(s=>s.score)))+"%":"—"}</strong><b>Confidence<br>media</b><small>Convergenza media dei segnali Confidence.</small></div>
    </div>
   </section>
 </div>`;
 bind();
 document.querySelector("[data-open-month]").onclick=e=>{e.stopPropagation();openDashDropdown("month",e.currentTarget)};
 document.querySelector("[data-open-day]").onclick=e=>{e.stopPropagation();openDashDropdown("day",e.currentTarget)};
}
function matches(){
 document.querySelector("#main").innerHTML=`<div class="page"><div class="eyebrow">CALENDARIO</div><h1>MATCHES</h1><p class="subtitle">Scegli un campionato e poi una partita.</p>
 <div class="league-stack">${CONFIG.leagues.map((l,i)=>`<button class="league-row ${i===0?"active":""}" data-league="${l}"><span>${l}</span><b>${MATCHES.filter(m=>m.league===l).length}</b><em>›</em></button>`).join("")}</div>
 <section class="panel"><div class="section-head"><h2>PARTITE DEL GIORNO</h2><span id="matchCount">${MATCHES.length} disponibili</span></div><div id="matchList">${matchRows(MATCHES)}</div></section></div>`;
 bind();
 document.querySelectorAll("[data-league]").forEach(b=>b.onclick=()=>{document.querySelectorAll("[data-league]").forEach(x=>x.classList.remove("active"));b.classList.add("active");const arr=MATCHES.filter(m=>m.league===b.dataset.league);document.querySelector("#matchList").innerHTML=matchRows(arr);document.querySelector("#matchCount").textContent=arr.length+" disponibili";bindMatchesOnly()});
}
function matchRows(arr){return arr.map(m=>`<button class="match-list" data-match="${m.id}"><span>${m.time}</span><div>${crest(m.h.code,m.h.cls)}<b>${m.h.name}</b></div><em>VS</em><div><b>${m.a.name}</b>${crest(m.a.code,m.a.cls)}</div><strong>${topOutcome(m)[1]}%</strong><small>${m.league} · ${m.signals.length?m.signals.map(s=>s.type).join(" · "):"Nessun Top Signal"}</small></button>`).join("")}
function macroRows(t){return MACROS.map(([k,l])=>`<div class="profile-row"><span>${l} ${info(l,INFO[k])}</span><b>${t.m[k]}</b><div class="profile-bar"><i style="width:${t.m[k]}%"></i></div></div>`).join("")}
function analysis(){
 const league=CONFIG.leagues[0];
 document.querySelector("#main").innerHTML=`<div class="page"><div class="eyebrow">INTELLIGENCE CENTER</div><h1>ANALISI</h1><p class="subtitle">Classifica, squadre e profilo del modello.</p>
 <div class="league-stack analysis-leagues">${CONFIG.leagues.map((l,i)=>`<button class="league-row ${i===0?"active":""}" data-analysis-league="${l}"><span>${l}</span><b>${TEAMS.filter(t=>t.league===l).length}</b><em>›</em></button>`).join("")}</div>
 <div id="analysisLeague"></div></div>`;
 renderLeague(league);bind();
 document.querySelectorAll("[data-analysis-league]").forEach(b=>b.onclick=()=>{document.querySelectorAll("[data-analysis-league]").forEach(x=>x.classList.remove("active"));b.classList.add("active");renderLeague(b.dataset.analysisLeague);bindTeamButtons()});
}
function formDots(xs){return `<span class="form-dots">${xs.map(x=>`<i class="${x.toLowerCase()}">${x}</i>`).join("")}</span>`}
function trendCard(t){
 const values=t.trend.slice(-5);
 const w=260,h=100,padX=14,padY=16;
 const pts=values.map((v,i)=>{
   const x=padX+i*((w-padX*2)/(Math.max(values.length-1,1)));
   const y=h-padY-(v/100)*(h-padY*2);
   return [x,y,v];
 });
 const poly=pts.map(p=>`${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(" ");
 const delta=values.at(-1)-values[0];
 const cls=delta>1?"up":delta<-1?"down":"flat";
 const label=cls==="up"?"Trend positivo":cls==="down"?"Trend negativo":"Trend stabile";
 const arrow=cls==="up"?"↑":cls==="down"?"↓":"→";
 return `<button class="trend-card2 trend-clickable ${cls}" data-team="${t.id}">
   <div class="trend-card-head"><div><b>${t.name}</b><span class="trend-delta ${cls}">${arrow} ${delta>0?"+":""}${delta} <small>negli ultimi 5 periodi</small></span></div><strong>${t.score}</strong></div>
   <div class="trend-chart">
     <svg viewBox="0 0 ${w} ${h}" role="img" aria-label="Trend Model Score ${t.name}">
       <line x1="${padX}" y1="${h-padY}" x2="${w-padX}" y2="${h-padY}" class="axis"></line>
       <line x1="${padX}" y1="${h/2}" x2="${w-padX}" y2="${h/2}" class="grid"></line>
       <polyline points="${poly}" class="trend-line ${cls}"></polyline>
       ${pts.map(p=>`<circle cx="${p[0]}" cy="${p[1]}" r="3.8" class="trend-point ${cls}"></circle><text x="${p[0]}" y="${Math.max(10,p[1]-8)}" text-anchor="middle" class="trend-value">${p[2]}</text>`).join("")}
       ${pts.map((p,i)=>`<text x="${p[0]}" y="${h-2}" text-anchor="middle" class="trend-label">${i===pts.length-1?"Ora":"-"+(pts.length-1-i)}</text>`).join("")}
     </svg>
   </div>
   <span class="trend-pill ${cls}">${arrow} ${label}</span>
 </button>`;
}
function renderLeague(l){
 const arr=TEAMS.filter(t=>t.league===l).sort((a,b)=>b.score-a.score);
 document.querySelector("#analysisLeague").innerHTML=`<section class="panel"><div class="section-head"><h2>CLASSIFICA / SQUADRE</h2><span>MODEL RATING</span></div><div class="rank-head2"><span>#</span><span>Squadra</span><span>P</span><span>Forma</span><span>Rating</span></div>${arr.map((t,i)=>`<button class="rank-row2" data-team="${t.id}"><span>${i+1}</span><div>${crest(t.code,t.cls)}<b>${t.name}</b></div><span>${t.played}</span>${formDots(t.last5)}<strong>${t.score}</strong></button>`).join("")}</section>
 <section class="panel"><div class="section-head"><h2>TREND MODEL SCORE</h2><span>ULTIMI PERIODI</span></div><div class="trend-grid2">${arr.slice(0,2).map(t=>trendCard(t)).join("")}</div><div class="trend-note">ⓘ Il Trend Model Score mostra come cambia la valutazione del modello nel tempo.</div></section>`;
}
function teamProfile(id){
 const t=TEAM[id];
 document.querySelector("#main").innerHTML=`<div class="page"><button class="back-btn" data-nav="analysis">‹ ANALISI</button><div class="eyebrow">PROFILO MODELLO</div><h1>${t.name}</h1><p class="subtitle">${t.league} · dati demo coerenti</p>
 <section class="panel"><div class="section-head"><h2>MODEL RATING</h2><span>${t.score}/100</span></div><div class="team-score-big">${t.score}</div><div class="profile-list">${macroRows(t)}</div></section>
 <section class="panel"><div class="section-head"><h2>STATISTICHE TECNICHE</h2></div><div class="technical-grid">${[["xG",t.raw.xg.toFixed(2)],["xGA",t.raw.xga.toFixed(2)],["Ultimo terzo",R(t.raw.third)],["Qualità tiro",t.raw.shotq.toFixed(2)],["PPDA",t.raw.ppda.toFixed(1)]].map(x=>`<div><small>${x[0]}</small><b>${x[1]}</b></div>`).join("")}</div></section>
 <section class="panel"><div class="section-head"><h2>ULTIME 5</h2></div><div class="form-profile">${formDots(t.last5)}</div></section></div>`;
 bind();
}
function technical(m){return [["xG",m.h.raw.xg.toFixed(2),m.a.raw.xg.toFixed(2)],["xGA",m.h.raw.xga.toFixed(2),m.a.raw.xga.toFixed(2)],["Ultimo terzo",R(m.h.raw.third),R(m.a.raw.third)],["Qualità tiro",m.h.raw.shotq.toFixed(2),m.a.raw.shotq.toFixed(2)],["PPDA",m.h.raw.ppda.toFixed(1),m.a.raw.ppda.toFixed(1)]]}

/* ===== V14: MATCH ANALYSIS / LIVE / FAVORITES ===== */
const V14_MACRO_META={
 threat:{icon:"⚡",title:"Threat Creation",desc:"Capacità di creare occasioni da gol di qualità.",parts:"xG · qualità tiro · ultimo terzo · volume offensivo · recuperi alti"},
 defense:{icon:"🛡",title:"Defense Stability",desc:"Solidità difensiva e prevenzione del pericolo.",parts:"xGA · tiri concessi · qualità occasioni concesse · disponibilità difensiva"},
 form:{icon:"↗",title:"Forma",desc:"Rendimento recente pesato per la forza degli avversari.",parts:"ultime gare · qualità avversari · trend prestazioni · continuità"},
 opponent:{icon:"🎯",title:"Opponent Strength",desc:"Livello degli avversari affrontati recentemente.",parts:"rating avversari · rendimento avversari · difficoltà calendario"},
 pressing:{icon:"🏃",title:"Pressing / PPDA",desc:"Intensità della pressione e capacità di recuperare alto.",parts:"PPDA · recuperi alti · contro-pressione · aggressività"},
 availability:{icon:"♟",title:"Availability",desc:"Disponibilità della rosa e impatto delle assenze.",parts:"titolari disponibili · giocatori chiave · squalifiche · dubbi"}
};
function v14Band(v){
 if(v>=75)return"high"; if(v>=60)return"mid"; return"low";
}
function v14FavoriteIds(){
 try{return JSON.parse(localStorage.getItem("space16154-favorites")||"[]")}catch(e){return[]}
}
function v14IsFavorite(id){return v14FavoriteIds().includes(id)}
function v14ToggleFavorite(id){
 const s=new Set(v14FavoriteIds()); s.has(id)?s.delete(id):s.add(id);
 localStorage.setItem("space16154-favorites",JSON.stringify([...s]));
 return s.has(id);
}
const V14_LIVE={
 "milan-roma":{state:"live",minute:67,hs:2,as:1,events:[
   ["12'","⚽","Milan","Gol · Pulisic"],["27'","🟨","Roma","Ammonizione · Mancini"],["41'","🔄","Milan","Fofana entra per Loftus-Cheek"],
   ["53'","⚽","Roma","Gol · Dybala"],["67'","🟥","Roma","Espulsione · Mancini"]
 ],stats:[["xG","1.86","0.92"],["Tiri","14","8"],["Tiri in porta","6","3"],["Possesso","56%","44%"],["Corner","5","2"],["Falli","9","13"],["Gialli","1","3"],["Rossi","0","1"]]},
 "arsenal-chelsea":{state:"ft",minute:90,hs:2,as:1,events:[
   ["18'","⚽","Arsenal","Gol · Saka"],["37'","🟨","Chelsea","Ammonizione"],["62'","⚽","Chelsea","Gol"],["81'","⚽","Arsenal","Gol decisivo"]
 ],stats:[["xG","1.74","1.05"],["Tiri","13","10"],["Tiri in porta","6","4"],["Possesso","54%","46%"],["Corner","7","4"],["Falli","10","12"],["Gialli","1","2"],["Rossi","0","0"]]},
 "barcelona-sevilla":{state:"upcoming",minute:0,hs:null,as:null,events:[],stats:[]},
 "bayern-leverkusen":{state:"upcoming",minute:0,hs:null,as:null,events:[],stats:[]},
 "psg-lyon":{state:"upcoming",minute:0,hs:null,as:null,events:[],stats:[]}
};
function v14LiveMeta(m){return V14_LIVE[m.id]||{state:"upcoming",minute:0,hs:null,as:null,events:[],stats:[]}}
function v14Status(d,m){
 if(d.state==="live")return`<span class="v14-status live"><i></i> LIVE · ${d.minute}'</span>`;
 if(d.state==="ft")return`<span class="v14-status ft">FT</span>`;
 return`<span class="v14-status upcoming">${m.time}</span>`;
}
function v14TeamFormation(team,side){
 const homeNames=["Neuer","Laimer","Upamecano","Kim","Davies","Kimmich","Goretzka","Musiala","Sané","Coman","Kane"];
 const awayNames=["Hrádecký","Frimpong","Tah","Tapsoba","Grimaldo","Xhaka","Palacios","Wirtz","Adli","Hofmann","Boniface"];
 const names=side==="h"?homeNames:awayNames;
 const roles=["POR","TD","DC","DC","TS","CC","CC","TQ","AD","AS","ATT"];
 return `<div class="v14-lineup"><div class="v14-lineup-title">${team.name}</div><div class="v14-pitch">${names.map((n,i)=>`<span class="v14-player p${i+1}"><b>${roles[i]}</b><small>${n}</small></span>`).join("")}</div><small>Probabile formazione demo · diventerà ufficiale automaticamente quando disponibile.</small></div>`;
}
function v14Referee(m){
 return `<div class="v14-ref-grid">
   <div><small>Arbitro</small><b>${m.referee}</b></div><div><small>Falli / gara</small><b>23.8</b></div>
   <div><small>Gialli / gara</small><b>4.6</b></div><div><small>Rossi / gara</small><b>0.18</b></div>
   <div><small>Rigori / gara</small><b>0.27</b></div><div><small>Nota</small><b>Profilo disciplinare sopra media</b></div>
 </div><p class="v14-ref-note">I precedenti con una squadra sono mostrati come dati storici, non come prova di favoritismo.</p>`;
}

function matchDetail(id){
 const m=MATCHES.find(x=>x.id===id); if(!m){route("matches");return}
 const fav=v14IsFavorite(id),d=v14LiveMeta(m);
 const diff=m.h.score-m.a.score, winner=diff>=0?m.h.name:m.a.name;
 const markets=[
   ["1X2",[["1",m.p.one],["X",m.p.x],["2",m.p.two]]],
   ["GOL / NO GOL",[["GOL",m.p.gg],["NO GOL",m.p.ng]]],
   ["OVER / UNDER 2.5",[["OVER",m.p.over],["UNDER",m.p.under]]]
 ];
 document.querySelector("#main").innerHTML=`<div class="page v14-analysis-page">
  <div class="v14-analysis-top">
    <button class="v14-back" data-nav="matches">←</button>
    <button class="v14-star ${fav?"active":""}" data-v14-fav="${m.id}">${fav?"★":"☆"}</button>
  </div>
  <header class="v14-match-head">
    <h1>${m.h.name} — ${m.a.name}</h1>
    <p>${m.league} · ${dashDateMeta().label} · ${m.time} · Arbitro: ${m.referee}</p>
    <div class="v14-versus">
      <div>${crest(m.h.code,m.h.cls)}<b>${m.h.name}</b></div>
      <div class="v14-vs-center">${d.state!=="upcoming"?`<strong>${d.hs} — ${d.as}</strong>${v14Status(d,m)}`:`<strong>VS</strong>`}</div>
      <div>${crest(m.a.code,m.a.cls)}<b>${m.a.name}</b></div>
    </div>
  </header>

  <section class="v14-card">
    <div class="v14-card-title">PROBABILITÀ DEL MODELLO <button class="info" data-info="${encodeURIComponent("Snapshot pre-match: queste probabilità non vengono riscritte in base agli eventi live.")}">i</button></div>
    <div class="v14-markets">${markets.map(([title,vals])=>{
       const max=Math.max(...vals.map(v=>v[1]));
       return `<div class="v14-market"><b>${title}</b><div>${vals.map(v=>`<span class="${v[1]===max?"best":""}"><small>${v[0]}</small><strong>${v[1]}%</strong></span>`).join("")}</div></div>`;
    }).join("")}</div>
  </section>

  <section class="v14-card v14-model">
    <div class="v14-card-title">ANALISI DEL MODELLO</div>
    <div class="v14-score-head">
      <div class="v14-score-team">${crest(m.h.code,m.h.cls)}<b>${m.h.name}</b><strong>${m.h.score}</strong></div>
      <div class="v14-score-diff"><small>MODEL SCORE</small><strong>${diff>=0?"+":""}${diff}</strong><span>Vantaggio ${winner}</span></div>
      <div class="v14-score-team">${crest(m.a.code,m.a.cls)}<b>${m.a.name}</b><strong>${m.a.score}</strong></div>
    </div>
    <div class="v14-macros">${MACROS.map(([k])=>{
       const meta=V14_MACRO_META[k],hv=m.h.m[k],av=m.a.m[k],dv=hv-av;
       return `<div class="v14-macro">
         <div class="v14-macro-name"><span class="v14-macro-icon">${meta.icon}</span><div><b>${meta.title} <button class="info" data-info="${encodeURIComponent(meta.parts)}">i</button></b><small>${meta.desc}</small></div></div>
         <div class="v14-macro-values">
           <div><strong>${hv}</strong><span class="v14-bar ${k==="opponent"?"neutral":v14Band(hv)}"><i style="width:${hv}%"></i></span></div>
           <em class="${k==="opponent"?"neu":dv>=0?"pos":"neg"}">${dv>=0?"+":""}${dv}${k==="form"?` ${dv>0?"↑":dv<0?"↓":"→"}`:""}</em>
           <div><strong>${av}</strong><span class="v14-bar ${k==="opponent"?"neutral":v14Band(av)}"><i style="width:${av}%"></i></span></div>
         </div>
       </div>`;
    }).join("")}</div>
  </section>

  <div class="v14-accordions">
    <details class="v14-fold"><summary>DATI TECNICI <span class="v18-toggle">+</span></summary><div class="v14-fold-body"><div class="compare-head"><span>INDICATORE</span><b>${m.h.code}</b><b>${m.a.code}</b></div>${technical(m).map(r=>`<div class="compare-row"><span>${r[0]} ${info(r[0],TECH_INFO[r[0]])}</span><b>${r[1]}</b><b>${r[2]}</b></div>`).join("")}</div></details>
    <details class="v14-fold"><summary>PROBABILI FORMAZIONI <span class="v18-toggle">+</span></summary><div class="v14-fold-body v14-lineups">${v14TeamFormation(m.h,"h")}${v14TeamFormation(m.a,"a")}</div></details>
    <details class="v14-fold"><summary>ASSENZE <span class="v18-toggle">+</span></summary><div class="v14-fold-body"><div class="absence-grid">${m.abs.map(a=>`<div><b>${a[0]}</b>${a[1].map(p=>`<p><strong>${p[0]}</strong><span class="${p[1]==="Out"?"out":"doubt"}">${p[1]}</span><small>${p[2]}</small></p>`).join("")}</div>`).join("")}</div></div></details>
    ${ref?`<details class="v14-fold"><summary>ARBITRO <span class="v18-toggle">+</span></summary><div class="v14-fold-body"><div class="v14-ref-grid"><div><small>Arbitro</small><b>${realEsc(ref)}</b></div></div></div></details>`:""}
  </div>
 </div>`;
 bind();
 document.querySelector("[data-v14-fav]").onclick=e=>{
   const on=v14ToggleFavorite(e.currentTarget.dataset.v14Fav);
   e.currentTarget.textContent=on?"★":"☆"; e.currentTarget.classList.toggle("active",on);
 };
}
let SIG={type:"Tutti",league:""};
function allSignals(){return MATCHES.flatMap(m=>m.signals.map(s=>({...s,m})))}
function signalsPage(){
 const all=allSignals(),c=t=>all.filter(x=>x.type===t).length;
 document.querySelector("#main").innerHTML=`<div class="page v41-signals-page">
  <div class="v41-title-row">
    <div><div class="eyebrow">SIGNAL CENTER</div><h1>TOP SIGNALS</h1></div>
    <span class="v41-signal-count">${all.length} SEGNALI</span>
  </div>
  <p class="subtitle">Le opportunità più interessanti individuate dal modello, ordinate per partita.</p>

  <details class="v46-signal-guide">
    <summary><span>COME LEGGERE I SEGNALI</span><em>+</em></summary>
    <div class="v46-guide-grid">
      <div><b>ALTA CONVERGENZA</b><p>Segnale generato quando più famiglie indipendenti di indicatori sostengono contemporaneamente lo stesso esito.</p></div>
      <div><b>CONFIDENCE</b><p>Misura quanto la lettura del modello è coerente internamente. Più è alta, maggiore è la convergenza tra gli indicatori principali.</p></div>
      <div><b>VALUE</b><p>Indica quando la probabilità stimata dal modello è favorevolmente superiore alla probabilità implicita di riferimento.</p></div>
      <div><b>FORMA</b><p>Misura la forza della dinamica recente, tenendo conto anche del contesto e della qualità degli avversari affrontati.</p></div>
    </div>
  </details>

  <div class="top-filter-grid v41-filters">
    <button class="filter active" data-sig-type="Tutti">Tutti</button>
    <button class="filter confidence" data-sig-type="Confidence">Confidence</button>
    <button class="filter value" data-sig-type="Value">Value</button>
    <button class="filter form" data-sig-type="Forma">Forma</button>
  </div>
  <div class="v41-league-filter">
    ${CONFIG.leagues.map(l=>`<button data-sig-league="${l}">${l}</button>`).join("")}
  </div>
  <div class="v41-list-head"><h2>SEGNALI</h2><span id="sigCount"></span></div>
  <div id="sigList" class="v41-signal-list"></div>
 </div>`;
 SIG={type:"Tutti",league:""};renderSig();bind();v43BindSignalFilters();
}
function v43BindSignalFilters(){
 document.querySelectorAll("[data-sig-type]").forEach(b=>b.onclick=()=>{
   SIG.type=b.dataset.sigType;
   document.querySelectorAll("[data-sig-type]").forEach(x=>x.classList.toggle("active",x.dataset.sigType===SIG.type));
   renderSig();bindMatchesOnly();
 });
 document.querySelectorAll("[data-sig-league]").forEach(b=>b.onclick=()=>{
   const league=b.dataset.sigLeague;
   SIG.league = SIG.league===league ? "" : league;
   document.querySelectorAll("[data-sig-league]").forEach(x=>x.classList.toggle("active",x.dataset.sigLeague===SIG.league));
   renderSig();bindMatchesOnly();
 });
}
function renderSig(){
 const matches=MATCHES.filter(m=>{
   const selected=m.signals.filter(s=>SIG.type==="Tutti"||s.type===SIG.type);
   return selected.length && (!SIG.league||m.league===SIG.league);
 });
 document.querySelector("#sigCount").textContent=matches.length+" partite";
 document.querySelector("#sigList").innerHTML=matches.length?matches.map(m=>{
   const selected=m.signals.filter(s=>SIG.type==="Tutti"||s.type===SIG.type);
   const p=topOutcome(m), c=m.signals.find(s=>s.type==="Confidence"),v=m.signals.find(s=>s.type==="Value"),f=m.signals.find(s=>s.type==="Forma");
   return `<button class="v41-signal-card" data-signal-match="${m.id}" data-signal-type="${SIG.type}">
     <div class="v41-card-top">
       <span>${m.league}</span><b>${m.time}</b>
     </div>
     <div class="v41-match">
       <div class="v41-team">${crest(m.h.code,m.h.cls)}<strong>${m.h.name}</strong></div>
       <div class="v41-pick"><small>TOP SIGNAL</small><b>${p[0]}</b><em>${p[1]}%</em></div>
       <div class="v41-team">${crest(m.a.code,m.a.cls)}<strong>${m.a.name}</strong></div>
     </div>
     <div class="v41-metrics">
       <div><small>CONFIDENCE</small><b class="${c?"green":""}">${c?c.score+"%":"—"}</b></div>
       <div><small>VALUE</small><b class="${v?"orange":""}">${v?"+"+v.score+"%":"—"}</b></div>
       <div><small>FORMA</small><b class="${f?"blue":""}">${f?"+"+f.score:"—"}</b></div>
     </div>
     <div class="v41-reasons">
       ${selected.map(s=>`<span class="${s.kind}">${signalLabel(s)} <b>${s.type==="Value"?"+"+s.score+"%":s.type==="Forma"?"+"+s.score:s.score+"%"}</b></span>`).join("")}
       <em>ANALISI ›</em>
     </div>
   </button>`;
 }).join(""):`<div class="empty-note">Nessun segnale rilevante con questi filtri.</div>`;
 document.querySelectorAll("[data-signal-match]").forEach(b=>b.onclick=()=>v43SignalDetail(b.dataset.signalMatch,b.dataset.signalType||"Tutti"));
}

/* ===== V43 TOP SIGNAL DETAIL ===== */
function v43SignalDetail(matchId,signalType="Tutti"){
 const m=MATCHES.find(x=>x.id===matchId); if(!m) return signalsPage();
 const p=topOutcome(m), c=m.signals.find(s=>s.type==="Confidence"), v=m.signals.find(s=>s.type==="Value"), f=m.signals.find(s=>s.type==="Forma");
 const requested=signalType!=="Tutti"?m.signals.find(s=>s.type===signalType):null;
 const primary=requested||c||v||f||m.signals[0];
 v27History({kind:"signal-detail",match:matchId,signalType});
 const drivers=[
   ["Threat Creation",Math.round((m.h.m.threat-m.a.m.threat))],
   ["Defense Stability",Math.round((m.h.m.defense-m.a.m.defense))],
   ["Forma",Math.round((m.h.m.form-m.a.m.form))],
   ["Opponent Strength",Math.round((m.h.m.opponent-m.a.m.opponent))],
   ["Availability",Math.round((m.h.m.availability-m.a.m.availability))]
 ].sort((a,b)=>Math.abs(b[1])-Math.abs(a[1])).slice(0,4);
 const insight=primary?.type==="Confidence"
   ? "Più famiglie indipendenti di indicatori convergono verso lo stesso esito. La Confidence supera la soglia del modello e non emergono segnali contrari sufficientemente forti."
   : primary?.type==="Value"
   ? "La probabilità stimata dal modello è superiore alla probabilità implicita nella quota demo. Il segnale nasce quindi da un vantaggio relativo tra stima interna e mercato."
   : "La forma recente, già corretta per la forza degli avversari affrontati, presenta un differenziale abbastanza forte da generare un segnale dedicato.";
 document.querySelector("#main").innerHTML=`<div class="page v43-signal-detail">
  <button class="v19-back" data-v43-back>← TOP SIGNALS</button>
  <div class="eyebrow">SIGNAL DETAIL · AGGIORNAMENTO DINAMICO</div>
  <h1>${primary?.type==="Confidence"?"ALTA CONVERGENZA":primary?.type==="Value"?"VALUE / EDGE":"FORMA"}</h1>
  <section class="v19-card v43-match-card">
    <div class="v41-card-top"><span>${m.league}</span><b>${m.time}</b></div>
    <div class="v41-match">
      <div class="v41-team">${crest(m.h.code,m.h.cls)}<strong>${m.h.name}</strong></div>
      <div class="v41-pick"><small>ESITO PIÙ PROBABILE</small><b>${p[0]}</b><em>${p[1]}%</em></div>
      <div class="v41-team">${crest(m.a.code,m.a.cls)}<strong>${m.a.name}</strong></div>
    </div>
  </section>

  <section class="v19-card v43-signal-hero">
    <div class="v19-chead"><b>PERCHÉ È UN TOP SIGNAL</b></div>
    <div class="v43-primary">
      <span>${primary?.type==="Confidence"?"ALTA CONVERGENZA":primary?.type==="Value"?"VALUE / EDGE":"FORMA"}</span>
      <strong>${primary?.type==="Confidence"?(primary?.score||0)+"%":primary?.type==="Value"?"+"+(primary?.score||0)+"%":"+"+(primary?.score||0)}</strong>
    </div>
    <p>${insight}</p>
    <div class="v43-drivers">
      ${drivers.map(d=>`<div><b>${d[0]}</b><span class="${d[1]>0?"pos":d[1]<0?"neg":"neu"}">${d[1]>0?"+":""}${d[1]}</span></div>`).join("")}
    </div>
  </section>

  <section class="v19-card v46-live-factors">
    <div class="v19-chead"><b>COSA RAFFORZA / INDEBOLISCE IL SEGNALE</b><span>DINAMICO</span></div>
    <div class="v46-factor-columns">
      <div class="strengthen">
        <small>RAFFORZA</small>
        <p><b>✓</b> Conferma della formazione attesa</p>
        <p><b>✓</b> Availability stabile o in miglioramento</p>
        <p><b>✓</b> Probabilità del modello stabile o crescente</p>
      </div>
      <div class="weaken">
        <small>INDEBOLISCE</small>
        <p><b>!</b> Assenza improvvisa di un giocatore chiave</p>
        <p><b>!</b> Cambio rilevante nelle probabili formazioni</p>
        <p><b>!</b> Riduzione di Confidence o Value rispetto all'ultimo aggiornamento</p>
      </div>
    </div>
    <p class="v46-live-note">Questa lettura è pensata per aggiornarsi durante la giornata quando arrivano nuovi dati: infortuni, formazioni, indisponibilità e variazioni del modello possono modificare la forza del segnale.</p>
  </section>

  <section class="v19-card v43-signal-metrics">
    <div class="v19-chead"><b>LETTURA DEL SEGNALE</b></div>
    <div class="v43-metric-grid">
      <div><small>PROBABILITÀ</small><b>${p[1]}%</b></div>
      <div><small>CONFIDENCE</small><b class="green">${c?c.score+"%":"—"}</b></div>
      <div><small>VALUE</small><b class="orange">${v?"+"+v.score+"%":"—"}</b></div>
      <div><small>FORMA</small><b class="blue">${f?"+"+f.score:"—"}</b></div>
    </div>
    <p class="v43-definition"><b>Alta Convergenza</b> identifica il tipo di segnale; <b>Confidence</b> è la misura numerica della forza/coerenza di quella convergenza.</p>
  </section>

  <button class="primary-btn v43-open-analysis" data-v43-analysis>VEDI ANALISI COMPLETA <span>›</span></button>
 </div>`;
 bind();
 document.querySelector("[data-v43-back]").onclick=()=>history.length>1?history.back():signalsPage();
 document.querySelector("[data-v43-analysis]").onclick=()=>route("match",m.id);
}

const PERF={total:120,accuracy:67,avgConfidence:76,markets:[["1X2",52,68],["Under/Over",38,66],["Gol/No Gol",30,63]],signals:[["Confidence",44,73],["Value",31,65],["Forma",37,70]]};
async function v16Live(){
  document.querySelector("#main").innerHTML=`<div class="page v16-live-page"><header class="v16-live-head"><h1>LIVE</h1><p>SPORTMONKS LIVE DATA</p></header><section class="v16-live-list"><div class="empty-note">Caricamento partite in diretta…</div></section></div>`;bind();
  try{
    const r=await realApi("/live-fixtures");
    const raw=Array.isArray(r?.data)?r.data:Array.isArray(r?.data?.data)?r.data.data:[];
    const allowed=new Set(["Serie A","Premier League","La Liga","Bundesliga","Ligue 1"]);
    const fs=raw.filter(f=>allowed.has(f?.league?.name));
    const root=document.querySelector(".v16-live-list");
    if(!fs.length){root.innerHTML=`<div class="empty-note">Nessuna partita in diretta nei 5 campionati.</div>`;return}
    root.innerHTML=fs.map(f=>{const h=realLoc(f,"home")||{},a=realLoc(f,"away")||{},hs=realScore(f,h.id),as=realScore(f,a.id),minute=f?.time?.minute??f?.minute??f?.state?.short_name??"LIVE";return `<button class="v61-live-card" data-live-match="${f.id}"><div class="v61-live-meta"><span>${realEsc(f?.league?.name||"")}</span><b>${realEsc(minute)}${Number.isFinite(Number(minute))?"′":""}</b></div><div class="v61-live-row"><div>${realCrest(h)}<span>${realEsc(h.name||"—")}</span></div><strong>${hs??"—"} : ${as??"—"}</strong><div>${realCrest(a)}<span>${realEsc(a.name||"—")}</span></div></div></button>`}).join("");
    root.querySelectorAll("[data-live-match]").forEach(b=>b.onclick=()=>route("match",b.dataset.liveMatch));
  }catch(e){document.querySelector(".v16-live-list").innerHTML=`<div class="empty-note">${realEsc(e.message)}</div>`}
}
function more(){
 document.querySelector("#main").innerHTML=`<div class="page v14-more"><div class="eyebrow">SPACE16154</div><h1>ALTRO</h1><p class="subtitle">Partite da seguire, preferiti e trasparenza del modello.</p>
 <button class="more-row2 v14-more-live" data-route="live"><b><i></i> Live</b><span>Risultati, eventi e Match Center ›</span></button><button class="more-row2" data-route="standings"><b>▤ Classifiche</b><span>5 campionati · live ›</span></button>
 <button class="more-row2" data-route="favorites"><b>☆ Preferiti</b><span>Le partite che vuoi seguire ›</span></button>
 <button class="more-row2" data-route="performance"><b>Model Performance</b><span>Storico e risultati del modello ›</span></button>
 <button class="more-row2" data-route="confidence"><b>Model Confidence</b><span>Come viene costruita la Confidence ›</span></button>
 <button class="more-row2" data-info="${encodeURIComponent("Dati → indicatori → normalizzazione 0–100 → macroaree → pesi → Model Score → probabilità → Confidence / Value / Forma → Top Signals. I pesi restano congelati fino a 4–7 giornate reali.")}"><b>Metodologia</b><span>Come ragiona SPACE16154 ›</span></button></div>`;
 bind();
}
function v14LivePage(onlyFav=false){
 const ids=onlyFav?new Set(v14FavoriteIds()):null;
 const arr=MATCHES.filter(m=>!ids||ids.has(m.id));
 const groups=CONFIG.leagues.map(l=>[l,arr.filter(m=>m.league===l)]).filter(x=>x[1].length);
 document.querySelector("#main").innerHTML=`<div class="page v14-live-page"><button class="back-btn" data-nav="more">‹ ALTRO</button><div class="eyebrow">${onlyFav?"LE TUE PARTITE":"MATCH CENTER"}</div><h1>${onlyFav?"PREFERITI":"LIVE"}</h1>
 ${groups.length?groups.map(([l,ms])=>`<section class="v14-live-league"><h2>${l}</h2>${ms.map(m=>{
    const d=v14LiveMeta(m),score=d.state==="upcoming"?"—":`${d.hs} — ${d.as}`;
    return `<button class="v14-live-row" data-live-match="${m.id}">
      <div>${crest(m.h.code,m.h.cls)}<b>${m.h.code}</b></div>
      <div class="v14-live-center"><strong>${score}</strong>${v14Status(d,m)}</div>
      <div><b>${m.a.code}</b>${crest(m.a.code,m.a.cls)}</div>
    </button>`;
 }).join("")}</section>`).join(""):`<div class="v14-empty">Nessuna partita nei Preferiti. Tocca ☆ da una partita per aggiungerla.</div>`}</div>`;
 bind();
 document.querySelectorAll("[data-live-match]").forEach(b=>b.onclick=()=>route("live-match",b.dataset.liveMatch));
}
function livePage(){v14LivePage(false)}
function favoritesPage(){v14LivePage(true)}
function liveMatch(id){
 const m=MATCHES.find(x=>x.id===id); if(!m){route("live");return}
 const d=v14LiveMeta(m),fav=v14IsFavorite(id);
 const stats=d.stats.length?d.stats:[["xG","—","—"],["Tiri","—","—"],["Tiri in porta","—","—"],["Possesso","—","—"]];
 document.querySelector("#main").innerHTML=`<div class="page v14-center-page">
  <div class="v14-analysis-top"><button class="v14-back" data-route="live">←</button><button class="v14-star ${fav?"active":""}" data-v14-fav="${m.id}">${fav?"★":"☆"}</button></div>
  <header class="v14-live-head"><p>${m.league}</p><div><span>${crest(m.h.code,m.h.cls)}<b>${m.h.name}</b></span><strong>${d.state==="upcoming"?"VS":`${d.hs} — ${d.as}`}</strong><span><b>${m.a.name}</b>${crest(m.a.code,m.a.cls)}</span></div>${v14Status(d,m)}</header>
  <section class="v14-timeline"><h2>EVENTI</h2>${d.events.length?d.events.map(e=>`<div><time>${e[0]}</time><i>${e[1]}</i><b>${e[2]}</b><span>${e[3]}</span></div>`).join(""):`<p>Nessun evento live disponibile.</p>`}</section>
  <div class="v14-tabs">
   <button class="active" data-v14-tab="stats">STATISTICHE</button><button data-v14-tab="lineups">FORMAZIONI</button><button data-v14-tab="prematch">ANALISI</button>
  </div>
  <section id="v14TabBody" class="v14-tab-body">
   ${v14StatsTab(m,stats)}
  </section>
 </div>`;
 bind();
 document.querySelector("[data-v14-fav]").onclick=e=>{const on=v14ToggleFavorite(id);e.currentTarget.textContent=on?"★":"☆";e.currentTarget.classList.toggle("active",on)};
 document.querySelectorAll("[data-v14-tab]").forEach(b=>b.onclick=()=>{
   document.querySelectorAll("[data-v14-tab]").forEach(x=>x.classList.toggle("active",x===b));
   const body=document.querySelector("#v14TabBody");
   body.innerHTML=b.dataset.v14Tab==="stats"?v14StatsTab(m,stats):b.dataset.v14Tab==="lineups"?`<div class="v14-lineups">${v14TeamFormation(m.h,"h")}${v14TeamFormation(m.a,"a")}</div>`:v14PrematchTab(m,d);
   bind();
 });
}
function v14StatsTab(m,stats){
 return `<div class="v15-live-stats"><div class="v15-stat-head"><span>${m.h.code}</span><b>STATISTICHE</b><span>${m.a.code}</span></div>${stats.map(r=>{
   const a=parseFloat(String(r[1]).replace("%",""))||0,b=parseFloat(String(r[2]).replace("%",""))||0,total=Math.max(1,a+b),ap=Math.round(a/total*100),bp=100-ap;
   return `<div class="v15-stat-row"><div class="v15-stat-values"><strong>${r[1]}</strong><span>${r[0]}</span><strong>${r[2]}</strong></div><div class="v15-stat-bars"><i style="width:${ap}%"></i><em style="width:${bp}%"></em></div></div>`;
 }).join("")}</div>`;
}
function v14PrematchTab(m,d){
 const groups=[
   ["1X2",[["1",m.p.one],["X",m.p.x],["2",m.p.two]]],
   ["GOL / NO GOL",[["GOL",m.p.gg],["NO GOL",m.p.ng]]],
   ["OVER / UNDER 2.5",[["OVER",m.p.over],["UNDER",m.p.under]]]
 ];
 const comparison=d.state==="ft"?`<div class="v14-vs-result"><h3>PREVISIONE vs RISULTATO</h3><p>Risultato reale: <b>${d.hs} — ${d.as}</b></p><span>Lo snapshot pre-match è conservato senza modifiche retroattive.</span></div>`:"";
 return `<div class="v14-pre"><p>Il modello aveva indicato questi risultati possibili nel pre-match. Le percentuali restano quelle calcolate prima del calcio d'inizio.</p>
 <div class="v15-pre-groups">${groups.map(([t,vals])=>{const mx=Math.max(...vals.map(v=>v[1]));return `<div class="v15-pre-group"><b>${t}</b><div>${vals.map(v=>`<span class="${v[1]===mx?"best":""}"><small>${v[0]}</small><strong>${v[1]}%</strong></span>`).join("")}</div></div>`}).join("")}</div>
 ${comparison}<button class="v14-gold-btn" data-match="${m.id}">VEDI ANALISI PRE-MATCH ›</button></div>`;
}
function performance(){
 document.querySelector("#main").innerHTML=`<div class="page"><button class="back-btn" data-nav="more">‹ ALTRO</button><div class="eyebrow">MODEL PERFORMANCE</div><h1>PERFORMANCE</h1><p class="subtitle">Storico separato dal dettaglio partita.</p>
 <div class="perf-kpis"><div><strong>${PERF.accuracy}%</strong><small>Accuracy demo</small></div><div><strong>${PERF.total}</strong><small>Pronostici</small></div><div><strong>${PERF.avgConfidence}</strong><small>Confidence media</small></div></div>
 <section class="panel"><div class="section-head"><h2>PER MERCATO</h2></div>${PERF.markets.map(r=>`<div class="perf-row"><b>${r[0]}</b><span>${r[1]} pronostici</span><strong>${r[2]}%</strong></div>`).join("")}</section>
 <section class="panel"><div class="section-head"><h2>PER TOP SIGNAL</h2></div>${PERF.signals.map(r=>`<div class="perf-row"><b>${r[0]}</b><span>${r[1]} segnali</span><strong>${r[2]}%</strong></div>`).join("")}</section></div>`;
 bind();
}
function confidencePage(){
 document.querySelector("#main").innerHTML=`<div class="page"><button class="back-btn" data-nav="more">‹ ALTRO</button><div class="eyebrow">MODEL CONFIDENCE</div><h1>CONFIDENCE</h1><p class="subtitle">Misura la convergenza del quadro, non la probabilità dell'esito.</p><section class="panel"><div class="confidence-box"><div><span>MEDIA DEMO</span><strong>${R(avg(MATCHES.map(m=>m.confidence)))}%</strong></div><div class="big-progress"><i style="width:${R(avg(MATCHES.map(m=>m.confidence)))}%"></i></div><p>Una partita può avere una probabilità elevata ma Confidence più bassa se le macroaree non concordano.</p></div></section></div>`;bind();
}
function showInfo(t){let o=document.createElement("div");o.className="modal-backdrop";o.innerHTML=`<div class="info-modal"><button class="modal-x">×</button><div class="eyebrow">INFO</div><p>${t}</p></div>`;document.body.appendChild(o);o.querySelector(".modal-x").onclick=()=>o.remove();o.onclick=e=>{if(e.target===o)o.remove()}}
function bindMatchesOnly(){document.querySelectorAll("[data-match]").forEach(b=>b.onclick=()=>route("match",b.dataset.match))}
function bindTeamButtons(){document.querySelectorAll("[data-team]").forEach(b=>b.onclick=()=>route("team",b.dataset.team))}
function bind(){
 document.querySelectorAll("[data-nav]").forEach(b=>b.onclick=()=>route(b.dataset.nav));
 bindMatchesOnly();bindTeamButtons();
 document.querySelectorAll(".info").forEach(b=>b.onclick=e=>{e.stopPropagation();showInfo(decodeURIComponent(b.dataset.info))});
 document.querySelectorAll("[data-route]").forEach(b=>b.onclick=()=>route(b.dataset.route));
 document.querySelectorAll("[data-info]").forEach(b=>{if(!b.classList.contains("info"))b.onclick=()=>showInfo(decodeURIComponent(b.dataset.info))});
}

/* V19 ANALYSIS INTELLIGENCE CENTER */
const V19L=[["Serie A","A"],["Premier League","PL"],["La Liga","LL"],["Bundesliga","BL"],["Ligue 1","L1"]];
const V19T={"Serie A":[["milan","MIL","Milan",24,"V","V","N","V","P",82],["inter","INT","Inter",24,"V","V","V","N","V",80],["napoli","NAP","Napoli",24,"V","N","V","V","N",78],["roma","ROM","Roma",24,"N","V","P","V","V",71],["juventus","JUV","Juventus",24,"V","P","N","V","N",69]],"Premier League":[["arsenal","ARS","Arsenal",25,"V","V","N","V","V",84],["mancity","MCI","Man City",25,"V","N","V","P","V",81],["liverpool","LIV","Liverpool",25,"V","V","V","N","P",79],["chelsea","CHE","Chelsea",25,"N","V","P","V","V",74]],"La Liga":[["barcelona","BAR","Barcelona",24,"V","V","V","N","V",85],["realmadrid","RMA","Real Madrid",24,"V","N","V","V","V",84],["atletico","ATM","Atlético",24,"N","V","V","P","V",76]],"Bundesliga":[["bayern","BAY","Bayern",23,"V","V","V","V","N",86],["leverkusen","LEV","Leverkusen",23,"V","N","V","V","P",75],["dortmund","BVB","Dortmund",23,"P","V","N","V","V",72]],"Ligue 1":[["psg","PSG","PSG",24,"V","V","V","V","V",88],["monaco","MON","Monaco",24,"V","N","P","V","V",74],["lyon","LYO","Lyon",24,"N","V","V","P","N",68]]};
const V19M={milan:[88,72,81,64,84,58],inter:[82,83,79,67,80,76],napoli:[80,77,78,65,73,79],roma:[74,68,73,61,70,66],bayern:[91,80,88,66,87,82],leverkusen:[82,75,78,65,81,73],arsenal:[87,82,84,68,86,80],barcelona:[90,77,86,63,88,79],psg:[92,79,90,60,85,84]};
function v19Logo(x){return `<span class="v19-logo">${x}</span>`}
function v19Form(a){return a.map(x=>`<i class="${x==="V"?"win":x==="P"?"loss":"draw"}">${x}</i>`).join("")}

/* ===== V27 EXPLICIT HISTORY NAVIGATION ===== */
let V27_HISTORY_LOCK=false, V27_HISTORY_STARTED=false;
function v27History(state,replace=false){
 if(V27_HISTORY_LOCK) return;
 const payload={space16154v27:true,...state};
 if(!V27_HISTORY_STARTED || replace){
   history.replaceState(payload,"",location.href);
   V27_HISTORY_STARTED=true;
 }else{
   history.pushState(payload,"",location.href);
 }
}
window.addEventListener("popstate",e=>{
 const s=e.state;
 if(!s||!s.space16154v27) return;
 V27_HISTORY_LOCK=true;
 try{
   if(s.kind==="route") route(s.n,s.id);
   else if(s.kind==="analysis-home") v19AnalysisHome();
   else if(s.kind==="analysis-league") v19League(s.league);
   else if(s.kind==="analysis-team") v19Team(s.team,s.league);
   else if(s.kind==="analysis-macro") v25MacroDetail(s.team,s.league,s.macro);
   else if(s.kind==="team-stats") v29TeamStats(s.team,s.league,s.tab||"generale",false);
 else if(s.kind==="rating-trend") v33RatingTrend(s.team,s.league);
   else if(s.kind==="signal-detail") v43SignalDetail(s.match,s.signalType||"Tutti");
 }finally{
   V27_HISTORY_LOCK=false;
 }
});

async function v19AnalysisHome(){v27History({kind:"analysis-home"});document.querySelector("#main").innerHTML=`<div class="page v19-home"><header><h1>ANALYSIS</h1><p>INTELLIGENCE CENTER</p></header><div class="empty-note">Caricamento campionati…</div></div>`;bind();const meta=await v60CompetitionMeta();const comps=V60_COMPETITIONS.map(c=>({...c,...((meta?.competitions||[]).find(x=>x.key===c.key)||{})}));document.querySelector("#main").innerHTML=`<div class="page v19-home"><header><h1>ANALYSIS</h1><p>INTELLIGENCE CENTER</p></header><div class="v19-leagues">${comps.map(l=>`<button data-v60-analysis="${l.key}">${v60LeagueLogo(l)}<b>${realEsc(l.name)}</b></button>`).join("")}</div></div>`;bind();document.querySelectorAll("[data-v60-analysis]").forEach(b=>b.onclick=()=>v60StandingsPage(b.dataset.v60Analysis))}

function v20RatingClass(v){return v>=80?"elite":v>=72?"strong":"watch"}
function v20TrendChart(values){
 const min=50,max=90,w=320,h=150,left=38,right=12,top=14,bottom=27;
 const px=i=>left+i*((w-left-right)/(values.length-1));
 const py=v=>top+(max-v)*((h-top-bottom)/(max-min));
 const grid=[90,80,70,60,50];
 const segs=values.slice(0,-1).map((v,i)=>{
   const n=values[i+1],cls=n>v?"seg-up":n<v?"seg-down":"seg-flat";
   return `<line x1="${px(i)}" y1="${py(v)}" x2="${px(i+1)}" y2="${py(n)}" class="${cls}"/>`;
 }).join("");
 return `<svg class="v20-line-chart" viewBox="0 0 ${w} ${h}" role="img" aria-label="Andamento Model Rating">
   ${grid.map(v=>`<line x1="${left}" y1="${py(v)}" x2="${w-right}" y2="${py(v)}" class="grid"/><text x="${left-8}" y="${py(v)+3}" text-anchor="end">${v}</text>`).join("")}
   ${segs}
   ${values.map((v,i)=>`<circle cx="${px(i)}" cy="${py(v)}" r="4" class="point"/><text x="${px(i)}" y="${py(v)-9}" text-anchor="middle" class="val">${v}</text><text x="${px(i)}" y="${h-8}" text-anchor="middle" class="day">G${i+1}</text>`).join("")}
 </svg>`;
}
function v20SummaryText(ms,rank){
 const strongA=ms[rank[0][1]], strongB=ms[rank[1][1]], weakA=ms[rank.at(-1)[1]], weakB=ms[rank.at(-2)[1]];
 return `<div class="v20-summary-columns">
   <div class="v20-summary-col strength"><small>PUNTI FORTI</small>
     <p><span>${strongA.icon}</span><b>${strongA.title}</b><em>Area tra le più solide del profilo attuale.</em></p>
     <p><span>${strongB.icon}</span><b>${strongB.title}</b><em>Contributo positivo e stabile al Model Rating.</em></p>
   </div>
   <div class="v20-summary-col weakness"><small>PUNTI DEBOLI</small>
     <p><span>${weakA.icon}</span><b>${weakA.title}</b><em>Area che limita maggiormente il profilo attuale.</em></p>
     <p><span>${weakB.icon}</span><b>${weakB.title}</b><em>Indicatore da monitorare nelle prossime gare.</em></p>
   </div>
 </div>`;
}

/* ===== V25 MACROAREA DETAIL PAGES ===== */
const V25_MACROS = {
  "Threat Creation": {
    icon:"⚡", desc:"Capacità di creare occasioni da gol con continuità e qualità.",
    groups:[
      ["PRODUZIONE OFFENSIVA","Misura il volume offensivo prodotto dalla squadra: quante occasioni riesce a costruire, con quale frequenza arriva al tiro e quante conclusioni raggiungono la porta. Un valore alto indica una squadra capace di creare pressione offensiva con continuità.",[["xG","1.89","PER 90 MIN","+0.21"],["TIRI","14.6","PER 90 MIN","+1.8"],["TIRI IN PORTA","5.1","PER 90 MIN","+0.6"]],84],
      ["QUALITÀ DELLE OCCASIONI","Valuta quanto sono realmente pericolose le occasioni create, andando oltre il semplice numero di tiri. Considera la qualità media delle conclusioni, le grandi occasioni e gli xG prodotti da azione: più il rating è alto, più la squadra costruisce situazioni ad alta probabilità di gol.",[["xG PER TIRO","0.13","","+0.01"],["BIG CHANCES","2.7","PER 90 MIN","+0.4"],["xG DA AZIONE","1.45","PER 90 MIN","+0.16"]],79],
      ["EFFICACIA","Misura quanto bene la squadra converte in gol ciò che riesce a creare. Confronta reti, xG e percentuale di conversione per capire se la finalizzazione sta aggiungendo valore oppure se la squadra sta sprecando occasioni favorevoli.",[["GOL / xG","1.12","","+0.10"],["CONVERSIONE %","15.0%","","+1.6%"],["GOL","2.1","PER 90 MIN","+0.3"]],81]
    ]
  },
  "Defense Stability": {
    icon:"🛡️", desc:"Solidità difensiva e capacità di limitare il pericolo concesso.",
    groups:[
      ["PROTEZIONE AREA","Misura la capacità di proteggere la propria area e ridurre il volume offensivo avversario. Considera xG concessi, tiri e tiri in porta subiti: valori migliori indicano una squadra che concede meno opportunità realmente pericolose.",[["xGA","0.98","PER 90 MIN","-0.08"],["TIRI CONCESSI","9.1","PER 90 MIN","-1.2"],["TIRI IN PORTA CONCESSI","3.0","PER 90 MIN","-0.4"]],76],
      ["QUALITÀ CONCESSA","Valuta la qualità delle occasioni concesse agli avversari. Non conta soltanto quanti tiri vengono subiti, ma da quali situazioni arrivano: un buon rating indica che la squadra costringe gli avversari a conclusioni mediamente meno pericolose.",[["xGA PER TIRO","0.10","","-0.01"],["BIG CHANCES CONCESSE","1.3","PER 90 MIN","-0.2"],["GOL CONCESSI","0.9","PER 90 MIN","-0.2"]],73],
      ["RESILIENZA","Misura la capacità della squadra di resistere nei momenti di pressione e limitare gli errori che possono trasformarsi in occasioni o gol. Tiene conto di clean sheet, interventi efficaci e frequenza degli errori gravi.",[["CLEAN SHEET","42%","","+5%"],["STOP RATE","71%","","+4%"],["ERRORI GRAVI","0.18","PER 90 MIN","-0.05"]],72]
    ]
  },
  "Forma": {
    icon:"↗", desc:"Rendimento recente pesato per la forza degli avversari.",
    groups:[
      ["RISULTATI RECENTI","Riassume i risultati ottenuti nelle partite più recenti, dando peso a punti conquistati, gol segnati e gol subiti. Serve a fotografare il momento della squadra senza confonderlo con la sua forza complessiva di lungo periodo.",[["PUNTI/GARA","2.20","ULTIME 5","+0.40"],["GOL FATTI","2.0","PER GARA","+0.4"],["GOL SUBITI","0.8","PER GARA","-0.3"]],83],
      ["QUALITÀ PERFORMANCE","Analizza ciò che c'è dietro ai risultati recenti. xG difference, controllo territoriale e differenza tiri aiutano a capire se la forma è sostenuta da prestazioni solide oppure se i risultati sono migliori o peggiori di quanto prodotto sul campo.",[["xG DIFF","0.72","PER GARA","+0.18"],["FIELD TILT","58%","","+6%"],["SHOT DIFF","+5.2","PER GARA","+1.4"]],81],
      ["PESO AVVERSARI","Contestualizza la forma recente in base agli avversari affrontati e al tipo di partite giocate. Una serie positiva contro squadre forti ha un significato diverso dalla stessa serie ottenuta contro avversari di livello inferiore.",[["RATING MEDIO AVV.","72","","+3"],["TRASFERTA","3","ULTIME 5",""],["TOP-6 AFFRONTATE","2","ULTIME 5",""]],78]
    ]
  },
  "Opponent Strength": {
    icon:"🎯", desc:"Livello medio degli avversari affrontati recentemente.",
    groups:[
      ["FORZA MEDIA","Misura il livello medio delle squadre affrontate nel periodo analizzato. Questa area descrive la difficoltà del contesto e non la qualità diretta della squadra: affrontare avversari più forti rende il campione recente più impegnativo.",[["RATING MEDIO","68","","-4"],["POSIZIONE MEDIA","10.4","","+1.8"],["TOP-6","1","ULTIME 5","-1"]],64],
      ["DIFFICOLTÀ CALENDARIO","Valuta quanto è stato impegnativo il calendario recente senza considerare i risultati ottenuti. Il SoS Index (Strength of Schedule) è costruito dal modello come media ponderata del rating degli avversari: le partite più recenti pesano di più e quelle più lontane progressivamente meno.",[["SOS INDEX","74","","+3"],["RATING AVV. RECENTE","78","","+5"],["RATING AVV. MENO RECENTE","68","","-2"]],74],
      ["CONTESTO RISULTATI","Confronta la media punti ottenuta contro avversari divisi per fasce di Model Rating. In questo modo si vede come cambia il rendimento quando aumenta la qualità dell'opposizione, senza usare etichette generiche come Top, Mid o Low.",[["PTS VS 50–70","2.55","PER GARA","+0.25"],["PTS VS 71–80","2.05","PER GARA","+0.15"],["PTS VS 81–90","1.55","PER GARA","+0.10"],["PTS VS 91–100","1.10","PER GARA","+0.05"]],70]
    ]
  },
  "Pressing / PPDA": {
    icon:"🏃", desc:"Intensità della pressione e capacità di recuperare alto.",
    groups:[
      ["INTENSITÀ PRESSING","Misura quanto aggressivamente la squadra cerca di recuperare il possesso quando non ha il pallone. PPDA, recuperi alti e volume delle pressioni descrivono l'intensità: per il PPDA, a parità di contesto, un valore più basso indica generalmente un pressing più aggressivo.",[["PPDA","8.0","","-0.8"],["RECUPERI ALTI","9.4","PER 90 MIN","+1.1"],["PRESSIONI","151","PER 90 MIN","+12"]],86],
      ["EFFICIENZA","Valuta quanto il lavoro di pressione si trasforma realmente in vantaggio. Considera la percentuale di pressioni efficaci, i recuperi del possesso in zone avanzate e le occasioni create immediatamente dopo la riconquista del pallone.",[["SUCCESS RATE","34%","","+4%"],["RECUPERI ALTI EFFICACI","6.1","PER 90 MIN","+0.8"],["SHOT AFTER PRESS","2.3","PER 90 MIN","+0.4"]],82],
      ["CONTINUITÀ","Misura quanto il pressing rimane efficace e coerente durante tutta la partita. Confronta primo e secondo tempo e sintetizza la capacità di mantenere l'intensità senza cali marcati attraverso un indice di Stabilità Pressing.",[["1° TEMPO","87","","+5"],["2° TEMPO","81","","+3"],["STABILITÀ PRESSING","84","","+4"]],84]
    ]
  },
  "Availability": {
    icon:"👥", desc:"Impatto di assenze e disponibilità della rosa.",
    groups:[
      ["DISPONIBILITÀ ROSA","Misura quanta parte della rosa, soprattutto dei giocatori più importanti, è realmente disponibile. Tiene conto degli assenti, dei minuti persi e della disponibilità dei titolari abituali: maggiore disponibilità significa più possibilità di schierare la squadra ideale.",[["TITOLARI DISP.","91%","","+3%"],["MINUTI PERSI","248","ULTIME 5","-62"],["ASSENTI CHIAVE","1","","-1"]],90],
      ["QUALITÀ SOSTITUTI","Valuta la profondità della rosa e quanto le alternative riescono a limitare il calo di rendimento quando manca un titolare. Il Calo senza titolari misura la perdita stimata di rendimento rispetto all'undici ideale: in questo caso un valore più basso è migliore.",[["DEPTH SCORE","84","","+4"],["BENCH IMPACT","79","","+6"],["CALO SENZA TITOLARI","6%","","-3%"]],84],
      ["STABILITÀ XI","Misura la stabilità dell'undici utilizzato e del nucleo principale della squadra. Una formazione più stabile può favorire automatismi e continuità, mentre molti cambi obbligati possono aumentare l'incertezza del rendimento.",[["XI CONFERMATO","8.4","MEDIA","+0.8"],["CAMBI/GARA","2.6","","-0.5"],["MINUTI CORE","86%","","+4%"]],88]
    ]
  }
};


/* ===== V27 METRIC SEMANTICS =====
   The sign is not the color. Direction defines whether higher/lower is beneficial.
*/
const V27_METRIC_DIRECTION={
 "xG":"higher","TIRI":"higher","TIRI IN PORTA":"higher","xG PER TIRO":"higher","BIG CHANCES":"higher","xG DA AZIONE":"higher",
 "GOL / xG":"higher","CONVERSIONE %":"higher","GOL":"higher",
 "xGA":"lower","TIRI CONCESSI":"lower","TIRI IN PORTA CONCESSI":"lower","xGA PER TIRO":"lower","BIG CHANCES CONCESSE":"lower","GOL CONCESSI":"lower","ERRORI GRAVI":"lower",
 "CLEAN SHEET":"higher","STOP RATE":"higher",
 "PUNTI/GARA":"higher","GOL FATTI":"higher","GOL SUBITI":"lower","xG DIFF":"higher","FIELD TILT":"higher","SHOT DIFF":"higher",
 "PPDA":"lower","RECUPERI ALTI":"higher","PRESSIONI":"higher","SUCCESS RATE":"higher","RECUPERI ALTI EFFICACI":"higher","SHOT AFTER PRESS":"higher",
 "1° TEMPO":"higher","2° TEMPO":"higher","STABILITÀ PRESSING":"higher",
 "TITOLARI DISP.":"higher","MINUTI PERSI":"lower","ASSENTI CHIAVE":"lower","DEPTH SCORE":"higher","BENCH IMPACT":"higher","CALO SENZA TITOLARI":"lower",
 "XI CONFERMATO":"higher","CAMBI/GARA":"lower","MINUTI CORE":"higher",
 "RATING MEDIO":"neutral","POSIZIONE MEDIA":"neutral","TOP-6":"neutral","RATING MEDIO AVV.":"neutral","TRASFERTA":"neutral","TOP-6 AFFRONTATE":"neutral","SOS INDEX":"neutral","RATING AVV. RECENTE":"neutral","RATING AVV. MENO RECENTE":"neutral",
 "PTS VS 50–70":"higher","PTS VS 71–80":"higher","PTS VS 81–90":"higher","PTS VS 91–100":"higher"
};
function v27DeltaNumber(x){
 const m=String(x||"").replace(",",".").match(/[-+]?\d*\.?\d+/);
 return m?Number(m[0]):0;
}
function v27MetricClass(name,delta){
 const dir=V27_METRIC_DIRECTION[name]||"neutral", d=v27DeltaNumber(delta);
 if(!delta || Math.abs(d)<1e-9 || dir==="neutral") return "neutral";
 const beneficial=(dir==="higher"&&d>0)||(dir==="lower"&&d<0);
 return beneficial?"good":"bad";
}
/* Demo implementation of the future SoS calculation.
   Newest fixture receives the greatest weight; results are intentionally excluded. */
function v27SoS(opponentRatings){
 const weights=[.30,.25,.20,.15,.10].slice(0,opponentRatings.length);
 const total=weights.reduce((a,b)=>a+b,0)||1;
 return opponentRatings.reduce((s,r,i)=>s+r*weights[i],0)/total;
}

function v25MacroTrend(base){
 const arr=[Math.max(50,base-12),Math.max(50,base-8),Math.max(50,base-6),Math.max(50,base-3),base];
 return v20TrendChart(arr);
}

function v25MacroDetail(teamId,league,macroTitle){
 v27History({kind:"analysis-macro",team:teamId,league,macro:macroTitle});
 const t=(V19T[league]||[]).find(x=>x[0]===teamId); if(!t) return v19League(league);
 const vals=V19M[teamId]||[78,72,76,64,74,70], metas=Object.values(V14_MACRO_META);
 const idx=metas.findIndex(x=>x.title===macroTitle);
 const rating=vals[idx>=0?idx:0];
 const cfg=V25_MACROS[macroTitle]||V25_MACROS["Threat Creation"];
 const trend=Math.max(-8,Math.min(8,rating-(rating-6)));
 document.querySelector("#main").innerHTML=`<div class="page v25-macro-page">
   <button class="v19-back" data-v25-back>← ${t.name}</button>
   <header class="v25-macro-team">${crest(t[1],"")}<h1>${t[2]}</h1></header>

   <section class="v25-macro-hero">
     <div class="v25-macro-title"><span>${cfg.icon}</span><div><h2>${macroTitle.toUpperCase()}</h2><p>${cfg.desc}</p></div></div>
     <div class="v25-macro-score"><strong>${rating}</strong><em class="${trend>=0?"up":"down"}">${trend>=0?"+":""}${trend}</em><small>RATING</small></div>
   </section>
   <div class="v27-league-compare"><b>Δ VS MEDIA ${league.toUpperCase()}</b><span>Il colore indica se lo scarto è favorevole, sfavorevole o puramente contestuale per quella specifica metrica.</span></div>

   <div class="v25-groups">
     ${cfg.groups.map((g,gi)=>`<section class="v25-group">
       <div class="v25-group-head"><div><b>${g[0]}</b><small>${g[1]}</small></div><span>${g[3]}</span></div>
       <div class="v25-metrics">${g[2].map(m=>`<div><small>${m[0]}</small><strong>${m[1]}</strong>${m[2]?`<em>${m[2]}</em>`:""}<i class="${v27MetricClass(m[0],m[3])}">${m[3]||"—"}</i></div>`).join("")}</div>
       <div class="v25-group-bar"><i style="width:${g[3]}%"></i></div>
     </section>`).join("")}
   </div>

   <section class="v25-trend-card">
     <div class="v25-trend-head"><div><b>TREND</b><small>ULTIME 5 VALUTAZIONI</small></div><strong class="up">MIGLIORAMENTO</strong></div>
     <div class="v20-chart-wrap">${v25MacroTrend(rating)}</div>
     <p>${macroTitle} mostra un andamento recente ${trend>=0?"positivo":"in calo"} rispetto alle valutazioni precedenti.</p>
   </section>
 </div>`;
 bind();
 document.querySelector("[data-v25-back]").onclick=()=>history.length>1?history.back():v19Team(teamId,league);
}



/* ===== V33 MODEL RATING TREND DETAIL ===== */

/* V37 — single source of truth for Model Rating Trend.
   Replace this provider with Sportmonks/model data later; both views stay synchronized. */
function v37TrendData(teamId,league){
  const row=(V19T[league]||[]).find(x=>x[0]===teamId) || (V19T["Serie A"]||[])[0];
  const current=row[9];
  const vals=[current-6,current-4,current-5,current-3,current];
  return {
    current,
    delta: vals[4]-vals[0],
    points:[
      {d:"20 LUG",v:vals[0],type:"match"},
      {d:"24 LUG",v:vals[1],type:"match"},
      {d:"31 LUG",v:vals[2],type:"match"},
      {d:"4 AGO",v:vals[3],type:"update"},
      {d:"11 AGO",v:vals[4],type:"match"}
    ]
  };
}


/* V40 — deterministic Interpretation Engine.
   Reads rating direction + macroarea deltas and produces contextual insight. */
function v40InterpretRatingChange(ratingDelta,factors){
  const rows=factors.map(f=>({name:f[1],delta:Number(f[4])||0}));
  const by=n=>rows.find(x=>x.name===n)?.delta||0;
  const availability=by("Availability"), opponent=by("Opponent Strength");
  const positive=rows.filter(x=>x.delta>0).sort((a,b)=>b.delta-a.delta);
  const negative=rows.filter(x=>x.delta<0).sort((a,b)=>a.delta-b.delta);
  const strong=positive.filter(x=>x.delta>=4);
  const names=xs=>xs.slice(0,2).map(x=>x.name).join(" e ");

  if(ratingDelta>0){
    let s=`Il Model Rating cresce di ${ratingDelta} punti`;
    if(strong.length) s+=`, sostenuto soprattutto da ${names(strong)}`;
    else if(positive.length) s+=`, con il contributo principale di ${names(positive)}`;
    if(opponent>0) s+=`. Il miglioramento assume ulteriore valore considerando il livello degli avversari affrontati`;
    if(availability<0) s+=`. La crescita arriva nonostante una disponibilità della rosa inferiore: le altre macroaree hanno più che compensato l'impatto delle assenze, segnale di buona capacità di assorbire le indisponibilità`;
    else if(negative.length) s+=`. ${negative[0].name} resta il principale elemento di freno`;
    return s+".";
  }
  if(ratingDelta<0){
    let s=`Il Model Rating scende di ${Math.abs(ratingDelta)} punti`;
    if(negative.length) s+=`, penalizzato soprattutto da ${names(negative)}`;
    if(availability<0) s+=`. La minore disponibilità della rosa contribuisce al calo`;
    if(positive.length) s+=`. Il miglioramento di ${names(positive)} non è stato sufficiente a compensare le aree in peggioramento`;
    return s+".";
  }
  if(positive.length && negative.length)
    return `Il Model Rating resta stabile, ma sotto la superficie il quadro è dinamico: i progressi in ${names(positive)} vengono compensati dal peggioramento di ${names(negative)}.`;
  return "Il Model Rating resta stabile e le principali macroaree non mostrano variazioni abbastanza forti da modificarne la valutazione complessiva.";
}

function v33RatingTrend(teamId,league){
  const row=(V19T[league]||[]).find(x=>x[0]===teamId) || (V19T["Serie A"]||[])[0];
  const trendData=v37TrendData(teamId,league);
  const t={id:row[0],abbr:row[1],name:row[2],league:league||"Serie A",rating:trendData.current,trend:trendData.delta};
  const points=trendData.points.map((p,i)=>{
    const opponents=(V19T[league]||[]).filter(x=>x[0]!==teamId).map(x=>x[2]);
    const opp=n=>opponents[n%Math.max(1,opponents.length)]||"Avversario";
    const meta=[
      {label:"20 LUG · PARTITA",title:`${row[2]} 2–1 ${opp(0)}`},
      {label:"24 LUG · PARTITA",title:`${row[2]} 1–0 ${opp(1)}`},
      {label:"31 LUG · PARTITA",title:`${row[2]} 2–2 ${opp(2)}`},
      {label:"4 AGO · PARTITA",title:`${row[2]} 2–0 ${opp(3)}`},
      {label:"11 AGO · AGGIORNAMENTO MODELLO",title:"Aggiornamento modello"}
    ][i];
    const prev=i ? trendData.points[i-1].v : p.v;
    return {...p,...meta,prev,delta:p.v-prev};
  });
  let selected=3;
  const factors = [
    ["⚡","Threat Creation",78,84,6],
    ["🛡️","Defense Stability",76,81,5],
    ["↗","Forma",74,80,6],
    ["🎯","Opponent Strength",70,72,2],
    ["⌁","Pressing / PPDA",77,81,4],
    ["♟","Availability",76,73,-3]
  ];
  const history = [
    ["10 AGO","Aggiornamento modello",88,1,"update"],
    ["7 AGO","Milan 1–0 Torino",87,2,"match"],
    ["4 AGO","Milan 2–0 Roma",85,3,"match"],
    ["31 LUG","Milan 3–1 Bologna",82,3,"match"],
    ["28 LUG","Aggiornamento modello",79,-1,"update"]
  ];
  const min=70,max=90,w=320,h=158,left=34,right=12,top=18,bottom=32;
  const px=i=>left+i*((w-left-right)/(points.length-1));
  const py=v=>top+(max-v)*((h-top-bottom)/(max-min));
  const grid=[90,85,80,75,70];
  const segments=points.slice(0,-1).map((p,i)=>{
    const n=points[i+1],cls=n.v>p.v?"seg-up":n.v<p.v?"seg-down":"seg-flat";
    return `<line x1="${px(i)}" y1="${py(p.v)}" x2="${px(i+1)}" y2="${py(n.v)}" class="${cls}"/>`;
  }).join("");
  const html=`
  <main class="v33-page v36-trend-page">
    <section class="v36-team">
      <div class="crest">${t.abbr||"MIL"}</div>
      <div><h1>${t.name||"Milan"}</h1><small>${t.league||"Serie A"}</small></div>
      <div class="v36-rating"><small>MODEL RATING</small><b>${t.rating||82}</b><strong class="pos">+${Math.abs(t.trend||6)}</strong></div>
    </section>

    <section class="v19-card v36-chart-card v37-glass">
      <div class="v19-chead"><b>MODEL RATING TREND</b><span>ULTIME 5 VALUTAZIONI</span></div>
      <p class="v36-desc">Come è cambiato il rating nelle ultime valutazioni del modello.</p>
      <div class="v36-chart-wrap v39-chart-wrap">
        <svg class="v36-chart v39-detail-chart" viewBox="0 0 ${w} ${h}" role="img" aria-label="Andamento Model Rating">
          ${grid.map(v=>`<line x1="${left}" y1="${py(v)}" x2="${w-right}" y2="${py(v)}" class="grid"/><text x="${left-9}" y="${py(v)+3}" text-anchor="end" class="axis">${v}</text>`).join("")}
          ${segments}
          ${points.map((p,i)=>`<circle cx="${px(i)}" cy="${py(p.v)}" r="5" class="v39-point ${i===selected?"selected":""}" data-trend-index="${i}"/>
             <text x="${px(i)}" y="${py(p.v)-10}" text-anchor="middle" class="val">${p.v}</text>
             <text x="${px(i)}" y="${h-9}" text-anchor="middle" class="day">${p.d}</text>`).join("")}
        </svg>
      </div>
      <div class="v36-event" id="v38TrendEvent">
      <div><small>${points[selected].label}</small><b>${points[selected].title}</b></div>
      <div class="v38-event-rating"><small>RATING</small><b>${points[selected].prev} → ${points[selected].v} <em class="${points[selected].delta>=0?"pos":"neg"}">${points[selected].delta>=0?"+":""}${points[selected].delta}</em></b></div>
    </div>
  </section>

    <section class="v19-card v36-why v37-glass">
      <div class="v19-chead"><b>PERCHÉ È CAMBIATO IL RATING</b></div>
      <p class="v36-desc">Le macroaree che hanno inciso sull’ultima variazione del Model Rating.</p>
      <div class="v36-factor-list">
        ${factors.map(f=>`<div>
          <i>${f[0]}</i><b>${f[1]}</b>
          <span>${f[2]} <em>→</em> ${f[3]}</span>
          <strong class="${f[4]>0?"pos":f[4]<0?"neg":"neu"}">${f[4]>0?"+":""}${f[4]}</strong>
        </div>`).join("")}
      </div>
      <p class="v36-summary" id="v40Interpretation">${v40InterpretRatingChange(points[selected].delta,factors)}</p>
    </section>

    <section class="v19-card v36-history v37-glass">
      <div class="v19-chead"><b>STORICO VARIAZIONI</b></div>
      <p class="v36-desc">Le ultime variazioni del rating, ordinate dalla più recente.</p>
      <div class="v36-timeline">
        ${history.map(h=>`<div class="v36-tl-row">
          <div class="v36-rail"><i class="${h[4]}"></i></div>
          <small>${h[0]}</small>
          <b>${h[1]}</b>
          <span>Rating ${h[2]}</span>
          <strong class="${h[3]>=0?"pos":"neg"}">${h[3]>=0?"+":""}${h[3]}</strong>
        </div>`).join("")}
      </div>
    </section>
  </main>`;
  v27History({kind:"rating-trend",team:teamId,league:league});
  document.querySelector("#main").innerHTML=html;
  bind();

  const chart=document.querySelector(".v36-chart");
  const event=document.querySelector("#v38TrendEvent");
  const renderSelection=(idx)=>{
    selected=Math.max(0,Math.min(points.length-1,idx));
    document.querySelectorAll(".v39-point[data-trend-index]").forEach(el=>{
      el.classList.toggle("selected",Number(el.dataset.trendIndex)===selected);
    });
    const p=points[selected];
    event.innerHTML=`<div><small>${p.label}</small><b>${p.title}</b></div>
      <div class="v38-event-rating"><small>RATING</small><b>${p.prev} → ${p.v} <em class="${p.delta>0?"pos":p.delta<0?"neg":"neu"}">${p.delta>0?"+":""}${p.delta}</em></b></div>`;
    const insight=document.querySelector("#v40Interpretation");
    if(insight) insight.textContent=v40InterpretRatingChange(p.delta,factors);
  };
  if(chart){
    chart.style.cursor="pointer";
    chart.addEventListener("click",(e)=>{
      const target=e.target.closest?.("[data-trend-index]");
      if(target){
        renderSelection(Number(target.dataset.trendIndex));
        return;
      }
      const rect=chart.getBoundingClientRect();
      const viewX=(e.clientX-rect.left)/rect.width*w;
      let idx=0,best=Infinity;
      points.forEach((p,i)=>{
        const d=Math.abs(px(i)-viewX);
        if(d<best){best=d;idx=i;}
      });
      renderSelection(idx);
    });
  }
}

/* ===== V29 TEAM STATISTICS ===== */
const V29_TEAM_STATS = {
  generale: [
    ["PRODUZIONE OFFENSIVA","Quanto crea la squadra in fase offensiva",[["xG","1.62","+0.38","higher"],["TIRI","14.8","+3.1","higher"],["TIRI IN PORTA","5.6","+1.8","higher"]]],
    ["SOLIDITÀ DIFENSIVA","Quanto subisce la squadra e come difende",[["xGA","0.98","-0.32","lower"],["GOL SUBITI","0.82","-0.48","lower"],["PPDA","10.4","-2.1","lower"]]],
    ["EFFICACIA E GESTIONE","Conversione, disciplina e costruzione",[["CONVERSIONE %","12.5%","+2.3%","higher"],["POSSESSO PALLA","58.4%","+6.2%","higher"],["PASSAGGI PRECISI","87.1%","+1.8%","higher"]]],
    ["DINAMICHE COLLETTIVE","Intensità, stabilità e gestione delle assenze",[["INTENSITÀ PRESSING","72.6","+8.4","higher"],["STABILITÀ PRESSING","84.2","+6.7","higher"],["CALO SENZA TITOLARI","7.8%","-3.1%","lower"]]]
  ],
  attacco: [
    ["CREAZIONE E FINALIZZAZIONE","Quanto crea e quanto finalizza",[["xG","1.85","+0.52","higher"],["TIRI","16.2","+4.7","higher"],["TIRI IN PORTA","6.8","+2.9","higher"]]],
    ["QUALITÀ OFFENSIVA","Controllo, verticalità e pericolosità",[["PASSAGGI CHIAVE","12.4","+3.8","higher"],["DRIBBLING RIUSCITI","7.1","+2.2","higher"],["TOCCHI IN AREA AVV.","5.6","+1.9","higher"]]],
    ["RIFINITURA E TIPOLOGIA GOL","Come segna: distribuzione e qualità",[["GOL SU AZIONE","11.8","+3.6","higher"],["GOL DA PALLA FERMA","2.4","+0.8","higher"],["% GOL ESTERNI","41.7%","+8.3%","higher"]]],
    ["COSTANZA OFFENSIVA","Produzione nell'arco del tempo",[["xG / 90'","1.67","+0.45","higher"],["TIRI / 90'","14.6","+3.9","higher"],["TIRI IN PORTA / 90'","5.9","+2.4","higher"]]]
  ],
  difesa: [
    ["PROTEZIONE AREA","Quanto limita occasioni e conclusioni",[["xGA","0.98","-0.28","lower"],["TIRI SUBITI","8.7","-1.7","lower"],["TIRI IN PORTA SUBITI","3.1","-0.8","lower"]]],
    ["QUALITÀ CONCESSA","Pericolosità media delle occasioni avversarie",[["xGA / TIRO","0.10","-0.01","lower"],["BIG CHANCES CONCESSE","1.3","-0.3","lower"],["GOL SUBITI","0.82","-0.31","lower"]]],
    ["RECUPERI E DUELLI","Capacità di interrompere e riconquistare",[["RECUPERI","54.6","+4.2","higher"],["DUELLI VINTI","53.1%","+3.4%","higher"],["INTERCETTI","9.8","+1.3","higher"]]]
  ],
  possesso: [
    ["CONTROLLO PALLA","Quanto la squadra mantiene e gestisce il possesso",[["POSSESSO","58.4%","+6.2%","higher"],["PASSAGGI RIUSCITI","87.1%","+1.8%","higher"],["PASSAGGI / 90","535","+48","higher"]]],
    ["PROGRESSIONE","Quanto riesce ad avanzare con il pallone",[["PROGRESSIVE PASS","10.6","+1.8","higher"],["PASSAGGI ULTIMO TERZO","39.4","+5.1","higher"],["INGRESSI AREA","18.2","+3.7","higher"]]],
    ["VERTICALITÀ","Velocità e intenzione nella costruzione",[["PASSAGGI VERTICALI","21.7","+3.9","higher"],["ATTACCHI DIRETTI","7.4","+1.2","higher"],["FIELD TILT","58%","+5%","higher"]]]
  ],
  pressing: [
    ["INTENSITÀ PRESSING","Quanto aggressivamente cerca di recuperare il pallone",[["PPDA","8.7","-1.6","lower"],["PRESSIONI","151","+12","higher"],["RECUPERI ALTI","7.2","+1.4","higher"]]],
    ["EFFICIENZA","Quanto la pressione produce vantaggio",[["SUCCESS RATE","34%","+4%","higher"],["RECUPERI ALTI EFFICACI","6.1","+0.8","higher"],["SHOT AFTER PRESS","2.3","+0.4","higher"]]],
    ["CONTINUITÀ","Quanto il pressing resta stabile nel corso della partita",[["1° TEMPO","87","+5","higher"],["2° TEMPO","81","+3","higher"],["STABILITÀ PRESSING","84","+4","higher"]]]
  ]
};

function v29DeltaClass(delta,dir){
 const n=v27DeltaNumber(delta);
 if(!delta || Math.abs(n)<1e-9) return "neutral";
 const good=(dir==="higher"&&n>0)||(dir==="lower"&&n<0);
 return good?"good":"bad";
}


function v31SeasonLabel(){
 const now=V31_NOW(), y=now.getFullYear(), m=now.getMonth();
 const start = m>=6 ? y : y-1;
 return `${start}/${String(start+1).slice(-2)}`;
}

function v29TeamStats(teamId,league,tab="generale",pushHistory=true){
 const t=(V19T[league]||[]).find(x=>x[0]===teamId); if(!t) return v19League(league);
 const tabs=[["generale","Generale"],["attacco","Attacco"],["difesa","Difesa"],["possesso","Possesso"],["pressing","Pressing"]];
 const data=V29_TEAM_STATS[tab]||V29_TEAM_STATS.generale;
 const ranks={generale:[3,2,4,3],attacco:[2,3,4,3],difesa:[2,3,4],possesso:[4,5,3],pressing:[3,4,3]};
 const pct={generale:[86,89,78,85],attacco:[90,87,82,88],difesa:[89,84,81],possesso:[78,76,82],pressing:[85,83,86]};
 if(pushHistory){
   v27History({kind:"team-stats",team:teamId,league:league,tab:tab});
 }else if(history.state && history.state.kind==="team-stats"){
   history.replaceState({...history.state,tab:tab},"",location.href);
 }
 document.querySelector("#main").innerHTML=`<div class="page v29-stats-page">
   <button class="v19-back" data-v29-back>← ${t[2]}</button>
   <header class="v29-team-head">${crest(t[1],"")}<div><h1>${t[2]}</h1><small>${league} · STAGIONE ${v31SeasonLabel()}</small></div></header>
   <div class="v29-title-row v31-title-row"><div><h2>STATISTICHE</h2><p>Dati, metriche e indicatori principali della squadra</p><span class="v31-avg-note">Δ rispetto alla media del campionato</span></div></div>
   <div class="v29-tabs">${tabs.map(x=>`<button class="${tab===x[0]?"active":""}" data-v29-tab="${x[0]}">${x[1]}</button>`).join("")}</div>
   <div class="v29-stat-cards">
     ${data.map((g,gi)=>`<section class="v29-stat-card">
       <div class="v29-card-head"><div><b>${g[0]}</b><small>${g[1]}</small></div></div>
       <div class="v29-metrics">${g[2].map(m=>`<div><small>${m[0]}</small><strong>${m[1]}</strong><em>vs media campionato</em><i class="${v29DeltaClass(m[2],m[3])}">${m[2]}</i></div>`).join("")}</div>
       <div class="v29-card-foot"><span>Posizionamento: <b>${ranks[tab][gi]||3}°</b> nel campionato</span><span>Percentile: <b>${pct[tab][gi]||80}</b></span></div>
     </section>`).join("")}
   </div>
   ${tab==="attacco"?`<section class="v29-position-card"><div><b>POSIZIONAMENTO NEL CAMPIONATO</b><small>Confronto dei principali indicatori offensivi</small></div><div class="v29-position-grid"><span><b>#2</b><small>xG</small></span><span><b>#3</b><small>Tiri</small></span><span><b>#4</b><small>Tiri in porta</small></span><span><b>#3</b><small>Gol segnati</small></span></div></section>`:""}
 </div>`;
 bind();
 document.querySelector("[data-v29-back]").onclick=()=>history.length>1?history.back():v19Team(teamId,league);
 document.querySelectorAll("[data-v29-tab]").forEach(b=>b.onclick=()=>v29TeamStats(teamId,league,b.dataset.v29Tab,false));
}

function v19League(n){
 v27History({kind:"analysis-league",league:n});
 let ts=V19T[n]||[];
 document.querySelector("#main").innerHTML=`<div class="page v19-ranking v24-ranking">
   <div class="v24-rank-top">
     <button class="v24-rank-back" data-v19home>← &nbsp; ${n}</button>
   </div>
   <h1 class="v24-classifica-title">CLASSIFICA</h1>
   <div class="v24-rank-table">
     <div class="v24-rank-head">
       <span></span><span>SQUADRA</span><span>PG</span><span>ULTIME 5</span><span>RATING</span>
     </div>
     ${ts.map((t,i)=>{
       const vals=t.slice(4,9), trend=vals.filter(x=>x==="V").length-vals.filter(x=>x==="P").length;
       const tc=trend>0?"up":trend<0?"down":"flat", ti=trend>0?`+${trend}`:trend<0?`${trend}`:"0";
       return `<button class="v24-rank-row" data-v19t="${t[0]}" data-v19league="${n}">
         <span class="v24-pos">${i+1}</span>
         <span class="v24-team">${crest(t[1],"")}<b>${t[2]}</b></span>
         <strong class="v24-pg">${t[3]}</strong>
         <span class="v24-last5">${v19Form(vals)}</span>
         <span class="v24-rating"><b>${t[9]}</b><em class="${tc}">${ti}</em></span>
       </button>`;
     }).join("")}
   </div>
 </div>`;
 bind();
 document.querySelector("[data-v19home]").onclick=()=>history.length>1?history.back():v19AnalysisHome();
 document.querySelectorAll("[data-v19t]").forEach(b=>b.onclick=()=>v19Team(b.dataset.v19t,b.dataset.v19league));
}

function v47NextMatchForTeam(t){
 const m=MATCHES.find(x=>x.h.code===t[1]||x.a.code===t[1]);
 if(!m){
   return `<section class="v19-card v19-next">
     <div class="v19-chead"><b>PROSSIMA PARTITA</b></div>
     <div class="v47-no-match">Nessuna partita demo disponibile per questa squadra.</div>
   </section>`;
 }
 return `<section class="v19-card v19-next">
   <div class="v19-chead"><b>PROSSIMA PARTITA</b></div>
   <div class="match"><span>${crest(m.h.code,m.h.cls)}<b>${m.h.name}</b></span><em>VS<small>${m.time}</small></em><span>${crest(m.a.code,m.a.cls)}<b>${m.a.name}</b></span></div>
   <button data-v19match="${m.id}">ANALIZZA MATCH ›</button>
 </section>`;
}

function v19Team(id,l){
 v27History({kind:"analysis-team",team:id,league:l});
 let t=(V19T[l]||[]).find(x=>x[0]===id); if(!t)return v19League(l);
 let vals=V19M[id]||[78,72,76,64,74,70],ms=Object.values(V14_MACRO_META),
     trend=v37TrendData(id,l).points.map(p=>p.v),
     rank=vals.map((v,i)=>[v,i]).sort((a,b)=>b[0]-a[0]);
 document.querySelector("#main").innerHTML=`<div class="page v19-profile v20-profile">
   <button class="v19-back" data-v19back>← ${l}</button>

   <header class="v19-hero v20-hero v24-team-hero">
     ${crest(t[1],"")}
     <div><h1>${t[2]}</h1>
       <div class="v24-rating-line">
         <span>RATING</span>
         <strong>${t[9]}</strong>
         <em class="${trend[4]>trend[0]?"up":trend[4]<trend[0]?"down":"flat"}">${trend[4]-trend[0]>=0?"+":""}${trend[4]-trend[0]}</em>
       </div>
     </div>
   </header>

   <div class="v30-team-tabs">
     <button class="active" type="button">PANORAMICA</button>
     <button type="button" data-v30-stats>STATISTICHE</button>
   </div>

   <section class="v19-card v20-overview">
     <div class="v19-chead"><b>PANORAMICA MODELLO</b></div>
     <div class="v19-macros v20-macros">${ms.map((m,i)=>`<button class="v19-macro v20-macro v25-macro-link" data-v25-macro="${m.title}">
       <span class="v20-free-icon">${m.icon}</span>
       <div><b>${m.title}</b><small>${m.desc}</small><em class="${m.title==="Opponent Strength"?"neutral":v14Band(vals[i])}"><i style="width:${vals[i]}%"></i></em></div>
       <strong>${vals[i]}</strong><span class="v26-macro-chevron">›</span>
     </button>`).join("")}</div>
     <div class="v20-form-block"><div><b>FORMA RECENTE</b><small>ULTIME 5</small></div><div class="v19-recent v20-recent">${v19Form(t.slice(4,9))}</div></div>
   </section>

   <button type="button" class="v19-card v20-trend-card v33-trend-entry" data-v33-trend>
     <div class="v19-chead"><b>TREND DEL RATING</b><span class="up">+${trend[4]-trend[0]}</span></div>
     <div class="v20-chart-wrap">${v20TrendChart(trend)}</div>
     <div class="v33-open-detail">VEDI DETTAGLIO TREND <span>›</span></div>
   </button>

   <section class="v19-card v20-summary-card">
     <div class="v19-chead"><b>INTELLIGENCE SUMMARY</b></div>
     ${v20SummaryText(ms,rank)}
   </section>

${v47NextMatchForTeam(t)}
 </div>`;
 bind();
 document.querySelector("[data-v19back]").onclick=()=>history.length>1?history.back():v19League(l);
 document.querySelectorAll("[data-v25-macro]").forEach(b=>b.onclick=()=>v25MacroDetail(id,l,b.dataset.v25Macro));
 const v30stats=document.querySelector("[data-v30-stats]"); if(v30stats) v30stats.onclick=()=>v29TeamStats(id,l,"generale",true);
 const v33trend=document.querySelector("[data-v33-trend]"); if(v33trend) v33trend.onclick=()=>v33RatingTrend(id,l);
 const v47nm=document.querySelector("[data-v19match]"); if(v47nm) v47nm.onclick=()=>route("match",v47nm.dataset.v19match);
}


/* ============================================================
   V57 — V47 ESATTA + SPORTMONKS
   La UI/CSS resta quella originale V47. Cambia solo la sorgente dati
   per Dashboard, Matches e Match Analysis.
   ============================================================ */
const REAL_API="https://space16154-api.gianmarco-candeletti.workers.dev";
const REAL_LEAGUES=["Serie A","Premier League","La Liga","Bundesliga","Ligue 1"];
let REAL_CACHE={date:"",fixtures:[]};
const realEsc=v=>String(v??"").replace(/[&<>'\"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'\"':"&quot;"}[c]));
const realNum=v=>{const n=Number(v);return Number.isFinite(n)?n:null};
const realFmt=(v,d=1)=>v==null?"—":Number(v).toLocaleString("it-IT",{minimumFractionDigits:d,maximumFractionDigits:d});
const realClamp=(v,a=0,b=100)=>Math.max(a,Math.min(b,v));
async function realApi(path){const r=await fetch(REAL_API+path,{headers:{Accept:"application/json"},cache:"no-store"});const b=await r.json().catch(()=>({}));if(!r.ok)throw new Error(b?.sportmonks?.message||b?.message||b?.error||`HTTP ${r.status}`);return b}
function realLoc(f,where){return (Array.isArray(f?.participants)?f.participants:[]).find(p=>String(p?.meta?.location||"").toLowerCase()===where)||null}
function realNormFixture(f){return {...f,h:realLoc(f,"home")||{},a:realLoc(f,"away")||{},time:String(f?.starting_at||"").slice(11,16)||"--:--",leagueName:f?.league?.name||""}}
async function realFixtures(date){if(REAL_CACHE.date===date)return REAL_CACHE.fixtures;const b=await realApi(`/fixtures?date=${encodeURIComponent(date)}`);const fs=(Array.isArray(b?.data)?b.data:[]).map(realNormFixture).filter(f=>REAL_LEAGUES.includes(f.leagueName));REAL_CACHE={date,fixtures:fs};return fs}
function realTeamCode(t){return String(t?.short_code||t?.code||t?.name||"?").replace(/[^A-Za-z0-9]/g,"").slice(0,3).toUpperCase()||"?"}
function realCrest(t){if(t?.image_path)return `<span class="crest real-crest"><img src="${realEsc(t.image_path)}" alt="${realEsc(t.name||'')}" loading="lazy" referrerpolicy="no-referrer"></span>`;return crest(realTeamCode(t),"")}
function realScore(f,teamId){const a=Array.isArray(f?.scores)?f.scores:[];let x=a.filter(s=>String(s?.participant_id)===String(teamId)&&String(s?.description||"").toUpperCase()==="CURRENT");if(!x.length)x=a.filter(s=>String(s?.participant_id)===String(teamId));const vals=x.map(s=>realNum(s?.score?.goals??s?.score?.value??s?.score)).filter(v=>v!=null);return vals.length?vals.at(-1):null}
function realHistory(pack,key){const x=pack?.[key];return x?.ok===true&&Array.isArray(x?.data)?x.data:[]}
function realOpponent(f,id){return (Array.isArray(f?.participants)?f.participants:[]).find(p=>String(p?.id)!==String(id))||null}
function realRecent(fs,id){return fs.slice().sort((a,b)=>String(b?.starting_at||"").localeCompare(String(a?.starting_at||""))).slice(0,5).map(f=>{const o=realOpponent(f,id),gf=realScore(f,id),ga=o?realScore(f,o.id):null;return {gf,ga,r:gf==null||ga==null?"—":gf>ga?"W":gf<ga?"L":"D"}})}
function realStatName(s){return String(s?.type?.developer_name||s?.type?.name||s?.name||"").toUpperCase()}
const REAL_ALIASES={pos:["BALL_POSSESSION","POSSESSION"],shots:["SHOTS_TOTAL","TOTAL_SHOTS"],sot:["SHOTS_ON_TARGET","SHOTS_ON_GOAL"],corners:["CORNERS","CORNER_KICKS"],attacks:["ATTACKS"],danger:["DANGEROUS_ATTACKS"],fouls:["FOULS"]};
function realAvgStat(fs,id,key){const vals=[];for(const f of fs)for(const s of (Array.isArray(f?.statistics)?f.statistics:[])){if(String(s?.participant_id)!==String(id))continue;const n=realStatName(s);if(!(REAL_ALIASES[key]||[]).some(a=>n===a||n.includes(a)))continue;const v=realNum(s?.data?.value??s?.value);if(v!=null)vals.push(v)}return vals.length?vals.reduce((a,b)=>a+b,0)/vals.length:null}
function realAvgXg(fs,id){const vals=[];for(const f of fs){const xs=Array.isArray(f?.xGFixture)?f.xGFixture:Array.isArray(f?.xgfixture)?f.xgfixture:[];for(const x of xs)if(String(x?.participant_id)===String(id)){const v=realNum(x?.data?.value??x?.value);if(v!=null)vals.push(v)}}return vals.length?vals.reduce((a,b)=>a+b,0)/vals.length:null}
function realMetrics(fs,t){const r=realRecent(fs,t.id),gfs=r.map(x=>x.gf).filter(x=>x!=null),gas=r.map(x=>x.ga).filter(x=>x!=null),pts=r.reduce((n,x)=>n+(x.r==="W"?3:x.r==="D"?1:0),0);return {form:r,formScore:r.length?Math.round(pts/(r.length*3)*100):null,gf:gfs.length?gfs.reduce((a,b)=>a+b,0)/gfs.length:null,ga:gas.length?gas.reduce((a,b)=>a+b,0)/gas.length:null,xg:realAvgXg(fs,t.id),pos:realAvgStat(fs,t.id,"pos"),shots:realAvgStat(fs,t.id,"shots"),sot:realAvgStat(fs,t.id,"sot"),corners:realAvgStat(fs,t.id,"corners"),attacks:realAvgStat(fs,t.id,"attacks"),danger:realAvgStat(fs,t.id,"danger"),fouls:realAvgStat(fs,t.id,"fouls")}}
function realMacro(m){const vals=[m.xg!=null?realClamp(m.xg/2.2*100):null,m.shots!=null?realClamp(m.shots/16*100):null,m.sot!=null?realClamp(m.sot/7*100):null,m.danger!=null?realClamp(m.danger/65*100):null].filter(v=>v!=null);return {threat:vals.length?Math.round(vals.reduce((a,b)=>a+b,0)/vals.length):null,defense:m.ga!=null?Math.round(realClamp(100-m.ga/2.2*100)):null,form:m.formScore,opponent:null,pressing:m.danger!=null?Math.round(realClamp(m.danger/65*100)):null,availability:null}}
function realStanding(pack,id){const d=pack?.standings?.ok===true?pack.standings.data:null,rows=Array.isArray(d)?d:Array.isArray(d?.data)?d.data:[];const r=rows.find(x=>String(x?.participant_id??x?.participant?.id)===String(id));return r?.position??r?.rank??null}
function realFormDots(xs){return `<span class="form-dots">${xs.length?xs.map(x=>`<i class="${x.r==='W'?'w':x.r==='L'?'l':'d'}">${x.r==='W'?'V':x.r==='L'?'P':x.r==='D'?'N':'—'}</i>`).join(''):'—'}</span>`}


/* ================= V60 COMPETITIONS / LIVE TABLES ================= */
const V60_COMPETITIONS=[
 {key:"serie-a",name:"Serie A"},{key:"premier-league",name:"Premier League"},
 {key:"la-liga",name:"La Liga"},{key:"bundesliga",name:"Bundesliga"},{key:"ligue-1",name:"Ligue 1"}
];
let V60_META_CACHE=null;
async function v60CompetitionMeta(force=false){
 if(V60_META_CACHE&&!force)return V60_META_CACHE;
 try{V60_META_CACHE=await realApi("/competitions");return V60_META_CACHE}catch(e){return{ok:false,competitions:[]}}
}
function v60CompFromName(meta,name){return(meta?.competitions||[]).find(x=>String(x?.name||"").toLowerCase()===String(name||"").toLowerCase())||null}
function v60LeagueLogo(c,small=false){
 if(c?.image_path)return `<span class="v60-league-logo ${small?"small":""}"><img src="${realEsc(c.image_path)}" alt="${realEsc(c.name||"")}" loading="lazy" referrerpolicy="no-referrer"></span>`;
 return `<span class="v60-league-logo ${small?"small":""}">${realEsc((c?.name||"?").slice(0,2).toUpperCase())}</span>`;
}
function v60StandingValue(row,key){
 const aliases={played:["MATCHES_PLAYED","GAMES_PLAYED"],won:["WON"],draw:["DRAW"],lost:["LOST"],gf:["GOALS_FOR"],ga:["GOALS_AGAINST"],pts:["POINTS"]};
 for(const x of(Array.isArray(row?.details)?row.details:[])){
  const n=String(x?.type?.developer_name||x?.type?.name||"").toUpperCase();
  if((aliases[key]||[]).some(a=>n.includes(a))){const v=realNum(x?.value??x?.data?.value);if(v!=null)return v}
 }
 const direct={played:["played","games_played"],won:["won"],draw:["draw","drawn"],lost:["lost"],gf:["goals_for","goals_scored"],ga:["goals_against","goals_conceded"],pts:["points"]}[key]||[];
 for(const k of direct){const v=realNum(row?.[k]);if(v!=null)return v}
 return 0;
}
async function v60StandingsPage(initialKey="la-liga"){
 const root=document.querySelector("#main");
 root.innerHTML=`<div class="page v60-standings-page"><div class="eyebrow">SPORTMONKS LIVE DATA</div><h1>CLASSIFICHE</h1><div class="empty-note">Caricamento…</div></div>`;
 try{
  const meta=await v60CompetitionMeta();
  const comps=V60_COMPETITIONS.map(x=>({...x,...((meta?.competitions||[]).find(c=>c.key===x.key)||{})}));
  const load=async key=>{
   const c=comps.find(x=>x.key===key)||comps[0];
   root.innerHTML=`<div class="page v60-standings-page"><div class="eyebrow">SPORTMONKS LIVE DATA</div><div class="v60-stand-title"><div><h1>CLASSIFICA</h1><small>AGGIORNAMENTO AUTOMATICO</small></div>${v60LeagueLogo(c)}</div>
   <div class="v60-standing-tabs">${comps.map(x=>`<button data-v60-comp="${x.key}" class="${x.key===c.key?"active":""}">${v60LeagueLogo(x,true)}<span>${realEsc(x.name)}</span></button>`).join("")}</div>
   <section class="panel v60-table-panel"><div class="empty-note">Aggiornamento ${realEsc(c.name)}…</div></section></div>`;
   root.querySelectorAll("[data-v60-comp]").forEach(b=>b.onclick=()=>load(b.dataset.v60Comp));
   const b=await realApi(`/competition?key=${encodeURIComponent(c.key)}`);
   const teams=Array.isArray(b.teams)?b.teams:[],rows=Array.isArray(b.rows)?b.rows:[];
   const byId=new Map(rows.map(r=>[String(r?.participant_id??r?.participant?.id),r]));
   let merged=teams.map(t=>({team:t,row:byId.get(String(t.id))||null}));
   for(const r of rows){const rid=String(r?.participant_id??r?.participant?.id);if(!merged.some(x=>String(x.team?.id)===rid))merged.push({team:r.participant||{id:rid,name:"Squadra"},row:r})}
   merged.sort((a,b)=>(a.row?.position??999)-(b.row?.position??999)||String(a.team?.name||"").localeCompare(String(b.team?.name||"")));
   root.querySelector(".v60-table-panel").innerHTML=`<div class="v60-standing-head"><span>#</span><span>SQUADRA</span><span>G</span><span>V</span><span>N</span><span>P</span><span>GF</span><span>GS</span><span>DR</span><b>PT</b></div>
   ${merged.map((x,i)=>{const r=x.row||{},gf=v60StandingValue(r,"gf"),ga=v60StandingValue(r,"ga");return `<div class="v60-standing-row"><span>${r?.position??i+1}</span><div>${realCrest(x.team)}<b>${realEsc(x.team?.name||"—")}</b></div><span>${v60StandingValue(r,"played")}</span><span>${v60StandingValue(r,"won")}</span><span>${v60StandingValue(r,"draw")}</span><span>${v60StandingValue(r,"lost")}</span><span>${gf}</span><span>${ga}</span><span>${gf-ga}</span><strong>${v60StandingValue(r,"pts")}</strong></div>`}).join("")}
   <div class="v60-standing-foot"><b>${b.live?"CLASSIFICA LIVE":"CLASSIFICA UFFICIALE"}</b> · ${realEsc(b.season?.name||"")}<br><span>${b.live?"Include i risultati parziali delle gare in corso.":"Nessuna gara in corso: classifica ufficiale corrente."}</span></div>`;
  };
  await load(initialKey);
 }catch(e){root.innerHTML=`<div class="page"><h1>CLASSIFICHE</h1><div class="empty-note">${realEsc(e.message)}</div></div>`}
}
function v60FixtureFinished(d){
 const s=String(d?.state?.state||d?.state?.name||d?.state?.short_name||"").toUpperCase();
 return s.includes("FINISH")||["FT","AET","FT_PEN"].includes(s);
}
function v60PostMatchHtml(detail,h,a){
 if(!v60FixtureFinished(detail))return"";
 const hs=realScore(detail,h.id),as=realScore(detail,a.id),hx=v58XgFor(detail,h.id),ax=v58XgFor(detail,a.id);
 const st=(t,k)=>realAvgStat([detail],t.id,k),vals=[["xG",hx,ax],["Tiri",st(h,"shots"),st(a,"shots")],["Tiri in porta",st(h,"sot"),st(a,"sot")],["Possesso",st(h,"pos"),st(a,"pos")]];
 const events=Array.isArray(detail?.events)?detail.events:[],goals=events.filter(e=>String(e?.type?.developer_name||e?.type?.name||"").toUpperCase().includes("GOAL"));
 const notes=[];if(hx!=null&&ax!=null&&hs!=null&&as!=null){if(hs>as&&hx<ax)notes.push(`${realEsc(h.name)} ha vinto con meno xG: efficienza realizzativa decisiva.`);if(as>hs&&ax<hx)notes.push(`${realEsc(a.name)} ha vinto con meno xG: efficienza realizzativa decisiva.`)}
 return `<section class="v14-card v60-postmatch"><div class="v14-card-title">POST-MATCH · COSA È SUCCESSO</div><div class="v60-final-score"><div>${realCrest(h)}<b>${realEsc(h.name)}</b></div><strong>${hs??"—"} <em>–</em> ${as??"—"}</strong><div>${realCrest(a)}<b>${realEsc(a.name)}</b></div></div><div class="v60-post-grid">${vals.map(r=>`<div><span>${r[0]}</span><b>${r[1]==null?"—":r[0]==="Possesso"?realFmt(r[1],0)+"%":realFmt(r[1],1)}</b><b>${r[2]==null?"—":r[0]==="Possesso"?realFmt(r[2],0)+"%":realFmt(r[2],1)}</b></div>`).join("")}</div>${goals.length?`<div class="v60-goals"><b>GOL</b>${goals.map(e=>`<span>${realEsc(e?.minute??"")}′ · ${realEsc(e?.player_name||e?.player?.display_name||e?.info||"Gol")}</span>`).join("")}</div>`:""}<div class="v60-post-notes">${notes.length?notes.map(n=>`<p>• ${n}</p>`).join(""):`<p>Riepilogo costruito con statistiche ed eventi ufficiali SportMonks.</p>`}</div></section>`;
}


function v61UniqueBest(values){
  const nums=values.map(Number);
  const max=Math.max(...nums);
  return nums.filter(v=>v===max).length===1 ? max : null;
}
async function realDashboard(){
 const meta=dashDateMeta();document.querySelector("#main").innerHTML=`<div class="page v2-dashboard"><section class="v6-hero-combined"><div class="empty-note">Caricamento SportMonks…</div></section></div>`;bind();
 try{
  const[fs,cmeta]=await Promise.all([realFixtures(meta.id),v60CompetitionMeta()]),m=fs[0];if(!m)throw new Error("Nessuna partita dei 5 campionati per la data selezionata.");
  let pred=null,conf=null;try{const p=await realApi(`/prematch?id=${m.id}`),h=p.teams?.home||m.h,a=p.teams?.away||m.a,hm=v58Metrics(realHistory(p,"home_history"),h),am=v58Metrics(realHistory(p,"away_history"),a),hh=v58Metrics(realHistory(p,"home_history"),h,"home"),aa=v58Metrics(realHistory(p,"away_history"),a,"away");pred=v59ShrinkPrediction(v58Prediction(hm,am,hh,aa),hm,am);conf=v59Confidence(pred,hm,am)}catch{}
  const comp=v60CompFromName(cmeta,m.leagueName);
  document.querySelector("#main").innerHTML=`<div class="page v2-dashboard"><div class="dash-global-head v8-global-head"><div class="v20-dashboard-label"><span class="dash-global-kicker">DASHBOARD</span></div><div class="v8-date-pair"><button class="v8-date-control"><small>MESE</small><strong>${MONTHS_IT[DASH_MONTH].slice(0,3).toUpperCase()}</strong></button><button class="v8-date-control day"><small>GIORNO</small><strong>${String(DASH_DAY).padStart(2,"0")}</strong></button></div></div>
  <section class="v6-hero-combined"><div class="v2-panel-head"><h2>MATCH IN EVIDENZA <span>☆</span></h2><b>${meta.short.toUpperCase()}</b></div><div class="v2-meta">${v60LeagueLogo(comp,true)} ${realEsc(m.leagueName)} <i>•</i> ${meta.short} <i>•</i> ${realEsc(m.time)}</div><div class="v2-match"><div class="v2-club">${realCrest(m.h)}<strong>${realEsc(m.h.name||"").toUpperCase()}</strong></div><div class="v2-center"><b>VS</b><button data-real-match="${m.id}">⌁ &nbsp; Analisi completa</button></div><div class="v2-club">${realCrest(m.a)}<strong>${realEsc(m.a.name||"").toUpperCase()}</strong></div></div><div class="v6-prob-divider"></div><div class="v6-prob-title">ESITO PIÙ PROBABILE ${conf!=null?`<span class="v60-dash-sample">Confidence ${conf}%</span>`:""}</div>${pred?(()=>{const b1=v61UniqueBest([pred.one,pred.x,pred.two]),bg=v61UniqueBest([pred.gg,pred.ng]),bo=v61UniqueBest([pred.over,pred.under]);return `<div class="v2-1x2"><div class="${pred.one===b1?"v61-best":""}"><span>1</span><strong>${pred.one}%</strong><i></i></div><div class="${pred.x===b1?"v61-best":""}"><span>X</span><strong>${pred.x}%</strong><i></i></div><div class="${pred.two===b1?"v61-best":""}"><span>2</span><strong>${pred.two}%</strong><i></i></div></div><div class="v2-other-markets"><div class="v2-submarket"><b>GOL / NO GOL</b><div><span class="${pred.gg===bg?"v61-best":""}"><small>GOL</small><strong>${pred.gg}%</strong></span><span class="${pred.ng===bg?"v61-best":""}"><small>NO GOL</small><strong>${pred.ng}%</strong></span></div></div><div class="v2-submarket"><b>OVER / UNDER 2.5</b><div><span class="${pred.over===bo?"v61-best":""}"><small>OVER</small><strong>${pred.over}%</strong></span><span class="${pred.under===bo?"v61-best":""}"><small>UNDER</small><strong>${pred.under}%</strong></span></div></div></div>`})():`<div class="v2-1x2"><div><span>1</span><strong>—</strong><i></i></div><div><span>X</span><strong>—</strong><i></i></div><div><span>2</span><strong>—</strong><i></i></div></div><div class="v2-other-markets"><div class="v2-submarket"><b>GOL / NO GOL</b><div><span><small>GOL</small><strong>—</strong></span><span><small>NO GOL</small><strong>—</strong></span></div></div><div class="v2-submarket"><b>OVER / UNDER 2.5</b><div><span><small>OVER</small><strong>—</strong></span><span><small>UNDER</small><strong>—</strong></span></div></div></div>`}</section>
  <section class="v5-upcoming"><div class="v2-panel-head"><h2>PROSSIME PARTITE</h2><button data-nav="matches">Vedi tutte ›</button></div><div class="v5-upcoming-list">${fs.slice(1,4).map(x=>`<div class="v23-match-card"><div class="v23-time">${realEsc(x.time)}</div><div class="v23-match-row"><div class="v23-team home">${realCrest(x.h)}<b>${realEsc(x.h.name||"")}</b></div><button class="v23-analysis" data-real-match="${x.id}">ANALISI</button><div class="v23-team away"><b>${realEsc(x.a.name||"")}</b>${realCrest(x.a)}</div></div></div>`).join("")||`<div class="empty-note">Nessun'altra partita disponibile.</div>`}</div></section></div>`;bind();document.querySelectorAll("[data-real-match]").forEach(b=>b.onclick=()=>route("match",b.dataset.realMatch));
 }catch(e){document.querySelector("#main").innerHTML=`<div class="page v2-dashboard"><div class="empty-note">${realEsc(e.message)}</div></div>`;bind()}
}
async function realMatches(){
 const date=dashDateMeta().id;document.querySelector("#main").innerHTML=`<section class="m13-page"><div class="empty-note">Caricamento SportMonks…</div></section>`;
 try{
  const[fs,meta]=await Promise.all([realFixtures(date),v60CompetitionMeta()]),leagues=V60_COMPETITIONS.map(c=>({...c,...((meta?.competitions||[]).find(x=>x.key===c.key)||{})})),root=document.querySelector("#main");
  const home=()=>{root.innerHTML=`<section class="m13-page"><div class="m13-titlebar"><h1 class="v23-matches-title">MATCHES</h1></div><div class="m13-leagues">${leagues.map(l=>`<button class="m13-league" data-rl="${l.key}">${v60LeagueLogo(l)}<span>${realEsc(l.name)}</span></button>`).join("")}</div></section>`;root.querySelectorAll("[data-rl]").forEach(b=>b.onclick=()=>view(leagues.find(l=>l.key===b.dataset.rl)))};
  const view=l=>{const arr=fs.filter(f=>f.leagueName===l.name);root.innerHTML=`<section class="m13-page v23-matches-league"><div class="m13-leaguehead v23-leaguehead"><button class="m13-back" data-rback>←</button><div class="m13-leagueidentity">${v60LeagueLogo(l)}<h1>${realEsc(l.name)}</h1></div><button class="v60-table-shortcut" data-stand="${l.key}">CLASSIFICA</button></div><div class="m13-fixtures v23-league-cards">${arr.length?arr.map(f=>`<article class="v23-match-card"><div class="v23-time">${realEsc(f.time)}</div><div class="v23-match-row"><div class="v23-team home">${realCrest(f.h)}<b>${realEsc(f.h.name||"")}</b></div><button class="v23-analysis" data-real-match="${f.id}">ANALISI</button><div class="v23-team away"><b>${realEsc(f.a.name||"")}</b>${realCrest(f.a)}</div></div></article>`).join(""):`<div class="empty-note">Nessuna partita reale disponibile.</div>`}</div></section>`;root.querySelector("[data-rback]").onclick=home;root.querySelector("[data-stand]").onclick=()=>v60StandingsPage(l.key);root.querySelectorAll("[data-real-match]").forEach(b=>b.onclick=()=>route("match",b.dataset.realMatch))};home();
 }catch(e){document.querySelector("#main").innerHTML=`<section class="m13-page"><div class="empty-note">${realEsc(e.message)}</div></section>`}
}
async function realMatchDetail(id){
 document.querySelector('#main').innerHTML=`<div class="page v14-analysis-page"><div class="v14-analysis-top"><button class="v14-back" data-nav="matches">←</button></div><section class="v14-card"><div class="empty-note">Caricamento analisi SportMonks…</div></section></div>`;bind();
 try{const [pack,fb]=await Promise.all([realApi(`/prematch?id=${encodeURIComponent(id)}`),realApi(`/fixture?id=${encodeURIComponent(id)}`)]),detail=fb?.data||fb,fx=pack.fixture||{},h=pack.teams?.home||{},a=pack.teams?.away||{},hm=realMetrics(realHistory(pack,'home_history'),h),am=realMetrics(realHistory(pack,'away_history'),a),hp=realMacro(hm),ap=realMacro(am),hs=realStanding(pack,h.id),as=realStanding(pack,a.id);const macros=[["threat","Threat Creation"],["defense","Defense Stability"],["form","Forma"],["opponent","Opponent Strength"],["pressing","Pressing / PPDA"],["availability","Availability"]];const tech=[["xG",hm.xg,am.xg],["Gol fatti",hm.gf,am.gf],["Gol subiti",hm.ga,am.ga],["Possesso",hm.pos,am.pos],["Tiri",hm.shots,am.shots],["Tiri in porta",hm.sot,am.sot],["Corner",hm.corners,am.corners],["Attacchi",hm.attacks,am.attacks],["Falli",hm.fouls,am.fouls]];const h2=realHistory(pack,'h2h').slice(0,5);
 document.querySelector('#main').innerHTML=`<div class="page v14-analysis-page"><div class="v14-analysis-top"><button class="v14-back" data-nav="matches">←</button><button class="v14-star">☆</button></div><header class="v14-match-head"><h1>${realEsc(h.name)} — ${realEsc(a.name)}</h1><p>${realEsc(fx.league?.name||detail?.league?.name||'')} · ${realEsc(String(fx.starting_at||'').slice(0,10))} · ${realEsc(String(fx.starting_at||'').slice(11,16))}</p><div class="v14-versus"><div>${realCrest(h)}<b>${realEsc(h.name)}</b><small>${hs?`Classifica ${hs}°`:'Classifica —'}</small></div><div class="v14-vs-center"><strong>VS</strong></div><div>${realCrest(a)}<b>${realEsc(a.name)}</b><small>${as?`Classifica ${as}°`:'Classifica —'}</small></div></div></header>
 <section class="v14-card"><div class="v14-card-title">PROBABILITÀ DEL MODELLO <button class="info" data-info="${encodeURIComponent('Le probabilità saranno riattivate dopo calibrazione e backtesting sui dati reali.')}">i</button></div><div class="v14-markets"><div class="v14-market"><b>1X2</b><div><span><small>1</small><strong>—</strong></span><span><small>X</small><strong>—</strong></span><span><small>2</small><strong>—</strong></span></div></div><div class="v14-market"><b>GOL / NO GOL</b><div><span><small>GOL</small><strong>—</strong></span><span><small>NO GOL</small><strong>—</strong></span></div></div><div class="v14-market"><b>OVER / UNDER 2.5</b><div><span><small>OVER</small><strong>—</strong></span><span><small>UNDER</small><strong>—</strong></span></div></div></div></section>
 <section class="v14-card v14-model"><div class="v14-card-title">ANALISI DEL MODELLO</div><div class="v14-score-head"><div class="v14-score-team">${realCrest(h)}<b>${realEsc(h.name)}</b><strong>—</strong></div><div class="v14-score-diff"><small>MODEL SCORE</small><strong>—</strong><span>calibrazione</span></div><div class="v14-score-team">${realCrest(a)}<b>${realEsc(a.name)}</b><strong>—</strong></div></div><div class="v14-macros">${macros.map(([k])=>{const meta=V14_MACRO_META[k],hv=hp[k],av=ap[k],dv=hv!=null&&av!=null?hv-av:null;return `<div class="v14-macro"><div class="v14-macro-name"><span class="v14-macro-icon">${meta.icon}</span><div><b>${meta.title} <button class="info" data-info="${encodeURIComponent(meta.parts)}">i</button></b><small>${meta.desc}</small></div></div><div class="v14-macro-values"><div><strong>${hv??'—'}</strong><span class="v14-bar ${hv==null?'':v14Band(hv)}"><i style="width:${hv??0}%"></i></span></div><em class="${dv==null?'neu':dv>=0?'pos':'neg'}">${dv==null?'—':(dv>=0?'+':'')+dv}</em><div><strong>${av??'—'}</strong><span class="v14-bar ${av==null?'':v14Band(av)}"><i style="width:${av??0}%"></i></span></div></div></div>`}).join('')}</div><p class="real-note">Valori presenti = elaborazione preliminare su dati SportMonks reali. Le formule definitive saranno calibrate successivamente.</p></section>
 <div class="v14-accordions"><details class="v14-fold" open><summary>DATI TECNICI <span class="v18-toggle">+</span></summary><div class="v14-fold-body"><div class="compare-head"><span>INDICATORE</span><b>${realTeamCode(h)}</b><b>${realTeamCode(a)}</b></div>${tech.map(r=>`<div class="compare-row"><span>${r[0]}</span><b>${r[1]==null?'—':r[0]==='Possesso'?realFmt(r[1],0)+'%':realFmt(r[1],1)}</b><b>${r[2]==null?'—':r[0]==='Possesso'?realFmt(r[2],0)+'%':realFmt(r[2],1)}</b></div>`).join('')}</div></details><details class="v14-fold"><summary>FORMA RECENTE <span class="v18-toggle">+</span></summary><div class="v14-fold-body"><div class="compare-row"><span>${realEsc(h.name)}</span><b>${realFormDots(hm.form)}</b><b></b></div><div class="compare-row"><span>${realEsc(a.name)}</span><b>${realFormDots(am.form)}</b><b></b></div></div></details><details class="v14-fold"><summary>TESTA A TESTA <span class="v18-toggle">+</span></summary><div class="v14-fold-body">${h2.length?h2.map(f=>{const hh=realLoc(f,'home')||{},aa=realLoc(f,'away')||{};return `<div class="compare-row"><span>${realEsc(String(f.starting_at||'').slice(0,10))}</span><b>${realEsc(hh.name||'')} ${realScore(f,hh.id)??'—'}–${realScore(f,aa.id)??'—'} ${realEsc(aa.name||'')}</b><b></b></div>`}).join(''):`<div class="empty-note">Nessun H2H disponibile.</div>`}</div></details><details class="v14-fold"><summary>PROBABILI FORMAZIONI <span class="v18-toggle">+</span></summary><div class="v14-fold-body"><div class="empty-note">— · solo quando SportMonks le renderà disponibili.</div></div></details><details class="v14-fold"><summary>ASSENZE <span class="v18-toggle">+</span></summary><div class="v14-fold-body"><div class="empty-note">— · nessun dato affidabile nel pacchetto attuale.</div></div></details><details class="v14-fold"><summary>ARBITRO <span class="v18-toggle">+</span></summary><div class="v14-fold-body"><div class="empty-note">— · in attesa del dato ufficiale.</div></div></details></div></div>`;bind();
 }catch(e){document.querySelector('#main').innerHTML=`<div class="page v14-analysis-page"><button class="back-btn" data-nav="matches">‹ MATCHES</button><section class="v14-card"><div class="empty-note">${realEsc(e.message)}</div></section></div>`;bind()}
}


/* ============================================================
   V58 — PRE-MATCH ENGINE REALE
   Mantiene la UI V47 e usa esclusivamente dati SportMonks.
   Le stime sono preliminari finché non completiamo backtesting/calibrazione.
   ============================================================ */
function v58SideOfFixture(f,teamId){
  const p=(f?.participants||[]).find(x=>String(x?.id)===String(teamId));
  return String(p?.meta?.location||"").toLowerCase();
}
function v58TeamFixtures(fs,teamId,side=null){
  const out=(Array.isArray(fs)?fs:[]).filter(f=>{
    const p=(f?.participants||[]).some(x=>String(x?.id)===String(teamId));
    return p && (!side || v58SideOfFixture(f,teamId)===side);
  });
  return out.sort((a,b)=>String(b?.starting_at||"").localeCompare(String(a?.starting_at||"")));
}
function v58XgFor(f,teamId){
  const xs=Array.isArray(f?.xGFixture)?f.xGFixture:Array.isArray(f?.xgfixture)?f.xgfixture:[];
  const x=xs.find(v=>String(v?.participant_id)===String(teamId));
  return realNum(x?.data?.value??x?.value);
}
function v58XgaFor(f,teamId){
  const opp=realOpponent(f,teamId);
  return opp?v58XgFor(f,opp.id):null;
}
function v58Avg(arr){const a=arr.filter(v=>v!=null&&Number.isFinite(Number(v))).map(Number);return a.length?a.reduce((x,y)=>x+y,0)/a.length:null}
function v58AvgOppStat(fs,teamId,key){
  const vals=[];
  for(const f of fs){
    const opp=realOpponent(f,teamId); if(!opp) continue;
    const v=realAvgStat([f],opp.id,key); if(v!=null) vals.push(v);
  }
  return v58Avg(vals);
}
function v58Metrics(fs,t,side=null){
  const all=v58TeamFixtures(fs,t.id,side);
  const last5=all.slice(0,5);
  const recent=realRecent(last5,t.id);
  const gf=[],ga=[],xg=[],xga=[],clean=[];
  for(const f of last5){
    const o=realOpponent(f,t.id),a=realScore(f,t.id),b=o?realScore(f,o.id):null;
    if(a!=null)gf.push(a); if(b!=null)ga.push(b); if(b!=null)clean.push(b===0?1:0);
    const xf=v58XgFor(f,t.id),xa=v58XgaFor(f,t.id); if(xf!=null)xg.push(xf); if(xa!=null)xga.push(xa);
  }
  const pts=recent.reduce((n,x)=>n+(x.r==="W"?3:x.r==="D"?1:0),0);
  return {
    fixtures:last5,
    sample:last5.length,
    form:recent,
    formScore:recent.length?Math.round(pts/(recent.length*3)*100):null,
    gf:v58Avg(gf),ga:v58Avg(ga),xg:v58Avg(xg),xga:v58Avg(xga),
    clean:clean.length?v58Avg(clean)*100:null,
    pos:realAvgStat(last5,t.id,"pos"),
    shots:realAvgStat(last5,t.id,"shots"),
    sot:realAvgStat(last5,t.id,"sot"),
    corners:realAvgStat(last5,t.id,"corners"),
    attacks:realAvgStat(last5,t.id,"attacks"),
    danger:realAvgStat(last5,t.id,"danger"),
    fouls:realAvgStat(last5,t.id,"fouls"),
    oppShots:v58AvgOppStat(last5,t.id,"shots"),
    oppSot:v58AvgOppStat(last5,t.id,"sot")
  };
}
function v58Scale(v,min,max,invert=false){
  if(v==null)return null;
  const x=realClamp((v-min)/(max-min)*100);
  return Math.round(invert?100-x:x);
}
function v58Weighted(parts){
  const ok=parts.filter(x=>x[0]!=null);
  if(!ok.length)return null;
  return Math.round(ok.reduce((s,[v,w])=>s+v*w,0)/ok.reduce((s,[v,w])=>s+w,0));
}
function v58Macro(m){
  return {
    threat:v58Weighted([
      [v58Scale(m.xg,.55,2.35),.34],[v58Scale(m.gf,.55,2.45),.20],
      [v58Scale(m.shots,7,18),.16],[v58Scale(m.sot,2,7),.16],[v58Scale(m.danger,25,70),.14]
    ]),
    defense:v58Weighted([
      [v58Scale(m.xga,.60,2.05,true),.38],[v58Scale(m.ga,.55,2.15,true),.30],
      [v58Scale(m.oppShots,7,18,true),.18],[m.clean!=null?Math.round(realClamp(m.clean*1.25)):null,.14]
    ]),
    form:m.formScore,
    opponent:null,
    pressing:null,
    availability:null
  };
}
function v58ModelScore(m){
  const weights={threat:.36,defense:.34,form:.30,opponent:.15,pressing:.15,availability:.08};
  const parts=Object.keys(weights).map(k=>[m[k],weights[k]]).filter(x=>x[0]!=null);
  return parts.length?Math.round(parts.reduce((s,[v,w])=>s+v*w,0)/parts.reduce((s,[v,w])=>s+w,0)):null;
}
function v58Poisson(lambda,k){
  let f=1;for(let i=2;i<=k;i++)f*=i;
  return Math.exp(-lambda)*Math.pow(lambda,k)/f;
}
function v58BlendGoal(a,b,fallback=1.25){
  const vals=[a,b].filter(v=>v!=null&&Number.isFinite(Number(v)));
  return vals.length?v58Avg(vals):fallback;
}
function v58Prediction(hm,am,hsplit,asplit){
  const hAtt=v58BlendGoal(hsplit.xg??hm.xg,hsplit.gf??hm.gf,1.30);
  const aDef=v58BlendGoal(asplit.xga??am.xga,asplit.ga??am.ga,1.25);
  const aAtt=v58BlendGoal(asplit.xg??am.xg,asplit.gf??am.gf,1.10);
  const hDef=v58BlendGoal(hsplit.xga??hm.xga,hsplit.ga??hm.ga,1.10);
  const lh=realClamp((hAtt*.58+aDef*.42)*1.06,.20,3.20);
  const la=realClamp((aAtt*.58+hDef*.42)*.96,.15,3.00);
  let p1=0,px=0,p2=0,over=0,gg=0;
  for(let i=0;i<=8;i++)for(let j=0;j<=8;j++){
    const p=v58Poisson(lh,i)*v58Poisson(la,j);
    if(i>j)p1+=p; else if(i===j)px+=p; else p2+=p;
    if(i+j>=3)over+=p;
    if(i>0&&j>0)gg+=p;
  }
  let one=Math.round(p1*100),x=Math.round(px*100);let two=100-one-x;
  let ov=Math.round(over*100),g=Math.round(gg*100);
  return {one,x,two,over:ov,under:100-ov,gg:g,ng:100-g,lambdaHome:lh,lambdaAway:la};
}
function v58Completeness(hm,am){
  const keys=["gf","ga","xg","xga","shots","sot","pos","corners","danger"];
  const vals=keys.flatMap(k=>[hm[k],am[k]]);
  return vals.filter(v=>v!=null).length/vals.length;
}
function v58Confidence(pred,hm,am){
  const probs=[pred.one,pred.x,pred.two].sort((a,b)=>b-a);
  const sep=probs[0]-probs[1],comp=v58Completeness(hm,am),sample=Math.min(1,(hm.sample+am.sample)/16);
  return Math.round(realClamp(38+sep*.65+comp*28+sample*12,35,92));
}
function v58PerfTrend(fs,teamId){
  return v58TeamFixtures(fs,teamId).slice(0,5).reverse().map(f=>{
    const o=realOpponent(f,teamId),gf=realScore(f,teamId),ga=o?realScore(f,o.id):null;
    if(gf==null||ga==null)return 50;
    const result=gf>ga?72:gf===ga?50:28;
    const x=v58XgFor(f,teamId),xa=v58XgaFor(f,teamId);
    const xAdj=(x!=null&&xa!=null)?realClamp((x-xa)*12,-18,18):0;
    return Math.round(realClamp(result+xAdj,10,92));
  });
}
function v58TrendSvg(vals){
  if(!vals.length)return `<div class="empty-note">Trend non disponibile.</div>`;
  const w=300,h=92,p=12,step=(w-p*2)/Math.max(vals.length-1,1);
  const pts=vals.map((v,i)=>[p+i*step,h-p-(v/100)*(h-p*2)]);
  return `<div class="trend-chart"><svg viewBox="0 0 ${w} ${h}"><line x1="${p}" y1="${h-p}" x2="${w-p}" y2="${h-p}" class="axis"></line><line x1="${p}" y1="${h/2}" x2="${w-p}" y2="${h/2}" class="grid"></line><polyline points="${pts.map(x=>x.join(",")).join(" ")}" class="trend-line ${vals.at(-1)>=vals[0]?"up":"down"}"></polyline>${pts.map((q,i)=>`<circle cx="${q[0]}" cy="${q[1]}" r="3.5" class="trend-point ${vals.at(-1)>=vals[0]?"up":"down"}"></circle><text x="${q[0]}" y="${Math.max(10,q[1]-7)}" text-anchor="middle" class="trend-value">${vals[i]}</text>`).join("")}</svg></div>`;
}
function v58Context(pack){const c=pack?.fixture_context;return c?.ok===true?c.data:null}
function v58Referee(ctx){const rs=Array.isArray(ctx?.referees)?ctx.referees:[];const r=rs[0];return r?.referee?.name||r?.name||null}
function v58Lineups(ctx,teamId){const xs=Array.isArray(ctx?.lineups)?ctx.lineups:[];return xs.filter(x=>String(x?.team_id??x?.participant_id)===String(teamId))}
function v58LineupHtml(ctx,t){
  const xs=v58Lineups(ctx,t.id);
  if(!xs.length)return `<div class="empty-note">Non ancora pubblicata da SportMonks.</div>`;
  return `<div class="v14-lineup-title">${realEsc(t.name)}</div><div class="v58-lineup-list">${xs.slice(0,18).map(x=>`<p><b>${realEsc(x?.player?.display_name||x?.player?.name||x?.player_name||"Giocatore")}</b><span>${x?.type_id===11||x?.starter===true?"Titolare":"Panchina"}</span></p>`).join("")}</div>`;
}
function v58SidelinedHtml(ctx,h,a){
  const xs=Array.isArray(ctx?.sidelined)?ctx.sidelined:[];
  if(!xs.length)return `<div class="empty-note">Nessuna informazione affidabile disponibile al momento.</div>`;
  const team=t=>xs.filter(x=>String(x?.participant_id??x?.team_id)===String(t.id));
  return `<div class="absence-grid">${[h,a].map(t=>`<div><b>${realEsc(t.name)}</b>${team(t).length?team(t).map(x=>`<p><strong>${realEsc(x?.player?.display_name||x?.player?.name||"Giocatore")}</strong><span class="out">${realEsc(x?.category||x?.type?.name||"Indisponibile")}</span></p>`).join(""):`<p>—</p>`}</div>`).join("")}</div>`;
}
function v58FmtMetric(name,v){if(v==null)return "—";if(name==="Possesso"||name==="Clean sheet")return realFmt(v,0)+"%";return realFmt(v,1)}
function v58Technical(hm,am){return [["xG",hm.xg,am.xg],["xGA",hm.xga,am.xga],["Gol fatti",hm.gf,am.gf],["Gol subiti",hm.ga,am.ga],["Possesso",hm.pos,am.pos],["Tiri",hm.shots,am.shots],["Tiri in porta",hm.sot,am.sot],["Corner",hm.corners,am.corners],["Attacchi pericolosi",hm.danger,am.danger]]}

/* V59 — raffinamenti UI + campione ultime 5 */
function v59SampleState(m){
  if(!m || m.sample < 3) return {level:"insufficient",label:"DATI INSUFFICIENTI"};
  if(m.sample < 5) return {level:"preliminary",label:"PRELIMINARE"};
  return {level:"standard",label:""};
}
function v59ModelScore(macros,metrics){
  if(!metrics || metrics.sample < 3) return null;
  const raw=v58ModelScore(macros);
  if(raw==null) return null;
  if(metrics.sample < 5) return Math.round(raw*.88+50*.12);
  return raw;
}
function v59ShrinkPrediction(pred,hm,am){
  const minSample=Math.min(hm?.sample||0,am?.sample||0);
  const reliability=Math.min(1,minSample/5);
  const prior={one:42,x:30,two:28,gg:50,ng:50,over:50,under:50};
  const blend=(a,b)=>Math.round(b+(a-b)*reliability);
  let one=blend(pred.one,prior.one),x=blend(pred.x,prior.x);
  let two=100-one-x;
  let gg=blend(pred.gg,prior.gg),over=blend(pred.over,prior.over);
  return {...pred,one,x,two,gg,ng:100-gg,over,under:100-over,reliability};
}
function v59Confidence(pred,hm,am){
  let c=v58Confidence(pred,hm,am);
  const minSample=Math.min(hm?.sample||0,am?.sample||0);
  if(minSample===0)c=Math.min(c,45);
  else if(minSample<3)c=Math.min(c,54);
  else if(minSample<5)c=Math.min(c,66);
  return c;
}
function v59H2HCard(f){
  const home=realLoc(f,"home")||{},away=realLoc(f,"away")||{};
  const hs=realScore(f,home.id),as=realScore(f,away.id);
  const date=realEsc(String(f.starting_at||"").slice(0,10));
  return `<div class="v61-h2h-card"><div class="v61-h2h-date">${date}</div><div class="v61-h2h-grid"><div class="v61-h2h-team">${realCrest(home)}<span>${realEsc(home.name||"—")}</span></div><div class="v61-h2h-score">${hs??"—"}<em>–</em>${as??"—"}</div><div class="v61-h2h-team">${realCrest(away)}<span>${realEsc(away.name||"—")}</span></div></div></div>`;
}
function v59FormationName(ctx,teamId){
  const fs=Array.isArray(ctx?.formations)?ctx.formations:[];
  const f=fs.find(x=>String(x?.participant_id??x?.team_id)===String(teamId));
  return f?.formation || f?.formation_name || f?.name || "—";
}
function v59StarterLineups(ctx,teamId){
  const xs=Array.isArray(ctx?.lineups)?ctx.lineups:[];
  return xs.filter(x=>String(x?.team_id)===String(teamId) && Number(x?.type_id)===11).slice(0,11);
}
function v59PlayerShort(x){
  const n=x?.player?.display_name||x?.player?.name||x?.player_name||"";
  if(!n)return "—";
  const p=String(n).trim().split(/\s+/);
  return p.length>1?(p[0][0]+". "+p[p.length-1]):p[0];
}
function v59FieldPosition(x,starters){
  const ff=String(x?.formation_field||"");
  const m=ff.match(/^(\d+):(\d+)$/);
  if(!m)return {left:50,top:50};
  const row=Number(m[1]),col=Number(m[2]);
  const parsed=starters.map(y=>{
    const q=String(y?.formation_field||"").match(/^(\d+):(\d+)$/);
    return q?{row:Number(q[1]),col:Number(q[2])}:null;
  }).filter(Boolean);
  const maxRow=Math.max(1,...parsed.map(q=>q.row));
  const rowCols=parsed.filter(q=>q.row===row).map(q=>q.col);
  const maxCol=Math.max(1,...rowCols);
  const left=(col/(maxCol+1))*100;
  const top=90-((row-1)/Math.max(1,maxRow-1))*78;
  return {left,top};
}
function v59FormationField(ctx,t){
  const starters=v59StarterLineups(ctx,t.id);
  const formation=v59FormationName(ctx,t.id);
  if(starters.length<7){
    return `<div class="v59-formation-card"><div class="v59-formation-head"><b>${realEsc(t.name)}</b><span>${realEsc(formation)}</span></div><div class="empty-note">Formazione non ancora disponibile.</div></div>`;
  }
  return `<div class="v59-formation-card">
    <div class="v59-formation-head"><b>${realEsc(t.name)}</b><span>${realEsc(formation)}</span></div>
    <div class="v59-pitch">
      <i class="v59-half"></i><i class="v59-circle"></i><i class="v59-box top"></i><i class="v59-box bottom"></i>
      ${starters.map(x=>{const p=v59FieldPosition(x,starters);return `<div class="v59-player" style="left:${p.left}%;top:${p.top}%"><span>${realEsc(x?.jersey_number??"")}</span><small>${realEsc(v59PlayerShort(x))}</small></div>`}).join("")}
    </div>
  </div>`;
}
function v59SidelinedHtml(ctx,h,a){
  const xs=Array.isArray(ctx?.sidelined)?ctx.sidelined:[];
  const render=t=>{
    const rows=xs.filter(x=>String(x?.participant_id??x?.team_id)===String(t.id))
      .map(x=>({name:x?.player?.display_name||x?.player?.name||x?.player_name||"",reason:x?.category||x?.type?.name||"Indisponibile"}))
      .filter(x=>x.name);
    return `<div class="v59-absence-team"><b>${realEsc(t.name)}</b>${rows.length?rows.map(x=>`<p><span>${realEsc(x.name)}</span><em>${realEsc(x.reason)}</em></p>`).join(""):`<p class="v59-noabsence">Nessuna informazione disponibile</p>`}</div>`;
  };
  return `<div class="v59-absence-grid">${render(h)}${render(a)}</div>`;
}

async function realMatchDetail(id){
  document.querySelector('#main').innerHTML=`<div class="page v14-analysis-page"><div class="v14-analysis-top"><button class="v14-back" data-nav="matches">←</button></div><section class="v14-card"><div class="empty-note">Elaborazione analisi pre-match SportMonks…</div></section></div>`;bind();
  try{
    const [pack,fb]=await Promise.all([realApi(`/prematch?id=${encodeURIComponent(id)}`),realApi(`/fixture?id=${encodeURIComponent(id)}`)]);
    const detail=fb?.data||fb,fx=pack.fixture||{},h=pack.teams?.home||{},a=pack.teams?.away||{};
    const hfs=realHistory(pack,"home_history"),afs=realHistory(pack,"away_history");
    const hm=v58Metrics(hfs,h),am=v58Metrics(afs,a),hsplit=v58Metrics(hfs,h,"home"),asplit=v58Metrics(afs,a,"away");
    const hp=v58Macro(hm),ap=v58Macro(am),hscore=v59ModelScore(hp,hm),ascore=v59ModelScore(ap,am);
    const rawPred=v58Prediction(hm,am,hsplit,asplit),pred=v59ShrinkPrediction(rawPred,hm,am),confidence=v59Confidence(pred,hm,am);
    const standingsH=realStanding(pack,h.id),standingsA=realStanding(pack,a.id),h2=realHistory(pack,"h2h").slice(0,5);
    const ctx=v58Context(pack)||detail,ref=v58Referee(ctx);
    const hs=v59SampleState(hm),as=v59SampleState(am);
    const macros=[["threat","Threat Creation"],["defense","Defense Stability"],["form","Forma"],["opponent","Opponent Strength"],["pressing","Pressing / PPDA"],["availability","Availability"]];
    const tech=v58Technical(hm,am);
    const markets=[["1X2",[["1",pred.one],["X",pred.x],["2",pred.two]]],["GOL / NO GOL",[["GOL",pred.gg],["NO GOL",pred.ng]]],["OVER / UNDER 2.5",[["OVER",pred.over],["UNDER",pred.under]]]];
    const diff=(hscore!=null&&ascore!=null)?hscore-ascore:null,winner=diff==null?"—":diff>=0?h.name:a.name;
    const sampleWarning=(hm.sample<5||am.sample<5);
    document.querySelector('#main').innerHTML=`<div class="page v14-analysis-page">
      <div class="v14-analysis-top"><button class="v14-back" data-nav="matches">←</button><button class="v14-star">☆</button></div>

      <header class="v14-match-head">
        <h1>${realEsc(h.name)} — ${realEsc(a.name)}</h1>
        <p>${realEsc(fx.league?.name||detail?.league?.name||"")} · ${realEsc(String(fx.starting_at||"").slice(0,10))} · ${realEsc(String(fx.starting_at||"").slice(11,16))}${ref?` · Arbitro: ${realEsc(ref)}`:""}</p>
        <div class="v14-versus">
          <div>${realCrest(h)}<b>${realEsc(h.name)}</b><small>${standingsH?`${standingsH}° in classifica`:"Classifica —"}</small></div>
          <div class="v14-vs-center"><strong>VS</strong></div>
          <div>${realCrest(a)}<b>${realEsc(a.name)}</b><small>${standingsA?`${standingsA}° in classifica`:"Classifica —"}</small></div>
        </div>
      </header>

      <section class="v14-card">
        <div class="v14-card-title">PROBABILITÀ DEL MODELLO ${info("Probabilità","Stima preliminare SPACE16154. Quando una squadra ha meno di 5 gare utili, il modello riduce automaticamente l'aggressività della previsione.")}</div>
        <div class="v14-markets">${markets.map(([title,vals])=>{const max=Math.max(...vals.map(v=>v[1]));return `<div class="v14-market"><b>${title}</b><div>${vals.map(v=>`<span class="${v[1]===max?"best":""}"><small>${v[0]}</small><strong>${v[1]}%</strong></span>`).join("")}</div></div>`}).join("")}</div>
        <div class="v58-confidence"><span>CONFIDENCE PRELIMINARE ${info("Confidence","Solidità del segnale, separata dalla probabilità. È penalizzata quando una delle squadre ha un campione ridotto.")}</span><strong>${confidence}%</strong></div>
        ${sampleWarning?`<div class="v59-sample-warning"><b>CAMPIONE PARZIALE</b><span>${realEsc(h.name)}: ${hm.sample}/5 · ${realEsc(a.name)}: ${am.sample}/5. Le probabilità sono rese più conservative automaticamente.</span></div>`:""}
      </section>

      <section class="v14-card v14-model">
        <div class="v14-card-title">ANALISI DEL MODELLO <small class="v59-last5">ULTIME 5</small></div>
        <div class="v14-score-head">
          <div class="v14-score-team">${realCrest(h)}<b>${realEsc(h.name)}</b><strong>${hscore??"—"}</strong><small class="v59-score-state ${hs.level}">${hs.label}</small></div>
          <div class="v14-score-diff"><small>MODEL SCORE</small><strong>${diff==null?"—":(diff>=0?"+":"")+diff}</strong><span>${diff==null?"campione non confrontabile":`Vantaggio ${realEsc(winner)}`}</span></div>
          <div class="v14-score-team">${realCrest(a)}<b>${realEsc(a.name)}</b><strong>${ascore??"—"}</strong><small class="v59-score-state ${as.level}">${as.label}</small></div>
        </div>
        <div class="v14-macros">${macros.map(([k])=>{const meta=V14_MACRO_META[k],hv=hm.sample<3?null:hp[k],av=am.sample<3?null:ap[k],dv=hv!=null&&av!=null?hv-av:null;return `<div class="v14-macro"><div class="v14-macro-name"><span class="v14-macro-icon">${meta.icon}</span><div><b>${meta.title} <button class="info" data-info="${encodeURIComponent(meta.parts)}">i</button></b><small>${meta.desc}</small></div></div><div class="v14-macro-values"><div><strong>${hv??"—"}</strong><span class="v14-bar ${hv==null?"":v14Band(hv)}"><i style="width:${hv??0}%"></i></span></div><em class="${dv==null?"neu":dv>=0?"pos":"neg"}">${dv==null?"—":(dv>=0?"+":"")+dv}</em><div><strong>${av??"—"}</strong><span class="v14-bar ${av==null?"":v14Band(av)}"><i style="width:${av??0}%"></i></span></div></div></div>`}).join("")}</div>
        <p class="real-note">Le macroaree vengono mostrate solo quando esiste un campione minimo utilizzabile. Nessun valore viene inventato per compensare dati mancanti.</p>
      </section>

      ${v60PostMatchHtml(detail,h,a)}
      <div class="v14-accordions">
        <details class="v14-fold v59-tech-fold" open>
          <summary>DATI TECNICI <small>MEDIE ULTIME 5</small><span class="v18-toggle">+</span></summary>
          <div class="v14-fold-body v59-tech-body">
            <div class="v59-tech-head"><span>INDICATORE</span><b>${realTeamCode(h)}</b><b>${realTeamCode(a)}</b></div>
            <div class="v59-tech-table">${tech.map(r=>`<div class="v59-tech-row"><span>${r[0]}</span><b>${v58FmtMetric(r[0],r[1])}</b><b>${v58FmtMetric(r[0],r[2])}</b></div>`).join("")}</div>
            <p class="real-note">Medie sulle ultime 5 gare utili. Casa/trasferta viene considerato separatamente nel motore probabilistico.</p>
          </div>
        </details>

        <details class="v14-fold">
          <summary>FORMA RECENTE <small>ULTIME 5</small><span class="v18-toggle">+</span></summary>
          <div class="v14-fold-body">
            <div class="v59-form-row"><span>${realEsc(h.name)}</span><b>${realFormDots(hm.form)}</b><em>${hm.sample}/5</em></div>
            <div class="v59-form-row"><span>${realEsc(a.name)}</span><b>${realFormDots(am.form)}</b><em>${am.sample}/5</em></div>
          </div>
        </details>

        <details class="v14-fold" open>
          <summary>TESTA A TESTA <span class="v18-toggle">+</span></summary>
          <div class="v14-fold-body v59-h2h-list">${h2.length?h2.map(v59H2HCard).join(""):`<div class="empty-note">Nessun H2H disponibile.</div>`}</div>
        </details>

        <details class="v14-fold">
          <summary>PROBABILI FORMAZIONI <span class="v18-toggle">+</span></summary>
          <div class="v14-fold-body v60-formation-wrap"><div class="v60-formation-tabs"><button class="active" data-v60-formtab="home">${realEsc(h.name)}</button><button data-v60-formtab="away">${realEsc(a.name)}</button></div><div data-v60-formbody="home">${v59FormationField(ctx,h)}</div><div data-v60-formbody="away" hidden>${v59FormationField(ctx,a)}</div></div>
        </details>

        <details class="v14-fold">
          <summary>ASSENZE <span class="v18-toggle">+</span></summary>
          <div class="v14-fold-body">${v59SidelinedHtml(ctx,h,a)}</div>
        </details>

        <details class="v14-fold">
          <summary>ARBITRO <span class="v18-toggle">+</span></summary>
          <div class="v14-fold-body">${ref?`<div class="v14-ref-grid"><div><small>Arbitro</small><b>${realEsc(ref)}</b></div></div>`:`<div class="empty-note">Non ancora disponibile.</div>`}</div>
        </details>
      </div>
    </div>`;bind();
    document.querySelectorAll("[data-v60-formtab]").forEach(b=>b.onclick=()=>{document.querySelectorAll("[data-v60-formtab]").forEach(x=>x.classList.toggle("active",x===b));document.querySelectorAll("[data-v60-formbody]").forEach(x=>x.hidden=x.dataset.v60Formbody!==b.dataset.v60Formtab)});
  }catch(e){
    document.querySelector('#main').innerHTML=`<div class="page v14-analysis-page"><button class="back-btn" data-nav="matches">‹ MATCHES</button><section class="v14-card"><div class="empty-note">${realEsc(e.message)}</div></section></div>`;bind();
  }
}
function route(n,id){
 v27History({kind:"route",n:n,id:id});
 const navState=n==="match"?"matches":n==="team"||n==="standings"?"analysis":n==="performance"||n==="confidence"||n==="live"||n==="favorites"||n==="live-match"?"more":n;
 document.body.innerHTML=shell(navState);
 if(n==="dashboard")realDashboard();
 else if(n==="matches")realMatches();
 else if(n==="analysis")v19AnalysisHome();
 else if(n==="signals")signalsPage();
 else if(n==="more")more();
 else if(n==="standings")v60StandingsPage();
 else if(n==="match")(/^\d+$/.test(String(id||""))?realMatchDetail(id):matchDetail(id));
 else if(n==="team")teamProfile(id);
 else if(n==="performance")performance();
 else if(n==="confidence")confidencePage();
 else if(n==="live")livePage();
 else if(n==="favorites")favoritesPage();
 else if(n==="live-match")liveMatch(id);
 else realDashboard();
 scrollTo(0,0);
}
route("dashboard");
if("serviceWorker"in navigator)window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js?v=11.1.0-v61-polish-live",{updateViaCache:"none"}).catch(()=>{}));
