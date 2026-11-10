const NUK=new Array(NEU).fill(0),NRS=new Array(NEU).fill(0),FALL=new Map(),NFX=[];let NSTR=0,NW=0;
const NINIT={2020:{U:6,R:6,C:4,G:2,F:2,I:2,A:2,N:1}},NSCH={1939:[[78,'U',2],[128,'S',1],[156,'G',1],[252,'F',1]]};
for(const k in(NINIT[E.y]||{})){const i=K.indexOf(k);if(i>=0){NUK[i]=NINIT[E.y][k];NRS[i]=-1;}}
const nkOn=()=>typeof tierOf==='function'&&tierOf(me)>=7&&!(typeof peaceMode!=='undefined'&&peaceMode);
function nkStrike(a,cell,retal){const d=co[cell];if(a<0||NUK[a]<=0||d===SEA)return false;NUK[a]--;NSTR++;
 const x0=cell%W,y0=(cell/W)|0;let lost=0;
 for(let dy=-3;dy<=3;dy++)for(let dx=-3;dx<=3;dx++){if(dx*dx+dy*dy>10)continue;const nx=x0+dx,ny=y0+dy;if(nx<0||ny<0||nx>=W||ny>=H)continue;const c=ny*W+nx,o=co[c];
  if(o===SEA||o===a||Math.random()<.15)continue;if(o<NEU)lost++;co[c]=NEU;FALL.set(c,120);}
 if(d<NEU){T[d]=Math.max(5,T[d]*.6);if(co[CAPC[d]]!==d&&!capLost[d]){capLost[d]=1;T[d]=Math.max(5,Math.floor(T[d]*.7));}}
 NFX.push({x:x0,y:y0,t0:Date.now()});dirty=true;
 if(typeof sfx==='function'){sfx('boom');setTimeout(()=>sfx('boom'),450);}
 if(me>=0&&a===me){for(let i=0;i<NEU;i++)if(i!==me)REL[i]=clp(REL[i]-25,-100,100);if(d<NEU)REL[d]=-100;REP=clp(REP-35,0,100);
  for(let i=0;i<NEU;i++)if(allied(me,i)&&Math.random()<.5){ALY[i]=-1;VAS[i]=0;}}
 msg="☢️ Yadro zarbasi: "+(d<NEU?N[K[d]][0]:"hudud")+" — "+lost+" katak vayron bo'ldi";mt=Date.now()+7000;
 if(NSTR>=6&&NW<months){NW=months+60;msg+=" | ☢️ YADRO QISHI boshlandi!";}
 if(!retal&&d<NEU&&NUK[d]>0&&CAPC[a]>=0){const n=Math.min(2,NUK[d]);for(let k=0;k<n;k++)nkStrike(d,CAPC[a],true);msg+=" | "+N[K[d]][0]+" javob zarbasi berdi!";}
 return true;}
const _tkN=tick;tick=function(){_tkN();if(me<0||over)return;
 for(const e of(NSCH[E.y]||[]))if(e[0]===months){const i=K.indexOf(e[1]);if(i>=0){NUK[i]+=e[2];NRS[i]=-1;msg="☢️ "+N[K[i]][0]+" yadro qurolini sinadi!";mt=Date.now()+8000;}}
 for(let i=0;i<NEU;i++){if(cnt[i]<=0)continue;
  if(NRS[i]>0){if(--NRS[i]===0){NRS[i]=-1;NUK[i]+=1;if(i===me)dpCard("☢️ Yadro dasturi tugadi","Birinchi yadro quroli tayyor. Endi ko'proq yasashingiz mumkin.",[["OK"]]);else{msg="☢️ "+N[K[i]][0]+" yadro quroliga ega bo'ldi!";mt=Date.now()+8000;}}}
  else if(i!==me&&NRS[i]===0&&tierOf(i)>=7&&cnt[i]>250&&Math.random()<.004)NRS[i]=24+((Math.random()*12)|0);
  else if(i!==me&&NRS[i]===-1&&months%36===0&&NUK[i]<15)NUK[i]++;}
 const rad=new Array(NEU).fill(0);for(const [c,t] of FALL){if(t<=1)FALL.delete(c);else FALL.set(c,t-1);const o=co[c];if(o<NEU)rad[o]++;}
 for(let i=0;i<NEU;i++)if(rad[i])T[i]=Math.max(5,T[i]-rad[i]*.04);
 if(NW>months)for(let i=0;i<NEU;i++)T[i]=Math.max(5,T[i]*.988);
 if(!(typeof peaceMode!=='undefined'&&peaceMode))for(let i=0;i<NEU;i++){if(i===me||NUK[i]<=0||cnt[i]<=0)continue;const inv=co[CAPC[i]];
  if(capLost[i]&&inv<NEU&&inv!==i&&!allied(i,inv)&&Math.random()<.02){if(inv===me)dpCard("☢️ Yadro hujumi!",N[K[i]][0]+" poytaxtini yo'qotib, yadro zarbasi berdi.",[["OK"]]);nkStrike(i,CAPC[i],false);}
  else if(REL[i]<=-70&&Math.random()<.004&&!allied(i,me)&&tierOf(i)>=7)nkStrike(i,CAPC[me],false);}
 if(dirty){paint();dirty=false;}hud();draw();};
const _poN=panelOwn;panelOwn=function(c){_poN(c);if(!nkOn())return;const ex=pn.lastChild,add=(t,f)=>{pbtn(t,f);pn.insertBefore(pn.lastChild,ex);};
 if(NRS[me]===0)add('☢️ Yadro dasturi (600💰 150🥈 200🛢, 18 oy)',()=>{if(gold<600||silv<150||oil<200){note('Resurs yetmaydi');return;}gold-=600;silv-=150;oil-=200;NRS[me]=18;note('☢️ Yadro dasturi boshlandi');panelOwn(c);hud();});
 else if(NRS[me]>0)add('☢️ Yadro dasturi: '+NRS[me]+' oy qoldi',()=>{});
 else if(NRS[me]===-1)add('☢️ Yadro quroli yasash (300💰 50🥈 100🛢) ['+NUK[me]+']',()=>{if(NUK[me]>=12){note("Arsenal to'lgan (12)");return;}if(gold<300||silv<50||oil<100){note('Resurs yetmaydi');return;}gold-=300;silv-=50;oil-=100;NUK[me]++;note('☢️ Yangi yadro quroli');panelOwn(c);hud();});};
const _peN=panelEnemy;panelEnemy=function(){_peN();if(!tgt||tgt.fleet||tgt.d===undefined||tgt.d>=NEU||tgt.c==null||!nkOn()||NUK[me]<=0||allied(me,tgt.d))return;
 const d=tgt.d,cell=tgt.c,ex=pn.lastChild;
 pbtn('☢️ Yadro zarbasi ('+NUK[me]+')',()=>{dpCard('☢️ Yadro zarbasi',N[K[d]][0]+" hududiga zarba beriladi. Dunyo munosabati va obro'ingiz keskin tushadi"+(NUK[d]>0?". ⚠️ U yadro quroliga ega: javob zarbasi poytaxtingizga uriladi!":"."),[["☢️ Ha, zarba bering",()=>{nkStrike(me,cell,false);paint();dirty=false;}],["Bekor qilish",null]]);});
 pn.insertBefore(pn.lastChild,ex);};
const _huN=hud;hud=function(){_huN();if(me>=0&&Date.now()>=mt&&(NUK[me]>0||NRS[me]>0))info.textContent+=' | ☢️'+NUK[me]+(NRS[me]>0?'('+NRS[me]+')':'');};
const _drN=draw;draw=function(){_drN();const c=c0*sc,now=Date.now();
 if(FALL.size&&c>=.8){cx.fillStyle='rgba(150,255,60,.26)';for(const [cc] of FALL){const x=ox+(cc%W)*c,y=oy+((cc/W)|0)*c;if(x<-c||y<-c||x>innerWidth||y>innerHeight)continue;cx.fillRect(x,y,c+.5,c+.5);}}
 for(let i=NFX.length-1;i>=0;i--){const f=NFX[i],age=(now-f.t0)/1000;if(age>2.6){NFX.splice(i,1);continue;}
  const x=ox+(f.x+.5)*c,y=oy+(f.y+.5)*c,r=Math.max(10,c*3.5*(.3+age*1.2)),a=1-age/2.6,g=cx.createRadialGradient(x,y,0,x,y,r);
  g.addColorStop(0,'rgba(255,255,230,'+a+')');g.addColorStop(.5,'rgba(255,150,30,'+a*.7+')');g.addColorStop(1,'rgba(255,60,0,0)');cx.fillStyle=g;cx.beginPath();cx.arc(x,y,r,0,6.3);cx.fill();
  if(age<.35){cx.fillStyle='rgba(255,255,255,'+(.6*(1-age/.35))+')';cx.fillRect(0,0,innerWidth,innerHeight);}}
 if(NFX.length)setTimeout(()=>draw(),60);};
const _svN=save;save=function(){_svN();try{const k='d1775y'+E.y,sv=JSON.parse(localStorage.getItem(k));if(!sv)return;sv.nk={NUK,NRS,NSTR,NW,FALL:[...FALL]};localStorage.setItem(k,JSON.stringify(sv));}catch(e){}};
const _ldN=load;load=function(sv){_ldN(sv);if(!sv.nk)return;sv.nk.NUK.forEach((v,i)=>NUK[i]=v);sv.nk.NRS.forEach((v,i)=>NRS[i]=v);NSTR=sv.nk.NSTR||0;NW=sv.nk.NW||0;FALL.clear();(sv.nk.FALL||[]).forEach(e=>FALL.set(e[0],e[1]));};
