// WhatsApp business number in international format.
const shop = { whatsapp: '94764450763' };
const dialog = document.querySelector('#order-dialog');
const message = document.querySelector('#order-message');
const status = document.querySelector('#copy-status');
document.querySelectorAll('[data-order]').forEach(button => button.addEventListener('click', () => {
  const text = `Hi Honey Tree! I'd like to enquire about ${button.dataset.order}.\nDate needed: \n${button.dataset.product ? 'Quantity' : 'Size / servings'}: \nPickup or delivery: `;
  if (shop.whatsapp) { window.open(`https://wa.me/${shop.whatsapp}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer'); return; }
  message.value = text;
  message.hidden = false;
  document.querySelector('label[for="order-message"]').hidden = false;
  document.querySelector('#copy-message').hidden = false;
  document.querySelector('#dialog-description').textContent = 'Here’s how your WhatsApp enquiry will look. The bakery’s number still needs to be added.';
  status.textContent = '';
  dialog.showModal();
}));
document.querySelectorAll('.close,.close-text').forEach(button => button.addEventListener('click', () => dialog.close()));
dialog.addEventListener('click', event => { if(event.target === dialog) { const r=dialog.getBoundingClientRect(); if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom) dialog.close(); } });
document.querySelector('#copy-message').addEventListener('click', async () => { try { await navigator.clipboard.writeText(message.value); status.textContent = 'Message copied. No order has been sent.'; } catch { message.focus(); message.select(); status.textContent = 'Select and copy the message above.'; } });
document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
 document.querySelectorAll('[data-filter]').forEach(b => { b.classList.toggle('active', b===button); b.setAttribute('aria-pressed', String(b===button)); });
 document.querySelectorAll('[data-category]').forEach(card => { card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter; });
}));
