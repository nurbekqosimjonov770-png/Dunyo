(function(){
if(window.__art)return;window.__art=1;
const menu=document.getElementById('menu');if(!menu)return;
const reveal=()=>{menu.classList.remove('hold');if(window.__ready)window.__ready();};
try{
const st=document.createElement('style');
st.textContent='.eraCard{display:flex;flex-direction:column;justify-content:flex-end;text-align:left;width:92%;height:96px;margin:9px auto;padding:8px 14px;border:1px solid #fc6a;border-radius:10px;color:#fff;background:#1a3550;position:relative;overflow:hidden;box-shadow:0 3px 10px #0008}.eraCard canvas,.eraCard .cu{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:0}.eraCard .cu{transition:opacity .4s}.eraCard:after{content:"";position:absolute;inset:0;background:linear-gradient(90deg,rgba(0,0,0,.6),rgba(0,0,0,.05));z-index:0}.eraCard .y,.eraCard .t{position:relative;z-index:1}.eraCard .y{font-size:40px;font-weight:bold;line-height:1;text-shadow:0 2px 8px #000,0 0 3px #000}.eraCard .t{font-size:13px;text-shadow:0 1px 4px #000;margin-top:3px}.natCard{display:flex;align-items:center;gap:12px;text-align:left;width:86%;padding:8px 12px;border:1px solid #fff5;border-radius:10px;position:relative;overflow:hidden;color:#fff!important}.natCard canvas{width:60px;height:40px;border:1px solid #fff;border-radius:3px;flex:none}.natCard .n{font-size:16px;font-weight:bold;text-shadow:0 1px 3px #0009}.natCard .r{font-size:12px;opacity:.9;text-shadow:0 1px 3px #0009}.natCard .e{position:absolute;right:8px;top:50%;transform:translateY(-50%);font-size:44px;opacity:.28}@media (orientation:landscape){.eraCard{width:46%;display:inline-flex;margin:7px 1.5%;height:88px}.natCard{display:inline-flex;width:44%;margin:5px 1%}}';
document.head.appendChild(st);
const rnd=s=>{s=s>>>0||1;return()=>{s=(s*1664525+1013904223)>>>0;return s/4294967296;};};
const PAL=y=>y<500?['#f2b66b','#b7573a','#2b2a4a']:y<1000?['#f0c27b','#a24b2d','#2a2748']:y<1500?['#e8a85a','#8a3d2e','#1d2c48']:y<1800?['#8fb5d6','#3a5a86','#1b2a44']:y<1900?['#c9d6e0','#6a7f96','#25303f']:y<1950?['#e0793f','#7a2f25','#1c1417']:y<1990?['#d98a5a','#6b3a35','#1a1a24']:['#7fd0ff','#2a5c9e','#0e1a33'];
const EM=y=>y<400?['🏛','🛡','🦅']:y<700?['🐪','☪️','🏇']:y<900?['🏇','⚔️','🛖']:y<1100?['🏰','🏹','🏇']:y<1250?['🏰','⚔️','🏇']:y<1350?['🐎','🏹','🏯']:y<1450?['🐎','🕌','⚔️']:y<1520?['⛵','🏰','🏹']:y<1600?['🐘','🕌','🏹']:y<1700?['⛵','💣','🏰']:y<1800?['🔫','⛵','🏇']:y<1850?['🔫','💣','🏇']:y<1900?['🔫','🐘','🚂']:y<1930?['🚂','💣','🔫']:y<1990?['✈️','🚢','⚙️']:['🚀','✈️','🛰'];
function art(y,w,h){const c=document.createElement('canvas');c.width=w;c.height=h;const g=c.getContext('2d'),R=rnd(y*977+13),pal=PAL(y);
 let gr=g.createLinearGradient(0,0,0,h);gr.addColorStop(0,pal[2]);gr.addColorStop(.55,pal[1]);gr.addColorStop(1,pal[0]);g.fillStyle=gr;g.fillRect(0,0,w,h);
 const sx=w*(.55+R()*.35),sy=h*(.3+R()*.15),sg=g.createRadialGradient(sx,sy,0,sx,sy,h*.5);sg.addColorStop(0,'rgba(255,240,200,.9)');sg.addColorStop(.25,'rgba(255,200,120,.35)');sg.addColorStop(1,'rgba(255,200,120,0)');g.fillStyle=sg;g.fillRect(0,0,w,h);
 for(let L=0;L<3;L++){g.fillStyle='rgba('+(20+L*10)+','+(20+L*8)+','+(40+L*8)+','+(.35+L*.2)+')';g.beginPath();g.moveTo(0,h);let yy=h*(.55+L*.12);for(let x=0;x<=w;x+=18){yy+=(R()-.5)*h*.12;yy=Math.max(h*(.35+L*.1),Math.min(h*.8,yy));g.lineTo(x,yy);}g.lineTo(w,h);g.closePath();g.fill();}
 g.fillStyle='rgba(255,255,255,.12)';for(let i=0;i<6;i++){g.beginPath();g.ellipse(R()*w,R()*h*.5,30+R()*50,8+R()*12,0,0,6.3);g.fill();}
 const em=EM(y),pos=[[.74,.55,h*.78],[.92,.64,h*.5],[.54,.68,h*.46]];g.textAlign='center';g.textBaseline='middle';
 em.forEach((e,i)=>{g.save();g.globalAlpha=i?.88:.95;g.shadowColor='rgba(0,0,0,.6)';g.shadowBlur=14;g.font=Math.round(pos[i][2])+'px sans-serif';g.fillText(e,w*pos[i][0],h*pos[i][1]);g.restore();});
 const og=g.createLinearGradient(0,0,w,0);og.addColorStop(0,'rgba(0,0,0,.72)');og.addColorStop(.55,'rgba(0,0,0,.25)');og.addColorStop(1,'rgba(0,0,0,.05)');g.fillStyle=og;g.fillRect(0,0,w,h);return c;}
function shade(c,f){let s=c.slice(1);if(s.length===3)s=s[0]+s[0]+s[1]+s[1]+s[2]+s[2];const r=Math.round(parseInt(s.slice(0,2),16)*f),g=Math.round(parseInt(s.slice(2,4),16)*f),b=Math.round(parseInt(s.slice(4,6),16)*f);return'rgb('+r+','+g+','+b+')';}
function eraCards(){const btns=[...menu.querySelectorAll('button.nb')].filter(b=>/^\d+ — /.test(b.textContent));
 btns.forEach(b=>{const m=/^(\d+) — (.*)$/.exec(b.textContent);if(!m)return;const y=+m[1],t=m[2];
  b.classList.remove('nb');b.classList.add('eraCard');b.style.cssText='';b.textContent='';
  b.appendChild(art(y,560,130));
  const im=new Image();im.className='cu';im.style.opacity='0';im.onload=()=>{im.style.opacity='1';};im.onerror=()=>im.remove();im.src='art/era_'+y+'.jpg';b.appendChild(im);
  const dy=document.createElement('div');dy.className='y';dy.textContent=y;const dt=document.createElement('div');dt.className='t';dt.textContent=t;b.appendChild(dy);b.appendChild(dt);});}
function natCards(){if(typeof N==='undefined'||typeof K==='undefined'||typeof NEU==='undefined')return;const btns=[...menu.querySelectorAll('button.nb')];
 for(let i=0;i<NEU;i++){const nm=N[K[i]][0],b=btns.find(x=>x.textContent.indexOf(nm+' — ')>=0);if(!b)continue;
  const col=COL[i],ruler=(typeof NM!=='undefined'&&NM[K[i]])?NM[K[i]][0]:'',em=typeof emb==='function'?emb(i):'';
  const c2=document.createElement('canvas');c2.width=120;c2.height=80;const g=c2.getContext('2d');
  try{if(typeof flag==='function')flag(g,-3,84,i,124,80);else throw 0;}catch(e){g.fillStyle=col;g.fillRect(0,0,120,80);g.font='48px sans-serif';g.textAlign='center';g.textBaseline='middle';g.fillStyle='#fff';g.fillText(em,60,42);}
  b.classList.add('natCard');b.style.background='linear-gradient(100deg,'+shade(col,.75)+' 0%,'+shade(col,.3)+' 100%)';b.style.color='#fff';b.textContent='';
  const d=document.createElement('div'),dn=document.createElement('div'),dr=document.createElement('div'),sp=document.createElement('span');
  dn.className='n';dn.textContent=nm;dr.className='r';dr.textContent=ruler;d.appendChild(dn);d.appendChild(dr);sp.className='e';sp.textContent=em;
  b.appendChild(c2);b.appendChild(d);b.appendChild(sp);}}
try{if(typeof ERAI!=='undefined'){if(ERAI<0)eraCards();else natCards();}}catch(e){}
}catch(e){}
reveal();
})();
