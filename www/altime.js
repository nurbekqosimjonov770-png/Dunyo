(function(){
if(typeof dpActs!=='function'||typeof dpDo!=='function'||typeof allied!=='function'||typeof dpCard!=='function')return;
const ALX=new Array(NEU).fill(0),ALD2=[[2,'2 yil'],[5,'5 yil'],[8,'8 yil'],[15,'15 yil']];
const alCost=y=>Math.round(100*(1+y/8));
const alP=(d,y)=>clp(dpP(d,'ally')+(y<=2?.12:y<=5?.04:y<=8?-.05:-.15),0,.95);
const alLeft=d=>{const m=ALX[d]-months;if(m<=0)return'';const y=Math.floor(m/12),r=m%12;return(y?y+' yil ':'')+(r?r+' oy':'');};
const say=t=>{msg=t;mt=Date.now()+6000;hud();};
function allyDo(d,y){const nm=N[K[d]][0],renew=allied(me,d);
 if(!renew&&REL[d]<20&&!(peace[d]>months||trade[d]>months))return"Munosabat yetarli emas (kamida +20, hozir "+Math.round(REL[d])+"). Avval sovg'a yoki savdo qiling.";
 const cost=alCost(y);if(gold<cost)return'Oltin yetmaydi ('+cost+'💰)';
 if(!renew&&ALY[me]>=0&&ALY.filter(x=>x===ALY[me]).length>=6)return"Ittifoq to'lgan (6 ta)";
 if(!renew&&ALY[d]>=0&&ALY[d]!==ALY[me])return'U boshqa ittifoqda';
 gold-=cost;
 if(Math.random()<alP(d,y)){if(!renew){dpBloc();ALY[d]=ALY[me];}ALX[d]=months+y*12;REL[d]=clp(REL[d]+8+y,-100,100);return'🤝 '+nm+' bilan ittifoq '+(renew?'uzaytirildi':'tuzildi')+' ('+y+' yil)';}
 REL[d]=clp(REL[d]-4,-100,100);return'❌ '+nm+' ittifoqni rad etdi';}
const _dd=dpDo;dpDo=function(d,type,amt){if(type==='ally')return allyDo(d,amt||5);return _dd(d,type,amt);};
const _da2=dpActs;dpActs=function(row,d){_da2(row,d);const bx=row.lastChild;if(!bx)return;
 const mkb2=(t,f)=>{const x=document.createElement('button');x.textContent=t;x.style.cssText='margin:3px;padding:7px 10px;font-size:13px;border:0;border-radius:8px';x.onclick=e=>{e.stopPropagation();f();};return x;};
 if(allied(me,d)){const inf=document.createElement('div');inf.style.cssText='font-size:12px;opacity:.9;margin:4px 0';inf.textContent=ALX[d]>0?'⏳ Ittifoq muddati: '+alLeft(d)+' qoldi':'∞ Ittifoq muddatsiz (tarixiy)';bx.insertBefore(inf,bx.children[1]||null);
  if(!VAS[d]&&ALX[d]>0)ALD2.forEach(a=>bx.appendChild(mkb2('🔁 '+a[1]+' uzaytirish '+alCost(a[0])+'💰 ~'+Math.round(alP(d,a[0])*100)+'%',()=>{DPM=allyDo(d,a[0])||'';dpRender();hud();})));
  return;}
 const old=[...bx.children].find(el=>el.tagName==='BUTTON'&&el.textContent.indexOf('🤝 Ittifoq')===0);
 if(old){ALD2.forEach(a=>bx.insertBefore(mkb2('🤝 '+a[1]+' '+alCost(a[0])+'💰 ~'+Math.round(alP(d,a[0])*100)+'%',()=>{DPM=allyDo(d,a[0])||'';dpRender();hud();}),old));old.remove();}};
if(typeof propose==='function')propose=function(d){if(gold<100){note('Oltin yetmaydi');return;}
 if(!(peace[d]>months||trade[d]>months||REL[d]>=20)){note('Avval tinchlik, savdo shartnomasi tuzing yoki munosabatni oshiring');return;}
 const opts=ALD2.map(a=>["🤝 "+a[1]+" ("+alCost(a[0])+"💰, ~"+Math.round(alP(d,a[0])*100)+"%)",()=>say(allyDo(d,a[0]))]);opts.push(["Bekor qilish",null]);
 dpCard('🤝 Ittifoq muddati',N[K[d]][0]+" bilan ittifoq necha yilga tuziladi? Uzoq ittifoq ishonchli, lekin qimmatroq va rad etilish ehtimoli yuqori. Muddatidan oldin buzsangiz obro' tushadi.",opts);};
if(typeof dpOffer==='function')dpOffer=function(){const c=[];for(let i=0;i<NEU;i++){if(i===me||cnt[i]<=0||allied(me,i))continue;
  if(REL[i]>=35&&cnt[i]>40)c.push([i,'ally']);
  if(!(peace[i]>months)&&dpRat(i)<.7&&REL[i]<20&&cnt[i]>60)c.push([i,'tribute']);}
 if(!c.length)return;const [d,t]=c[Math.floor(Math.random()*c.length)],nm=N[K[d]][0];
 if(t==='ally'){const opts=[2,5,8].map(y=>["✅ "+y+" yilga qabul qilish",()=>{if(ALY[me]>=0&&ALY.filter(x=>x===ALY[me]).length>=6){say("Ittifoq to'lgan");return;}dpBloc();ALY[d]=ALY[me];ALX[d]=months+y*12;REL[d]=clp(REL[d]+10,-100,100);say('🤝 '+nm+' bilan '+y+' yillik ittifoq tuzildi');}]);
  opts.push(["❌ Rad etish",()=>{REL[d]=clp(REL[d]-5,-100,100);}]);dpCard('🤝 Ittifoq taklifi',nm+' (munosabat '+Math.round(REL[d])+') sizga harbiy ittifoq taklif qilmoqda. Qancha muddatga?',opts);}
 else{const amt=Math.round(50+cnt[d]*.2);dpCard('💰 Tribut talabi',nm+" kuchliroq bo'lib, sizdan "+amt+" oltin talab qilmoqda. Rad etsangiz urush xavfi oshadi.",[["💰 To'lash ("+amt+")",()=>{gold=Math.max(0,gold-amt);REL[d]=clp(REL[d]+8,-100,100);REP=clp(REP-2,0,100);}],["❌ Rad etish",()=>{REL[d]=clp(REL[d]-20,-100,100);T[d]*=1.12;}]]);}};
const _tkA=tick;tick=function(){_tkA();if(me<0||over)return;const brk=[];
 for(let i=0;i<NEU;i++){if(i===me||ALX[i]<=0)continue;
  if(!allied(me,i)){if(months<ALX[i]&&!VAS[i])brk.push(i);ALX[i]=0;continue;}
  const left=ALX[i]-months;
  if(left<=0){ALY[i]=-1;ALX[i]=0;REL[i]=clp(REL[i]-2,-100,100);say('⏳ '+N[K[i]][0]+' bilan ittifoq muddati tugadi');}
  else if(left===3){const d=i;dpCard('⏳ Ittifoq tugayapti',N[K[d]][0]+' bilan ittifoq 3 oydan keyin tugaydi. Uzaytirasizmi?',[...[2,5,8].map(y=>["🔁 "+y+" yilga ("+alCost(y)+"💰, ~"+Math.round(alP(d,y)*100)+"%)",()=>say(allyDo(d,y))]),["Tugasin",null]]);}}
 if(brk.length){REP=clp(REP-12-3*(brk.length-1),0,100);brk.forEach(i=>{REL[i]=clp(REL[i]-25,-100,100);});say("💔 Ittifoq muddatidan oldin buzildi: obro' tushdi");}
 hud();};
const _peA=panelEnemy;panelEnemy=function(){_peA();if(!tgt||tgt.fleet||tgt.d===undefined||tgt.d>=NEU||!pn.firstChild)return;const d=tgt.d;if(allied(me,d))pn.firstChild.textContent+=ALX[d]>0?' | ⏳ '+alLeft(d):' | ∞';};
if(typeof showAlliances==='function'){const _sa=showAlliances;showAlliances=function(){_sa();const L=[];for(let i=0;i<NEU;i++)if(ALX[i]>0&&allied(me,i))L.push(emb(i)+' '+N[K[i]][0]+': '+alLeft(i));
 if(L.length){const d=document.createElement('div');d.style.cssText='margin:3px;text-align:left;font-size:13px';d.textContent='⏳ Muddatli: '+L.join(' · ');pn.insertBefore(d,pn.lastChild);}};}
const _svA=save;save=function(){_svA();try{const k='d1775y'+E.y,sv=JSON.parse(localStorage.getItem(k));if(!sv)return;sv.alx=ALX;localStorage.setItem(k,JSON.stringify(sv));}catch(e){}};
const _ldA=load;load=function(sv){_ldA(sv);ALX.fill(0);if(sv.alx)sv.alx.forEach((v,i)=>ALX[i]=v);};
const _inA=intro;intro=function(i){ALX.fill(0);_inA(i);};
})();
