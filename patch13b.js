const fs=require('fs');
const FG='www/game.js',FE='www/eras.js';let g=fs.readFileSync(FG,'utf8'),e=fs.readFileSync(FE,'utf8');
if(!e.includes('look.js')){const m=/document\.write\('([^']*)'\)/.exec(e);
 if(!m){console.log('TOPILMADI: eras.js ichida document.write yoq');process.exit(1);}
 console.log('Hozirgi skriptlar:',m[1]);
 e=e.replace(m[0],()=>"document.write('"+m[1]+"<script src=\"look.js\"></script>')");}
if(!g.includes('typeof NEWCAP')){const a='for(let i=0;i<NEU;i++){const cp=CAPC[i];';
 const n=g.split(a).length-1;
 if(n!==1){console.log('TOPILMADI: game.js, topilgan soni:',n);process.exit(1);}
 g=g.replace(a,()=>"for(let i=0;i<NEU&&typeof NEWCAP==='undefined';i++){const cp=CAPC[i];");}
fs.writeFileSync(FG,g);fs.writeFileSync(FE,e);console.log('TAYYOR');
