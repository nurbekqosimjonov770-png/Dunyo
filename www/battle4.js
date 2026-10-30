let BW=720,BH=1360,SW=360,SH=800,VT=0,VB=0,VH=400;const CAM={x:0,y:0,z:1};
const GP=new Map();let GG=null;
function updView(){VT=BX.hd.offsetHeight+(BT&&BT.prep&&BX.dep&&BX.dep.style.display!=='none'?BX.dep.offsetHeight+2:2);VB=BX.bt.offsetHeight;VH=Math.max(120,SH-VT-VB);}
function zMin(){return Math.min(SW/BW,VH/BH);}
function camClamp(){CAM.z=Math.max(zMin(),Math.min(2.4,CAM.z));const vw=SW/CAM.z,vh=VH/CAM.z;
 CAM.x=BW<=vw?(BW-vw)/2:Math.max(0,Math.min(BW-vw,CAM.x));CAM.y=BH<=vh?(BH-vh)/2:Math.max(0,Math.min(BH-vh,CAM.y));}
function toW(px,py){return[CAM.x+px/CAM.z,CAM.y+(py-VT)/CAM.z];}
function bzoom(sx,sy,k){const wx=CAM.x+sx/CAM.z,wy=CAM.y+(sy-VT)/CAM.z;CAM.z=Math.max(zMin(),Math.min(2.4,CAM.z*k));CAM.x=wx-sx/CAM.z;CAM.y=wy-(sy-VT)/CAM.z;camClamp();}
function centerCam(){let c;if(BT.hero&&!BT.hero.dead)c=[BT.hero.u.x,BT.hero.u.y];else{const us=selUnits(0,-1);c=us.length?cen(us):[BW/2,BH/2];}
 CAM.x=c[0]-SW/2/CAM.z;CAM.y=c[1]-VH/2/CAM.z;camClamp();}
function buildCamUI(){const z=dv('position:absolute;right:6px;top:45%;display:flex;flex-direction:column;gap:6px;z-index:4');
 const b=(t,f)=>mkb(t,f,'width:42px;height:42px;padding:0;margin:0;font-size:20px;border-radius:50%;background:#000a;color:#fff;border:2px solid #fc6');
 z.appendChild(b('＋',()=>bzoom(SW/2,VT+VH/2,1.3)));z.appendChild(b('－',()=>bzoom(SW/2,VT+VH/2,1/1.3)));z.appendChild(b('🎯',centerCam));
 BX.box.appendChild(z);BX.zb=z;}
function setupCamEvents(){const cv=BX.cv;
 cv.addEventListener('pointerdown',e=>{if(!BT)return;cv.setPointerCapture(e.pointerId);GP.set(e.pointerId,[e.clientX,e.clientY,e.clientX,e.clientY]);if(GP.size===1)GG={moved:false,multi:false,pd:0,mx:null,my:0};else if(GG)GG.multi=true;});
 cv.addEventListener('pointermove',e=>{if(!BT||!GP.has(e.pointerId))return;const p=GP.get(e.pointerId),px=p[0],py=p[1];p[0]=e.clientX;p[1]=e.clientY;
  if(GP.size>=2){const v=[...GP.values()],d=Math.hypot(v[0][0]-v[1][0],v[0][1]-v[1][1]),mx=(v[0][0]+v[1][0])/2,my=(v[0][1]+v[1][1])/2;
   if(GG){if(GG.pd)bzoom(mx,my,d/GG.pd);if(GG.mx!==null){CAM.x-=(mx-GG.mx)/CAM.z;CAM.y-=(my-GG.my)/CAM.z;}GG.pd=d;GG.mx=mx;GG.my=my;}camClamp();return;}
  if(GG&&Math.hypot(p[0]-p[2],p[1]-p[3])>8)GG.moved=true;
  if(GG&&GG.moved&&!GG.multi){if(BT.prep&&!BT.done){const w=toW(p[0],p[1]);moveSel(w[0],w[1]);}
   else if(!(BT.hero&&!BT.hero.dead)){CAM.x-=(p[0]-px)/CAM.z;CAM.y-=(p[1]-py)/CAM.z;camClamp();}}});
 const up=e=>{if(!GP.has(e.pointerId))return;const p=GP.get(e.pointerId);
  if(GG&&!GG.moved&&!GG.multi&&GP.size===1&&BT&&BT.prep&&!BT.done){const w=toW(p[0],p[1]);moveSel(w[0],w[1]);}
  GP.delete(e.pointerId);if(GP.size<2&&GG){GG.pd=0;GG.mx=null;}if(GP.size===0)GG=null;};
 cv.addEventListener('pointerup',up);cv.addEventListener('pointercancel',up);}
function drawDeco(g){if(!BT||!BT.deco)return;const nv=BT.o.naval;g.save();g.globalAlpha=.18;
 for(const p of BT.deco){if(p[3]&&!nv)continue;g.fillStyle=nv?'#ffffff':'#5a7a3a';g.beginPath();g.ellipse(p[0],p[1],p[2],p[2]*.55,0,0,6.3);g.fill();}
 if(!nv){g.globalAlpha=.55;g.font='22px sans-serif';g.textAlign='center';g.textBaseline='middle';for(const p of BT.deco)if(p[3])g.fillText('🌲',p[0],p[1]);}
 g.restore();}
const _sb4=startBattle;
startBattle=function(o){SW=innerWidth;SH=innerHeight;BW=Math.round(SW*2);BH=Math.round(SH*1.7);_sb4(o);
 if(!BX.zb)buildCamUI();if(!BX._cam){BX._cam=1;setupCamEvents();}
 GP.clear();GG=null;BT.deco=[];for(let i=0;i<80;i++){const x=Math.random()*BW,y=Math.random()*BH;if(Math.abs(y-BH/2)<30)continue;BT.deco.push([x,y,18+Math.random()*50,Math.random()<.3?1:0]);}
 updView();CAM.z=Math.max(zMin(),.85);const us=selUnits(0,-1),c=us.length?cen(us):[BW/2,BH/2+140];
 CAM.x=c[0]-SW/2/CAM.z;CAM.y=c[1]-VH/2/CAM.z;camClamp();};
const _db4=drawB;
drawB=function(){if(!BT)return;updView();
 if(BT.hero&&!BT.hero.dead&&!BT.prep&&!BT.done){const u=BT.hero.u;CAM.x+=(u.x-SW/2/CAM.z-CAM.x)*.15;CAM.y+=(u.y-VH/2/CAM.z-CAM.y)*.15;}
 camClamp();const g=BX.g,d=devicePixelRatio||1,z=CAM.z;
 g.setTransform(d,0,0,d,0,0);g.fillStyle='#222';g.fillRect(0,0,SW,SH);
 g.setTransform(d*z,0,0,d*z,-CAM.x*z*d,(VT-CAM.y*z)*d);
 _db4();g.setTransform(d,0,0,d,0,0);};
