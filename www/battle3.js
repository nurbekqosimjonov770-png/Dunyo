const FORMS=[['▬','Chiziq','line'],['▲','Xanjar','wedge'],['☰','Ikki qator','double'],['■','Kvadrat','square'],['◠','Yarim oy','moon'],['┃','Ustun','col'],['⇆','Qanotlar','flank']];
function selUnits(side,g){return BT.U.filter(u=>u.alive&&!u.hero&&u.s===side&&(g<0||u.t===g));}
function cen(us){let x=0,y=0;for(const u of us){x+=u.x;y+=u.y;}return[x/us.length,y/us.length];}
function genRel(n,f,sp){if(n<=0)return[];const W=innerWidth-40,mc=Math.max(2,Math.floor(W/sp)),R=[];
 if(f==='wedge'){const rows=Math.ceil(Math.sqrt(n));for(let i=0;i<n;i++){const r=Math.floor(Math.sqrt(i)),j=i-r*r;R.push([(j-r)*sp,r*sp-rows*sp/2]);}return R;}
 let cols;
 if(f==='double')cols=Math.min(mc,Math.ceil(n/2));
 else if(f==='square')cols=Math.min(mc,Math.ceil(Math.sqrt(n)));
 else if(f==='col')cols=Math.min(3,n);
 else cols=Math.min(mc,n);
 cols=Math.max(1,cols);const rows=Math.ceil(n/cols),curve=f==='moon'?Math.min(50,cols*sp*.22):0;
 for(let i=0;i<n;i++){const r=Math.floor(i/cols),c=i%cols,cc=Math.min(cols,n-r*cols),t=cc>1?c/(cc-1)*2-1:0;
  R.push([t*(cc-1)*sp/2,r*sp-(rows-1)*sp/2-t*t*curve+curve/2]);}
 return R;}
function putRel(us,rel,cx,cy,side){us.forEach((u,i)=>{const p=rel[i];u.x=cx+p[0];u.y=cy+(side?-p[1]:p[1]);u.tg=null;});}
function clampSet(us,side){if(!us.length)return;const bw=innerWidth,bh=innerHeight,mid=bh/2;let x0=1e9,x1=-1e9,y0=1e9,y1=-1e9;
 for(const u of us){x0=Math.min(x0,u.x);x1=Math.max(x1,u.x);y0=Math.min(y0,u.y);y1=Math.max(y1,u.y);}
 const ymin=side?130:mid+25,ymax=side?mid-25:bh-125;let dx=0,dy=0;
 if(x0<10)dx=10-x0;else if(x1>bw-10)dx=bw-10-x1;
 if(y0<ymin)dy=ymin-y0;else if(y1>ymax)dy=ymax-y1;
 if(dx||dy)for(const u of us){u.x+=dx;u.y+=dy;}}
function formGroup(side,g,f){const us=selUnits(side,g);if(!us.length)return;const c=cen(us),sp=BT.sp||13,bw=innerWidth;
 if(f==='flank'){const half=Math.ceil(us.length/2),L=us.slice(0,half),Rr=us.slice(half);putRel(L,genRel(L.length,'double',sp),bw*.14,c[1],side);putRel(Rr,genRel(Rr.length,'double',sp),bw*.86,c[1],side);}
 else putRel(us,genRel(us.length,f,sp),c[0],c[1],side);
 clampSet(us,side);}
function formAll(side,f,anchor){const bw=innerWidth,sp=BT.sp||13,all=selUnits(side,-1);if(!all.length)return;
 let cx,fy;if(anchor){cx=anchor.x;fy=anchor.y;}else{const c=cen(all);cx=c[0];fy=side?Math.max(...all.map(u=>u.y)):Math.min(...all.map(u=>u.y));}
 const ff=f==='flank'?'line':f,dirs=side?-1:1;let off=0;
 for(const g of [0,1,3]){const us=all.filter(u=>u.t===g);if(!us.length)continue;const rel=genRel(us.length,ff,sp);let mn=1e9,mx=-1e9;for(const p of rel){mn=Math.min(mn,p[1]);mx=Math.max(mx,p[1]);}
  us.forEach((u,i)=>{u.x=cx+rel[i][0];u.y=fy+dirs*(off+rel[i][1]-mn);u.tg=null;});off+=mx-mn+sp*1.3;}
 const cv2=all.filter(u=>u.t===2);if(cv2.length){const half=Math.ceil(cv2.length/2),L=cv2.slice(0,half),Rr=cv2.slice(half);putRel(L,genRel(L.length,'double',sp),bw*.14,fy+dirs*sp*2,side);putRel(Rr,genRel(Rr.length,'double',sp),bw*.86,fy+dirs*sp*2,side);}
 const st=all.filter(u=>u.t===4);st.forEach((u,i)=>{u.x=cx+(i-(st.length-1)/2)*70;u.y=fy+dirs*(off+sp);u.tg=null;});
 clampSet(all,side);}
function aiDeploy(){const fs=['line','double','moon','wedge','square'];BT.aiForm=fs[(Math.random()*fs.length)|0];formAll(1,BT.aiForm,{x:innerWidth/2,y:innerHeight/2-80});}
function moveSel(x,y){const us=selUnits(0,BT.sel);if(!us.length)return;const c=cen(us),dx=x-c[0],dy=y-c[1];us.forEach(u=>{u.x+=dx;u.y+=dy;u.tg=null;});clampSet(us,0);}
function hlSel(){for(const e of BX.grp)e[0].style.background=e[1]===BT.sel?'#fc0':'#fff';}
function applyForm(f){BT.lastF=f;if(BT.sel===-1)formAll(0,f);else formGroup(0,BT.sel,f);}
function fillDep(){BX.r1.innerHTML='';BX.grp=[];const em=BT.o.naval?['⛵','🚤','🛥️','🚢']:TECH[TSd[0].t].u.map(u=>u[0]);
 const add=(t,g)=>{const b=mkb(t,()=>{BT.sel=g;hlSel();},'padding:6px 9px;margin:0;font-size:16px;min-width:44px;background:#fff;color:#000;white-space:nowrap');BX.r1.appendChild(b);BX.grp.push([b,g]);};
 add('ALL '+selUnits(0,-1).length,-1);for(let i=0;i<4;i++)add(em[i]+selUnits(0,i).length,i);add('⭐'+selUnits(0,4).length,4);hlSel();}
function buildDep(){const d=dv('position:absolute;left:0;right:0;display:none;background:#000b;padding:4px 6px;z-index:3'),r1=dv('display:flex;gap:4px;overflow-x:auto;margin-bottom:4px'),r2=dv('display:flex;gap:4px;overflow-x:auto');
 d.appendChild(r1);d.appendChild(r2);
 FORMS.forEach(f=>r2.appendChild(mkb(f[0]+' '+f[1],()=>{applyForm(f[2]);},'padding:6px 8px;margin:0;font-size:12px;white-space:nowrap;background:#ddd;color:#000')));
 const sb2=mkb('↔ Zich',()=>{BT.sp=BT.sp===13?19:13;sb2.textContent=BT.sp===13?'↔ Zich':'↔ Siyrak';if(BT.lastF)applyForm(BT.lastF);},'padding:6px 8px;margin:0;font-size:12px;white-space:nowrap;background:#9cf;color:#000');
 const rs2=mkb('↺ Avto',()=>{for(const u of selUnits(0,-1)){u.x=u.x0;u.y=u.y0;u.tg=null;}BT.lastF=null;},'padding:6px 8px;margin:0;font-size:12px;white-space:nowrap;background:#fc9;color:#000');
 r2.appendChild(sb2);r2.appendChild(rs2);BX.box.appendChild(d);BX.dep=d;BX.r1=r1;BX.sb2=sb2;}
const _sb3=startBattle;startBattle=function(o){_sb3(o);
 if(!BX.dep)buildDep();
 BT.sel=-1;BT.sp=13;BT.lastF=null;BX.sb2.textContent='↔ Zich';
 BT.U.forEach(u=>{u.x0=u.x;u.y0=u.y;});
 aiDeploy();
 BX.ms.style.top='50%';BX.ms.style.pointerEvents='none';
 BX.dep.style.display='block';BX.dep.style.top=(BX.hd.offsetHeight+2)+'px';
 fillDep();
 if(!BX._pd){BX._pd=1;BX.cv.addEventListener('pointerdown',e=>{if(BT&&BT.prep&&!BT.done)moveSel(e.clientX,e.clientY);});BX.cv.addEventListener('pointermove',e=>{if(e.buttons&&BT&&BT.prep&&!BT.done)moveSel(e.clientX,e.clientY);});}
 const fn=(FORMS.find(f=>f[2]===BT.aiForm)||[0,'?'])[1];
 toast("Dushman tuzilishi: "+fn+". Guruhni tanlang, tuzilish tugmasini bosing yoki maydonga bosib surib joylashtiring. Keyin ▶ bosing.");};
const _sf3=startFight;startFight=function(){_sf3();if(BX.dep)BX.dep.style.display='none';};
const _db=drawB;drawB=function(){_db();if(!BT.prep)return;const g=BX.g,bw=innerWidth,bh=innerHeight,mid=bh/2;
 g.fillStyle='rgba(220,60,60,.16)';g.fillRect(0,0,bw,mid-20);g.fillStyle='rgba(60,220,60,.10)';g.fillRect(0,mid+20,bw,bh-mid-20);
 g.strokeStyle='#f0f';g.lineWidth=2;for(const u of selUnits(0,BT.sel)){g.beginPath();g.arc(u.x,u.y,9,0,6.3);g.stroke();}};
