const fs=require('fs');
let h=fs.readFileSync('www/index.html','utf8'),n=0;
if(!h.includes('id="splash"')){
 const css=`body.boot #top,body.boot #bot,body.boot canvas,body.boot #pn{visibility:hidden}
#splash{position:fixed;inset:0;background:#0b1d2e;z-index:50;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#fff;transition:opacity .25s}
#splash h1{margin:0 0 18px;font-size:30px;letter-spacing:1px}
#splash .bar{width:46%;max-width:260px;height:6px;background:#fff2;border-radius:3px;overflow:hidden}
#splash .bar i{display:block;height:100%;width:40%;background:#fc6;border-radius:3px;animation:sl 1.1s ease-in-out infinite}
@keyframes sl{0%{margin-left:-40%}100%{margin-left:100%}}
#splash small{margin-top:12px;opacity:.7}`;
 const body=`<body class="boot">
<div id="splash"><h1>🌍 Dunyo tarixi</h1><div class="bar"><i></i></div><small>Yuklanmoqda...</small></div>
<script>window.__ready=function(){if(window.__rd)return;window.__rd=1;var m=document.getElementById('menu');if(m)m.classList.remove('hold');document.body.classList.remove('boot');var s=document.getElementById('splash');if(s){s.style.opacity='0';setTimeout(function(){s.remove();},300);}};window.addEventListener('load',function(){setTimeout(window.__ready,40);});setTimeout(window.__ready,9000);</script>`;
 if(h.includes('</style>')&&h.includes('<body>')){h=h.replace('</style>',()=>css+'\n</style>');h=h.replace('<body>',()=>body);n++;}
 else console.log('TOPILMADI: index.html tuzilishi (style yoki body)');}
const old="<script>setTimeout(function(){var m=document.getElementById('menu');if(m)m.classList.remove('hold');},3500);</script>";
if(h.includes(old)){h=h.split(old).join('');n++;}
fs.writeFileSync('www/index.html',h);
let a=fs.readFileSync('www/art.js','utf8');const o="const reveal=()=>{menu.classList.remove('hold');};";
if(a.includes(o)){a=a.replace(o,()=>"const reveal=()=>{menu.classList.remove('hold');if(window.__ready)window.__ready();};");fs.writeFileSync('www/art.js',a);n++;}
console.log('TAYYOR, ozgarishlar soni:',n);
