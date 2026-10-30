let TSd=null;const NAVF=[.3,.3,.2,.2];
function navT(t){const f=1+.2*t;return{t,hp:[6,8,10,18].map(x=>x*f),sp:[30,22,35,12],rg:[60,130,110,200],dm:[1.2,1.8,2,3.5].map(x=>x*(1+.12*t)),rl:[.7,1.6,1.2,3],sh:[0,1,2,3]};}
const ST=(u,k)=>u.t<4?TSd[u.s][k][u.t]:({hp:HP,sp:SP,rg:RG,dm:DM,rl:RL})[k][u.t];
function mk(s,t,x,y,m){return{s,t,x,y,hp:(t<4&&TSd?TSd[s].hp[t]:HP[t])*m,alive:true,cd:Math.random(),tg:null,rt:0};}
const HWS={melee:{sword:{r:22,d:4,c:10,cd:.45},spear:{r:44,d:5,c:14,cd:.8},bow:{r:240,d:3.5,c:8,cd:1,am:1}},modern:{sword:{r:190,d:2,c:4,cd:.22,am:1,s:'shot'},spear:{r:120,d:7,c:18,cd:1.5,sp:30,s:'boom'},bow:{r:320,d:6,c:12,cd:1.6,am:1,s:'shot'}},naval:{sword:{r:170,d:4,c:10,cd:.7,s:'boom'},spear:{r:26,d:8,c:16,cd:1.2,s:'clash'},bow:{r:260,d:5,c:14,cd:1.8,am:1,s:'boom'}}};
function heroAct(k){const H0=BT.hero;if(!H0||H0.dead||H0.acd>0)return;const u=H0.u,w=HWS[BT.hm][k];
 if(H0.stam<w.c||(w.am&&H0.arrows<=0))return;
 const mel=BT.hm==='melee',reach=w.r+(mel&&H0.mount&&k!=='bow'?4:0);
 let best=null,bd=1e9;for(const e of BT.U){if(!e.alive||e.s===0)continue;const d=Math.hypot(e.x-u.x,e.y-u.y);if(d<reach&&d<bd){bd=d;best=e;}}
 if(w.am&&!best)return;
 H0.acd=w.cd;H0.stam-=w.c;if(w.am)H0.arrows--;
 if(best){const mv=Math.hypot(H0.jx,H0.jy)>.3,dmg=w.d*(mel&&H0.mount&&k==='sword'?1.25:1)*(mel&&k==='spear'&&H0.mount&&mv?2:1);hit(best,dmg,'hero');
  if(w.sp)for(const e of BT.U)if(e.alive&&e.s===1&&e!==best&&Math.hypot(e.x-best.x,e.y-best.y)<w.sp)hit(e,dmg*.5,'hero');
  const fc=mel?(k==='bow'?1:0):(BT.hm==='naval'?3:(k==='spear'?3:1));
  BT.fl.push([u.x,u.y,best.x,best.y,fc,.18]);sfx(w.s||(k==='bow'?'arrow':'clash'));}
 else BT.fl.push([u.x,u.y,u.x+H0.fx*reach*.5,u.y+H0.fy*reach*.5,0,.12]);}
function toggleHero(){const bw=BW,mid=BH/2;
 if(BT.hero){BT.U=BT.U.filter(u=>u!==BT.hero.u);BT.hero=null;BX.hb.textContent="🗡 Men ham jang qilaman: YO'Q";}
 else{const hu=mk(0,5,bw/2,mid+135,1);hu.hero=true;BT.U.push(hu);BT.hero={u:hu,mount:false,block:false,stam:100,arrows:BT.hm==='modern'?80:BT.hm==='naval'?40:30,kills:0,acd:0,jx:0,jy:0,fx:0,fy:-1,hold:null,dead:false};BX.hb.textContent="🗡 Men ham jang qilaman: HA ✅";toast("Siz qo'shin safida jang qilasiz. Chapda yuring, o'ngdagi tugmalar bilan uring.");}}
function stepB(dt){if(BT.prep||BT.done)return;const U=BT.U;BT.t+=dt;heroStep(dt);
 for(const u of U){if(!u.alive||u.hero)continue;u.cd-=dt;const A0=u.t<4?TSd[u.s]:null,sp=ST(u,'sp');
  if(BT.rout[u.s]){u.y+=(u.s?-1:1)*sp*.8*dt;continue;}
  let cm=u.s===0?BT.cmd:0;
  if(cm===2){u.y=Math.min(BH-30,u.y+sp*.8*dt);continue;}
  const hl=BT.hero&&!BT.hero.dead?BT.hero.u:null;if(cm===3&&!hl)cm=0;
  if(!u.tg||!u.tg.alive||(u.rt-=dt)<=0){u.tg=nearEnemy(u,U);u.rt=.6+Math.random()*.6;}
  const e=u.tg;if(!e)continue;
  const dx=e.x-u.x,dy=e.y-u.y,d=Math.hypot(dx,dy)||1;
  if(d>ST(u,'rg')){if(cm===1)continue;let tx=dx,ty=dy,dd=d;if(cm===3){const hx=hl.x-u.x,hy=hl.y-u.y,hd=Math.hypot(hx,hy);if(hd>90){tx=hx;ty=hy;dd=hd;}}
   const v=sp*dt;u.x+=tx/dd*v+(Math.random()-.5)*6*dt;u.y+=ty/dd*v;}
  else if(u.cd<=0&&ST(u,'dm')>0){let m=1;for(const s of BT.stars[u.s])if(s.alive&&Math.hypot(s.x-u.x,s.y-u.y)<90){m=1.25;break;}
   if(u.s===0&&!BT.o.naval&&(u.t===1||u.t===3))m*=BT.navy;
   u.cd=ST(u,'rl')*(.8+Math.random()*.4);const tk=A0&&A0.sh[u.t]===6;BT.fl.push([u.x,u.y,e.x,e.y,tk?3:u.t,.18]);
   sfx(u.t===3||tk?'boom':u.t===1?(A0.t<3?'arrow':'shot'):'clash');
   hit(e,ST(u,'dm')*m*(.8+Math.random()*.4),'u');}}
 if(BT.o.sea&&BT.sx.length){BT.shT-=dt;if(BT.shT<=0){BT.shT=2.2/BT.sx.length+.6;const cs=U.filter(e=>e.alive&&e.s===1&&e.t<4);if(cs.length){const e=cs[(Math.random()*cs.length)|0],sx=BT.sx[(Math.random()*BT.sx.length)|0];hit(e,2.4,'ship');BT.fl.push([sx,BH/2,e.x,e.y,3,.25]);sfx('boom');}}}
 if(BT.air>0){BT.aT-=dt;if(BT.aT<=0){BT.aT=3.2/Math.sqrt(BT.air);const cs=U.filter(e=>e.alive&&e.s===1&&e.t<4);if(cs.length){const e=cs[(Math.random()*cs.length)|0];BT.pl.push({y:e.y,t:0});for(const v of U)if(v.alive&&v.s===1&&Math.hypot(v.x-e.x,v.y-e.y)<28)hit(v,3.5,'air');BT.fl.push([e.x,e.y,e.x,e.y,0,.3]);sfx('boom');}}}
 BT.pl=BT.pl.filter(p=>(p.t+=dt)<1.4);
 BT.fl=BT.fl.filter(f=>(f[5]-=dt)>0);
 let a0=0,a1=0;for(const u of U)if(u.alive&&u.t<4){if(u.s)a1++;else a0++;}BT.al=[a0,a1];
 if(a0<BT.na*.2)BT.rout[0]=true;if(a1<BT.nd*.2)BT.rout[1]=true;
 if(BT.rout[0])BT.rt[0]+=dt;if(BT.rout[1])BT.rt[1]+=dt;
 if(!BT.done&&(a0===0||a1===0||BT.t>75||BT.rt[0]>3||BT.rt[1]>3)){BT.done=true;finishB();}}
function shipShape(g,u,col){const sz=[[9,4],[12,5],[11,4],[17,6]][u.t]||[9,4];
 g.fillStyle=col;g.strokeStyle='#000';g.lineWidth=1.2;g.beginPath();g.ellipse(u.x,u.y,sz[1],sz[0],0,0,6.3);g.fill();g.stroke();
 g.fillStyle='#fff';g.beginPath();g.moveTo(u.x,u.y-sz[0]*.7);g.lineTo(u.x+sz[1]*1.2,u.y+sz[0]*.2);g.lineTo(u.x-sz[1]*1.2,u.y+sz[0]*.2);g.closePath();g.fill();}
function tankShape(g,u,col){g.fillStyle=col;g.strokeStyle='#000';g.lineWidth=1.2;g.fillRect(u.x-7,u.y-5,14,10);g.strokeRect(u.x-7,u.y-5,14,10);
 g.beginPath();g.arc(u.x,u.y,3.5,0,6.3);g.fillStyle='#0004';g.fill();g.stroke();g.beginPath();g.moveTo(u.x,u.y);g.lineTo(u.x,u.y+(u.s?11:-11));g.lineWidth=2;g.stroke();}
function drawB(){const g=BX.g,bw=BW,bh=BH,mid=bh/2,nv=BT.o.naval;
 g.fillStyle=nv?'#2c6b8f':'#c9b77a';g.fillRect(0,0,bw,bh);
 g.lineCap='round';g.strokeStyle=nv?'#3f86ab':'#5b8fa8';g.lineWidth=26;g.beginPath();g.moveTo(0,mid);for(let x=0;x<=bw;x+=20)g.lineTo(x,mid+Math.sin(x/37+BT.t*.3)*12);g.stroke();
 g.strokeStyle=nv?'#4a9bc2':'#7fb0c4';g.lineWidth=16;g.stroke();if(typeof drawDeco==='function')drawDeco(g);
 g.textAlign='center';g.textBaseline='middle';
 if(BT.o.sea)for(const x of BT.sx){g.font='26px sans-serif';g.fillStyle='#fff';g.fillText('⛵',x,mid+Math.sin(BT.t*2+x)*3);}
 g.fillStyle='#0003';for(const d of BT.dead)g.fillRect(d[0]-2,d[1]-2,4,4);
 for(const u of BT.U){if(!u.alive||u.hero)continue;
  const col=u.s?(BT.o.d===NEU?'#e80':'#e02020'):'#2c2';
  g.fillStyle=col;g.strokeStyle='#000';g.lineWidth=1.2;
  const sh=u.t<4?TSd[u.s].sh[u.t]:u.t;
  if(u.t===4){star(g,u.x,u.y,10,'#fd0',col);}
  else if(nv){shipShape(g,u,col);}
  else if(sh===6){tankShape(g,u,col);}
  else if(u.t===2){g.beginPath();g.ellipse(u.x,u.y,8,4.5,0,0,6.3);g.fill();g.stroke();}
  else if(u.t===3){g.fillRect(u.x-5,u.y-4,10,8);g.strokeRect(u.x-5,u.y-4,10,8);g.beginPath();g.moveTo(u.x,u.y);g.lineTo(u.x,u.y+(u.s?10:-10));g.stroke();}
  else{g.beginPath();g.arc(u.x,u.y,5,0,6.3);g.fill();g.stroke();if(u.t===1){g.beginPath();g.moveTo(u.x,u.y);g.lineTo(u.x,u.y+(u.s?9:-9));g.stroke();}}}
 for(let s=0;s<2;s++){const st=BT.stars[s].find(u=>u.alive);if(st)flag(g,st.x+12,st.y+2,s?BT.o.d:BT.o.a,16,10);}
 for(const f of BT.fl){g.globalAlpha=Math.min(1,f[5]*6);
  if(f[4]===0||f[4]===2){g.fillStyle='#fe8';g.beginPath();g.arc(f[2],f[3],3,0,6.3);g.fill();}
  else{g.strokeStyle=f[4]===3?'#fa4':'#fff';g.lineWidth=f[4]===3?2:1;g.beginPath();g.moveTo(f[0],f[1]);g.lineTo(f[2],f[3]);g.stroke();}}
 g.globalAlpha=1;
 for(const p of BT.pl){g.font='26px sans-serif';g.fillStyle='#fff';g.fillText('✈️',-20+(bw+40)*(p.t/1.4),p.y-24);}
 const H0=BT.hero;if(H0&&!H0.dead){const u=H0.u,p=1+Math.sin(Date.now()/200)*.15,a=Math.atan2(H0.fy,H0.fx);
  g.strokeStyle='#ff0';g.lineWidth=2;g.beginPath();g.arc(u.x,u.y,14*p,0,6.3);g.stroke();
  g.fillStyle='#fc0';g.strokeStyle='#000';g.lineWidth=1.5;
  if(nv){g.beginPath();g.ellipse(u.x,u.y,8,14,0,0,6.3);g.fill();g.stroke();}
  else{if(H0.mount){g.beginPath();g.ellipse(u.x,u.y,11,6,a,0,6.3);g.fill();g.stroke();}
   g.beginPath();g.arc(u.x,u.y,6,0,6.3);g.fill();g.stroke();}
  g.strokeStyle='#fff';g.lineWidth=3;g.beginPath();g.moveTo(u.x,u.y);g.lineTo(u.x+H0.fx*16,u.y+H0.fy*16);g.stroke();
  if(H0.block){g.strokeStyle='#8cf';g.lineWidth=4;g.beginPath();g.arc(u.x,u.y,12,a-.9,a+.9);g.stroke();}
  g.fillStyle='#fff';g.strokeStyle='#000';g.lineWidth=3;g.font='bold 11px sans-serif';g.strokeText('MEN',u.x,u.y-22);g.fillText('MEN',u.x,u.y-22);}}
function setHd(){const o=BT.o,al=BT.al;
 BX.hd.innerHTML=emb(o.a)+' <b>'+N[K[o.a]][0]+'</b> '+al[0]+'/'+BT.na+' 🎖'+NM[K[o.a]][1].join(', ')+'<br>'+(o.d<NEU?emb(o.d)+' <b>'+N[K[o.d]][0]+'</b> ':'🏴 <b>Mahalliy qabilalar</b> ')+al[1]+'/'+BT.nd+(o.d<NEU?' 🎖'+NM[K[o.d]][1].join(', '):'')+(o.fort?' 🏰':'')+'<br>'+(E.y+Math.floor(months/12))+'-yil | '+TECH[TSd[0].t].n+(o.naval?' | 🌊 DENGIZ JANGI':(o.sea?' | 🌊 Dengizdan desant'+(o.ships?' ⛵'+o.ships:''):''))+(BT.air?' ✈️'+BT.air:'');
 BX.hd.appendChild(BX.rb);BX.gb.style.width=(al[0]/((al[0]+al[1])||1)*100)+'%';}
function finishB(){const sa=BT.al[0]/BT.na,sd=BT.al[1]/BT.nd,H0=BT.hero,nv=BT.o.naval,bonus=H0&&!nv?Math.min(3,Math.floor(H0.kills/4)):0,r=nv?navalDone(BT.o,sa,sd):battleDone(BT.o,sa,sd,bonus),adv=sa-sd;
 BX.sb.style.display='none';BX.fb.style.display='none';BX.cm.style.display='none';BX.ctl.style.display='none';BX.bars.style.display='none';BX.cb.style.display='inline-block';
 sfx(adv>.05?'win':'lose');
 BX.rs.innerHTML=(adv>.05?"🏆 G'alaba!":adv<-.05?"💀 Mag'lubiyat":"⚖️ Durang")+" | Yo'qotish: "+r.lossA+" | Dushman: "+r.kill+(H0?" | 🗡 Siz: "+H0.kills+" ta"+(bonus?" (+"+bonus+" chuqurlik)":""):"")+"<br>"+(nv?"💰 O'lja: +"+r.gold:(r.got?"🗺 Egallandi: "+r.got+" hudud (chuqurlik "+r.D+")":"Hudud egallanmadi"));setHd();}
function startFight(){BT.prep=false;BX.pb.style.display='none';BX.hb.style.display='none';BX.cm.style.display='flex';sfx('horn');BX.ms.style.display='none';
 if(BT.hero){BX.ctl.style.display='block';BX.bars.style.display='block';BX.sb.style.display='none';BX.fb.style.display='none';
  const L={melee:['🗡','🔱','🏹','🛡','🐎'],modern:['🔫','💣','🎯','🛡','🚙'],naval:['💥','🔥','🎯','🛡','⚡']}[BT.hm],ch=BX.ctl.children;for(let i=0;i<5;i++)ch[i+1].textContent=L[i];}
 else{BX.sb.style.display='inline-block';BX.fb.style.display='inline-block';}}
function startBattle(o){if(!BX)buildBX();const bw=BW,bh=BH,d=devicePixelRatio||1;
 BX.cv.width=innerWidth*d;BX.cv.height=innerHeight*d;BX.cv.style.width=innerWidth+'px';BX.cv.style.height=innerHeight+'px';BX.g.setTransform(d,0,0,d,0,0);
 BX.box.style.display='block';inB=true;if(ac)mg.gain.value=mOn?.25:0;
 BX.rs.innerHTML='';BX.pb.style.display='inline-block';BX.hb.style.display='inline-block';BX.sb.style.display='none';BX.fb.style.display='none';BX.cb.style.display='none';BX.cm.style.display='none';BX.ctl.style.display='none';BX.bars.style.display='none';BX.sb.textContent='⏩ 1x';BX.hb.textContent="🗡 Men ham jang qilaman: YO'Q";
 BX.cb2.forEach((x,j)=>x.style.background=j===0?'#fc0':'#000a');
 const ta=tierOf(o.a),td=tierOf(o.d<NEU?o.d:NEU);
 TSd=o.naval?[navT(ta),navT(td)]:[TECH[ta],TECH[td]];
 if(o.sea&&o.d<NEU)o.Td*=1+Math.min(.5,FLT[o.d]*.04);
 const nv=o.naval,k=Math.max(o.commit,o.Td)/(nv?40:110),mn=nv?3:6,na=Math.max(mn,Math.round(o.commit/k)),nd=Math.max(mn,Math.round(o.Td/k));
 const nsa=Math.min(3,NM[K[o.a]][1].length),nsd=o.d<NEU?Math.min(3,NM[K[o.d]][1].length):1;
 const fa=nv?NAVF:F[o.a],fd=nv?NAVF:(o.d<NEU?F[o.d]:[.8,.05,.15,0]);
 const U=army(0,na,fa,nsa,o.sea?.9:1).concat(army(1,nd,fd,nsd,o.fort?1.4:1));
 const ns=o.sea?Math.min(6,o.ships||0):0,sx=[];for(let i=0;i<ns;i++)sx.push(bw*(i+1)/(ns+1));
 BT={o,U,na,nd,t:0,prep:true,cmd:0,hero:null,hm:nv?'naval':(ta>=5?'modern':'melee'),air:ta>=6?Math.min(8,planes):0,aT:2,pl:[],navy:1+Math.min(.5,ns*.1),sx,shT:2,rout:[false,false],rt:[0,0],fl:[],dead:[],done:false,spd:1,fr:0,al:[na,nd],last:performance.now(),stars:[U.filter(u=>u.s===0&&u.t===4),U.filter(u=>u.s===1&&u.t===4)]};
 setHd();toast("Tayyorgarlik: xohlasangiz 🗡 bilan o'zingiz ham jang qilasiz. Keyin ▶ bosing.");requestAnimationFrame(loopB);}
