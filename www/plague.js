const PLG=[];let MED=0,QUA=0,PLI=null;
const PAND=[[117,165,1,"Antonin vabosi","🦠",36,34,.5,48,45,0],[632,639,5,"Amvas vabosi","🦠",35,32,.5,18,25,0],[1300,1347,10,"Qora o'lim","☠️",35,45,.9,72,70,0],[1400,1438,6,"Vabo to'lqini","🦠",5,50,.5,30,35,0],[1500,1520,4,"Chechak epidemiyasi (Amerika)","🦠",-97,19,.85,48,50,1],[1650,1665,6,"Buyuk vabo (London)","☠️",0,51.5,.55,18,22,0],[1775,1793,8,"Sariq isitma","🦠",-75,40,.4,18,18,0],[1810,1817,8,"Kolera pandemiyasi","🦠",88,23,.4,36,70,0],[1910,1918,3,"Ispan grippi","🦠",-97,38,.6,24,95,0],[1939,1957,2,"Osiyo grippi","🦠",103,25,.3,18,60,0],[2020,2020,2,"COVID-19 pandemiyasi","🦠",114,30.6,.3,30,120,0]];
const PLM=new Map();PAND.forEach(e=>{if(e[0]===E.y){const m=(e[1]-e[0])*12+(e[2]-1);(PLM.get(m)||PLM.set(m,[]).get(m)).push(e);}});
const plh=(a,b)=>{let h=(a*374761393+b*668265263)|0;h=(h^(h>>>13))*1274126177|0;return((h^(h>>>16))>>>0)/4294967295;};
function plRes(i){const t=tierOf(i);let r=t>=8?.25:t>=7?.35:t>=6?.5:t>=5?.7:1;if(i===me){r*=1-.2*MED;if(QUA>months)r*=.5;}if(t>=7&&PLG.some(p=>p.dur-p.left>12))r*=.6;return r;}
function plStart(n,e,lo,la,sev,dur,mr,reg){PLG.push({n,e,x:lo+180,y:TOP-la,r:2,mr,sev,left:dur,dur,reg});
 if(sev>=.4&&me>=0)dpCard(e+" "+n,"Dunyoda yangi epidemiya boshlandi. U sizning hududingizga ham yetib kelishi mumkin. Karantin e'lon qilasizmi?",[["🚧 Karantin (80💰, 12 oy)",()=>{if(gold>=80){gold-=80;QUA=months+12;}else note('Oltin yetmaydi');}],["Kutish",null]]);
 else{msg=e+" "+n+" boshlandi";mt=Date.now()+6000;}}
function plMonth(){for(const p of PLG){p.r=Math.min(p.mr,p.r+p.mr/(p.dur*.7));p.left--;}
 for(let k=PLG.length-1;k>=0;k--)if(PLG[k].left<=0){msg="🦠 "+PLG[k].n+" susaydi";mt=Date.now()+5000;PLG.splice(k,1);}
 PLI=null;if(!PLG.length)return;const hit=new Array(NEU).fill(0);
 for(let c=0;c<co.length;c++){const o=co[c];if(o>=NEU)continue;const x=c%W,y=(c/W)|0;let v=0;
  for(const p of PLG){if(p.reg===1&&x>150)continue;const d=Math.hypot(x-p.x,y-p.y);if(d<p.r*(.85+.3*plh(x,y)))v+=p.sev*Math.sin(Math.PI*clp(1-p.left/p.dur,0,1));}
  if(v>0)hit[o]+=v;}
 for(let i=0;i<NEU;i++){if(cnt[i]<=0||hit[i]<=0)continue;const fr=hit[i]/cnt[i],lf=clp(fr*.07*plRes(i),0,.25);T[i]=Math.max(5,T[i]*(1-lf));
  if(i===me){gold=Math.max(0,gold*(1-lf*.4));PLI={n:PLG[0].n,e:PLG[0].e,fr:Math.min(1,fr)};}}}
const _tkP=tick;tick=function(){_tkP();if(me<0||over)return;
 if(PLM.has(months))for(const e of PLM.get(months))plStart(e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10]);
 else{const t=tierOf(me),ch=t>=6?.002:t>=3?.005:.008;
  if(Math.random()<ch&&PLG.length<3){const nm=t>=6?'Gripp':t>=4?'Kolera':t>=2?'Vabo':'Chechak';let lo=0,la=0;
   if(typeof CITIES!=='undefined'&&CITIES.length){const ct=CITIES[(Math.random()*CITIES.length)|0];lo=ct[1];la=ct[2];}else{lo=-180+Math.random()*360;la=TOP-Math.random()*H;}
   plStart(nm+" epidemiyasi","🦠",lo,la,.25+Math.random()*.2,12+((Math.random()*12)|0),12+((Math.random()*14)|0),0);}}
 plMonth();if(dirty){paint();dirty=false;}hud();draw();};
const _poP=panelOwn;panelOwn=function(c){_poP(c);const ex=pn.lastChild,add=(t,f)=>{pbtn(t,f);pn.insertBefore(pn.lastChild,ex);};
 if(MED<3){const g=[120,220,380][MED],s=[10,25,50][MED];add('🏥 Tibbiyot ★'+MED+' → '+(MED+1)+' ('+g+'💰 '+s+'🥈)',()=>{if(gold<g||silv<s){note('Resurs yetmaydi');return;}gold-=g;silv-=s;MED++;note('🏥 Tibbiyot yaxshilandi: epidemiya zarari kamaydi');panelOwn(c);hud();});}
 if(PLG.length&&QUA<=months)add('🚧 Karantin 12 oy (80💰)',()=>{if(gold<80){note('Oltin yetmaydi');return;}gold-=80;QUA=months+12;note("🚧 Karantin e'lon qilindi");panelOwn(c);hud();});};
const _huP=hud;hud=function(){_huP();if(me>=0&&Date.now()>=mt){if(PLI)info.textContent+=' | '+PLI.e+' '+PLI.n+' '+Math.round(PLI.fr*100)+'%';if(QUA>months)info.textContent+=' | 🚧';}};
const _drP=draw;draw=function(){_drP();if(!PLG.length)return;const c=c0*sc;
 for(const p of PLG){const x=ox+p.x*c,y=oy+p.y*c,r=p.r*c;if(r<2)continue;const k=Math.sin(Math.PI*clp(1-p.left/p.dur,0,1)),g=cx.createRadialGradient(x,y,0,x,y,r);
  g.addColorStop(0,'rgba(120,200,60,'+(.18+.1*k)+')');g.addColorStop(.8,'rgba(110,60,170,'+(.12+.08*k)+')');g.addColorStop(1,'rgba(110,60,170,0)');cx.fillStyle=g;cx.beginPath();cx.arc(x,y,r,0,6.3);cx.fill();
  if(c>=.6){cx.font=Math.min(26,Math.max(14,c*3))+'px sans-serif';cx.textAlign='center';cx.textBaseline='middle';cx.fillStyle='#fff';cx.fillText(p.e,x,y);}}};
const _svP=save;save=function(){_svP();try{const k='d1775y'+E.y,sv=JSON.parse(localStorage.getItem(k));if(!sv)return;sv.pl={PLG,MED,QUA};localStorage.setItem(k,JSON.stringify(sv));}catch(e){}};
const _ldP=load;load=function(sv){_ldP(sv);if(!sv.pl)return;PLG.length=0;(sv.pl.PLG||[]).forEach(p=>PLG.push(p));MED=sv.pl.MED||0;QUA=sv.pl.QUA||0;};
