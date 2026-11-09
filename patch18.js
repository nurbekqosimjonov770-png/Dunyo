const fs=require('fs');
function P(file,a,b,name){try{const s=fs.readFileSync(file,'utf8'),n=s.split(a).length-1;if(n===0){console.log('allaqachon yoki topilmadi:',name);return;}fs.writeFileSync(file,s.split(a).join(b));console.log('OK:',name);}catch(e){console.log('XATO:',name,e.message);}}
P('www/game2.js','cnt[me]>land*.5','cnt[me]>land*.9',"yakka g'alaba 90%");
P('www/allies.js','sh>.6&&ALY[me]>=0','sh>.9&&ALY[me]>=0',"ittifoq g'alabasi 90%");
P('www/allies.js','if(peaceMode&&cnt[NEU]===0)','if(peaceMode&&cnt[NEU]===0&&sh>.9)','tinch rejim 90%');
try{let e=fs.readFileSync('www/eras.js','utf8');if(!e.includes('audio3.js')){const m=/document\.write\('([^']*)'\)/.exec(e);if(!m){console.log('TOPILMADI: eras.js');}else{e=e.replace(m[0],()=>"document.write('"+m[1]+"<script src=\"audio3.js\"></script>')");fs.writeFileSync('www/eras.js',e);console.log('OK: audio3.js ulandi');}}else console.log('allaqachon: audio3.js');}catch(e){console.log('XATO eras.js',e.message);}
