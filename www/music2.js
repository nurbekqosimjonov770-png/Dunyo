const BTH=[
{n:"Karnay va nog'ora",bpm:108,r:50,sc:[0,1,4,5,7,8,10],tom:1,k:'x..x..x.x..x..x.',s:'....x.......x...',h:'................',bs:'0...0...0...0...',ml:'4...3...2.1.0...4...5...6.5.4...',bw:'triangle',bv:.2,lw:'sawtooth',lv:.05,ld:3},
{n:"Qal'a va nog'ora",bpm:118,r:52,sc:[0,2,3,5,7,8,10],tom:1,k:'x.....x.x.....x.',s:'....x.......x...',h:'.x.x.x.x.x.x.x.x',bs:'0..0..0.0..0..0.',ml:'4...5...6.5.4...3...4...5.4.3...',bw:'triangle',bv:.2,lw:'triangle',lv:.09,ld:2.4},
{n:"Nay va baraban",bpm:126,r:50,sc:[0,2,4,5,7,9,11],k:'x...x...x...x...',s:'x.xxx.x.x.xxx.x.',h:'................',bs:'0...4...0...4...',ml:'4.54.7.54.2.4...4.54.7.97.5.4...',bw:'triangle',bv:.18,lw:'square',lv:.035,ld:1.6},
{n:"Zambarak va zirh",bpm:80,r:36,bo:0,sc:[0,2,3,5,7,8,10],tom:1,k:'x.......x.......',s:'............x...',h:'.x..x..x..x..x..',bs:'0.......0...3...',os:'4.4.4.4.4.4.4.4.',ov:.025,ml:'................4.......3.......',bw:'sawtooth',bv:.12,lw:'sawtooth',lv:.06,ld:6},
{n:"Qahramonlik marshi",bpm:140,r:50,sc:[0,2,3,5,7,8,11],k:'x...x.x.x...x.x.',s:'....x.......x...',h:'.x.x.x.x.x.x.x.x',bs:'0...0...0...0...',os:'0.4.0.4.0.4.0.4.',ov:.035,ml:'4...4.5.7...5...4...4.5.8...7...',bw:'sawtooth',bv:.1,lw:'sawtooth',lv:.07,ld:2.6},
{n:"Kiber hujum",bpm:126,r:45,sc:[0,2,3,5,7,8,10],k:'x...x...x...x...',s:'....x.......x...',h:'..x...x...x...x.',bs:'0.0.0.0.0.0.0.3.',bw:'sawtooth',bv:.09,os:'0.2.4.2.0.2.4.7.',ov:.03,ml:'4.......3.......2.......4.5.....',lw:'square',lv:.05,ld:3},
{n:"Dengiz jangi",bpm:92,r:43,bo:0,sc:[0,2,3,5,7,8,10],tom:1,wave:1,k:'x.......x.......',s:'................',h:'................',bs:'0.......0.......',ml:'4.......5.......6.......5...3...',bw:'triangle',bv:.2,lw:'sawtooth',lv:.06,ld:5}
];
const nmx=(th,d,o)=>th.r+th.sc[d%th.sc.length]+12*(Math.floor(d/th.sc.length)+o);
let mg2=null,bsInt=null,bmOn=false,bfade=.6,bsT=0,bsS=0,BTHc=null,BAU=null,BFILES=[];
try{fetch('music/list.json').then(r=>r.ok?r.json():[]).then(a=>{if(Array.isArray(a))BFILES=a.filter(x=>typeof x==='string');}).catch(()=>{});}catch(e){}
function btom(t,v){const o=ac.createOscillator(),g=ac.createGain();o.frequency.setValueAtTime(95,t);o.frequency.exponentialRampToValueAtTime(48,t+.3);g.gain.setValueAtTime(v,t);g.gain.exponentialRampToValueAtTime(.001,t+.55);o.connect(g);g.connect(mg2);o.start(t);o.stop(t+.6);}
function bk(t,v){const o=ac.createOscillator(),g=ac.createGain();o.frequency.setValueAtTime(120,t);o.frequency.exponentialRampToValueAtTime(40,t+.15);g.gain.setValueAtTime(v,t);g.gain.exponentialRampToValueAtTime(.001,t+.28);o.connect(g);g.connect(mg2);o.start(t);o.stop(t+.33);}
function bsn(t,v){nz(t,.14,v,1800,'highpass',mg2);}
function bhat(t,v){nz(t,.04,v,7000,'highpass',mg2);}
function pickTheme(o){if(o.naval)return 6;const t=TSd&&TSd[0]?TSd[0].t:0;return t<=1?0:t<=3?1:t===4?2:t<=6?3:t===7?4:5;}
function bsched(){if(!bsInt)return;
 if(!bmOn){bfade*=.8;if(mg2)mg2.gain.value=bfade;if(bfade<.01){clearInterval(bsInt);bsInt=null;if(mg2)mg2.gain.value=0;}return;}
 if(BAU){BAU.volume=mOn?.6:0;return;}
 if(!ac||!BTHc||!mg2)return;
 mg2.gain.value=mOn?.6:0;mg.gain.value=.0001;
 const th=BTHc,sd=60/th.bpm/4;
 while(bsT<ac.currentTime+.3){const s=bsS,t=bsT;
  if(BT&&BT.prep){if(s%8===0)btom(t,.45);
   if(s%32===0){tone(mf(nmx(th,0,-1)),t,sd*28,'sawtooth',.03,mg2);tone(mf(nmx(th,4,-1)),t,sd*28,'sawtooth',.02,mg2);}}
  else{const m=s%16,ml=th.ml[s%32],bs=th.bs[m],os=th.os?th.os[m]:'.',kk=th.k[m],sn=th.s[m],ht=th.h[m];
   if(kk!=='.')(th.tom?btom:bk)(t,.7);
   if(sn!=='.')bsn(t,.22);
   if(ht!=='.')bhat(t,.08);
   if(bs!=='.')tone(mf(nmx(th,+bs,th.bo===undefined?-1:th.bo)),t,sd*3.2,th.bw,th.bv,mg2);
   if(os!=='.')tone(mf(nmx(th,+os,1)),t,sd*1.6,'sawtooth',th.ov||.03,mg2);
   if(ml!=='.')tone(mf(nmx(th,+ml,1)),t,sd*(th.ld||2.6),th.lw,th.lv,mg2);
   if(s%32===0&&th.wave)nz(t,2,.12,600,'lowpass',mg2);}
  bsT+=sd;bsS++;}}
function bmStart(o){if(!mOn)return;initAC();if(ac.state==='suspended')ac.resume();
 if(!mg2){const lp=ac.createBiquadFilter();lp.type='lowpass';lp.frequency.value=3800;mg2=ac.createGain();mg2.gain.value=0;mg2.connect(lp);lp.connect(ac.destination);}
 BTHc=BTH[pickTheme(o)];bmOn=true;bfade=.6;bsT=ac.currentTime+.15;bsS=0;
 if(BAU){BAU.pause();BAU=null;}
 if(BFILES.length){BAU=new Audio(BFILES[(Math.random()*BFILES.length)|0]);BAU.loop=true;BAU.volume=.6;BAU.play().catch(()=>{});mg.gain.value=.0001;}
 if(!bsInt)bsInt=setInterval(bsched,100);}
function bmStop(){bmOn=false;if(BAU){BAU.pause();BAU=null;}}
const _sb8=startBattle;startBattle=function(o){_sb8(o);try{bmStart(o);}catch(e){}};
const _sf8=startFight;startFight=function(){_sf8();bsS=Math.ceil(bsS/32)*32;};
const _fb8=finishB;finishB=function(){_fb8();bmStop();};
const _ab8=afterBattle;afterBattle=function(){bmStop();_ab8();};
