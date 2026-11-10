const fs=require('fs');const FE='www/eras.js';let e=fs.readFileSync(FE,'utf8');
if(!e.includes('diplo.js')){const m=/document\.write\('([^']*)'\)/.exec(e);if(!m){console.log('TOPILMADI');process.exit(1);}
 e=e.replace(m[0],()=>"document.write('"+m[1]+"<script src=\"diplo.js\"></script><script src=\"nuke.js\"></script><script src=\"plague.js\"></script><script src=\"hevents.js\"></script>')");
 fs.writeFileSync(FE,e);console.log('TAYYOR');}else console.log('allaqachon ulangan');
