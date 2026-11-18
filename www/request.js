(function(){
if(typeof dpActs!=='function'||typeof dpCard!=='function'||typeof allied!=='function'||typeof REL==='undefined')return;
const AUX=[],RQCD=new Array(NEU).fill(0);
const cq=(v,a,b)=>v<a?a:v>b?b:v,say=t=>{msg=t;mt=Date.now()+8000;hud();};
const seaOK=a=>typeof FLT!=='undefined'&&FLT[a]>0,hv=a=>typeof HELP!=='undefined'&&HELP[a]>=months-12;
function rqBase(a){let p=.5+REL[a]/150;if(typeof REP!=='undefined')p+=(REP-50)/300;if(hv(a))p-=.25;if(RQCD[a]>months)p-=.3;if(typeof VAS!=='undefined'&&VAS[a])p+=.25;return p;}
const aidP=(a,f)=>cq(rqBase(a)-f*.8+.1,.03,.95);
const atkP=(a,d)=>{const r=Math.sqrt(Math.max(1,T[a]))/Math.sqrt(Math.max(1,(d<NEU?T[d]:30)*.8));return cq(rqBase(a)+cq((r-1)*.25,-.35,.2)-(d<NEU&&REL[d]>20?.15:0),.03,.92);};
function myCell(){const c=CAPC[me];if(c>=0&&co[c]===me)return c;for(let i=0;i<co.length;i++)if(co[i]===me)return i;return -1;}
function routeToCell(o,tc,sea){const prev=new Int32Array(W*H).fill(-2);prev[tc]=-1;const q=[tc];let found=-1;
 for(let h=0;h<q.length&&found<0;h++){const c=q[h],x=c%W,y=(c/W)|0;
  for(let dy=-1;dy<=1&&found<0;dy++)for(let dx=-1;dx<=1;dx++){if(!dx&&!dy)continue;const nx=x+dx,ny=y+dy;if(nx<0||ny<0||nx>=W||ny>=H)continue;const n=ny*W+nx;if(prev[n]!==-2)continue;if(co[n]===SEA&&!sea)continue;prev[n]=c;if(co[n]===o){found=n;break;}q.push(n);}}
 if(found<0)return null;const p=[];for(let c=found;c!==-1;c=prev[c])p.push(c);return p;}
function routeToNation(o,d,sea){const prev=new Int32Array(W*H).fill(-2),q=[];
 for(let c=0;c<co.length;c++)if(co[c]===o){prev[c]=-1;q.push(c);}
 let found=-1;
 for(let h=0;h<q.length&&found<0;h++){const c=q[h],x=c%W,y=(c/W)|0;
  for(let dy=-1;dy<=1&&found<0;dy++)for(let dx=-1;dx<=1;dx++){if(!dx&&!dy)continue;const nx=x+dx,ny=y+dy;if(nx<0||ny<0||nx>=W||ny>=H)continue;const n=ny*W+nx;if(prev[n]!==-2)continue;const v=co[n];if(v===SEA&&!sea)continue;prev[n]=c;if(v===d){found=n;break;}q.push(n);}}
 if(found<0)return null;const p=[];for(let c=found;c!==-1;c=prev[c])p.push(c);p.reverse();return p;}
function askAid(a){const nm=N[K[a]][0];if(a===me||!allied(me,a))return;
 if(gold<20){say("Oltin yetmaydi (elchi 20💰)");return;}
 const opts=[[.1,"Kichik"],[.2,"O'rta"],[.3,"Katta"]].map(s=>{const n=Math.floor(T[a]*s[0]);return[s[1]+" ("+n+" askar, ~"+Math.round(aidP(a,s[0])*100)+"%)",()=>doAid(a,s[0])];});
 opts.push(["Bekor qilish",null]);
 dpCard("📣 Yordamchi qo'shin so'rash",nm+"dan qancha yordamchi qo'shin so'raysiz? Elchi harajati 20💰. U hozir "+Math.floor(T[a])+" askarga ega."+(hv(a)?" ⚠️ U o'zi ham hujumga uchragan.":"")+(RQCD[a]>months?" ⚠️ Yaqinda so'rov qilgansiz.":""),opts);}
function doAid(a,f){const nm=N[K[a]][0];if(gold<20){say("Oltin yetmaydi");return;}gold-=20;
 const n=Math.floor(T[a]*f);if(n<10){say(nm+": qo'shini juda kam");gold+=20;return;}
 if(Math.random()>=aidP(a,f)){RQCD[a]=months+4;REL[a]=cq(REL[a]-2,-100,100);say("❌ "+nm+" yordamchi qo'shin yuborishni rad etdi"+(hv(a)?" (o'zi ham hujumda)":""));return;}
 const tc=myCell(),sea=seaOK(a),route=tc>=0?routeToCell(a,tc,sea):null;
 if(!route){say("📣 "+nm+" rozi bo'ldi, lekin yo'l topilmadi (dengiz uchun flot kerak)");gold+=20;return;}
 T[a]-=n;RQCD[a]=months+6;AUX.push({o:a,n,route,p:0,sea,kind:"aid"});
 say("🪖 "+nm+" "+n+" askarli yordamchi qo'shin yubordi ("+route.length+" katak)");if(typeof sfx==='function')sfx('horn');draw();}
function askAtk(a){const nm=N[K[a]][0],cp=CAPC[a],L=[];
 for(let d=0;d<NEU;d++){if(d===me||d===a||cnt[d]<=0||allied(me,d)||allied(a,d)||peace[d]>months||trade[d]>months)continue;const c2=CAPC[d];if(cp<0||c2<0)continue;L.push([d,Math.hypot(cp%W-c2%W,((cp/W)|0)-((c2/W)|0))]);}
 L.sort((x,y)=>x[1]-y[1]);
 const opts=[];
 L.slice(0,6).forEach(e=>{const d=e[0];opts.push([emb(d)+" "+N[K[d]][0]+" (~"+Math.round(atkP(a,d)*100)+"%)",()=>doAtk(a,d)]);});
 if(cnt[NEU]>0)opts.push(["🏴 Mahalliy yerlar (~"+Math.round(atkP(a,NEU)*100)+"%)",()=>doAtk(a,NEU)]);
 if(!opts.length){say("Hujum qilish uchun mos dushman yo'q");return;}
 opts.push(["Bekor qilish",null]);
 dpCard("⚔ Hujum qilishni so'rash",nm+" qaysi dushmanga hujum qilsin? Elchi harajati 40💰. U qo'shinining 45% ini yuboradi (hozir "+Math.floor(T[a])+" askar).",opts);}
function doAtk(a,d){const nm=N[K[a]][0],dn=d<NEU?N[K[d]][0]:"mahalliy yerlar";if(gold<40){say("Oltin yetmaydi (elchi 40💰)");return;}gold-=40;
 if(Math.random()>=atkP(a,d)){RQCD[a]=months+4;REL[a]=cq(REL[a]-3,-100,100);say("❌ "+nm+" "+dn+"ga hujum qilishni rad etdi");return;}
 const route=routeToNation(a,d,seaOK(a)),n=Math.floor(T[a]*.45);
 if(!route){say("📣 "+nm+" rozi bo'ldi, lekin "+dn+"ga yo'l yo'q");gold+=40;return;}
 if(n<15){say(nm+": qo'shini juda kam");gold+=40;return;}
 T[a]-=n;RQCD[a]=months+8;if(typeof HOST!=='undefined')HOST[d]=Math.max(HOST[d]||0,months+48);
 AUX.push({o:a,n,route,p:0,sea:seaOK(a),kind:"attack",d});if(d<NEU)REL[d]=cq(REL[d]-10,-100,100);
 say("⚔ "+nm+" "+dn+"ga hujum qilishga rozi bo'ldi: "+n+" askar yo'lga chiqdi");if(typeof sfx==='function')sfx('horn');draw();}
function auxArrive(u){const i=AUX.indexOf(u);if(i>=0)AUX.splice(i,1);const o=u.o,nm=N[K[o]][0];
 if(!allied(me,o)){T[o]+=u.n;say("📣 Ittifoq tugagan: "+nm+" qo'shini ortga qaytdi");draw();return;}
 if(u.kind==="aid"){T[me]+=u.n;say("🤝 "+nm+" yordamchi qo'shini yetib keldi: +"+u.n+" askar");if(typeof sfx==='function')sfx('win');draw();hud();return;}
 const d=u.d;let t=u.route[u.route.length-1];
 if(co[t]!==d){let f=-1;const x0=t%W,y0=(t/W)|0;for(let r=1;r<=6&&f<0;r++)for(let dy=-r;dy<=r&&f<0;dy++)for(let dx=-r;dx<=r;dx++){const nx=x0+dx,ny=y0+dy;if(nx<0||ny<0||nx>=W||ny>=H)continue;if(co[ny*W+nx]===d){f=ny*W+nx;break;}}
  if(f<0){T[o]+=u.n;say("⚔ "+nm+": nishon hududi o'zgargan, qo'shin qaytdi");draw();return;}t=f;}
 T[o]+=u.n;const Td=d<NEU?Math.max(T[d]*.55,1):35,got=autoWar(o,d,t,u.n,Td);
 if(dirty){paint();dirty=false;}
 const dn=d<NEU?N[K[d]][0]:"mahalliy yerlar";
 say(got>0?"⚔ "+nm+" iltimosingiz bilan "+dn+"dan "+got+" katak egalladi!":"⚔ "+nm+" hujumi "+dn+"ga muvaffaqiyatsiz bo'ldi");
 if(typeof sfx==='function')sfx(got>0?'win':'lose');draw();hud();}
setInterval(()=>{if(me<0||over||!speed||!AUX.length)return;
 if(typeof inB!=='undefined'&&inB)return;if(typeof battling!=='undefined'&&battling)return;
 if(typeof DPB!=='undefined'&&DPB&&DPB.style.display!=='none')return;if(typeof DPO!=='undefined'&&DPO&&DPO.style.display!=='none')return;
 const dt=.1*speed,sp=typeof armySp==='function'?armySp():2.6;let arr=null;
 for(const u of AUX){u.p+=sp*dt;if(u.p>=u.route.length-1){u.p=u.route.length-1;if(!arr)arr=u;}}
 if(arr)auxArrive(arr);draw();},100);
function auxPos(u){const L=u.route.length-1,i=Math.min(L,Math.floor(u.p)),j=Math.min(L,i+1),f=u.p-i,c1=u.route[i],c2=u.route[j];return[(c1%W)+.5+((c2%W)-(c1%W))*f,((c1/W)|0)+.5+(((c2/W)|0)-((c1/W)|0))*f];}
function drawAux(c){if(!AUX.length||me<0)return;cx.textAlign='center';cx.textBaseline='middle';
 for(const u of AUX){const p0=auxPos(u),L=u.route.length-1,lk=u.route[L],o=u.o,col=u.kind==="aid"?'#6f6':'#f84';
  cx.strokeStyle=col;cx.lineWidth=2;cx.setLineDash([5,5]);cx.beginPath();cx.moveTo(ox+p0[0]*c,oy+p0[1]*c);
  for(let i=Math.floor(u.p)+1;i<L;i+=2){const k=u.route[i];cx.lineTo(ox+((k%W)+.5)*c,oy+(((k/W)|0)+.5)*c);}
  cx.lineTo(ox+((lk%W)+.5)*c,oy+(((lk/W)|0)+.5)*c);cx.stroke();cx.setLineDash([]);
  const x=ox+p0[0]*c,y=oy+p0[1]*c,r=Math.max(10,Math.min(16,c*2.2));
  cx.beginPath();cx.arc(x,y,r,0,6.3);cx.fillStyle=COL[o];cx.fill();cx.lineWidth=2.5;cx.strokeStyle=col;cx.stroke();
  cx.font=(r*1.1)+'px sans-serif';cx.fillStyle='#fff';cx.fillText(u.kind==="aid"?'🪖':'⚔',x,y);
  if(typeof flag==='function')flag(cx,x+r*.5,y-r*.5,o,Math.max(11,r*1.1),Math.max(7,r*.75));
  cx.font='bold '+(r*.72)+'px sans-serif';cx.lineWidth=3;cx.strokeStyle='#000b';cx.fillStyle='#fff';cx.strokeText(fmt(u.n),x,y+r+8);cx.fillText(fmt(u.n),x,y+r+8);}}
const _dfR=drawFleets;drawFleets=function(c){_dfR(c);drawAux(c);};
const _tpR=tap;tap=function(px,py){if(me>=0&&!over){const c=c0*sc;for(const u of AUX){const p=auxPos(u);
  if(Math.hypot(px-(ox+p[0]*c),py-(oy+p[1]*c))<22){tgt=null;const left=u.route.length-1-u.p;
   showPanel((u.kind==="aid"?"🪖 Yordamchi qo'shin":"⚔ Hujum qo'shini")+": "+emb(u.o)+" "+N[K[u.o]][0]+" | "+u.n+" askar | qolgan: "+Math.round(left)+" katak");
   pbtn('✖',()=>{pn.style.display='none';});draw();return;}}}_tpR(px,py);};
const _daR=dpActs;dpActs=function(row,d){_daR(row,d);if(!allied(me,d))return;const bx=row.lastChild;if(!bx)return;
 const mkb2=(t,f)=>{const x=document.createElement('button');x.textContent=t;x.style.cssText='margin:3px;padding:7px 10px;font-size:13px;border:0;border-radius:8px';x.onclick=e=>{e.stopPropagation();f();};bx.appendChild(x);};
 mkb2("📣 Yordamchi qo'shin so'rash (20💰)",()=>{dpClose();askAid(d);});
 mkb2("⚔ Hujum qilishni so'rash (40💰)",()=>{dpClose();askAtk(d);});};
const _peR=panelEnemy;panelEnemy=function(){_peR();if(!tgt||tgt.fleet||tgt.d===undefined||tgt.d>=NEU||!allied(me,tgt.d)||!pn.firstChild)return;
 const d=tgt.d,ex=pn.lastChild,add=(t,f)=>{pbtn(t,f);pn.insertBefore(pn.lastChild,ex);};
 add("📣 Yordamchi qo'shin so'rash (20💰)",()=>{pn.style.display='none';askAid(d);});
 add("⚔ Hujum qilishni so'rash (40💰)",()=>{pn.style.display='none';askAtk(d);});};
const _svR=save;save=function(){_svR();try{const k='d1775y'+E.y,sv=JSON.parse(localStorage.getItem(k));if(!sv)return;sv.aux=AUX;sv.rqcd=RQCD;localStorage.setItem(k,JSON.stringify(sv));}catch(e){}};
const _ldR=load;load=function(sv){_ldR(sv);AUX.length=0;(sv.aux||[]).forEach(u=>AUX.push(u));RQCD.fill(0);if(sv.rqcd)sv.rqcd.forEach((v,i)=>RQCD[i]=v);};
const _inR=intro;intro=function(i){AUX.length=0;RQCD.fill(0);_inR(i);};
})();
