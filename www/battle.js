let ac=null,mg=null,sg=null,mOn=true,nT=0,sP=0,inB=false;const SC={};
function tone(f,t,d,ty,v,dst){const o=ac.createOscillator(),g=ac.createGain();o.type=ty;o.frequency.value=f;g.gain.setValueAtTime(.0001,t);g.gain.linearRampToValueAtTime(v,t+.02);g.gain.exponentialRampToValueAtTime(.0001,t+d);o.connect(g);g.connect(dst||mg);o.start(t);o.stop(t+d+.05);}
function kick(t){const o=ac.createOscillator(),g=ac.createGain();o.frequency.setValueAtTime(120,t);o.frequency.exponentialRampToValueAtTime(40,t+.15);g.gain.setValueAtTime(.6,t);g.gain.exponentialRampToValueAtTime(.001,t+.25);o.connect(g);g.connect(mg);o.start(t);o.stop(t+.3);}
function nz(t,d,v,f,ty,dst){const n=Math.max(1,(ac.sampleRate*d)|0),b=ac.createBuffer(1,n,ac.sampleRate),a=b.getChannelData(0);for(let i=0;i<n;i++)a[i]=Math.random()*2-1;const u=ac.createBufferSource(),fl=ac.createBiquadFilter(),g=ac.createGain();fl.type=ty;fl.frequency.value=f;u.buffer=b;g.gain.setValueAtTime(v,t);g.gain.exponentialRampToValueAtTime(.001,t+d);u.connect(fl);fl.connect(g);g.connect(dst||sg);u.start(t);}
function snare(t){nz(t,.15,.25,1800,'highpass',mg);}
const CH=[[62,65,69],[58,62,65],[60,64,67],[57,61,64]],BS=[38,34,36,33];
const ML=[[74,0,77,0,81,0,79,77],[77,0,74,0,70,0,72,74],[76,0,79,0,84,0,83,81],[81,0,79,0,77,0,76,73]];
const mf=m=>440*Math.pow(2,(m-69)/12);
function sched(){while(nT<ac.currentTime+.3){const bar=(sP>>3)&3,s=sP&7,sd=.3125;
 if(s===0){CH[bar].forEach(m=>tone(mf(m),nT,sd*7,'sawtooth',.025));}
 if(s===0||s===4)tone(mf(BS[bar]),nT,sd*3.5,'triangle',.2);
 const m=ML[bar][s];if(m)tone(mf(m),nT,sd*1.8,'square',.04);
 if(s===0||s===4)kick(nT);if(s===2||s===6)snare(nT);
 nT+=sd;sP++;}}
function initAC(){if(ac)return;ac=new (window.AudioContext||window.webkitAudioContext)();const lp=ac.createBiquadFilter();lp.type='lowpass';lp.frequency.value=2200;mg=ac.createGain();mg.gain.value=.5;mg.connect(lp);lp.connect(ac.destination);sg=ac.createGain();sg.gain.value=.8;sg.connect(ac.destination);nT=ac.currentTime+.1;setInterval(sched,100);}
function music(){if(!mOn)return;initAC();if(ac.state==='suspended')ac.resume();}
function sfx(k){if(!ac||!mOn||ac.state!=='running')return;const t=ac.currentTime,cd={clash:.07,shot:.09,arrow:.09,boom:.22,hurt:.15}[k]||0;if(cd&&SC[k]&&t-SC[k]<cd)return;SC[k]=t;
 if(k==='clash'){nz(t,.07,.3,2800,'bandpass');tone(800+Math.random()*600,t,.07,'square',.04,sg);}
 else if(k==='shot'){nz(t,.2,.45,1000,'lowpass');}
 else if(k==='arrow'){nz(t,.12,.2,5000,'highpass');}
 else if(k==='boom'){const o=ac.createOscillator(),g=ac.createGain();o.frequency.setValueAtTime(90,t);o.frequency.exponentialRampToValueAtTime(30,t+.4);g.gain.setValueAtTime(.8,t);g.gain.exponentialRampToValueAtTime(.001,t+.5);o.connect(g);g.connect(sg);o.start(t);o.stop(t+.55);nz(t,.3,.4,500,'lowpass');}
 else if(k==='hurt'){tone(160,t,.2,'sawtooth',.2,sg);}
 else if(k==='horn'){[0,.35,.7].forEach((d,j)=>tone(j===2?330:220,t+d,.4,'sawtooth',.1,sg));}
 else if(k==='win'){[392,494,587,784].forEach((f,j)=>tone(f,t+j*.18,.45,'triangle',.18,sg));}
 else if(k==='lose'){[392,330,262,196].forEach((f,j)=>tone(f,t+j*.25,.5,'sawtooth',.12,sg));}
 else if(k==='coin'){tone(1200,t,.08,'square',.06,sg);tone(1800,t+.08,.12,'square',.06,sg);}}
document.getElementById('mu').onclick=e=>{mOn=!mOn;e.target.textContent=mOn?'🎵':'🔇';if(mOn)music();if(ac){mg.gain.value=mOn?(inB?.25:.5):0;sg.gain.value=mOn?.8:0;}};
const HP=[3,2.5,4,3,9,60],SP=[22,16,60,7,10,0],RG=[10,95,11,170,130,0],DM=[1,1.5,1.7,2.6,0,0],RL=[.6,1.7,.7,3.2,9,0];
let BT=null,BX=null;
function split(n,f){const r=f.map(x=>x*n),a=r.map(Math.floor);let left=n-a.reduce((s,x)=>s+x,0);const idx=r.map((x,i)=>[x-a[i],i]).sort((p,q)=>q[0]-p[0]);for(let i=0;left>0;i=(i+1)%4,left--)a[idx[i][1]]++;return a;}
function mk(s,t,x,y,m){return{s,t,x,y,hp:HP[t]*m,alive:true,cd:Math.random(),tg:null,rt:0};}
function army(side,n,f,ns,hpm){const bw=innerWidth,bh=innerHeight,mid=bh/2,dir=side?-1:1,front=mid+dir*80,cxm=bw/2;
 const cn=split(n,f),L=[],inf=[];
 [0,1,3].forEach(t=>{for(let i=0;i<cn[t];i++)inf.push(t);});
 const cols=Math.max(4,Math.min(14,Math.ceil(Math.sqrt(inf.length*1.6)))),sp=Math.min(15,(bw-40)/(cols+6));
 inf.forEach((t,i)=>{const r=Math.floor(i/cols),cl=i%cols;L.push(mk(side,t,cxm+(cl-(cols-1)/2)*sp,front+dir*(r*sp+10),hpm));});
 for(let i=0;i<cn[2];i++){const sd=i%2?1:-1;L.push(mk(side,2,cxm+sd*(cols*sp/2+24+Math.floor(i/4)*sp),front+dir*(Math.floor((i%4)/2)*sp+6),hpm));}
 for(let i=0;i<ns;i++)L.push(mk(side,4,cxm+(i-(ns-1)/2)*70,front+dir*(sp*2.5),hpm));
 return L;}
function nearEnemy(u,U){let b=null,bd=1e12;for(const e of U){if(!e.alive||e.s===u.s)continue;const d=(e.x-u.x)**2+(e.y-u.y)**2;if(d<bd){bd=d;b=e;}}return b;}
function toast(t){if(!BX)return;BX.ms.textContent=t;BX.ms.style.display='block';clearTimeout(BX._t);BX._t=setTimeout(()=>{BX.ms.style.display='none';},3500);}
function hit(e,dmg,by){if(!e.alive)return;if(e.hero&&BT.hero&&BT.hero.block)dmg*=.25;e.hp-=dmg;if(e.hero)sfx('hurt');
 if(e.hp<=0){e.alive=false;BT.dead.push([e.x,e.y]);if(by==='hero'&&BT.hero)BT.hero.kills++;
  if(e.hero&&BT.hero){BT.hero.dead=true;BX.ctl.style.display='none';BX.bars.style.display='none';BX.sb.style.display='inline-block';BX.fb.style.display='inline-block';toast("💀 Siz halok bo'ldingiz! Qo'shin jang qilmoqda...");}}}
function heroAct(k){const H0=BT.hero;if(!H0||H0.dead||H0.acd>0)return;const u=H0.u,cost={sword:10,spear:14,bow:8}[k];
 if(H0.stam<cost||(k==='bow'&&H0.arrows<=0))return;
 const reach=k==='sword'?(H0.mount?26:22):k==='spear'?(H0.mount?54:44):240;
 let best=null,bd=1e9;for(const e of BT.U){if(!e.alive||e.s===0)continue;const d=Math.hypot(e.x-u.x,e.y-u.y);if(d<reach&&d<bd){bd=d;best=e;}}
 if(k==='bow'&&!best)return;
 H0.acd=k==='bow'?1:k==='spear'?.8:.45;H0.stam-=cost;if(k==='bow')H0.arrows--;
 if(best){const mv=Math.hypot(H0.jx,H0.jy)>.3,dmg=k==='sword'?4*(H0.mount?1.25:1):k==='spear'?5*(H0.mount&&mv?2:1):3.5;hit(best,dmg,'hero');BT.fl.push([u.x,u.y,best.x,best.y,k==='bow'?1:0,.18]);sfx(k==='bow'?(E.y<1500?'arrow':'shot'):'clash');}
 else BT.fl.push([u.x,u.y,u.x+H0.fx*reach*.5,u.y+H0.fy*reach*.5,0,.12]);}
function heroStep(dt){const H0=BT.hero;if(!H0||H0.dead)return;const u=H0.u;H0.acd=Math.max(0,H0.acd-dt);
 const m=Math.hypot(H0.jx,H0.jy),sp=(H0.mount?(H0.stam>0?95:50):42)*(H0.block?.5:1);
 if(m>.08){const k=Math.min(1,m);u.x+=H0.jx/m*sp*k*dt;u.y+=H0.jy/m*sp*k*dt;H0.fx=H0.jx/m;H0.fy=H0.jy/m;}
 u.x=Math.max(8,Math.min(innerWidth-8,u.x));u.y=Math.max(130,Math.min(innerHeight-70,u.y));
 if(H0.block){H0.stam-=8*dt;if(H0.stam<=0){H0.stam=0;H0.block=false;}}
 else if(H0.mount&&m>.5)H0.stam=Math.max(0,H0.stam-3*dt);
 else H0.stam=Math.min(100,H0.stam+12*dt);
 if(H0.hold)heroAct(H0.hold);}
function stepB(dt){if(BT.prep||BT.done)return;const U=BT.U;BT.t+=dt;heroStep(dt);
 for(const u of U){if(!u.alive||u.hero)continue;u.cd-=dt;
  if(BT.rout[u.s]){u.y+=(u.s?-1:1)*SP[u.t]*.8*dt;continue;}
  let cm=u.s===0?BT.cmd:0;
  if(cm===2){u.y=Math.min(innerHeight-75,u.y+SP[u.t]*.8*dt);continue;}
  const hl=BT.hero&&!BT.hero.dead?BT.hero.u:null;if(cm===3&&!hl)cm=0;
  if(!u.tg||!u.tg.alive||(u.rt-=dt)<=0){u.tg=nearEnemy(u,U);u.rt=.6+Math.random()*.6;}
  const e=u.tg;if(!e)continue;
  const dx=e.x-u.x,dy=e.y-u.y,d=Math.hypot(dx,dy)||1;
  if(d>RG[u.t]){if(cm===1)continue;let tx=dx,ty=dy,dd=d;if(cm===3){const hx=hl.x-u.x,hy=hl.y-u.y,hd=Math.hypot(hx,hy);if(hd>90){tx=hx;ty=hy;dd=hd;}}
   const v=SP[u.t]*dt;u.x+=tx/dd*v+(Math.random()-.5)*6*dt;u.y+=ty/dd*v;}
  else if(u.cd<=0&&DM[u.t]>0){let m=1;for(const s of BT.stars[u.s])if(s.alive&&Math.hypot(s.x-u.x,s.y-u.y)<90){m=1.25;break;}
   if(u.s===0&&(u.t===1||u.t===3))m*=BT.navy;
   u.cd=RL[u.t]*(.8+Math.random()*.4);BT.fl.push([u.x,u.y,e.x,e.y,u.t,.18]);
   sfx(u.t===3?'boom':u.t===1?(E.y<1500?'arrow':'shot'):'clash');
   hit(e,DM[u.t]*m*(.8+Math.random()*.4),'u');}}
 if(BT.o.sea&&BT.sx.length){BT.shT-=dt;if(BT.shT<=0){BT.shT=2.2/BT.sx.length+.6;const cs=U.filter(e=>e.alive&&e.s===1&&e.t<4);if(cs.length){const e=cs[(Math.random()*cs.length)|0],sx=BT.sx[(Math.random()*BT.sx.length)|0];hit(e,2.4,'ship');BT.fl.push([sx,innerHeight/2,e.x,e.y,3,.25]);sfx('boom');}}}
 BT.fl=BT.fl.filter(f=>(f[5]-=dt)>0);
 let a0=0,a1=0;for(const u of U)if(u.alive&&u.t<4){if(u.s)a1++;else a0++;}BT.al=[a0,a1];
 if(a0<BT.na*.2)BT.rout[0]=true;if(a1<BT.nd*.2)BT.rout[1]=true;
 if(BT.rout[0])BT.rt[0]+=dt;if(BT.rout[1])BT.rt[1]+=dt;
 if(!BT.done&&(a0===0||a1===0||BT.t>45||BT.rt[0]>3||BT.rt[1]>3)){BT.done=true;finishB();}}
function star(g,x,y,r,fill,line){g.beginPath();for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5,rr=i%2?r*.45:r;g.lineTo(x+Math.cos(a)*rr,y+Math.sin(a)*rr);}g.closePath();g.fillStyle=fill;g.fill();g.lineWidth=2;g.strokeStyle=line;g.stroke();}
function drawB(){const g=BX.g,bw=innerWidth,bh=innerHeight,mid=bh/2;
 g.fillStyle='#c9b77a';g.fillRect(0,0,bw,bh);
 g.lineCap='round';g.strokeStyle='#5b8fa8';g.lineWidth=26;g.beginPath();g.moveTo(0,mid);for(let x=0;x<=bw;x+=20)g.lineTo(x,mid+Math.sin(x/37+BT.t*.3)*12);g.stroke();
 g.strokeStyle='#7fb0c4';g.lineWidth=16;g.stroke();
 g.textAlign='center';g.textBaseline='middle';
 if(BT.o.sea)for(const x of BT.sx){g.font='26px sans-serif';g.fillStyle='#fff';g.fillText('⛵',x,mid+Math.sin(BT.t*2+x)*3);}
 g.fillStyle='#0003';for(const d of BT.dead)g.fillRect(d[0]-2,d[1]-2,4,4);
 for(const u of BT.U){if(!u.alive||u.hero)continue;
  const col=u.s?(BT.o.d===NEU?'#e80':'#e02020'):'#2c2';
  g.fillStyle=col;g.strokeStyle='#000';g.lineWidth=1.2;
  if(u.t===4){star(g,u.x,u.y,10,'#fd0',col);}
  else if(u.t===2){g.beginPath();g.ellipse(u.x,u.y,8,4.5,0,0,6.3);g.fill();g.stroke();}
  else if(u.t===3){g.fillRect(u.x-5,u.y-4,10,8);g.strokeRect(u.x-5,u.y-4,10,8);g.beginPath();g.moveTo(u.x,u.y);g.lineTo(u.x,u.y+(u.s?10:-10));g.stroke();}
  else{g.beginPath();g.arc(u.x,u.y,5,0,6.3);g.fill();g.stroke();if(u.t===1){g.beginPath();g.moveTo(u.x,u.y);g.lineTo(u.x,u.y+(u.s?9:-9));g.stroke();}}}
 for(let s=0;s<2;s++){const st=BT.stars[s].find(u=>u.alive);if(st)flag(g,st.x+12,st.y+2,s?BT.o.d:BT.o.a,16,10);}
 for(const f of BT.fl){g.globalAlpha=Math.min(1,f[5]*6);
  if(f[4]===0||f[4]===2){g.fillStyle='#fe8';g.beginPath();g.arc(f[2],f[3],3,0,6.3);g.fill();}
  else{g.strokeStyle=f[4]===3?'#fa4':'#fff';g.lineWidth=f[4]===3?2:1;g.beginPath();g.moveTo(f[0],f[1]);g.lineTo(f[2],f[3]);g.stroke();}}
 g.globalAlpha=1;
 const H0=BT.hero;if(H0&&!H0.dead){const u=H0.u,p=1+Math.sin(Date.now()/200)*.15,a=Math.atan2(H0.fy,H0.fx);
  g.strokeStyle='#ff0';g.lineWidth=2;g.beginPath();g.arc(u.x,u.y,14*p,0,6.3);g.stroke();
  g.fillStyle='#fc0';g.strokeStyle='#000';g.lineWidth=1.5;
  if(H0.mount){g.beginPath();g.ellipse(u.x,u.y,11,6,a,0,6.3);g.fill();g.stroke();}
  g.beginPath();g.arc(u.x,u.y,6,0,6.3);g.fill();g.stroke();
  g.strokeStyle='#fff';g.lineWidth=3;g.beginPath();g.moveTo(u.x,u.y);g.lineTo(u.x+H0.fx*16,u.y+H0.fy*16);g.stroke();
  if(H0.block){g.strokeStyle='#8cf';g.lineWidth=4;g.beginPath();g.arc(u.x,u.y,12,a-.9,a+.9);g.stroke();}
  g.fillStyle='#fff';g.strokeStyle='#000';g.lineWidth=3;g.font='bold 11px sans-serif';g.strokeText('MEN',u.x,u.y-22);g.fillText('MEN',u.x,u.y-22);}}
function setHd(){const o=BT.o,al=BT.al;
 BX.hd.innerHTML=emb(o.a)+' <b>'+N[K[o.a]][0]+'</b> '+al[0]+'/'+BT.na+' 🎖'+NM[K[o.a]][1].join(', ')+'<br>'+(o.d<NEU?emb(o.d)+' <b>'+N[K[o.d]][0]+'</b> ':'🏴 <b>Mahalliy qabilalar</b> ')+al[1]+'/'+BT.nd+(o.d<NEU?' 🎖'+NM[K[o.d]][1].join(', '):'')+(o.fort?' 🏰':'')+'<br>'+(E.y+Math.floor(months/12))+'-yil'+(o.sea?' | 🌊 Dengizdan desant'+(o.ships?' ⛵'+o.ships:''):'');
 BX.hd.appendChild(BX.rb);BX.gb.style.width=(al[0]/((al[0]+al[1])||1)*100)+'%';}
function finishB(){const sa=BT.al[0]/BT.na,sd=BT.al[1]/BT.nd,H0=BT.hero,bonus=H0?Math.min(3,Math.floor(H0.kills/4)):0,r=battleDone(BT.o,sa,sd,bonus),adv=sa-sd;
 BX.sb.style.display='none';BX.fb.style.display='none';BX.cm.style.display='none';BX.ctl.style.display='none';BX.bars.style.display='none';BX.cb.style.display='inline-block';
 sfx(adv>.05?'win':'lose');
 BX.rs.innerHTML=(adv>.05?"🏆 G'alaba!":adv<-.05?"💀 Mag'lubiyat":"⚖️ Durang")+" | Yo'qotish: "+r.lossA+" | Dushman: "+r.kill+(H0?" | 🗡 Siz: "+H0.kills+" ta"+(bonus?" (+"+bonus+" chuqurlik)":""):"")+"<br>"+(r.got?"🗺 Egallandi: "+r.got+" hudud (chuqurlik "+r.D+")":"Hudud egallanmadi");setHd();}
function dv(css){const d=document.createElement('div');d.style.cssText=css;return d;}
function mkb(t,f,css){const b=document.createElement('button');b.textContent=t;b.style.cssText='margin:3px;padding:9px 12px;font-size:15px;border:0;border-radius:8px;'+(css||'');b.onclick=f;return b;}
function bar(col){const o=dv('width:130px;height:10px;background:#0008;border:1px solid #fff6;margin:3px 0'),i=dv('height:100%;width:100%;background:'+col);o.appendChild(i);o._i=i;return o;}
function startFight(){BT.prep=false;BX.pb.style.display='none';BX.hb.style.display='none';BX.cm.style.display='flex';sfx('horn');BX.ms.style.display='none';
 if(BT.hero){BX.ctl.style.display='block';BX.bars.style.display='block';BX.sb.style.display='none';BX.fb.style.display='none';}
 else{BX.sb.style.display='inline-block';BX.fb.style.display='inline-block';}}
function toggleHero(){const bw=innerWidth,mid=innerHeight/2;
 if(BT.hero){BT.U=BT.U.filter(u=>u!==BT.hero.u);BT.hero=null;BX.hb.textContent="🗡 Men ham jang qilaman: YO'Q";}
 else{const hu=mk(0,5,bw/2,mid+75,1);hu.hero=true;BT.U.push(hu);BT.hero={u:hu,mount:false,block:false,stam:100,arrows:30,kills:0,acd:0,jx:0,jy:0,fx:0,fy:-1,hold:null,dead:false};BX.hb.textContent="🗡 Men ham jang qilaman: HA ✅";toast("Siz qo'shin safida jang qilasiz. Chapda yuring, o'ngdagi tugmalar bilan uring.");}}
function buildBX(){
 const box=dv('position:fixed;inset:0;z-index:9;background:#000;display:none;touch-action:none;user-select:none;-webkit-user-select:none');
 const c=document.createElement('canvas');box.appendChild(c);
 const hd=dv('position:absolute;top:0;left:0;right:0;padding:8px 10px;background:#000b;font-size:13px;line-height:1.5'),rb=dv('height:6px;background:#c22;margin-top:4px;display:flex'),gb=dv('background:#2c2;width:50%');rb.appendChild(gb);
 const ms=dv('position:absolute;top:132px;left:10px;right:10px;padding:8px;background:#000c;border-radius:8px;text-align:center;font-size:14px;display:none');
 const bars=dv('position:absolute;top:172px;left:8px;display:none;font-size:12px'),hp=bar('#3c3'),st=bar('#39f'),ar=dv('');bars.appendChild(hp);bars.appendChild(st);bars.appendChild(ar);
 const cm=dv('position:absolute;top:172px;right:8px;display:none;gap:4px');
 const bt=dv('position:absolute;bottom:0;left:0;right:0;padding:6px;background:#000b;text-align:center;font-size:14px');
 const ctl=dv('position:absolute;left:0;right:0;bottom:70px;height:190px;display:none;pointer-events:none');
 const js=dv('position:absolute;left:14px;bottom:0;width:110px;height:110px;border-radius:50%;background:#fff2;border:2px solid #fff5;pointer-events:auto'),kn=dv('position:absolute;left:35px;top:35px;width:40px;height:40px;border-radius:50%;background:#fffb');js.appendChild(kn);
 const jm=e=>{const r=js.getBoundingClientRect();let dx=e.clientX-(r.left+55),dy=e.clientY-(r.top+55);const m=Math.hypot(dx,dy),R=45;if(m>R){dx*=R/m;dy*=R/m;}kn.style.left=(35+dx)+'px';kn.style.top=(35+dy)+'px';if(BT&&BT.hero){BT.hero.jx=dx/R;BT.hero.jy=dy/R;}};
 const jr=()=>{js._on=false;kn.style.left='35px';kn.style.top='35px';if(BT&&BT.hero){BT.hero.jx=0;BT.hero.jy=0;}};
 js.addEventListener('pointerdown',e=>{e.preventDefault();js.setPointerCapture(e.pointerId);js._on=true;jm(e);});
 js.addEventListener('pointermove',e=>{if(js._on)jm(e);});
 js.addEventListener('pointerup',jr);js.addEventListener('pointercancel',jr);
 ctl.appendChild(js);
 const ab=(t,r,b,fn,up)=>{const x=dv('position:absolute;right:'+r+'px;bottom:'+b+'px;width:58px;height:58px;border-radius:50%;background:#000a;border:2px solid #fc6;font-size:26px;text-align:center;line-height:54px;color:#fff;pointer-events:auto');x.textContent=t;x.addEventListener('pointerdown',e=>{e.preventDefault();fn();});const u=()=>{if(up)up();};x.addEventListener('pointerup',u);x.addEventListener('pointercancel',u);x.addEventListener('pointerleave',u);ctl.appendChild(x);return x;};
 const hold=k=>()=>{if(BT&&BT.hero)BT.hero.hold=k;},rel=k=>()=>{if(BT&&BT.hero&&BT.hero.hold===k)BT.hero.hold=null;};
 ab('🗡',80,0,hold('sword'),rel('sword'));ab('🔱',8,0,hold('spear'),rel('spear'));ab('🏹',80,62,hold('bow'),rel('bow'));
 ab('🛡',8,62,()=>{if(BT&&BT.hero&&BT.hero.stam>5)BT.hero.block=true;},()=>{if(BT&&BT.hero)BT.hero.block=false;});
 ab('🐎',44,124,()=>{if(BT&&BT.hero){BT.hero.mount=!BT.hero.mount;toast(BT.hero.mount?'Otga mindingiz':'Otdan tushdingiz');}});
 const cms=['⚔️','🛡','🏃','🚩'],cmn=['Hujum!','Ushlab turing','Ortga chekining','Menga ergashing'];
 const cb2=cms.map((t,i)=>{const b=mkb(t,()=>{BT.cmd=i;cb2.forEach((x,j)=>x.style.background=j===i?'#fc0':'#000a');toast('Buyruq: '+cmn[i]);sfx('horn');},'width:44px;height:44px;padding:0;font-size:22px;border-radius:50%;background:#000a;margin:0');cm.appendChild(b);return b;});
 const rs=dv(''),pb=mkb('▶ Boshlash',startFight,'background:#2a2;color:#fff'),hb=mkb("🗡 Men ham jang qilaman: YO'Q",toggleHero),sb=mkb('⏩ 1x',()=>{BT.spd=BT.spd===1?2:BT.spd===2?4:1;sb.textContent='⏩ '+BT.spd+'x';}),
  fb=mkb('⏭ Yakunlash',()=>{for(let i=0;i<2000&&!BT.done;i++)stepB(.05);if(!BT.done){BT.done=true;finishB();}}),
  cb=mkb('✖ Yopish',()=>{box.style.display='none';inB=false;if(ac)mg.gain.value=mOn?.5:0;BT=null;afterBattle();});
 [rs,pb,hb,sb,fb,cb].forEach(x=>bt.appendChild(x));
 [hd,ms,bars,cm,ctl,bt].forEach(x=>box.appendChild(x));document.body.appendChild(box);
 BX={box,cv:c,g:c.getContext('2d'),hd,rb,gb,ms,bars,hp,st,ar,cm,cb2,ctl,bt,rs,pb,hb,sb,fb,cb};}
function startBattle(o){if(!BX)buildBX();const bw=innerWidth,bh=innerHeight,d=devicePixelRatio||1;
 BX.cv.width=bw*d;BX.cv.height=bh*d;BX.cv.style.width=bw+'px';BX.cv.style.height=bh+'px';BX.g.setTransform(d,0,0,d,0,0);
 BX.box.style.display='block';inB=true;if(ac)mg.gain.value=mOn?.25:0;
 BX.rs.innerHTML='';BX.pb.style.display='inline-block';BX.hb.style.display='inline-block';BX.sb.style.display='none';BX.fb.style.display='none';BX.cb.style.display='none';BX.cm.style.display='none';BX.ctl.style.display='none';BX.bars.style.display='none';BX.sb.textContent='⏩ 1x';BX.hb.textContent="🗡 Men ham jang qilaman: YO'Q";
 BX.cb2.forEach((x,j)=>x.style.background=j===0?'#fc0':'#000a');
 const k=Math.max(o.commit,o.Td)/110,na=Math.max(6,Math.round(o.commit/k)),nd=Math.max(6,Math.round(o.Td/k));
 const nsa=Math.min(3,NM[K[o.a]][1].length),nsd=o.d<NEU?Math.min(3,NM[K[o.d]][1].length):1;
 const fd=o.d<NEU?F[o.d]:[.8,.05,.15,0];
 const U=army(0,na,F[o.a],nsa,o.sea?.9:1).concat(army(1,nd,fd,nsd,o.fort?1.4:1));
 const ns=o.sea?Math.min(6,o.ships||0):0,sx=[];for(let i=0;i<ns;i++)sx.push(bw*(i+1)/(ns+1));
 BT={o,U,na,nd,t:0,prep:true,cmd:0,hero:null,navy:1+Math.min(.5,ns*.1),sx,shT:2,rout:[false,false],rt:[0,0],fl:[],dead:[],done:false,spd:1,fr:0,al:[na,nd],last:performance.now(),stars:[U.filter(u=>u.s===0&&u.t===4),U.filter(u=>u.s===1&&u.t===4)]};
 setHd();toast("Tayyorgarlik: xohlasangiz 🗡 bilan o'zingiz ham jang qilasiz. Keyin ▶ bosing.");requestAnimationFrame(loopB);}
function updUI(){if(++BT.fr%8===0)setHd();const H0=BT.hero;if(H0){BX.hp._i.style.width=Math.max(0,H0.u.hp/60*100)+'%';BX.st._i.style.width=H0.stam+'%';BX.ar.textContent='🏹 '+H0.arrows+'  💀 '+H0.kills+(H0.mount?'  🐎':'');}}
function loopB(now){if(!BT||BX.box.style.display==='none')return;const dt=Math.min(.05,(now-BT.last)/1000);BT.last=now;
 if(!BT.prep&&!BT.done)for(let i=0;i<BT.spd;i++)stepB(dt);
 drawB();updUI();requestAnimationFrame(loopB);}
