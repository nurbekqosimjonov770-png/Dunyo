const QUAL={1483:{Q:1.2,M:1.2,T:1.05,S:.95},1526:{B:1.45,D:.9,R:1.15,U:.85},1556:{B:1.35,D:1,R:1.1,V:.95},1707:{R:1.25,B:.9,M:1.2,W:1.2},1857:{L:1.4,B:.7,R:1.1,T:1,C:.85},117:{R:1.3,P:.95,Z:1,K:1,S:.95},632:{A:1.35,V:1.05,S:1,T:1.15,F:.9,W:.85,I:1,H:.95,J:1,G:1.1,Y:1.1},780:{B:1.1,U:.95,F:1.25,V:1.05,G:1,T:1.1,I:1.1,Y:1.05,P:.95,R:.95,H:.95,J:1,S:.95,O:.9},1000:{V:1.25,G:1.1,H:1,F:.9,E:.85,D:1.1,K:1.25,L:1,B:1,A:.9,Z:1.3,Q:1,X:1,S:1.1,C:1.2,J:1,O:1.2,R:1,U:1,T:1},1200:{M:1.6,F:1.1,A:1.1,H:1,K:1,V:.9,B:.9,S:1,Y:1.2,X:1.1,G:1,C:1,Z:.95,J:1.1,R:1,U:1,D:1,E:1,T:1},1400:{I:1.5,T:1.3,P:1.1,M:1,O:.95,F:.9,A:1.1,X:1.2,C:1,J:1,L:1,U:1,K:.95,D:1,Z:.9,V:1,E:1,N:1,Q:1,W:1.05},1500:{T:1.3,S:1.35,B:1.2,X:1.2,F:1.05,A:1,H:1.05,L:1.05,M:1.1,Y:1,I:1,Z:.95,V:1,C:1,J:1.05,N:1.05,Q:1.05,E:1,G:1.05,D:1,U:1,P:1.05},1775:{K:1.35,R:1.15,G:1.15,F:1.1,H:1.05,T:.95,U:1,S:.95,P:.95,N:1,W:1.05,C:.95,J:1,I:1,E:1,Z:.95,D:.95,L:.9},1810:{F:1.4,G:1.2,R:1.1,K:1.15,H:1.05,S:.95,P:.95,T:.95,U:.95,C:.9,J:.95,I:1.05,E:.95,Z:.9},1910:{D:1.3,G:1.1,F:1.05,R:.9,H:.9,T:.85,I:.9,U:1,J:1.1,C:.8,Z:1.05,B:.95},1939:{D:1.35,S:1,G:1.1,F:.95,U:1.15,J:1.2,I:.85,C:.85,P:.85,W:1.3,H:.9,R:.9,Y:.9,T:.95},2020:{U:1.35,C:1.15,R:1.1,I:1,G:1.15,F:1.1,D:1.1,J:1.15,T:1.1,E:1,S:.9,K:1.2,N:.95,B:.85,Z:.9,A:1,M:.9,X:1.1,P:1,Y:.85,H:1.05,Q:1.1}};
const hq=(a,b)=>{let h=(a*374761393+b*668265263)|0;h=(h^(h>>>13))*1274126177|0;return((h^(h>>>16))>>>0)/4294967295;};
const QL=[];for(let i=0;i<NEU;i++){const k=K[i],t=QUAL[E.y]&&QUAL[E.y][k];QL[i]=t!=null?t:+(.92+.16*hq(i*7+E.y,k.charCodeAt(0))).toFixed(2);}
const pw=x=>Math.pow(Math.max(1,x),.75);
function barr(i){let n=0;for(const b of B)if(b[1]===1&&co[b[0]]===i)n++;return n;}
function qOf(i){if(i>=NEU)return .9;return QL[i]+(i===me?Math.min(.15,.03*barr(i))+(typeof tb==='number'?.04*tb:0):0);}
function ov(i){if(i>=NEU)return 1;return Math.max(.55,1-.00022*Math.max(0,cnt[i]-500));}
function terr(cell){if(typeof TNT==='undefined'||typeof QW==='undefined')return 1;const x=cell%W,y=(cell/W)|0,t=TNT[(y*4+2)*QW+x*4+2];return t===1||t===2?1.35:t===4||t===5?1.2:1;}
function sup(i,cell){if(i>=NEU)return 1;const cp=CAPC[i];if(cp<0)return 1;return Math.max(.6,1-.003*Math.hypot(cp%W-cell%W,((cp/W)|0)-((cell/W)|0)));}
function effA(a,commit,cell){return pw(commit)*qOf(a)*ov(a)*sup(a,cell);}
function effD(d,Td,cell){if(d>=NEU)return pw(Td)*.9*terr(cell);return pw(Td)*qOf(d)*ov(d)*terr(cell)*1.2*(fortAt(cell,d)?1.5:1);}
function growX(i){const n=cnt[i],cap=100+28*Math.sqrt(n);let g=Math.max(1,.5*Math.sqrt(n));if(n>700)g-=(n-700)*.004;
 if(i===me){if(T[i]<cap)T[i]=Math.min(cap,T[i]+Math.max(.5,g));}
 else{T[i]+=g;if(T[i]>cap)T[i]=Math.max(cap,T[i]*.985);}}
function aiOK(o,q,n,commit,Td){return effA(o,commit,n)>=effD(q,q===NEU?35:Math.max(Td,T[q]*.55),n)*1.15;}
function autoWarX(a,d,n,commit,Td){if(d<NEU)Td=Math.max(Td,T[d]*.55);
 const A=effA(a,commit,n)*(.75+Math.random()*.5),D=effD(d,Td,n)*(.75+Math.random()*.5),adv=(A-D)/(A+D),rA=D/(A+D),rD=A/(A+D);
 T[a]=Math.max(1,T[a]-commit*(.1+.55*rA));if(d<NEU)T[d]=Math.max(5,T[d]-Td*(.1+.55*rD));
 if(adv<=.08)return 0;
 const cap=d<NEU?Math.floor(Math.sqrt(Math.max(8,cnt[d])*.25/2))+1:6+Math.floor(Math.random()*4),fort=d<NEU&&fortAt(n,d);
 return capture(a,d,n,Math.max(1,Math.min(cap,Math.round((2+adv*7)*(fort?.6:1)))));}
const _sb7=startBattle;startBattle=function(o){const c0=o.commit,naval=!!o.naval;
 if(!naval&&o.d<NEU)o.Td=Math.max(o.Td,T[o.d]*.55);
 const t1=o.Td;o.commit=pw(c0);o.Td=pw(t1);_sb7(o);o.commit=c0+(o.allyB||0);o.Td=t1;
 if(!naval&&BT&&BT.U&&TSd){const qa=qOf(o.a)*ov(o.a)*sup(o.a,o.cell),qd=qOf(o.d)*ov(o.d),tr=terr(o.cell)*(o.d<NEU?1.2:1);
  for(const u of BT.U){if(u.t>=4)continue;if(u.s===0)u.hp*=qa;else u.hp*=qd*tr;}
  const sc=(t,q)=>Object.assign({},t,{hp:t.hp.map(x=>x*q),dm:t.dm.map(x=>x*q)});TSd=[sc(TSd[0],qa),sc(TSd[1],qd)];
  toast("⭐ Sifat: siz ×"+qa.toFixed(2)+" | dushman ×"+qd.toFixed(2)+(tr>1.05?" | 🏔 himoyachiga +"+Math.round((tr-1)*100)+"%":""));}};
const _pe7=panelEnemy;panelEnemy=function(){_pe7();if(!tgt||tgt.fleet||tgt.d===undefined||tgt.c==null||!pn.firstChild)return;const d=tgt.d;
 if(typeof allied==='function'&&d<NEU&&allied(me,d))return;
 const commit=Math.floor(T[me]*pct/100),Td=d<NEU?Math.max(T[d]*.55,1):40,r=effA(me,commit,tgt.c)/effD(d,Td,tgt.c);
 pn.firstChild.textContent+=' | ⭐×'+qOf(d).toFixed(2)+' | ⚖ '+(r>=1.6?'sizda ustunlik 🟢':r>=1.05?'ozgina ustunlik 🟡':r>=.75?'teng 🟠':'dushman kuchli 🔴');};
const _po7=panelOwn;panelOwn=function(c){_po7(c);if(pn.firstChild)pn.firstChild.textContent+=' | ⭐×'+(qOf(me)*ov(me)).toFixed(2)+(ov(me)<.95?' (katta hudud: kuch '+Math.round(ov(me)*100)+'%)':'');};
draw();
