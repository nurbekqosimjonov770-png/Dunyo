const fs=require('fs');
const FL={b:'build.js',g:'www/game.js',t:'www/battle.js'},S={};for(const k in FL)S[k]=fs.readFileSync(FL[k],'utf8');
function R(k,a,b){if(S[k].split(a).length!==2){console.log('TOPILMADI:',FL[k],a.slice(0,50));process.exit(1);}S[k]=S[k].split(a).join(b);}
R('b',`comps.push({o:o[0],list});`,`comps.push({o:o[0],iso:o.slice(1),list});`);
R('b',`P.push([cp.o,s[0],s[1]])`,`P.push([cp.o,s[0],s[1],cp.iso])`);
R('g',`const K='GFSPRTHKNWCJIEUZDL',NEU=18,SEA=255;`,`const E=ERAS[ERAI],K=Object.keys(E.n).join(''),NEU=K.length,SEA=255;
const N={},NM={};for(const k of K){const d=E.n[k];N[k]=[d[0],d[1],d[2],d[3]];NM[k]=[d[4],d[5]];}
const UI=E.u.map(x=>x[0]),UN=E.u.map(x=>x[1]);`);
R('g',`const N={G:["Buyuk Britaniya"`,`const N0={G:["Buyuk Britaniya"`);
R('g',`const NM={G:['Qirol Jorj III'`,`const NM0={G:['Qirol Jorj III'`);
R('g',`const UI=[`,`const UI0=[`);
R('g',`UN=['Qilichbozlar'`,`UN0=['Qilichbozlar'`);
R('g',`const UC=[[20,0,0],[30,5,0],[40,8,0],[50,6,4]],`,`const UC=E.uc,`);
R('g',`for(let i=0;i<W*H;i++){const p=GR[i];if(p>=0){const o=P[p][0];co[i]=o==='-'?NEU:K.indexOf(o);}}`,`const ISOK={};for(const k in E.m)E.m[k].split(' ').forEach(s=>ISOK[s]=k);
for(let i=0;i<W*H;i++){const p=GR[i];if(p>=0){const iso=P[p][3],lo=i%W-179.5,la=TOP-((i/W)|0)-.5,o=E.r(iso,lo,la)||ISOK[iso]||'-',j=K.indexOf(o);co[i]=j<0?NEU:j;}}`);
R('g',`const cnt=new Array(19).fill(0);`,`const cnt=new Array(NEU+1).fill(0);`);
R('g',`for(let i=0;i<19;i++)land+=cnt[i];`,`for(let i=0;i<=NEU;i++)land+=cnt[i];`);
R('g',`const F=[...K].map(k=>'CJIEZ'.includes(k)?[.5,.2,.3,0]:k==='T'?[.35,.3,.3,.05]:[.3,.45,.15,.1]);`,`const F=[...K].map(k=>E.n[k][6].slice());`);
R('g',`(1775+Math.floor(months/12))`,`(E.y+Math.floor(months/12))`);
R('g',`function events(){if(months%6===0)save();`,`function events(){if(months%6===0)save();for(const e of E.ev)if(months===e[0]){msg=e[1];mt=Date.now()+6000;for(const d of e[2]){const i=K.indexOf(d[0]);if(i>=0)T[i]=Math.max(5,T[i]+d[1]);}}return;`);
R('g',`localStorage.setItem('d1775v4',`,`localStorage.setItem('d1775e'+ERAI,`);
R('g',`localStorage.getItem('d1775v4')`,`localStorage.getItem('d1775e'+ERAI)`);
R('g',`try{const sv=JSON.parse(`,`{const bk=document.createElement('button');bk.className='nb';bk.style.background='#555';bk.textContent="⬅ Davrni o'zgartirish";bk.onclick=()=>{try{localStorage.removeItem('eraSel');}catch(e){}location.reload();};menu.appendChild(bk);}
try{const sv=JSON.parse(`);
R('t',`(1775+Math.floor(months/12))`,`(E.y+Math.floor(months/12))`);
for(const k in FL)fs.writeFileSync(FL[k],S[k]);console.log('TAYYOR');
