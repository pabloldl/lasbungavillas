const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('#nav');
toggle.hidden=false;
function closeMenu(){toggle.setAttribute('aria-expanded','false');nav.classList.remove('open')}
toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open)});
nav.addEventListener('click',e=>{if(e.target.closest('a'))closeMenu()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()});
matchMedia('(min-width:601px)').addEventListener('change',closeMenu);
const photos=[...document.querySelectorAll('[data-photo]')];
const dialog=document.querySelector('#photo-dialog');
let current=0,opener;
function showPhoto(index){current=(index+photos.length)%photos.length;const photo=photos[current];const img=photo.querySelector('img');dialog.querySelector('.viewer-image img').src=photo.getAttribute('href');dialog.querySelector('.viewer-image img').alt=img.alt;document.querySelector('#photo-count').textContent=`${current+1} / ${photos.length}`;document.querySelector('#photo-caption').textContent=img.alt}
photos.forEach((photo,index)=>photo.addEventListener('click',e=>{if(typeof dialog.showModal!=='function')return;e.preventDefault();opener=photo;showPhoto(index);dialog.showModal()}));
document.querySelector('#close-photo').addEventListener('click',()=>dialog.close());
document.querySelector('#previous-photo').addEventListener('click',()=>showPhoto(current-1));
document.querySelector('#next-photo').addEventListener('click',()=>showPhoto(current+1));
dialog.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'){e.preventDefault();showPhoto(current-1)}if(e.key==='ArrowRight'){e.preventDefault();showPhoto(current+1)}});
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}});
dialog.addEventListener('close',()=>opener?.focus());
let startX=0,startY=0;const viewer=dialog.querySelector('.viewer-image img');viewer.addEventListener('touchstart',e=>{startX=e.changedTouches[0].clientX;startY=e.changedTouches[0].clientY},{passive:true});viewer.addEventListener('touchend',e=>{const dx=e.changedTouches[0].clientX-startX,dy=e.changedTouches[0].clientY-startY;if(Math.abs(dx)>55&&Math.abs(dx)>Math.abs(dy))showPhoto(current+(dx<0?1:-1))},{passive:true});
const copy=document.querySelector('#copy-email');if(navigator.clipboard&&window.isSecureContext){copy.hidden=false;copy.addEventListener('click',async()=>{try{await navigator.clipboard.writeText('casarural.lasbuganvillas@gmail.com');document.querySelector('#copy-status').textContent='Correo copiado.'}catch{document.querySelector('#copy-status').textContent='Puedes seleccionar y copiar el correo que aparece arriba.'}})}
document.querySelector('#year').textContent=new Date().getFullYear();
