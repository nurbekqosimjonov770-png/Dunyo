const fs=require('fs');
const FG='www/game.js',FE='www/eras.js';let g=fs.readFileSync(FG,'utf8'),e=fs.readFileSync(FE,'utf8');
const a1='for(let i=0;i<NEU;i++){const cp=CAPC[i];if(cp<0||co[cp]!==i)continue;const x=ox+(cp%W+.5)*c,';
if(g.split(a1).length!==2){console.log('TOPILMADI: game.js');process.exit(1);}
g=g.split(a1).join('for(let i=0;i<NEU&&typeof NEWCAP===\'undefined\';i++){const cp=CAPC[i];if(cp<0||co[cp]!==i)continue;const x=ox+(cp%W+.5)*c,');
const cand=['src="allies2.js">','src="allies.js">','src="battle4.js">','src="fix2.js">','src="march.js">'];
const a2=cand.find(x=>e.split(x).length===2);
if(!a2){console.log('TOPILMADI: eras.js');process.exit(1);}
e=e.split(a2).join(a2.slice(0,-1)+'></script><script src="look.js">');
fs.writeFileSync(FG,g);fs.writeFileSync(FE,e);console.log('TAYYOR');
