# SEO guide

How the site is set up for search, how to add or change pages, and what has to happen outside the code. The site targets businesses and property managers in Augsburg and Bayern searching for security and facility services.

## Pages and target keywords

| URL                                   | Primary search intent                         |
| ------------------------------------- | --------------------------------------------- |
| `/`                                   | Sicherheitsdienst / Gebäudeservice Augsburg   |
| `/sicherheitsdienst-augsburg`         | Sicherheitsdienst Augsburg / Bayern (hub)     |
| `/objektschutz-augsburg`              | Objektschutz, Baustellenbewachung Augsburg    |
| `/veranstaltungsschutz-augsburg`      | Sicherheitsdienst Veranstaltung, Ordnerdienst |
| `/personenschutz-augsburg`            | Personenschutz Augsburg                       |
| `/empfangsdienst-augsburg`            | Empfangsdienst, Pfortendienst, Doorman        |
| `/sicherheitsdienst-asylunterkuenfte` | Sicherheitsdienst Asyl-/Flüchtlingsunterkunft |
| `/gebaeudeservice-augsburg`           | Gebäudeservice / Facility Service (hub)       |
| `/bueroreinigung-augsburg`            | Büroreinigung, Unterhaltsreinigung            |
| `/hausmeisterservice-augsburg`        | Hausmeisterservice Augsburg                   |
| `/treppenhausreinigung-augsburg`      | Treppenhausreinigung Augsburg                 |
| `/winterdienst-gartenpflege-augsburg` | Winterdienst, Gartenpflege Augsburg           |
| `/baureinigung-augsburg`              | Baureinigung, Bauendreinigung Augsburg        |
| `/impressum`, `/datenschutz`          | Legal                                         |

No city "doorway" pages (one near-identical page per town). Google treats them as spam. The service area is named in each page's copy and in the structured data instead.

## Where things live

- `src/content/site.mjs`: name, address, phone, email (NAP), service area, optional facts. Keep NAP identical to the Google Business Profile and directory listings.
- `src/content/security.mjs`, `src/content/facility.mjs`: one object per service page: title, description, H1, copy, tasks, FAQ, related pages, photo, `updated` date.
- `src/content/hubs.mjs`: the two category hubs and the shared "Warum MTS Security" points.
- `src/lib/schema.mjs`: JSON-LD (LocalBusiness, WebSite, WebPage, Service, BreadcrumbList, FAQPage, ItemList).
- `src/build.mjs`: page list, `sitemap.xml`, `robots.txt`, web manifest.
- `subpages.css`: styles for service and hub pages only.
- The homepage (`src/pages/home.mjs`) is design-frozen: [agent-rules/homepage-design-freeze.md](agent-rules/homepage-design-freeze.md).

## Add or edit a service page

1. Add or edit the object in `src/content/security.mjs` or `facility.mjs`. Set `updated` to today's date, which becomes the sitemap `lastmod`.
2. Photo: add the source JPEG under `images/`, list it in `src/tools/optimize-images.sh`, run the script (macOS), and commit the generated `images/opt/` files. Pages without a fitting photo use `image: null`. Never use a photo whose content doesn't match its alt text.
3. If the service should appear on the homepage, that's a visible homepage change. Ask first.
4. `npm run build && npx serve dist`, check the page, then `npm test`.

The tests enforce, for every indexable page:

- exactly one H1
- a unique title of 60 characters or fewer, and a unique description of 70–160 characters
- a canonical that matches the URL
- structured data that parses, and FAQ markup that matches the visible questions
- image dimensions, and links and `srcset` entries that resolve
- inclusion in the sitemap
- no placeholder text

## Copy rules

- German, formal "Sie", concrete and specific. Write for the customer, not for keyword density.
- **No invented facts.** No certifications (§ 34a GewO), founding year, availability ("24/7"), response times, prices, customer counts or reviews unless the client has confirmed them in writing. Confirmed facts go into `site.optional` in `src/content/site.mjs` and into the copy.
- No superlatives that German competition law (UWG) treats as misleading ("bester Sicherheitsdienst in Augsburg").
- Legal statements (e.g. Betriebskostenverordnung) must be general and correct; when in doubt, leave them out.
- Never add `aggregateRating` or review markup for the company's own reviews.

## Technical setup

- Vercel serves `dist/` with `cleanUrls`: `/objektschutz-augsburg` serves `objektschutz-augsburg.html`, and `.html` URLs 308-redirect to the clean URL. `/index.html` redirects to `/`.
- CSS/JS are content-hashed under `/assets/` and cached for a year. Images are cached for 30 days.
- Service-page photos are AVIF (600w/1200w) with a JPEG fallback, lazy-loaded, with explicit dimensions.
- JSON-LD is an inline data block. The CSP (`script-src 'self'`) does not apply to it.

## Outside the code (client / owner)

These have the biggest effect on local rankings:

1. **Google Business Profile:** create or claim "MTS Security".
   - Primary category "Sicherheitsdienst", plus secondary categories such as "Gebäudereinigungsdienst" and "Hausmeisterdienst".
   - The exact NAP from `site.mjs`, the website link, all services and real photos.
   - Ask satisfied customers for reviews, and answer them.
2. **Google Search Console:** verify the domain (DNS TXT record), submit `https://www.mts-sicherheit.com/sitemap.xml`, request indexing for the new URLs, and watch coverage and queries. Then import the site into **Bing Webmaster Tools**.
3. **Directory listings with identical NAP:** Gelbe Seiten, Das Örtliche, 11880, Cylex, Apple Business Connect, Bing Places, plus IHK Schwaben and BDSW if they're members.
4. **Apex redirect:** in Vercel → Project → Settings → Domains, set `mts-sicherheit.com` to redirect to `www.mts-sicherheit.com` with status **308** (permanent). It's currently 307 (temporary).
5. **Impressum:** fill in the legal form, the authorized representative, register data and USt-IdNr. They're legally required and a trust signal.
6. **Facts to confirm, then add** to `site.mjs` and the copy:
   - § 34a GewO qualification
   - founding year
   - opening hours / on-call availability
   - liability insurance
   - social profiles (`sameAs`)
   - a landline (0821) number, if available
