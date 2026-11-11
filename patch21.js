const fs=require('fs');
function rd(f){try{return fs.readFileSync(f,'utf8');}catch(e){return null;}}
let s=rd('www/index.html');
if(s&&!s.includes('eras5.js')){const a=['<script src="eras4.js"></script>','<script src="eras3.js"></script>'].find(x=>s.includes(x));if(a){s=s.replace(a,()=>a+'\n<script src="eras5.js"></script>');fs.writeFileSync('www/index.html',s);console.log('OK: Boburiylar davrlari ulandi');}else console.log('TOPILMADI: index.html');}else console.log('allaqachon: eras5');
s=rd('www/eras.js');
if(s&&!s.includes('cities5.js')){const a='<script src="cities.js">';if(s.includes(a)){s=s.replace(a,()=>'<script src="cities5.js"></script>'+a);fs.writeFileSync('www/eras.js',s);console.log('OK: yangi shaharlar');}else console.log('eslatma: cities.js topilmadi, yangi shaharlar qoshilmadi');}
s=rd('www/balance.js');
if(s&&!s.includes('1526:{B:')){const a='const QUAL={';if(s.includes(a)){s=s.replace(a,()=>a+'1483:{Q:1.2,M:1.2,T:1.05,S:.95},1526:{B:1.45,D:.9,R:1.15,U:.85},1556:{B:1.35,D:1,R:1.1,V:.95},1707:{R:1.25,B:.9,M:1.2,W:1.2},1857:{L:1.4,B:.7,R:1.1,T:1,C:.85},');fs.writeFileSync('www/balance.js',s);console.log('OK: kuch sifati');}else console.log('eslatma: balance.js QUAL topilmadi');}
