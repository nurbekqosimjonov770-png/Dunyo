const fs=require('fs');let e=fs.readFileSync('www/eras.js','utf8');
const m=/document\.write\('([^']*)'\)/.exec(e);if(!m){console.log('TOPILMADI: eras.js');process.exit(1);}
let s=m[1],ch=0;
if(!s.includes('hist0.js')){if(s.includes('<script src="game.js">')){s=s.replace('<script src="game.js">',()=>'<script src="hist0.js"></script><script src="game.js">');ch++;}else{console.log('TOPILMADI: game.js ulanishi');process.exit(1);}}
if(!s.includes('hist1.js')){const t='<script src="hist1.js"></script>';const i=s.indexOf('<script src="perf.js">');s=i>=0?s.slice(0,i)+t+s.slice(i):s+t;ch++;}
e=e.replace(m[0],()=>"document.write('"+s+"')");fs.writeFileSync('www/eras.js',e);console.log('TAYYOR, ozgarishlar:',ch);
