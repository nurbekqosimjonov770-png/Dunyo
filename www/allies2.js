const HELP={},AID={t:0,s:''};
function findAllyRoute(t){if(me<0||t<0||co[t]===SEA||!allied(me,co[t]))return null;
 for(const sea of(ships>0?[false,true]:[false])){
  const prev=new Int32Array(W*H).fill(-2);prev[t]=-1;const q=[t];let found=-1;
  for(let h=0;h<q.length&&found<0;h++){const c=q[h],x=c%W,y=(c/W)|0;
   for(let dy=-1;dy<=1&&found<0;dy++)for(let dx=-1;dx<=1;dx++){if(!dx&&!dy)continue;const nx=x+dx,ny=y+dy;if(nx<0||ny<0||nx>=W||ny>=H)continue;const n=ny*W+nx;if(prev[n]!==-2)continue;if(co[n]===SEA&&!sea)continue;prev[n]=c;if(co[n]===me){found=n;break;}q.push(n);}}
  if(found>=0){const p=[];for(let c=found;c!==-1;c=prev[c])p.push(c);return p;}}
 return null;}
function sendAid(d,cell,route){if(co[cell]!==d||!allied(me,d)){note("Ittifoq holati o'zgardi");return;}
 const commit=Math.floor(T[me]*pct/100);if(commit<10){note("Qo'shin kam");return;}
 if(ARMIES.length>=8){note("Ko'pi bilan 8 ta qo'shin yuborish mumkin");return;}
 const sea=route.some(k=>co[k]===SEA);T[me]-=commit;ARMIES.push({n:commit,route,p:0,sea,ally:true,to:d});
 tgt=null;pn.style.display='none';note("🪖 Yordam yo'lga chiqdi: "+route.length+" katak");if(typeof sfx==='function')sfx('horn');draw();hud();}
const _pe5=panelEnemy;panelEnemy=function(){_pe5();
 if(!tgt||tgt.fleet||tgt.d>=NEU||!allied(me,tgt.d))return;
 const d=tgt.d,cell=tgt.c,route=findAllyRoute(cell),ex=pn.lastChild;
 const add=(t,f)=>{pbtn(t,f);pn.insertBefore(pn.lastChild,ex);};
 if(HELP[d]>=months-12&&pn.firstChild)pn.firstChild.textContent+=" | 🆘 yordam so'ramoqda";
 [25,50,75,100].forEach(p=>add((p===pct?'✅':'')+p+'%',()=>{pct=p;panelEnemy();}));
 if(route)add('🪖 Yordam yuborish '+Math.floor(T[me]*pct/100)+' ('+route.length+' katak)',()=>sendAid(d,cell,route));
 else add("🚫 Yo'l yo'q (kema kerak)",()=>{});};
const _ar=arrive;arrive=function(a){if(!a.ally){_ar(a);return;}
 const i=ARMIES.indexOf(a);if(i>=0)ARMIES.splice(i,1);
 const t=a.route[a.route.length-1],d=co[t];
 if(d===SEA||d>=NEU||!allied(me,d)){T[me]+=a.n;note("Ittifoqchi hududi qo'ldan ketdi: qo'shin qaytdi");draw();return;}
 T[d]+=a.n;
 const x0=t%W,y0=(t/W)|0;let best=-1,bd=1e9;
 for(let dy=-9;dy<=9;dy++)for(let dx=-9;dx<=9;dx++){const nx=x0+dx,ny=y0+dy;if(nx<0||ny<0||nx>=W||ny>=H)continue;const n=ny*W+nx,q=co[n];
  if(q===SEA||q===d||q===me||(q<NEU&&allied(d,q))||(q<NEU&&allied(me,q))||(peaceMode&&q<NEU))continue;
  const dd=dx*dx+dy*dy+(q===NEU?30:0);if(dd<bd){bd=dd;best=n;}}
 let txt="🤝 "+N[K[d]][0]+" qo'shini "+a.n+" askarga kuchaydi";
 if(best>=0){const q=co[best],commit=Math.min(T[d]*.7,a.n*2+T[d]*.3),Td=q===NEU?35:T[q]*.4,got=autoWar(d,q,best,commit,Td);if(got>0){txt+=" | yordamingiz bilan "+got+" hudud egallandi";dirty=true;}}
 if(dirty){paint();dirty=false;}
 msg=txt;mt=Date.now()+7000;if(typeof sfx==='function')sfx('win');hud();draw();};
const _aw2=autoWar;autoWar=function(a,d,n,commit,Td){const got=_aw2(a,d,n,commit,Td);
 if(got>0&&me>=0){
  if(d<NEU&&d!==me&&a!==me&&allied(me,d)&&!allied(me,a)){HELP[d]=months;msg="🆘 "+N[K[d]][0]+" hujumga uchradi: -"+got+" hudud. Yordam yuboring!";mt=Date.now()+6000;}
  if(d===me&&ALY[me]>=0){let b=0;for(let i=0;i<NEU;i++)if(allied(me,i)&&cnt[i]>0){const s=Math.floor(T[i]*.03);T[i]-=s;b+=s;}
   if(b>0){T[me]+=b;AID.s='🤝 Ittifoqchilar yordami: +'+b+' askar';AID.t=Date.now()+6000;}}}
 return got;};
const _hu4=hud;hud=function(){_hu4();if(me>=0&&Date.now()<AID.t&&Date.now()>=mt)info.textContent+=' | '+AID.s;};
function drawHelp(c){if(me<0)return;cx.textAlign='center';cx.textBaseline='middle';
 for(let i=0;i<NEU;i++){if(!(HELP[i]>=months-6)||!allied(me,i)||cnt[i]===0)continue;const cp=CAPC[i];if(cp<0)continue;
  const x=ox+(cp%W+.5)*c,y=oy+(((cp/W)|0)+.5)*c-26;if(x<-30||y<-30||x>innerWidth+30||y>innerHeight+30)continue;
  cx.font='20px sans-serif';cx.fillStyle='#fff';cx.fillText('🆘',x,y);}}
const _df3=drawFleets;drawFleets=function(c){_df3(c);drawHelp(c);};
draw();
