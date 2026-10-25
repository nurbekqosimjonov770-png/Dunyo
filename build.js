const fs=require('fs');
const W=360,H=135,TOP=80,CP=55;
const U='https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json';
const OW={G:'GBR IRL',F:'FRA',S:'ESP MEX GTM HND SLV NIC CRI PAN CUB DOM PRI COL VEN ECU PER BOL CHL ARG URY PRY PHL',P:'PRT BRA AGO MOZ',R:'RUS UKR EST LVA',T:'TUR GRC BGR ROU SRB BIH MKD ALB MNE SYR LBN ISR JOR IRQ EGY LBY TUN DZA',H:'AUT HUN CZE SVK SVN HRV BEL ITA',K:'DEU',N:'NLD IDN ZAF SUR',W:'SWE FIN',C:'CHN MNG TWN KOR PRK',J:'JPN',I:'IND PAK BGD NPL LKA',E:'IRN AFG',Z:'MAR',D:'DNK NOR ISL GRL',L:'POL LTU BLR'};
const MO={};for(const k in OW)OW[k].split(' ').forEach(c=>MO[c]=k);
function owner(iso,lon,lat){
 if(iso==='USA'){if(lat>50)return'R';if(lon>-82)return lat>31?'U':'G';if(lon<-91&&lat<42)return'S';return'-';}
 if(iso==='CAN')return lon>-95?'G':'-';
 return MO[iso]||'-';}
function inRing(r,x,y){let c=false;for(let i=0,j=r.length-1;i<r.length;j=i++){const a=r[i],b=r[j];if((a[1]>y)!==(b[1]>y)&&x<(b[0]-a[0])*(y-a[1])/(b[1]-a[1])+a[0])c=!c;}return c;}
function inPoly(rs,x,y){let c=false;for(const r of rs)if(inRing(r,x,y))c=!c;return c;}
(async()=>{
const gj=await (await fetch(U)).json();
const F=gj.features.map(f=>{const g=f.geometry,ps=g.type==='Polygon'?[g.coordinates]:g.coordinates;
 return{id:f.id,parts:ps.map(p=>{let a=1e9,b=-1e9,c=1e9,d=-1e9;for(const q of p[0]){if(q[0]<a)a=q[0];if(q[0]>b)b=q[0];if(q[1]<c)c=q[1];if(q[1]>d)d=q[1];}return{p,a,b,c,d};})};});
const key=new Array(W*H).fill(null);
for(let y=0;y<H;y++)for(let x=0;x<W;x++){
 const lon=-180+x+.5,lat=TOP-y-.5;
 f:for(let i=0;i<F.length;i++)for(const q of F[i].parts){
  if(lon<q.a||lon>q.b||lat<q.c||lat>q.d)continue;
  if(inPoly(q.p,lon,lat)){key[y*W+x]=owner(F[i].id,lon,lat)+F[i].id;break f;}}}
const comp=new Int32Array(W*H).fill(-1),comps=[];
for(let s=0;s<W*H;s++){if(key[s]===null||comp[s]>=0)continue;
 const id=comps.length,list=[s],o=key[s];comp[s]=id;
 for(let h=0;h<list.length;h++){const c=list[h],x=c%W,y=(c/W)|0;
  for(const d of [[1,0],[-1,0],[0,1],[0,-1]]){const nx=x+d[0],ny=y+d[1];if(nx<0||ny<0||nx>=W||ny>=H)continue;const n=ny*W+nx;if(key[n]===o&&comp[n]<0){comp[n]=id;list.push(n);}}}
 comps.push({o:o[0],iso:o.slice(1),list});}
const grid=new Int16Array(W*H).fill(-1),P=[];
const d2=(c,s)=>((c%W)-s[0])**2+(((c/W)|0)-s[1])**2;
for(const cp of comps){const L=cp.list;if(L.length<2)continue;
 let mx=0,my=0;for(const c of L){mx+=c%W;my+=(c/W)|0;}mx/=L.length;my/=L.length;
 const k=Math.max(1,Math.round(L.length/CP));
 let best=L[0],bd=1e9;for(const c of L){const d=d2(c,[mx,my]);if(d<bd){bd=d;best=c;}}
 const seeds=[[best%W,(best/W)|0]];
 const md=L.map(c=>d2(c,seeds[0]));
 while(seeds.length<k){let bi=0;for(let i=1;i<L.length;i++)if(md[i]>md[bi])bi=i;const c=L[bi],s=[c%W,(c/W)|0];seeds.push(s);for(let i=0;i<L.length;i++){const d=d2(L[i],s);if(d<md[i])md[i]=d;}}
 const base=P.length;seeds.forEach(s=>P.push([cp.o,s[0],s[1],cp.iso]));
 for(const c of L){let bj=0,bv=1e9;for(let j=0;j<seeds.length;j++){const d=d2(c,seeds[j]);if(d<bv){bv=d;bj=j;}}grid[c]=base+bj;}}
const A=P.map(()=>new Set());
for(let y=0;y<H;y++)for(let x=0;x<W;x++){const a=grid[y*W+x];if(a<0)continue;
 for(const d of [[1,0],[0,1],[1,1],[-1,1]]){const nx=x+d[0],ny=y+d[1];if(nx<0||nx>=W||ny>=H)continue;const b=grid[ny*W+nx];if(b>=0&&b!==a){A[a].add(b);A[b].add(a);}}}
P.forEach((p,i)=>{const c=[];P.forEach((q,j)=>{if(j===i||A[i].has(j))return;const d=Math.hypot(p[1]-q[1],p[2]-q[2]);if(d>12)return;
 let sea=false;for(let t=1;t<12;t++){const x=Math.round(p[1]+(q[1]-p[1])*t/12),y=Math.round(p[2]+(q[2]-p[2])*t/12);if(grid[y*W+x]<0){sea=true;break;}}
 if(sea)c.push([d,j]);});
 c.sort((u,v)=>u[0]-v[0]);c.slice(0,2).forEach(e=>{A[i].add(e[1]);A[e[1]].add(i);});});
fs.writeFileSync('www/map.js','const MAP='+JSON.stringify({W,H,g:Array.from(grid),P,A:A.map(s=>[...s])})+';');
console.log('TAYYOR, viloyatlar soni:',P.length);
})().catch(e=>console.log('XATO:',e.message));
