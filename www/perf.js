(function(){
if(window.__perf)return;window.__perf=1;
let lv=0;try{lv=+(localStorage.getItem('perfLv')||0);}catch(e){}if(!(lv>=0&&lv<=2))lv=0;
window.PERF=lv;window.INTER=false;
const realDpr=window.devicePixelRatio||1,LV=['Yuqori',"O'rta",'Past'];
try{Object.defineProperty(window,'devicePixelRatio',{configurable:true,get(){return window.PERF>=2?1:window.PERF===1?Math.min(2,realDpr):realDpr;}});}catch(e){}
const btn=document.createElement('button');btn.textContent='⚡'+(lv+1);
let pEma=0,dEma=0,nP=0,nD=0,itm=null,dReq=false,lastD=0,lastP=0,pT=null;
function setLv(n,auto){window.PERF=n;try{localStorage.setItem('perfLv',n);}catch(e){}btn.textContent='⚡'+(n+1);if(typeof fit==='function')fit();
 try{msg='⚡ Grafika: '+LV[n]+(auto?' (avtomatik: telefon sekinlashdi)':'');mt=Date.now()+5000;hud();}catch(e){}draw();}
btn.onclick=()=>setLv((window.PERF+1)%3,false);
{const bot=document.getElementById('bot'),sp=document.getElementById('sp');bot.insertBefore(btn,sp);}
const mark=()=>{window.INTER=true;clearTimeout(itm);itm=setTimeout(()=>{window.INTER=false;draw();},220);};
cv.addEventListener('pointerdown',mark,true);
cv.addEventListener('pointermove',e=>{if(e.buttons||e.pointerType==='touch')mark();},true);
['zi','zo'].forEach(id=>{const b=document.getElementById(id);if(b)b.addEventListener('click',mark,true);});
const D0=draw,MIND=[16,34,80];
draw=function(){if(dReq)return;if(typeof inB!=='undefined'&&inB)return;dReq=true;
 const run=()=>requestAnimationFrame(()=>{dReq=false;if(typeof inB!=='undefined'&&inB)return;const t0=performance.now();try{D0();}catch(e){}lastD=performance.now();
  dEma=nD++?dEma*.85+(lastD-t0)*.15:(lastD-t0);
  if(window.PERF<2&&nD>14&&dEma>(window.PERF===0?55:70)&&!window.INTER){nD=0;dEma=0;setLv(window.PERF+1,true);}});
 const w=MIND[window.PERF]-(performance.now()-lastD);if(w>0)setTimeout(run,w);else run();};
const HI=paint,MINP=[400,900,2000];
const mid=(typeof scx2==='function'&&typeof QD!=='undefined'&&typeof TOK!=='undefined'&&TOK)?function(){
 scx2(co,QA,W,H);scx2(QA,QB,W*2,H*2);const a=QB;QD.fill(0);
 for(let y=0;y<QH;y++){const row=y*QW;for(let x=0;x<QW;x++){const i=row+x,o=a[i],r=x<QW-1?a[i+1]:o,d=y<QH-1?a[i+QW]:o;
  if(o===SEA){if(r!==SEA)QD[i+1]|=2;if(d!==SEA)QD[i+QW]|=2;}
  else{if(r!==o){if(r===SEA)QD[i]|=2;else QD[i]|=1;}if(d!==o){if(d===SEA)QD[i]|=2;else QD[i]|=1;}}}}
 for(let i=0,n=QW*QH;i<n;i++){const o=a[i];if(o===SEA){V32[i]=SEAC[i];continue;}
  const nc=NRG[o],w2=TW[i]/255,tc=TN[TNT[i]],b=QD[i];let m=LUM[i]/100;if(b&1)m*=.4;else if(b&2)m*=.72;const k=1-w2;
  const R=(nc[0]*k+tc[0]*w2)*m,G=(nc[1]*k+tc[1]*w2)*m,Bc=(nc[2]*k+tc[2]*w2)*m;
  V32[i]=0xFF000000|((Bc>255?255:Bc)<<16)|((G>255?255:G)<<8)|(R>255?255:R);}
 og.putImageData(IMG2,0,0);recount();labels();}:HI;
function doP(){const t0=performance.now();(window.PERF===0?HI:mid)();lastP=performance.now();const d=lastP-t0;pEma=nP++?pEma*.7+d*.3:d;
 if(window.PERF===0&&nP>3&&pEma>220)setLv(1,true);else if(window.PERF===1&&nP>6&&pEma>260)setLv(2,true);}
paint=function(){const gap=MINP[window.PERF]-(performance.now()-lastP);
 if(gap>0&&lastP>0){try{recount();}catch(e){}if(!pT)pT=setTimeout(()=>{pT=null;doP();draw();},gap);return;}doP();};
function drawSel(c){if(!(tgt&&tgt.set&&!tgt.fleet))return;cx.fillStyle='rgba(255,215,0,.35)';
 for(const ci of tgt.cells){if(co[ci]!==tgt.d)continue;cx.fillRect(ox+(ci%W)*c,oy+((ci/W)|0)*c,c+.5,c+.5);}
 cx.strokeStyle='#ffd700';cx.lineWidth=2.5;cx.beginPath();
 for(const ci of tgt.cells){const x=ci%W,y=(ci/W)|0,X=ox+x*c,Y=oy+y*c;
  if(x===0||!tgt.set.has(ci-1)){cx.moveTo(X,Y);cx.lineTo(X,Y+c);}if(x===W-1||!tgt.set.has(ci+1)){cx.moveTo(X+c,Y);cx.lineTo(X+c,Y+c);}
  if(y===0||!tgt.set.has(ci-W)){cx.moveTo(X,Y);cx.lineTo(X+c,Y);}if(y===H-1||!tgt.set.has(ci+W)){cx.moveTo(X,Y+c);cx.lineTo(X+c,Y+c);}}cx.stroke();}
if(typeof window.drawCoast==='function'){const dc=window.drawCoast;window.drawCoast=function(c){if(window.INTER||window.PERF>=1)return;dc(c);};}
if(typeof drawPieces==='function'){const dp=drawPieces;drawPieces=function(c){if(window.INTER||window.PERF>=1||c<2.2){drawSel(c);return;}dp(c);};}
if(typeof drawCities==='function'){const dcy=drawCities;drawCities=function(c,s){if(window.INTER&&window.PERF>=1)return;dcy(c,s);};}
if(typeof drawSeas==='function'){const dse=drawSeas;drawSeas=function(c){if(window.INTER&&window.PERF>=1)return;dse(c);};}
const SV=save;let lastS=0,sT=null;
save=function(){if(sT)return;const w=Math.max(0,20000-(Date.now()-lastS));
 sT=setTimeout(()=>{sT=null;lastS=Date.now();const r=window.requestIdleCallback||(f=>setTimeout(f,0));r(()=>{try{if(me>=0)SV();}catch(e){}});},w);};
const flush=()=>{try{if(me>=0&&!over){SV();lastS=Date.now();}}catch(e){}};
document.addEventListener('visibilitychange',()=>{if(document.hidden)flush();});window.addEventListener('pagehide',flush);
if(typeof updView==='function'){const uv=updView;let tt=0;updView=function(){const n=performance.now();if(n-tt<350)return;tt=n;uv();};}
if(window.PERF!==0&&typeof fit==='function')fit();else draw();
})();
