const BC=['#ff0','#0ff','#f0f','#8f8','#fa0','#aaf','#f88'];
const ALD={
117:{n:["Rim–Satavaxana savdo ittifoqi","Xan–Kushon yo'li"],b:[['R','S'],['Z','K']],e:[]},
632:{n:["Vizantiya–Franklar","Tan–Tibet"],b:[['V','F']],e:[[108,"641: Tan va Tibet ittifoq tuzdi",[['T',1],['I',1]]]]},
780:{n:["Tan–Uyg'ur","Franklar–Mersiya"],b:[['T','Y'],['F','O']],e:[]},
1000:{n:["Vizantiya–Kiyev","Muqaddas Rim–Vengriya","G'aznaviy–Qoraxoniy","Chola–Xmer"],b:[['V','R'],['H','U'],['Z','Q'],['O','T']],e:[]},
1200:{n:["Anjuy–Kastiliya","Fransiya–Shtaufenlar","Vizantiya–Rum"],b:[['A','K'],['F','H'],['B','S']],e:[]},
1400:{n:["Angliya–Portugaliya","Fransiya–Kastiliya","Imperiya–Vengriya–Tevton","Polsha–Moskva","Usmonli–Mamluk–Oltin O'rda","Min–Yaponiya"],b:[['A','W'],['F','K'],['H','U','X'],['P','M'],['T','L','O'],['C','J']],e:[]},
1500:{n:["Katolik qirolliklar","Habsburg–Yagayllon","Safaviy–Mamluk"],b:[['S','P','A'],['H','U'],['B','Y']],e:[]},
1775:{n:["Burbon ittifoqi","Britaniya–Portugaliya","Rossiya–Prussiya–Daniya"],b:[['F','S','H'],['G','P'],['R','K','D']],e:[[36,"1778: Fransiya AQSh bilan ittifoq tuzdi",[['U',0]]]]},
1810:{n:["Koalitsiya","Napoleon bloki"],b:[['G','P','S','T'],['F','R','H','E']],e:[[24,"1812: Rossiya Britaniya tomoniga o'tdi",[['R',0],['K',1]]],[36,"1813: Avstriya va Prussiya Napoleonga qarshi koalitsiyaga qo'shildi",[['H',0],['K',0]]]]},
1910:{n:["Antanta","Markaziy davlatlar"],b:[['G','F','R','J','Z'],['D','H','I']],e:[[55,"1914-avgust: Usmonlilar Markaziy davlatlarga, Belgiya Antantaga qo'shildi",[['T',1],['B',0]]],[64,"1915: Italiya Antantaga o'tdi",[['I',0]]],[87,"1917: AQSh Antantaga qo'shildi",[['U',0]]]]},
1939:{n:["O'q davlatlari","Ittifoqchilar"],b:[['D','I','S'],['G','F','P','T']],e:[[20,"1940: Yaponiya Uchlik paktiga qo'shildi",[['J',0]]],[22,"1940: Vengriya va Ruminiya O'q davlatlariga qo'shildi",[['H',0],['R',0]]],[29,"1941: SSSR Ittifoqchilarga o'tdi, Finlyandiya Germaniya tomonida",[['S',1],['W',0]]],[35,"1941-dekabr: AQSh va Xitoy Ittifoqchilarga qo'shildi",[['U',1],['C',1]]]]},
2020:{n:["G'arb bloki","Sharq bloki"],b:[['U','G','F','D','T','P','H','Q','K','J','S','X'],['R','C','N','E','A']],e:[]}};
let ALY=new Array(NEU).fill(-1),BN=[],nextBloc=0,peaceMode=false;const HOST={};
(function(){const d=ALD[E.y];if(!d)return;let mx=d.b.length;
 d.b.forEach((g,bi)=>{g.forEach(k=>{const i=K.indexOf(k);if(i>=0)ALY[i]=bi;});});
 (d.e||[]).forEach(e=>e[2].forEach(o=>{mx=Math.max(mx,o[1]+1);}));nextBloc=mx;(d.n||[]).forEach((n,i)=>BN[i]=n);})();
function allied(a,b){return a!==b&&a>=0&&b>=0&&a<NEU&&b<NEU&&ALY[a]>=0&&ALY[a]===ALY[b];}
const _ev=events;events=function(){_ev();const d=ALD[E.y];if(!d||!d.e)return;
 for(const e of d.e)if(e[0]===months){for(const o of e[2]){const i=K.indexOf(o[0]);if(i>=0)ALY[i]=o[1];}msg=e[1];mt=Date.now()+7000;}};
aiTurn=function(){const fr=[];for(let i=0;i<NEU;i++)fr.push([]);
 for(let c=0;c<co.length;c++){const o=co[c];if(o===SEA)continue;
  if(c%W<W-1){const q=co[c+1];if(q!==SEA&&q!==o){if(o<NEU)fr[o].push(c,c+1);if(q<NEU)fr[q].push(c+1,c);}}
  if(c+W<co.length){const q=co[c+W];if(q!==SEA&&q!==o){if(o<NEU)fr[o].push(c,c+W);if(q<NEU)fr[q].push(c+W,c);}}}
 const mb=me>=0&&ALY[me]>=0?ALY[me]:-9;
 for(let o=0;o<NEU;o++){if(o===me||fr[o].length===0||T[o]<60||Math.random()>.2)continue;
  const L=fr[o],ok=[];for(let k=0;k<L.length;k+=2){const q=co[L[k+1]];if(q<NEU&&(peaceMode||allied(o,q)))continue;if(q===me&&peace[o]>months)continue;ok.push(k);}
  if(!ok.length)continue;let pick=ok[Math.floor(Math.random()*ok.length)];
  if(Math.random()<.6){const pref=ok.filter(k=>{const q=co[L[k+1]];if(q===NEU)return peaceMode||(ALY[o]>=0&&ALY[o]===mb);if(ALY[o]<0)return false;if(ALY[o]===mb)return HOST[q]>months;return ALY[q]>=0&&ALY[q]!==ALY[o];});if(pref.length)pick=pref[Math.floor(Math.random()*pref.length)];}
  const n=L[pick+1],q=co[n],commit=T[o]*.5,Td=q===NEU?35:T[q]*.4;if(typeof aiOK==='function'?!aiOK(o,q,n,commit,Td):commit<Td*.9)continue;
  const got=autoWar(o,q,n,commit,Td);
  if(q===me&&got>0){msg="⚠️ "+N[K[o]][0]+" hujum qildi: "+got+" hudud yo'qotildi";mt=Date.now()+5000;}}};
findRoute=function(t){if(me<0||t<0||co[t]===SEA||co[t]===me||allied(me,co[t]))return null;
 const mine=n=>co[n]===me||allied(me,co[n]);
 for(const sea of(ships>0?[false,true]:[false])){
  const prev=new Int32Array(W*H).fill(-2);prev[t]=-1;const q=[t];let found=-1;
  for(let h=0;h<q.length&&found<0;h++){const c=q[h],x=c%W,y=(c/W)|0;
   for(let dy=-1;dy<=1&&found<0;dy++)for(let dx=-1;dx<=1;dx++){if(!dx&&!dy)continue;const nx=x+dx,ny=y+dy;if(nx<0||ny<0||nx>=W||ny>=H)continue;const n=ny*W+nx;if(prev[n]!==-2)continue;if(co[n]===SEA&&!sea)continue;prev[n]=c;if(mine(n)){found=n;break;}q.push(n);}}
  if(found>=0){const p=[];for(let c=found;c!==-1;c=prev[c])p.push(c);return p;}}
 return null;};
function propose(d){if(gold<100){note('Oltin yetmaydi');return;}
 if(!(peace[d]>months||trade[d]>months)){note('Avval tinchlik yoki savdo shartnomasi tuzing');return;}
 if(ALY[d]>=0&&ALY[d]!==ALY[me]){note('U boshqa ittifoqda');return;}
 const size=ALY[me]>=0?ALY.filter(x=>x===ALY[me]).length:1;if(size>=6){note("Ittifoq to'lgan (6 ta)");return;}
 gold-=100;if(ALY[me]<0){ALY[me]=nextBloc++;BN[ALY[me]]='Mening ittifoqim';}ALY[d]=ALY[me];
 note('🤝 Ittifoq tuzildi: '+N[K[d]][0]);if(typeof sfx==='function')sfx('coin');panelEnemy();hud();draw();}
const _pe4=panelEnemy;panelEnemy=function(){
 if(!tgt||tgt.fleet||tgt.d>=NEU){_pe4();return;}
 const d=tgt.d;
 if(allied(me,d)){showPanel('🤝 Ittifoqchi: '+emb(d)+' '+N[K[d]][0]+' | '+NM[K[d]][0]+' | ⚔'+Math.floor(T[d])+' | '+(BN[ALY[d]]||'Ittifoq'));
  pbtn('💔 Ittifoqni buzish',()=>{ALY[me]=-1;peace[d]=Math.max(peace[d]||0,months+12);note('💔 Ittifoq buzildi');tgt=null;pn.style.display='none';hud();draw();});
  pbtn('✖',()=>{pn.style.display='none';tgt=null;draw();});return;}
 _pe4();
 if(peaceMode){[...pn.children].forEach(el=>{if(el.tagName==='BUTTON'&&(/^(✅)?\d+%$/.test(el.textContent)||el.textContent.indexOf('Hujum')>=0))el.remove();});if(pn.firstChild)pn.firstChild.textContent+=' | ☮ Tinch rejim';}
 if(ALY[d]>=0&&pn.firstChild)pn.firstChild.textContent+=' | 🤝 '+(BN[ALY[d]]||'ittifoqda');
 if(ALY[d]<0){const ex=pn.lastChild;pbtn('🤝 Ittifoq tuzish (100💰)',()=>propose(d));pn.insertBefore(pn.lastChild,ex);}};
const _ml2=marchLaunch;marchLaunch=function(){if(tgt&&!tgt.fleet&&tgt.d<NEU){if(allied(me,tgt.d)){note("Ittifoqchiga hujum qilib bo'lmaydi");return;}if(peaceMode){note('Tinch rejim: faqat mahalliy hududlarga hujum');return;}}_ml2();};
const _nl2=navalLaunch;navalLaunch=function(){if(tgt&&tgt.fleet&&(allied(me,tgt.d)||peaceMode)){note(peaceMode?'Tinch rejim: urush yo\u2018q':"Ittifoqchiga hujum qilib bo'lmaydi");return;}_nl2();};
const _sb5=startBattle;startBattle=function(o){if(o.d<NEU)HOST[o.d]=months+36;let b=0;
 if(!o.naval&&ALY[o.a]>=0){for(let i=0;i<NEU;i++)if(allied(o.a,i)&&cnt[i]>0)b+=T[i]*.04;b=Math.round(b);if(b>0){o.commit+=b;o.allyB=b;}}
 _sb5(o);if(b>0&&BX&&BX.ms)BX.ms.textContent+=' | 🤝 Ittifoqchilar: +'+b+' askar';};
const _bd3=battleDone;battleDone=function(o,sa,sd,bonus){if(o.allyB)o.commit-=o.allyB;return _bd3(o,sa,sd,bonus);};
const _tk4=tick;tick=function(){_tk4();if(over||me<0)return;
 let sh=cnt[me];for(let i=0;i<NEU;i++)if(allied(me,i))sh+=cnt[i];sh/=land;
 if(peaceMode&&cnt[NEU]===0&&sh>.9){over=true;msg="☮ Tinch yakun: ittifoqingiz dunyoning "+Math.round(sh*100)+"% ini egalladi!";mt=1e15;hud();}
 else if(sh>.9&&ALY[me]>=0){over=true;msg="🤝 Ittifoq g'alabasi! Birgalikda dunyoning "+Math.round(sh*100)+"% ini egalladingiz!";mt=1e15;hud();}};
function drawAllies(c){if(me<0)return;cx.textAlign='center';cx.textBaseline='middle';
 for(let i=0;i<NEU;i++){if(ALY[i]<0)continue;const cp=CAPC[i];if(cp<0||co[cp]!==i)continue;const x=ox+(cp%W+.5)*c,y=oy+(((cp/W)|0)+.5)*c;if(x<-30||y<-30||x>innerWidth+30||y>innerHeight+30)continue;
  const r=Math.max(9,Math.min(16,c*2.2));cx.beginPath();cx.arc(x,y,r+3,0,6.3);cx.lineWidth=3;cx.strokeStyle=BC[ALY[i]%BC.length];cx.stroke();
  if(i===me||allied(me,i)){cx.font=Math.min(18,Math.max(10,c*2.2))+'px sans-serif';cx.fillStyle='#fff';cx.fillText('🤝',x-r-4,y+r*.3);}}}
const _df2=drawFleets;drawFleets=function(c){_df2(c);drawAllies(c);};
const _hu3=hud;hud=function(){_hu3();if(me>=0&&Date.now()>=mt){if(ALY[me]>=0)info.textContent+=' | 🤝'+ALY.filter(x=>x===ALY[me]).length;if(peaceMode)info.textContent+=' | ☮';}};
const _in2=intro;intro=function(i){_in2(i);if(ALY[i]>=0){const ms=[];for(let j=0;j<NEU;j++)if(j!==i&&allied(i,j))ms.push(N[K[j]][0]);msg+=' | 🤝 '+(BN[ALY[i]]||'Ittifoq')+': '+ms.join(', ');mt=Date.now()+9000;hud();}};
function showAlliances(){showPanel('🤝 Ittifoqlar:');const by={};for(let i=0;i<NEU;i++)if(ALY[i]>=0)(by[ALY[i]]=by[ALY[i]]||[]).push(i);
 for(const b in by){const d=document.createElement('div');d.style.cssText='margin:3px;text-align:left;font-size:13px';const sh=by[b].reduce((s,i)=>s+cnt[i],0);
  d.textContent=(BN[b]||'Ittifoq '+(+b+1))+' ('+Math.round(sh/land*100)+'%): '+by[b].map(i=>emb(i)+' '+N[K[i]][0]+(i===me?' (siz)':'')).join(', ');pn.appendChild(d);}
 pbtn('✖',()=>{pn.style.display='none';});}
const _po3=panelOwn;panelOwn=function(c){_po3(c);const ex=pn.lastChild;pbtn('🤝 Ittifoqlar',showAlliances);pn.insertBefore(pn.lastChild,ex);};
const _sv3=save;save=function(){_sv3();try{const k='d1775y'+E.y,sv=JSON.parse(localStorage.getItem(k));sv.aly=ALY;sv.pm=peaceMode;sv.nb=nextBloc;sv.bn=BN;localStorage.setItem(k,JSON.stringify(sv));}catch(e){}};
const _ld3=load;load=function(sv){_ld3(sv);if(sv.aly)sv.aly.forEach((v,i)=>ALY[i]=v);peaceMode=!!sv.pm;nextBloc=sv.nb||nextBloc;BN=sv.bn||BN;};
{const pm=document.createElement('button');pm.className='nb';pm.style.background='#2a7a5a';pm.textContent="☮ Tinch rejim (urush yo'q): O'CHIQ";
 pm.onclick=()=>{peaceMode=!peaceMode;pm.textContent="☮ Tinch rejim (urush yo'q): "+(peaceMode?"YOQIQ":"O'CHIQ");};menu.insertBefore(pm,menu.children[2]);}
draw();
