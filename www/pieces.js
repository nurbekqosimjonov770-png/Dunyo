const PC=P.map(()=>[]);for(let i=0;i<GR.length;i++)if(GR[i]>=0)PC[GR[i]].push(i);
const PEDGE=[];
for(let y=0;y<H;y++)for(let x=0;x<W;x++){const i=y*W+x,a=GR[i];if(a<0)continue;
 if(x<W-1){const b=GR[i+1];if(b>=0&&b!==a)PEDGE.push([x+1,y,x+1,y+1,i,i+1]);}
 if(y<H-1){const b=GR[i+W];if(b>=0&&b!==a)PEDGE.push([x,y+1,x+1,y+1,i,i+W]);}}
let HEROPREF=false;try{HEROPREF=localStorage.getItem('heroPref')==='1';}catch(e){}
let PENDP=null;
function capturePiece(a,d,p,t,frac){const cells=PC[p].filter(c=>co[c]===d);if(!cells.length)return 0;
 const set=new Set(cells),dist=new Map(),q=[];
 for(const c of cells){const x=c%W,y=(c/W)|0;if((x>0&&co[c-1]===a)||(x<W-1&&co[c+1]===a)||(y>0&&co[c-W]===a)||(y<H-1&&co[c+W]===a)){dist.set(c,0);q.push(c);}}
 if(!q.length){const s=set.has(t)?t:cells[0];dist.set(s,0);q.push(s);}
 for(let h=0;h<q.length;h++){const c=q[h],x=c%W,y=(c/W)|0,dd=dist.get(c)+1;
  for(const m of [x>0?c-1:-1,x<W-1?c+1:-1,y>0?c-W:-1,y<H-1?c+W:-1])if(m>=0&&set.has(m)&&!dist.has(m)){dist.set(m,dd);q.push(m);}}
 cells.sort((u,v)=>(dist.has(u)?dist.get(u):999)-(dist.has(v)?dist.get(v):999));
 const n=Math.max(1,Math.ceil(cells.length*frac));for(let i=0;i<n;i++)co[cells[i]]=a;
 dirty=true;
 if(d<NEU&&!capLost[d]&&co[CAPC[d]]!==d){capLost[d]=1;T[d]=Math.floor(T[d]*.7);msg="🏰 Poytaxt qulandi: "+N[K[d]][0]+"!";mt=Date.now()+5000;}
 return n;}
function drawPieces(c){if(c<1.4)return;cx.strokeStyle='rgba(255,255,255,'+(c<3?.22:.34)+')';cx.lineWidth=1;cx.beginPath();
 for(const e of PEDGE){if(co[e[4]]!==co[e[5]])continue;const x1=ox+e[0]*c,y1=oy+e[1]*c,x2=ox+e[2]*c,y2=oy+e[3]*c;
  if((x1<-5&&x2<-5)||(x1>innerWidth+5&&x2>innerWidth+5)||(y1<-5&&y2<-5)||(y1>innerHeight+5&&y2>innerHeight+5))continue;cx.moveTo(x1,y1);cx.lineTo(x2,y2);}
 cx.stroke();
 if(tgt&&tgt.set&&!tgt.fleet){cx.fillStyle='rgba(255,215,0,.35)';
  for(const ci of tgt.cells){if(co[ci]!==tgt.d)continue;cx.fillRect(ox+(ci%W)*c,oy+((ci/W)|0)*c,c+.5,c+.5);}
  cx.strokeStyle='#ffd700';cx.lineWidth=2.5;cx.beginPath();
  for(const ci of tgt.cells){const x=ci%W,y=(ci/W)|0,X=ox+x*c,Y=oy+y*c;
   if(x===0||!tgt.set.has(ci-1)){cx.moveTo(X,Y);cx.lineTo(X,Y+c);}
   if(x===W-1||!tgt.set.has(ci+1)){cx.moveTo(X+c,Y);cx.lineTo(X+c,Y+c);}
   if(y===0||!tgt.set.has(ci-W)){cx.moveTo(X,Y);cx.lineTo(X+c,Y);}
   if(y===H-1||!tgt.set.has(ci+W)){cx.moveTo(X,Y+c);cx.lineTo(X+c,Y+c);}}
  cx.stroke();}}
const _dr6=draw;draw=function(){_dr6();drawPieces(c0*sc);};
const _tp6=tap;tap=function(px,py){const before=tgt;_tp6(px,py);
 if(tgt&&tgt!==before&&!tgt.fleet&&tgt.piece==null&&tgt.d!==undefined&&tgt.c!=null){const p=GR[tgt.c];
  if(p>=0&&!(typeof allied==='function'&&tgt.d<NEU&&allied(me,tgt.d))){tgt.piece=p;tgt.cells=PC[p].filter(c=>co[c]===tgt.d);tgt.set=new Set(tgt.cells);panelEnemy();}
  draw();}};
const _pe6=panelEnemy;panelEnemy=function(){_pe6();if(!tgt||tgt.fleet||tgt.d===undefined)return;
 const al=typeof allied==='function'&&tgt.d<NEU&&allied(me,tgt.d);
 if(tgt.piece!=null&&pn.firstChild)pn.firstChild.textContent+=' | 🧩 '+tgt.cells.length+' katak';
 if(!al&&tgt.ok){const ex=pn.lastChild;pbtn("🗡 Jangda o'zim qatnashaman: "+(HEROPREF?'HA ✅':"YO'Q"),()=>{HEROPREF=!HEROPREF;try{localStorage.setItem('heroPref',HEROPREF?'1':'0');}catch(e){}panelEnemy();});pn.insertBefore(pn.lastChild,ex);}};
const _ml3=marchLaunch;marchLaunch=function(){const pc=tgt&&tgt.piece!=null?tgt.piece:null,len=ARMIES.length;PENDP=pc;_ml3();if(pc!=null&&ARMIES.length>len)ARMIES[ARMIES.length-1].piece=pc;PENDP=null;};
const _ar3=arrive;arrive=function(a){PENDP=a.piece==null?null:a.piece;_ar3(a);PENDP=null;};
const _sb6=startBattle;startBattle=function(o){if(o.piece==null&&PENDP!=null)o.piece=PENDP;_sb6(o);
 if(BX&&BX.hb)BX.hb.style.display='none';
 if(HEROPREF&&BT&&BT.prep&&!BT.hero)toggleHero();};
const _bd5=battleDone;battleDone=function(o,sa,sd,bonus){if(o.piece==null||o.naval)return _bd5(o,sa,sd,bonus);
 if(o.allyB)o.commit-=o.allyB;
 const adv=sa-sd,lossA=o.commit*(1-sa),kill=o.d<NEU?o.Td*(1-sd):0;
 T[o.a]=Math.max(1,T[o.a]-lossA);if(o.d<NEU)T[o.d]=Math.max(5,T[o.d]-kill);
 let got=0,D=0;if(adv>.05){const fr=Math.min(1,(.35+adv*1.1+(bonus||0)*.08)*(o.fort?.6:1));got=capturePiece(o.a,o.d,o.piece,o.cell,fr);D=Math.round(fr*100);}
 return{lossA:Math.round(lossA),kill:Math.round(kill),got,D};};
const _fb6=finishB;finishB=function(){_fb6();if(BT&&BT.o&&BT.o.piece!=null&&!BT.o.naval&&BX&&BX.rs)BX.rs.innerHTML=BX.rs.innerHTML.replace(/\(chuqurlik (\d+)\)/,(m,n)=>"(bo'lakning "+n+"% i)");};
draw();
