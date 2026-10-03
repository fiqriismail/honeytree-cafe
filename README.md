# Honey Tree

The Honey Tree website, featuring our cheesecakes, celebration cakes, shop information, and WhatsApp enquiries.

## Project structure

- `index.html` — website content.
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

## Sites hosting

Run `node build.mjs` before publishing with Sites. This copies the website files into an ignored `dist/` deployment folder. Edit the source files at the repository root; generated deployment files are not committed.

## Images

All photographs are original images captured by the Honey Tree owner. The website uses no Unsplash or stock photographs. The Honey Tree logo is supplied by the owner.
