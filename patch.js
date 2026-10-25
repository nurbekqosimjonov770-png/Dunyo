const fs=require('fs');let s=fs.readFileSync('www/index.html','utf8');
function R(a,b){if(s.split(a).length!==2){console.log('TOPILMADI:',a.slice(0,50));process.exit(1);}s=s.split(a).join(b);}
R(`<button id="sp">1x</button>`,`<button id="mu">🎵</button><button id="sp">1x</button>`);
R(`mt=0,st=[0,0];`,`mt=0,st=[0,0],LB=[];`);
R(`else og.fillRect(s[0]*S-1,s[1]*S,w,S);}}`,`else og.fillRect(s[0]*S-1,s[1]*S,w,S);}labels();}`);
R(`cx.fillText(tr[p],x,y);}}}`,`cx.fillText(tr[p],x,y);}}
 if(c<7){cx.textAlign='center';cx.textBaseline='middle';cx.lineWidth=3;cx.strokeStyle='#000c';cx.fillStyle='#fff';
  for(const L of LB){const nm=N[L[0]][0].toUpperCase(),f=Math.min(26,Math.sqrt(L[3]*55)*c*.8/(.68*nm.length));if(f<9)continue;
   const x=ox+(L[1]+.5)*c,y=oy+(L[2]+.5)*c;if(x<-50||y<-50||x>innerWidth+50||y>innerHeight+50)continue;
   cx.font='bold '+f+'px sans-serif';cx.strokeText(nm,x,y);cx.fillText(nm,x,y);}}}`);
R(`center(k);start();tick();}`,`center(k);start();tick();music();}`);
R(`window.addEventListener('resize',fit);`,`function labels(){const seen=new Uint8Array(np);LB=[];
 for(let p=0;p<np;p++){if(seen[p]||own[p]==='-')continue;const o=own[p],q=[p];seen[p]=1;
  for(let i=0;i<q.length;i++)for(const n of A[q[i]])if(!seen[n]&&own[n]===o){seen[n]=1;q.push(n);}
  if(q.length<3)continue;let mx=0,my=0;for(const k of q){mx+=P[k][1];my+=P[k][2];}mx/=q.length;my/=q.length;
  let b=q[0],bd=1e9;for(const k of q){const d=(P[k][1]-mx)**2+(P[k][2]-my)**2;if(d<bd){bd=d;b=k;}}
  LB.push([o,P[b][1],P[b][2],q.length]);}}
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
window.addEventListener('resize',fit);`);
fs.writeFileSync('www/index.html',s);console.log('TAYYOR');
