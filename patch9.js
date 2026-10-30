const fs=require('fs');const FN='www/eras.js';let s=fs.readFileSync(FN,'utf8');
const a=['src="march.js">','src="battle3.js">','src="battle2.js">'].find(x=>s.split(x).length===2);
if(!a){console.log('TOPILMADI');process.exit(1);}
s=s.split(a).join(a.slice(0,-1)+'></script><script src="fix2.js">');
fs.writeFileSync(FN,s);console.log('TAYYOR');
