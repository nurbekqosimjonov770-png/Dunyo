const NEWCAP=1,QS=4,QW=W*QS,QH=H*QS;
oc.width=QW;oc.height=QH;
const QA=new Uint8Array(W*H*4),QB=new Uint8Array(W*H*16),QD=new Uint8Array(QW*QH);
function scx2(s,d,w,h){const w2=w*2;
 for(let y=0;y<h;y++){const yu=(y>0?y-1:0)*w,yd=(y<h-1?y+1:h-1)*w,yy=y*w;
  for(let x=0;x<w;x++){const q=s[yy+x],u=s[yu+x],dn=s[yd+x],l=s[yy+(x>0?x-1:0)],r=s[yy+(x<w-1?x+1:w-1)];
   let p1=q,p2=q,p3=q,p4=q;
   if(l===u&&l!==dn&&u!==r)p1=u;
   if(u===r&&u!==l&&r!==dn)p2=r;
   if(dn===l&&dn!==r&&l!==u)p3=l;
   if(r===dn&&r!==u&&dn!==l)p4=dn;
   const o=y*2*w2+x*2;d[o]=p1;d[o+1]=p2;d[o+w2]=p3;d[o+w2+1]=p4;}}}
function hsh(x,y){let h=(x*374761393+y*668265263)|0;h=(h^(h>>>13))*1274126177|0;return((h^(h>>>16))>>>0)/4294967295;}
function vn(x,y){const xi=Math.floor(x),yi=Math.floor(y),xf=x-xi,yf=y-yi,u=xf*xf*(3-2*xf),v=yf*yf*(3-2*yf);const a=hsh(xi,yi),b=hsh(xi+1,yi),c=hsh(xi,yi+1),d=hsh(xi+1,yi+1);return a+(b-a)*u+(c-a)*v+(a-b-c+d)*u*v;}
function fbm(x,y){return vn(x,y)*.5+vn(x*2.1,y*2.1)*.25+vn(x*4.3,y*4.3)*.125+vn(x*8.7,y*8.7)*.0625;}
const RGS=[
[1,1.2,[6,45.5,8,46,11,46.5,14,46.7,16,47.3]],[.9,.7,[-2,43,0,42.7,3,42.4]],[.7,1,[17,49,20,49.3,24,48.5,25.5,46,23,45.5]],
[1,1,[37,44,42,43.3,47,42,49,41]],[.55,1,[59,51,59.5,56,60,60,61,65,65,68]],[1.4,1.8,[73,35,78,32,84,28.5,90,27.7,96,28.5]],
[.55,6,[88,33.5]],[1.1,1.5,[68,36,72,37,75,38.5]],[1,1.2,[70,41,76,42,84,43.5,90,43]],[.8,1.2,[86,50,92,50,98,49.5]],
[.8,1,[46,35,49,32,52,29,56,27]],[.8,1,[30,37,35,37.5,40,38]],[.8,.9,[-8,31,-4,33,0,34.5,5,35.5,9,36]],[.8,3,[38,9]],
[.6,2,[35,-3]],[.6,1,[28,-29,30,-27]],[1.1,2.2,[-130,60,-122,52,-114,48,-109,42,-106,36,-104,32]],[.8,1.5,[-105,28,-102,22,-98,18]],
[1.3,1.2,[-72,-55,-70,-40,-70,-30,-70,-20,-75,-10,-78,0,-76,8]],[.5,1,[-84,34,-80,38,-76,41,-72,44]],[.7,1.2,[6,60,10,63,14,66,19,68]],
[.5,1,[-5,57]],[.6,1,[14,45,19,43,21,41]],[.6,.6,[9,44.5,12,43,15,41]],[.35,3,[-4,40]],[.4,5,[55,33]],[.5,1,[150,-37,152,-27,146,-17]],
[.6,2,[100,52]],[.5,3,[130,65]],[.6,1,[137,36]],[.4,1,[128,38]],[.6,.5,[121,24]],[.4,1,[40,22,43,17]],[.5,1,[44,15]],[.4,1,[47,-19]],[.7,1.5,[140,-5]]];
const RGN=RGS.map(r=>{const p=r[2];let x0=1e9,x1=-1e9,y0=1e9,y1=-1e9;for(let k=0;k<p.length;k+=2){x0=Math.min(x0,p[k]);x1=Math.max(x1,p[k]);y0=Math.min(y0,p[k+1]);y1=Math.max(y1,p[k+1]);}const m=3*r[1];return{h:r[0],s:r[1],p,x0:x0-m,x1:x1+m,y0:y0-m,y1:y1+m};});
function elev(lo,la){let z=0;for(const r of RGN){if(lo<r.x0||lo>r.x1||la<r.y0||la>r.y1)continue;const p=r.p;let d2=1e9;
  if(p.length===2)d2=(lo-p[0])**2+(la-p[1])**2;
  else for(let k=0;k<p.length-2;k+=2){const ax=p[k],ay=p[k+1],vx=p[k+2]-ax,vy=p[k+3]-ay,t=Math.max(0,Math.min(1,((lo-ax)*vx+(la-ay)*vy)/(vx*vx+vy*vy||1))),dx=lo-(ax+vx*t),dy=la-(ay+vy*t),dd=dx*dx+dy*dy;if(dd<d2)d2=dd;}
  z+=r.h*Math.exp(-d2/(2*r.s*r.s));}return z;}
const LUM=new Uint8Array(QW*QH),TNT=new Uint8Array(QW*QH),TW=new Uint8Array(QW*QH),SEAC=new Uint32Array(QW*QH);
const DESr=[[10,23.5,26,7.5],[46,23,11,7],[56,33,5,3],[62,41,7,4],[105,43,13,4.5],[84,39.5,6,2.5],[71,27.5,3.5,3],[133,-25,16,7],[20,-23,7,6],[-69.5,-23,1.5,5],[-112,33,6,5],[-106,28,5,4],[46,6,3,6]];
const TROr=[[-62,-4,13,8],[22,-1,9,6],[101,15,7,8],[113,-1,16,6],[-84,10,6,4],[-6,6,8,2.5]];
const STPr=[[65,48,35,5],[-100,41,10,8],[18,8,25,4],[30,-12,14,5],[-60,-14,12,6]];
const gw=(lo,la,L)=>{let m=0;for(const e of L){const dx=(lo-e[0])/e[2],dy=(la-e[1])/e[3],v=Math.exp(-(dx*dx+dy*dy)*1.3);if(v>m)m=v;}return m;};
const cl=(v,a,b)=>v<a?a:v>b?b:v;
const hexc=h=>{let s=h.slice(1);if(s.length===3)s=s[0]+s[0]+s[1]+s[1]+s[2]+s[2];return[parseInt(s.slice(0,2),16),parseInt(s.slice(2,4),16),parseInt(s.slice(4,6),16)];};
const NRG=COL.map(hexc),TN=[[0,0,0],[245,248,252],[125,110,95],[214,190,130],[55,105,60],[30,95,50],[165,170,95]];
const IMG2=og.createImageData(QW,QH),V32=new Uint32Array(IMG2.data.buffer);
const _pOld=paint;
paint=function(){if(!TOK){_pOld();return;}
 scx2(co,QA,W,H);scx2(QA,QB,W*2,H*2);const a=QB;QD.fill(0);
 for(let y=0;y<QH;y++){const row=y*QW;for(let x=0;x<QW;x++){const i=row+x,o=a[i],r=x<QW-1?a[i+1]:o,d=y<QH-1?a[i+QW]:o;
  if(o===SEA){if(r!==SEA)QD[i+1]|=2;if(d!==SEA)QD[i+QW]|=2;}
  else{if(r!==o){if(r===SEA)QD[i]|=2;else QD[i]|=1;}if(d!==o){if(d===SEA)QD[i]|=2;else QD[i]|=1;}}}}
 for(let i=0,n=QW*QH;i<n;i++){const o=a[i];if(o===SEA){V32[i]=SEAC[i];continue;}
  const nc=NRG[o],w2=TW[i]/255,tc=TN[TNT[i]],b=QD[i];let m=LUM[i]/100;if(b&1)m*=.4;else if(b&2)m*=.72;const k=1-w2;
  const R=(nc[0]*k+tc[0]*w2)*m,G=(nc[1]*k+tc[1]*w2)*m,Bc=(nc[2]*k+tc[2]*w2)*m;
  V32[i]=0xFF000000|((Bc>255?255:Bc)<<16)|((G>255?255:G)<<8)|(R>255?255:R);}
 og.putImageData(IMG2,0,0);recount();labels();};
function buildTerrain(){const Z=new Float32Array(QW*QH);
 for(let py=0;py<QH;py++){const la=TOP-(py+.5)/QS;for(let px=0;px<QW;px++){const lo=-180+(px+.5)/QS;
  Z[py*QW+px]=elev(lo,la)+(fbm(lo*.7+50,la*.7)/.9375-.5)*.22+(fbm(px*.09,py*.09)/.9375-.5)*.14;}}
 for(let py=0;py<QH;py++){const la=TOP-(py+.5)/QS,cy=(py/QS)|0,pu=(py>0?py-1:0)*QW,pd=(py<QH-1?py+1:py)*QW;
  for(let px=0;px<QW;px++){const i=py*QW+px,pl=px>0?px-1:0,pr=px<QW-1?px+1:px,z=Z[i];
   const f=1+(Z[pu+pl]-Z[pd+pr])*2.4+z*.1;LUM[i]=cl(f*100,50,145);
   if(co[cy*W+((px/QS)|0)]===SEA)continue;
   const lo=-180+(px+.5)/QS,n=fbm(lo*.3,la*.3)/.9375;let tn=0,tw=0;
   const ws=Math.max(cl((z-1)*3,0,1),cl((la-64)/8,0,1)*.9);
   if(ws>.15){tn=1;tw=Math.min(.8,ws*.8);}
   else{const wr=cl((z-.45)*1.8,0,1);
    if(wr>.1){tn=2;tw=wr*.7;}
    else{const wd=gw(lo,la,DESr)*(.75+.5*n);
     if(wd>.2){tn=3;tw=Math.min(.55,wd*.6);}
     else{const wt=gw(lo,la,TROr),wp=gw(lo,la,STPr);let wf=0;if(la>54&&la<66)wf=.5;else if(la>38&&la<=54)wf=.35;wf*=(.6+.8*n);
      if(wt>.35&&wt>=wp){tn=5;tw=Math.min(.5,wt*.55);}
      else if(wp>.3&&wp>wf){tn=6;tw=Math.min(.4,wp*.45);}
      else if(wf>.2){tn=4;tw=Math.min(.45,wf*.7);}}}}
   TNT[i]=tn;TW[i]=Math.round(tw*255);}}
 const DL=new Uint8Array(W*H).fill(9),q=[];for(let c=0;c<W*H;c++)if(co[c]!==SEA){DL[c]=0;q.push(c);}
 for(let h=0;h<q.length;h++){const c=q[h],x=c%W,y=(c/W)|0,d=DL[c]+1;if(d>7)continue;
  if(x>0&&DL[c-1]>d){DL[c-1]=d;q.push(c-1);}if(x<W-1&&DL[c+1]>d){DL[c+1]=d;q.push(c+1);}if(y>0&&DL[c-W]>d){DL[c-W]=d;q.push(c-W);}if(y<H-1&&DL[c+W]>d){DL[c+W]=d;q.push(c+W);}}
 for(let py=0;py<QH;py++){const fy=cl((py+.5)/QS-.5,0,H-1.001),y0=fy|0,ty=fy-y0;
  for(let px=0;px<QW;px++){const fx=cl((px+.5)/QS-.5,0,W-1.001),x0=fx|0,tx=fx-x0,b=y0*W+x0;
   const dd=(DL[b]*(1-tx)+DL[b+1]*tx)*(1-ty)+(DL[b+W]*(1-tx)+DL[b+W+1]*tx)*ty,t=Math.min(1,dd/5),nz=(hsh(px,py)-.5)*7+(vn(px*.05,py*.05)-.5)*14;
   const R=cl(47*(1-t)+11*t+nz,0,255)|0,G=cl(111*(1-t)+42*t+nz,0,255)|0,Bl=cl(153*(1-t)+69*t+nz,0,255)|0;
   SEAC[py*QW+px]=(0xFF000000|(Bl<<16)|(G<<8)|R);}}}
let TOK=false;try{buildTerrain();TOK=true;}catch(e){}
const CITIES=[
['Rim',12.5,41.9,0,1],['Afina',23.7,38,0,0],['Konstantinopol',29,41,0,1,'Istanbul',1453],['Iskandariya',29.9,31.2,0,0],['Qohira',31.2,30,969,1],['Quddus',35.2,31.8,0,0],['Damashq',36.3,33.5,0,0],
["Bag'dod",44.4,33.3,762,1],['Tehron',51.4,35.7,1790,1],['Isfahon',51.7,32.7,0,0],['Tabriz',46.3,38.1,0,0],['Hirot',62.2,34.3,0,0],['Kobul',69.2,34.5,0,0],['Samarqand',67,39.65,0,1],['Buxoro',64.4,39.8,0,1],
['Toshkent',69.2,41.3,0,1],['Urganch',60.6,41.5,0,0],['Dehli',77.2,28.6,0,1],['Lohur',74.3,31.5,0,0],['Mumbay',72.9,19,1600,0],['Kalkutta',88.4,22.6,1690,0],['Pekin',116.4,39.9,0,1],["Si'an",108.9,34.3,0,0],
['Nankin',118.8,32,0,0],['Seul',127,37.6,1392,0],['Kioto',135.8,35,794,0],['Edo',139.7,35.7,1100,1,'Tokio',1868],['Xanoy',105.8,21,1010,0],['Bangkok',100.5,13.8,1782,0],['Angkor',103.9,13.4,800,0],
['Jakarta',106.8,-6.2,1619,0],['Manila',121,14.6,1571,0],['Karakorum',102.8,47.2,1220,0],['Moskva',37.6,55.75,1147,1],['Kiyev',30.5,50.5,0,1],['Novgorod',31.3,58.5,0,0],['Sankt-Peterburg',30.3,59.9,1703,1],
['Yekaterinburg',60.6,56.8,1723,0],['Varshava',21,52.2,1300,0],['Krakov',19.9,50.1,0,0],['Praga',14.4,50.1,0,0],['Vena',16.4,48.2,0,1],['Budapesht',19,47.5,1000,0],['Berlin',13.4,52.5,1237,1],['Parij',2.3,48.9,0,1],
['London',-0.1,51.5,0,1],['Madrid',-3.7,40.4,900,1],['Lissabon',-9.1,38.7,0,0],['Barselona',2.2,41.4,0,0],['Kordova',-4.8,37.9,0,0],['Milan',9.2,45.5,0,0],['Venetsiya',12.3,45.4,0,0],['Neapol',14.3,40.9,0,0],
['Amsterdam',4.9,52.4,1275,0],['Kopengagen',12.6,55.7,1167,0],['Stokgolm',18.1,59.3,1252,0],['Oslo',10.7,59.9,1048,0],['Sofiya',23.3,42.7,0,0],['Belgrad',20.5,44.8,0,0],['Buxarest',26.1,44.4,1459,0],['Riga',24.1,56.9,1201,0],
['Vilnyus',25.3,54.7,1323,0],['Tunis',10.2,36.8,0,0],['Fes',-5,34,808,0],['Marrakesh',-8,31.6,1070,0],['Jazoir',3,36.8,0,0],['Tripoli',13.2,32.9,0,0],['Tombuktu',-3,16.8,1100,0],['Kano',8.5,12,1000,0],
['Aksum',38.7,14.1,0,0],['Addis-Abeba',38.7,9,1886,0],['Nayrobi',36.8,-1.3,1899,0],['Keyptaun',18.4,-33.9,1652,0],['Makka',39.8,21.4,0,0],['Madina',39.6,24.5,0,0],['Ar-Riyod',46.7,24.7,1744,0],['Boku',49.9,40.4,0,0],
['Tbilisi',44.8,41.7,0,0],['Ankara',32.9,39.9,0,0],['Konya',32.5,37.9,0,0],['Vashington',-77,38.9,1790,1],['Nyu-York',-74,40.7,1624,1],['Kvebek',-71.2,46.8,1608,0],['Ottava',-75.7,45.4,1857,0],
['Tenochtitlan',-99.1,19.4,1325,1,'Mexiko',1521],['Gavana',-82.4,23.1,1519,0],['Kusko',-72,-13.5,1200,1],['Lima',-77,-12,1535,0],['Bogota',-74,4.7,1538,0],['Buenos-Ayres',-58.4,-34.6,1536,0],['Rio-de-Janeyro',-43.2,-22.9,1565,0],['Sidney',151.2,-33.9,1788,0]];
const SEAS=[['ATLANTIKA OKEANI',-35,35,6],['TINCH OKEANI',-155,5,6],['TINCH OKEANI',165,20,6],['HIND OKEANI',80,-18,6],['SHIMOLIY MUZ OKEANI',-20,77,4],["O'rta dengiz",18,34.5,2.4],['Qora dengiz',34,43.3,1.6],['Kaspiy dengizi',51,41.5,1.6],['Shimoliy dengiz',3,56,1.6],['Boltiq dengizi',19.5,58,1.4],['Qizil dengiz',38.5,20,1.4],["Fors ko'rfazi",51.5,27,1.2],['Arabiston dengizi',65,15,2.4],["Bengal ko'rfazi",88,14,2.4],['Janubiy Xitoy dengizi',113,12,2.4],['Yapon dengizi',134,40,1.6],["Biskay ko'rfazi",-4.5,45.5,1.2],["Meksika ko'rfazi",-90,25,2],['Karib dengizi',-75,15,2]];
const cityNm=(ct,yr)=>ct[5]&&yr>=ct[6]?ct[5]:ct[0];
function capNm(i){const yr=E.y+Math.floor(months/12),lo=N[K[i]][2],la=N[K[i]][3];let b=null,bd=25;for(const ct of CITIES){if(yr<ct[3])continue;const d=(ct[1]-lo)**2+(ct[2]-la)**2;if(d<bd){bd=d;b=ct;}}return b;}
function drawSeas(c){if(c>8)return;cx.textAlign='center';cx.textBaseline='middle';cx.globalAlpha=.5;cx.fillStyle='#cfe8ff';
 for(const s of SEAS){const fs=Math.min(30,s[3]*c*1.5);if(fs<9)continue;const x=ox+(s[1]+180)*c,y=oy+(TOP-s[2])*c;if(x<-150||y<-30||x>innerWidth+150||y>innerHeight+30)continue;cx.font='italic '+fs+'px serif';cx.fillText(s[0],x,y);}
 cx.globalAlpha=1;}
function drawCities(c,capSet){if(c<2.2)return;const yr=E.y+Math.floor(months/12);cx.textAlign='left';cx.textBaseline='middle';cx.font='bold '+Math.min(13,Math.max(9,c*1.6))+'px sans-serif';cx.lineWidth=3;cx.strokeStyle='#000c';
 for(const ct of CITIES){if(yr<ct[3]||capSet.has(ct))continue;if(!ct[4]&&c<4)continue;const x=ox+(ct[1]+180)*c,y=oy+(TOP-ct[2])*c;if(x<-80||y<-20||x>innerWidth+80||y>innerHeight+20)continue;
  cx.beginPath();cx.arc(x,y,2.5,0,6.3);cx.fillStyle='#fff';cx.fill();cx.stroke();const nm=cityNm(ct,yr);cx.fillStyle='#fff';cx.strokeText(nm,x+5,y);cx.fillText(nm,x+5,y);}}
function drawCaps(c,capSet){const yr=E.y+Math.floor(months/12);cx.textAlign='center';cx.textBaseline='middle';
 for(let i=0;i<NEU;i++){const cp=CAPC[i];if(cp<0||co[cp]!==i)continue;const x=ox+(cp%W+.5)*c,y=oy+(((cp/W)|0)+.5)*c;if(x<-60||y<-60||x>innerWidth+60||y>innerHeight+60)continue;
  const R=Math.max(11,Math.min(20,c*2.6)),ct=capNm(i);if(ct)capSet.add(ct);
  cx.beginPath();cx.arc(x,y,R,0,6.3);cx.fillStyle=COL[i];cx.fill();cx.lineWidth=i===me?4:3;cx.strokeStyle=i===me?'#fd0':'#fff';cx.stroke();
  if(!(typeof flagDisc==='function'&&flagDisc(cx,x,y,R,i))){cx.font=(R*1.05)+'px sans-serif';cx.fillStyle='#fff';cx.fillText(emb(i),x,y+1);}
  const t=fmt(T[i]);cx.font='bold '+(R*.72)+'px sans-serif';const tw=cx.measureText(t).width+10,ph=R*.9;
  cx.fillStyle='#000c';cx.beginPath();if(cx.roundRect)cx.roundRect(x-tw/2,y+R+1,tw,ph,4);else cx.rect(x-tw/2,y+R+1,tw,ph);cx.fill();cx.fillStyle='#fff';cx.fillText(t,x,y+R+1+ph/2);
  if(c>=2.5){cx.font=(R*.9)+'px sans-serif';cx.fillText('👑',x,y-R-6);}
  if(ct&&c>=1.6){cx.textAlign='left';cx.font='bold '+Math.min(14,Math.max(10,c*1.8))+'px sans-serif';cx.lineWidth=3;cx.strokeStyle='#000c';const nm=cityNm(ct,yr);cx.strokeText(nm,x+R+4,y);cx.fillStyle='#fff';cx.fillText(nm,x+R+4,y);cx.textAlign='center';}
  if(c>=6){cx.font='bold '+(R*.6)+'px sans-serif';cx.lineWidth=3;cx.strokeStyle='#000b';const rn=NM[K[i]][0];cx.strokeText(rn,x,y+R+ph+10);cx.fillStyle='#fd8';cx.fillText(rn,x,y+R+ph+10);}}}
const _dr2=draw;draw=function(){_dr2();const c=c0*sc,cs=new Set();drawSeas(c);drawCaps(c,cs);drawCities(c,cs);};
paint();draw();
