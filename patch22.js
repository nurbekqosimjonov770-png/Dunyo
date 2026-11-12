const fs=require('fs');
function rd(f){try{return fs.readFileSync(f,'utf8');}catch(e){return null;}}
let g=rd('www/game.js');
if(g&&!g.includes('drawCoast')){const a='cx.drawImage(oc,ox,oy,W*c,H*c);';if(g.split(a).length===2){g=g.replace(a,()=>a+"if(typeof drawCoast==='function')drawCoast(c);");fs.writeFileSync('www/game.js',g);console.log("OK: qirg'oq chizig'i ulandi");}else console.log('TOPILMADI: game.js');}else console.log('allaqachon: game.js');
let e=rd('www/eras.js');
if(e&&!e.includes('slow.js')){const m=/document\.write\('([^']*)'\)/.exec(e);if(m){e=e.replace(m[0],()=>"document.write('"+m[1]+"<script src=\"coast.js\"></script><script src=\"slow.js\"></script>')");fs.writeFileSync('www/eras.js',e);console.log('OK: slow.js va coast.js ulandi');}else console.log('TOPILMADI: eras.js');}else console.log('allaqachon: eras.js');
