const fs=require('fs');let h=fs.readFileSync('www/index.html','utf8'),ch=0;
if(!h.includes('#menu.hold')){h=h.replace('</style>',()=>'#menu.hold{visibility:hidden}\n</style>');ch++;}
if(!h.includes('class="hold"')){h=h.replace('<div id="menu">',()=>'<div id="menu" class="hold">');ch++;}
if(!h.includes("classList.remove('hold')")){h=h.replace('</body>',()=>"<script>setTimeout(function(){var m=document.getElementById('menu');if(m)m.classList.remove('hold');},3500);</script>\n</body>");ch++;}
fs.writeFileSync('www/index.html',h);console.log('TAYYOR, ozgarishlar soni:',ch);
