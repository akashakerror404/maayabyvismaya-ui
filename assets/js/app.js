/* Maaya by Vismaya — UI prototype behaviour (vanilla JS, no build step) */

/* ---------- Icons ---------- */
const I = {
  search: '<svg class="icon" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
  user: '<svg class="icon" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"/></svg>',
  heart: '<svg class="icon" viewBox="0 0 24 24"><path d="M12 20.5s-7.5-4.6-9.2-9.4C1.6 7.6 3.9 4 7.4 4c2 0 3.5 1.1 4.6 2.7C13.1 5.1 14.6 4 16.6 4c3.5 0 5.8 3.6 4.6 7.1-1.7 4.8-9.2 9.4-9.2 9.4Z"/></svg>',
  bag: '<svg class="icon" viewBox="0 0 24 24"><path d="M5 8h14l-1 12.5H6L5 8Z"/><path d="M9 8V6.5a3 3 0 0 1 6 0V8"/></svg>',
  menu: '<svg class="icon" viewBox="0 0 24 24"><path d="M3 7h18M3 12h18M3 17h12"/></svg>',
  close: '<svg class="icon" viewBox="0 0 24 24"><path d="M6 6l12 12M18 6 6 18"/></svg>',
  arrow: '<svg class="icon" viewBox="0 0 24 24"><path d="M4 12h16m-6-6 6 6-6 6"/></svg>',
  back: '<svg class="icon" viewBox="0 0 24 24"><path d="M20 12H4m6-6-6 6 6 6"/></svg>',
  chev: '<svg class="icon" viewBox="0 0 24 24"><path d="m9 6 6 6-6 6"/></svg>',
  truck: '<svg class="icon" viewBox="0 0 24 24"><path d="M2 6h11v10H2zM13 9h4l4 4v3h-8"/><circle cx="6" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/></svg>',
  drop: '<svg class="icon" viewBox="0 0 24 24"><path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11Z"/></svg>',
  shield: '<svg class="icon" viewBox="0 0 24 24"><path d="M12 3 4.5 6v5.5c0 4.6 3.2 8.4 7.5 9.5 4.3-1.1 7.5-4.9 7.5-9.5V6L12 3Z"/><path d="m9 12 2 2 4-4"/></svg>',
  sparkle: '<svg class="icon" viewBox="0 0 24 24"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18"/></svg>',
  gift: '<svg class="icon" viewBox="0 0 24 24"><path d="M3 9h18v4H3zM5 13h14v8H5zM12 9v12"/><path d="M12 9S10.5 4 8 4.5 7 9 12 9Zm0 0s1.5-5 4-4.5S17 9 12 9Z"/></svg>',
  refresh: '<svg class="icon" viewBox="0 0 24 24"><path d="M4 12a8 8 0 0 1 14-5.3L20 9M20 4v5h-5M20 12a8 8 0 0 1-14 5.3L4 15M4 20v-5h5"/></svg>',
  lock: '<svg class="icon" viewBox="0 0 24 24"><rect x="5" y="10" width="14" height="10" rx="1"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>',
  pin: '<svg class="icon" viewBox="0 0 24 24"><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z"/><circle cx="12" cy="9.5" r="2.5"/></svg>',
  box: '<svg class="icon" viewBox="0 0 24 24"><path d="M3 7.5 12 3l9 4.5v9L12 21l-9-4.5v-9Z"/><path d="m3 7.5 9 4.5 9-4.5M12 12v9"/></svg>',
  logout: '<svg class="icon" viewBox="0 0 24 24"><path d="M15 4h4v16h-4M10 8l-4 4 4 4M6 12h10"/></svg>',
  filter: '<svg class="icon" viewBox="0 0 24 24"><path d="M4 6h16M7 12h10M10 18h4"/></svg>',
  grid3: '<svg class="icon" viewBox="0 0 24 24"><path d="M4 4h4v16H4zM10 4h4v16h-4zM16 4h4v16h-4z"/></svg>',
  grid4: '<svg class="icon" viewBox="0 0 24 24"><path d="M3 4h3v16H3zM8 4h3v16H8zM13 4h3v16h-3zM18 4h3v16h-3z"/></svg>',
  eye: '<svg class="icon" viewBox="0 0 24 24"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/></svg>',
  check: '<svg class="icon" viewBox="0 0 24 24"><path d="m5 12.5 4.5 4.5L19 7.5"/></svg>',
  ig: '<svg class="icon" viewBox="0 0 24 24"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r=".6" fill="currentColor"/></svg>',
  fb: '<svg class="icon" viewBox="0 0 24 24"><path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8Z"/></svg>',
  pinterest: '<svg class="icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M10.5 20 13 9.5M10 13.5c-1.5-2.5.5-6 3.5-6s4.5 2.6 3.5 5.5-4 3.4-4.6.8"/></svg>',
  wa: '<svg class="icon" viewBox="0 0 24 24"><path d="M4 20l1.3-4A8 8 0 1 1 8.3 19L4 20Z"/><path d="M9 9.5c.3 2.6 2.4 4.9 5.5 5.5l1-1.4-1.8-1-1 .8a4.5 4.5 0 0 1-2.1-2.1l.8-1-1-1.8L9 9.5Z"/></svg>',
  trash: '<svg class="icon" viewBox="0 0 24 24"><path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/></svg>',
  edit: '<svg class="icon" viewBox="0 0 24 24"><path d="m4 20 1-4L16 5l3 3L8 19l-4 1Z"/></svg>',
  invoice: '<svg class="icon" viewBox="0 0 24 24"><path d="M6 3h12v18l-3-2-3 2-3-2-3 2V3Z"/><path d="M9 8h6M9 12h6"/></svg>',
};
const LEAF = 'assets/img/brand/leaf-brown.svg';
const LEAF_W = 'assets/img/brand/leaf-white.svg';
const GOOGLE_SVG = '<svg viewBox="0 0 48 48"><path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 13 4 4 13 4 24s9 20 20 20 20-9 20-20c0-1.3-.1-2.4-.4-3.5z"/><path fill="#FF3D00" d="m6.3 14.7 6.6 4.8C14.6 15.1 18.9 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/><path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z"/><path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z"/></svg>';

/* ---------- Helpers ---------- */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const inr = n => '₹' + n.toLocaleString('en-IN');
const byId = id => PRODUCTS.find(p => p.id === id);
const qs = k => new URLSearchParams(location.search).get(k);
const off = p => p.mrp ? Math.round((1 - p.price / p.mrp) * 100) : 0;
const FREE_SHIP = 999;

/* ---------- Demo state (per-browser, falls back to seeded defaults) ---------- */
const store = {
  get(k, d) { try { const v = localStorage.getItem('maaya:' + k); return v ? JSON.parse(v) : d; } catch { return d; } },
  set(k, v) { try { localStorage.setItem('maaya:' + k, JSON.stringify(v)); } catch {} },
};
let cart = store.get('cart', [
  { id: 'n03', qty: 1, finish: 'Gold' },
  { id: 'e04', qty: 2, finish: 'Gold' },
  { id: 'r05', qty: 1, finish: 'Silver', size: '7' },
]);
let wish = store.get('wish', ['e01', 'h06', 'n07', 'r07', 'n04']);
const saveCart = () => { store.set('cart', cart); updateCounts(); };
const saveWish = () => { store.set('wish', wish); updateCounts(); };
const cartCount = () => cart.reduce((a, l) => a + l.qty, 0);

function addToCart(id, qty = 1, finish = 'Gold', size) {
  const hit = cart.find(l => l.id === id && l.finish === finish && l.size === size);
  hit ? hit.qty += qty : cart.push({ id, qty, finish, size });
  saveCart();
  const p = byId(id);
  toast(`<img src="${p.imgs[0]}" alt=""><div><small>Added to bag</small>${p.name}</div><a href="cart.html">View bag</a>`);
}
function toggleWish(id) {
  wish = wish.includes(id) ? wish.filter(x => x !== id) : [...wish, id];
  saveWish();
  $$(`[data-wish="${id}"]`).forEach(b => b.classList.toggle('is-active', wish.includes(id)));
  return wish.includes(id);
}
function updateCounts() {
  $$('[data-count="cart"]').forEach(e => { e.textContent = cartCount(); e.hidden = !cartCount(); });
  $$('[data-count="wish"]').forEach(e => { e.textContent = wish.length; e.hidden = !wish.length; });
}
function toast(html) {
  let t = $('.toast');
  if (!t) { t = document.createElement('div'); t.className = 'toast'; document.body.append(t); }
  t.innerHTML = html; t.classList.add('is-show');
  clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove('is-show'), 3200);
}

/* ---------- Layout partials ---------- */
const NAV = [
  ['shop.html?cat=necklaces', 'Necklaces'], ['shop.html?cat=earrings', 'Earrings'],
  ['shop.html?cat=rings', 'Rings'], ['shop.html?cat=handchains', 'Hand Chains'],
];
function headerHTML() {
  const here = location.pathname.split('/').pop() + location.search;
  const announce = ['Free shipping on orders above ₹999', 'Tarnish-free · Waterproof · Hypoallergenic', 'Complimentary gift wrap on every order', 'Easy 7-day exchange'];
  const items = [...announce, ...announce].map(t => `<span>${t}<img src="${LEAF_W}" alt=""></span>`).join('');
  return `
  <div class="announce"><div class="announce__track">${items}${items}</div></div>
  <header class="header">
    <div class="container header__bar">
      <div style="display:flex;align-items:center;gap:20px">
        <button class="menu-toggle" data-open="nav-drawer" aria-label="Menu">${I.menu}</button>
        <ul class="nav">
          <li><a href="shop.html" class="${here.startsWith('shop.html') && !qs('cat') ? 'is-active' : ''}">Shop</a>
            <div class="mega"><div class="mega__inner">
              ${Object.entries(CATEGORIES).map(([k, c]) => `<div><h4>${c.name}</h4><ul>${c.subs.map(s => `<li><a href="shop.html?cat=${k}">${s}</a></li>`).join('')}<li><a href="shop.html?cat=${k}"><u>View all</u></a></li></ul></div>`).join('')}
              <a class="mega__card" href="shop.html?cat=earrings"><img src="assets/img/products/earrings-05-2.jpg" alt=""><span>New arrivals</span></a>
              <a class="mega__card" href="shop.html"><img src="assets/img/products/necklace-04-3.jpg" alt=""><span>The Gift Edit</span></a>
            </div></div>
          </li>
          ${NAV.slice(0, 3).map(([h, t]) => `<li><a href="${h}" class="${here === h ? 'is-active' : ''}">${t}</a></li>`).join('')}
          <li><a href="index.html#story">Our Story</a></li>
        </ul>
      </div>
      <a href="index.html" class="header__logo" aria-label="Maaya by Vismaya — home"><img src="assets/img/brand/wordmark-brown.svg" alt="Maaya by Vismaya"></a>
      <div class="header__actions">
        <button data-open="search" aria-label="Search">${I.search}</button>
        <a href="login.html" class="hide-sm" aria-label="Account">${I.user}</a>
        <a href="wishlist.html" aria-label="Wishlist">${I.heart}<span class="badge-count" data-count="wish"></span></a>
        <a href="cart.html" aria-label="Bag">${I.bag}<span class="badge-count" data-count="cart"></span></a>
      </div>
    </div>
  </header>
  <div class="search-panel" id="search">
    <div class="search-panel__box">
      <div class="search-panel__field">${I.search}<input type="search" placeholder="Search hoops, pearl, gifting…"><button data-close aria-label="Close">${I.close}</button></div>
      <div class="search-panel__tags"><span class="eyebrow">Trending</span>
        ${['Hoops', 'Pearl necklace', 'Hand chain', 'Adjustable rings', 'Gifts under ₹1,500'].map(t => `<a class="chip chip--sm" href="shop.html">${t}</a>`).join('')}
      </div>
    </div>
  </div>
  <div class="drawer" id="nav-drawer">
    <div class="drawer__scrim" data-close></div>
    <aside class="drawer__panel">
      <div class="drawer__head"><img src="assets/img/brand/wordmark-brown.svg" alt="Maaya"><button data-close aria-label="Close">${I.close}</button></div>
      <nav class="drawer__nav">
        <a href="shop.html">Shop all ${I.chev}</a>
        ${NAV.map(([h, t]) => `<a href="${h}">${t} ${I.chev}</a>`).join('')}
        <a href="index.html#story">Our Story ${I.chev}</a>
      </nav>
      <div class="drawer__foot">
        <a href="login.html" style="display:flex;gap:10px;align-items:center">${I.user} Sign in / Create account</a>
        <a href="orders.html" style="display:flex;gap:10px;align-items:center">${I.box} Track my order</a>
      </div>
    </aside>
  </div>`;
}
function footerHTML() {
  return `
  <footer class="footer">
    <div class="container">
      <div class="footer__news">
        <div>
          <h3>Join the <span class="script">Maaya</span> circle</h3>
          <p>Early access to new drops, styling notes and 10% off your first piece.</p>
        </div>
        <form class="news-form" onsubmit="event.preventDefault();this.querySelector('input').value='';toast('<div><small>Welcome</small>You\\'re on the list — check your inbox.</div>')">
          <input type="email" placeholder="Your email address" required><button>Subscribe</button>
        </form>
      </div>
      <div class="footer__main">
        <div class="footer__brand">
          <img class="logo" src="assets/img/brand/logo-primary-blue.svg" alt="Maaya by Vismaya">
          <p>Stainless steel jewellery made for every age — built to stay, made to be noticed by you first.</p>
          <div class="socials"><a href="#" aria-label="Instagram">${I.ig}</a><a href="#" aria-label="Facebook">${I.fb}</a><a href="#" aria-label="Pinterest">${I.pinterest}</a><a href="#" aria-label="WhatsApp">${I.wa}</a></div>
        </div>
        <div><h5>Shop</h5><ul>${NAV.map(([h, t]) => `<li><a href="${h}">${t}</a></li>`).join('')}<li><a href="shop.html">New arrivals</a></li><li><a href="shop.html">Gift cards</a></li></ul></div>
        <div><h5>Help</h5><ul><li><a href="orders.html">Track order</a></li><li><a href="#">Shipping</a></li><li><a href="#">Returns &amp; exchange</a></li><li><a href="#">Jewellery care</a></li><li><a href="#">FAQs</a></li></ul></div>
        <div><h5>Maaya</h5><ul><li><a href="index.html#story">Our story</a></li><li><a href="#">Contact us</a></li><li><a href="#">Bulk &amp; corporate gifting</a></li><li><a href="#">Privacy policy</a></li><li><a href="#">Terms</a></li></ul></div>
        <div class="footer__seal-col"><img class="footer__seal" src="assets/img/brand/logo-seal-blue.svg" alt=""></div>
      </div>
      <div class="footer__bottom">
        <span>© 2026 Maaya by Vismaya. All rights reserved.</span>
        <div class="pay-icons"><span>UPI</span><span>VISA</span><span>MASTERCARD</span><span>RUPAY</span><span>NETBANKING</span></div>
      </div>
    </div>
  </footer>`;
}

/* ---------- Product card ---------- */
function cardHTML(p) {
  const tag = p.mrp ? `<span class="tag tag--sale">${off(p)}% off</span>` : p.tag ? `<span class="tag ${p.tag === 'New' ? 'tag--new' : 'tag--best'}">${p.tag}</span>` : '';
  return `
  <article class="p-card">
    <div class="p-card__media">
      <a href="product.html?id=${p.id}" class="p-card__link"><img src="${p.imgs[0]}" alt="${p.name}" loading="lazy"><img src="${p.imgs[1] || p.imgs[0]}" alt="" loading="lazy"></a>
      <div class="p-card__tag">${tag}</div>
      <button class="p-card__wish ${wish.includes(p.id) ? 'is-active' : ''}" data-wish="${p.id}" aria-label="Add to wishlist">${I.heart}</button>
      <button class="p-card__quick" data-add="${p.id}">Add to bag</button>
    </div>
    <a href="product.html?id=${p.id}" class="p-card__body">
      <span class="p-card__cat">${CATEGORIES[p.cat].name}</span>
      <h3 class="p-card__name">${p.name}</h3>
      <span class="p-card__price">${inr(p.price)}${p.mrp ? `<span class="price-mrp">${inr(p.mrp)}</span>` : ''}</span>
      <span class="p-card__swatches"><i class="swatch-dot swatch--gold"></i><i class="swatch-dot swatch--silver"></i></span>
    </a>
  </article>`;
}
function pickProducts(spec, limit) {
  let list = PRODUCTS;
  if (spec === 'bestsellers') list = [...PRODUCTS].sort((a, b) => b.reviews - a.reviews);
  else if (spec === 'new') list = PRODUCTS.filter(p => p.tag === 'New');
  else if (spec.startsWith('cat:')) list = PRODUCTS.filter(p => p.cat === spec.slice(4));
  else if (spec.startsWith('ids:')) list = spec.slice(4).split(',').map(byId);
  else if (spec.startsWith('related:')) { const p = byId(spec.slice(8)); list = PRODUCTS.filter(x => x.id !== p.id && x.cat === p.cat); }
  return list.slice(0, limit || list.length);
}
function renderGrids() {
  $$('[data-products]').forEach(el => { el.innerHTML = pickProducts(el.dataset.products, +el.dataset.limit).map(cardHTML).join(''); });
}

/* ---------- Global interactions ---------- */
document.addEventListener('click', e => {
  const add = e.target.closest('[data-add]');
  if (add) { e.preventDefault(); addToCart(add.dataset.add); return; }
  const w = e.target.closest('[data-wish]');
  if (w) {
    e.preventDefault();
    const on = toggleWish(w.dataset.wish), p = byId(w.dataset.wish);
    toast(`<img src="${p.imgs[0]}" alt=""><div><small>${on ? 'Saved to wishlist' : 'Removed from wishlist'}</small>${p.name}</div>${on ? '<a href="wishlist.html">View</a>' : ''}`);
    if (document.body.dataset.page === 'wishlist') renderWishlist();
    return;
  }
  const open = e.target.closest('[data-open]');
  if (open) { const t = document.getElementById(open.dataset.open); t?.classList.add('is-open'); $('input', t)?.focus(); return; }
  const close = e.target.closest('[data-close]');
  if (close) { close.closest('.is-open')?.classList.remove('is-open'); return; }
  if (e.target.classList.contains('search-panel')) e.target.classList.remove('is-open');
  const step = e.target.closest('[data-step]');
  if (step) {
    const input = $('input', step.closest('.qty'));
    input.value = Math.max(1, Math.min(9, +input.value + +step.dataset.step));
    input.dispatchEvent(new Event('change', { bubbles: true }));
  }
  const tab = e.target.closest('.tabs button');
  if (tab) {
    $$('button', tab.parentElement).forEach(b => b.classList.toggle('is-active', b === tab));
    const target = document.getElementById(tab.parentElement.dataset.target);
    if (target) { target.dataset.products = tab.dataset.spec; renderGrids(); }
  }
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') $$('.is-open').forEach(x => x.classList.remove('is-open')); });

/* ---------- Page: PLP ---------- */
function initShop() {
  const cat = qs('cat');
  const c = CATEGORIES[cat];
  const sortSel = $('#sort');
  const grid = $('#plp-grid');
  let sub = 'All';
  if (c) {
    $('#plp-script').textContent = c.script;
    $('#plp-title').textContent = c.name;
    $('#plp-crumb').textContent = c.name;
    $('#plp-hero-img').src = c.hero;
    document.title = `${c.name} — Maaya by Vismaya`;
  }
  const subs = c ? c.subs : Object.values(CATEGORIES).map(x => x.name);
  $('#subcats').innerHTML = ['All', ...subs].map(s => `<button class="chip ${s === 'All' ? 'is-active' : ''}" data-sub="${s}">${s}</button>`).join('');
  const draw = () => {
    let list = PRODUCTS.filter(p => !c || p.cat === cat);
    if (sub !== 'All') list = list.filter(p => c ? p.sub === sub : CATEGORIES[p.cat].name === sub);
    const s = sortSel.value;
    if (s === 'low') list = [...list].sort((a, b) => a.price - b.price);
    if (s === 'high') list = [...list].sort((a, b) => b.price - a.price);
    if (s === 'rated') list = [...list].sort((a, b) => b.rating - a.rating);
    if (s === 'new') list = [...list].sort((a, b) => (b.tag === 'New') - (a.tag === 'New'));
    const cards = list.map(cardHTML);
    if (cards.length > 5) cards.splice(5, 0, `<a class="promo-tile" href="shop.html"><span class="script">the gift edit</span><h3>Wrapped in our signature paper</h3><p>Every order ships in the Maaya box with a handwritten note.</p><span class="link-line">Shop gifts ${I.arrow}</span></a>`);
    grid.innerHTML = cards.join('');
    $('#plp-count').textContent = `${list.length} pieces`;
    $('#plp-progress').style.width = '100%';
    $('#plp-shown').textContent = `Showing ${list.length} of ${list.length}`;
  };
  $('#subcats').addEventListener('click', e => {
    const b = e.target.closest('[data-sub]'); if (!b) return;
    sub = b.dataset.sub; $$('#subcats .chip').forEach(x => x.classList.toggle('is-active', x === b)); draw();
  });
  sortSel.addEventListener('change', draw);
  $$('.view-toggle button').forEach(b => b.addEventListener('click', () => {
    $$('.view-toggle button').forEach(x => x.classList.toggle('is-active', x === b));
    grid.className = 'grid ' + b.dataset.cols;
  }));
  // mobile filter drawer reuses the sidebar markup
  $('#filter-drawer-body').innerHTML = $('.filters').innerHTML;
  draw();
}

/* ---------- Page: PDP ---------- */
function initProduct() {
  const p = byId(qs('id')) || byId('n03');
  const c = CATEGORIES[p.cat];
  document.title = `${p.name} — Maaya by Vismaya`;
  $('#pd-crumb-cat').textContent = c.name; $('#pd-crumb-cat').href = `shop.html?cat=${p.cat}`;
  $('#pd-crumb').textContent = p.name;
  $('#pd-name').textContent = p.name;
  $('#pd-cat').textContent = `${c.name} · ${p.sub}`;
  $('#pd-rating').innerHTML = `<span class="stars">★★★★★</span> ${p.rating} · <a class="text-link" href="#reviews">${p.reviews} reviews</a>`;
  $('#pd-price').innerHTML = `${inr(p.price)}${p.mrp ? `<span class="price-mrp">${inr(p.mrp)}</span><span class="price-off">Save ${off(p)}%</span>` : ''}`;
  $('#pd-tag').innerHTML = p.tag ? `<span class="tag ${p.tag === 'New' ? 'tag--new' : 'tag--best'}">${p.tag}</span>` : '';
  if (p.cat !== 'rings') $('#pd-size').remove();
  $('#pd-spec').textContent = {
    necklaces: 'Chain length 40 cm + 5 cm extender · Pendant 14 mm',
    earrings: 'Hoop diameter 18 mm · Hinged snap closure · Sold as a pair',
    rings: 'Band width 3 mm · Available in US 5–9 and adjustable',
    handchains: 'Wrist 16 cm + 4 cm extender · Lobster clasp',
  }[p.cat];
  const main = $('#pd-main');
  const imgs = [...p.imgs];
  while (imgs.length < 4) imgs.push(PRODUCTS.find(x => x.cat === p.cat && x.id !== p.id && !imgs.includes(x.imgs[1]))?.imgs[1] || p.imgs[0]);
  main.src = imgs[0]; main.alt = p.name;
  $('#pd-thumbs').innerHTML = imgs.map((src, i) => `<button class="${i ? '' : 'is-active'}" data-src="${src}"><img src="${src}" alt=""></button>`).join('');
  $('#pd-thumbs').addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return;
    main.src = b.dataset.src; $$('#pd-thumbs button').forEach(x => x.classList.toggle('is-active', x === b));
  });
  $$('input[name=finish]').forEach(r => r.addEventListener('change', () => { $('#pd-finish').textContent = r.value; }));
  $$('input[name=size]').forEach(r => r.addEventListener('change', () => { $('#pd-size-val').textContent = r.value; }));
  const add = () => addToCart(p.id, +$('#pd-qty').value, $('input[name=finish]:checked').value, $('input[name=size]:checked')?.value);
  $('#pd-add').addEventListener('click', add);
  $('#sticky-add').addEventListener('click', add);
  $('#pd-wish').dataset.wish = p.id;
  $('#pd-wish').classList.toggle('is-active', wish.includes(p.id));
  $('#related').dataset.products = `related:${p.id}`;
  // complete the look: one piece from each other category
  const look = Object.keys(CATEGORIES).filter(k => k !== p.cat).map(k => PRODUCTS.find(x => x.cat === k && x.tag === 'Bestseller'));
  $('#look').innerHTML = look.map(x => `<div class="look__item"><a href="product.html?id=${x.id}"><img src="${x.imgs[0]}" alt=""></a><label class="check"><input type="checkbox" checked> <span>${x.name}<br><b>${inr(x.price)}</b></span></label></div>`).join('');
  $('#look-total').textContent = inr(look.reduce((a, x) => a + x.price, p.price));
  $('#look-add').addEventListener('click', () => { look.forEach(x => addToCart(x.id)); addToCart(p.id); });
  $('#pincode-check').addEventListener('click', () => {
    $('#pincode-result').innerHTML = `${I.check} Delivery by <b>&nbsp;Thu, 6 Nov&nbsp;</b> to 682036 · Cash on delivery available`;
  });
  // sticky add-to-bag after the main buy button scrolls away
  $('#sticky-img').src = p.imgs[0]; $('#sticky-name').textContent = p.name; $('#sticky-price').textContent = inr(p.price);
  new IntersectionObserver(([en]) => $('.sticky-atc').classList.toggle('is-visible', !en.isIntersecting && en.boundingClientRect.top < 0)).observe($('#pd-add'));
}

/* ---------- Page: Cart ---------- */
const lineTotal = l => byId(l.id).price * l.qty;
function totals(opts = {}) {
  const sub = cart.reduce((a, l) => a + lineTotal(l), 0);
  const mrp = cart.reduce((a, l) => a + (byId(l.id).mrp || byId(l.id).price) * l.qty, 0);
  const coupon = opts.coupon ? Math.round(sub * 0.1) : 0;
  const ship = sub >= FREE_SHIP || !sub ? 0 : 79;
  const gift = opts.gift ? 99 : 0;
  const extra = opts.extra || 0;
  return { sub, mrp, save: mrp - sub, coupon, ship, gift, extra, total: sub - coupon + ship + gift + extra };
}
let couponOn = true, giftOn = false;
function renderCart() {
  const wrap = $('#cart-wrap');
  if (!cart.length) {
    wrap.innerHTML = `<div class="empty"><img class="empty__icon" src="assets/img/brand/logo-seal-brown.svg" alt=""><h2>Your bag is waiting</h2><p>Find a piece that feels like you.</p><a class="btn" href="shop.html">Start shopping</a></div>`;
    $('#cart-reco-title').textContent = 'Popular right now';
    return;
  }
  const t = totals({ coupon: couponOn, gift: giftOn });
  const left = FREE_SHIP - t.sub;
  wrap.innerHTML = `
  <div class="cart">
    <div>
      <div class="ship-bar">${left > 0 ? `You're <b>${inr(left)}</b> away from free shipping` : `${I.truck.replace('class="icon"', 'class="icon" style="vertical-align:-5px;margin-right:6px"')} Yay! Your order ships <b>free</b>.`}
        <div class="progress"><span style="width:${Math.min(100, t.sub / FREE_SHIP * 100)}%"></span></div></div>
      <div class="line-head"><span>Product</span><span>Quantity</span><span>Total</span></div>
      ${cart.map((l, i) => { const p = byId(l.id); return `
      <div class="line">
        <div class="line__prod">
          <a href="product.html?id=${p.id}"><img src="${p.imgs[0]}" alt=""></a>
          <div>
            <a href="product.html?id=${p.id}" class="line__name">${p.name}</a>
            <div class="line__meta">${l.finish} finish${l.size ? ` · Size ${l.size}` : ''} · ${inr(p.price)}</div>
            <div class="line__actions"><button data-move="${i}">Move to wishlist</button><button data-remove="${i}">Remove</button></div>
          </div>
        </div>
        <div class="line__qty"><div class="qty qty--sm"><button data-step="-1" aria-label="Decrease">−</button><input value="${l.qty}" data-line="${i}" aria-label="Quantity"><button data-step="1" aria-label="Increase">+</button></div></div>
        <div class="line__total">${inr(lineTotal(l))}${p.mrp ? `<br><span class="price-mrp">${inr(p.mrp * l.qty)}</span>` : ''}</div>
      </div>`; }).join('')}
      <div class="gift ${giftOn ? 'is-on' : ''}">
        <div class="gift__icon">${I.gift}</div>
        <div><h4>Make it a gift</h4><p>Signature Maaya wrap, ribbon &amp; a handwritten note — ₹99</p></div>
        <label class="toggle"><input type="checkbox" id="gift-toggle" ${giftOn ? 'checked' : ''}><span></span></label>
        <textarea class="input" placeholder="Write your note… (we'll handwrite it)"></textarea>
      </div>
      <a href="shop.html" class="link-line" style="margin-top:30px">${I.back} Continue shopping</a>
    </div>
    <aside class="summary">
      <h3>Order summary</h3>
      <div class="summary__row"><span>Bag total (MRP)</span><span>${inr(t.mrp)}</span></div>
      ${t.save ? `<div class="summary__row is-discount"><span>Discount on MRP</span><span>− ${inr(t.save)}</span></div>` : ''}
      ${couponOn ? `<div class="coupon-applied"><span><b>MAAYA10</b> applied · you save ${inr(t.coupon)}</span><button class="text-link" id="coupon-remove">Remove</button></div>` :
      `<form class="coupon" id="coupon-form"><input placeholder="Coupon code" value="MAAYA10"><button>Apply</button></form>`}
      ${couponOn ? `<div class="summary__row is-discount"><span>Coupon discount</span><span>− ${inr(t.coupon)}</span></div>` : ''}
      ${giftOn ? `<div class="summary__row"><span>Gift wrap</span><span>${inr(99)}</span></div>` : ''}
      <div class="summary__row"><span>Shipping</span><span>${t.ship ? inr(t.ship) : 'Free'}</span></div>
      <div class="summary__total"><span>Total <small class="muted">(incl. GST)</small></span><strong>${inr(t.total)}</strong></div>
      <p class="hint" style="margin:4px 0 22px">You save ${inr(t.save + t.coupon)} on this order</p>
      <a class="btn btn--block" href="checkout.html">${I.lock} Proceed to checkout</a>
      <div class="trust"><span>${I.shield} Secure payments</span><span>${I.refresh} 7-day exchange</span><span>${I.drop} Waterproof</span></div>
    </aside>
  </div>`;
}
function initCart() {
  renderCart();
  const wrap = $('#cart-wrap');
  wrap.addEventListener('click', e => {
    const rm = e.target.closest('[data-remove]'), mv = e.target.closest('[data-move]');
    if (rm) { cart.splice(+rm.dataset.remove, 1); saveCart(); renderCart(); }
    if (mv) { const l = cart.splice(+mv.dataset.move, 1)[0]; if (!wish.includes(l.id)) wish.push(l.id); saveWish(); saveCart(); renderCart(); toast(`<div><small>Moved</small>Saved to your wishlist</div>`); }
    if (e.target.id === 'coupon-remove') { couponOn = false; renderCart(); }
  });
  wrap.addEventListener('submit', e => { e.preventDefault(); couponOn = true; renderCart(); });
  wrap.addEventListener('change', e => {
    if (e.target.dataset.line) { cart[+e.target.dataset.line].qty = +e.target.value || 1; saveCart(); renderCart(); }
    if (e.target.id === 'gift-toggle') { giftOn = e.target.checked; renderCart(); }
  });
}

/* ---------- Page: Wishlist ---------- */
function renderWishlist() {
  const el = $('#wish-grid');
  $('#wish-count').textContent = `${wish.length} saved piece${wish.length === 1 ? '' : 's'}`;
  if (!wish.length) {
    el.outerHTML = `<div id="wish-grid" class="empty"><img class="empty__icon" src="assets/img/brand/motif-brown.svg" alt=""><h2>Nothing saved yet</h2><p>Tap the heart on any piece to keep it here.</p><a class="btn" href="shop.html">Explore the collection</a></div>`;
    return;
  }
  el.className = 'grid grid--4';
  el.innerHTML = wish.map(byId).map(p => cardHTML(p).replace('</article>', `
    <div class="wish-actions"><button class="btn btn--sm" data-add="${p.id}">Move to bag</button><button class="icon-btn" data-wish="${p.id}" aria-label="Remove">${I.trash}</button></div></article>`)).join('');
}

/* ---------- Page: Checkout ---------- */
function addrCard(a, checked) {
  return `<label class="addr"><input type="radio" name="addr" value="${a.id}" ${checked ? 'checked' : ''}>
    <div class="addr__card">
      <span class="addr__name">${a.name} <span class="addr__type">${a.type}</span>${a.default ? '<small class="hint">Default</small>' : ''}</span>
      <span>${a.line1}</span><span>${a.line2}</span><span>${a.city}, ${a.state} — ${a.pin}</span><span>${a.phone}</span>
      <span class="addr__links"><a href="#" data-edit-addr>Edit</a><a href="#">Remove</a></span>
    </div></label>`;
}
function initAddressForm() {
  const form = $('#addr-form');
  $$('[data-addr-new], [data-edit-addr]').forEach(b => b.addEventListener('click', e => { e.preventDefault(); form.classList.add('is-open'); form.scrollIntoView({ behavior: 'smooth', block: 'center' }); }));
  $('[data-addr-cancel]')?.addEventListener('click', () => form.classList.remove('is-open'));
  $('#addr-locate')?.addEventListener('click', e => {
    e.preventDefault();
    Object.entries({ pin: '682036', city: 'Kochi', state: 'Kerala' }).forEach(([k, v]) => { form.querySelector(`[name=${k}]`).value = v; });
  });
  form.addEventListener('submit', e => {
    e.preventDefault();
    const f = Object.fromEntries(new FormData(form));
    const a = { id: 'a' + Date.now(), type: f.type, name: f.name, phone: '+91 ' + f.phone, line1: f.line1, line2: [f.line2, f.landmark].filter(Boolean).join(', '), city: f.city, state: f.state, pin: f.pin };
    $('#addr-list').insertAdjacentHTML('afterbegin', addrCard(a, true));
    form.reset(); form.classList.remove('is-open');
    toast(`<div><small>Address saved</small>${a.type} · ${a.city}</div>`);
  });
}
function initCheckout() {
  $('#addr-list').innerHTML = DEMO_ADDRESSES.map((a, i) => addrCard(a, !i)).join('');
  initAddressForm();
  const draw = () => {
    const ship = $('input[name=ship]:checked').value === 'express' ? 149 : 0;
    const cod = $('input[name=pay]:checked').value === 'cod' ? 49 : 0;
    const t = totals({ coupon: true, extra: ship + cod });
    $('#co-items').innerHTML = cart.map(l => { const p = byId(l.id); return `
      <div class="co-item"><div class="co-item__img"><img src="${p.imgs[0]}" alt=""><b>${l.qty}</b></div>
      <div><div class="co-item__name">${p.name}</div><small>${l.finish}${l.size ? ` · Size ${l.size}` : ''}</small></div><span>${inr(lineTotal(l))}</span></div>`; }).join('');
    $('#co-totals').innerHTML = `
      <div class="summary__row"><span>Subtotal</span><span>${inr(t.sub)}</span></div>
      <div class="summary__row is-discount"><span>Coupon (MAAYA10)</span><span>− ${inr(t.coupon)}</span></div>
      <div class="summary__row"><span>Shipping</span><span>${ship ? inr(ship) : 'Free'}</span></div>
      ${cod ? `<div class="summary__row"><span>COD handling</span><span>${inr(cod)}</span></div>` : ''}
      <div class="summary__total"><span>Total <small class="muted">(incl. GST)</small></span><strong>${inr(t.total)}</strong></div>`;
    $('#pay-btn').innerHTML = `${I.lock} ${cod ? 'Place order' : 'Pay ' + inr(t.total)}`;
    const a = $('input[name=addr]:checked')?.closest('.addr');
    if (a) $('#co-deliver').innerHTML = `${I.pin}<span>Delivering to <b>${a.querySelector('.addr__name').childNodes[0].textContent.trim()}</b>, ${a.querySelectorAll('.addr__card > span')[3].textContent}</span>`;
  };
  document.addEventListener('change', e => { if (['ship', 'pay', 'addr'].includes(e.target.name)) draw(); });
  draw();
}

/* ---------- Boot ---------- */
document.addEventListener('DOMContentLoaded', () => {
  const h = $('#site-header'), f = $('#site-footer');
  if (h) h.outerHTML = headerHTML();
  if (f) f.outerHTML = footerHTML();
  $$('[data-icon]').forEach(el => { el.innerHTML = I[el.dataset.icon] + el.innerHTML; });
  $$('[data-google]').forEach(el => { el.insertAdjacentHTML('afterbegin', GOOGLE_SVG); });
  const page = document.body.dataset.page;
  if (page === 'shop') initShop();
  if (page === 'product') initProduct();
  if (page === 'cart') initCart();
  if (page === 'wishlist') renderWishlist();
  if (page === 'checkout') initCheckout();
  if (page === 'addresses') initAddressForm();
  renderGrids();
  updateCounts();
  const header = $('.header');
  if (header) addEventListener('scroll', () => header.classList.toggle('is-scrolled', scrollY > 10), { passive: true });
});
