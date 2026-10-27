const TY=[0,1000,1300,1500,1700,1850,1916,1939,1990];
const TECH=[
{n:"Ilk o'rta asr",u:[['⚔️','Qilichbozlar'],['🏹','Kamonchilar'],['🏇','Otliqlar'],['🪨','Katapultalar']],hp:[3,2.5,4,3],sp:[22,16,60,7],rg:[10,90,11,140],dm:[1,1.3,1.6,2.2],rl:[.6,1.8,.7,3.4],sh:[0,1,2,3],nv:['Ladya','Drakkar','Dromon','Katta galera']},
{n:"O'rta asr",u:[['⚔️','Qilichbozlar'],['🏹','Arbaletchilar'],['🏇','Ritsarlar'],['🪨','Manjaniqlar']],hp:[3.2,2.8,4.5,3],sp:[22,16,60,7],rg:[10,100,11,155],dm:[1.1,1.5,1.8,2.5],rl:[.6,1.7,.7,3.3],sh:[0,1,2,3],nv:['Ladya','Galera','Kogga','Katta galera']},
{n:"Kech o'rta asr",u:[['🔱','Pikachilar'],['🏹','Uzun kamonchilar'],['🏇',"Og'ir otliqlar"],['💣','Bombardalar']],hp:[3.4,3,4.6,3.4],sp:[22,16,58,7],rg:[11,110,11,165],dm:[1.2,1.7,1.8,2.8],rl:[.6,1.7,.7,3.2],sh:[0,1,2,3],nv:['Kogga','Galera','Karavella','Karakka']},
{n:"Ilk yangi davr",u:[['🔱','Pikachilar'],['🔫','Arkebuzchilar'],['🏇','Otliqlar'],['💣',"To'plar"]],hp:[3.5,3,4.5,3.5],sp:[22,16,58,7],rg:[11,120,11,175],dm:[1.2,2,1.8,3],rl:[.6,1.9,.7,3.2],sh:[0,1,2,3],nv:['Karavella','Galeon','Fregat','Katta galeon']},
{n:"Miltiq davri",u:[['⚔️','Qilichbozlar'],['💂','Miltiqchilar'],['🏇','Otliqlar'],['💣',"To'plar"]],hp:[3.5,3,4.5,3.5],sp:[22,18,58,8],rg:[11,125,11,185],dm:[1.3,2.1,1.9,3.2],rl:[.6,1.7,.7,3],sh:[0,1,2,3],nv:['Shlyup','Fregat','Korvet','Liniya kemasi']},
{n:"Sanoat davri",u:[['🎖','Piyoda'],['🔫','Pulemyotchilar'],['🏇','Otliqlar'],['💣','Artilleriya']],hp:[3.8,3.2,4.5,3.8],sp:[22,20,56,8],rg:[12,150,11,210],dm:[1.5,2.4,1.9,3.5],rl:[.6,.9,.7,2.8],sh:[0,1,2,3],nv:['Kanonyerka','Kreyser','Minonosets','Temir kema']},
{n:"Mexanizatsiya davri",u:[['🎖','Piyoda'],['🔫','Pulemyotchilar'],['⚙️','Tanklar'],['💣','Artilleriya']],hp:[4,3.5,12,4],sp:[24,20,26,8],rg:[13,160,150,230],dm:[1.6,2.6,3.5,3.8],rl:[.6,.7,1.6,2.8],sh:[0,1,6,3],nv:['Minonosets','Kreyser','Suvosti kemasi','Linkor']},
{n:"Ikkinchi jahon urushi",u:[['🎖','Piyoda'],['🔫','Avtomat va pulemyot'],['⚙️','Tanklar'],['💣','Artilleriya va Katyusha']],hp:[4.5,4,16,4.5],sp:[26,22,30,9],rg:[14,170,170,250],dm:[1.8,2.8,4.5,4.2],rl:[.55,.6,1.5,2.6],sh:[0,1,6,3],nv:['Minonosets','Kreyser','Suvosti kemasi','Linkor va avianosets']},
{n:"Zamonaviy davr",u:[['🎖','Zamonaviy piyoda'],['🚀','Raketachilar'],['⚙️','Zamonaviy tanklar'],['💣','Raketa artilleriyasi']],hp:[5,4.5,22,5],sp:[26,24,34,10],rg:[15,220,200,280],dm:[2,4,6,5],rl:[.5,1.4,1.4,2.8],sh:[0,1,6,3],nv:['Fregat','Esminets','Suvosti kemasi','Avianosets']}
];
TECH.forEach((x,i)=>x.t=i);
let tb=0,planes=0;const FLT=new Array(NEU).fill(0),FB=new Array(NEU).fill(-1);
function wTier(){const y=E.y+Math.floor(months/12);let t=0;for(let k=0;k<TY.length;k++)if(y>=TY[k])t=k;return t;}
function tierOf(i){if(i>=NEU)return Math.max(0,wTier()-2);return Math.min(8,wTier()+(i===me?tb:0));}
function ucost(k,t){const b=[[20,0,0],[30,5,0],[40,8,0],[50,6,4]][k],f=1+.18*t,r=b.map(x=>Math.round(x*f));if(t>=6&&k===2)r[2]+=8;if(t>=6&&k===3)r[2]+=3;return r;}
function shipCost(t){return[Math.round(60*(1+.2*t)),Math.round(10*(1+.15*t)),t>=6?6:0];}
function planeCost(t){return[90+12*(t-6),10,10+2*(t-6)];}
function techCost(){return tb===0?[150,20]:[300,40];}
(function(){const cc=new Array(NEU).fill(0),bd=new Array(NEU).fill(1e9);
 for(let c=0;c<co.length;c++){const o=co[c];if(o>=NEU||!coastal(c))continue;cc[o]++;const cp=CAPC[o];if(cp<0)continue;const d=(c%W-cp%W)**2+((c/W|0)-(cp/W|0))**2;if(d<bd[o]){bd[o]=d;const ps=portSea(c);if(ps>=0)FB[o]=ps;}}
 for(let i=0;i<NEU;i++)FLT[i]=FB[i]>=0?Math.max(1,Math.round(cc[i]/14*(.3+.12*wTier()))):0;})();
function drawFleets(c){if(c<1.2||me<0)return;cx.textAlign='center';cx.textBaseline='middle';
 for(let i=0;i<NEU;i++){if(i===me||FLT[i]<=0||FB[i]<0||cnt[i]===0)continue;const x=ox+(FB[i]%W+.5)*c,y=oy+(((FB[i]/W)|0)+.5)*c;if(x<-30||y<-30||x>innerWidth+30||y>innerHeight+30)continue;
  cx.font=Math.min(22,Math.max(11,c*2.6))+'px sans-serif';cx.fillStyle='#fff';cx.fillText('⛵',x,y+Math.sin(Date.now()/700+i)*2);
  if(c>=2){cx.font='bold '+Math.min(12,c*1.6)+'px sans-serif';cx.lineWidth=3;cx.strokeStyle='#000b';cx.strokeText(FLT[i],x+10,y-8);cx.fillText(FLT[i],x+10,y-8);}}}
function buyPlane(c){const t=tierOf(me),k=planeCost(t);if(gold<k[0]||silv<k[1]||oil<k[2]){note('Resurs yetmaydi');return;}gold-=k[0];silv-=k[1];oil-=k[2];planes++;sfx('coin');panelOwn(c);hud();draw();}
function research(c){const k=techCost();if(gold<k[0]||silv<k[1]){note('Resurs yetmaydi');return;}gold-=k[0];silv-=k[1];tb++;msg="🔬 Texnologiya rivojlandi: "+TECH[tierOf(me)].n;mt=Date.now()+5000;sfx('coin');panelOwn(c);hud();draw();}
function navalLaunch(){if(!tgt||!tgt.fleet||ships<=0||me<0||over)return;const d=tgt.d;if(peace[d]>months){note('Tinchlik bor, hujum mumkin emas');return;}
 pn.style.display='none';clearInterval(timer);startBattle({a:me,d,cell:tgt.c,commit:ships,Td:FLT[d],naval:true,fort:false,sea:false,ships:0});}
function navalDone(o,sa,sd){const lossA=Math.round(o.commit*(1-sa)),kill=Math.round(o.Td*(1-sd));ships=Math.max(0,ships-lossA);FLT[o.d]=Math.max(0,FLT[o.d]-kill);gold+=kill*20;return{lossA,kill,got:0,D:0,gold:kill*20};}
const _pe=panelEnemy;panelEnemy=function(){if(tgt&&tgt.fleet){const d=tgt.d,t=showPanel('⚓ '+emb(d)+' '+N[K[d]][0]+' floti: '+FLT[d]+' kema | sizning: '+ships+' ⛵');if(ships>0)pbtn('💥 Dengiz jangi ('+ships+' kema)',launch);else t.textContent+=' | Avval ⚓ Bandargoh va kema kerak';pbtn('✖',()=>{pn.style.display='none';tgt=null;draw();});return;}_pe();};
const _la=launch;launch=function(){if(tgt&&tgt.fleet){navalLaunch();return;}_la();};
const _hu=hud;hud=function(){_hu();if(me>=0&&Date.now()>=mt)info.textContent+=' | '+TECH[tierOf(me)].n+(planes?' ✈️'+planes:'')+(ships?' ⛵'+ships:'');};
tap=function(px,py){if(me<0||over)return;const c=c0*sc;
 if(tgt&&tgt.ok){const sx=ox+(tgt.c%W+.5)*c,sy=oy+((tgt.c/W|0)+.5)*c;if(Math.hypot(px-sx,py-sy)<30){launch();return;}}
 if(c>=1.2)for(let i=0;i<NEU;i++){if(i===me||FLT[i]<=0||FB[i]<0||cnt[i]===0)continue;const fx=ox+(FB[i]%W+.5)*c,fy=oy+((FB[i]/W|0)+.5)*c;if(Math.hypot(px-fx,py-fy)<18){tgt={c:FB[i],d:i,ok:ships>0,fleet:true};panelEnemy();draw();return;}}
 const x=Math.floor((px-ox)/c),y=Math.floor((py-oy)/c);if(x<0||y<0||x>=W||y>=H)return;
 const cell=y*W+x,o=co[cell];
 if(o===SEA){pn.style.display='none';tgt=null;draw();return;}
 if(o===me){tgt=null;panelOwn(cell);draw();return;}
 tgt={c:cell,d:o,ok:near(cell)};panelEnemy();draw();};
panelOwn=function(c){const t=tierOf(me),U=TECH[t];
 showPanel(emb(me)+' '+N[K[me]][0]+' | '+NM[K[me]][0]+' | ⚔'+Math.floor(T[me])+' | '+U.u.map((u,i)=>u[0]+Math.round(F[me][i]*100)+'%').join(' ')+' | 💰'+Math.floor(gold)+' 🥈'+Math.floor(silv)+' 🛢'+Math.floor(oil));
 U.u.forEach((u,i)=>{const k=ucost(i,t);pbtn(u[0]+' '+k[0]+'💰'+(k[1]?' '+k[1]+'🥈':'')+(k[2]?' '+k[2]+'🛢':'')+' +'+UR[i],()=>recruit(i,c));});
 BD.forEach((b,i)=>pbtn(b[0]+' '+b[2]+'💰'+(b[3]?' '+b[3]+'🥈':''),()=>build(i,c)));
 if(ports()>0){const k=shipCost(t);pbtn('⛵ '+U.nv[1]+' '+k[0]+'💰 '+k[1]+'🥈'+(k[2]?' '+k[2]+'🛢':'')+' ('+ships+')',()=>buyShip(c));}
 if(t>=6){const k=planeCost(t);pbtn('✈️ Samolyot '+k[0]+'💰 '+k[2]+'🛢 ('+planes+')',()=>buyPlane(c));}
 if(tb<2){const k=techCost();pbtn('🔬 Texnologiya +1 ('+k[0]+'💰 '+k[1]+'🥈)',()=>research(c));}
 pbtn('✖',()=>{pn.style.display='none';});};
recruit=function(i,c){const t=tierOf(me),k=ucost(i,t);if(gold<k[0]||silv<k[1]||oil<k[2]){note('Resurs yetmaydi');return;}
 gold-=k[0];silv-=k[1];oil-=k[2];const tt=T[me],n=UR[i];F[me]=F[me].map((f,j)=>(f*tt+(j===i?n:0))/(tt+n));T[me]+=n;sfx('coin');panelOwn(c);hud();draw();};
buyShip=function(c){const k=shipCost(tierOf(me));if(gold<k[0]||silv<k[1]||oil<k[2]){note('Resurs yetmaydi');return;}gold-=k[0];silv-=k[1];oil-=k[2];ships++;sfx('coin');panelOwn(c);hud();draw();};
tick=function(){if(over)return;months++;events();
 const mm=1+.25*tierOf(me);
 for(let i=0;i<NEU;i++){if(cnt[i]===0){T[i]=0;continue;}const cap=cnt[i]*1.5+100;if(T[i]<cap)T[i]+=Math.max(1,cnt[i]*.03);}
 gold+=cnt[me]*.02*mm;
 for(const b of B){const o=co[b[0]];if(o>=NEU)continue;if(b[1]===1)T[o]+=2;if(o===me&&b[1]===2)gold+=3*mm;}
 for(const s of SITE){if(co[s[0]]!==me)continue;if(s[1]===1)gold+=2*mm;else if(s[1]===2)silv+=1.2*mm;else oil+=.8*mm;}
 for(const d in trade)if(trade[d]>months){const k=Math.sqrt(cnt[d]||0);gold+=k*.4*mm;silv+=k*.2*mm;}
 if(co[CAPC[me]]===me)gold+=5*mm;
 for(let i=0;i<NEU;i++)if(i!==me&&FB[i]>=0&&cnt[i]>0&&Math.random()<.04&&FLT[i]<cnt[i]/6+2)FLT[i]++;
 aiTurn();if(dirty){paint();dirty=false;}
 if(cnt[me]===0){over=true;msg="Yutqazdingiz!";mt=1e15;}else if(cnt[me]>land*.5){over=true;msg="G'alaba! Dunyo sizniki!";mt=1e15;}
 hud();draw();};
save=function(){try{let s='';for(let i=0;i<co.length;i++)s+=String.fromCharCode(48+(co[i]===SEA?60:co[i]));localStorage.setItem('d1775y'+E.y,JSON.stringify({me,co:s,T,F,gold,silv,oil,months,peace,trade,B,capLost,ships,planes,tb,FLT}));}catch(e){}};
load=function(sv){me=sv.me;for(let i=0;i<co.length;i++){const v=sv.co.charCodeAt(i)-48;co[i]=v===60?SEA:v;}sv.T.forEach((v,i)=>T[i]=v);sv.F.forEach((v,i)=>F[i]=v);gold=sv.gold;silv=sv.silv;oil=sv.oil;months=sv.months;peace=sv.peace;trade=sv.trade;B.length=0;sv.B.forEach(b=>B.push(b));capLost=sv.capLost||{};ships=sv.ships||0;planes=sv.planes||0;tb=sv.tb||0;if(sv.FLT)sv.FLT.forEach((v,i)=>FLT[i]=v);};
paint();draw();
