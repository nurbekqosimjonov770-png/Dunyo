const fs=require('fs');const FN='www/eras.js';let s=fs.readFileSync(FN,'utf8');
const a='src="battle3.js">';if(s.split(a).length!==2){console.log('TOPILMADI:',a);process.exit(1);}
s=s.split(a).join('src="battle3.js"></script><script src="march.js">');
fs.writeFileSync(FN,s);console.log('TAYYOR');
