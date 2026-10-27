const fs=require('fs');
const FL={e:'www/eras.js',g:'www/game.js'},S={};for(const k in FL)S[k]=fs.readFileSync(FL[k],'utf8');
function R(k,a,b){if(S[k].split(a).length!==2){console.log('TOPILMADI:',FL[k],a.slice(0,60));process.exit(1);}S[k]=S[k].split(a).join(b);}
R('e',`let ERAI=-1;try{`,`for(const L of [typeof ERAS2!=='undefined'?ERAS2:[],typeof ERAS3!=='undefined'?ERAS3:[]])for(const e of L){if(!e.u)e.u=[['⚔️','Qilichbozlar'],['🏹','Kamonchilar'],['🏇','Otliqlar'],['💣',"To'plar"]];if(!e.uc)e.uc=[[20,0,0],[30,5,0],[40,8,0],[50,6,4]];if(!e.ev)e.ev=[];ERAS.push(e);}
ERAS.sort((a,b)=>a.y-b.y);
let ERAI=-1;try{`);
R('e',`ERAI=+v;`,`ERAI=ERAS.findIndex(e=>e.y===+v);`);
R('e',`localStorage.setItem('eraSel',i)`,`localStorage.setItem('eraSel',e.y)`);
R('e',`src="battle.js">`,`src="game2.js"></script><script src="battle.js"></script><script src="battle2.js">`);
R('g',`if(tgt){const x=ox+(tgt.c%W+.5)*c,`,`if(typeof drawFleets==='function')drawFleets(c);
 if(tgt){const x=ox+(tgt.c%W+.5)*c,`);
R('g',`localStorage.getItem('d1775e'+ERAI)`,`localStorage.getItem('d1775y'+E.y)`);
for(const k in FL)fs.writeFileSync(FL[k],S[k]);console.log('TAYYOR');
