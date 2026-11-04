const fs=require('fs');const FE='www/eras.js';let e=fs.readFileSync(FE,'utf8');
if(!e.includes('crisp.js')){const m=/document\.write\('([^']*)'\)/.exec(e);if(!m){console.log('TOPILMADI');process.exit(1);}
 e=e.replace(m[0],()=>"document.write('"+m[1]+"<script src=\"hires.js\"></script><script src=\"crisp.js\"></script><script src=\"land.js\"></script>')");}
fs.writeFileSync(FE,e);console.log('TAYYOR');
