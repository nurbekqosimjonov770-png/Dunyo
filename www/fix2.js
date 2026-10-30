let mAmt=100;
market=function(){
 const bS=q=>Math.ceil(q*10/6),sS=q=>Math.floor(q*1.4),bO=q=>Math.ceil(q*2.5),sO=q=>Math.floor(q*1.3),n=mAmt;
 showPanel('💱 Bozor | 💰'+Math.floor(gold)+' 🥈'+Math.floor(silv)+' 🛢'+Math.floor(oil));
 [10,50,100,200,500].forEach(a=>pbtn((a===mAmt?'✅ ':'')+a,()=>{mAmt=a;market();}));
 const deal=(t,ok,f)=>pbtn(t,()=>{if(!ok()){note('Resurs yetmaydi');return;}f();if(typeof sfx==='function')sfx('coin');market();hud();});
 deal('🥈 +'+n+' ('+bS(n)+'💰)',()=>gold>=bS(n),()=>{gold-=bS(n);silv+=n;});
 deal('🛢 +'+n+' ('+bO(n)+'💰)',()=>gold>=bO(n),()=>{gold-=bO(n);oil+=n;});
 deal('🥈 '+n+' → '+sS(n)+'💰',()=>silv>=n,()=>{silv-=n;gold+=sS(n);});
 deal('🛢 '+n+' → '+sO(n)+'💰',()=>oil>=n,()=>{oil-=n;gold+=sO(n);});
 pbtn('✖',()=>{pn.style.display='none';});};
const PASS=2,MS=1<<PASS,w3=W*MS,h3=H*MS;
oc.width=w3;oc.height=h3;
const BUF=[];for(let k=1;k<=PASS;k++)BUF.push(new Uint8Array(W*H*(1<<(2*k))));
const BDR=new Uint8Array(w3*h3);
function sc2(s,d,w,h){const w2=w*2;
 for(let y=0;y<h;y++){const yu=(y>0?y-1:0)*w,yd=(y<h-1?y+1:h-1)*w,yy=y*w;
  for(let x=0;x<w;x++){const q=s[yy+x],u=s[yu+x],dn=s[yd+x],l=s[yy+(x>0?x-1:0)],r=s[yy+(x<w-1?x+1:w-1)];
   let p1=q,p2=q,p3=q,p4=q;
   if(l===u&&l!==dn&&u!==r)p1=u;
   if(u===r&&u!==l&&r!==dn)p2=r;
   if(dn===l&&dn!==r&&l!==u)p3=l;
   if(r===dn&&r!==u&&dn!==l)p4=dn;
   const o=y*2*w2+x*2;d[o]=p1;d[o+1]=p2;d[o+w2]=p3;d[o+w2+1]=p4;}}}
const rgb=h=>{let s=h.slice(1);if(s.length===3)s=s[0]+s[0]+s[1]+s[1]+s[2]+s[2];return[parseInt(s.slice(0,2),16),parseInt(s.slice(2,4),16),parseInt(s.slice(4,6),16)];};
const pk=(c,f)=>(0xFF000000|(((c[2]*f)|0)<<16)|(((c[1]*f)|0)<<8)|((c[0]*f)|0));
const RG2=COL.map(rgb),PX=RG2.map(c=>pk(c,1)),PXD=RG2.map(c=>pk(c,.35)),PXC=RG2.map(c=>pk(c,.7));
const IMG=og.createImageData(w3,h3),U32=new Uint32Array(IMG.data.buffer);
paint=function(){let s=co,w=W,h=H;for(let k=0;k<PASS;k++){sc2(s,BUF[k],w,h);s=BUF[k];w*=2;h*=2;}
 const a=s;BDR.fill(0);
 for(let y=0;y<h;y++){const row=y*w;for(let x=0;x<w;x++){const i=row+x,o=a[i],r=x<w-1?a[i+1]:o,d=y<h-1?a[i+w]:o;
  if(o===SEA){if(r!==SEA)BDR[i+1]|=2;if(d!==SEA)BDR[i+w]|=2;}
  else{if(r!==o){if(r===SEA)BDR[i]|=2;else{BDR[i]|=1;BDR[i+1]|=1;}}if(d!==o){if(d===SEA)BDR[i]|=2;else{BDR[i]|=1;BDR[i+w]|=1;}}}}}
 for(let i=0,n=w*h;i<n;i++){const o=a[i];if(o===SEA){U32[i]=0;continue;}const b=BDR[i];U32[i]=b&1?PXD[o]:b&2?PXC[o]:PX[o];}
 og.putImageData(IMG,0,0);recount();labels();};
paint();draw();
