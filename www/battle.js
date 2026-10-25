let ac=null,mg=null,mOn=true,nT=0,sP=0;
function tone(f,t,d,ty,v){const o=ac.createOscillator(),g=ac.createGain();o.type=ty;o.frequency.value=f;g.gain.setValueAtTime(.0001,t);g.gain.linearRampToValueAtTime(v,t+.02);g.gain.exponentialRampToValueAtTime(.0001,t+d);o.connect(g);g.connect(mg);o.start(t);o.stop(t+d+.05);}
function kick(t){const o=ac.createOscillator(),g=ac.createGain();o.frequency.setValueAtTime(120,t);o.frequency.exponentialRampToValueAtTime(40,t+.15);g.gain.setValueAtTime(.6,t);g.gain.exponentialRampToValueAtTime(.001,t+.25);o.connect(g);g.connect(mg);o.start(t);o.stop(t+.3);}
function snare(t){const n=(ac.sampleRate*.15)|0,b=ac.createBuffer(1,n,ac.sampleRate),d=b.getChannelData(0);for(let i=0;i<n;i++)d[i]=Math.random()*2-1;const u=ac.createBufferSource(),g=ac.createGain();u.buffer=b;g.gain.setValueAtTime(.25,t);g.gain.exponentialRampToValueAtTime(.001,t+.15);u.connect(g);g.connect(mg);u.start(t);}
const CH=[[62,65,69],[58,62,65],[60,64,67],[57,61,64]],BS=[38,34,36,33];
const ML=[[74,0,77,0,81,0,79,77],[77,0,74,0,70,0,72,74],[76,0,79,0,84,0,83,81],[81,0,79,0,77,0,76,73]];
const mf=m=>440*Math.pow(2,(m-69)/12);
function sched(){while(nT<ac.currentTime+.3){const bar=(sP>>3)&3,s=sP&7,sd=.3125;
 if(s===0){CH[bar].forEach(m=>tone(mf(m),nT,sd*7,'sawtooth',.025));}
 if(s===0||s===4)tone(mf(BS[bar]),nT,sd*3.5,'triangle',.2);
 const m=ML[bar][s];if(m)tone(mf(m),nT,sd*1.8,'square',.04);
 if(s===0||s===4)kick(nT);if(s===2||s===6)snare(nT);
 nT+=sd;sP++;}}
function music(){if(!mOn)return;if(!ac){ac=new (window.AudioContext||window.webkitAudioContext)();mg=ac.createGain();mg.gain.value=.5;const lp=ac.createBiquadFilter();lp.type='lowpass';lp.frequency.value=2200;mg.connect(lp);lp.connect(ac.destination);nT=ac.currentTime+.1;setInterval(sched,100);}if(ac.state==='suspended')ac.resume();}
document.getElementById('mu').onclick=e=>{mOn=!mOn;e.target.textContent=mOn?'🎵':'🔇';if(mOn)music();else if(ac)ac.suspend();};
const HP=[3,2.5,4,3,9],SP=[22,16,60,7,10],RG=[10,95,11,170,130],DM=[1,1.5,1.7,2.6,0],RL=[.6,1.7,.7,3.2,9];
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
function stepB(dt){const U=BT.U;BT.t+=dt;
 for(const u of U){if(!u.alive)continue;u.cd-=dt;
  if(BT.rout[u.s]){u.y+=(u.s?-1:1)*SP[u.t]*.8*dt;continue;}
  if(!u.tg||!u.tg.alive||(u.rt-=dt)<=0){u.tg=nearEnemy(u,U);u.rt=.6+Math.random()*.6;}
  const e=u.tg;if(!e)continue;
  const dx=e.x-u.x,dy=e.y-u.y,d=Math.hypot(dx,dy)||1;
  if(d>RG[u.t]){const v=SP[u.t]*dt;u.x+=dx/d*v+(Math.random()-.5)*6*dt;u.y+=dy/d*v;}
  else if(u.cd<=0&&DM[u.t]>0){let m=1;for(const s of BT.stars[u.s])if(s.alive&&Math.hypot(s.x-u.x,s.y-u.y)<90){m=1.25;break;}
   e.hp-=DM[u.t]*m*(.8+Math.random()*.4);u.cd=RL[u.t]*(.8+Math.random()*.4);BT.fl.push([u.x,u.y,e.x,e.y,u.t,.18]);
   if(e.hp<=0){e.alive=false;BT.dead.push([e.x,e.y]);}}}
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
 g.fillStyle='#0003';for(const d of BT.dead)g.fillRect(d[0]-2,d[1]-2,4,4);
 for(const u of BT.U){if(!u.alive)continue;
  const col=u.s?(BT.o.d===NEU?'#e80':'#e02020'):'#2c2';
  g.fillStyle=col;g.strokeStyle='#000';g.lineWidth=1.2;
  if(u.t===4){star(g,u.x,u.y,10,'#fd0',col);}
  else if(u.t===2){g.beginPath();g.ellipse(u.x,u.y,8,4.5,0,0,6.3);g.fill();g.stroke();}
  else if(u.t===3){g.fillRect(u.x-5,u.y-4,10,8);g.strokeRect(u.x-5,u.y-4,10,8);g.beginPath();g.moveTo(u.x,u.y);g.lineTo(u.x,u.y+(u.s?10:-10));g.stroke();}
  else{g.beginPath();g.arc(u.x,u.y,5,0,6.3);g.fill();g.stroke();if(u.t===1){g.beginPath();g.moveTo(u.x,u.y);g.lineTo(u.x,u.y+(u.s?9:-9));g.stroke();}}}
 for(const f of BT.fl){g.globalAlpha=Math.min(1,f[5]*6);
  if(f[4]===0||f[4]===2){g.fillStyle='#fe8';g.beginPath();g.arc(f[2],f[3],3,0,6.3);g.fill();}
  else{g.strokeStyle=f[4]===3?'#fa4':'#fff';g.lineWidth=f[4]===3?2:1;g.beginPath();g.moveTo(f[0],f[1]);g.lineTo(f[2],f[3]);g.stroke();}}
 g.globalAlpha=1;}
function setHd(){const o=BT.o,al=BT.al||[BT.na,BT.nd];
 BX.hd.innerHTML='🟩 <b>'+N[K[o.a]][0]+'</b> '+al[0]+'/'+BT.na+' 🎖'+NM[K[o.a]][1].join(', ')+'<br>🟥 <b>'+(o.d<NEU?N[K[o.d]][0]:'Mahalliy qabilalar')+'</b> '+al[1]+'/'+BT.nd+(o.d<NEU?' 🎖'+NM[K[o.d]][1].join(', '):'')+(o.fort?' 🏰':'')+'<br>'+(E.y+Math.floor(months/12))+'-yil';}
function finishB(){const sa=BT.al[0]/BT.na,sd=BT.al[1]/BT.nd,r=battleDone(BT.o,sa,sd),adv=sa-sd;
 BX.sb.style.display='none';BX.fb.style.display='none';BX.cb.style.display='inline-block';
 BX.rs.innerHTML=(adv>.05?"🏆 G'alaba!":adv<-.05?"💀 Mag'lubiyat":"⚖️ Durang")+" | Yo'qotish: "+r.lossA+" | Dushman: "+r.kill+"<br>"+(r.got?"🗺 Egallandi: "+r.got+" hudud (chuqurlik "+r.D+")":"Hudud egallanmadi");setHd();}
function mkb(t,f){const b=document.createElement('button');b.textContent=t;b.style.cssText='margin:4px;padding:10px 14px;font-size:15px;border:0;border-radius:8px';b.onclick=f;return b;}
function buildBX(){const d=document.createElement('div');d.style.cssText='position:fixed;inset:0;z-index:9;background:#000;display:none';
 const c=document.createElement('canvas');d.appendChild(c);
 const hd=document.createElement('div');hd.style.cssText='position:absolute;top:0;left:0;right:0;padding:10px;background:#000b;font-size:14px;line-height:1.5';
 const bt=document.createElement('div');bt.style.cssText='position:absolute;bottom:0;left:0;right:0;padding:8px;background:#000b;text-align:center;font-size:15px';
 d.appendChild(hd);d.appendChild(bt);document.body.appendChild(d);
 BX={box:d,cv:c,g:c.getContext('2d'),hd,bt};
 BX.rs=document.createElement('div');
 BX.sb=mkb('⏩ 1x',()=>{BT.spd=BT.spd===1?2:BT.spd===2?4:1;BX.sb.textContent='⏩ '+BT.spd+'x';});
 BX.fb=mkb('⏭ Yakunlash',()=>{for(let i=0;i<2000&&!BT.done;i++)stepB(.05);});
 BX.cb=mkb('✖ Yopish',()=>{BX.box.style.display='none';afterBattle();});
 bt.appendChild(BX.rs);bt.appendChild(BX.sb);bt.appendChild(BX.fb);bt.appendChild(BX.cb);}
function startBattle(o){if(!BX)buildBX();const bw=innerWidth,bh=innerHeight,d=devicePixelRatio||1;
 BX.cv.width=bw*d;BX.cv.height=bh*d;BX.cv.style.width=bw+'px';BX.cv.style.height=bh+'px';BX.g.setTransform(d,0,0,d,0,0);
 BX.box.style.display='block';BX.rs.innerHTML='';BX.sb.style.display='inline-block';BX.fb.style.display='inline-block';BX.cb.style.display='none';BX.sb.textContent='⏩ 1x';
 const k=Math.max(o.commit,o.Td)/110,na=Math.max(6,Math.round(o.commit/k)),nd=Math.max(6,Math.round(o.Td/k));
 const nsa=Math.min(3,NM[K[o.a]][1].length),nsd=o.d<NEU?Math.min(3,NM[K[o.d]][1].length):1;
 const fd=o.d<NEU?F[o.d]:[.8,.05,.15,0];
 const U=army(0,na,F[o.a],nsa,1).concat(army(1,nd,fd,nsd,o.fort?1.4:1));
 BT={o,U,na,nd,t:0,rout:[false,false],rt:[0,0],fl:[],dead:[],done:false,spd:1,fr:0,al:[na,nd],last:performance.now(),stars:[U.filter(u=>u.s===0&&u.t===4),U.filter(u=>u.s===1&&u.t===4)]};
 setHd();requestAnimationFrame(loopB);}
function loopB(now){if(!BT||BX.box.style.display==='none')return;const dt=Math.min(.05,(now-BT.last)/1000);BT.last=now;
 if(!BT.done)for(let i=0;i<BT.spd;i++)stepB(dt);
 drawB();if(++BT.fr%8===0)setHd();requestAnimationFrame(loopB);}
