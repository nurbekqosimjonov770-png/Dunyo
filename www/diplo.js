const REL=new Array(NEU).fill(0),VAS=new Array(NEU).fill(0),MARR=new Array(NEU).fill(0);
let REP=70,DPO=null,DPSel=-1,DPM='',DPB=null;const DPQ=[];
const clp=(v,a,b)=>v<a?a:v>b?b:v;
const pwr=i=>Math.sqrt(Math.max(1,T[i]))*(typeof qOf==='function'?qOf(i):1)*(typeof ov==='function'?ov(i):1)*(1+cnt[i]/4000);
const dpRat=d=>pwr(me)/Math.max(.1,pwr(d));
const relCol=v=>v>=40?'#3c3':v>=10?'#9c3':v>-10?'#cc3':v>-40?'#e83':'#e33';
const relBar=v=>'<span style="display:inline-block;width:70px;height:8px;background:#444;border-radius:4px;vertical-align:middle"><span style="display:block;width:'+Math.round((v+100)/2)+'%;height:100%;background:'+relCol(v)+';border-radius:4px"></span></span>';
function dpCard(title,body,opts){DPQ.push([title,body,opts]);if(!DPB||DPB.style.display==='none')dpShow();}
function dpShow(){const it=DPQ.shift();
 if(!it){if(DPB)DPB.style.display='none';if(me>=0&&!over&&!(typeof inB!=='undefined'&&inB)&&!(typeof battling!=='undefined'&&battling))start();return;}
 clearInterval(timer);
 if(!DPB){DPB=document.createElement('div');DPB.style.cssText='position:fixed;inset:0;background:#000b;z-index:8;display:flex;align-items:center;justify-content:center;color:#fff';document.body.appendChild(DPB);}
 DPB.style.display='flex';DPB.innerHTML='';
 const bx=document.createElement('div');bx.style.cssText='background:#10253a;border:2px solid #fc6;border-radius:12px;padding:14px;width:84%;max-height:82%;overflow:auto;text-align:center';
 const h=document.createElement('div');h.style.cssText='font-size:17px;font-weight:bold;margin-bottom:8px';h.textContent=it[0];
 const p=document.createElement('div');p.style.cssText='font-size:14px;margin-bottom:10px;line-height:1.4';p.textContent=it[1];bx.appendChild(h);bx.appendChild(p);
 it[2].forEach(o=>{const b=document.createElement('button');b.textContent=o[0];b.style.cssText='display:block;margin:6px auto;padding:10px 14px;font-size:15px;border:0;border-radius:8px;width:92%';
  b.onclick=()=>{DPB.style.display='none';try{if(o[1])o[1]();}catch(e){}hud();draw();dpShow();};bx.appendChild(b);});
 DPB.appendChild(bx);}
function dpP(d,type){const r=dpRat(d),rel=REL[d],rep=REP;
 if(type==='peace')return clp(.5+rel/200+(rep-50)/250+(r>1?.08:-.08)-(peace[d]>months?.5:0),.05,.95);
 if(type==='trade')return clp(.55+rel/160+(rep-50)/300,.05,.95);
 if(type==='ally')return rel<20?0:clp(.25+rel/140+(rep-50)/300-(ALY[d]>=0&&ALY[d]!==ALY[me]?.5:0),0,.9);
 if(type==='marry')return clp(.55+rel/220,.1,.9);
 if(type==='tribute')return clp((r-1.3)*.5-(rel>20?.2:0),0,.9);
 if(type==='vassal')return clp((r-1.9)*.55,0,.9);
 return 0;}
function dpBloc(){if(ALY[me]<0){ALY[me]=nextBloc++;BN[ALY[me]]='Mening ittifoqim';}}
function dpDo(d,type,amt){const nm=N[K[d]][0],roll=Math.random();
 if(type==='gift'){if(gold<amt)return'Oltin yetmaydi';gold-=amt;REL[d]=clp(REL[d]+Math.round(Math.sqrt(amt)*1.6),-100,100);return"🎁 "+nm+" sovg'angizni qabul qildi";}
 if(type==='peace'){if(gold<20)return'Oltin yetmaydi (elchi 20💰)';gold-=20;if(roll<dpP(d,'peace')){peace[d]=months+24;REL[d]=clp(REL[d]+10,-100,100);return"🕊 "+nm+" tinchlikka rozi bo'ldi (24 oy)";}REL[d]=clp(REL[d]-3,-100,100);return'❌ '+nm+' tinchlikni rad etdi';}
 if(type==='trade'){if(gold<30)return'Oltin yetmaydi';gold-=30;if(roll<dpP(d,'trade')){trade[d]=months+36;peace[d]=Math.max(peace[d]||0,months+36);REL[d]=clp(REL[d]+5,-100,100);return'💱 '+nm+' bilan savdo shartnomasi (36 oy)';}return'❌ '+nm+' savdoni rad etdi';}
 if(type==='ally'){if(REL[d]<20)return"Munosabat yetarli emas (kamida +20, hozir "+Math.round(REL[d])+"). Avval sovg'a yoki savdo qiling.";
  if(gold<100)return'Oltin yetmaydi';if(ALY[me]>=0&&ALY.filter(x=>x===ALY[me]).length>=6)return"Ittifoq to'lgan (6 ta)";gold-=100;
  if(roll<dpP(d,'ally')){dpBloc();ALY[d]=ALY[me];REL[d]=clp(REL[d]+10,-100,100);return'🤝 Ittifoq tuzildi: '+nm;}return'❌ '+nm+' ittifoqni rad etdi';}
 if(type==='marry'){if(gold<150)return'Oltin yetmaydi';gold-=150;if(roll<dpP(d,'marry')){MARR[d]=1;REL[d]=clp(REL[d]+35,-100,100);peace[d]=Math.max(peace[d]||0,months+60);return'💍 Sulolaviy nikoh: '+nm+' bilan 5 yillik tinchlik';}return'❌ '+nm+' nikohni rad etdi';}
 if(type==='tribute'){if(roll<dpP(d,'tribute')){const g=Math.round(60+cnt[d]*.25);gold+=g;REL[d]=clp(REL[d]-15,-100,100);REP=clp(REP-3,0,100);return'💰 '+nm+' '+g+" oltin tribut to'ladi";}REL[d]=clp(REL[d]-25,-100,100);return'❌ '+nm+' talabni rad etdi (munosabat tushdi)';}
 if(type==='vassal'){if(roll<dpP(d,'vassal')){dpBloc();ALY[d]=ALY[me];VAS[d]=1;REL[d]=20;peace[d]=months+999;return'👑 '+nm+" sizning vassalingiz bo'ldi (oylik tribut beradi)";}REL[d]=clp(REL[d]-30,-100,100);return'❌ '+nm+' vassallikni rad etdi';}
 if(type==='break'){peace[d]=0;trade[d]=0;MARR[d]=0;REP=clp(REP-15,0,100);REL[d]=clp(REL[d]-30,-100,100);for(let x=0;x<NEU;x++)if(x!==d&&x!==me)REL[x]=clp(REL[x]-4,-100,100);return"⚔ Shartnoma buzildi (obro' tushdi)";}
 return'';}
function dpOpen(){if(me<0||over)return;
 if(!DPO){DPO=document.createElement('div');DPO.style.cssText='position:fixed;inset:0;background:#0b1d2ef2;z-index:7;overflow:auto;padding:10px;font-size:14px;color:#fff';document.body.appendChild(DPO);}
 clearInterval(timer);DPO.style.display='block';dpRender();}
function dpClose(){if(DPO)DPO.style.display='none';
 if(me>=0&&!over&&!(typeof inB!=='undefined'&&inB)&&!(typeof battling!=='undefined'&&battling)&&(!DPB||DPB.style.display==='none'))start();}
function dpRender(){if(!DPO||DPO.style.display==='none')return;DPO.innerHTML='';
 const hd=document.createElement('div');hd.style.cssText='font-size:17px;font-weight:bold;margin-bottom:6px';hd.textContent="🏛 Diplomatiya | Obro'-e'tibor: "+Math.round(REP)+" | 💰"+Math.floor(gold);DPO.appendChild(hd);
 if(DPM){const m=document.createElement('div');m.style.cssText='background:#223;padding:6px;border-radius:6px;margin-bottom:6px';m.textContent=DPM;DPO.appendChild(m);}
 const ids=[];for(let i=0;i<NEU;i++)if(i!==me&&cnt[i]>0)ids.push(i);ids.sort((a,b)=>REL[b]-REL[a]);
 for(const i of ids){const row=document.createElement('div');row.style.cssText='background:#16324a;border-radius:8px;padding:7px;margin:4px 0';
  const st=[allied(me,i)?(VAS[i]?'👑':'🤝'):'',peace[i]>months?'🕊':'',trade[i]>months?'💱':'',MARR[i]?'💍':'',(typeof NUK!=='undefined'&&NUK[i]>0)?'☢️':''].join('');
  const top=document.createElement('div');top.style.cssText='display:flex;justify-content:space-between;align-items:center;gap:6px';
  top.innerHTML='<span>'+emb(i)+' <b>'+N[K[i]][0]+'</b> '+st+'</span><span>⚔'+fmt(T[i])+' '+relBar(REL[i])+'</span>';
  top.onclick=()=>{DPSel=DPSel===i?-1:i;dpRender();};row.appendChild(top);
  if(DPSel===i)dpActs(row,i);DPO.appendChild(row);}
 const cl=document.createElement('button');cl.textContent='✖ Yopish';cl.style.cssText='display:block;margin:10px auto;padding:10px 20px;font-size:16px;border:0;border-radius:8px';cl.onclick=dpClose;DPO.appendChild(cl);}
function dpActs(row,d){const bx=document.createElement('div');bx.style.cssText='margin-top:6px;text-align:center';
 const b=(t,f)=>{const x=document.createElement('button');x.textContent=t;x.style.cssText='margin:3px;padding:7px 10px;font-size:13px;border:0;border-radius:8px';x.onclick=e=>{e.stopPropagation();DPM=f()||'';dpRender();hud();};bx.appendChild(x);};
 const pc=t=>Math.round(dpP(d,t)*100)+'%',r=dpRat(d),inf=document.createElement('div');
 inf.style.cssText='font-size:12px;opacity:.85;margin-bottom:4px';inf.textContent='⚖ kuch nisbati '+r.toFixed(2)+(r>=1.3?' (siz kuchliroq)':r<.77?' (u kuchliroq)':' (teng)');bx.appendChild(inf);
 if(allied(me,d))b(VAS[d]?'👑 Vassallikdan ozod qilish':'💔 Ittifoqni buzish',()=>{const v=VAS[d];ALY[me]=-1;VAS[d]=0;REL[d]=clp(REL[d]-(v?0:20),-100,100);return'💔 Ittifoq tugadi';});
 else{b('🎁 50💰',()=>dpDo(d,'gift',50));b('🎁 150💰',()=>dpDo(d,'gift',150));
  b('🕊 Tinchlik 20💰 ~'+pc('peace'),()=>dpDo(d,'peace'));b('💱 Savdo 30💰 ~'+pc('trade'),()=>dpDo(d,'trade'));
  b('🤝 Ittifoq 100💰 ~'+pc('ally'),()=>dpDo(d,'ally'));
  if(E.y<1850)b('💍 Nikoh 150💰 ~'+pc('marry'),()=>dpDo(d,'marry'));
  if(r>=1.3)b('💰 Tribut talab ~'+pc('tribute'),()=>dpDo(d,'tribute'));
  if(r>=1.9)b('👑 Vassallik ~'+pc('vassal'),()=>dpDo(d,'vassal'));
  if(peace[d]>months||trade[d]>months||MARR[d])b('⚔ Shartnomani buzish',()=>dpDo(d,'break'));}
 row.appendChild(bx);}
function dpHit(a,d,n){if(!(n>0)||me<0)return;
 if(a===me&&d<NEU){REL[d]=clp(REL[d]-(15+Math.min(25,n)),-100,100);for(let x=0;x<NEU;x++)if(x!==d&&x!==me&&allied(d,x))REL[x]=clp(REL[x]-8,-100,100);}
 else if(d===me&&a<NEU)REL[a]=clp(REL[a]-10,-100,100);}
const _cpD=capture;capture=function(a,d,t,D){const n=_cpD(a,d,t,D);dpHit(a,d,n);return n;};
if(typeof capturePiece==='function'){const _cpp=capturePiece;capturePiece=function(a,d,p,t,f){const n=_cpp(a,d,p,t,f);dpHit(a,d,n);return n;};}
function dpOffer(){const c=[];for(let i=0;i<NEU;i++){if(i===me||cnt[i]<=0||allied(me,i))continue;
  if(REL[i]>=35&&cnt[i]>40)c.push([i,'ally']);
  if(!(peace[i]>months)&&dpRat(i)<.7&&REL[i]<20&&cnt[i]>60)c.push([i,'tribute']);}
 if(!c.length)return;const [d,t]=c[Math.floor(Math.random()*c.length)],nm=N[K[d]][0];
 if(t==='ally')dpCard('🤝 Ittifoq taklifi',nm+' (munosabat '+Math.round(REL[d])+') sizga harbiy ittifoq taklif qilmoqda.',[["✅ Qabul qilish",()=>{dpBloc();ALY[d]=ALY[me];REL[d]=clp(REL[d]+10,-100,100);}],["❌ Rad etish",()=>{REL[d]=clp(REL[d]-5,-100,100);}]]);
 else{const amt=Math.round(50+cnt[d]*.2);dpCard('💰 Tribut talabi',nm+" kuchliroq bo'lib, sizdan "+amt+" oltin talab qilmoqda. Rad etsangiz urush xavfi oshadi.",[["💰 To'lash ("+amt+")",()=>{gold=Math.max(0,gold-amt);REL[d]=clp(REL[d]+8,-100,100);REP=clp(REP-2,0,100);}],["❌ Rad etish",()=>{REL[d]=clp(REL[d]-20,-100,100);T[d]*=1.12;}]]);}}
const _tkD=tick;tick=function(){_tkD();if(me<0||over)return;
 for(let i=0;i<NEU;i++){if(i===me)continue;let v=REL[i];if(allied(me,i))v+=VAS[i]?-.1:.8;if(peace[i]>months||trade[i]>months)v+=.4;v-=v*.02;REL[i]=clp(v,-100,100);
  if(VAS[i]){if(!allied(me,i))VAS[i]=0;else{gold+=cnt[i]*.04;if(dpRat(i)<1.2&&Math.random()<.04){ALY[i]=-1;VAS[i]=0;REL[i]=-50;msg='⚠️ '+N[K[i]][0]+' vassallikdan chiqdi!';mt=Date.now()+6000;}}}}
 REP=clp(REP+(REP<70?.25:-.05),0,100);if(Math.random()<.05)dpOffer();hud();};
const _inD=intro;intro=function(i){REL.fill(0);VAS.fill(0);MARR.fill(0);REP=70;for(let j=0;j<NEU;j++)if(j!==i&&allied(i,j))REL[j]=45;_inD(i);};
const _poD=panelOwn;panelOwn=function(c){_poD(c);const ex=pn.lastChild;pbtn('🏛 Diplomatiya',()=>{DPSel=-1;DPM='';dpOpen();});pn.insertBefore(pn.lastChild,ex);};
const _svD=save;save=function(){_svD();try{const k='d1775y'+E.y,sv=JSON.parse(localStorage.getItem(k));if(!sv)return;sv.dp={REL,VAS,MARR,REP};localStorage.setItem(k,JSON.stringify(sv));}catch(e){}};
const _ldD=load;load=function(sv){_ldD(sv);if(sv.dp){sv.dp.REL.forEach((v,i)=>REL[i]=v);sv.dp.VAS.forEach((v,i)=>VAS[i]=v);sv.dp.MARR.forEach((v,i)=>MARR[i]=v);REP=sv.dp.REP;}};
{const bb=document.createElement('button');bb.textContent='🏛';bb.onclick=()=>{if(me>=0){DPSel=-1;DPM='';dpOpen();}};document.getElementById('bot').insertBefore(bb,document.getElementById('bz'));}
