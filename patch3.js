const fs=require('fs');let s=fs.readFileSync('www/index.html','utf8');
function R(a,b){if(s.split(a).length!==2){console.log('TOPILMADI:',a.slice(0,50));process.exit(1);}s=s.split(a).join(b);}
R(`<button id="mu">🎵</button>`,`<button id="bz">💱</button><button id="mu">🎵</button>`);
R(`b.textContent=N[k][0];`,`b.textContent=N[k][0]+' — '+NM[k][0];`);
R(`center(k);start();tick();music();}`,`center(k);start();tick();music();intro(k);}`);
R(`gold=sv.gold;peace=sv.peace;`,`gold=sv.gold;peace=sv.peace;if(sv.ut){for(let i=0;i<np;i++){ut[i]=sv.ut[i];gen[i]=sv.gen[i];}silv=sv.silv;oil=sv.oil;trade=sv.trade;}`);
R(`const own=P.map(p=>p[0]),`,`const NM={G:['Qirol Jorj III',['Kornuollis','Xou','Klinton']],F:['Qirol Lyudovik XVI',['Roshambo','Lafayet','Syuffren']],S:['Qirol Karlos III',['Galvez','Seballos',"O'Reyli"]],P:['Qirol Xose I',['Lippe grafi','Pombal markizi','Lavradio markizi']],R:['Imperatritsa Yekaterina II',['Suvorov','Rumyantsev','Potyomkin']],T:['Sulton Abdulhamid I',['Gazi Hasan Posho','Jazzor Ahmad Posho','Koja Yusuf Posho']],H:['Imperator Iosif II',['Laudon','Lasi','Kobur']],K:['Qirol Fridrix II',['Prins Genrix','Brunsvik Ferdinandi','Myollendorf']],N:['Shtatxaldor Villem V',['Brunsvik Lyudvigi','Fan Bilandt','Kinsbergen']],W:['Qirol Gustav III',['Sprengtporten','Armfelt','Fon Esen']],C:['Imperator Tsyanlun',['Akui','Fukanan','Xailanca']],J:['Syogun Iyexaru',['Tanuma Okitsugu','Matsudaira Sadanobu','Mizuno Tadatomo']],I:['Shoh Olam II',['Mahadji Sindiya','Xaydar Ali','Nana Padnavis']],E:['Karim Xon Zand',['Zaki Xon','Sodiq Xon','Ali-Murod Xon']],U:['Jon Xenkok (Kongress)',['Jorj Vashington','Nataniel Grin','Genri Noks']],Z:['Sulton Muhammad III',['Mulay Yazid','Mulay Sulaymon']],D:['Qirol Kristian VII',['Gyuldberg','Rantsau']],L:['Qirol Stanislav II',['Kostyushko','Pulaski','Yozef Ponyatovskiy']]};
const own=P.map(p=>p[0]),`);
R(`window.addEventListener('resize',fit);`,`const UI=['⚔️','💂','🏇','💣'],UN=['Qilichbozlar','Miltiqchilar','Otliqlar',"To'plar"],RI=['','🪙','🥈','🛢'];
const UC=[[15,0,0],[25,5,0],[35,10,0],[40,5,5]],UR=[12,10,8,6],UA=[1,1.3,1.5,1.8],UD=[1,1.25,.9,.8];
const LT=h=>parseInt(h[1],16)*3+parseInt(h[2],16)*6+parseInt(h[3],16)>90;
let silv=5,oil=0,trade={};gold=80;
const ut=P.map(p=>{const r=Math.random(),o=p[0];return o==='-'?(r<.7?0:2):'CJIEZ'.includes(o)?(r<.4?0:r<.7?1:2):(r<.12?3:r<.4?2:1);});
const RS=P.map(p=>{const lo=p[1]-179.5,la=TOP-p[2]-.5;
 if(lo>-106&&lo<-98&&la>18&&la<26||lo>-75&&lo<-64&&la>-22&&la<-8)return 2;
 if(lo>-52&&lo<-38&&la>-24&&la<-10||lo>-5&&lo<3&&la>4&&la<9||lo>55&&lo<66&&la>54&&la<62)return 1;
 if(lo>44&&lo<58&&la>28&&la<42||lo>24&&lo<28&&la>44&&la<46||lo>93&&lo<97&&la>18&&la<23||lo>-82&&lo<-76&&la>40&&la<42)return 3;
 return 0;});
const isCap=new Array(np).fill(''),gen=P.map(()=>-1);
for(const k in NM){const xp=N[k][2]+180,yp=TOP-N[k][3],L=[];for(let p=0;p<np;p++)if(own[p]===k)L.push(p);
 L.sort((a,b)=>Math.hypot(P[a][1]-xp,P[a][2]-yp)-Math.hypot(P[b][1]-xp,P[b][2]-yp));
 if(L.length){isCap[L[0]]=k;NM[k][1].forEach((g,i)=>{const q=L[Math.min(L.length-1,1+i*2)];if(gen[q]<0&&q!==L[0])gen[q]=i;});}}
function pb(pn,x,f){const b=document.createElement('button');b.textContent=x;b.style.cssText='margin:3px;padding:8px 10px;font-size:14px;border:0;border-radius:8px';b.onclick=f;pn.appendChild(b);}
function unit(p,x,y,c){const o=own[p],fs=Math.min(24,c*3),col=o==='-'?'#7a8a6a':N[o][1];
 cx.textAlign='center';cx.textBaseline='middle';
 cx.font=fs+'px sans-serif';cx.fillStyle='#fff';cx.fillText(UI[ut[p]],x,y-fs*.8);
 if(isCap[p]===o)cx.fillText('👑',x,y-fs*1.6);
 const r=fs*.62;cx.beginPath();cx.arc(x,y+fs*.2,r,0,6.3);cx.fillStyle=col;cx.fill();cx.lineWidth=2;cx.strokeStyle=p===sel?'#ff0':'#fff';cx.stroke();
 cx.font='bold '+(fs*.7)+'px sans-serif';cx.fillStyle=LT(col)?'#000':'#fff';cx.fillText(tr[p],x,y+fs*.2);
 if(c>=6){let ty=y+fs*.2+r+fs*.5;cx.lineWidth=3;cx.strokeStyle='#000b';cx.font='bold '+(fs*.5)+'px sans-serif';
  if(RS[p]){cx.fillStyle='#fff';cx.font=(fs*.7)+'px sans-serif';cx.fillText(RI[RS[p]],x+r+fs*.4,y+fs*.2);cx.font='bold '+(fs*.5)+'px sans-serif';}
  if(gen[p]>=0&&NM[o]){const t='🎖'+NM[o][1][gen[p]];cx.strokeText(t,x,ty);cx.fillStyle='#ffd';cx.fillText(t,x,ty);ty+=fs*.55;}
  if(isCap[p]===o){const t=NM[o][0];cx.strokeText(t,x,ty);cx.fillStyle='#fd8';cx.fillText(t,x,ty);}}}
function draw(){
 cx.fillStyle='#0b2a45';cx.fillRect(0,0,innerWidth,innerHeight);
 const c=c0*sc;cx.imageSmoothingEnabled=true;cx.imageSmoothingQuality='high';
 cx.drawImage(oc,ox,oy,W*c,H*c);
 if(c<7){cx.textAlign='center';cx.textBaseline='middle';cx.lineWidth=3;cx.strokeStyle='#000c';cx.fillStyle='#fff';
  for(const L of LB){const nm=N[L[0]][0].toUpperCase(),f=Math.min(26,Math.sqrt(L[3]*55)*c*.8/(.68*nm.length));if(f<9)continue;
   const x=ox+(L[1]+.5)*c,y=oy+(L[2]+.5)*c;if(x<-50||y<-50||x>innerWidth+50||y>innerHeight+50)continue;
   cx.font='bold '+f+'px sans-serif';cx.strokeText(nm,x,y);cx.fillText(nm,x,y);}}
 if(c>=3.2){for(let p=0;p<np;p++){const x=ox+(P[p][1]+.5)*c,y=oy+(P[p][2]+.5)*c;if(x<-40||y<-50||x>innerWidth+40||y>innerHeight+40)continue;unit(p,x,y,c);}}}
function attack(a,d){const t=tr[a];if(t<3){note("Qo'shin kam");return;}
 const send=Math.floor(t*.7);tr[a]=t-send;
 const att=send*UA[ut[a]]*(gen[a]>=0?1.25:1)*(.9+Math.random()*.4),df=tr[d]*UD[ut[d]]*(1+.2*Math.random());
 if(att>df){const od=own[d];if(isCap[d]===od){for(let p=0;p<np;p++)if(own[p]===od)tr[p]=Math.floor(tr[p]*.85);note("Poytaxt qulandi: "+N[od][0]+"!");}
  own[d]=own[a];ut[d]=ut[a];gen[d]=-1;tr[d]=Math.max(1,Math.floor(send-df*.6));dirty=true;if(ac&&mOn&&own[d]===me)tone(660,ac.currentTime,.3,'square',.08);}
 else tr[d]=Math.max(1,Math.floor(tr[d]-att*.6));}
function panel(d){const o=own[d],pn=document.getElementById('pn');pn.innerHTML='';
 const t=document.createElement('div');
 t.textContent=UI[ut[d]]+' '+UN[ut[d]]+' '+tr[d]+' | '+(o==='-'?'Mahalliy qabila':N[o][0])+(isCap[d]===o?' | 👑 '+NM[o][0]:'')+(gen[d]>=0&&NM[o]?' | 🎖 '+NM[o][1][gen[d]]:'')+(RS[d]?' | '+RI[RS[d]]:'');
 pn.appendChild(t);
 if(o===me)UN.forEach((n,i)=>{const k=UC[i];pb(pn,UI[i]+' '+k[0]+'💰'+(k[1]?' '+k[1]+'🥈':'')+(k[2]?' '+k[2]+'🛢':'')+' +'+UR[i],()=>{if(gold<k[0]||silv<k[1]||oil<k[2]){note('Resurs yetmaydi');return;}gold-=k[0];silv-=k[1];oil-=k[2];tr[d]+=UR[i];ut[d]=i;panel(d);draw();hud();});});
 else if(o!=='-'){const a=peace[o]>months,b=trade[o]>months;
  if(a)t.textContent+=' | 🕊 '+(peace[o]-months)+' oy';if(b)t.textContent+=' | 🤝 '+(trade[o]-months)+' oy';
  if(!a)pb(pn,'🕊 Tinchlik 50💰',()=>{if(gold<50){note('Oltin yetmaydi');return;}gold-=50;peace[o]=months+24;panel(d);hud();});
  if(!b)pb(pn,'🤝 Savdo 30💰',()=>{if(gold<30){note('Oltin yetmaydi');return;}gold-=30;trade[o]=months+36;peace[o]=Math.max(peace[o]||0,months+36);panel(d);hud();});}
 pb(pn,'✖',()=>{pn.style.display='none';});pn.style.display='block';}
function market(){const pn=document.getElementById('pn');pn.innerHTML='<div>💱 Bozor | 💰'+Math.floor(gold)+' 🥈'+Math.floor(silv)+' 🛢'+Math.floor(oil)+'</div>';
 [['10🥈 → 14💰',()=>silv>=10&&(silv-=10,gold+=14)],['10💰 → 6🥈',()=>gold>=10&&(gold-=10,silv+=6)],['10🛢 → 13💰',()=>oil>=10&&(oil-=10,gold+=13)],['20💰 → 8🛢',()=>gold>=20&&(gold-=20,oil+=8)]].forEach(e=>pb(pn,e[0],()=>{if(!e[1]())note('Resurs yetmaydi');market();hud();}));
 pb(pn,'✖',()=>{pn.style.display='none';});pn.style.display='block';}
document.getElementById('bz').onclick=()=>{if(me)market();};
function hud(){if(!me)return;info.textContent=Date.now()<mt?msg:N[me][0]+" | "+(1775+Math.floor(months/12))+"-yil "+(months%12+1)+"-oy | 🗺"+st[0]+"/"+np+" | ⚔"+st[1]+" | 💰"+Math.floor(gold)+" 🥈"+Math.floor(silv)+" 🛢"+Math.floor(oil);}
function save(){try{localStorage.setItem('d1775',JSON.stringify({me,own,tr,months,gold,peace,ut,gen,silv,oil,trade}));}catch(e){}}
function intro(k){msg=NM[k][0]+" | Sarkardalar: "+NM[k][1].join(', ');mt=Date.now()+7000;hud();}
function tick(){if(over)return;months++;events();
 const cnt={};
 for(let p=0;p<np;p++){const o=own[p];if(o==='-'){if(tr[p]<12&&Math.random()<.1)tr[p]++;}else{cnt[o]=(cnt[o]||0)+1;if(tr[p]<40&&Math.random()<.3)tr[p]++;}}
 const cand={};
 for(let p=0;p<np;p++){const o=own[p];if(o==='-'||o===me||tr[p]<6)continue;let tg=-1,tm=999;
  for(const q of A[p]){if(own[q]!==o&&tr[q]<tm&&!(own[q]===me&&peace[o]>months)){tm=tr[q];tg=q;}}
  if(tg>=0&&tr[p]*.7>tm*1.1)(cand[o]=cand[o]||[]).push([p,tg]);}
 for(const o in cand){const n=1+Math.floor(cnt[o]/20);for(let i=0;i<n;i++){if(Math.random()<.2){const a=cand[o],m=a[Math.floor(Math.random()*a.length)];if(own[m[0]]===o&&own[m[1]]!==o)attack(m[0],m[1]);}}}
 if(dirty){paint();dirty=false;}
 let m=0,a=0;for(let p=0;p<np;p++)if(own[p]===me){m++;a+=tr[p];if(RS[p]===1)gold+=2;else if(RS[p]===2)silv+=1.5;else if(RS[p]===3)oil+=1;if(isCap[p]===me)gold+=3;}
 st=[m,a];gold+=m*.5;
 for(const o in trade)if(trade[o]>months){const k=Math.sqrt(cnt[o]||0);gold+=k*.6;silv+=k*.3;}
 if(m===0){over=true;msg="Yutqazdingiz!";mt=1e15;}else if(m>np*.5){over=true;msg="G'alaba! Dunyo sizniki!";mt=1e15;}
 hud();draw();}
window.addEventListener('resize',fit);`);
fs.writeFileSync('www/index.html',s);console.log('TAYYOR');
