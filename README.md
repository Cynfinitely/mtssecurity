# MTS Security Website

Static one-page site for MTS Security (Augsburg / Bavaria), hosted on [Vercel](https://vercel.com) at [mts-sicherheit.com](https://www.mts-sicherheit.com).

## Local preview

Open `index.html` in a browser, or from this folder:

```bash
npx serve .
```

The contact form only works when the `/api/send-email` function is running (Vercel production/preview, or `vercel dev`).

## Deploy

1. Push to `master` (Vercel Git integration deploys automatically).
2. In the Vercel project, set environment variables:
   - `EMAIL_USER` – SMTP mailbox (Hostinger)
   - `EMAIL_PASSWORD` – SMTP password
3. Custom domain and `www` redirect are configured in the Vercel dashboard.

## Legal pages

`impressum.html` and `datenschutz.html` contain placeholders for register data, managing director, and VAT ID. Replace the bracketed fields before treating them as final.
