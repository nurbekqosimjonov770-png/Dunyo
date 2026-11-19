const fs=require('fs');
let e=fs.readFileSync('www/eras.js','utf8');
if(!e.includes('perf.js')){const m=/document\.write\('([^']*)'\)/.exec(e);if(!m){console.log('TOPILMADI: eras.js');process.exit(1);}
 e=e.replace(m[0],()=>"document.write('"+m[1]+"<script src=\"perf.js\"></script>')");fs.writeFileSync('www/eras.js',e);console.log('OK: perf.js ulandi');}
else console.log('allaqachon: perf.js');
try{let c=fs.readFileSync('www/colony.js','utf8');const a='cx.globalAlpha=.5;for(const k of CSET){';
 if(c.includes(a)&&!c.includes('window.PERF')){c=c.replace(a,()=>"cx.globalAlpha=.5;for(const k of ((window.INTER||window.PERF>=1)?[]:CSET)){");fs.writeFileSync('www/colony.js',c);console.log('OK: koloniya shtrixlari yengillashtirildi');}}catch(err){}
