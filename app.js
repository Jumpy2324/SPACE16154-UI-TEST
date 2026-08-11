// SPACE16154 — PRE-03:02 GRAPHICS + FUNCTIONAL MODEL UPDATE
// Grafica base: ultimo pacchetto pre-03:02 (V4.0 cache-bust family).
// Nessun logo.svg: l'identità resta testuale come nella grafica buona.

const CONFIG={
  version:"7.7.0-ui-test-v24",
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
let DASH_YEAR = 2026;
let DASH_MONTH = 7;
let DASH_DAY = 11;

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
      DASH_MONTH=Number(b.dataset.v8Month); normalizeDashDay(); dd.remove(); route("dashboard");
    });
  } else {
    const n=daysInMonth(DASH_YEAR,DASH_MONTH);
    dd.innerHTML=`<div class="v8-dropdown-title">GIORNO</div><div class="v8-scroll-list v8-days-list">${Array.from({length:n},(_,i)=>i+1).map(d=>`<button data-v8-day="${d}" class="${d===DASH_DAY?"active":""}">${String(d).padStart(2,"0")}</button>`).join("")}</div>`;
    dd.querySelectorAll("[data-v8-day]").forEach(b=>b.onclick=()=>{
      DASH_DAY=Number(b.dataset.v8Day); dd.remove(); route("dashboard");
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
         <div><small>Confidence</small><b class="${c?"green":""}">${c?pct(c)+"%":"—"}</b></div>
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
    <p>${m.league} · 11 Agosto 2026 · ${m.time} · Arbitro: ${m.referee}</p>
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
           <div><strong>${hv}</strong><span class="v14-bar ${v14Band(hv)}"><i style="width:${hv}%"></i></span></div>
           <em class="${dv>=0?"pos":"neg"}">${dv>=0?"+":""}${dv}${k==="form"?` ${dv>0?"↑":dv<0?"↓":"→"}`:""}</em>
           <div><strong>${av}</strong><span class="v14-bar ${v14Band(av)}"><i style="width:${av}%"></i></span></div>
         </div>
       </div>`;
    }).join("")}</div>
  </section>

  <div class="v14-accordions">
    <details class="v14-fold"><summary>DATI TECNICI <span class="v18-toggle">+</span></summary><div class="v14-fold-body"><div class="compare-head"><span>INDICATORE</span><b>${m.h.code}</b><b>${m.a.code}</b></div>${technical(m).map(r=>`<div class="compare-row"><span>${r[0]} ${info(r[0],TECH_INFO[r[0]])}</span><b>${r[1]}</b><b>${r[2]}</b></div>`).join("")}</div></details>
    <details class="v14-fold"><summary>PROBABILI FORMAZIONI <span class="v18-toggle">+</span></summary><div class="v14-fold-body v14-lineups">${v14TeamFormation(m.h,"h")}${v14TeamFormation(m.a,"a")}</div></details>
    <details class="v14-fold"><summary>ASSENZE <span class="v18-toggle">+</span></summary><div class="v14-fold-body"><div class="absence-grid">${m.abs.map(a=>`<div><b>${a[0]}</b>${a[1].map(p=>`<p><strong>${p[0]}</strong><span class="${p[1]==="Out"?"out":"doubt"}">${p[1]}</span><small>${p[2]}</small></p>`).join("")}</div>`).join("")}</div></div></details>
    <details class="v14-fold"><summary>ARBITRO <span class="v18-toggle">+</span></summary><div class="v14-fold-body">${v14Referee(m)}</div></details>
  </div>
 </div>`;
 bind();
 document.querySelector("[data-v14-fav]").onclick=e=>{
   const on=v14ToggleFavorite(e.currentTarget.dataset.v14Fav);
   e.currentTarget.textContent=on?"★":"☆"; e.currentTarget.classList.toggle("active",on);
 };
}
let SIG={type:"Tutti",league:"Tutti"};
function allSignals(){return MATCHES.flatMap(m=>m.signals.map(s=>({...s,m})))}
function signalsPage(){
 const all=allSignals(),c=t=>all.filter(x=>x.type===t).length;
 document.querySelector("#main").innerHTML=`<div class="page"><div class="eyebrow">SIGNAL CENTER</div><h1>TOP SIGNALS</h1><p class="subtitle">Solo segnali che superano le soglie del modello.</p>
 <div class="signal-summary2"><div><strong>${all.length}</strong><small>Segnali oggi</small></div><div class="c"><strong>${c("Confidence")}</strong><small>Confidence</small></div><div class="v"><strong>${c("Value")}</strong><small>Value</small></div><div class="f"><strong>${c("Forma")}</strong><small>Forma</small></div></div>
 <div class="top-filter-grid"><button class="filter active" data-sig-type="Tutti">Tutti</button><button class="filter confidence" data-sig-type="Confidence">Confidence</button><button class="filter value" data-sig-type="Value">Value</button><button class="filter form" data-sig-type="Forma">Forma</button></div>
 <div class="league-stack compact">${["Tutti",...CONFIG.leagues].map((l,i)=>`<button class="league-row ${i===0?"active":""}" data-sig-league="${l}"><span>${l==="Tutti"?"Tutti i campionati":l}</span><em>›</em></button>`).join("")}</div>
 <section class="panel"><div class="section-head"><h2>SEGNALI</h2><span id="sigCount"></span></div><div id="sigList"></div></section></div>`;
 SIG={type:"Tutti",league:"Tutti"};renderSig();bind();
 document.querySelectorAll("[data-sig-type]").forEach(b=>b.onclick=()=>{document.querySelectorAll("[data-sig-type]").forEach(x=>x.classList.remove("active"));b.classList.add("active");SIG.type=b.dataset.sigType;renderSig();bindMatchesOnly()});
 document.querySelectorAll("[data-sig-league]").forEach(b=>b.onclick=()=>{document.querySelectorAll("[data-sig-league]").forEach(x=>x.classList.remove("active"));b.classList.add("active");SIG.league=b.dataset.sigLeague;renderSig();bindMatchesOnly()});
}
function renderSig(){
 const matches=MATCHES.filter(m=>{
   const selected=m.signals.filter(s=>SIG.type==="Tutti"||s.type===SIG.type);
   return selected.length && (SIG.league==="Tutti"||m.league===SIG.league);
 });
 document.querySelector("#sigCount").textContent=matches.length+" partite";
 document.querySelector("#sigList").innerHTML=matches.length?matches.map(m=>{
   const selected=m.signals.filter(s=>SIG.type==="Tutti"||s.type===SIG.type);
   return `<button class="signal-match-card" data-match="${m.id}">
     <div class="signal-match-side">
       <div class="signal-team-codes">${crest(m.h.code,m.h.cls)}${crest(m.a.code,m.a.cls)}</div>
       <b>${m.h.name} — ${m.a.name}</b>
       <small>${m.league} · ${topOutcome(m)[0]} · ${topOutcome(m)[1]}%</small>
     </div>
     <div class="signal-match-list">
       ${selected.map(s=>`<div class="signal-match-line ${s.kind}">
         <div><span>${signalLabel(s)}</span><p>${s.reason}</p></div>
         <strong>${s.type==="Value"?"+"+s.score+"%":s.type==="Forma"?"+"+s.score:s.score+"%"}</strong>
       </div>`).join("")}
     </div>
   </button>`;
 }).join(""):`<div class="empty-note">Nessun segnale rilevante con questi filtri.</div>`;
}
const PERF={total:120,accuracy:67,avgConfidence:76,markets:[["1X2",52,68],["Under/Over",38,66],["Gol/No Gol",30,63]],signals:[["Confidence",44,73],["Value",31,65],["Forma",37,70]]};
function more(){
 document.querySelector("#main").innerHTML=`<div class="page v14-more"><div class="eyebrow">SPACE16154</div><h1>ALTRO</h1><p class="subtitle">Partite da seguire, preferiti e trasparenza del modello.</p>
 <button class="more-row2 v14-more-live" data-route="live"><b><i></i> Live</b><span>Risultati, eventi e Match Center ›</span></button>
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
function v19AnalysisHome(){document.querySelector("#main").innerHTML=`<div class="page v19-home"><header><h1>ANALYSIS</h1><p>INTELLIGENCE CENTER</p></header><div class="v19-leagues">${V19L.map(l=>`<button data-v19l="${l[0]}">${v19Logo(l[1])}<b>${l[0]}</b></button>`).join("")}</div></div>`;bind();document.querySelectorAll("[data-v19l]").forEach(b=>b.onclick=()=>v19League(b.dataset.v19l))}

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
function v19League(n){
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
 document.querySelector("[data-v19home]").onclick=v19AnalysisHome;
 document.querySelectorAll("[data-v19t]").forEach(b=>b.onclick=()=>v19Team(b.dataset.v19t,b.dataset.v19league));
}
function v19Team(id,l){
 let t=(V19T[l]||[]).find(x=>x[0]===id); if(!t)return v19League(l);
 let vals=V19M[id]||[78,72,76,64,74,70],ms=Object.values(V14_MACRO_META),
     trend=[t[9]-6,t[9]-4,t[9]-5,t[9]-2,t[9]],
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

   <section class="v19-card v20-overview">
     <div class="v19-chead"><b>PANORAMICA MODELLO</b></div>
     <div class="v19-macros v20-macros">${ms.map((m,i)=>`<div class="v19-macro v20-macro">
       <span class="v20-free-icon">${m.icon}</span>
       <div><b>${m.title}</b><small>${m.desc}</small><em class="${v14Band(vals[i])}"><i style="width:${vals[i]}%"></i></em></div>
       <strong>${vals[i]}</strong>
     </div>`).join("")}</div>
     <div class="v20-form-block"><div><b>FORMA RECENTE</b><small>ULTIME 5</small></div><div class="v19-recent v20-recent">${v19Form(t.slice(4,9))}</div></div>
   </section>

   <section class="v19-card v20-trend-card">
     <div class="v19-chead"><b>TREND DEL RATING</b><span class="up">+${trend[4]-trend[0]}</span></div>
     <div class="v20-chart-wrap">${v20TrendChart(trend)}</div>
   </section>

   <section class="v19-card v20-summary-card">
     <div class="v19-chead"><b>INTELLIGENCE SUMMARY</b></div>
     ${v20SummaryText(ms,rank)}
   </section>

   <section class="v19-card v19-next">
     <div class="v19-chead"><b>PROSSIMA PARTITA</b></div>
     <div class="match"><span>${crest(t[1],"")}<b>${t[2]}</b></span><em>VS<small>20:45</small></em><span>${crest("ROM","")}<b>Roma</b></span></div>
     <button data-v19match>ANALIZZA MATCH ›</button>
   </section>
 </div>`;
 bind();
 document.querySelector("[data-v19back]").onclick=()=>v19League(l);
 document.querySelector("[data-v19match]").onclick=()=>route("match","milan-roma");
}

function route(n,id){
 const navState=n==="match"?"matches":n==="team"?"analysis":n==="performance"||n==="confidence"||n==="live"||n==="favorites"||n==="live-match"?"more":n;
 document.body.innerHTML=shell(navState);
 if(n==="dashboard")dashboard();
 else if(n==="matches")matches();
 else if(n==="analysis")v19AnalysisHome();
 else if(n==="signals")signalsPage();
 else if(n==="more")more();
 else if(n==="match")matchDetail(id);
 else if(n==="team")teamProfile(id);
 else if(n==="performance")performance();
 else if(n==="confidence")confidencePage();
 else if(n==="live")livePage();
 else if(n==="favorites")favoritesPage();
 else if(n==="live-match")liveMatch(id);
 else dashboard();
 scrollTo(0,0);
}
route("dashboard");
if("serviceWorker"in navigator)window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js?v=7.7.0-ui-test-v24",{updateViaCache:"none"}).catch(()=>{}));

/* SPACE16154 V13 MATCHES */
(()=>{
const leagues=[["serie-a","Serie A","A"],["premier","Premier League","PL"],["laliga","La Liga","LL"],["bundesliga","Bundesliga","BL"],["ligue1","Ligue 1","L1"]];
const games={
"serie-a":[["MIL","Milan","18:00","Roma","ROM","milan-roma"],["INT","Inter","20:45","Napoli","NAP"]],
"premier":[["ARS","Arsenal","18:30","Chelsea","CHE","arsenal-chelsea"],["MCI","Man City","21:00","Liverpool","LIV"]],
"laliga":[["BAR","Barcelona","20:00","Sevilla","SEV","barcelona-sevilla"],["RMA","Real Madrid","22:00","Valencia","VAL"]],
"bundesliga":[["BAY","Bayern","20:30","Leverkusen","LEV","bayern-leverkusen"],["BVB","Dortmund","21:00","Leipzig","RBL"]],
"ligue1":[["PSG","PSG","21:00","Lyon","LYO","psg-lyon"],["MON","Monaco","19:00","Marseille","OM"]]};
const months=["GEN","FEB","MAR","APR","MAG","GIU","LUG","AGO","SET","OTT","NOV","DIC"];
let mo=7,day=11,active=null;
const cal=()=>`<div class="m13-datepair"><button class="m13-datebtn" data-picker="month"><small>MESE</small><b>${months[mo]}</b></button><button class="m13-datebtn" data-picker="day"><small>GIORNO</small><b>${day}</b></button></div>`;
const logo=(x)=>`<span class="m13-league-logo">${x}</span>`;
const shield=(x,c="")=>`<span class="m13-shield ${c}"><b>${x}</b></span>`;
function home(){return `<section class="m13-page"><div class="m13-titlebar"><h1 class="v23-matches-title">MATCHES</h1>${cal()}</div><div class="m13-leagues">${leagues.map(l=>`<button class="m13-league" data-league="${l[0]}">${logo(l[2])}<span>${l[1]}</span></button>`).join("")}</div></section>`}
function view(l){return `<section class="m13-page v23-matches-league">
  <div class="v23-cal-top">${cal()}</div>
  <div class="m13-leaguehead v23-leaguehead">
    <button class="m13-back" data-back>←</button>
    <div class="m13-leagueidentity">${logo(l[2])}<h1>${l[1]}</h1></div>
  </div>
  <div class="m13-fixtures v23-league-cards">
    ${(games[l[0]]||[]).map((r,i)=>`<article class="v23-match-card">
      <div class="v23-time">${r[2]}</div>
      <div class="v23-match-row">
        <div class="v23-team home">${shield(r[0])}<b>${r[1]}</b></div>
        <button class="v23-analysis" data-analysis="${r[5]||""}">ANALISI</button>
        <div class="v23-team away"><b>${r[3]}</b>${shield(r[4],"away")}</div>
      </div>
    </article>`).join("")}
  </div>
</section>`}
function picker(type){let vals=type==="month"?months:Array.from({length:31},(_,i)=>String(i+1)),cur=type==="month"?mo:day-1;return `<div class="m13-sheetback"><div class="m13-sheet"><div class="m13-sheethead"><b>${type==="month"?"Seleziona mese":"Seleziona giorno"}</b><button data-close>×</button></div><div class="m13-scroll">${vals.map((v,i)=>`<button class="${i===cur?"active":""}" data-pick="${type}" data-i="${i}">${v}</button>`).join("")}</div></div></div>`}
function bind(root){
 root.querySelectorAll("[data-league]").forEach(b=>b.onclick=()=>{active=b.dataset.league;render(root)});
 root.querySelector("[data-back]")?.addEventListener("click",()=>{active=null;render(root)});
 root.querySelectorAll("[data-picker]").forEach(b=>b.onclick=()=>{root.insertAdjacentHTML("beforeend",picker(b.dataset.picker));bindPicker(root)});
 root.querySelectorAll("[data-analysis]").forEach(b=>b.onclick=()=>{if(b.dataset.analysis)route("match",b.dataset.analysis)});
}
function bindPicker(root){
 root.querySelector("[data-close]")?.addEventListener("click",()=>root.querySelector(".m13-sheetback")?.remove());
 root.querySelectorAll("[data-pick]").forEach(b=>b.onclick=()=>{if(b.dataset.pick==="month")mo=+b.dataset.i;else day=+b.dataset.i+1;root.querySelector(".m13-sheetback")?.remove();render(root)});
}
function render(root){root.innerHTML=active?view(leagues.find(l=>l[0]===active)):home();bind(root)}
function mount(){let els=[...document.querySelectorAll("main,.page,.screen,section,#app")],root=els.find(e=>/Scegli un campionato|PARTITE DEL GIORNO/i.test(e.textContent||""));if(!root||root.dataset.m13)return;root.dataset.m13="1";render(root)}
new MutationObserver(mount).observe(document.documentElement,{childList:true,subtree:true});setTimeout(mount,350);
})();
