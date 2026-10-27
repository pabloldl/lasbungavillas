'use strict';
document.documentElement.classList.add('js');
const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navegacion');
menu.hidden = false;
function closeMenu() { menu.setAttribute('aria-expanded', 'false'); nav.classList.remove('is-open'); }
menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); nav.classList.toggle('is-open', open); });
nav.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') { closeMenu(); menu.focus(); } });
document.querySelector('#year').textContent = new Date().getFullYear();
const copy = document.querySelector('#copy-email');
const status = document.querySelector('#copy-status');
copy.hidden = false;
copy.addEventListener('click', async () => {
  const email = 'casarural.lasbuganvillas@gmail.com';
  try {
    if (navigator.clipboard && window.isSecureContext) await navigator.clipboard.writeText(email);
    else {
      const field = document.createElement('textarea'); field.value = email; field.setAttribute('readonly', ''); field.style.position = 'fixed'; field.style.opacity = '0'; document.body.append(field); field.select();
      let success; try { success = document.execCommand('copy'); } finally { field.remove(); copy.focus(); }
      if (!success) throw new Error('No se ha podido copiar');
    }
    status.textContent = 'Correo copiado. ¡Hasta pronto!';
  } catch { status.textContent = 'Selecciona el correo para copiarlo manualmente.'; }
});
const dialog = document.querySelector('#photo-dialog');
if (typeof dialog.showModal === 'function') {
  document.querySelector('[data-photo]').addEventListener('click', event => { event.preventDefault(); dialog.showModal(); document.body.classList.add('modal-open'); });
  document.querySelector('#close-photo').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) { const box = dialog.getBoundingClientRect(); if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close(); } });
  dialog.addEventListener('close', () => document.body.classList.remove('modal-open'));
}
