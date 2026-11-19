(function(){
if(typeof capture!=='function'||typeof panelOwn!=='function'||typeof tierOf!=='function')return;
const HAVEM=typeof arrive==='function'&&typeof findRoute==='function'&&typeof ARMIES!=='undefined';
const CSET=new Set(),COW=new Map(),CUN=new Array(NEU+1).fill(0);let CPOL=1,CADM=0,DECOL=false,CMK=[];
const cq=(v,a,b)=>v<a?a:v>b?b:v;
const say=t=>{msg=t;mt=Date.now()+7000;hud();};
const POLN=["🟢 yumshoq","🟡 o'rtacha","🔴 shafqatsiz"];
function mark(c){CSET.add(c);COW.set(c,co[c]);}
function clusterOf(c){const o=co[c],out=[],seen=new Set([c]),q=[c];for(let h=0;h<q.length;h++){const k=q[h];out.push(k);const x=k%W,y=(k/W)|0;
  for(const m of[x>0?k-1:-1,x<W-1?k+1:-1,y>0?k-W:-1,y<H-1?k+W:-1])if(m>=0&&!seen.has(m)&&CSET.has(m)&&co[m]===o){seen.add(m);q.push(m);}}return out;}
function clustersOf(o){const seen=new Set(),res=[];for(const c of CSET){if(co[c]!==o||seen.has(c))continue;const cl=clusterOf(c);cl.forEach(k=>seen.add(k));res.push(cl);}return res;}
function initColonies(){CSET.clear();COW.clear();if(E.y<1450)return;
 for(let o=0;o<NEU;o++){const cp=CAPC[o];if(cp<0||co[cp]!==o)continue;const seen=new Uint8Array(W*H),q=[cp];seen[cp]=1;
  for(let h=0;h<q.length;h++){const k=q[h],x=k%W,y=(k/W)|0;for(const m of[x>0?k-1:-1,x<W-1?k+1:-1,y>0?k-W:-1,y<H-1?k+W:-1])if(m>=0&&!seen[m]&&co[m]===o){seen[m]=1;q.push(m);}}
  for(let c=0;c<co.length;c++)if(co[c]===o&&!seen[c])mark(c);}
 for(let o=0;o<NEU;o++)CUN[o]=5+((Math.random()*12)|0);}
function wrapCap(orig,ti){return function(){const A=arguments,a=A[0],d=A[1],t=A[ti];
 const tx=t%W,ty=(t/W)|0,x0=Math.max(0,tx-26),y0=Math.max(0,ty-26),x1=Math.min(W-1,tx+26),y1=Math.min(H-1,ty+26),bw=x1-x0+1,pre=new Uint8Array(bw*(y1-y0+1));
 for(let y=y0;y<=y1;y++)for(let x=x0;x<=x1;x++)pre[(y-y0)*bw+(x-x0)]=co[y*W+x];
 const n=orig.apply(null,A);
 if(n&&d===NEU&&a<NEU)for(let y=y0;y<=y1;y++)for(let x=x0;x<=x1;x++){const c=y*W+x;if(pre[(y-y0)*bw+(x-x0)]===NEU&&co[c]===a)mark(c);}
 return n;};}
capture=wrapCap(capture,2);
if(typeof capturePiece==='function')capturePiece=wrapCap(capturePiece,3);
initColonies();
function refreshMarks(){CMK=[];for(let o=0;o<NEU;o++)for(const cl of clustersOf(o)){if(cl.length<2)continue;let sx=0,sy=0;for(const k of cl){sx+=k%W;sy+=(k/W)|0;}sx/=cl.length;sy/=cl.length;
  let b=cl[0],bd=1e9;for(const k of cl){const d=(k%W-sx)**2+(((k/W)|0)-sy)**2;if(d<bd){bd=d;b=k;}}CMK.push({o,x:b%W,y:(b/W)|0,n:cl.length});}}
function colRevolt(o){const cls=clustersOf(o);if(!cls.length)return;cls.sort((a,b)=>b.length-a.length);const cl=cls[Math.floor(Math.random()*Math.min(cls.length,3))],nm=N[K[o]][0];
 const apply=()=>{for(const c of cl){co[c]=NEU;CSET.delete(c);COW.delete(c);}CUN[o]=cq(CUN[o]-35,0,100);dirty=true;paint();dirty=false;refreshMarks();};
 if(o===me&&typeof dpCard==='function'){dpCard("🏴 Koloniyada qo'zg'olon!",cl.length+" katakli koloniyada mustaqillik uchun qo'zg'olon boshlandi. Norozilik "+Math.round(CUN[o])+"%.",[
  ["🪖 Bostirish (qo'shin −10%, obro' −4)",()=>{T[me]*=.9;if(typeof REP!=='undefined')REP=cq(REP-4,0,100);CUN[me]=cq(CUN[me]-15,0,100);}],
  ["🕊 Imtiyoz berish (−100💰, norozilik −25)",()=>{if(gold>=100){gold-=100;CUN[me]=cq(CUN[me]-25,0,100);}else apply();}],
  ["🏳 Mustaqillik berish (obro' +8)",()=>{apply();if(typeof REP!=='undefined')REP=cq(REP+8,0,100);}],
  ["Befarq qolish",()=>{apply();}]]);}
 else{apply();say("🏴 "+nm+" mustamlakasida qo'zg'olon: "+cl.length+" katak mustaqil bo'ldi");}}
function aiColonize(i){const fb=FB[i];if(fb<0)return;const bx=fb%W,by=(fb/W)|0,R=10+3*tierOf(i);let best=-1,bd=1e9;
 for(let dy=-R;dy<=R;dy++)for(let dx=-R;dx<=R;dx++){const nx=bx+dx,ny=by+dy;if(nx<0||ny<0||nx>=W||ny>=H)continue;const c=ny*W+nx;if(co[c]!==NEU)continue;const d=dx*dx+dy*dy;if(d<bd){bd=d;best=c;}}
 if(best<0)return;capture(i,NEU,best,3+((Math.random()*3)|0));}
function colTick(){
 for(const c of [...CSET])if(co[c]===SEA||co[c]!==COW.get(c)){CSET.delete(c);COW.delete(c);}
 const nc=new Array(NEU).fill(0);for(const c of CSET){const o=co[c];if(o<NEU)nc[o]++;}
 const yr=E.y+Math.floor(months/12),em=yr<1750?.6:yr<1850?1:yr<1914?1.2:yr<1946?1.5:2.2;
 let any=false;
 for(let o=0;o<NEU;o++){const n=nc[o];if(!n){CUN[o]=Math.max(0,CUN[o]-.5);continue;}any=true;
  const pol=o===me?CPOL:1,pm=[.5,1,1.6][pol],am=o===me?CADM:0,tpc=T[o]/Math.max(1,n),relief=.5*Math.min(1,tpc/8);
  let inc=(.3+.06*Math.sqrt(n))*pm*em*(1-.2*am)-relief;if(pol===0&&o===me)inc-=.15;
  CUN[o]=cq(CUN[o]+inc,0,100);
  if(o===me){const mm=1+.25*tierOf(o),ym=[.6,1,1.5][pol];gold+=n*.06*mm*ym;silv+=n*.02*mm*ym;oil+=n*.01*mm*ym;T[o]=Math.max(5,T[o]-n*.01);}
  else T[o]+=n*.02;
  if(CUN[o]>=70&&Math.random()<(CUN[o]>=90?1:.12))colRevolt(o);}
 if(yr>=1946&&!DECOL&&any){DECOL=true;say("🏴 Dekolonizatsiya to'lqini: mustamlakalarda mustaqillik talabi kuchaydi");}
 if(typeof wTier==='function'&&typeof FB!=='undefined'&&months%3===0){const wt=wTier();if(wt>=2&&wt<=6)for(let i=0;i<NEU;i++){if(i===me||cnt[i]<40||FB[i]<0||Math.random()>.1+.02*wt)continue;aiColonize(i);}}
 if(dirty){paint();dirty=false;}refreshMarks();}
const _tkC=tick;tick=function(){_tkC();if(me<0||over)return;colTick();hud();draw();};
function colExpedition(cell,route,cost){if(gold<cost){note('Oltin yetmaydi');return;}if(T[me]<60){note("Qo'shin kam (kamida 60)");return;}if(ARMIES.length>=8){note("Ko'pi bilan 8 ta qo'shin yuborish mumkin");return;}
 gold-=cost;T[me]-=20;const sea=route.some(k=>co[k]===SEA);ARMIES.push({n:20,route,p:0,sea,colony:true});tgt=null;pn.style.display='none';
 note("🏴 Koloniya ekspeditsiyasi yo'lga chiqdi: "+route.length+" katak");if(typeof sfx==='function')sfx('horn');draw();hud();}
function colArrive(a){const i=ARMIES.indexOf(a);if(i>=0)ARMIES.splice(i,1);const t=a.route[a.route.length-1];
 if(co[t]!==NEU){T[me]+=a.n;note("Hudud egasi o'zgargan: ko'chmanchilar qaytdi");draw();return;}
 const tier=tierOf(me),p=cq(.5+.06*tier+(typeof qOf==='function'?(qOf(me)-1)*.3:0),.25,.92);
 if(Math.random()<p){const n=capture(me,NEU,t,3+Math.min(3,tier>>1));if(dirty){paint();dirty=false;}refreshMarks();say("🏴 Koloniya tashkil etildi: "+n+" katak"+(a.sea?" (dengiz ortida)":""));if(typeof sfx==='function')sfx('win');}
 else{T[me]+=Math.round(a.n*.3);say("❌ Ekspeditsiya mahalliy aholi qarshiligida barbod bo'ldi");if(typeof sfx==='function')sfx('lose');}
 draw();hud();}
if(HAVEM){const _arC=arrive;arrive=function(a){if(!a.colony){_arC(a);return;}colArrive(a);};}
function annexColony(d){if(gold<150){note('Oltin yetmaydi');return;}gold-=150;let n=0;for(let c=0;c<co.length;c++)if(co[c]===d){co[c]=me;mark(c);n++;}
 T[me]+=Math.round(T[d]*.3);T[d]=0;CUN[me]=cq(CUN[me]+15,0,100);
 if(typeof REP!=='undefined')REP=cq(REP-10,0,100);if(typeof REL!=='undefined')for(let i=0;i<NEU;i++)if(i!==me)REL[i]=cq(REL[i]-8,-100,100);
 if(typeof VAS!=='undefined')VAS[d]=0;if(typeof ALY!=='undefined')ALY[d]=-1;
 tgt=null;pn.style.display='none';dirty=true;paint();dirty=false;refreshMarks();say("🏴 "+N[K[d]][0]+" mustamlakaga aylantirildi: "+n+" katak");if(typeof sfx==='function')sfx('win');draw();hud();}
function colConfirm(d){const run=()=>annexColony(d);
 if(typeof dpCard==='function')dpCard("🏴 Mustamlakaga aylantirish",N[K[d]][0]+" butun hududi sizning koloniyangiz bo'ladi (150💰). Norozilik oshadi, obro'ingiz va dunyo munosabati tushadi.",[["🏴 Ha, mustamlaka qilish",run],["Bekor qilish",null]]);else run();}
function colPanel(){const cls=clustersOf(me);let n=0;cls.forEach(c=>n+=c.length);
 showPanel("🏴 Koloniyalar: "+cls.length+" ta ("+n+" katak) | ⚡ norozilik "+Math.round(CUN[me])+"% | siyosat "+POLN[CPOL]+" | ma'muriyat ★"+CADM);
 pbtn("⚙ Siyosat: "+POLN[CPOL],()=>{CPOL=(CPOL+1)%3;colPanel();hud();});
 if(CADM<3){const g=[100,200,350][CADM];pbtn("🏛 Ma'muriyat ★"+(CADM+1)+" ("+g+"💰)",()=>{if(gold<g){note('Oltin yetmaydi');return;}gold-=g;CADM++;colPanel();hud();});}
 pbtn("🪖 Garnizon +20 askar",()=>{if(T[me]<50){note("Qo'shin kam");return;}T[me]-=20;CUN[me]=cq(CUN[me]-6,0,100);colPanel();hud();});
 pbtn('✖',()=>{pn.style.display='none';});}
const _poC=panelOwn;panelOwn=function(c){_poC(c);if(me<0)return;let n=0;for(const k of CSET)if(co[k]===me){n++;if(n>0)break;}if(!n)return;
 const ex=pn.lastChild,add=(t,f)=>{pbtn(t,f);pn.insertBefore(pn.lastChild,ex);};
 if(CSET.has(c)&&co[c]===me&&pn.firstChild)pn.firstChild.textContent+=" | 🏴 Koloniya "+clusterOf(c).length+" katak | ⚡ "+Math.round(CUN[me])+"%";
 add('🏴 Koloniyalar',()=>colPanel());
 if(CSET.has(c)&&co[c]===me)add('🏳 Mustaqillik berish (obro\u2019 +8)',()=>{const cl=clusterOf(c);for(const k of cl){co[k]=NEU;CSET.delete(k);COW.delete(k);}CUN[me]=cq(CUN[me]-10,0,100);if(typeof REP!=='undefined')REP=cq(REP+8,0,100);dirty=true;paint();dirty=false;refreshMarks();pn.style.display='none';say('🏳 '+cl.length+' katak mustaqil bo\u2018ldi');draw();hud();});};
const _peC=panelEnemy;panelEnemy=function(){_peC();if(me<0||!tgt||tgt.fleet||tgt.d===undefined||tgt.c==null||!pn.firstChild)return;const d=tgt.d,ex=pn.lastChild,add=(t,f)=>{pbtn(t,f);pn.insertBefore(pn.lastChild,ex);};
 if(d===NEU&&HAVEM){const route=findRoute(tgt.c);if(route){const cost=Math.round(80*(1+.15*tierOf(me))),cell=tgt.c;add("🏴 Koloniya ekspeditsiyasi ("+cost+"💰, 20 ko'chmanchi)",()=>colExpedition(cell,route,cost));}else add("🏴 Ekspeditsiya: yo'l yo'q (dengiz uchun kema kerak)",()=>{});}
 else if(d<NEU){const ratio=typeof dpRat==='function'?dpRat(d):T[me]/Math.max(1,T[d]),sub=(typeof VAS!=='undefined'&&VAS[d])||capLost[d];if(sub&&ratio>=1.5&&cnt[d]>0)add("🏴 Mustamlakaga aylantirish (150💰)",()=>colConfirm(d));}};
const _drC=draw;const HPC=document.createElement('canvas');HPC.width=HPC.height=8;{const g=HPC.getContext('2d');g.strokeStyle='rgba(255,255,255,.7)';g.lineWidth=1.3;g.beginPath();g.moveTo(0,8);g.lineTo(8,0);g.moveTo(-2,2);g.lineTo(2,-2);g.moveTo(6,10);g.lineTo(10,6);g.stroke();}
let HPAT=null;
draw=function(){_drC();const c=c0*sc;if(me<0||c<1.1||!CSET.size)return;if(!HPAT)HPAT=cx.createPattern(HPC,'repeat');
 cx.save();cx.fillStyle=HPAT;cx.globalAlpha=.5;for(const k of ((window.INTER||window.PERF>=1)?[]:CSET)){const x=ox+(k%W)*c,y=oy+((k/W)|0)*c;if(x<-c||y<-c||x>innerWidth||y>innerHeight)continue;cx.fillRect(x,y,c+.5,c+.5);}cx.restore();
 if(c>=1.4&&typeof flag==='function')for(const m of CMK){const x=ox+(m.x+.5)*c,y=oy+(m.y+.5)*c;if(x<-30||y<-30||x>innerWidth+30||y>innerHeight+30)continue;
  flag(cx,x,y,m.o,Math.max(10,c*1.4),Math.max(7,c*.95));
  if(m.o===me&&c>=2.5){const u=CUN[me]/100;cx.fillStyle='#000a';cx.fillRect(x-12,y+3,24,5);cx.fillStyle=u<.4?'#3c3':u<.7?'#fc3':'#e33';cx.fillRect(x-11,y+4,22*u,3);}}};
const _huC=hud;hud=function(){_huC();if(me<0||Date.now()<mt)return;let n=0;for(const k of CSET)if(co[k]===me)n++;if(n)info.textContent+=' | 🏴'+n+' ⚡'+Math.round(CUN[me])+'%';};
const _inC=intro;intro=function(i){CPOL=1;CADM=0;DECOL=false;_inC(i);};
const _svC=save;save=function(){_svC();try{const k='d1775y'+E.y,sv=JSON.parse(localStorage.getItem(k));if(!sv)return;sv.cl={s:[...CSET],pol:CPOL,adm:CADM,un:CUN,dc:DECOL};localStorage.setItem(k,JSON.stringify(sv));}catch(e){}};
const _ldC=load;load=function(sv){_ldC(sv);if(sv.cl){CSET.clear();COW.clear();sv.cl.s.forEach(c=>{CSET.add(c);COW.set(c,co[c]);});CPOL=sv.cl.pol||1;CADM=sv.cl.adm||0;DECOL=!!sv.cl.dc;if(sv.cl.un)sv.cl.un.forEach((v,i)=>CUN[i]=v);}else initColonies();refreshMarks();};
refreshMarks();draw();
})();
