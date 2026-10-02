# KraftKit

A multi-page online store for art, pottery and craft supply kits. KraftKit helps hobbyists find the right kit for their project through a short questionnaire, then lets them browse, save and buy.

Built with plain HTML, CSS and vanilla JavaScript. There is no build step and no backend.

## Features

- **Product browsing:** search by name, sort by price, and open a detail page for each kit.
- **Cart:** add items from any page, change quantities, remove items, see running totals and a live item count in the header. The cart is kept between visits.
- **Wishlist:** heart any product to save it, then view your saved items from the header.
- **Find-a-Kit questionnaire:** four toggles (expensive, time taking, time friendly, delicate) narrow the catalogue to a "Recommended for You" list.
- **Login / Signup:** email and password validation with a tab switch between the two modes.
- **About and Contact pages:** contact form with confirmation, plus collapsible FAQs.
- **Responsive layout:** works on desktop and mobile widths.

## Pages

| File | Purpose |
|---|---|
| `Home.html` | Hero banner and featured products |
| `Shop.html` | All products, search, sort, wishlist and recommendation views |
| `Details.html?id=N` | Single product page with Add to Cart, Buy Now and Wishlist |
| `Bill.html` | Shopping cart and checkout |
| `Questionnaire.html` | Preference toggles that filter the shop |
| `Login.html` | Login, signup and logout |
| `About.html` | About KraftKit |
| `Contact.html` | Contact form and FAQs |

## Project structure

```
KraftKit/
├── Home.html, Shop.html, Details.html, Bill.html,
│   Questionnaire.html, Login.html, About.html, Contact.html
├── css/
│   └── style.css      # theme and all page styles
├── js/
│   └── app.js         # product data, cart, wishlist, shared header/footer
├── Images/            # product photos, logo, icons
└── README.md
```

## Getting started

1. Download or clone this folder.
2. Open `Home.html` in any modern browser. Double-clicking the file is enough.
3. For best results (and to avoid browser restrictions on local files), serve it locally instead:

   ```bash
   python3 -m http.server 8000
   # then visit http://localhost:8000/Home.html
   ```

An internet connection is needed for the icons (Font Awesome) and fonts (Google Fonts).

## How it works

`js/app.js` is loaded by every page. It:

- holds the product catalogue in the `P` array,
- injects the shared header and footer, so navigation is edited in one place,
- provides the cart, wishlist and toast-notification helpers,
- renders product cards, which every page reuses.

Each page then adds only its own small script for its specific behaviour.

### Stored data

State lives in the browser's `localStorage`:

| Key | Contents |
|---|---|
| `cart` | Product IDs mapped to quantities |
| `wish` | Wishlisted product IDs |
| `prefs` | Questionnaire answers |
| `users` / `user` | Registered accounts and the signed-in email |

Clearing site data in the browser resets everything.

### Questionnaire rules

Only toggles that are switched on filter the results:

- **Expensive** shows kits priced at $85 or more.
- **Time taking** shows slow projects, **Time friendly** shows quick ones. These two cannot both be on.
- **Delicate** shows kits flagged as delicate work.

## Customising

### Add or edit a product

Edit the `P` array at the top of `js/app.js`. Each row is:

```js
[id, 'Name', price, 'image-file', slow(0/1), delicate(0/1), 'Description']
```

Put the image in `Images/`. Every page picks up the change automatically.

### Change the theme

Colours are CSS variables at the top of `css/style.css` (`--cream`, `--terra`, `--orange`, `--rust`, and so on). Fonts are Red Hat Display for headings and DM Sans for body text.

## Known limitations

This is a front-end project, so some things are demonstrations only:

- **Accounts are not secure.** Passwords are stored in plain text in the browser. Do not use real passwords. A real version needs a backend with hashed passwords.
- **Checkout does not take payment.** It clears the cart and shows a thank-you message.
- **The contact form does not send email.** It only confirms on screen.
- **Forgot password** shows a message but does not send a reset link.
- Data is per browser and per device and is not shared between users.

## Possible next steps

- Connect a backend (login, orders, product database).
- Add a payment provider.
- Add product categories and filters.
- Make the footer's social links and legal pages real.

## Tech stack

HTML5, CSS3, vanilla JavaScript, Font Awesome 6, Google Fonts.
