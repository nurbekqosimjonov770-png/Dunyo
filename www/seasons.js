(function(){
const SN=['❄️ Qish','🌱 Bahor','☀️ Yoz','🍂 Kuz'],SE=["Qish: qo'shin sekin yuradi, hujumlar kamayadi, o'sish yarmiga tushadi","Bahor: yomg'ir, o'q va to'p aniqligi pasayishi mumkin","Yoz: o'sish tez, yurishlar qulay","Kuz: tuman, ko'rish masofasi qisqarishi mumkin"];
const ssn=()=>{const m=months%12;return m<2||m===11?0:m<5?1:m<8?2:3;};
const _dr7=draw;draw=function(){_dr7();if(me<0)return;const s=ssn(),c=c0*sc,w=W*c,h=H*c;
 if(s===0){const g=cx.createLinearGradient(0,oy,0,oy+h*.55);g.addColorStop(0,'rgba(235,245,255,.42)');g.addColorStop(1,'rgba(235,245,255,0)');cx.fillStyle=g;cx.fillRect(ox,oy,w,h*.55);}
 else if(s===3){cx.fillStyle='rgba(255,140,30,.07)';cx.fillRect(ox,oy,w,h);}
 else if(s===1){cx.fillStyle='rgba(80,200,90,.05)';cx.fillRect(ox,oy,w,h);}
 else{cx.fillStyle='rgba(255,220,120,.04)';cx.fillRect(ox,oy,w,h);}};
const _hu5=hud;hud=function(){_hu5();if(me>=0&&Date.now()>=mt)info.textContent+=' | '+SN[ssn()];};
const _tk5=tick;tick=function(){const s0=ssn();_tk5();if(!over&&me>=0&&ssn()!==s0){msg=SN[ssn()]+' boshlandi. '+SE[ssn()];mt=Date.now()+7000;hud();}};
if(typeof armySp==='function'){const _as2=armySp;armySp=function(){const s=ssn();return _as2()*(s===0?.7:s===1?.92:1);};}
if(typeof growX==='function'){const _gx=growX;growX=function(i){const b=T[i];_gx(i);const d=T[i]-b;if(d>0){const s=ssn();T[i]=b+d*(s===0?.5:s===2?1.15:1);}};}
{const _aw3=autoWar;autoWar=function(a,d,n,c,Td){if(a!==me&&ssn()===0&&Math.random()<.35)return 0;return _aw3(a,d,n,c,Td);};}
const mod=(t,f)=>Object.assign({},t,f(t));
const _sb11=startBattle;startBattle=function(o){_sb11(o);const s=ssn(),la=TOP-((o.cell/W)|0)-.5;let w=0;
 if(s===0&&la>30)w=1;else if(s===1&&Math.random()<.55)w=2;else if(s===3&&Math.random()<.4)w=3;
 BT.wx=w;if(w&&TSd){
  if(w===1)TSd=TSd.map(t=>mod(t,x=>({sp:x.sp.map((v,k)=>v*(k===2?.72:.85))})));
  else if(w===2)TSd=TSd.map(t=>mod(t,x=>({dm:x.dm.map((v,k)=>k===1||k===3?v*.8:v),sp:x.sp.map(v=>v*.92)})));
  else TSd=TSd.map(t=>mod(t,x=>({rg:x.rg.map((v,k)=>k===1||k===3?v*.75:v)})));
  toast(['',"❄️ Qor: harakat sekin","🌧 Yomg'ir: o'q va to'p aniqligi pasaydi","🌫 Tuman: ko'rish masofasi qisqardi"][w]);}};
const _db12=drawB;drawB=function(){_db12();if(typeof SW==='undefined'||!BT||!BT.wx||!BX)return;const g=BX.g,w=SW,h=SH,t=Date.now()/1000;g.save();
 if(BT.wx===1){g.fillStyle='rgba(235,245,255,.14)';g.fillRect(0,0,w,h);g.fillStyle='rgba(255,255,255,.85)';for(let i=0;i<70;i++){const x=(i*97+Math.sin(t+i)*20+t*14)%w,y=(i*53+t*(28+i%5*6))%h;g.fillRect(x,y,2,2);}}
 else if(BT.wx===2){g.fillStyle='rgba(40,60,90,.14)';g.fillRect(0,0,w,h);g.strokeStyle='rgba(190,215,255,.55)';g.lineWidth=1;g.beginPath();for(let i=0;i<60;i++){const x=(i*61+t*40)%w,y=(i*47+t*420)%h;g.moveTo(x,y);g.lineTo(x-3,y+12);}g.stroke();}
 else{g.fillStyle='rgba(210,215,220,.26)';g.fillRect(0,0,w,h);}
 g.restore();};
})();
