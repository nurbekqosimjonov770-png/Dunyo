const fs=require('fs');let e=fs.readFileSync('www/eras.js','utf8');
if(e.includes('army.js')){console.log('allaqachon ulangan');process.exit(0);}
const m=/document\.write\('([^']*)'\)/.exec(e);if(!m){console.log('TOPILMADI: eras.js');process.exit(1);}
for(const f of['balance.js','allies.js'])if(!e.includes(f))console.log("ESLATMA: "+f+" ulanmagan, qo'shinlar tizimi ishlamasligi mumkin");
e=e.replace(m[0],()=>"document.write('"+m[1]+"<script src=\"army.js\"></script>')");
fs.writeFileSync('www/eras.js',e);console.log('TAYYOR');
