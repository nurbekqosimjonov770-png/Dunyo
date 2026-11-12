const TSLOW=2.4,MLOG=[];let lastMsg='',MLG=null;
start=function(){clearInterval(timer);if(speed)timer=setInterval(tick,1000*TSLOW/speed);};
toast=function(t){if(!BX)return;BX.ms.textContent=t;BX.ms.style.display='block';clearTimeout(BX._t);BX._t=setTimeout(()=>{BX.ms.style.display='none';},Math.min(10000,Math.max(5000,t.length*90)));};
const _hu20=hud;hud=function(){const now=Date.now();if(now>mt)lastMsg='';
 if(typeof msg==='string'&&msg&&msg!==lastMsg&&mt>now){lastMsg=msg;MLOG.push([(E.y+Math.floor(months/12))+'-yil '+(months%12+1)+'-oy',msg]);if(MLOG.length>80)MLOG.shift();
  if(mt<1e14){const need=now+Math.min(12000,Math.max(5000,msg.length*110));if(mt<need)mt=need;}}
 _hu20();};
function showLog(){if(!MLG){MLG=document.createElement('div');MLG.style.cssText='position:fixed;inset:0;background:#0b1d2ef2;z-index:7;overflow:auto;padding:10px;color:#fff;font-size:14px;display:none';document.body.appendChild(MLG);}
 clearInterval(timer);MLG.style.display='block';MLG.innerHTML='';
 const h=document.createElement('div');h.style.cssText='font-size:17px;font-weight:bold;margin-bottom:8px';h.textContent='📜 Xabarlar tarixi';MLG.appendChild(h);
 if(!MLOG.length){const e=document.createElement('div');e.textContent="Hozircha xabar yo'q";MLG.appendChild(e);}
 for(let i=MLOG.length-1;i>=0;i--){const r=document.createElement('div');r.style.cssText='border-bottom:1px solid #345;padding:5px 0';const s=document.createElement('span');s.style.cssText='opacity:.6;font-size:12px';s.textContent=MLOG[i][0];r.appendChild(s);r.appendChild(document.createElement('br'));r.appendChild(document.createTextNode(MLOG[i][1]));MLG.appendChild(r);}
 const b=document.createElement('button');b.textContent='✖ Yopish';b.style.cssText='display:block;margin:10px auto;padding:10px 20px;font-size:16px;border:0;border-radius:8px';
 b.onclick=()=>{MLG.style.display='none';if(me>=0&&!over&&!(typeof inB!=='undefined'&&inB)&&!(typeof battling!=='undefined'&&battling)&&!(typeof DPB!=='undefined'&&DPB&&DPB.style.display!=='none'))start();};MLG.appendChild(b);}
{const bb=document.createElement('button');bb.textContent='📜';bb.onclick=()=>{if(me>=0)showLog();};document.getElementById('bot').insertBefore(bb,document.getElementById('bz'));
 document.getElementById('top').onclick=()=>{if(me>=0)showLog();};}
