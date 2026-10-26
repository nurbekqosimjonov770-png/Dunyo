const fs=require('fs');
const FN='www/game.js';let s=fs.readFileSync(FN,'utf8');
function R(a,b){if(s.split(a).length!==2){console.log('TOPILMADI:',a.slice(0,60));process.exit(1);}s=s.split(a).join(b);}
R(`const fmt=v=>v>=1000?(v/1000).toFixed(1)+'k':Math.floor(v);`,`const fmt=v=>v>=1000?(v/1000).toFixed(1)+'k':Math.floor(v);
const EMB=[['Britaniya|Angliya','🦁'],['Fransiya','⚜️'],['Ispaniya|Kastiliya','🏰'],['Portugaliya','🛡️'],['Rossiya|Moskva|Rus','🦅'],['Usmonlilar|Mamluklar|Mugallar|Songxay|Xorazmshohlar|Shayboniylar|Muvahhidlar|saljuq|Marokash','☪️'],['Gabsburg|Muqaddas Rim|Prussiya|Polsha|Vizantiya|Ayyubiylar|Atsteklar','🦅'],['Niderlandiya|Efiopiya','🦁'],['Sin |Min |Szin|Sun ','🐉'],['Yaponiya|Kamakura','🔴'],['Eron|Safaviylar|Inka','☀️'],['koloniya','⭐'],['Daniya|Vengriya|Kalmar|Shvetsiya','✝️'],["Mo'g'ullar|Oltin",'🐎'],['Temuriylar','⭕'],['Tevton','✠'],["Dehli|G'uriylar",'🌙'],['Xmer|Vijayanagara','🕉️']];
function emb(i){if(i>=NEU)return '🏴';const n=N[K[i]][0];for(const e of EMB)if(new RegExp(e[0]).test(n))return e[1];return '🚩';}
function flag(g,x,y,i,w,h){g.strokeStyle='#432';g.lineWidth=2;g.beginPath();g.moveTo(x,y);g.lineTo(x,y-h-4);g.stroke();g.fillStyle=COL[i];g.fillRect(x+1,y-h-4,w,h);g.strokeStyle='#fff';g.lineWidth=1;g.strokeRect(x+1,y-h-4,w,h);
 if(w>=14){g.font=(h*.75)+'px sans-serif';g.textAlign='center';g.textBaseline='middle';g.fillStyle='#fff';g.fillText(emb(i),x+1+w/2,y-h/2-4);}
 g.textAlign='center';g.textBaseline='middle';}`);
R(`const LT=h=>parseInt(h[1],16)*3`,`BD.push(['⚓','Bandargoh',70,10,0]);
const LT=h=>parseInt(h[1],16)*3`);
R(`tgt=null,pct=50,capLost={};`,`tgt=null,pct=50,capLost={},ships=0;`);
R(`cx.fillText(fmt(T[i]),x,y);`,`cx.fillText(fmt(T[i]),x,y);flag(cx,x+r+2,y+r*.5,i,Math.max(12,r*1.3),Math.max(8,r*.9));`);
R(`if(tgt){const x=ox+(tgt.c%W+.5)*c,`,`if(ships>0&&c>=1.2){const pl=B.filter(b=>b[1]===3&&co[b[0]]===me);if(pl.length)for(let s=0;s<Math.min(ships,12);s++){const b=pl[s%pl.length],pc=portSea(b[0]);if(pc<0)continue;const sx=ox+((pc%W)+.5)*c+(Math.floor(s/pl.length)%3-1)*c*.8,sy=oy+(((pc/W)|0)+.5)*c+Math.sin(Date.now()/600+s)*2;cx.font=Math.min(24,Math.max(12,c*3))+'px sans-serif';cx.fillStyle='#fff';cx.fillText('⛵',sx,sy);}}
 if(tgt){const x=ox+(tgt.c%W+.5)*c,`);
R(`b.textContent=N[k][0]+' — '+NM[k][0];`,`b.textContent=emb(i)+' '+N[k][0]+' — '+NM[k][0];`);
R(`msg:N[K[me]][0]+" | "+(E.y`,`msg:emb(me)+' '+N[K[me]][0]+" | "+(E.y`);
R(`function build(i,c){const b=BD[i];`,`function build(i,c){const b=BD[i];if(i===3&&!coastal(c)){note("Bandargoh faqat qirg'oqda quriladi");return;}`);
R(`()=>build(i,c)));`,`()=>build(i,c)));
 if(ports()>0)pbtn("⛵ Kema 60💰 10🥈 ("+ships+")",()=>buyShip(c));`);
R(`startBattle({a:me,d,cell:tgt.c,commit,Td,fort});`,`startBattle({a:me,d,cell:tgt.c,commit,Td,fort,sea:!nearLand(tgt.c),ships});`);
R(`function battleDone(o,sa,sd){`,`function battleDone(o,sa,sd,bonus){`);
R(`D=Math.max(1,Math.round((2+adv*12)*(o.fort?.6:1)));`,`D=Math.max(1,Math.round((2+adv*12)*(o.fort?.6:1))+(bonus||0));`);
R(`peace,trade,B,capLost}`,`peace,trade,B,capLost,ships}`);
R(`capLost=sv.capLost||{};`,`capLost=sv.capLost||{};ships=sv.ships||0;`);
R(`window.addEventListener('resize',fit);fit();paint();draw();`,`function coastal(c){const x=c%W,y=(c/W)|0;return x>0&&co[c-1]===SEA||x<W-1&&co[c+1]===SEA||y>0&&co[c-W]===SEA||y<H-1&&co[c+W]===SEA;}
function ports(){let n=0;for(const b of B)if(b[1]===3&&co[b[0]]===me)n++;return n;}
function buyShip(c){if(gold<60||silv<10){note('Resurs yetmaydi');return;}gold-=60;silv-=10;ships++;sfx('coin');panelOwn(c);hud();draw();}
function portSea(p){const x=p%W,y=(p/W)|0;for(let r=1;r<=3;r++)for(let dy=-r;dy<=r;dy++)for(let dx=-r;dx<=r;dx++){const nx=x+dx,ny=y+dy;if(nx<0||ny<0||nx>=W||ny>=H)continue;if(co[ny*W+nx]===SEA)return ny*W+nx;}return -1;}
function nearLand(c){const x=c%W,y=(c/W)|0;for(let dy=-2;dy<=2;dy++)for(let dx=-2;dx<=2;dx++){const nx=x+dx,ny=y+dy;if(nx<0||ny<0||nx>=W||ny>=H)continue;if(co[ny*W+nx]===me)return true;}return false;}
function near(c){if(nearLand(c))return true;if(ships<=0)return false;const R=Math.min(20,5+ships*3),x=c%W,y=(c/W)|0;for(let dy=-R;dy<=R;dy++)for(let dx=-R;dx<=R;dx++){const nx=x+dx,ny=y+dy;if(nx<0||ny<0||nx>=W||ny>=H)continue;if(co[ny*W+nx]===me)return true;}return false;}
window.addEventListener('resize',fit);fit();paint();draw();`);
fs.writeFileSync(FN,s);console.log('TAYYOR');
