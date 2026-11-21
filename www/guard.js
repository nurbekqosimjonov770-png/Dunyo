(function(){
if(window.__guard)return;window.__guard=1;
const NW=()=>performance.now(),bot=document.getElementById('bot'),sp=document.getElementById('sp');
let lastG=0,edgeT=0,sx=0,sy=0,act=0;const lastClk=new WeakMap();
const st=document.createElement('style');
st.textContent='#bot{gap:10px!important;padding:8px max(14px,env(safe-area-inset-right)) 8px max(14px,env(safe-area-inset-left))!important}#bot button{min-height:46px!important;font-size:18px!important;padding:6px 4px!important}#pn button{margin:6px 5px!important;min-height:40px}@media (orientation:portrait){#pn{max-height:46vh;overflow-y:auto}}button:disabled{opacity:.45}';
document.head.appendChild(st);
const blk=e=>{e.preventDefault();e.stopPropagation();e.stopImmediatePropagation();};
const armEl=(el,ms)=>{if(!el)return;const bs=[...el.querySelectorAll('button')];bs.forEach(b=>{b.disabled=true;});setTimeout(()=>bs.forEach(b=>{b.disabled=false;}),ms);};
const armBtn=(b,ms)=>{if(!b)return;b.disabled=true;setTimeout(()=>{b.disabled=false;},ms);};
cv.addEventListener('pointerdown',e=>{act++;if(act>1)lastG=NW();sx=e.clientX;sy=e.clientY;},true);
cv.addEventListener('pointermove',e=>{if(Math.hypot(e.clientX-sx,e.clientY-sy)>12)lastG=NW();},true);
const ue=e=>{act=Math.max(0,act-1);if(Math.hypot(e.clientX-sx,e.clientY-sy)>12)lastG=NW();};
cv.addEventListener('pointerup',ue,true);cv.addEventListener('pointercancel',ue,true);
document.addEventListener('pointerdown',e=>{const b=e.target.closest&&e.target.closest('button');if(!b)return;
 if(e.clientX<12||e.clientX>innerWidth-12||e.clientY>innerHeight-8||e.clientY<6)edgeT=NW();},true);
document.addEventListener('click',e=>{const b=e.target.closest&&e.target.closest('button');if(!b)return;const t=NW();
 if(t-lastG<350){blk(e);return;}
 if(t-edgeT<900){edgeT=0;blk(e);return;}
 if(b.id!=='zi'&&b.id!=='zo'){const l=lastClk.get(b)||0;if(t-l<260){blk(e);return;}lastClk.set(b,t);}},true);
let pnWas=pn.style.display;
new MutationObserver(()=>{const d=pn.style.display;if(d==='block'&&pnWas!=='block')armEl(pn,420);pnWas=d;}).observe(pn,{attributes:true,attributeFilter:['style']});
if(typeof dpShow==='function'){const _ds=dpShow;dpShow=function(){_ds();if(typeof DPB!=='undefined'&&DPB&&DPB.style.display!=='none')armEl(DPB,/☢/.test(DPB.textContent)?1500:700);};}
function ask(title,text,yes,fn){const o=document.createElement('div');o.style.cssText='position:fixed;inset:0;background:#000b;z-index:9;display:flex;align-items:center;justify-content:center;color:#fff';
 const b=document.createElement('div');b.style.cssText='background:#10253a;border:2px solid #fc6;border-radius:12px;padding:16px;width:80%;max-width:420px;text-align:center';
 const h=document.createElement('div');h.style.cssText='font-size:17px;font-weight:bold;margin-bottom:8px';h.textContent=title;const p=document.createElement('div');p.style.cssText='font-size:14px;margin-bottom:12px;line-height:1.4';p.textContent=text;b.appendChild(h);b.appendChild(p);
 const mk=(t,f,c)=>{const x=document.createElement('button');x.textContent=t;x.style.cssText='display:block;margin:8px auto;padding:12px;font-size:16px;border:0;border-radius:8px;width:92%;'+(c||'');x.onclick=f;b.appendChild(x);return x;};
 mk('Qolish',()=>o.remove(),'background:#2a2;color:#fff');const y=mk(yes,()=>{o.remove();fn();},'background:#a33;color:#fff');armBtn(y,900);o.appendChild(b);document.body.appendChild(o);}
const hm=document.getElementById('hm');
if(hm)hm.onclick=()=>{ask('🏠 Davr tanlashga qaytasizmi?',"O'yin avtomatik saqlanadi (davr tanlagach «Davom ettirish» tugmasi chiqadi).",'Ha, chiqish',()=>{try{window.dispatchEvent(new Event('pagehide'));}catch(e){}try{if(me>=0&&!over)save();}catch(e){}try{localStorage.removeItem('eraSel');}catch(e){}location.reload();});};
const mo=document.createElement('div');mo.style.cssText='position:fixed;inset:0;background:#000b;z-index:7;display:none;align-items:center;justify-content:center;color:#fff';
const card=document.createElement('div');card.style.cssText='background:#10253a;border:2px solid #fc6;border-radius:12px;padding:14px;width:78%;max-width:380px';
const ct=document.createElement('div');ct.style.cssText='font-size:17px;font-weight:bold;margin-bottom:8px;text-align:center';ct.textContent='☰ Menyu';card.appendChild(ct);mo.appendChild(card);document.body.appendChild(mo);
const items=[],mu=document.getElementById('mu');if(mu)items.push([mu,'Tovush va musiqa',0]);
[...bot.children].forEach(b=>{if(/^📜/.test(b.textContent))items.push([b,'Xabarlar tarixi',1]);else if(/^⚡/.test(b.textContent))items.push([b,'Grafika darajasi',0]);});
if(hm)items.push([hm,'Davr tanlash (chiqish)',1]);
items.forEach(it=>{const row=document.createElement('div');row.style.cssText='display:flex;align-items:center;gap:12px;margin:8px 0';const b=it[0];b.style.cssText='min-width:64px;height:48px;font-size:20px;border:0;border-radius:8px;flex:none';
 const l=document.createElement('span');l.textContent=it[1];l.style.fontSize='15px';row.appendChild(b);row.appendChild(l);card.appendChild(row);if(it[2])b.addEventListener('click',()=>{mo.style.display='none';});});
const cl=document.createElement('button');cl.textContent='✖ Yopish';cl.style.cssText='display:block;margin:10px auto 0;padding:10px 20px;font-size:16px;border:0;border-radius:8px';cl.onclick=()=>{mo.style.display='none';};card.appendChild(cl);
const mb=document.createElement('button');mb.textContent='☰';mb.onclick=()=>{mo.style.display='flex';};bot.insertBefore(mb,sp);
const bz=document.getElementById('bz');if(bz)bz.style.marginLeft='auto';
const top=document.getElementById('top');if(top)top.onclick=null;
const _tpG=tap;tap=function(px,py){if(me>=0&&!over&&tgt&&tgt.ok&&!tgt.fleet){const c=c0*sc,X=ox+(tgt.c%W+.5)*c,Y=oy+((tgt.c/W|0)+.5)*c;
  if(Math.hypot(px-X,py-Y)<30&&!(tgt.arm>Date.now())){tgt.arm=Date.now()+2500;note('⚔️ Hujumni boshlash uchun yana bosing');draw();return;}}_tpG(px,py);};
const _sbG=startBattle;startBattle=function(o){_sbG(o);try{if(BX&&!BX._g){BX._g=1;const fb=BX.fb,f=fb.onclick;let ar=0;
  fb.onclick=e=>{const t=NW();if(t<ar){ar=0;fb.textContent='⏭ Yakunlash';f(e);}else{ar=t+1800;fb.textContent='❗ Yana bosing';setTimeout(()=>{if(NW()>=ar){ar=0;fb.textContent='⏭ Yakunlash';}},1850);}};}}catch(e){}};
const _fbG=finishB;finishB=function(){_fbG();try{armBtn(BX.cb,1300);}catch(e){}};
})();
