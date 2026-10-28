const ARMIES=[];let battling=false,LASTR=null;
function findRoute(t){if(me<0||t<0||co[t]===SEA||co[t]===me)return null;
 for(const sea of(ships>0?[false,true]:[false])){
  const prev=new Int32Array(W*H).fill(-2);prev[t]=-1;const q=[t];let found=-1;
  for(let h=0;h<q.length&&found<0;h++){const c=q[h],x=c%W,y=(c/W)|0;
   for(let dy=-1;dy<=1&&found<0;dy++)for(let dx=-1;dx<=1;dx++){if(!dx&&!dy)continue;const nx=x+dx,ny=y+dy;if(nx<0||ny<0||nx>=W||ny>=H)continue;const n=ny*W+nx;if(prev[n]!==-2)continue;if(co[n]===SEA&&!sea)continue;prev[n]=c;if(co[n]===me){found=n;break;}q.push(n);}}
  if(found>=0){const p=[];for(let c=found;c!==-1;c=prev[c])p.push(c);return p;}}
 return null;}
function near(c){LASTR=findRoute(c);return !!LASTR;}
function armySp(){return 2+.2*tierOf(me);}
function armyPos(a){const L=a.route.length-1,i=Math.min(L,Math.floor(a.p)),j=Math.min(L,i+1),f=a.p-i,c1=a.route[i],c2=a.route[j];return[(c1%W)+.5+((c2%W)-(c1%W))*f,((c1/W)|0)+.5+(((c2/W)|0)-((c1/W)|0))*f];}
function mainEmoji(){const U=TECH[tierOf(me)].u;let b=0;for(let i=1;i<4;i++)if(F[me][i]>F[me][b])b=i;return U[b][0];}
function drawArmies(c){if(!ARMIES.length||me<0)return;cx.textAlign='center';cx.textBaseline='middle';
 for(const a of ARMIES){const p0=armyPos(a),L=a.route.length-1,lk=a.route[L];
  cx.strokeStyle='#ff0';cx.lineWidth=2;cx.setLineDash([6,5]);cx.beginPath();cx.moveTo(ox+p0[0]*c,oy+p0[1]*c);
  for(let i=Math.floor(a.p)+1;i<L;i+=2){const k=a.route[i];cx.lineTo(ox+((k%W)+.5)*c,oy+(((k/W)|0)+.5)*c);}
  cx.lineTo(ox+((lk%W)+.5)*c,oy+(((lk/W)|0)+.5)*c);cx.stroke();cx.setLineDash([]);
  cx.font='18px sans-serif';cx.fillStyle='#fff';cx.fillText('🎯',ox+((lk%W)+.5)*c,oy+(((lk/W)|0)+.5)*c);
  const x=ox+p0[0]*c,y=oy+p0[1]*c,r=Math.max(11,Math.min(17,c*2.4)),onSea=co[a.route[Math.min(L,Math.round(a.p))]]===SEA;
  cx.beginPath();cx.arc(x,y,r,0,6.3);cx.fillStyle=COL[me];cx.fill();cx.lineWidth=2.5;cx.strokeStyle='#fff';cx.stroke();
  cx.font=(r*1.1)+'px sans-serif';cx.fillStyle='#fff';cx.fillText(onSea?'⛵':mainEmoji(),x,y);
  flag(cx,x+r*.5,y-r*.5,me,Math.max(12,r*1.2),Math.max(8,r*.8));
  cx.font='bold '+(r*.75)+'px sans-serif';cx.lineWidth=3;cx.strokeStyle='#000b';cx.fillStyle='#fff';cx.strokeText(fmt(a.n),x,y+r+8);cx.fillText(fmt(a.n),x,y+r+8);}}
const _df=drawFleets;drawFleets=function(c){_df(c);drawArmies(c);};
function arrive(a){const t=a.route[a.route.length-1],d=co[t],i=ARMIES.indexOf(a);if(i>=0)ARMIES.splice(i,1);
 if(d===SEA||d===me){T[me]+=a.n;note("Qo'shin yetib keldi: hudud sizniki");draw();return;}
 if(d<NEU&&peace[d]>months){T[me]+=a.n;note("Tinchlik bor: qo'shin qaytdi");draw();return;}
 battling=true;clearInterval(timer);tgt=null;pn.style.display='none';
 const Td=d===NEU?25+Math.random()*25:T[d]*.4,fort=d<NEU&&fortAt(t,d);
 T[me]+=a.n;startBattle({a:me,d,cell:t,commit:a.n,Td,fort,sea:a.sea,ships});}
function marchLaunch(){if(!tgt||!tgt.ok||me<0||over)return;const d=tgt.d;
 if(d<NEU&&peace[d]>months){note('Tinchlik bor, hujum mumkin emas');return;}
 if(co[tgt.c]!==d){note("Hudud egasi o'zgargan");tgt=null;pn.style.display='none';draw();return;}
 const route=findRoute(tgt.c);if(!route){note("Yo'l topilmadi (dengiz uchun kema kerak)");return;}
 const commit=Math.floor(T[me]*pct/100);if(commit<10){note("Qo'shin kam");return;}
 if(ARMIES.length>=8){note("Ko'pi bilan 8 ta qo'shin yuborish mumkin");return;}
 const sea=route.some(k=>co[k]===SEA);pn.style.display='none';
 if(route.length<=3){const Td=d===NEU?25+Math.random()*25:T[d]*.4,fort=d<NEU&&fortAt(tgt.c,d);battling=true;clearInterval(timer);startBattle({a:me,d,cell:tgt.c,commit,Td,fort,sea,ships});return;}
 T[me]-=commit;ARMIES.push({n:commit,route,p:0,sea});tgt=null;note("📍 Qo'shin yo'lga chiqdi: "+route.length+" katak");sfx('horn');draw();hud();}
const _lm=launch;launch=function(){if(tgt&&tgt.fleet){_lm();return;}marchLaunch();};
function armyPanel(a){const left=a.route.length-1-a.p;showPanel("⚔ Qo'shin: "+a.n+" | qolgan: "+Math.round(left)+" katak (~"+Math.round(left/armySp()/Math.max(1,speed))+" s)");
 pbtn('↩ Qaytarish',()=>{T[me]+=a.n;const i=ARMIES.indexOf(a);if(i>=0)ARMIES.splice(i,1);pn.style.display='none';draw();hud();});pbtn('✖',()=>{pn.style.display='none';});}
const _tp=tap;tap=function(px,py){if(me>=0&&!over){const c=c0*sc;for(const a of ARMIES){const p=armyPos(a);if(Math.hypot(px-(ox+p[0]*c),py-(oy+p[1]*c))<22){tgt=null;armyPanel(a);draw();return;}}}_tp(px,py);};
const _pe3=panelEnemy;panelEnemy=function(){_pe3();if(tgt&&!tgt.fleet&&pn.firstChild){if(tgt.ok){if(!tgt.route)tgt.route=LASTR;if(tgt.route)pn.firstChild.textContent+=' | 📍'+tgt.route.length+' katak (~'+Math.round(tgt.route.length/armySp()/Math.max(1,speed))+' s)';}else if(ships===0)pn.firstChild.textContent+=" | dengiz ortida: kema kerak";}};
const _ab=afterBattle;afterBattle=function(){battling=false;_ab();};
const _sv2=save;save=function(){_sv2();try{const k='d1775y'+E.y,sv=JSON.parse(localStorage.getItem(k));sv.armies=ARMIES;localStorage.setItem(k,JSON.stringify(sv));}catch(e){}};
const _ld2=load;load=function(sv){_ld2(sv);ARMIES.length=0;(sv.armies||[]).forEach(a=>ARMIES.push(a));battling=false;};
setInterval(()=>{if(me<0||over||inB||battling||!speed||!ARMIES.length)return;const dt=.1*speed,sp=armySp();let arr=null;
 for(const a of ARMIES){a.p+=sp*dt;if(a.p>=a.route.length-1){a.p=a.route.length-1;if(!arr)arr=a;}}
 if(arr)arrive(arr);draw();},100);
