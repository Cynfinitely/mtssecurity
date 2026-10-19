/**
 * Static site build: renders every page in src/pages to dist/, copies static
 * assets. Run with `npm run build`. Never edit dist/ by hand.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import home from './pages/home.mjs';
import impressum from './pages/impressum.mjs';
import datenschutz from './pages/datenschutz.mjs';
import notFound from './pages/not-found.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
export const DIST = path.join(ROOT, 'dist');

/** Files and folders copied verbatim from the repo root. */
const STATIC = [
  'images',
  'styles.css',
  'script.js',
  'robots.txt',
  'sitemap.xml',
];

/** @type {{ file: string, render: () => { toString(): string } }[]} */
const PAGES = [
  { file: 'index.html', render: home },
  { file: 'impressum.html', render: impressum },
  { file: 'datenschutz.html', render: datenschutz },
  { file: '404.html', render: notFound },
];

export function build() {
  fs.rmSync(DIST, { recursive: true, force: true });
  fs.mkdirSync(DIST, { recursive: true });

  for (const entry of STATIC) {
    fs.cpSync(path.join(ROOT, entry), path.join(DIST, entry), {
      recursive: true,
    });
  }

  for (const page of PAGES) {
    const out = path.join(DIST, page.file);
    fs.mkdirSync(path.dirname(out), { recursive: true });
    fs.writeFileSync(out, String(page.render()));
  }

  return { pages: PAGES.length };
}

const isEntry =
  process.argv[1] &&
  path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isEntry) {
  const { pages } = build();
  console.log(`Built ${pages} pages into dist/`);
}
