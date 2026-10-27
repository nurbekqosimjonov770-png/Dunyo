const {W,H,g:GR,P}=MAP,S=6,TOP=80;
const E=ERAS[ERAI],K=Object.keys(E.n).join(''),NEU=K.length,SEA=255;
const N={},NM={};for(const k of K){const d=E.n[k];N[k]=[d[0],d[1],d[2],d[3]];NM[k]=[d[4],d[5]];}
const UI=E.u.map(x=>x[0]),UN=E.u.map(x=>x[1]);
const N0={G:["Buyuk Britaniya","#d33",0,52],F:["Fransiya","#36c",2,47],S:["Ispaniya","#e90",-4,40],P:["Portugaliya","#2a6",-8,39],R:["Rossiya","#5a3",37,56],T:["Usmonlilar","#1bb",29,41],H:["Gabsburglar","#ddd",16,48],K:["Prussiya","#668",13,52],N:["Niderlandiya","#f60",5,52],W:["Shvetsiya","#4bd",18,60],C:["Sin (Xitoy)","#fd0",116,40],J:["Yaponiya","#f9c",138,36],I:["Mugallar/Marata","#a5a",78,23],E:["Eron","#8a5",52,33],U:["13 koloniya","#59f",-75,40],Z:["Marokash","#a64",-6,33],D:["Daniya","#c9a",10,56],L:["Polsha-Litva","#ca5",21,52]};
const NM0={G:['Qirol Jorj III',['Kornuollis','Xou','Klinton']],F:['Qirol Lyudovik XVI',['Roshambo','Lafayet','Syuffren']],S:['Qirol Karlos III',['Galvez','Seballos',"O'Reyli"]],P:['Qirol Xose I',['Lippe grafi','Pombal markizi','Lavradio markizi']],R:['Imperatritsa Yekaterina II',['Suvorov','Rumyantsev','Potyomkin']],T:['Sulton Abdulhamid I',['Gazi Hasan Posho','Jazzor Ahmad Posho','Koja Yusuf Posho']],H:['Imperator Iosif II',['Laudon','Lasi','Kobur']],K:['Qirol Fridrix II',['Prins Genrix','Brunsvik Ferdinandi','Myollendorf']],N:['Shtatxaldor Villem V',['Brunsvik Lyudvigi','Fan Bilandt','Kinsbergen']],W:['Qirol Gustav III',['Sprengtporten','Armfelt','Fon Esen']],C:['Imperator Tsyanlun',['Akui','Fukanan','Xailanca']],J:['Syogun Iyexaru',['Tanuma Okitsugu','Matsudaira Sadanobu','Mizuno Tadatomo']],I:['Shoh Olam II',['Mahadji Sindiya','Xaydar Ali','Nana Padnavis']],E:['Karim Xon Zand',['Zaki Xon','Sodiq Xon','Ali-Murod Xon']],U:['Jon Xenkok (Kongress)',['Jorj Vashington','Nataniel Grin','Genri Noks']],Z:['Sulton Muhammad III',['Mulay Yazid','Mulay Sulaymon']],D:['Qirol Kristian VII',['Gyuldberg','Rantsau']],L:['Qirol Stanislav II',['Kostyushko','Pulaski','Yozef Ponyatovskiy']]};
const COL=[...K].map(k=>N[k][1]);COL.push('#7a8a6a');
const UI0=['⚔️','💂','🏇','💣'],UN0=['Qilichbozlar','Miltiqchilar','Otliqlar',"To'plar"],RI=['','🪙','🥈','🛢'];
const UC=E.uc,UR=[30,24,20,16];
const BD=[['🏰',"Qal'a",60,10,0],['⛺','Kazarma',40,0,0],['🏪','Bozor',50,0,0]];
BD.push(['⚓','Bandargoh',70,10,0]);
const LT=h=>parseInt(h[1],16)*3+parseInt(h[2],16)*6+parseInt(h[3],16)>90;
const fmt=v=>v>=1000?(v/1000).toFixed(1)+'k':Math.floor(v);
const EMB=[['Britaniya|Angliya','🦁'],['Fransiya','⚜️'],['Ispaniya|Kastiliya','🏰'],['Portugaliya','🛡️'],['Rossiya|Moskva|Rus','🦅'],['Usmonlilar|Mamluklar|Mugallar|Songxay|Xorazmshohlar|Shayboniylar|Muvahhidlar|saljuq|Marokash','☪️'],['Gabsburg|Muqaddas Rim|Prussiya|Polsha|Vizantiya|Ayyubiylar|Atsteklar','🦅'],['Niderlandiya|Efiopiya','🦁'],['Sin |Min |Szin|Sun ','🐉'],['Yaponiya|Kamakura','🔴'],['Eron|Safaviylar|Inka','☀️'],['koloniya','⭐'],['Daniya|Vengriya|Kalmar|Shvetsiya','✝️'],["Mo'g'ullar|Oltin",'🐎'],['Temuriylar','⭕'],['Tevton','✠'],["Dehli|G'uriylar",'🌙'],['Xmer|Vijayanagara','🕉️']];
function emb(i){if(i>=NEU)return '🏴';const n=N[K[i]][0];for(const e of EMB)if(new RegExp(e[0]).test(n))return e[1];return '🚩';}
function flag(g,x,y,i,w,h){g.strokeStyle='#432';g.lineWidth=2;g.beginPath();g.moveTo(x,y);g.lineTo(x,y-h-4);g.stroke();g.fillStyle=COL[i];g.fillRect(x+1,y-h-4,w,h);g.strokeStyle='#fff';g.lineWidth=1;g.strokeRect(x+1,y-h-4,w,h);
 if(w>=14){g.font=(h*.75)+'px sans-serif';g.textAlign='center';g.textBaseline='middle';g.fillStyle='#fff';g.fillText(emb(i),x+1+w/2,y-h/2-4);}
 g.textAlign='center';g.textBaseline='middle';}
const co=new Uint8Array(W*H).fill(SEA);
const ISOK={};for(const k in E.m)E.m[k].split(' ').forEach(s=>ISOK[s]=k);
for(let i=0;i<W*H;i++){const p=GR[i];if(p>=0){const iso=P[p][3],lo=i%W-179.5,la=TOP-((i/W)|0)-.5,o=E.r(iso,lo,la)||ISOK[iso]||'-',j=K.indexOf(o);co[i]=j<0?NEU:j;}}
const cnt=new Array(NEU+1).fill(0);let land=0;
function recount(){cnt.fill(0);for(let i=0;i<co.length;i++){const o=co[i];if(o!==SEA)cnt[o]++;}land=0;for(let i=0;i<=NEU;i++)land+=cnt[i];}
recount();
const T=cnt.map((n,i)=>i<NEU?Math.round(40+12*Math.sqrt(n)):0);
const F=[...K].map(k=>E.n[k][6].slice());
const CAPC=[...K].map((k,i)=>{const tx=Math.floor(N[k][2]+180),ty=Math.floor(TOP-N[k][3]);let b=-1,bd=1e9;for(let c=0;c<co.length;c++)if(co[c]===i){const d=(c%W-tx)**2+((c/W|0)-ty)**2;if(d<bd){bd=d;b=c;}}return b;});
const B=CAPC.filter(c=>c>=0).map(c=>[c,0]);
const SITE=[];P.forEach(p=>{const lo=p[1]-179.5,la=TOP-p[2]-.5;let r=0;
 if(lo>-106&&lo<-98&&la>18&&la<26||lo>-75&&lo<-64&&la>-22&&la<-8)r=2;
 else if(lo>-52&&lo<-38&&la>-24&&la<-10||lo>-5&&lo<3&&la>4&&la<9||lo>55&&lo<66&&la>54&&la<62)r=1;
 else if(lo>44&&lo<58&&la>28&&la<42||lo>24&&lo<28&&la>44&&la<46||lo>93&&lo<97&&la>18&&la<23||lo>-82&&lo<-76&&la>40&&la<42)r=3;
 if(r)SITE.push([p[2]*W+p[1],r]);});
let me=-1,sc=1,ox=0,oy=0,c0=1,first=1,months=0,speed=1,timer=null,over=false,dirty=false,msg='',mt=0,LB=[],gold=80,silv=5,oil=0,peace={},trade={},tgt=null,pct=50,capLost={},ships=0;
const cv=document.getElementById('c'),cx=cv.getContext('2d'),info=document.getElementById('info'),menu=document.getElementById('menu'),pn=document.getElementById('pn');
const oc=document.createElement('canvas');oc.width=W*S;oc.height=H*S;const og=oc.getContext('2d');
function labels(){LB=[];const seen=new Uint8Array(W*H);
 for(let s=0;s<W*H;s++){const o=co[s];if(o===SEA||o===NEU||seen[s])continue;const q=[s];seen[s]=1;let mx=0,my=0;
  for(let h=0;h<q.length;h++){const c=q[h],x=c%W,y=(c/W)|0;mx+=x;my+=y;
   if(x>0&&!seen[c-1]&&co[c-1]===o){seen[c-1]=1;q.push(c-1);}
   if(x<W-1&&!seen[c+1]&&co[c+1]===o){seen[c+1]=1;q.push(c+1);}
   if(y>0&&!seen[c-W]&&co[c-W]===o){seen[c-W]=1;q.push(c-W);}
   if(y<H-1&&!seen[c+W]&&co[c+W]===o){seen[c+W]=1;q.push(c+W);}}
  if(q.length<25)continue;mx/=q.length;my/=q.length;
  let b=q[0],bd=1e9;for(let i=0;i<q.length;i+=3){const c=q[i],d=(c%W-mx)**2+((c/W|0)-my)**2;if(d<bd){bd=d;b=c;}}
  LB.push([o,b%W,(b/W)|0,q.length]);}}
function paint(){og.clearRect(0,0,oc.width,oc.height);let last='';
 for(let y=0;y<H;y++)for(let x=0;x<W;x++){const o=co[y*W+x];if(o===SEA)continue;if(COL[o]!==last){og.fillStyle=COL[o];last=COL[o];}og.fillRect(x*S,y*S,S,S);}
 og.fillStyle='#000a';
 for(let y=0;y<H;y++)for(let x=0;x<W;x++){const i=y*W+x,o=co[i];if(o===SEA)continue;
  if(x+1<W){const q=co[i+1];if(q!==SEA&&q!==o)og.fillRect((x+1)*S-1,y*S,2,S);}
  if(y+1<H){const q=co[i+W];if(q!==SEA&&q!==o)og.fillRect(x*S,(y+1)*S-1,S,2);}}
 recount();labels();}
function draw(){
 cx.fillStyle='#0b2a45';cx.fillRect(0,0,innerWidth,innerHeight);
 const c=c0*sc;cx.imageSmoothingEnabled=true;cx.imageSmoothingQuality='high';
 cx.drawImage(oc,ox,oy,W*c,H*c);
 cx.textAlign='center';cx.textBaseline='middle';
 if(c<7){cx.lineWidth=3;cx.strokeStyle='#000c';cx.fillStyle='#fff';
  for(const L of LB){const nm=N[K[L[0]]][0].toUpperCase(),f=Math.min(26,Math.sqrt(L[3])*c*1.1/(.68*nm.length));if(f<9)continue;
   const x=ox+(L[1]+.5)*c,y=oy+(L[2]+.5)*c;if(x<-60||y<-30||x>innerWidth+60||y>innerHeight+30)continue;
   cx.font='bold '+f+'px sans-serif';cx.strokeText(nm,x,y);cx.fillText(nm,x,y);}}
 for(let i=0;i<NEU;i++){const cp=CAPC[i];if(cp<0||co[cp]!==i)continue;const x=ox+(cp%W+.5)*c,y=oy+((cp/W|0)+.5)*c;if(x<-40||y<-40||x>innerWidth+40||y>innerHeight+40)continue;
  const r=Math.max(9,Math.min(16,c*2.2));cx.beginPath();cx.arc(x,y,r,0,6.3);cx.fillStyle=COL[i];cx.fill();cx.lineWidth=2;cx.strokeStyle='#fff';cx.stroke();
  cx.font='bold '+(r*.8)+'px sans-serif';cx.fillStyle=LT(COL[i])?'#000':'#fff';cx.fillText(fmt(T[i]),x,y);flag(cx,x+r+2,y+r*.5,i,Math.max(12,r*1.3),Math.max(8,r*.9));
  if(c>=3){cx.font=(r*1.2)+'px sans-serif';cx.fillText('👑',x,y-r-6);}
  if(c>=6){cx.font='bold '+(r*.7)+'px sans-serif';cx.lineWidth=3;cx.strokeStyle='#000b';const t=NM[K[i]][0];cx.strokeText(t,x,y+r+10);cx.fillStyle='#fd8';cx.fillText(t,x,y+r+10);}}
 if(c>=2.2)for(const b of B){const x=ox+(b[0]%W+.5)*c+10,y=oy+((b[0]/W|0)+.5)*c+8;if(x<-30||y<-30||x>innerWidth+30||y>innerHeight+30)continue;cx.font=Math.min(22,Math.max(10,c*2.4))+'px sans-serif';cx.fillText(BD[b[1]][0],x,y);}
 if(c>=3)for(const s of SITE){const x=ox+(s[0]%W+.5)*c,y=oy+((s[0]/W|0)+.5)*c;if(x<-30||y<-30||x>innerWidth+30||y>innerHeight+30)continue;cx.font=Math.min(18,c*2)+'px sans-serif';cx.fillText(RI[s[1]],x,y);}
 if(ships>0&&c>=1.2){const pl=B.filter(b=>b[1]===3&&co[b[0]]===me);if(pl.length)for(let s=0;s<Math.min(ships,12);s++){const b=pl[s%pl.length],pc=portSea(b[0]);if(pc<0)continue;const sx=ox+((pc%W)+.5)*c+(Math.floor(s/pl.length)%3-1)*c*.8,sy=oy+(((pc/W)|0)+.5)*c+Math.sin(Date.now()/600+s)*2;cx.font=Math.min(24,Math.max(12,c*3))+'px sans-serif';cx.fillStyle='#fff';cx.fillText('⛵',sx,sy);}}
 if(typeof drawFleets==='function')drawFleets(c);
 if(tgt){const x=ox+(tgt.c%W+.5)*c,y=oy+((tgt.c/W|0)+.5)*c;cx.beginPath();cx.arc(x,y,22,0,6.3);cx.fillStyle=tgt.ok?'#2a2':'#777';cx.fill();cx.lineWidth=3;cx.strokeStyle='#fff';cx.stroke();cx.font='24px sans-serif';cx.fillText(tgt.ok?'⚔️':'🚫',x,y+1);}}
function fit(){const d=devicePixelRatio||1;cv.width=innerWidth*d;cv.height=innerHeight*d;cv.style.width=innerWidth+'px';cv.style.height=innerHeight+'px';cx.setTransform(d,0,0,d,0,0);
 c0=innerWidth/W;if(first){oy=(innerHeight-H*c0)/2;first=0;}draw();}
function hud(){if(me<0)return;info.textContent=Date.now()<mt?msg:emb(me)+' '+N[K[me]][0]+" | "+(E.y+Math.floor(months/12))+"-yil "+(months%12+1)+"-oy | 🗺"+Math.round(cnt[me]/land*100)+"% | ⚔"+Math.floor(T[me])+" | 💰"+Math.floor(gold)+" 🥈"+Math.floor(silv)+" 🛢"+Math.floor(oil);}
function note(t){msg=t;mt=Date.now()+2500;hud();}
function pbtn(x,f){const b=document.createElement('button');b.textContent=x;b.style.cssText='margin:3px;padding:8px 10px;font-size:14px;border:0;border-radius:8px';b.onclick=f;pn.appendChild(b);}
function showPanel(s){pn.innerHTML='';const t=document.createElement('div');t.textContent=s;pn.appendChild(t);pn.style.display='block';return t;}
function fortAt(n,d){const x=n%W,y=(n/W)|0;for(const b of B){if(b[1]!==0||co[b[0]]!==d)continue;if(Math.abs(b[0]%W-x)<=6&&Math.abs((b[0]/W|0)-y)<=6)return true;}return false;}
function near(c){const x=c%W,y=(c/W)|0;for(let dy=-5;dy<=5;dy++)for(let dx=-5;dx<=5;dx++){const nx=x+dx,ny=y+dy;if(nx<0||ny<0||nx>=W||ny>=H)continue;if(co[ny*W+nx]===me)return true;}return false;}
function capture(a,d,t,D){const tx=t%W,ty=(t/W)|0,dist=new Int16Array(W*H).fill(-1),q=[];
 for(let y=Math.max(0,ty-7);y<=Math.min(H-1,ty+7);y++)for(let x=Math.max(0,tx-7);x<=Math.min(W-1,tx+7);x++){const c=y*W+x;if(co[c]!==d)continue;
  if(x>0&&co[c-1]===a||x<W-1&&co[c+1]===a||y>0&&co[c-W]===a||y<H-1&&co[c+W]===a){dist[c]=0;q.push(c);}}
 if(!q.length&&co[t]===d){dist[t]=0;q.push(t);}
 let n=0;
 for(let h=0;h<q.length;h++){const c=q[h];co[c]=a;n++;if(dist[c]>=D)continue;const x=c%W,y=(c/W)|0;
  const nb=[x>0?c-1:-1,x<W-1?c+1:-1,y>0?c-W:-1,y<H-1?c+W:-1];
  for(const m of nb)if(m>=0&&co[m]===d&&dist[m]<0){dist[m]=dist[c]+1;q.push(m);}}
 if(n){dirty=true;if(d<NEU&&!capLost[d]&&co[CAPC[d]]!==d){capLost[d]=1;T[d]=Math.floor(T[d]*.7);msg="🏰 Poytaxt qulandi: "+N[K[d]][0]+"!";mt=Date.now()+5000;}}
 return n;}
function battleDone(o,sa,sd,bonus){const adv=sa-sd,lossA=o.commit*(1-sa),kill=o.d<NEU?o.Td*(1-sd):0;
 T[o.a]=Math.max(1,T[o.a]-lossA);if(o.d<NEU)T[o.d]=Math.max(5,T[o.d]-kill);
 let got=0,D=0;if(adv>.05){D=Math.max(1,Math.round((2+adv*12)*(o.fort?.6:1))+(bonus||0));got=capture(o.a,o.d,o.cell,D);}
 return{lossA:Math.round(lossA),kill:Math.round(kill),got,D};}
function afterBattle(){tgt=null;if(dirty){paint();dirty=false;}if(me>=0&&!over)start();hud();draw();}
function autoWar(a,d,n,commit,Td){const fort=d<NEU&&fortAt(n,d),df=Td*(fort?1.5:1)*(.8+Math.random()*.4),at=commit*(.8+Math.random()*.4),adv=(at-df)/(at+df);
 T[a]=Math.max(1,T[a]-Math.min(commit,commit*(.1+.6*df/at)));if(d<NEU)T[d]=Math.max(5,T[d]-Math.min(Td,Td*.6*at/df));
 return adv>.05?capture(a,d,n,Math.max(1,Math.round((2+adv*8)*(fort?.6:1)))):0;}
function aiTurn(){const fr=[];for(let i=0;i<NEU;i++)fr.push([]);
 for(let c=0;c<co.length;c++){const o=co[c];if(o===SEA)continue;
  if(c%W<W-1){const q=co[c+1];if(q!==SEA&&q!==o){if(o<NEU)fr[o].push(c,c+1);if(q<NEU)fr[q].push(c+1,c);}}
  if(c+W<co.length){const q=co[c+W];if(q!==SEA&&q!==o){if(o<NEU)fr[o].push(c,c+W);if(q<NEU)fr[q].push(c+W,c);}}}
 for(let o=0;o<NEU;o++){if(o===me||fr[o].length===0||T[o]<60||Math.random()>.2)continue;
  const L=fr[o],k=Math.floor(Math.random()*L.length/2)*2,n=L[k+1],q=co[n];
  if(q===me&&peace[o]>months)continue;
  const commit=T[o]*.5,Td=q===NEU?35:T[q]*.4;if(commit<Td*.9)continue;
  const got=autoWar(o,q,n,commit,Td);
  if(q===me&&got>0){msg="⚠️ "+N[K[o]][0]+" hujum qildi: "+got+" hudud yo'qotildi";mt=Date.now()+5000;}}}
function panelOwn(c){showPanel(N[K[me]][0]+' | '+NM[K[me]][0]+' | ⚔'+Math.floor(T[me])+' | '+UI.map((u,i)=>u+Math.round(F[me][i]*100)+'%').join(' ')+' | 💰'+Math.floor(gold)+' 🥈'+Math.floor(silv)+' 🛢'+Math.floor(oil));
 UN.forEach((n,i)=>{const k=UC[i];pbtn(UI[i]+' '+k[0]+'💰'+(k[1]?' '+k[1]+'🥈':'')+(k[2]?' '+k[2]+'🛢':'')+' +'+UR[i],()=>recruit(i,c));});
 BD.forEach((b,i)=>pbtn(b[0]+' '+b[2]+'💰'+(b[3]?' '+b[3]+'🥈':''),()=>build(i,c)));
 if(ports()>0)pbtn("⛵ Kema 60💰 10🥈 ("+ships+")",()=>buyShip(c));
 pbtn('✖',()=>{pn.style.display='none';});}
function recruit(i,c){const k=UC[i];if(gold<k[0]||silv<k[1]||oil<k[2]){note('Resurs yetmaydi');return;}
 gold-=k[0];silv-=k[1];oil-=k[2];const t=T[me],n=UR[i];F[me]=F[me].map((f,j)=>(f*t+(j===i?n:0))/(t+n));T[me]+=n;panelOwn(c);hud();draw();}
function build(i,c){const b=BD[i];if(i===3&&!coastal(c)){note("Bandargoh faqat qirg'oqda quriladi");return;}if(gold<b[2]||silv<b[3]){note('Resurs yetmaydi');return;}
 const x=c%W,y=(c/W)|0;for(const e of B)if(Math.abs(e[0]%W-x)<=3&&Math.abs((e[0]/W|0)-y)<=3){note("Yaqinda bino bor");return;}
 gold-=b[2];silv-=b[3];B.push([c,i]);panelOwn(c);hud();draw();}
function panelEnemy(){const d=tgt.d,c=tgt.c;
 const t=showPanel((d===NEU?'Mahalliy qabilalar':N[K[d]][0]+' | '+NM[K[d]][0]+' | ⚔~'+Math.floor(T[d]))+(fortAt(c,d)?' | 🏰':'')+(tgt.ok?'':' | 🚫 uzoq'));
 if(d<NEU){const pr=peace[d]>months,tr2=trade[d]>months;if(pr)t.textContent+=' | 🕊 '+(peace[d]-months)+' oy';if(tr2)t.textContent+=' | 🤝 '+(trade[d]-months)+' oy';
  if(!pr)pbtn('🕊 Tinchlik 50💰',()=>{if(gold<50){note('Oltin yetmaydi');return;}gold-=50;peace[d]=months+24;panelEnemy();hud();});
  if(!tr2)pbtn('🤝 Savdo 30💰',()=>{if(gold<30){note('Oltin yetmaydi');return;}gold-=30;trade[d]=months+36;peace[d]=Math.max(peace[d]||0,months+36);panelEnemy();hud();});}
 [25,50,75,100].forEach(p=>pbtn((p===pct?'✅':'')+p+'%',()=>{pct=p;panelEnemy();}));
 if(tgt.ok)pbtn('⚔️ Hujum '+Math.floor(T[me]*pct/100),launch);
 pbtn('✖',()=>{pn.style.display='none';tgt=null;draw();});}
function launch(){if(!tgt||!tgt.ok||me<0||over)return;const d=tgt.d;
 if(d<NEU&&peace[d]>months){note('Tinchlik bor, hujum mumkin emas');return;}
 if(co[tgt.c]!==d){note("Hudud egasi o'zgargan");tgt=null;pn.style.display='none';draw();return;}
 const commit=Math.floor(T[me]*pct/100);if(commit<10){note("Qo'shin kam");return;}
 const Td=d===NEU?25+Math.random()*25:T[d]*.4,fort=d<NEU&&fortAt(tgt.c,d);
 pn.style.display='none';clearInterval(timer);
 startBattle({a:me,d,cell:tgt.c,commit,Td,fort,sea:!nearLand(tgt.c),ships});}
function tap(px,py){if(me<0||over)return;const c=c0*sc;
 if(tgt&&tgt.ok){const sx=ox+(tgt.c%W+.5)*c,sy=oy+((tgt.c/W|0)+.5)*c;if(Math.hypot(px-sx,py-sy)<30){launch();return;}}
 const x=Math.floor((px-ox)/c),y=Math.floor((py-oy)/c);if(x<0||y<0||x>=W||y>=H)return;
 const cell=y*W+x,o=co[cell];
 if(o===SEA){pn.style.display='none';tgt=null;draw();return;}
 if(o===me){tgt=null;panelOwn(cell);draw();return;}
 tgt={c:cell,d:o,ok:near(cell)};panelEnemy();draw();}
function ev1(t,i,n){T[i]+=n;msg=t;mt=Date.now()+6000;}
function events(){if(months%6===0)save();for(const e of E.ev)if(months===e[0]){msg=e[1];mt=Date.now()+6000;for(const d of e[2]){const i=K.indexOf(d[0]);if(i>=0)T[i]=Math.max(5,T[i]+d[1]);}}return;
 if(months===12)ev1("1776: 13 koloniya mustaqillik e'lon qildi!",K.indexOf('U'),200);
 if(months===168)ev1("1789: Fransuz inqilobi! Fransiya kuchaydi",K.indexOf('F'),250);
 if(months===288)ev1("1799: Napoleon hokimiyatga keldi!",K.indexOf('F'),400);}
function tick(){if(over)return;months++;events();
 for(let i=0;i<NEU;i++){if(cnt[i]===0){T[i]=0;continue;}const cap=cnt[i]*1.5+100;if(T[i]<cap)T[i]+=Math.max(1,cnt[i]*.03);}
 gold+=cnt[me]*.02;
 for(const b of B){const o=co[b[0]];if(o>=NEU)continue;if(b[1]===1)T[o]+=2;if(o===me&&b[1]===2)gold+=3;}
 for(const s of SITE){if(co[s[0]]!==me)continue;if(s[1]===1)gold+=2;else if(s[1]===2)silv+=1.2;else oil+=.8;}
 for(const d in trade)if(trade[d]>months){const k=Math.sqrt(cnt[d]||0);gold+=k*.4;silv+=k*.2;}
 if(co[CAPC[me]]===me)gold+=5;
 aiTurn();if(dirty){paint();dirty=false;}
 if(cnt[me]===0){over=true;msg="Yutqazdingiz!";mt=1e15;}else if(cnt[me]>land*.5){over=true;msg="G'alaba! Dunyo sizniki!";mt=1e15;}
 hud();draw();}
function start(){clearInterval(timer);if(speed)timer=setInterval(tick,1000/speed);}
function zoomAt(x,y,k){const ns=Math.min(16,Math.max(1,sc*k));k=ns/sc;ox=x-(x-ox)*k;oy=y-(y-oy)*k;sc=ns;draw();}
function center(i){sc=5;const c=c0*sc,cp=CAPC[i];ox=innerWidth/2-(cp%W+.5)*c;oy=innerHeight/2-((cp/W|0)+.5)*c;draw();}
function intro(i){msg=NM[K[i]][0]+" | Sarkardalar: "+NM[K[i]][1].join(', ');mt=Date.now()+7000;hud();}
function market(){showPanel('💱 Bozor | 💰'+Math.floor(gold)+' 🥈'+Math.floor(silv)+' 🛢'+Math.floor(oil));
 [['10🥈 → 14💰',()=>silv>=10&&(silv-=10,gold+=14)],['10💰 → 6🥈',()=>gold>=10&&(gold-=10,silv+=6)],['10🛢 → 13💰',()=>oil>=10&&(oil-=10,gold+=13)],['20💰 → 8🛢',()=>gold>=20&&(gold-=20,oil+=8)]].forEach(e=>pbtn(e[0],()=>{if(!e[1]())note('Resurs yetmaydi');market();hud();}));
 pbtn('✖',()=>{pn.style.display='none';});}
function save(){try{let s='';for(let i=0;i<co.length;i++)s+=String.fromCharCode(48+(co[i]===SEA?60:co[i]));localStorage.setItem('d1775e'+ERAI,JSON.stringify({me,co:s,T,F,gold,silv,oil,months,peace,trade,B,capLost,ships}));}catch(e){}}
function load(sv){me=sv.me;for(let i=0;i<co.length;i++){const v=sv.co.charCodeAt(i)-48;co[i]=v===60?SEA:v;}sv.T.forEach((v,i)=>T[i]=v);sv.F.forEach((v,i)=>F[i]=v);gold=sv.gold;silv=sv.silv;oil=sv.oil;months=sv.months;peace=sv.peace;trade=sv.trade;B.length=0;sv.B.forEach(b=>B.push(b));capLost=sv.capLost||{};ships=sv.ships||0;}
document.getElementById('bz').onclick=()=>{if(me>=0)market();};
document.getElementById('sp').onclick=e=>{speed=speed===1?2:speed===2?4:speed===4?0:1;e.target.textContent=speed?speed+'x':'⏸';if(me>=0)start();};
document.getElementById('zi').onclick=()=>zoomAt(innerWidth/2,innerHeight/2,1.5);
document.getElementById('zo').onclick=()=>zoomAt(innerWidth/2,innerHeight/2,1/1.5);
const ptr=new Map();let pd=0,mv=false,s0=[0,0];
cv.addEventListener('pointerdown',e=>{cv.setPointerCapture(e.pointerId);ptr.set(e.pointerId,[e.clientX,e.clientY]);mv=false;s0=[e.clientX,e.clientY];pd=0;});
cv.addEventListener('pointermove',e=>{if(!ptr.has(e.pointerId))return;const o=ptr.get(e.pointerId);
 if(ptr.size===1){if(Math.abs(e.clientX-s0[0])+Math.abs(e.clientY-s0[1])>8)mv=true;if(mv){ox+=e.clientX-o[0];oy+=e.clientY-o[1];draw();}}
 ptr.set(e.pointerId,[e.clientX,e.clientY]);
 if(ptr.size===2){mv=true;const v=[...ptr.values()],d=Math.hypot(v[0][0]-v[1][0],v[0][1]-v[1][1]);if(pd)zoomAt((v[0][0]+v[1][0])/2,(v[0][1]+v[1][1])/2,d/pd);pd=d;}});
cv.addEventListener('pointerup',e=>{const was=ptr.size===1&&!mv;ptr.delete(e.pointerId);pd=0;if(was)tap(e.clientX,e.clientY);});
cv.addEventListener('pointercancel',e=>{ptr.delete(e.pointerId);pd=0;});
for(let i=0;i<NEU;i++){const k=K[i],b=document.createElement('button');b.className='nb';b.style.background=N[k][1];
 if(LT(N[k][1]))b.style.color='#000';
 b.textContent=emb(i)+' '+N[k][0]+' — '+NM[k][0];b.onclick=()=>{me=i;menu.style.display='none';center(i);start();tick();music();intro(i);};menu.appendChild(b);}
{const bk=document.createElement('button');bk.className='nb';bk.style.background='#555';bk.textContent="⬅ Davrni o'zgartirish";bk.onclick=()=>{try{localStorage.removeItem('eraSel');}catch(e){}location.reload();};menu.appendChild(bk);}
try{const sv=JSON.parse(localStorage.getItem('d1775y'+E.y)||'null');if(sv&&sv.me>=0){const b=document.createElement('button');b.className='nb';b.style.background='#2a2';b.textContent='Davom ettirish: '+N[K[sv.me]][0];b.onclick=()=>{load(sv);menu.style.display='none';paint();center(me);start();tick();music();};menu.insertBefore(b,menu.children[2]);}}catch(e){}
function coastal(c){const x=c%W,y=(c/W)|0;return x>0&&co[c-1]===SEA||x<W-1&&co[c+1]===SEA||y>0&&co[c-W]===SEA||y<H-1&&co[c+W]===SEA;}
function ports(){let n=0;for(const b of B)if(b[1]===3&&co[b[0]]===me)n++;return n;}
function buyShip(c){if(gold<60||silv<10){note('Resurs yetmaydi');return;}gold-=60;silv-=10;ships++;sfx('coin');panelOwn(c);hud();draw();}
function portSea(p){const x=p%W,y=(p/W)|0;for(let r=1;r<=3;r++)for(let dy=-r;dy<=r;dy++)for(let dx=-r;dx<=r;dx++){const nx=x+dx,ny=y+dy;if(nx<0||ny<0||nx>=W||ny>=H)continue;if(co[ny*W+nx]===SEA)return ny*W+nx;}return -1;}
function nearLand(c){const x=c%W,y=(c/W)|0;for(let dy=-2;dy<=2;dy++)for(let dx=-2;dx<=2;dx++){const nx=x+dx,ny=y+dy;if(nx<0||ny<0||nx>=W||ny>=H)continue;if(co[ny*W+nx]===me)return true;}return false;}
function near(c){if(nearLand(c))return true;if(ships<=0)return false;const R=Math.min(20,5+ships*3),x=c%W,y=(c/W)|0;for(let dy=-R;dy<=R;dy++)for(let dx=-R;dx<=R;dx++){const nx=x+dx,ny=y+dy;if(nx<0||ny<0||nx>=W||ny>=H)continue;if(co[ny*W+nx]===me)return true;}return false;}
window.addEventListener('resize',fit);fit();paint();draw();
