const HDATA=[
[117,124,6,"124: Adrian devori: Rim chegaralari mustahkamlandi",[['T','R',150],['Q','R',.05]]],
[117,166,1,"166: Rim elchilari Xan imperiyasiga yetib bordi",[['T','R',100],['T','Z',100]]],
[632,634,3,"634: Xolid ibn al-Valid Suriyani zabt etishni boshladi",[['T','A',200],['Q','A',.1]]],
[632,637,1,"637: Qodisiya jangi: Sosoniylar mag'lub bo'ldi",[['T','S',-300],['T','A',250]]],
[632,644,11,"644: Xalifa Umar vafot etdi, ichki nizolar boshlandi",[['REV','A',.03]]],
[632,651,1,"651: Yazdigird III o'ldirildi, Sosoniylar tugadi",[['T','S',-500],['REV','S',.15]]],
[780,786,9,"786: Xorun ar-Rashid xalifa bo'ldi, Bag'dod gullab-yashnadi",[['Q','B',.1],['T','B',150]]],
[780,800,12,"800: Karl imperator toji kiydi",[['Q','F',.1],['T','F',150]]],
[1000,1001,1,"1001: Mahmud G'aznaviy Hindistonga yurishlarni boshladi",[['T','Z',200],['Q','Z',.05]]],
[1000,1009,1,"1009: Kordova xalifaligida fuqarolik urushi",[['REV','K',.2],['T','K',-200]]],
[1000,1016,1,"1016: Kanut Angliyani zabt etdi",[['T','D',200],['T','E',-250]]],
[1000,1040,5,"1040: Dandanakan jangi: Saljuqiylar G'aznaviylarni yengdi",[['T','Z',-300]]],
[1200,1211,1,"1211: Mo'g'ullar Szin imperiyasiga hujum qildi",[['T','M',300],['T','C',-300]]],
[1200,1215,6,"1215: Magna Karta: baronlar qo'zg'oloni",[['REV','A',.08],['T','A',-100]]],
[1200,1234,1,"1234: Szin imperiyasi mo'g'ullar tomonidan yo'q qilindi",[['T','C',-400],['REV','C',.4]]],
[1200,1274,1,"1274: Mo'g'ullarning Yaponiyaga yurishi to'fonda barbod bo'ldi",[['T','M',-250],['Q','J',.05]]],
[1300,1337,5,"1337: Yuz yillik urush boshlandi",[['T','F',150],['T','A',150]]],
[1300,1368,1,"1368: Yuan imperiyasi quladi, Min boshlandi",[['REV','Y',.35],['T','Y',-300]]],
[1400,1415,10,"1415: Azinkur jangi: Angliya Fransiyani yengdi",[['T','A',150],['T','F',-300]]],
[1400,1429,5,"1429: Jann d'Ark Orleanni ozod qildi",[['T','F',200],['Q','F',.1]]],
[1500,1517,10,"1517: Lyuter islohoti Yevropani bo'ldi",[['REV','H',.06]]],
[1500,1520,1,"1520: Suleymon Qonuniy taxtga chiqdi",[['Q','T',.1],['T','T',150]]],
[1500,1526,4,"1526: Panipat jangi: Bobur Shimoliy Hindistonni oldi",[['T','Z',-300],['T','I',300]]],
[1500,1571,10,"1571: Lepanto jangi: Usmonli floti mag'lub bo'ldi",[['T','T',-200],['T','S',200]]],
[1500,1588,7,"1588: Ispaniya Armadasi halok bo'ldi",[['T','S',-300],['T','A',200]]],
[1650,1654,1,"1654: Pereyaslav radasi: Kazaklar Rossiyaga qo'shildi",[['T','R',200],['T','K',-150],['T','L',-150]]],
[1650,1666,9,"1666: London yong'ini",[['T','A',-100]]],
[1650,1683,9,"1683: Vena jangi: Usmonlilar mag'lub bo'ldi",[['T','T',-300],['T','H',250]]],
[1775,1776,7,"1776: AQSh mustaqillik deklaratsiyasi",[['Q','U',.1]]],
[1775,1781,10,"1781: Yorktaun: Britaniya taslim bo'ldi",[['T','G',-250],['T','U',200]]],
[1775,1792,4,"1792: Fransiya inqilobiy urushlari boshlandi",[['T','F',150],['Q','F',.1]]],
[1810,1814,4,"1814: Napoleon Elbaga surgun qilindi",[['REV','F',.15]]],
[1810,1821,3,"1821: Gretsiya mustaqillik urushi boshlandi",[['T','T',-150]]],
[1810,1830,7,"1830: Fransiyada iyul inqilobi",[['REV','F',.05]]],
[1910,1915,4,"1915: Gallipoli: Usmonlilar Antantani ushladi",[['T','T',100],['Q','T',.05],['T','G',-150]]],
[1910,1916,2,"1916: Verden va Somma: katta talafotlar",[['T','F',-250],['T','D',-250],['T','G',-250]]],
[1910,1918,11,"1918: Germaniya taslim bo'ldi, imperiyalar qulaydi",[['REV','D',.15],['REV','H',.5],['REV','T',.4],['REV','R',.2]]],
[1939,1942,6,"1942: Midvey jangi: Yaponiya flotini yo'qotdi",[['T','J',-400],['T','U',200]]],
[1939,1944,12,"1944: Ardenn jangi",[['T','D',-200],['T','U',-100]]],
[1939,1945,8,"1945: Xirosima va Nagasaki",[['T','J',-500]]],
[2020,2025,1,"2025: Sun'iy intellekt va dronlar jang maydonini o'zgartirmoqda",[['Q','U',.03],['Q','C',.03]]]];
const HMAP=new Map();HDATA.forEach(e=>{if(e[0]===E.y){const m=(e[1]-e[0])*12+(e[2]-1);(HMAP.get(m)||HMAP.set(m,[]).get(m)).push(e);}});
function hvRevolt(i,fr){const cells=[];for(let c=0;c<co.length;c++)if(co[c]===i)cells.push(c);if(!cells.length)return 0;
 const cp=CAPC[i]>=0?CAPC[i]:cells[0],x0=cp%W,y0=(cp/W)|0;
 cells.sort((a,b)=>((b%W-x0)**2+((b/W|0)-y0)**2)-((a%W-x0)**2+((a/W|0)-y0)**2));
 const n=Math.max(1,Math.floor(cells.length*fr));for(let k=0;k<n;k++)co[cells[k]]=NEU;dirty=true;return n;}
function hvApply(ops){let aff=false;for(const o of ops){if(o[0]==='G'){gold+=o[1];continue;}
  const i=K.indexOf(o[1]);if(i<0)continue;if(i===me)aff=true;
  if(o[0]==='T')T[i]=Math.max(5,T[i]+o[2]);
  else if(o[0]==='Q'&&typeof QL!=='undefined')QL[i]=clp(QL[i]+o[2],.6,2);
  else if(o[0]==='REV')hvRevolt(i,o[2]);
  else if(o[0]==='REL')REL[i]=clp(REL[i]+o[2],-100,100);}
 return aff;}
function hvRandom(){const ids=[];for(let i=0;i<NEU;i++)if(cnt[i]>0)ids.push(i);
 const pick=Math.random()<.35?me:ids[Math.floor(Math.random()*ids.length)],nm=N[K[pick]][0],tp=Math.random(),big=cnt[pick]>300;
 if(tp<.28&&big){
  if(pick===me)dpCard("🔥 Qo'zg'olon!","Chekka viloyatlarda qo'zg'olon boshlandi. Qanday choralar ko'rasiz?",[["🪖 Shafqatsiz bostirish (obro' −3, qo'shin −10%)",()=>{T[me]*=.9;REP=clp(REP-3,0,100);}],["🕊 Imtiyoz berish (−80💰)",()=>{gold=Math.max(0,gold-80);}],["Befarq qolish (hudud yo'qotiladi)",()=>{hvRevolt(me,.05);paint();dirty=false;}]]);
  else{const n=hvRevolt(pick,.04);msg="🔥 "+nm+"da qo'zg'olon: "+n+" katak ajraldi";mt=Date.now()+5000;}}
 else if(tp<.5){
  if(pick===me)dpCard("🌾 Ocharchilik","Hosil yomon bo'ldi, xalq och. Nima qilasiz?",[["G'alla sotib olish (−100💰)",()=>{if(gold>=100)gold-=100;else T[me]*=.85;}],["Xalq qiynalsin (qo'shin −15%)",()=>{T[me]*=.85;}]]);
  else{T[pick]*=.92;if(cnt[pick]>200){msg="🌾 "+nm+"da ocharchilik";mt=Date.now()+4000;}}}
 else if(tp<.7){
  if(pick===me)dpCard("🎖 Mashhur sarkarda","Tajribali sarkarda xizmatingizga o'tishni xohlaydi.",[["Yollash (−150💰): sifat +0.05",()=>{if(gold>=150){gold-=150;if(typeof QL!=='undefined')QL[me]+=.05;}else note('Oltin yetmaydi');}],["Rad etish",null]]);
  else if(typeof QL!=='undefined')QL[pick]=clp(QL[pick]+.04,.6,2);}
 else if(tp<.85){
  if(pick===me){const g=Math.round(60+cnt[me]*.1);gold+=g;msg="📈 Savdo gullab-yashnadi: +"+g+"💰";mt=Date.now()+4000;}else T[pick]*=1.06;}
 else if(pick===me)dpCard("🎁 Elchi sovg'asi","Uzoq yurtdan elchi boy sovg'alar olib keldi.",[["Qabul qilish (+120💰)",()=>{gold+=120;}],["Qaytarib yuborish (obro' +3)",()=>{REP=clp(REP+3,0,100);}]]);}
const _tkH=tick;tick=function(){_tkH();if(me<0||over)return;
 if(HMAP.has(months))for(const e of HMAP.get(months)){const aff=hvApply(e[4]);if(aff)dpCard("📜 Tarixiy voqea",e[3],[["OK"]]);else{msg="📜 "+e[3];mt=Date.now()+7000;}}
 if(Math.random()<.045)hvRandom();
 if(dirty){paint();dirty=false;}hud();draw();};
