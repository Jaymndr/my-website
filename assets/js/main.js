// Simple "quote cart" using localStorage
const CART_KEY = 'alphapep_quote_cart';

function getCart() {
  try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; } catch { return []; }
}
function saveCart(items) {
  localStorage.setItem(CART_KEY, JSON.stringify(items));
}

function addToCart(item) {
  const items = getCart();
  const existing = items.find(i => i.id === item.id);
  if (existing) { existing.qty += item.qty || 1; }
  else { items.push(item); }
  saveCart(items);
  alert('Added to quote cart.');
  renderCartBadge();
}

function renderCartBadge() {
  const count = getCart().reduce((sum, i) => sum + (i.qty || 1), 0);
  document.querySelectorAll('[data-cart-count]').forEach(el => { el.textContent = count; });
}
document.addEventListener('DOMContentLoaded', renderCartBadge);

// Build a mailto link with cart items
function buildQuoteMailto() {
  const items = getCart();
  const subject = encodeURIComponent('Quote Request - AlphaPep LLC');
  const lines = items.map(i => `- ${i.name} (SKU: ${i.sku}) x ${i.qty || 1}`);
  const body = encodeURIComponent(`Hello AlphaPep Team,

I'd like a quote for:
${lines.join('\n')}

Company:
Name:
Email:
Phone:
Notes:
`);
  const to = 'sales@example.com'; // TODO: replace with your real email
  return `mailto:${to}?subject=${subject}&body=${body}`;
}

// Render quote on contact page if element exists
function renderQuoteList() {
  const target = document.getElementById('quote-list');
  if (!target) return;
  const items = getCart();
  if (!items.length) { target.innerHTML = '<p class="small">Your quote cart is empty. Add products from the <a href="products.html">Products</a> page.</p>'; return; }
  target.innerHTML = '<ul>' + items.map(i => `<li><strong>${i.name}</strong> (SKU: ${i.sku}) × ${i.qty || 1}</li>`).join('') + '</ul>';
  const btn = document.getElementById('quote-mailto');
  if (btn) btn.setAttribute('href', buildQuoteMailto());
}

document.addEventListener('DOMContentLoaded', renderQuoteList);

// Clear cart
function clearCart() {
  localStorage.removeItem(CART_KEY);
  renderCartBadge();
  renderQuoteList();
}
