# AlphaPep LLC — Static Site (GitHub Pages Ready)

**Lab supplies only. No peptides or regulated chemicals.**

## Structure
- `index.html` — Home / hero
- `products.html` — Product cards with “Add to Quote” (stores in localStorage)
- `contact.html` — Shows quote cart and builds a mailto email (no backend needed)
- `about.html`, `privacy.html`, `404.html`
- `assets/css/styles.css` — Styling (with #154573 primary color)
- `assets/js/main.js` — Quote cart logic
- `assets/img/` — Logo, icons, hero background
- `site.webmanifest`, `robots.txt`, `sitemap.xml`

## Update Contact Email
Find `sales@example.com` in:
- `assets/js/main.js` (mailto target)
- `contact.html` + `footer()`
Replace with your real email, e.g. `sales@alphapep.com`

## Deploy on GitHub Pages
1. Create a repo and upload these files to the repo root.
2. In **Settings → Pages**, choose `main` branch, `/ (root)` and **Save**.
3. Optional: add a `CNAME` file at repo root with your domain (e.g., `www.alphapep.com`).

## Point your domain
Create DNS records at your registrar:
- A records to GitHub Pages:
  - 185.199.108.153
  - 185.199.109.153
  - 185.199.110.153
  - 185.199.111.153
- (If using `www`) CNAME: `www` → `YOUR-USERNAME.github.io`

## Notes
- This is a static site—no server code.
- The quote system uses localStorage and email. For advanced forms later, you can add Formspree or Netlify Forms.
