const fs=require('fs');
const U='https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json';
const S=4,QW=1440,QH=540,TOP=80;
(async()=>{
const gj=await (await fetch(U)).json();
const M=new Uint8Array(QW*QH);
for(const f of gj.features){const g=f.geometry,ps=g.type==='Polygon'?[g.coordinates]:g.coordinates;
 for(const rings of ps){const X=new Map();
  for(const r of rings)for(let i=0;i<r.length-1;i++){
   const a=r[i],b=r[i+1];if(Math.abs(a[0]-b[0])>180)continue;
   let x1=(a[0]+180)*S,y1=(TOP-a[1])*S,x2=(b[0]+180)*S,y2=(TOP-b[1])*S;
   if(y1===y2)continue;if(y1>y2){[x1,x2]=[x2,x1];[y1,y2]=[y2,y1];}
   const ya=Math.max(0,Math.ceil(y1-.5)),yb=Math.min(QH-1,Math.ceil(y2-.5)-1);
   for(let y=ya;y<=yb;y++){const x=x1+(y+.5-y1)*(x2-x1)/(y2-y1);let l=X.get(y);if(!l){l=[];X.set(y,l);}l.push(x);}}
  for(const [y,l] of X){l.sort((p,q)=>p-q);for(let k=0;k+1<l.length;k+=2){const xa=Math.max(0,Math.ceil(l[k]-.5)),xb=Math.min(QW,Math.ceil(l[k+1]-.5));for(let x=xa;x<xb;x++)M[y*QW+x]=1;}}}}
const rows=[];
for(let y=0;y<QH;y++){const r=[];let v=0,n=0;for(let x=0;x<QW;x++){const m=M[y*QW+x];if(m===v)n++;else{r.push(n);n=1;v=m;}}r.push(n);rows.push(r);}
fs.writeFileSync('www/hires.js','const HIRES='+JSON.stringify({w:QW,h:QH,rows})+';');
console.log('TAYYOR');
})().catch(e=>console.log('XATO:',e.message));
