let MAN=null,MAUD=null,SMP={},SMPL=false,REV=null,ambI=null;
const SVOL={clash:.6,shot:.8,boom:1,arrow:.5,horse:.6,hurt:.7,horn:.8,cry:.5,win:1,lose:1};
try{fetch('music/manifest.json').then(r=>r.ok?r.json():null).then(m=>{if(m){MAN=m;if(m.battle&&typeof BFILES!=='undefined')m.battle.forEach(f=>BFILES.push(f));}}).catch(()=>{});}catch(e){}
function rev(){if(REV)return REV;const cv=ac.createConvolver(),n=(ac.sampleRate*1.6)|0,b=ac.createBuffer(2,n,ac.sampleRate);for(let c=0;c<2;c++){const d=b.getChannelData(c);for(let i=0;i<n;i++)d[i]=(Math.random()*2-1)*Math.pow(1-i/n,2.5);}cv.buffer=b;const g=ac.createGain();g.gain.value=.4;cv.connect(g);g.connect(ac.destination);REV=cv;return cv;}
function nr(t,d,v,f,ty,send){const n=Math.max(1,(ac.sampleRate*d)|0),b=ac.createBuffer(1,n,ac.sampleRate),a=b.getChannelData(0);for(let i=0;i<n;i++)a[i]=Math.random()*2-1;const u=ac.createBufferSource(),fl=ac.createBiquadFilter(),g=ac.createGain();fl.type=ty;fl.frequency.value=f;u.buffer=b;g.gain.setValueAtTime(v,t);g.gain.exponentialRampToValueAtTime(.001,t+d);u.connect(fl);fl.connect(g);g.connect(sg);if(send)g.connect(rev());u.start(t);}
function synth(k,t){
 if(k==='clash'){const f=500+Math.random()*500;[1,2.76,5.4].forEach((m,i)=>{const o=ac.createOscillator(),g=ac.createGain();o.frequency.value=f*m;g.gain.setValueAtTime(.12/(i+1),t);g.gain.exponentialRampToValueAtTime(.001,t+.45-.12*i);o.connect(g);g.connect(sg);o.start(t);o.stop(t+.5);});nr(t,.05,.35,3500,'highpass');return true;}
 if(k==='shot'){nr(t,.3,.55,900,'lowpass',true);tone(70,t,.12,'sine',.25,sg);return true;}
 if(k==='boom'){const o=ac.createOscillator(),g=ac.createGain();o.frequency.setValueAtTime(90,t);o.frequency.exponentialRampToValueAtTime(28,t+.6);g.gain.setValueAtTime(.9,t);g.gain.exponentialRampToValueAtTime(.001,t+.7);o.connect(g);g.connect(sg);g.connect(rev());o.start(t);o.stop(t+.75);nr(t,.9,.5,420,'lowpass',true);return true;}
 if(k==='arrow'){const n=(ac.sampleRate*.25)|0,b=ac.createBuffer(1,n,ac.sampleRate),a=b.getChannelData(0);for(let i=0;i<n;i++)a[i]=Math.random()*2-1;const u=ac.createBufferSource(),fl=ac.createBiquadFilter(),g=ac.createGain();fl.type='bandpass';fl.Q.value=2;fl.frequency.setValueAtTime(3500,t);fl.frequency.exponentialRampToValueAtTime(900,t+.25);g.gain.setValueAtTime(.001,t);g.gain.linearRampToValueAtTime(.3,t+.05);g.gain.exponentialRampToValueAtTime(.001,t+.25);u.buffer=b;u.connect(fl);fl.connect(g);g.connect(sg);u.start(t);return true;}
 if(k==='hurt'){const o=ac.createOscillator(),fl=ac.createBiquadFilter(),g=ac.createGain();o.type='sawtooth';o.frequency.setValueAtTime(230,t);o.frequency.exponentialRampToValueAtTime(130,t+.25);fl.type='bandpass';fl.frequency.value=650;g.gain.setValueAtTime(.2,t);g.gain.exponentialRampToValueAtTime(.001,t+.3);o.connect(fl);fl.connect(g);g.connect(sg);o.start(t);o.stop(t+.35);return true;}
 return synth2(k,t);}
function synth2(k,t){
 if(k==='horn'){[110,165,220].forEach((f,i)=>{const o=ac.createOscillator(),l=ac.createOscillator(),lg=ac.createGain(),g=ac.createGain(),lp=ac.createBiquadFilter();o.type='sawtooth';o.frequency.value=f;l.frequency.value=5;lg.gain.value=3;l.connect(lg);lg.connect(o.frequency);lp.type='lowpass';lp.frequency.value=1100;g.gain.setValueAtTime(.0001,t);g.gain.linearRampToValueAtTime(.08/(i+1),t+.2);g.gain.exponentialRampToValueAtTime(.0001,t+1.2);o.connect(lp);lp.connect(g);g.connect(sg);o.start(t);l.start(t);o.stop(t+1.3);l.stop(t+1.3);});return true;}
 if(k==='cry'){const f0=170+Math.random()*130,o=ac.createOscillator(),b1=ac.createBiquadFilter(),b2=ac.createBiquadFilter(),g=ac.createGain();o.type='sawtooth';o.frequency.setValueAtTime(f0,t);o.frequency.linearRampToValueAtTime(f0*(.8+Math.random()*.5),t+.5);b1.type=b2.type='bandpass';b1.frequency.value=650;b2.frequency.value=1150;g.gain.setValueAtTime(.0001,t);g.gain.linearRampToValueAtTime(.05,t+.08);g.gain.exponentialRampToValueAtTime(.0001,t+.55);o.connect(b1);o.connect(b2);b1.connect(g);b2.connect(g);g.connect(sg);o.start(t);o.stop(t+.6);return true;}
 if(k==='horse'){for(let i=0;i<4;i++){const tt=t+i*.075,o=ac.createOscillator(),g=ac.createGain();o.frequency.setValueAtTime(110,tt);o.frequency.exponentialRampToValueAtTime(60,tt+.08);g.gain.setValueAtTime(.18,tt);g.gain.exponentialRampToValueAtTime(.001,tt+.1);o.connect(g);g.connect(sg);o.start(tt);o.stop(tt+.12);}return true;}
 return false;}
function playSample(k,t){const L=SMP[k];if(!L||!L.length)return false;const s=ac.createBufferSource(),g=ac.createGain();s.buffer=L[(Math.random()*L.length)|0];g.gain.value=SVOL[k]||.8;s.playbackRate.value=.95+Math.random()*.1;s.connect(g);g.connect(sg);s.start(t);return true;}
function loadSamples(){if(SMPL||!MAN||!MAN.sfx||!ac)return;SMPL=true;for(const k in MAN.sfx){SMP[k]=[];for(const f of MAN.sfx[k])fetch(f).then(r=>r.arrayBuffer()).then(ab=>ac.decodeAudioData(ab)).then(b=>SMP[k].push(b)).catch(()=>{});}}
const _sfx0=sfx;
sfx=function(k){if(!ac||!mOn||ac.state!=='running')return;const t=ac.currentTime,cd={clash:.07,shot:.09,arrow:.09,boom:.22,hurt:.15,cry:.5,horse:.35}[k]||0;
 if(cd&&SC[k]&&t-SC[k]<cd)return;if(playSample(k,t)){SC[k]=t;return;}if(synth(k,t)){SC[k]=t;return;}_sfx0(k);};
function startMapAudio(){if(!mOn||MAUD||!MAN||!MAN.map||!MAN.map.length||inB)return;
 const next=()=>{MAUD=new Audio(MAN.map[(Math.random()*MAN.map.length)|0]);MAUD.volume=.55;MAUD.onended=()=>{MAUD=null;if(mOn&&!inB)next();};MAUD.play().catch(()=>{});};
 next();if(mg)mg.gain.value=.0001;}
const _mu0=music;music=function(){_mu0();startMapAudio();loadSamples();};
document.getElementById('mu').onclick=e=>{mOn=!mOn;e.target.textContent=mOn?'🎵':'🔇';if(mOn)music();
 if(ac){mg.gain.value=mOn?(MAUD?0.0001:(inB?0.25:0.5)):0;sg.gain.value=mOn?0.8:0;if(typeof mg2!=='undefined'&&mg2)mg2.gain.value=mOn?0.6:0;}
 if(MAUD){if(mOn&&!inB)MAUD.play().catch(()=>{});else MAUD.pause();}};
function stopAmb(){if(ambI){clearInterval(ambI);ambI=null;}}
function ambient(){if(!BT||BT.prep||BT.done||!ac||!mOn)return;const al=BT.al||[1,1],tot=al[0]+al[1];if(tot<2)return;
 if(Math.random()<Math.min(.9,tot/90))sfx('cry');let cav=0;for(const u of BT.U)if(u.alive&&u.t===2&&++cav>3)break;if(cav>3&&Math.random()<.5)sfx('horse');}
const _sbA=startBattle;startBattle=function(o){if(MAUD)MAUD.pause();_sbA(o);};
const _sfA=startFight;startFight=function(){_sfA();stopAmb();ambI=setInterval(ambient,650);};
const _fbA=finishB;finishB=function(){_fbA();stopAmb();};
const _abA=afterBattle;afterBattle=function(){_abA();stopAmb();if(MAUD){if(mOn)MAUD.play().catch(()=>{});if(ac)mg.gain.value=.0001;}};
const _inA=intro;intro=function(i){_inA(i);msg+=" | 🎯 G'alaba: dunyoning 90% i";mt=Date.now()+9000;hud();};
