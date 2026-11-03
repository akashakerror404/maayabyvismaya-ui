/* Maaya by Vismaya — demo catalogue
   Images are placeholders sourced from the client's reference stores.
   Replace with Maaya's own product shoot before going live. */

const IMG = 'assets/img/products/';
const pics = (key, n = 3) => Array.from({ length: n }, (_, i) => `${IMG}${key}-${i + 1}.jpg`);

const CATEGORIES = {
  necklaces: { name: 'Necklaces', script: 'close to the heart', subs: ['Pendants', 'Layering chains', 'Pearl', 'Cord'], hero: `${IMG}necklace-03-2.jpg` },
  earrings: { name: 'Earrings', script: 'a little light', subs: ['Hoops', 'Huggies', 'Studs', 'Drops', 'Ear cuffs'], hero: `${IMG}earrings-02-2.jpg` },
  rings: { name: 'Rings', script: 'yours to keep', subs: ['Statement', 'Stackable', 'Adjustable', 'Signet'], hero: `${IMG}rings-07-2.jpg` },
  handchains: { name: 'Hand Chains', script: 'grace in motion', subs: ['Hand chains', 'Bracelets'], hero: `${IMG}bracelets-06-3.jpg` },
};

const PRODUCTS = [
  // Necklaces
  { id: 'n01', cat: 'necklaces', sub: 'Cord', name: 'Ripple Cord Necklace', price: 1499, mrp: 1799, imgs: pics('necklace-01'), tag: 'New', rating: 4.8, reviews: 42 },
  { id: 'n02', cat: 'necklaces', sub: 'Layering chains', name: 'Tara Station Necklace', price: 1299, imgs: pics('necklace-02'), rating: 4.7, reviews: 88 },
  { id: 'n03', cat: 'necklaces', sub: 'Pendants', name: 'Halo Circle Necklace', price: 1599, imgs: pics('necklace-03'), tag: 'Bestseller', rating: 4.9, reviews: 214 },
  { id: 'n04', cat: 'necklaces', sub: 'Pearl', name: 'Moti Pearl Drop Necklace', price: 1699, mrp: 1999, imgs: pics('necklace-04'), rating: 4.8, reviews: 131 },
  { id: 'n05', cat: 'necklaces', sub: 'Pendants', name: 'Gulabi Cascade Necklace', price: 1899, imgs: pics('necklace-05'), tag: 'New', rating: 4.6, reviews: 19 },
  { id: 'n06', cat: 'necklaces', sub: 'Pendants', name: 'Ira Cascade Necklace', price: 1799, imgs: pics('necklace-06'), rating: 4.7, reviews: 56 },
  { id: 'n07', cat: 'necklaces', sub: 'Pendants', name: 'Panna Hexa Necklace', price: 1499, imgs: pics('necklace-07'), tag: 'Bestseller', rating: 4.9, reviews: 167 },
  { id: 'n08', cat: 'necklaces', sub: 'Pendants', name: 'Noor Hexa Necklace', price: 1499, imgs: pics('necklace-08'), rating: 4.8, reviews: 98 },
  { id: 'n09', cat: 'necklaces', sub: 'Pearl', name: 'Goa Palm Pearl Necklace', price: 1999, mrp: 2399, imgs: pics('necklace-09'), rating: 4.7, reviews: 37 },
  { id: 'n10', cat: 'necklaces', sub: 'Pendants', name: 'Bindu Crystal Necklace', price: 1399, imgs: pics('necklace-10'), rating: 4.8, reviews: 74 },
  // Earrings
  { id: 'e01', cat: 'earrings', sub: 'Hoops', name: 'Ashru Teardrop Hoops', price: 1399, imgs: pics('earrings-01'), tag: 'Bestseller', rating: 4.9, reviews: 302 },
  { id: 'e02', cat: 'earrings', sub: 'Drops', name: 'Jhilmil Crystal Drop Hoops', price: 1299, imgs: pics('earrings-02'), rating: 4.8, reviews: 121 },
  { id: 'e03', cat: 'earrings', sub: 'Huggies', name: 'Rani Pavé Huggies', price: 1199, mrp: 1499, imgs: pics('earrings-03'), tag: 'New', rating: 4.7, reviews: 45 },
  { id: 'e04', cat: 'earrings', sub: 'Hoops', name: 'Everyday Dome Hoops', price: 999, imgs: pics('earrings-04'), tag: 'Bestseller', rating: 4.9, reviews: 486 },
  { id: 'e05', cat: 'earrings', sub: 'Hoops', name: 'Chandni Charm Hoops', price: 1299, imgs: pics('earrings-05'), rating: 4.8, reviews: 77 },
  { id: 'e06', cat: 'earrings', sub: 'Hoops', name: 'Lehar Wave Hoops', price: 1199, imgs: pics('earrings-06'), rating: 4.6, reviews: 33 },
  { id: 'e07', cat: 'earrings', sub: 'Studs', name: 'Dil Sculpted Studs', price: 899, imgs: pics('earrings-07'), tag: 'New', rating: 4.7, reviews: 28 },
  { id: 'e08', cat: 'earrings', sub: 'Drops', name: 'Moti Pearl Drops', price: 1399, imgs: pics('earrings-08'), rating: 4.9, reviews: 143 },
  { id: 'e09', cat: 'earrings', sub: 'Huggies', name: 'Tara Crystal Huggies', price: 1099, imgs: pics('earrings-09'), rating: 4.8, reviews: 92 },
  { id: 'e10', cat: 'earrings', sub: 'Drops', name: 'Oas Crystal Drops', price: 1299, mrp: 1599, imgs: pics('earrings-10'), rating: 4.7, reviews: 51 },
  { id: 'e11', cat: 'earrings', sub: 'Ear cuffs', name: 'Bel Vine Ear Cuff', price: 799, imgs: pics('bracelets-10'), rating: 4.6, reviews: 24 },
  // Rings
  { id: 'r01', cat: 'rings', sub: 'Statement', name: 'Halo Solitaire Ring', price: 1199, imgs: pics('rings-01'), tag: 'Bestseller', rating: 4.9, reviews: 188 },
  { id: 'r02', cat: 'rings', sub: 'Adjustable', name: 'Nadi Wave Ring', price: 1099, imgs: pics('rings-02'), rating: 4.7, reviews: 64 },
  { id: 'r03', cat: 'rings', sub: 'Statement', name: 'Mitti Stone Cuff Ring', price: 1299, imgs: pics('rings-03'), tag: 'New', rating: 4.8, reviews: 22 },
  { id: 'r04', cat: 'rings', sub: 'Statement', name: 'Lehar Dome Ring', price: 1399, imgs: pics('rings-04'), rating: 4.8, reviews: 71 },
  { id: 'r05', cat: 'rings', sub: 'Stackable', name: 'Forever Band', price: 899, imgs: pics('rings-05'), tag: 'Bestseller', rating: 4.9, reviews: 355 },
  { id: 'r06', cat: 'rings', sub: 'Adjustable', name: 'Naag Swirl Ring', price: 1299, mrp: 1599, imgs: pics('rings-06'), rating: 4.7, reviews: 40 },
  { id: 'r07', cat: 'rings', sub: 'Adjustable', name: 'Sitara Starfish Ring', price: 1199, imgs: pics('rings-07'), rating: 4.8, reviews: 59 },
  { id: 'r08', cat: 'rings', sub: 'Stackable', name: 'Akash Starry Dome Ring', price: 1299, imgs: pics('rings-08'), rating: 4.8, reviews: 83 },
  { id: 'r09', cat: 'rings', sub: 'Statement', name: 'Jaali Lattice Ring', price: 1399, imgs: pics('rings-09'), tag: 'New', rating: 4.6, reviews: 17 },
  { id: 'r10', cat: 'rings', sub: 'Signet', name: 'Maaya Signet Ring', price: 1499, imgs: pics('rings-10'), rating: 4.9, reviews: 126 },
  // Hand chains
  { id: 'h01', cat: 'handchains', sub: 'Hand chains', name: 'Kalai Crystal Hand Chain', price: 1499, imgs: pics('bracelets-01'), tag: 'Bestseller', rating: 4.9, reviews: 97 },
  { id: 'h02', cat: 'handchains', sub: 'Hand chains', name: 'Aarohi Hand Chain', price: 1299, imgs: pics('bracelets-02', 2), rating: 4.7, reviews: 41 },
  { id: 'h03', cat: 'handchains', sub: 'Hand chains', name: 'Mehendi Drop Hand Chain', price: 1399, imgs: pics('bracelets-03', 2), rating: 4.8, reviews: 36 },
  { id: 'h04', cat: 'handchains', sub: 'Hand chains', name: 'Sandhya Hand Chain', price: 1599, mrp: 1899, imgs: pics('bracelets-04'), tag: 'New', rating: 4.8, reviews: 18 },
  { id: 'h05', cat: 'handchains', sub: 'Hand chains', name: 'Usha Dewdrop Hand Chain', price: 1499, imgs: pics('bracelets-05'), rating: 4.7, reviews: 29 },
  { id: 'h06', cat: 'handchains', sub: 'Hand chains', name: 'Raat Starlit Hand Chain', price: 1699, imgs: pics('bracelets-06'), rating: 4.9, reviews: 63 },
  { id: 'h07', cat: 'handchains', sub: 'Hand chains', name: 'Saanjh Lariat Hand Chain', price: 1399, imgs: pics('bracelets-07'), rating: 4.6, reviews: 21 },
  { id: 'h08', cat: 'handchains', sub: 'Hand chains', name: 'Kiran Bar Hand Chain', price: 1299, imgs: pics('bracelets-08'), rating: 4.7, reviews: 26 },
  { id: 'h09', cat: 'handchains', sub: 'Bracelets', name: 'Anvi Ring Hand Chain', price: 1599, imgs: pics('bracelets-09'), rating: 4.8, reviews: 44 },
];

const DEMO_ADDRESSES = [
  { id: 'a1', type: 'Home', name: 'Ananya Menon', phone: '+91 98470 12345', line1: 'Flat 4B, Pearl Residency', line2: 'Panampilly Nagar, Near Avenue Road', city: 'Kochi', state: 'Kerala', pin: '682036', default: true },
  { id: 'a2', type: 'Work', name: 'Ananya Menon', phone: '+91 98470 12345', line1: '7th Floor, Lulu Cyber Tower', line2: 'Infopark Phase 1, Kakkanad', city: 'Kochi', state: 'Kerala', pin: '682042' },
];
