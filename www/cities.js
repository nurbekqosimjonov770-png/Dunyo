(function(){
if(typeof CITIES==='undefined'||typeof cityNm==='undefined')return;
const CTY0=CITIES.length,CL=new Map(),CP=new Map(),CO=new Map();
const cyr=()=>E.y+Math.floor(months/12),cAct=ct=>cyr()>=ct[3];
function ccell(ct){const x=Math.max(0,Math.min(W-1,Math.floor(ct[1]+180))),y=Math.max(0,Math.min(H-1,Math.floor(TOP-ct[2]))),c=y*W+x;if(co[c]!==SEA)return c;
 for(let dy=-1;dy<=1;dy++)for(let dx=-1;dx<=1;dx++){const nx=x+dx,ny=y+dy;if(nx<0||ny<0||nx>=W||ny>=H)continue;const k=ny*W+nx;if(co[k]!==SEA)return k;}return c;}
const cown=i=>{const o=co[ccell(CITIES[i])];return o===SEA?-1:o;};
const clev=i=>CL.has(i)?CL.get(i):(CITIES[i][4]?2:1);
for(let i=0;i<CITIES.length;i++)CO.set(i,cown(i));
const _tk6=tick;tick=function(){_tk6();if(me<0||over)return;const t=typeof tierOf==='function'?tierOf(me):0,mm=1+.25*t;
 for(let i=0;i<CITIES.length;i++){const ct=CITIES[i];if(!cAct(ct))continue;const o=cown(i),prev=CO.has(i)?CO.get(i):o;
  if(o!==prev&&prev>=0){CL.set(i,Math.max(1,clev(i)-1));CP.delete(i);}CO.set(i,o);
  if(o<0||o>=NEU)continue;const L=clev(i);T[o]+=L*.4;
  if(o===me){gold+=L*1.2*mm;const p=CP.get(i);if(p&&--p.left<=0){const n=Math.round(UR[p.k]*(1+.25*L)),tt=T[me];F[me]=F[me].map((f,j)=>(f*tt+(j===p.k?n:0))/(tt+n));T[me]+=n;CP.delete(i);msg='🏭 '+cityNm(ct,cyr())+': '+n+' askar tayyor';mt=Date.now()+5000;if(typeof sfx==='function')sfx('coin');}}}
 hud();draw();};
const _dr8=draw;draw=function(){_dr8();if(me<0)return;const c=c0*sc;if(c<1.8)return;cx.textAlign='center';cx.textBaseline='middle';
 for(let i=0;i<CITIES.length;i++){const ct=CITIES[i];if(!cAct(ct))continue;const o=cown(i);if(o<0)continue;if(CAPC.includes(ccell(ct)))continue;
  const x=ox+(ct[1]+180)*c,y=oy+(TOP-ct[2])*c;if(x<-20||y<-20||x>innerWidth+20||y>innerHeight+20)continue;
  const r=Math.min(9,Math.max(5,c*.9)),L=clev(i);cx.beginPath();cx.arc(x,y,r,0,6.3);cx.fillStyle=o<NEU?COL[o]:'#888';cx.fill();cx.lineWidth=o===me?2:1.5;cx.strokeStyle=o===me?'#fd0':'#fff';cx.stroke();
  if(c>=3){cx.font='bold '+(r*1.1)+'px sans-serif';cx.fillStyle=o<NEU&&LT(COL[o])?'#000':'#fff';cx.fillText(L,x,y+.5);}
  if(CP.has(i)&&o===me){cx.font=(r*1.4)+'px sans-serif';cx.fillStyle='#fff';cx.fillText('🏭',x+r+4,y-r);}}};
const _tp7=tap;tap=function(px,py){if(me>=0&&!over){const c=c0*sc;if(c>=1.6)for(let i=0;i<CITIES.length;i++){const ct=CITIES[i];if(!cAct(ct))continue;
  const x=ox+(ct[1]+180)*c,y=oy+(TOP-ct[2])*c;if(Math.hypot(px-x,py-y)<15&&cown(i)===me){tgt=null;cityPanel(i);draw();return;}}}_tp7(px,py);};
function cityPanel(i){const ct=CITIES[i],L=clev(i),t=typeof tierOf==='function'?tierOf(me):0,U=TECH[t],nm=cityNm(ct,cyr()),p=CP.get(i);
 showPanel('🏙 '+nm+' | daraja '+'★'.repeat(L)+' | 💰+'+(L*1.2*(1+.25*t)).toFixed(1)+'/oy | ⚔+'+(L*.4).toFixed(1)+'/oy');
 if(p){pn.firstChild.textContent+=' | 🏭 '+U.u[p.k][0]+' '+p.left+' oy';
  pbtn('✖ Ishlab chiqarishni bekor qilish (35% qaytadi)',()=>{const c=ucost(p.k,t);gold+=Math.round(c[0]*.35);silv+=Math.round(c[1]*.35);oil+=Math.round(c[2]*.35);CP.delete(i);cityPanel(i);hud();});}
 else U.u.forEach((u,k)=>{const c=ucost(k,t).map(v=>Math.round(v*.7)),mo=Math.max(2,5-L);
  pbtn(u[0]+' '+c[0]+'💰'+(c[1]?' '+c[1]+'🥈':'')+(c[2]?' '+c[2]+'🛢':'')+' · '+mo+' oy → +'+Math.round(UR[k]*(1+.25*L)),()=>{if(gold<c[0]||silv<c[1]||oil<c[2]){note('Resurs yetmaydi');return;}gold-=c[0];silv-=c[1];oil-=c[2];CP.set(i,{k,left:mo});if(typeof sfx==='function')sfx('coin');cityPanel(i);hud();});});
 if(L<5){const g=80*L,s=10*L;pbtn('📈 Yangilash → '+(L+1)+' ('+g+'💰 '+s+'🥈)',()=>{if(gold<g||silv<s){note('Resurs yetmaydi');return;}gold-=g;silv-=s;CL.set(i,L+1);cityPanel(i);hud();draw();});}
 pbtn('✖',()=>{pn.style.display='none';});}
const _po8=panelOwn;panelOwn=function(c){_po8(c);const x=c%W,y=(c/W)|0;let nr=false;
 for(let i=0;i<CITIES.length;i++){const ct=CITIES[i];if(!cAct(ct))continue;const cc=ccell(ct);if(Math.abs(cc%W-x)<=3&&Math.abs(((cc/W)|0)-y)<=3){nr=true;break;}}
 if(!nr){const ex=pn.lastChild;pbtn('🏙 Shahar qurish (120💰 15🥈)',()=>{if(gold<120||silv<15){note('Resurs yetmaydi');return;}gold-=120;silv-=15;
  CITIES.push([N[K[me]][0].split(' ')[0]+'-'+(CITIES.length-CTY0+1),x-179.5,TOP-y-.5,0,0]);CL.set(CITIES.length-1,1);CO.set(CITIES.length-1,me);note('🏙 Yangi shahar qurildi');panelOwn(c);hud();draw();});pn.insertBefore(pn.lastChild,ex);}};
const _sv7=save;save=function(){_sv7();try{const k='d1775y'+E.y,sv=JSON.parse(localStorage.getItem(k));if(!sv)return;sv.cty={L:[...CL],P:[...CP].map(e=>[e[0],e[1].k,e[1].left]),N:CITIES.slice(CTY0)};localStorage.setItem(k,JSON.stringify(sv));}catch(e){}};
const _ld7=load;load=function(sv){_ld7(sv);if(!sv.cty)return;CITIES.length=CTY0;sv.cty.N.forEach(n=>CITIES.push(n));CL.clear();CP.clear();sv.cty.L.forEach(e=>CL.set(e[0],e[1]));sv.cty.P.forEach(e=>CP.set(e[0],{k:e[1],left:e[2]}));for(let i=0;i<CITIES.length;i++)CO.set(i,cown(i));};
})();
