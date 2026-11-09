(function(){
const Y=()=>E.y;
const FD=[
[/Buyuk Britaniya|Britaniya imperiyasi/,'U'],[/Angliya|Anglo|Mersiya/,'X:#fff,#c8102e'],
[/Fransiya/,()=>Y()>=1790?'V:#0055a4,#fff,#ef4135':'C:#1d3f94,#f2c200'],[/Franklar|Karolinglar|Merovinglar/,'C:#1d3f94,#f2c200'],
[/Ispaniya|Kastiliya|Leon|Aragon/,()=>Y()>=1785?'H:#aa151b,#f1bf00*2,#aa151b':'S:#fff,#c8102e'],
[/Portugaliya/,()=>Y()>=1830?'V:#046a38*2,#da291c*3':'X:#fff,#003399'],
[/SSSR/,'T:#cc0000,#ffdd00'],[/Rossiya imperiyasi/,()=>Y()>=1900?'H:#000,#fc0,#fff':'H:#fff,#0039a6,#d52b1e'],[/Rossiya/,'H:#fff,#0039a6,#d52b1e'],
[/Moskva|Rus knyazliklari|Kiyev|Podshohlig/,'C:#b71c1c,#f2c200'],
[/Uchinchi Reyx|Germaniya imperiyasi/,'H:#000,#fff,#d00'],[/Germaniya/,'H:#000,#dd0000,#ffce00'],[/Prussiya/,'H:#000,#fff'],
[/Avstriya-Vengriya/,'H:#000,#fc0'],[/Avstriya|Gabsburg/,'H:#ed2939,#fff,#ed2939'],[/Muqaddas Rim/,'C:#fcd116,#000'],
[/Usmon|Turkiya/,'M:#e30a17,#fff'],[/Mamluk|Ayyubiy/,'H:#f1c40f'],[/Fotimiy/,'H:#1f8a3b'],[/Abbosiy|G'aznaviy/,'H:#1a1a1a'],[/Umaviy|Kordova/,'H:#f4f4f4'],[/Arab xalifaligi/,'H:#1f8a3b'],
[/Xitoy \(Gomindan\)/,'T:#de2910,#fff'],[/^Xitoy$/,()=>Y()>=2000?'T:#de2910,#ffde00':'H:#de2910,#ffde00,#1e5aa8,#fff,#111'],
[/Sin \(Xitoy\)|Sin imperiyasi|Ching/,'C:#f2c200,#1d4fa3'],[/Min |Szin|Xan imperiyasi|Sun imperiyasi|Tan imperiyasi|Song imperiyasi|Lyao|Yuan/,'C:#c8102e,#f2c200'],
[/Yaponiya|Yamato|Nara|Xeyan|Kamakura|Tokugava/,'C:#fff,#bc002d'],[/^Hindiston$/,'H:#ff9933,#fff,#138808'],
[/Mugal|Marata|Sikx|Dehli|Lodiy|Pala|Pratixara|Rashtrakuta|Xarsha|Chola|Satavaxana|Vijayanagara|Xoysala/,'H:#ff9933'],
[/Eron|Safaviy|Qojor/,'H:#239f40,#fff,#da0000'],[/AQSh|13 koloniya/,'A'],[/Italiya/,'V:#009246,#fff,#ce2b37'],
[/Daniya|Skandinaviya|Kalmar/,'N:#c8102e,#fff'],[/Shvetsiya/,'N:#006aa7,#fecc00'],[/Finlyandiya/,'N:#fff,#003580'],
[/Polsha/,'H:#fff,#dc143c'],[/Vengriya/,'H:#ce2939,#fff,#477050'],[/Ruminiya/,'V:#002b7f,#fcd116,#ce1126'],[/Bolgar/,'H:#fff,#00966e,#d62612'],
[/Yugoslaviya/,'H:#0c4076,#fff,#c6363c'],[/Serbiya/,'H:#c6363c,#0c4076,#fff'],[/Belgiya/,'V:#000,#fae042,#ed2939'],
[/Niderlandiya/,()=>Y()>=1800?'H:#ae1c28,#fff,#21468b':'H:#ff7f00,#fff,#21468b'],[/Braziliya/,'B'],[/Kanada/,'V:#d52b1e,#fff*2,#d52b1e'],[/Avstraliya/,'U'],
[/Indoneziya/,'H:#ce1126,#fff'],[/Pokiston/,'M:#01411c,#fff'],[/Misr/,'H:#ce1126,#fff,#000'],[/Saudiya/,'H:#006c35'],[/Ukraina/,'H:#0057b8,#ffd700'],
[/Janubiy Koreya/,'C:#fff,#cd2e3a'],[/Shimoliy Koreya/,'H:#024fa2,#ed1c27*3,#024fa2'],[/O'zbekiston/,'Z'],[/Marokash/,'C:#c1272d,#006233'],
[/Efiopiya/,'H:#078930,#fcdd09,#da121a'],[/Tevton/,'X:#fff,#000'],[/Vizantiya/,'C:#7b2d8b,#f1c40f'],[/Rim imperiyasi/,'C:#a50000,#f2c200'],[/Tibet/,'C:#fff,#0a5ea8'],
[/Oltin O'rda|Mo'g'ullar|Ilxon|Chig'atoy|Turk xoqonligi|Uyg/,'C:#1d6fb8,#fff']];
const FC={};
function flagSpec(i){if(i>=NEU)return null;const k=i+':'+Y();if(k in FC)return FC[k];const nm=N[K[i]][0];let sp=null;for(const f of FD)if(f[0].test(nm)){sp=typeof f[1]==='function'?f[1]():f[1];break;}FC[k]=sp;return sp;}
function stripes(g,x,y,w,h,c,v){const ws=c.map(s=>{const p=s.split('*');return[p[0],p[1]?+p[1]:1];}),tot=ws.reduce((a,b)=>a+b[1],0);let o=0;
 for(const q of ws){g.fillStyle=q[0];if(v)g.fillRect(x+w*o/tot,y,w*q[1]/tot+.6,h);else g.fillRect(x,y+h*o/tot,w,h*q[1]/tot+.6);o+=q[1];}}
function star5(g,px,py,r,col){g.fillStyle=col;g.beginPath();for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5,rr=i%2?r*.4:r;g.lineTo(px+Math.cos(a)*rr,py+Math.sin(a)*rr);}g.closePath();g.fill();}
function drawSpec(g,x,y,w,h,sp){const p=sp.split(':'),t=p[0],c=p[1]?p[1].split(','):[],mx=x+w/2,my=y+h/2;
 if(t==='H')stripes(g,x,y,w,h,c,false);else if(t==='V')stripes(g,x,y,w,h,c,true);
 else if(t==='N'){g.fillStyle=c[0];g.fillRect(x,y,w,h);g.fillStyle=c[1];g.fillRect(x+w*.3,y,w*.16,h);g.fillRect(x,y+h*.42,w,h*.16);}
 else if(t==='X'){g.fillStyle=c[0];g.fillRect(x,y,w,h);g.fillStyle=c[1];g.fillRect(mx-w*.09,y,w*.18,h);g.fillRect(x,my-h*.11,w,h*.22);}
 else if(t==='S'){g.fillStyle=c[0];g.fillRect(x,y,w,h);g.strokeStyle=c[1];g.lineWidth=Math.max(2,h*.2);g.beginPath();g.moveTo(x,y);g.lineTo(x+w,y+h);g.moveTo(x+w,y);g.lineTo(x,y+h);g.stroke();}
 else if(t==='C'){g.fillStyle=c[0];g.fillRect(x,y,w,h);g.fillStyle=c[1];g.beginPath();g.arc(mx,my,Math.min(w,h)*.3,0,6.3);g.fill();}
 else if(t==='M'){g.fillStyle=c[0];g.fillRect(x,y,w,h);const r=h*.3,c2=mx-w*.06;g.fillStyle=c[1];g.beginPath();g.arc(c2,my,r,0,6.3);g.fill();g.fillStyle=c[0];g.beginPath();g.arc(c2+r*.35,my,r*.8,0,6.3);g.fill();star5(g,mx+w*.14,my,h*.15,c[1]);}
 else if(t==='T'){g.fillStyle=c[0];g.fillRect(x,y,w,h);star5(g,x+w*.24,y+h*.3,h*.24,c[1]);}
 else if(t==='U'){g.fillStyle='#012169';g.fillRect(x,y,w,h);g.strokeStyle='#fff';g.lineWidth=h*.2;g.beginPath();g.moveTo(x,y);g.lineTo(x+w,y+h);g.moveTo(x+w,y);g.lineTo(x,y+h);g.stroke();g.strokeStyle='#c8102e';g.lineWidth=h*.08;g.stroke();
  g.fillStyle='#fff';g.fillRect(mx-w*.1,y,w*.2,h);g.fillRect(x,my-h*.17,w,h*.34);g.fillStyle='#c8102e';g.fillRect(mx-w*.055,y,w*.11,h);g.fillRect(x,my-h*.1,w,h*.2);}
 else if(t==='A'){for(let k=0;k<13;k++){g.fillStyle=k%2?'#fff':'#b22234';g.fillRect(x,y+h*k/13,w,h/13+.5);}g.fillStyle='#3c3b6e';g.fillRect(x,y,w*.42,h*.54);g.fillStyle='#fff';for(let a=0;a<4;a++)for(let b=0;b<3;b++){g.beginPath();g.arc(x+w*(.07+a*.09),y+h*(.12+b*.15),Math.max(.6,h*.035),0,6.3);g.fill();}}
 else if(t==='Z'){stripes(g,x,y,w,h,['#0099b5*30','#ce1126*3','#fff*34','#ce1126*3','#1eb53a*30'],false);g.fillStyle='#fff';g.beginPath();g.arc(x+w*.14,y+h*.15,h*.09,0,6.3);g.fill();g.fillStyle='#0099b5';g.beginPath();g.arc(x+w*.14+h*.035,y+h*.15,h*.075,0,6.3);g.fill();g.fillStyle='#fff';for(let k=0;k<3;k++){g.beginPath();g.arc(x+w*(.27+k*.07),y+h*(.09+(k%2)*.07),Math.max(.5,h*.02),0,6.3);g.fill();}}
 else if(t==='B'){g.fillStyle='#009c3b';g.fillRect(x,y,w,h);g.fillStyle='#ffdf00';g.beginPath();g.moveTo(mx,y+h*.12);g.lineTo(x+w*.9,my);g.lineTo(mx,y+h*.88);g.lineTo(x+w*.1,my);g.closePath();g.fill();g.fillStyle='#002776';g.beginPath();g.arc(mx,my,h*.22,0,6.3);g.fill();}}
function paintFlag(g,x,y,w,h,i){const sp=flagSpec(i);g.save();g.beginPath();g.rect(x,y,w,h);g.clip();
 if(sp)drawSpec(g,x,y,w,h,sp);else{g.fillStyle=COL[i]||'#777';g.fillRect(x,y,w,h);}
 g.restore();g.strokeStyle='rgba(255,255,255,.9)';g.lineWidth=1;g.strokeRect(x+.5,y+.5,w-1,h-1);return !!sp;}
flag=function(g,x,y,i,w,h){g.strokeStyle='#432';g.lineWidth=2;g.beginPath();g.moveTo(x,y);g.lineTo(x,y-h-4);g.stroke();
 const real=paintFlag(g,x+1,y-h-4,w,h,i);
 if(!real&&w>=14){g.font=(h*.75)+'px sans-serif';g.textAlign='center';g.textBaseline='middle';g.fillStyle='#fff';g.fillText(emb(i),x+1+w/2,y-h/2-4);}
 g.textAlign='center';g.textBaseline='middle';};
window.flagDisc=function(g,x,y,R,i){const sp=flagSpec(i);if(!sp)return false;g.save();g.beginPath();g.arc(x,y,R-1,0,6.3);g.clip();drawSpec(g,x-R,y-R,R*2,R*2,sp);g.restore();return true;};
})();
