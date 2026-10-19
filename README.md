# MTS Security Website

Static site for MTS Security (Augsburg / Bavaria), hosted on [Vercel](https://vercel.com) at [mts-sicherheit.com](https://www.mts-sicherheit.com). Pages are generated from `src/` by a small Node build with no dependencies.

## Local preview

```bash
npm install
npm run build        # writes dist/
npx serve dist
npm test             # SEO and link checks on the built site
```

Service pages and their copy live in `src/content/`. See [docs/seo.md](docs/seo.md) for adding pages and for the SEO checklist. The homepage design is frozen by the customer: [docs/agent-rules/homepage-design-freeze.md](docs/agent-rules/homepage-design-freeze.md).

The contact form only works when the `/api/send-email` function is running (Vercel production/preview, or `vercel dev`).

## Deploy

1. Push to `master` (Vercel Git integration runs `npm run build` and serves `dist/`, see `vercel.json`).
2. In the Vercel project, set environment variables:
   - `EMAIL_USER` – SMTP mailbox (Hostinger)
   - `EMAIL_PASSWORD` – SMTP password
3. Custom domain and `www` redirect are configured in the Vercel dashboard (the apex redirect should be 308).

## Legal pages

`src/pages/impressum.mjs` and `src/pages/datenschutz.mjs` contain placeholders for register data, managing director, and VAT ID. Replace the bracketed fields before treating them as final.
