(function(){const st=document.createElement('style');
st.textContent='@media (orientation:landscape){#top{padding:3px 8px;font-size:12px}#bot{padding:3px}#bot button{padding:6px;font-size:15px}#pn{left:auto;right:0;width:46%;bottom:40px;max-height:76%;overflow:auto;border-radius:10px 0 0 0;font-size:13px}#pn button{padding:6px 8px!important;font-size:13px!important}.nb{padding:8px;margin:4px auto}h2{margin:6px}}';
document.head.appendChild(st);})();
const LAND=()=>innerWidth>innerHeight;
fit=function(){const d=devicePixelRatio||1;cv.width=innerWidth*d;cv.height=innerHeight*d;cv.style.width=innerWidth+'px';cv.style.height=innerHeight+'px';cx.setTransform(d,0,0,d,0,0);c0=innerWidth/W;if(sc<=1.0001){sc=1;ox=0;oy=(innerHeight-H*c0)/2;}draw();};
function layoutB(){if(!BX||!BT)return;const L=LAND(),hd=BX.hd;
 hd.style.fontSize=L?'11px':'13px';hd.style.padding=L?'3px 8px':'8px 10px';hd.style.lineHeight=L?'1.25':'1.5';
 setHd();const hh=hd.offsetHeight;
 BX.bt.style.padding=L?'3px':'6px';
 if(BX.dep){BX.dep.style.top=(hh+1)+'px';BX.dep.style.display=BT.prep?(L?'flex':'block'):'none';BX.dep.style.gap='6px';BX.dep.style.padding=L?'3px 6px':'4px 6px';
  for(const r of BX.dep.children){r.style.flex=L?'1 1 0':'';r.style.minWidth=L?'0':'';r.style.marginBottom=L?'0':'4px';}}
 BX.bars.style.top=BX.cm.style.top=(hh+(BX.dep&&BT.prep?BX.dep.offsetHeight:0)+8)+'px';
 BX.ctl.style.bottom=(BX.bt.offsetHeight+2)+'px';BX.ctl.style.height=L?'150px':'190px';
 const ch=BX.ctl.children,sz=L?46:58,bb=L?[0,0,50,50,100]:[0,0,62,62,124],rr=L?[54,4,54,4,29]:[80,8,80,8,44];
 for(let i=0;i<5;i++){const e=ch[i+1];if(!e)continue;e.style.width=e.style.height=sz+'px';e.style.lineHeight=(sz-4)+'px';e.style.fontSize=(L?22:26)+'px';e.style.bottom=bb[i]+'px';e.style.right=rr[i]+'px';}}
const _sh9=setHd;setHd=function(){_sh9();if(!LAND()||!BT||!BX)return;const o=BT.o,al=BT.al;
 BX.hd.innerHTML=emb(o.a)+' <b>'+N[K[o.a]][0]+'</b> '+al[0]+'/'+BT.na+' ⚔ '+(o.d<NEU?emb(o.d)+' <b>'+N[K[o.d]][0]+'</b> ':'🏴 <b>Qabilalar</b> ')+al[1]+'/'+BT.nd+(o.fort?' 🏰':'')+' | '+(E.y+Math.floor(months/12))+'-yil'+(o.naval?' | 🌊 DENGIZ JANGI':'');
 BX.hd.appendChild(BX.rb);BX.gb.style.width=(al[0]/((al[0]+al[1])||1)*100)+'%';};
const _sb9=startBattle;startBattle=function(o){_sb9(o);layoutB();};
const _sf9=startFight;startFight=function(){_sf9();layoutB();};
window.addEventListener('resize',()=>{fit();if(BX&&BX.box&&BX.box.style.display==='block')layoutB();});
fit();
