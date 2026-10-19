/**
 * Shared layout for the generated subpages (hubs, services). Header and footer
 * reuse the homepage markup and classes so they look identical; the language
 * selector is left out because these pages are German only.
 */
import { site } from '../content/site.mjs';
import { asset } from './assets.mjs';
import { html, raw } from './html.mjs';

/** @param {string} path e.g. '/objektschutz-augsburg' */
export const absoluteUrl = path => `${site.origin}${path === '/' ? '/' : path}`;

const NAV = [
  { href: '/', label: 'Startseite' },
  { href: '/sicherheitsdienst-augsburg', label: 'Sicherheitsdienst' },
  { href: '/gebaeudeservice-augsburg', label: 'Gebäudeservice' },
  { href: '/#about', label: 'Über uns' },
  { href: '/#contact', label: 'Kontakt' },
];

/**
 * The <head> shared by every indexable page (homepage included).
 * @param {{
 *   path: string,
 *   title: string,
 *   description: string,
 *   ogImage: { url: string, width: number, height: number },
 *   stylesheets?: string[],
 *   head?: unknown,
 * }} meta
 */
export function head(meta) {
  const stylesheets = meta.stylesheets ?? ['styles.css', 'subpages.css'];
  return html`  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${meta.title}</title>
    <meta name="description" content="${meta.description}" />
    <link rel="canonical" href="${absoluteUrl(meta.path)}" />
    <meta name="robots" content="index,follow,max-image-preview:large" />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="de_DE" />
    <meta property="og:site_name" content="${site.name}" />
    <meta property="og:url" content="${absoluteUrl(meta.path)}" />
    <meta property="og:title" content="${meta.title}" />
    <meta property="og:description" content="${meta.description}" />
    <meta property="og:image" content="${site.origin}${meta.ogImage.url}" />
    <meta property="og:image:width" content="${meta.ogImage.width}" />
    <meta property="og:image:height" content="${meta.ogImage.height}" />
    <meta name="twitter:card" content="summary_large_image" />
    <link rel="icon" type="image/png" href="/images/mts-security-logo.png" />
    <link rel="apple-touch-icon" href="/images/icons/apple-touch-icon.png" />
    <link rel="manifest" href="/site.webmanifest" />
${stylesheets.map(
  file => html`    <link rel="stylesheet" href="${asset(file)}" />
`
)}${meta.head ?? ''}  </head>`;
}

/** @param {string} currentPath */
function header(currentPath) {
  const items = NAV.map(
    item => html`
          <li>
            <a href="${item.href}"${item.href === currentPath ? raw(' aria-current="page"') : ''}>${item.label}</a>
          </li>`
  );
  return html`    <header class="navbar">
      <div class="container">
        <a class="logo" href="/">
          <img
            src="/images/mts-security-logo.png"
            alt="MTS Security – zur Startseite"
            width="1500"
            height="1080"
          />
        </a>
        <button
          class="mobile-menu-btn"
          type="button"
          aria-expanded="false"
          aria-controls="nav-links"
          aria-label="Menü öffnen"
        >
          <svg class="icon-bars" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill="currentColor"
              d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"
            />
          </svg>
          <svg class="icon-close" viewBox="0 0 24 24" aria-hidden="true" hidden>
            <path
              fill="currentColor"
              d="M18.3 5.7 12 12l6.3 6.3-1.4 1.4L10.6 13.4 4.3 19.7 2.9 18.3 9.2 12 2.9 5.7 4.3 4.3l6.3 6.3 6.3-6.3z"
            />
          </svg>
        </button>
        <ul id="nav-links" class="nav-links">${items}
        </ul>
      </div>
    </header>`;
}

function footer() {
  return html`    <footer>
      <div class="container">
        <p>
          &copy; <span id="year">${new Date().getFullYear()}</span> ${site.name}.
          <span>Alle Rechte vorbehalten.</span>
        </p>
        <p class="footer-links">
          <a href="/impressum">Impressum</a>
          <a href="/datenschutz">Datenschutz</a>
        </p>
      </div>
    </footer>`;
}

/**
 * Full HTML document for a subpage.
 * @param {Parameters<typeof head>[0] & { body: unknown }} page
 */
export function document(page) {
  return html`<!doctype html>
<html lang="de">
${head(page)}
  <body class="subpage">
    <a class="skip-link" href="#main">Zum Inhalt springen</a>

${header(page.path)}

    <main id="main">
${page.body}
    </main>

${footer()}

    <script src="${asset('script.js')}"></script>
  </body>
</html>
`;
}

/** @param {{ href?: string, label: string }[]} trail last item is the current page */
export function breadcrumbs(trail) {
  const items = trail.map((item, index) =>
    index === trail.length - 1
      ? html`<li aria-current="page">${item.label}</li>`
      : html`<li><a href="${item.href}">${item.label}</a></li>`
  );
  return html`<nav class="breadcrumbs" aria-label="Brotkrümelnavigation">
            <ol>${items}</ol>
          </nav>`;
}

/** Call and callback buttons used in page heroes and the closing CTA band. */
export function ctaButtons() {
  return html`<div class="cta-buttons">
            <a class="btn" href="${site.phone.href}">Anrufen: ${site.phone.display}</a>
            <a class="btn btn-outline" href="/#contact">Rückruf anfordern</a>
          </div>`;
}

/** @param {{ eyebrow: string, h1: string, lead: string, trail: { href?: string, label: string }[] }} hero */
export function pageHero(hero) {
  return html`      <section class="page-hero">
        <div class="container">
          ${breadcrumbs(hero.trail)}
          <p class="eyebrow">${hero.eyebrow}</p>
          <h1>${hero.h1}</h1>
          <p class="page-lead">${hero.lead}</p>
          ${ctaButtons()}
        </div>
      </section>`;
}

/** @param {{ q: string, a: string }[]} items */
export function faqSection(items) {
  const entries = items.map(
    item => html`
            <details class="faq-item">
              <summary>${item.q}</summary>
              <p>${item.a}</p>
            </details>`
  );
  return html`      <section class="page-section page-faq" aria-labelledby="faq-heading">
        <div class="container">
          <h2 id="faq-heading">Häufige Fragen</h2>
          <div class="faq-list">${entries}
          </div>
        </div>
      </section>`;
}

/** Closing call-to-action band with the full NAP block. */
export function ctaBand() {
  const { address } = site;
  return html`      <section class="cta-band" aria-labelledby="cta-heading">
        <div class="container">
          <h2 id="cta-heading">Sprechen Sie uns an</h2>
          <p>
            Rufen Sie uns an oder hinterlassen Sie Ihre Nummer – wir melden uns
            zeitnah und besprechen Ihren Bedarf.
          </p>
          ${ctaButtons()}
          <address class="cta-address">
            ${site.name} · ${address.street} · ${address.postalCode} ${address.city}<br />
            <a href="${site.phone.href}">${site.phone.display}</a> ·
            <a href="mailto:${site.email}">${site.email}</a>
          </address>
        </div>
      </section>`;
}

/**
 * Responsive photo: AVIF variants from images/opt with the original JPEG as
 * fallback. Below the fold, so lazy-loaded.
 * @param {{ opt: string, jpg: string, width: number, height: number, alt: string }} image
 * @param {string} sizes
 */
export function picture(image, sizes) {
  return html`<picture>
              <source
                type="image/avif"
                srcset="/images/opt/${image.opt}-600.avif 600w, /images/opt/${image.opt}-1200.avif 1200w"
                sizes="${sizes}"
              />
              <img
                src="/images/${image.jpg}"
                alt="${image.alt}"
                width="${image.width}"
                height="${image.height}"
                loading="lazy"
                decoding="async"
              />
            </picture>`;
}
