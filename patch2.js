const fs=require('fs');let s=fs.readFileSync('www/index.html','utf8');
function R(a,b){if(s.split(a).length!==2){console.log('TOPILMADI:',a.slice(0,50));process.exit(1);}s=s.split(a).join(b);}
R(`<script src="map.js"></script>`,`<div id="pn" style="position:fixed;bottom:56px;left:0;right:0;padding:8px;background:#000c;z-index:2;display:none;text-align:center;font-size:14px"></div><script src="map.js"></script>`);
R(`mt=0,st=[0,0],LB=[];`,`mt=0,st=[0,0],LB=[],gold=30,sel=-1,peace={};`);
R(`if(own[d]===me){note("Sizning viloyat: "+tr[d]+" qo'shin");return;}`,`sel=d;if(own[d]===me){panel(d);draw();return;}if(peace[own[d]]>months){note("Tinchlik bor, hujum mumkin emas");panel(d);return;}`);
R(`attack(b,d);if(dirty){paint();dirty=false;}draw();hud();}`,`attack(b,d);panel(d);if(dirty){paint();dirty=false;}draw();hud();}`);
R(`function tick(){if(over)return;months++;`,`function tick(){if(over)return;months++;events();`);
R(`if(own[q]!==o&&tr[q]<tm){tm=tr[q];tg=q;}`,`if(own[q]!==o&&tr[q]<tm&&!(own[q]===me&&peace[o]>months)){tm=tr[q];tg=q;}`);
R(`if(Math.random()<.5){const a=cand[o]`,`if(Math.random()<.2){const a=cand[o]`);
R(`st=[m,a];`,`st=[m,a];gold+=m*.5;`);
R(`+" | Qo'shin: "+st[1]`,`+" | Qo'shin: "+st[1]+" | Oltin: "+Math.floor(gold)`);
R(`own[d]=own[a];tr[d]=Math.max(1,Math.floor(send-df*.6));dirty=true;}`,`own[d]=own[a];tr[d]=Math.max(1,Math.floor(send-df*.6));dirty=true;if(ac&&mOn&&own[d]===me)tone(660,ac.currentTime,.3,'square',.08);}`);
R(`speed=speed===1?2:speed===2?4:1;`,`speed=speed===1?2:speed===2?4:speed===4?0:1;`);
R(`e.target.textContent=speed+"x"`,`e.target.textContent=speed?speed+"x":"⏸"`);
R(`function start(){clearInterval(timer);timer=setInterval(tick,1000/speed);}`,`function start(){clearInterval(timer);if(speed)timer=setInterval(tick,1000/speed);}`);
R(`window.addEventListener('resize',fit);`,`function panel(d){const o=own[d],pn=document.getElementById('pn');pn.innerHTML='';
 const t=document.createElement('div');t.textContent=(o==='-'?'Mahalliy':N[o][0])+': '+tr[d]+" qo'shin | Oltin: "+Math.floor(gold);pn.appendChild(t);
 const bt=(x,f)=>{const b=document.createElement('button');b.textContent=x;b.style.cssText='margin:4px;padding:8px 14px;font-size:15px;border:0;border-radius:8px';b.onclick=f;pn.appendChild(b);};
 if(o===me)bt('Yollash +10 (20)',()=>{if(gold<20){note('Oltin yetmaydi');return;}gold-=20;tr[d]+=10;panel(d);draw();hud();});
 else if(o!=='-'){if(peace[o]>months)t.textContent+=' | Tinchlik: '+(peace[o]-months)+' oy';else bt('Tinchlik (50)',()=>{if(gold<50){note('Oltin yetmaydi');return;}gold-=50;peace[o]=months+24;panel(d);hud();});}
 pn.style.display='block';}
function ev1(t,f,n){for(let p=0;p<np;p++)if(f(p))tr[p]+=n;msg=t;mt=Date.now()+6000;}
function events(){if(months%6===0)save();
 if(months===12)ev1("1776: 13 koloniya mustaqillik e'lon qildi!",p=>own[p]==='U',8);
 if(months===168)ev1("1789: Fransuz inqilobi! Fransiya kuchaydi",p=>own[p]==='F',8);
 if(months===288)ev1("1799: Napoleon hokimiyatga keldi!",p=>own[p]==='F',15);}
function save(){try{localStorage.setItem('d1775',JSON.stringify({me,own,tr,months,gold,peace}));}catch(e){}}
try{const sv=JSON.parse(localStorage.getItem('d1775')||'null');if(sv&&sv.me){const b=document.createElement('button');b.className='nb';b.style.background='#2a2';b.textContent='Davom ettirish: '+N[sv.me][0];b.onclick=()=>{me=sv.me;for(let i=0;i<np;i++){own[i]=sv.own[i];tr[i]=sv.tr[i];}months=sv.months;gold=sv.gold;peace=sv.peace;menu.style.display='none';paint();center(me);start();tick();music();};menu.insertBefore(b,menu.children[2]);}}catch(e){}
window.addEventListener('resize',fit);`);
fs.writeFileSync('www/index.html',s);console.log('TAYYOR');
