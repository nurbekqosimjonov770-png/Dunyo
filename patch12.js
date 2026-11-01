const fs=require('fs');const FN='www/eras.js';let s=fs.readFileSync(FN,'utf8');
const a='src="allies.js">';
if(s.split(a).length!==2){console.log('TOPILMADI: avval ittifoqlar yangilanishini (allies.js) qo\'llang');process.exit(1);}
s=s.split(a).join('src="allies.js"></script><script src="allies2.js">');
fs.writeFileSync(FN,s);console.log('TAYYOR');
