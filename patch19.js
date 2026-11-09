const fs=require('fs');
function rd(f){try{return fs.readFileSync(f,'utf8');}catch(e){return null;}}
let s=rd('www/index.html');
if(s&&!s.includes('eras4.js')){const a='<script src="eras3.js"></script>';if(s.includes(a)){s=s.replace(a,()=>a+'\n<script src="eras4.js"></script>');fs.writeFileSync('www/index.html',s);console.log('OK: yangi davrlar ulandi');}else console.log('TOPILMADI: index.html');}else console.log('allaqachon: davrlar');
s=rd('www/allies.js');
if(s&&!s.includes('ALDX')){const a='let ALY=new Array(NEU).fill(-1)';if(s.includes(a)){s=s.replace(a,()=>"if(typeof ALDX!=='undefined')Object.assign(ALD,ALDX);\n"+a);fs.writeFileSync('www/allies.js',s);console.log('OK: ittifoqlar');}else console.log('TOPILMADI: allies.js');}
s=rd('www/look.js');
if(s&&!s.includes('flagDisc')){const a=`cx.font=(R*1.05)+'px sans-serif';cx.fillStyle='#fff';cx.fillText(emb(i),x,y+1);`;if(s.split(a).length===2){s=s.replace(a,()=>`if(!(typeof flagDisc==='function'&&flagDisc(cx,x,y,R,i))){`+a+`}`);fs.writeFileSync('www/look.js',s);console.log('OK: medalyon bayroqlari');}else console.log('TOPILMADI: look.js');}
s=rd('www/eras.js');
if(s&&!s.includes('flags.js')){const m=/document\.write\('([^']*)'\)/.exec(s);if(m){s=s.replace(m[0],()=>"document.write('"+m[1]+"<script src=\"mini.js\"></script><script src=\"flags.js\"></script><script src=\"cities.js\"></script><script src=\"seasons.js\"></script>')");fs.writeFileSync('www/eras.js',s);console.log('OK: yangi fayllar ulandi');}else console.log('TOPILMADI: eras.js');}else console.log('allaqachon: yangi fayllar');
