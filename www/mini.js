(function(){
if(typeof BX==='undefined'||typeof drawB!=='function')return;
let MC=null,MX=null;const MW=130;
function build(){if(MC||!BX||!BX.box)return;MC=document.createElement('canvas');MC.style.cssText='position:absolute;left:6px;z-index:4;border:2px solid #fc6;border-radius:6px;background:#0008;touch-action:none';BX.box.appendChild(MC);
 const mv=e=>{if(!BT||typeof CAM==='undefined')return;const r=MC.getBoundingClientRect(),fx=(e.clientX-r.left)/r.width,fy=(e.clientY-r.top)/r.height;CAM.x=fx*BW-SW/CAM.z/2;CAM.y=fy*BH-VH/CAM.z/2;camClamp();};
 MC.addEventListener('pointerdown',e=>{e.preventDefault();e.stopPropagation();MC.setPointerCapture(e.pointerId);MC._on=1;mv(e);});
 MC.addEventListener('pointermove',e=>{if(MC._on)mv(e);});const up=()=>{MC._on=0;};MC.addEventListener('pointerup',up);MC.addEventListener('pointercancel',up);}
function drawMini(){if(typeof CAM==='undefined'||!BT||!BX||!BX.box||BX.box.style.display==='none')return;build();
 const mw=MW,mh=Math.max(40,Math.round(MW*BH/BW)),d=devicePixelRatio||1;
 if(MC._w!==mw||MC._h!==mh||MC._d!==d){MC._w=mw;MC._h=mh;MC._d=d;MC.width=mw*d;MC.height=mh*d;MC.style.width=mw+'px';MC.style.height=mh+'px';MX=MC.getContext('2d');}
 const hero=BX.ctl&&BX.ctl.style.display!=='none';MC.style.bottom=((BX.bt?BX.bt.offsetHeight:50)+(hero?126:8))+'px';
 const g=MX,sx=mw/BW,sy=mh/BH;g.setTransform(d,0,0,d,0,0);g.clearRect(0,0,mw,mh);
 g.fillStyle=BT.o.naval?'#2c6b8f':'#c9b77a';g.fillRect(0,0,mw,mh);g.fillStyle=BT.o.naval?'#3f86ab':'#7fb0c4';g.fillRect(0,mh/2-2,mw,4);
 for(const u of BT.U){if(!u.alive)continue;const x=u.x*sx,y=u.y*sy;
  if(u.hero){g.strokeStyle='#fff';g.lineWidth=1.5;g.beginPath();g.arc(x,y,4,0,6.3);g.stroke();g.fillStyle='#fc0';g.beginPath();g.arc(x,y,2.4,0,6.3);g.fill();continue;}
  g.fillStyle=u.t===4?'#fd0':(u.s?(BT.o.d===NEU?'#e80':'#e02020'):'#2c2');const r=u.t===4?2.6:1.5;g.fillRect(x-r/2,y-r/2,r,r);}
 g.strokeStyle='#fff';g.lineWidth=1.5;g.strokeRect(CAM.x*sx,CAM.y*sy,SW/CAM.z*sx,VH/CAM.z*sy);}
const _db11=drawB;drawB=function(){_db11();try{drawMini();}catch(e){}};
})();
