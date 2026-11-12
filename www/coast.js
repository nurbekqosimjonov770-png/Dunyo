(function(){
if(typeof HIRES==='undefined'||typeof Path2D==='undefined')return;
const w=HIRES.w,h=HIRES.h,QSk=w/W;
const M=new Uint8Array(w*h);
HIRES.rows.forEach((runs,y)=>{let x=0,v=0;for(const r of runs){if(v)M.fill(1,y*w+x,y*w+x+r);x+=r;v^=1;}});
const g=(i,j)=>i<0||j<0||i>=w||j>=h?0:M[j*w+i];
const SW=w+2,NH=(h+2)*SW,nb1=new Int32Array(NH*2).fill(-1),nb2=new Int32Array(NH*2).fill(-1);
const Hk=(i,j)=>(j+1)*SW+(i+1),Vk=(i,j)=>NH+(j+1)*SW+(i+1);
const con=(u,v)=>{if(nb1[u]<0)nb1[u]=v;else nb2[u]=v;if(nb1[v]<0)nb1[v]=u;else nb2[v]=u;};
for(let j=-1;j<h;j++)for(let i=-1;i<w;i++){
 const a=g(i,j),b=g(i+1,j),cc=g(i+1,j+1),dd=g(i,j+1),k=a|(b<<1)|(cc<<2)|(dd<<3);if(k===0||k===15)continue;
 const T=Hk(i,j),B=Hk(i,j+1),L=Vk(i,j),R=Vk(i+1,j);
 switch(k){case 1:case 14:con(L,T);break;case 2:case 13:con(T,R);break;case 3:case 12:con(L,R);break;case 4:case 11:con(R,B);break;case 6:case 9:con(T,B);break;case 7:case 8:con(L,B);break;case 5:con(L,T);con(R,B);break;case 10:con(T,R);con(L,B);break;}}
const seen=new Uint8Array(NH*2),pt=k=>{if(k<NH){const i=k%SW-1,j=((k/SW)|0)-1;return[i+1,j+.5];}const kk=k-NH,i=kk%SW-1,j=((kk/SW)|0)-1;return[i+.5,j+1];};
function dp(P,a,b,tol,keep){const st=[[a,b]];while(st.length){const e=st.pop(),i=e[0],j=e[1];let md=0,mi=-1;const ax=P[i][0],ay=P[i][1],dx=P[j][0]-ax,dy=P[j][1]-ay,Ln=Math.hypot(dx,dy)||1;
  for(let k=i+1;k<j;k++){const dd=Math.abs((P[k][0]-ax)*dy-(P[k][1]-ay)*dx)/Ln;if(dd>md){md=dd;mi=k;}}
  if(md>tol&&mi>0){keep[mi]=1;st.push([i,mi],[mi,j]);}}}
const LP=new Path2D();let nl=0,np=0;
for(let s=0;s<NH*2;s++){if(nb1[s]<0||seen[s])continue;const ids=[];let prev=-1,cur=s;
 for(let z=0;z<4000000;z++){seen[cur]=1;ids.push(cur);const nx=prev===-1?nb1[cur]:(nb1[cur]===prev?nb2[cur]:nb1[cur]);if(nx<0||nx===s||seen[nx])break;prev=cur;cur=nx;}
 if(ids.length<10)continue;
 const P=ids.map(pt);P.push(P[0]);const n=P.length-1;let f=1,fd=-1;for(let k=1;k<n;k++){const d=(P[k][0]-P[0][0])**2+(P[k][1]-P[0][1])**2;if(d>fd){fd=d;f=k;}}
 const keep=new Uint8Array(n+1);keep[0]=1;keep[f]=1;dp(P,0,f,.6,keep);dp(P,f,n,.6,keep);
 const Q=[];for(let k=0;k<n;k++)if(keep[k])Q.push(P[k]);if(Q.length<4)continue;
 const m=Q.length;LP.moveTo((Q[m-1][0]+Q[0][0])/2,(Q[m-1][1]+Q[0][1])/2);
 for(let k=0;k<m;k++){const a=Q[k],b=Q[(k+1)%m];LP.quadraticCurveTo(a[0],a[1],(a[0]+b[0])/2,(a[1]+b[1])/2);}
 LP.closePath();nl++;np+=m;}
window.drawCoast=function(c){const d=devicePixelRatio||1,k=c/QSk;cx.save();cx.setTransform(d*k,0,0,d*k,d*ox,d*oy);cx.lineJoin='round';cx.lineCap='round';
 cx.lineWidth=Math.max(1.3,Math.min(2.3,c*.11))/k;cx.strokeStyle='rgba(8,24,40,.8)';cx.stroke(LP);cx.restore();};
draw();
})();
