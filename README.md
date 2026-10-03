# Honey Tree

The Honey Tree website, featuring our cheesecakes, celebration cakes, shop information, and WhatsApp enquiries.

## Project structure

- `index.html` — website content.
- `menu/index.html` — the QR menu, with three cheesecakes and a WhatsApp preorder link.
- `menu/menu.css` — menu page styling.
- `style.css` — styles and responsive layouts.
- `script.js` — website interactions and WhatsApp enquiries.
- `assets/` — website photographs and the Honey Tree logo.
- `build.mjs` — prepares the files for Sites hosting.
- `.openai/hosting.json` — Sites hosting configuration.

## Local preview

Serve the repository root with a local HTTP server:

```sh
python3 -m http.server 8000
```

Open http://localhost:8000 in your browser. No build step is required.

## QR menu

The customer menu is at `/menu/`. Use `https://honeytree.cafe/menu/` for the printed QR code after deployment. To add an item, copy a `.menu-item` entry in `menu/index.html` and update its photo, name, description, and price. Keep the homepage menu details in sync.

## Sites hosting

Run `node build.mjs` before publishing with Sites. This copies the website files into an ignored `dist/` deployment folder. Edit the source files at the repository root; generated deployment files are not committed.

## Images

All photographs are original images captured by the Honey Tree owner. The website uses no Unsplash or stock photographs. The Honey Tree logo is supplied by the owner.
