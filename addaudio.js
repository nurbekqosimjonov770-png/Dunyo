const fs=require('fs'),path=require('path');
const src=process.env.HOME+'/storage/downloads/dunyo_audio',dst='www/music';
if(!fs.existsSync(src)){console.log('Papka topilmadi:',src);process.exit(1);}
fs.mkdirSync(dst,{recursive:true});
const man={map:[],battle:[],sfx:{}},keys=['clash','shot','boom','arrow','horse','hurt','horn','cry','win','lose'];let tot=0;
for(const f of fs.readdirSync(src)){if(!/\.(mp3|ogg|wav|m4a)$/i.test(f))continue;const low=f.toLowerCase();let kind=null;
 if(low.startsWith('map'))kind='map';else if(low.startsWith('battle'))kind='battle';else for(const k of keys)if(low.startsWith(k)){kind=k;break;}
 if(!kind){console.log("Nomi tanilmadi (o'tkazildi):",f);continue;}
 const nf=f.replace(/[^A-Za-z0-9._-]/g,'_');fs.copyFileSync(path.join(src,f),path.join(dst,nf));tot+=fs.statSync(path.join(dst,nf)).size;const rel='music/'+nf;
 if(kind==='map')man.map.push(rel);else if(kind==='battle')man.battle.push(rel);else(man.sfx[kind]=man.sfx[kind]||[]).push(rel);}
fs.writeFileSync(dst+'/manifest.json',JSON.stringify(man));
console.log('TAYYOR | xarita:',man.map.length,'| jang:',man.battle.length,'| tovushlar:',Object.keys(man.sfx).join(',')||'yoq','| hajmi:',(tot/1048576).toFixed(1)+' MB');
