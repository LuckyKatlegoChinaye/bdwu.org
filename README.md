# BDWU — Static Site (HTML/CSS/JS)

This repository contains a modern static website scaffold for the Botswana Diamond Workers Union (BDWU). It's plain HTML with Tailwind via CDN, minimal custom CSS, and a small JS helper.

Quick start (local):

1. Clone or copy the folder and open `index.html` in your browser.

2. For a better local dev experience serve the folder with a simple HTTP server (Python example):

```powershell
python -m http.server 8000
# then open http://localhost:8000
```

Forms: the join form includes `data-netlify="true"` and a `form-name` hidden field so it works with Netlify Forms when deployed. Locally the form won't be captured by Netlify — it's wired for demo and graceful local feedback.

Deploy:
- GitHub Pages: push the repository and enable Pages on the main branch.
- Netlify: connect the repo and Netlify will capture form submissions automatically.

Files:
- `index.html` — main site
- `styles.css` — minimal custom CSS
- `scripts.js` — mobile menu and small helpers
- `assets/` — logos and illustrations
 - `index.html` — main site
 - `styles.css` — minimal custom CSS
 - `scripts.js` — mobile menu and small helpers and Bootstrap validation
 - `assets/` — placeholder SVG assets
 - `images/` — photo assets (event and member photos)
 - `pdfs/` — important documents (e.g., `BDWU CONSTITUTION.pdf`, `BDMU logo.pdf`)

Next steps I can do for you:
- Add real branding and images (logo/svg/photography)
- Add a blog/news CMS integration (Netlify CMS / Forestry)
- Add multilingual support or accessibility audit

Notes about provided assets and next steps:
- I found many photos in the `images/` folder; I used `images/IMG-20251210-WA0003.jpg` as the header thumbnail. If you prefer a different image for the logo or hero, tell me which filename to use.
- The `pdfs/` folder contains `BDWU CONSTITUTION.pdf` and `BDMU logo.pdf`. I linked the constitution on the About and Privacy pages and linked the logo PDF from the header. I could convert the PDF logo to an inline image (SVG/PNG) if you supply a raster/logo version or want me to export one.
- I couldn't extract text from the PDF automatically in this environment. If you want constitution text added to the site, please upload a text copy or allow me to extract it after you confirm.

If you want me to continue, pick one:
- Replace placeholder hero with a specific image from `images/` (tell me the filename),
- Convert the PDF logo into a web-friendly PNG/SVG (upload an editable logo or allow me to rasterize), or
- Add JSON-LD structured data and an events/news feed.
