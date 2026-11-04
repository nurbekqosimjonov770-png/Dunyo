(function(){
if(typeof HIRES==='undefined'||typeof TOK==='undefined'||!TOK)return;
const w=QW,h=QH,HM=new Uint8Array(w*h);
HIRES.rows.forEach((runs,y)=>{let x=0,v=0;for(const r of runs){if(v)HM.fill(1,y*w+x,y*w+x+r);x+=r;v^=1;}});
const OWN=new Uint8Array(w*h),WX=new Float32Array(w*h),WY=new Float32Array(w*h),SC2=new Uint32Array(w*h),QD2=new Uint8Array(w*h);
for(let py=0;py<h;py++)for(let px=0;px<w;px++){const i=py*w+px;WX[i]=(vn(px*.07,py*.07)-.5)*.5;WY[i]=(vn(px*.07+37,py*.07+11)-.5)*.5;}
const DD=new Uint8Array(w*h).fill(255),Q=new Int32Array(w*h);let qt=0,qh=0;
for(let i=0;i<w*h;i++)if(HM[i]){DD[i]=0;Q[qt++]=i;}
while(qh<qt){const c=Q[qh++],d=DD[c]+1;if(d>24)continue;const x=c%w,y=(c/w)|0;
 if(x>0&&DD[c-1]>d){DD[c-1]=d;Q[qt++]=c-1;}if(x<w-1&&DD[c+1]>d){DD[c+1]=d;Q[qt++]=c+1;}
 if(y>0&&DD[c-w]>d){DD[c-w]=d;Q[qt++]=c-w;}if(y<h-1&&DD[c+w]>d){DD[c+w]=d;Q[qt++]=c+w;}}
for(let py=0;py<h;py++)for(let px=0;px<w;px++){const i=py*w+px;if(HM[i])continue;
 const t=Math.min(1,DD[i]/22),nz=(hsh(px,py)-.5)*7+(vn(px*.05,py*.05)-.5)*14;
 const R=cl(47*(1-t)+11*t+nz,0,255)|0,G=cl(111*(1-t)+42*t+nz,0,255)|0,Bb=cl(153*(1-t)+69*t+nz,0,255)|0;
 SC2[i]=0xFF000000|(Bb<<16)|(G<<8)|R;}
function ownField(){for(let py=0;py<h;py++){const row=py*w;for(let px=0;px<w;px++){const i=row+px;if(!HM[i]){OWN[i]=SEA;continue;}
  let fx=(px+.5)/QS-.5+WX[i],fy=(py+.5)/QS-.5+WY[i];
  if(fx<0)fx=0;else if(fx>W-1.001)fx=W-1.001;if(fy<0)fy=0;else if(fy>H-1.001)fy=H-1.001;
  const x0=fx|0,y0=fy|0,tx=fx-x0,ty=fy-y0,b=y0*W+x0,o00=co[b],o10=co[b+1],o01=co[b+W],o11=co[b+W+1];
  const w00=(1-tx)*(1-ty),w10=tx*(1-ty),w01=(1-tx)*ty,w11=tx*ty;
  let bo=SEA,bw=-1;
  if(o00!==SEA){let s=w00;if(o10===o00)s+=w10;if(o01===o00)s+=w01;if(o11===o00)s+=w11;if(s>bw){bw=s;bo=o00;}}
  if(o10!==SEA&&o10!==o00){let s=w10;if(o01===o10)s+=w01;if(o11===o10)s+=w11;if(s>bw){bw=s;bo=o10;}}
  if(o01!==SEA&&o01!==o00&&o01!==o10){let s=w01;if(o11===o01)s+=w11;if(s>bw){bw=s;bo=o01;}}
  if(o11!==SEA&&o11!==o00&&o11!==o10&&o11!==o01){if(w11>bw){bw=w11;bo=o11;}}
  if(bo===SEA){bo=NEU;let found=false;for(let r=1;r<=3&&!found;r++)for(let dy=-r;dy<=r&&!found;dy++)for(let dx=-r;dx<=r;dx++){const nx=x0+dx,ny=y0+dy;if(nx<0||ny<0||nx>=W||ny>=H)continue;const oo=co[ny*W+nx];if(oo!==SEA){bo=oo;found=true;break;}}}
  OWN[i]=bo;}}}
let lastP=0,pms=0,pend=false;
function doPaint(){const t0=Date.now();recount();ownField();QD2.fill(0);
 for(let y=0;y<h;y++){const row=y*w;for(let x=0;x<w;x++){const i=row+x;if(!HM[i])continue;const o=OWN[i],r=x<w-1?i+1:i,d=y<h-1?i+w:i;
  if(!HM[r])QD2[i]|=2;else if(OWN[r]!==o)QD2[i]|=1;
  if(!HM[d])QD2[i]|=2;else if(OWN[d]!==o)QD2[i]|=1;
  if(x>0&&!HM[i-1])QD2[i]|=2;if(y>0&&!HM[i-w])QD2[i]|=2;}}
 for(let i=0,n=w*h;i<n;i++){if(!HM[i]){V32[i]=SC2[i];continue;}
  const o=OWN[i],nc=NRG[o],w2=TW[i]/255,tc=TN[TNT[i]],b=QD2[i];let m=LUM[i]/100;if(b&1)m*=.4;else if(b&2)m*=.74;const k=1-w2;
  const R=(nc[0]*k+tc[0]*w2)*m,G=(nc[1]*k+tc[1]*w2)*m,Bc=(nc[2]*k+tc[2]*w2)*m;
  V32[i]=0xFF000000|((Bc>255?255:Bc)<<16)|((G>255?255:G)<<8)|(R>255?255:R);}
 og.putImageData(IMG2,0,0);labels();lastP=Date.now();pms=lastP-t0;}
paint=function(){const now=Date.now();if(pms>110&&now-lastP<pms*3){recount();if(!pend){pend=true;setTimeout(()=>{pend=false;doPaint();draw();},pms*3);}return;}doPaint();};
paint();draw();
})();
