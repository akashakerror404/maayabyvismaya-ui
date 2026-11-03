# Maaya by Vismaya — Storefront UI (HTML/CSS prototype)

Static, clickable UI for the customer side of the store. No build step: open `screens.html` (index of all screens) or `index.html` in a browser.

## Screens
| File | Screen |
|---|---|
| `index.html` | Home |
| `shop.html` / `shop.html?cat=earrings` | Product listing (all / per category: `necklaces`, `earrings`, `rings`, `handchains`) |
| `product.html?id=n03` | Product detail (any product id from `assets/js/data.js`) |
| `cart.html` | Bag |
| `wishlist.html` | Wishlist |
| `checkout.html` | Checkout: saved addresses, add new address, delivery, Razorpay payment options |
| `order-success.html` | Order confirmed |
| `orders.html` | My orders + tracking |
| `addresses.html` | Saved addresses |
| `login.html` / `signup.html` | Sign in / Create account with Google |

## Structure
- `assets/css/style.css`: the whole design system. Brand tokens are at the top (`:root`).
- `assets/js/data.js`: demo product catalogue and addresses.
- `assets/js/app.js`: shared header and footer, product cards, and the demo bag and wishlist (kept in the browser's localStorage).
- `assets/img/brand/`: logo, wordmark, seal, ginkgo motif and pattern as vector SVGs taken from the brand book, in brown, blue and white versions.

## Brand
- Colours (from the brand book): Irish Coffee `#573722`, Powder Blue `#C1DBE8`, Marzipan `#F4DC96`, Best White `#FFFDFA`, Greenish Beige `#CACD7D`, Grace Lynn `#E5E6B5`.
- Type: Archivo is used for body text, as the brand book specifies. The brand display face "Birds of Paradise" isn't on Google Fonts, so **Allura** stands in for it and **Cormorant Garamond** is used for headlines. Once the client licenses the brand font, swap it in through `--f-script` in `style.css`.

## Before going live
- **Product photos are placeholders** downloaded from the reference stores (Jessa, 24th & Gold). They belong to those brands. They're fine for showing the design to the client, but replace them with Maaya's own shoot before launch.
- Product names, prices, reviews, order numbers and the customer "Ananya Menon" are all sample content.
