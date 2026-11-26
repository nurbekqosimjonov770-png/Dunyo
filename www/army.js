(function(){
if(typeof findRoute!=='function'||typeof autoWarX!=='function'||typeof effA!=='function'||typeof allied!=='function'||typeof NM==='undefined')return;
if(E.y===1400&&NM.I&&NM.I[1].indexOf("Mirzo Ulug'bek")<0)NM.I[1].push("Mirzo Ulug'bek");
const ARM=[],ZR=5;let ARMID=1,PICK=null,PARM=null,ABOX=null,PBAR=null;
const hr=s=>{let h=0;for(let i=0;i<s.length;i++)h=(h*31+s.charCodeAt(i))|0;return((h>>>0)%1000)/1000;};
const say=t=>{msg=t;mt=Date.now()+7000;hud();};
const aSp=()=>typeof armySp==='function'?armySp():2.6;
const cmdList=()=>{const nm=NM[K[me]],L=[[nm[0],1.15,true]];nm[1].forEach(g=>L.push([g,+(.95+.3*hr(g)).toFixed(2),false]));return L;};
const armSum=()=>ARM.reduce((s,a)=>s+a.n,0),reserve=()=>Math.max(0,Math.floor(T[me]-armSum())),busy=nm=>ARM.some(a=>a.cmd===nm),freeCmds=()=>cmdList().filter(c=>!busy(c[0]));
function place(c){if(c==null||c<0)return"poytaxt";const x=c%W,y=(c/W)|0,yr=E.y+Math.floor(months/12);let b=null,bd=36;
 if(typeof CITIES!=='undefined')for(const ct of CITIES){if(yr<ct[3])continue;const d=(ct[1]+180-x)**2+(TOP-ct[2]-y)**2;if(d<bd){bd=d;b=ct;}}
 if(b)return typeof cityNm==='function'?cityNm(b,yr):b[0];return(co[c]===NEU?"ochiq yer":co[c]===me?"o'z hudud":"hudud")+" ("+x+","+y+")";}
const statusOf=a=>a.st==="march"?(a.mode==="atk"?"⚔ hujumga yo'lda":"🛡 "+place(a.route[a.route.length-1])+" mudofaasiga yo'lda"):a.st==="guard"?"🛡 "+place(a.cell)+" mudofaasida":"poytaxtda kutmoqda";
function resume(){hud();draw();if(me>=0&&!over&&!(typeof inB!=='undefined'&&inB)&&!(typeof battling!=='undefined'&&battling)&&!PICK&&!PARM)start();}
function ac(title,body,opts){clearInterval(timer);
 if(!ABOX){ABOX=document.createElement('div');ABOX.style.cssText='position:fixed;inset:0;background:#000b;z-index:8;display:flex;align-items:center;justify-content:center;color:#fff';document.body.appendChild(ABOX);}
 ABOX.style.display='flex';ABOX.innerHTML='';const bx=document.createElement('div');bx.style.cssText='background:#10253a;border:2px solid #fc6;border-radius:12px;padding:14px;width:86%;max-width:480px;max-height:84%;overflow:auto;text-align:center';
 const h=document.createElement('div');h.style.cssText='font-size:17px;font-weight:bold;margin-bottom:8px';h.textContent=title;
 const p=document.createElement('div');p.style.cssText='font-size:14px;margin-bottom:10px;line-height:1.45;white-space:pre-line;text-align:left';p.textContent=body;bx.appendChild(h);bx.appendChild(p);
 opts.forEach(o=>{const b=document.createElement('button');b.textContent=o[0];b.style.cssText='display:block;margin:6px auto;padding:10px 12px;font-size:15px;border:0;border-radius:8px;width:94%';
  b.onclick=()=>{ABOX.style.display='none';try{if(o[1])o[1]();}catch(e){}if(ABOX.style.display==='none')resume();};bx.appendChild(b);});
 ABOX.appendChild(bx);}
function manager(){const cp=typeof CAPC!=='undefined'?CAPC[me]:-1,lines=["👑 "+NM[K[me]][0]+": zaxira "+reserve()+" askar ("+place(cp)+"da, hukmdor qo'l ostida)"];
 ARM.forEach(a=>lines.push("🎖 "+a.cmd+" (★"+a.sk.toFixed(2)+"): "+Math.round(a.n)+" askar, "+statusOf(a)));
 const opts=ARM.map(a=>["🎖 "+a.cmd+" · "+Math.round(a.n)+" · "+statusOf(a),()=>armyMenu(a)]);
 opts.push(["➕ Yangi qo'shin tayinlash",()=>newArmy(null)]);opts.push(["Yopish",null]);ac("🎖 Qo'shinlar va sarkardalar",lines.join("\n"),opts);}
function armyMenu(a){ac("🎖 "+a.cmd,"★"+a.sk.toFixed(2)+" | "+Math.round(a.n)+" askar | "+statusOf(a),[
 ["📍 Boshqa joyga yuborish",()=>startPick({cmd:a.cmd,sk:a.sk,n:a.n,arm:a})],
 ["➕ +50 askar (zaxiradan)",()=>{const k=Math.min(50,reserve());if(k<=0)say("Zaxira bo'sh");else{a.n+=k;say("🎖 "+a.cmd+" qo'shiniga +"+k+" askar");}manager();}],
 ["➖ Tarqatish (zaxiraga qaytarish)",()=>{const i=ARM.indexOf(a);if(i>=0)ARM.splice(i,1);say("🎖 "+a.cmd+" qo'shini zaxiraga qaytdi");manager();}],
 ["Orqaga",()=>manager()]]);}
function newArmy(fT){const fc=freeCmds();if(!fc.length){say("Barcha sarkardalar band");return;}if(reserve()<20){say("Zaxirada askar kam (kamida 20)");return;}
 ac("➕ Sarkarda tanlang","Zaxira: "+reserve()+" askar. Qo'shinni kim boshqaradi?",fc.map(c=>[(c[2]?"👑 ":"🎖 ")+c[0]+" (★"+c[1].toFixed(2)+")",()=>sizeStep(c,fT)]).concat([["Orqaga",()=>fT?null:manager()]]));}
function sizeStep(c,fT){const r=reserve();let sz=[50,100,200,400].filter(s=>s<=r);const h=Math.floor(r/2);if(h>=20&&!sz.includes(h))sz.push(h);if(r>=20&&!sz.includes(r))sz.push(r);
 if(!sz.length){say("Zaxirada askar kam");return;}sz.sort((a,b)=>a-b);
 ac("🪖 "+c[0]+": qo'shin hajmi","Zaxira: "+r+" askar.",sz.map(s=>[s+" askar",()=>{const sp={cmd:c[0],sk:c[1],n:s,arm:null};if(fT)atkTo(sp,fT);else startPick(sp);}]).concat([["Orqaga",()=>newArmy(fT)]]));}
function pickBar(show){if(!PBAR){PBAR=document.createElement('div');PBAR.style.cssText='position:fixed;top:60px;left:8px;right:8px;z-index:6;background:#000d;border:2px solid #fc6;border-radius:10px;padding:8px;color:#fff;font-size:14px;text-align:center;display:none';document.body.appendChild(PBAR);}
 if(!show){PBAR.style.display='none';return;}PBAR.innerHTML='';const t=document.createElement('div');t.textContent="📍 "+PICK.cmd+" ("+Math.round(PICK.n)+" askar): qayerga yuboramiz? Xaritada joyni bosing (o'z yoki ochiq hudud = mudofaa, dushman hududi = hujum)";
 const b=document.createElement('button');b.textContent='✖ Bekor qilish';b.style.cssText='margin-top:6px;padding:8px 14px;font-size:15px;border:0;border-radius:8px';b.onclick=endPick;PBAR.appendChild(t);PBAR.appendChild(b);PBAR.style.display='block';}
function startPick(sp){PICK=sp;pn.style.display='none';tgt=null;pickBar(true);draw();}
function endPick(){PICK=null;pickBar(false);pn.style.display='none';resume();}
function armRoute(t){if(co[t]===SEA)return null;if(co[t]===me)return[t];
 for(const sea of(ships>0?[false,true]:[false])){const prev=new Int32Array(W*H).fill(-2);prev[t]=-1;const q=[t];let f=-1;
  for(let h=0;h<q.length&&f<0;h++){const c=q[h],x=c%W,y=(c/W)|0;for(let dy=-1;dy<=1&&f<0;dy++)for(let dx=-1;dx<=1;dx++){if(!dx&&!dy)continue;const nx=x+dx,ny=y+dy;if(nx<0||ny<0||nx>=W||ny>=H)continue;const n=ny*W+nx;if(prev[n]!==-2)continue;if(co[n]===SEA&&!sea)continue;prev[n]=c;if(co[n]===me){f=n;break;}q.push(n);}}
  if(f>=0){const p=[];for(let c=f;c!==-1;c=prev[c])p.push(c);return p;}}
 return null;}
function dispatchArmy(sp,mode,t,route,sea,pc){let a=sp.arm;
 if(a){a.route=route;a.p=0;a.st="march";a.mode=mode;a.sea=sea;a.piece=mode==="atk"?pc:null;a.cell=null;}
 else{if(reserve()<sp.n){note("Zaxira yetmaydi");pn.style.display="none";resume();return;}
  a={id:ARMID++,cmd:sp.cmd,sk:sp.sk,n:sp.n,st:"march",route,p:0,mode,sea,piece:mode==="atk"?pc:null,cell:null};ARM.push(a);}
 pn.style.display="none";tgt=null;say("🎖 "+a.cmd+" "+Math.round(a.n)+" askar bilan "+(mode==="atk"?"hujumga":"mudofaaga")+" yo'lga chiqdi ("+route.length+" katak)");
 if(typeof sfx==='function')sfx('horn');resume();draw();}
function atkTo(sp,fT){const route=findRoute(fT.c);if(!route){note("Yo'l topilmadi (dengiz uchun kema kerak)");return;}
 dispatchArmy(sp,'atk',fT.c,route,route.some(k=>co[k]===SEA),fT.piece!=null?fT.piece:(GR[fT.c]>=0?GR[fT.c]:null));}
function pickTap(px,py){const c=c0*sc,x=Math.floor((px-ox)/c),y=Math.floor((py-oy)/c);if(x<0||y<0||x>=W||y>=H)return;const t=y*W+x,o=co[t];
 if(o===SEA){note("Dengizni tanlab bo'lmaydi");return;}
 const hostile=o<NEU&&o!==me&&!allied(me,o);let route,mode;
 if(hostile){mode='atk';if(peace[o]>months){note("Tinchlik bor, hujum mumkin emas");return;}if(typeof peaceMode!=='undefined'&&peaceMode){note("Tinch rejim: faqat mahalliy hududlarga hujum");return;}route=findRoute(t);}
 else{mode='def';route=armRoute(t);}
 if(!route){note("Yo'l topilmadi (dengiz uchun kema kerak)");return;}
 const sea=route.some(k=>co[k]===SEA),pc=GR[t]>=0?GR[t]:null,sp=PICK;pickBar(false);PICK=null;
 showPanel((mode==='atk'?"⚔ Hujum: ":"🛡 Mudofaa: ")+sp.cmd+" ("+Math.round(sp.n)+" askar) → "+place(t)+" | "+route.length+" katak (~"+Math.round(route.length/aSp()/Math.max(1,speed))+" s)");
 pbtn("✅ Yuborish",()=>dispatchArmy(sp,mode,t,route,sea,pc));pbtn("📍 Boshqa joy",()=>startPick(sp));pbtn("✖ Bekor",()=>{pn.style.display='none';resume();});}
function sendDlg(){if(!tgt||tgt.d===undefined||tgt.c==null)return;const d=tgt.d,fT={c:tgt.c,piece:tgt.piece,d};
 if(d<NEU&&peace[d]>months){note("Tinchlik bor, hujum mumkin emas");return;}
 if(d<NEU&&allied(me,d)){note("Ittifoqchiga hujum qilib bo'lmaydi");return;}
 if(d<NEU&&typeof peaceMode!=='undefined'&&peaceMode){note("Tinch rejim: faqat mahalliy hududlarga hujum");return;}
 if(co[fT.c]!==d){note("Hudud egasi o'zgargan");return;}
 if(!findRoute(fT.c)){note("Yo'l topilmadi (dengiz uchun kema kerak)");return;}
 pn.style.display='none';const opts=[];
 ARM.filter(a=>a.st!=='march').forEach(a=>opts.push(["🎖 "+a.cmd+" · "+Math.round(a.n)+" askar ("+statusOf(a)+") → hujum",()=>atkTo({cmd:a.cmd,sk:a.sk,n:a.n,arm:a},fT)]));
 if(freeCmds().length&&reserve()>=20)opts.push(["➕ Yangi qo'shin tayinlash (zaxira "+reserve()+")",()=>newArmy(fT)]);
 opts.push(["Bekor qilish",null]);
 ac("⚔ Hujum: "+(d<NEU?N[K[d]][0]:"ochiq yer"),"Qaysi sarkarda qo'shin bilan hujum qiladi? Natija sarkarda mahorati va qo'shin soniga bog'liq. Zaxira: "+reserve()+" askar."+(ARM.length||freeCmds().length?"":"\nSarkarda yo'q."),opts);}
function apos(a){if(a.st==='march'){const L=a.route.length-1,i=Math.min(L,Math.floor(a.p)),j=Math.min(L,i+1),f=a.p-i,c1=a.route[i],c2=a.route[j];return[(c1%W)+.5+((c2%W)-(c1%W))*f,((c1/W)|0)+.5+(((c2/W)|0)-((c1/W)|0))*f];}
 if(a.st==='guard'&&a.cell!=null)return[(a.cell%W)+.5,((a.cell/W)|0)+.5];return null;}
function arrive2(a){const t=a.route[a.route.length-1],o=co[t];
 if(a.mode==='atk'){
  if(o===me||o===SEA||(o<NEU&&allied(me,o))){a.st='guard';a.cell=t;say("🎖 "+a.cmd+": nishon sizniki yoki ittifoqchiniki, qo'shin "+place(t)+"da mudofaaga tayyor");return;}
  if(o<NEU&&(peace[o]>months||(typeof peaceMode!=='undefined'&&peaceMode))){a.st='idle';a.cell=null;say("🎖 "+a.cmd+": tinchlik tufayli hujum bekor qilindi");return;}
  PARM=a;const d=o,Td=d===NEU?25+Math.random()*25:T[d]*.55,fort=d<NEU&&fortAt(t,d);clearInterval(timer);tgt=null;pn.style.display='none';
  startBattle({a:me,d,cell:t,commit:Math.round(a.n*a.sk),Td,fort,sea:a.sea,ships,piece:a.piece,arm:a});return;}
 a.st='guard';a.cell=t;say("🎖 "+a.cmd+" "+place(t)+" mudofaasiga yetib keldi ("+Math.round(a.n)+" askar)");if(typeof sfx==='function')sfx('win');}
setInterval(()=>{if(me<0||over||!speed||!ARM.length)return;
 if((typeof inB!=='undefined'&&inB)||(typeof battling!=='undefined'&&battling)||PARM)return;
 if(typeof DPB!=='undefined'&&DPB&&DPB.style.display!=='none')return;if(typeof DPO!=='undefined'&&DPO&&DPO.style.display!=='none')return;if(ABOX&&ABOX.style.display!=='none')return;
 const dt=.1*speed,sp=aSp();let arr=null,any=false;
 for(const a of ARM){if(a.st!=='march')continue;any=true;a.p+=sp*dt;if(a.p>=a.route.length-1){a.p=a.route.length-1;if(!arr)arr=a;}}
 if(arr)arrive2(arr);if(any)draw();},100);
function garr(n){let G=0,ss=0;const list=[];for(const a of ARM){if(a.st!=='guard'||a.cell==null)continue;if(Math.hypot((n%W)-(a.cell%W),((n/W)|0)-((a.cell/W)|0))<=ZR){G+=a.n*a.sk;ss+=a.n;list.push(a);}}return{G,sk:ss>0?G/ss:1,list};}
function lose(list,amt){const tot=list.reduce((s,a)=>s+a.n,0)||1;let real=0;for(const a of list){const l=Math.min(a.n*.6,amt*a.n/tot);a.n=Math.max(0,Math.round(a.n-l));real+=l;}
 T[me]=Math.max(5,T[me]-real);for(let i=ARM.length-1;i>=0;i--)if(ARM[i].n<8)ARM.splice(i,1);}
const _awx=autoWarX;autoWarX=function(a,d,n,cm,Td){
 if(me>=0&&a!==me&&(d===me||d===NEU)&&!allied(me,a)){const g=garr(n);
  if(g.list.length){g.list.sort((p,q)=>q.n-p.n);const nm=g.list[0].cmd,pl=place(n);
   const A=effA(a,cm,n)*(.75+Math.random()*.5),D=pw(g.G)*qOf(me)*g.sk*1.3*terr(n)*(.75+Math.random()*.5);
   if(A<D){T[a]=Math.max(1,T[a]-cm*.3);lose(g.list,cm*.12);say("🛡 "+nm+" "+pl+"ni himoya qildi: "+N[K[a]][0]+" hujumi qaytarildi");if(typeof sfx==='function')sfx('clash');return 0;}
   lose(g.list,cm*.25);Td+=g.G*1.5;say("⚠️ "+N[K[a]][0]+" "+pl+"dagi "+nm+" mudofaasini yorib o'tdi");}}
 return _awx(a,d,n,cm,Td);};
if(typeof aiOK==='function'){const _ok=aiOK;aiOK=function(o,q,n,c,Td){if(me>=0&&(q===me||q===NEU)&&!allied(me,o)){const g=garr(n);if(g.list.length)Td+=g.G*1.5;}return _ok(o,q,n,c,Td);};}
const _bdA=battleDone;battleDone=function(o,sa,sd,bonus){const r=_bdA(o,sa,sd,bonus);if(o.arm){const a=o.arm;a.n=Math.max(0,a.n-Math.round(r.lossA/a.sk));}return r;};
const _sbA=startBattle;startBattle=function(o){_sbA(o);if(o.arm&&typeof toast==='function')toast("🎖 "+o.arm.cmd+" (★"+o.arm.sk.toFixed(2)+") boshchiligida "+Math.round(o.arm.n)+" askar hujumda");};
const _abA=afterBattle;afterBattle=function(){const a=PARM;PARM=null;
 if(a){const t=a.route[a.route.length-1];
  if(a.n<8){const i=ARM.indexOf(a);if(i>=0)ARM.splice(i,1);msg="💀 "+a.cmd+" qo'shini yo'q bo'ldi (sarkarda omon qoldi)";mt=Date.now()+7000;}
  else if(co[t]===me){a.st='guard';a.cell=t;}else{a.st='idle';a.cell=null;}}
 _abA();};
const _lA=launch;launch=function(){if(tgt&&tgt.fleet){_lA();return;}sendDlg();};
function armyPanel(a){showPanel("🎖 "+a.cmd+" (★"+a.sk.toFixed(2)+") | "+Math.round(a.n)+" askar | "+statusOf(a));
 pbtn("📍 Boshqa joyga yuborish",()=>startPick({cmd:a.cmd,sk:a.sk,n:a.n,arm:a}));
 pbtn("➖ Tarqatish (zaxiraga)",()=>{const i=ARM.indexOf(a);if(i>=0)ARM.splice(i,1);pn.style.display='none';say("🎖 "+a.cmd+" qo'shini zaxiraga qaytdi");draw();});
 pbtn("🎖 Qo'shinlar",manager);pbtn('✖',()=>{pn.style.display='none';});}
const _tpA=tap;tap=function(px,py){if(PICK){pickTap(px,py);return;}
 if(me>=0&&!over){const c=c0*sc;for(const a of ARM){const p=apos(a);if(!p)continue;if(Math.hypot(px-(ox+p[0]*c),py-(oy+p[1]*c))<22){tgt=null;armyPanel(a);draw();return;}}}
 _tpA(px,py);};
const _peA=panelEnemy;panelEnemy=function(){_peA();if(!tgt||tgt.fleet||tgt.d===undefined||tgt.c==null)return;
 if(tgt.d<NEU&&allied(me,tgt.d))return;
 [...pn.children].forEach(el=>{if(el.tagName==='BUTTON'&&(/^(✅)?\d+%$/.test(el.textContent)||el.textContent.indexOf('Hujum')>=0))el.remove();});
 if(tgt.ok){const ex=pn.lastChild;pbtn("⚔ Qo'shin yuborish (sarkarda tayinlash)",sendDlg);pn.insertBefore(pn.lastChild,ex);}};
const _poA=panelOwn;panelOwn=function(c){_poA(c);const ex=pn.lastChild;pbtn("🎖 Qo'shinlar",manager);pn.insertBefore(pn.lastChild,ex);};
function drawArmy(c){if(me<0||!ARM.length)return;cx.textAlign='center';cx.textBaseline='middle';
 for(const a of ARM){const p=apos(a);if(!p)continue;const x=ox+p[0]*c,y=oy+p[1]*c;
  if(a.st==='march'){const L=a.route.length-1,lk=a.route[L];cx.strokeStyle=a.mode==='atk'?'#f84':'#6cf';cx.lineWidth=2;cx.setLineDash([5,5]);cx.beginPath();cx.moveTo(x,y);
   for(let k=Math.floor(a.p)+1;k<L;k+=2){const q=a.route[k];cx.lineTo(ox+((q%W)+.5)*c,oy+(((q/W)|0)+.5)*c);}cx.lineTo(ox+((lk%W)+.5)*c,oy+(((lk/W)|0)+.5)*c);cx.stroke();cx.setLineDash([]);}
  else if(c>=1.4){cx.strokeStyle='rgba(120,210,255,.6)';cx.lineWidth=1.5;cx.setLineDash([4,4]);cx.beginPath();cx.arc(x,y,ZR*c,0,6.3);cx.stroke();cx.setLineDash([]);}
  if(x<-40||y<-40||x>innerWidth+40||y>innerHeight+40)continue;
  const r=Math.max(10,Math.min(16,c*2.2)),atk=a.st==='march'&&a.mode==='atk';
  cx.beginPath();cx.arc(x,y,r,0,6.3);cx.fillStyle=COL[me];cx.fill();cx.lineWidth=2.5;cx.strokeStyle=atk?'#f84':'#6cf';cx.stroke();
  cx.font=(r*1.05)+'px sans-serif';cx.fillStyle='#fff';cx.fillText(atk?'⚔':'🛡',x,y);
  cx.font='bold '+(r*.72)+'px sans-serif';cx.lineWidth=3;cx.strokeStyle='#000b';cx.strokeText(fmt(a.n),x,y+r+8);cx.fillStyle='#fff';cx.fillText(fmt(a.n),x,y+r+8);
  if(c>=2.2){cx.font='bold '+Math.min(12,r*.75)+'px sans-serif';cx.strokeText(a.cmd,x,y-r-7);cx.fillStyle='#ffd';cx.fillText(a.cmd,x,y-r-7);}}}
const _dfA=drawFleets;drawFleets=function(c){_dfA(c);drawArmy(c);};
const _tkA=tick;tick=function(){if(me>=0&&ARM.length){const s=armSum();if(s>T[me]+1){const f=Math.max(0,T[me])/s;ARM.forEach(a=>{a.n=Math.floor(a.n*f);});for(let i=ARM.length-1;i>=0;i--)if(ARM[i].n<8)ARM.splice(i,1);}}_tkA();};
const _inA=intro;intro=function(i){ARM.length=0;ARMID=1;PICK=null;PARM=null;pickBar(false);_inA(i);};
const _svA=save;save=function(){_svA();try{const k='d1775y'+E.y,sv=JSON.parse(localStorage.getItem(k));if(!sv)return;sv.arm=ARM;localStorage.setItem(k,JSON.stringify(sv));}catch(e){}};
const _ldA=load;load=function(sv){_ldA(sv);ARM.length=0;(sv.arm||[]).forEach(a=>ARM.push(a));ARMID=1+Math.max(0,...ARM.map(a=>a.id||0));PICK=null;PARM=null;};
{const bb=document.createElement('button');bb.textContent='🎖';bb.onclick=()=>{if(me>=0&&!over)manager();};document.getElementById('bot').insertBefore(bb,document.getElementById('sp'));}
})();
