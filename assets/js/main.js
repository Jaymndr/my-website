const CART_KEY='alphapep_quote_cart';
const getCart=()=>{try{return JSON.parse(localStorage.getItem(CART_KEY))||[]}catch{return[]}};
const saveCart=(i)=>localStorage.setItem(CART_KEY,JSON.stringify(i));
function addToCart(item){const items=getCart();const ex=items.find(i=>i.id===item.id);if(ex){ex.qty+=item.qty||1}else{items.push(item)};saveCart(items);alert('Added to quote cart.');renderCartBadge();}
function renderCartBadge(){const c=getCart().reduce((s,i)=>s+(i.qty||1),0);document.querySelectorAll('[data-cart-count]').forEach(el=>el.textContent=c);}
document.addEventListener('DOMContentLoaded',renderCartBadge);
function buildQuoteMailto(){const items=getCart();const subject=encodeURIComponent('Quote Request - AlphaPep LLC');const lines=items.map(i=>`- ${i.name} (SKU: ${i.sku}) x ${i.qty||1}`);const body=encodeURIComponent(`Hello AlphaPep Team,\n\nI'd like a quote for:\n${lines.join('\n')}\n\nCompany:\nName:\nEmail:\nPhone:\nNotes:\n`);const to='sales@example.com';return `mailto:${to}?subject=${subject}&body=${body}`;}
function renderQuoteList(){const t=document.getElementById('quote-list');if(!t)return;const items=getCart();if(!items.length){t.innerHTML='<p class="small">Your quote cart is empty. Add products from the <a href="products.html">Products</a> page.</p>';return;}t.innerHTML='<ul>'+items.map(i=>`<li><strong>${i.name}</strong> (SKU: ${i.sku}) × ${i.qty||1}</li>`).join('')+'</ul>';const btn=document.getElementById('quote-mailto');if(btn)btn.setAttribute('href',buildQuoteMailto());}
document.addEventListener('DOMContentLoaded',renderQuoteList);
function clearCart(){localStorage.removeItem(CART_KEY);renderCartBadge();renderQuoteList();}
