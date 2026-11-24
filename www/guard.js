(function(){
if(window.__guard)return;window.__guard=1;
const bot=document.getElementById('bot'),sp=document.getElementById('sp');
const st=document.createElement('style');
st.textContent='#bot{gap:10px!important;padding:8px max(14px,env(safe-area-inset-right)) 8px max(14px,env(safe-area-inset-left))!important}#bot button{min-height:46px!important;font-size:18px!important;padding:6px 4px!important}#pn button{margin:6px 5px!important;min-height:40px}@media (orientation:portrait){#pn{max-height:46vh;overflow-y:auto}}';
document.head.appendChild(st);
function ask(title,text,yes,fn){const o=document.createElement('div');o.style.cssText='position:fixed;inset:0;background:#000b;z-index:9;display:flex;align-items:center;justify-content:center;color:#fff';
 const b=document.createElement('div');b.style.cssText='background:#10253a;border:2px solid #fc6;border-radius:12px;padding:16px;width:80%;max-width:420px;text-align:center';
 const h=document.createElement('div');h.style.cssText='font-size:17px;font-weight:bold;margin-bottom:8px';h.textContent=title;const p=document.createElement('div');p.style.cssText='font-size:14px;margin-bottom:12px;line-height:1.4';p.textContent=text;b.appendChild(h);b.appendChild(p);
 const mk=(t,f,c)=>{const x=document.createElement('button');x.textContent=t;x.style.cssText='display:block;margin:8px auto;padding:12px;font-size:16px;border:0;border-radius:8px;width:92%;'+(c||'');x.onclick=f;b.appendChild(x);return x;};
 mk('Qolish',()=>o.remove(),'background:#2a2;color:#fff');mk(yes,()=>{o.remove();fn();},'background:#a33;color:#fff');o.appendChild(b);document.body.appendChild(o);}
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
})();
