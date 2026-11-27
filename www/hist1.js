(function(){
if(typeof E==='undefined'||E.y!==1400||K.indexOf('a')<0)return;
const ix=k=>K.indexOf(k),IT=ix('T'),II=ix('I'),IA=ix('a'),IB=ix('b'),IC=ix('c'),ID=ix('d'),IE=ix('e'),IF=ix('f'),IG=ix('g'),IH=ix('h'),IJ=ix('i');
let HON=true,HD={};
const say=t=>{msg=t;mt=Date.now()+9000;hud();};
const card=(t,b)=>{if(typeof dpCard==='function')dpCard(t,b,[["OK"]]);else say(t+": "+b);};
const lo=c=>c%W-179.5,la=c=>TOP-((c/W)|0)-.5;
function moveCells(f,t,p){let n=0;for(let c=0;c<co.length;c++)if(co[c]===f&&(!p||p(c))){co[c]=t;n++;}if(n)dirty=true;return n;}
function nearestCell(i,lon,lat){const tx=lon+180,ty=TOP-lat;let b=-1,bd=1e9;for(let c=0;c<co.length;c++)if(co[c]===i){const d=((c%W)+.5-tx)**2+(((c/W)|0)+.5-ty)**2;if(d<bd){bd=d;b=c;}}return b;}
function setCap(i){const k=K[i],cp=nearestCell(i,N[k][2],N[k][3]);if(cp>=0)CAPC[i]=cp;return cp;}
function castle(i){const cp=CAPC[i];if(cp>=0&&!B.some(b=>b[0]===cp&&b[1]===0))B.push([cp,0]);}
function rn(k,n,r,g){const i=ix(k);if(i<0)return;N[K[i]][0]=n;if(r)NM[K[i]][0]=r;if(g)NM[K[i]][1]=g;}
function repaint(){if(dirty){paint();dirty=false;}}
const eu=c=>lo(c)<26.2||(lo(c)<29.2&&la(c)>=40.5);
function rnAnkara(){rn('T',"Usmonlilar (Suleymon Chalabi, Edirna)","Shahzoda Suleymon Chalabi");[IA,IB,IC,ID].forEach(i=>{setCap(i);castle(i);});}
function ankara(){const orig=T[IT];
 moveCells(IT,NEU,c=>lo(c)>=18&&lo(c)<23.2&&la(c)>=41.9);
 moveCells(IT,ID,c=>!eu(c)&&lo(c)<29.5&&la(c)<39.6);
 moveCells(IT,IC,c=>!eu(c)&&lo(c)>=31&&la(c)<38.4);
 moveCells(IT,IA,c=>!eu(c)&&lo(c)<32.5);
 moveCells(IT,IB,c=>!eu(c));
 T[IT]=Math.max(5,orig*.3);T[IA]=orig*.14;T[IB]=orig*.14;T[IC]=orig*.08;T[ID]=orig*.06;T[II]+=orig*.12;
 rnAnkara();repaint();
 if(me===IT)card("⚔ Ankara jangi (1402)","Amir Temur Boyazid Yildirimni yengib asirga oldi va Usmonli davlati parchalandi: Anado'lida Iso va Mehmed Chalabi hamda qoraman va Ayd'in beyliklari mustaqil bo'ldi. Siz Suleymon Chalabisiz, Rumeliyani (Edirna) boshqarasiz. Birodarlar o'zaro kurashga tushadi, davlatni qayta birlashtiring!");
 else if(me===II){gold+=400;silv+=60;card("🏆 Ankara jangi: g'alaba!","Amir Temur Boyazid Yildirimni asirga oldi, Usmonli davlati parchalandi (+400💰, +60🥈 o'lja).");}
 else say("⚔ Ankara jangi (1402): Temur Boyazidni yengdi, Usmonli davlati parchalandi!");}
function isaFall(){moveCells(IA,IB,null);T[IB]+=T[IA]*.5;T[IA]=0;rn('b',"Mehmed Chalabi (Bursa va Amasya)");repaint();say("⚔ 1403: Mehmed Chalabi Iso Chalabini yengib Bursani oldi");}
function rnTemur(){N.I[2]=62.2;N.I[3]=34.35;rn('I',"Temuriylar (Shohrux Mirzo, Hirot)","Mirzo Shohrux (Amir Temurning o'g'li)");capLost[II]=0;[II,IF,IG,IH,IJ].forEach(i=>{setCap(i);castle(i);});}
function temurDeath(){const orig=T[II];
 moveCells(II,IF,c=>lo(c)>=61&&la(c)>=37);
 moveCells(II,IG,c=>lo(c)>=66.8&&la(c)<37);
 moveCells(II,IH,c=>lo(c)<51&&la(c)>=34);
 moveCells(II,IJ,c=>(lo(c)>=47&&lo(c)<56&&la(c)<34)||(lo(c)>=51&&lo(c)<56&&la(c)<35));
 T[II]=Math.max(5,orig*.38);T[IF]=orig*.26;T[IG]=orig*.12;T[IH]=orig*.14;T[IJ]=orig*.10;
 rnTemur();repaint();
 if(me===II)card("👑 Amir Temur vafot etdi (1405)","Amir Temur Otrorda vafot etdi, davlat taxt uchun kurashga tushdi: o'g'li Shohrux Mirzo Hirotda hukmdor bo'ldi, nabirasi Xalil Sulton Samarqandni egalladi, Pir Muhammad Qandahorda, Miranshoh o'g'illari Ozarbayjonda, Iskandar Sulton Forsda mustaqil bo'ldi. Siz Shohrux Mirzosiz (Hirot va Xuroson). Birodarlarni yengib davlatni qayta birlashtiring!");
 else say("👑 1405: Amir Temur vafot etdi. O'g'li Shohrux taxtga chiqdi, Temuriylar davlati o'g'il va nabiralar kurashiga bo'lindi!");}
function pirFall(){if(cnt[IG]<=0)return;moveCells(IG,II,null);T[II]+=T[IG]*.5;T[IG]=0;repaint();say("⚔ 1407: Pir Muhammad Qandahorda o'ldirildi, Shohrux Qandahorni oldi");}
function rnXalil(){const g=NM.I[1];if(g.indexOf("Mirzo Ulug'bek")<0)g.push("Mirzo Ulug'bek");rn('I',"Temuriylar (Shohrux Mirzo)");}
function xalilFall(){if(cnt[IF]<=0)return;moveCells(IF,II,null);T[II]+=T[IF]*.5;T[IF]=0;rnXalil();repaint();
 if(me===II)card("🏆 Shohrux Samarqandni oldi (1409)","Xalil Sulton taslim bo'ldi. Siz Samarqandni egalladingiz va o'g'lingiz Mirzo Ulug'bekni u yerga hokim qilib tayinladingiz.");
 else say("👑 1409: Shohrux Samarqandni oldi va o'g'li Ulug'bekni hokim qildi");}
function umarFall(){if(cnt[IH]<=0)return;moveCells(IH,NEU,null);T[IH]=0;repaint();say("⚔ 1410: Qora Qoyunlu Ozarbayjonni egalladi, Miranshoh o'g'illari mag'lub bo'ldi");}
function rnMusa(){rn('e',"Muso Chalabi (Rumeliya)");setCap(IE);castle(IE);}
function musaRise(){const fr=me===IT?.4:1;let n=0;for(let c=0;c<co.length;c++)if(co[c]===IT&&Math.random()<fr){co[c]=IE;n++;}if(!n)return;dirty=true;T[IE]=T[IT]*(fr<1?.6:1)+80;if(fr>=1)T[IT]=0;rnMusa();repaint();
 if(me===IT)card("⚔ Muso Chalabi hujumi (1411)","Muso Chalabi Edirnaga hujum qilib hududlaringizning bir qismini oldi. Sultonlik uchun kurash davom etmoqda.");
 else say("⚔ 1411: Muso Chalabi Suleymonni yengib Edirnani oldi");}
function rnCam(){rn('b',"Usmonlilar (Sulton Mehmed I)","Sulton Mehmed I Chalabi");}
function camurlu(){const a=moveCells(IE,IB,null);let b=0;if(me!==IT)b=moveCells(IT,IB,null);if(a||b){T[IB]+=(T[IE]+(me!==IT?T[IT]:0))*.6;T[IE]=0;if(me!==IT)T[IT]=0;}rnCam();repaint();say("🏆 1413: Chamurli jangi: Mehmed Chalabi Musoni yengib Usmonli davlatini qayta birlashtirdi");}
function iskFall(){if(cnt[IJ]<=0)return;moveCells(IJ,II,null);T[II]+=T[IJ]*.5;T[IJ]=0;repaint();say("🏆 1414: Iskandar Sulton Shohrux tomonidan yengildi, Temuriylar qayta birlashdi");}
const EV=[{id:'ank',m:30,fn:ankara,ren:rnAnkara},{id:'bay',m:38,fn:()=>say("1403: Sulton Boyazid I Temur asirligida vafot etdi")},{id:'iso',m:41,fn:isaFall,ren:()=>rn('b',"Mehmed Chalabi (Bursa va Amasya)")},{id:'tem',m:61,fn:temurDeath,ren:rnTemur},{id:'pir',m:85,fn:pirFall},{id:'xal',m:112,fn:xalilFall,ren:rnXalil},{id:'umr',m:121,fn:umarFall},{id:'mus',m:133,fn:musaRise,ren:rnMusa},{id:'cam',m:162,fn:camurlu,ren:rnCam},{id:'isk',m:170,fn:iskFall}];
function famWar(list){const set=new Set(list.filter(i=>i>=0&&cnt[i]>0));if(set.size<2)return;const pr={};
 for(let c=0;c<co.length;c++){const o=co[c];if(!set.has(o))continue;
  if(c%W<W-1){const q=co[c+1];if(q!==o&&set.has(q)){(pr[o]=pr[o]||[]).push(c,c+1);(pr[q]=pr[q]||[]).push(c+1,c);}}
  if(c+W<co.length){const q=co[c+W];if(q!==o&&set.has(q)){(pr[o]=pr[o]||[]).push(c,c+W);(pr[q]=pr[q]||[]).push(c+W,c);}}}
 for(const o of set){if(o===me||T[o]<30||!pr[o]||Math.random()>.45)continue;const L=pr[o],k=Math.floor(Math.random()*L.length/2)*2,n=L[k+1],q=co[n];
  const got=autoWar(o,q,n,T[o]*.45,Math.max(T[q]*.55,1));
  if(got>0&&(q===me||got>=8||Math.random()<.25))say("⚔ "+N[K[o]][0]+" "+N[K[q]][0]+"ga hujum qildi: "+got+" katak");}}
const _tkH=tick;tick=function(){_tkH();if(me<0||over)return;
 if(!HON){if(months===30&&!HD.s30){HD.s30=1;T[II]+=250;T[IT]=Math.max(5,T[IT]-300);}if(months===61&&!HD.s61){HD.s61=1;T[II]=Math.max(5,T[II]-250);}return;}
 for(const ev of EV)if(!HD[ev.id]&&months>=ev.m){HD[ev.id]=1;try{ev.fn();}catch(e){}}
 if(HD.ank&&!HD.cam)famWar([IT,IA,IB,IE]);
 if(HD.tem&&!HD.isk)famWar([II,IF,IG,IH,IJ]);
 repaint();hud();draw();};
const _inH=intro;intro=function(i){HD={};_inH(i);if(HON&&(i===IT||i===II)){msg+=" | 📜 Tarixiy rejim: Ankara (1402) va Temur vafoti (1405) o'z vaqtida bo'ladi";mt=Date.now()+9000;hud();}};
const _svH=save;save=function(){_svH();try{const k='d1775y'+E.y,sv=JSON.parse(localStorage.getItem(k));if(!sv)return;sv.hist={on:HON,done:HD};localStorage.setItem(k,JSON.stringify(sv));}catch(e){}};
const _ldH=load;load=function(sv){_ldH(sv);HD={};if(sv.hist){HON=sv.hist.on!==false;HD=sv.hist.done||{};}else for(const ev of EV)if(ev.m<=months)HD[ev.id]=1;
 for(const ev of EV)if(HD[ev.id]&&ev.ren)try{ev.ren();}catch(e){}};
{const dn=[IA,IB,IC,ID,IE,IF,IG,IH,IJ].map(i=>N[K[i]][0]+' — ');[...menu.querySelectorAll('button')].forEach(b=>{if(dn.some(t=>b.textContent.indexOf(t)>=0))b.remove();});
 const hb=document.createElement('button');hb.className='nb';hb.style.background='#7a5a2a';
 const upd=()=>{hb.textContent='📜 Tarixiy parchalanish (Ankara 1402, Temur 1405): '+(HON?'YOQIQ':"O'CHIQ");};upd();hb.onclick=()=>{HON=!HON;upd();};menu.insertBefore(hb,menu.children[2]);}
})();
