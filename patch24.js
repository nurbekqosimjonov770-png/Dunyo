const fs=require('fs');let e=fs.readFileSync('www/eras.js','utf8');
if(e.includes('colony.js')){console.log('allaqachon ulangan');process.exit(0);}
const m=/document\.write\('([^']*)'\)/.exec(e);if(!m){console.log('TOPILMADI');process.exit(1);}
e=e.replace(m[0],()=>"document.write('"+m[1]+"<script src=\"colony.js\"></script>')");
fs.writeFileSync('www/eras.js',e);console.log('TAYYOR');
