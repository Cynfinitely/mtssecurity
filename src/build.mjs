/**
 * Static site build: renders every page in src/pages to dist/, copies static
 * assets, writes sitemap.xml, robots.txt and the web manifest. Run with
 * `npm run build`. Never edit dist/ by hand.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { hubs } from './content/hubs.mjs';
import { services } from './content/services.mjs';
import { site } from './content/site.mjs';
import { writeHashedAssets } from './lib/assets.mjs';
import { absoluteUrl } from './lib/layout.mjs';
import home from './pages/home.mjs';
import renderHub from './pages/hub.mjs';
import renderService from './pages/service.mjs';
import impressum from './pages/impressum.mjs';
import datenschutz from './pages/datenschutz.mjs';
import notFound from './pages/not-found.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
export const DIST = path.join(ROOT, 'dist');

/** Folders copied verbatim from the repo root. */
const STATIC = ['images'];

/**
 * CSS/JS served from /assets/ with a content hash. The stylesheet moves one
 * folder down, so its relative image URLs become root-absolute.
 */
const HASHED = {
  'styles.css': css => css.replaceAll("url('images/", "url('/images/"),
  'subpages.css': css => css,
  'script.js': js => js,
};

/**
 * Every generated page. `path` is the public (clean) URL; pages with a
 * `lastmod` are indexable and listed in the sitemap. Bump `lastmod` (or the
 * content file's `updated`) when a page's content changes.
 * @type {{ file: string, path: string, lastmod: string | null, render: () => { toString(): string } }[]}
 */
export const PAGES = [
  { file: 'index.html', path: '/', lastmod: '2026-10-19', render: home },
  ...hubs.map(hub => ({
    file: `${hub.slug}.html`,
    path: `/${hub.slug}`,
    lastmod: hub.updated,
    render: () => renderHub(hub),
  })),
  ...services.map(service => ({
    file: `${service.slug}.html`,
    path: `/${service.slug}`,
    lastmod: service.updated,
    render: () => renderService(service),
  })),
  {
    file: 'impressum.html',
    path: '/impressum',
    lastmod: '2026-10-19',
    render: impressum,
  },
  {
    file: 'datenschutz.html',
    path: '/datenschutz',
    lastmod: '2026-10-19',
    render: datenschutz,
  },
  { file: '404.html', path: '/404', lastmod: null, render: notFound },
];

function sitemap() {
  const urls = PAGES.filter(page => page.lastmod).map(
    page => `  <url>
    <loc>${absoluteUrl(page.path)}</loc>
    <lastmod>${page.lastmod}</lastmod>
  </url>`
  );
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>
`;
}

function robots() {
  return `User-agent: *
Allow: /
Disallow: /api/

Sitemap: ${site.origin}/sitemap.xml
`;
}

function manifest() {
  const manifestData = {
    name: site.name,
    short_name: site.name,
    lang: 'de',
    start_url: '/',
    display: 'browser',
    background_color: '#1a1a1a',
    theme_color: '#4e4e4e',
    icons: [
      {
        src: '/images/icons/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/images/icons/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
  return `${JSON.stringify(manifestData, null, 2)}\n`;
}

export function build() {
  fs.rmSync(DIST, { recursive: true, force: true });
  fs.mkdirSync(DIST, { recursive: true });

  for (const entry of STATIC) {
    fs.cpSync(path.join(ROOT, entry), path.join(DIST, entry), {
      recursive: true,
    });
  }

  writeHashedAssets(ROOT, DIST, HASHED);

  for (const page of PAGES) {
    const out = path.join(DIST, page.file);
    fs.mkdirSync(path.dirname(out), { recursive: true });
    fs.writeFileSync(out, String(page.render()));
  }

  fs.writeFileSync(path.join(DIST, 'sitemap.xml'), sitemap());
  fs.writeFileSync(path.join(DIST, 'robots.txt'), robots());
  fs.writeFileSync(path.join(DIST, 'site.webmanifest'), manifest());

  return { pages: PAGES.length };
}

const isEntry =
  process.argv[1] &&
  path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isEntry) {
  const { pages } = build();
  console.log(`Built ${pages} pages into dist/`);
}
