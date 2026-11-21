const fs=require('fs');
let e=fs.readFileSync('www/eras.js','utf8');
if(!e.includes('guard.js')){const m=/document\.write\('([^']*)'\)/.exec(e);if(!m){console.log('TOPILMADI: eras.js');process.exit(1);}
 e=e.replace(m[0],()=>"document.write('"+m[1]+"<script src=\"guard.js\"></script>')");fs.writeFileSync('www/eras.js',e);console.log('OK: guard.js ulandi');}
else console.log('allaqachon: guard.js');
try{let g=fs.readFileSync('www/game.js','utf8');const a='Math.abs(e.clientY-s0[1])>8)mv=true;';
 if(g.includes(a)){g=g.replace(a,()=>'Math.abs(e.clientY-s0[1])>16)mv=true;');fs.writeFileSync('www/game.js',g);console.log('OK: xaritada bosish chegarasi oshirildi');}
 else console.log('allaqachon yoki topilmadi: game.js chegarasi');}catch(err){console.log('XATO: game.js');}
