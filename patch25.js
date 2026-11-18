const fs=require('fs');let e=fs.readFileSync('www/eras.js','utf8');
if(e.includes('request.js')){console.log('allaqachon ulangan');process.exit(0);}
const a=['src="colony.js">','src="altime.js">','src="slow.js">','src="hevents.js">','src="plague.js">','src="nuke.js">','src="diplo.js">'].find(x=>e.split(x).length===2);
if(!a){console.log("TOPILMADI: avval diplomatiya (diplo.js) yangilanishini qo'llang");process.exit(1);}
e=e.split(a).join(a.slice(0,-1)+'></script><script src="request.js">');
fs.writeFileSync('www/eras.js',e);console.log('TAYYOR');
