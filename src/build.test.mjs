import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { build, DIST, PAGES } from './build.mjs';
import { site } from './content/site.mjs';

build();

const indexable = PAGES.filter(page => page.lastmod);
/** Service and hub pages (generated from content data). */
const generated = indexable.filter(
  page => !['/', '/impressum', '/datenschutz'].includes(page.path)
);

const htmlFiles = fs
  .readdirSync(DIST, { recursive: true })
  .map(String)
  .filter(file => file.endsWith('.html'))
  .sort();

/** @param {string} file */
const read = file => fs.readFileSync(path.join(DIST, file), 'utf8');

/** @param {string} source @param {RegExp} pattern */
const all = (source, pattern) => [...source.matchAll(pattern)].map(m => m[1]);

/**
 * Maps a same-site URL to the file Vercel would serve for it (cleanUrls).
 * @param {string} url
 * @param {string} fromFile
 */
function resolveLocal(url, fromFile) {
  const clean = url.split('#')[0].split('?')[0];
  if (!clean) return fromFile;
  const abs = clean.startsWith('/')
    ? clean
    : path.posix.join('/', path.posix.dirname(fromFile), clean);
  if (abs === '/') return 'index.html';
  const rel = abs.slice(1);
  if (fs.existsSync(path.join(DIST, rel))) return rel;
  if (fs.existsSync(path.join(DIST, `${rel}.html`))) return `${rel}.html`;
  return null;
}

test('build produces the core pages', () => {
  for (const file of [
    'index.html',
    'impressum.html',
    'datenschutz.html',
    '404.html',
  ]) {
    assert.ok(htmlFiles.includes(file), `missing ${file}`);
  }
});

for (const file of htmlFiles) {
  test(`${file}: exactly one <h1>`, () => {
    assert.equal(all(read(file), /<h1[\s>]()/g).length, 1);
  });

  test(`${file}: every local link and asset resolves`, () => {
    const source = read(file);
    const urls = [
      ...all(source, /\shref="([^"]*)"/g),
      ...all(source, /\ssrc="([^"]*)"/g),
      ...all(source, /url\('([^']*)'\)/g),
    ].filter(url => !/^(https?:|mailto:|tel:|#|data:)/.test(url) && url !== '');
    const broken = urls.filter(url => resolveLocal(url, file) === null);
    assert.deepEqual(broken, []);
  });

  test(`${file}: every <img> has alt text attribute`, () => {
    const imgs = all(read(file), /(<img\b[^>]*>)/g);
    const missing = imgs.filter(tag => !/\salt="/.test(tag));
    assert.deepEqual(missing, []);
  });

  test(`${file}: every srcset candidate resolves`, () => {
    const candidates = all(read(file), /\ssrcset="([^"]*)"/g).flatMap(set =>
      set.split(',').map(entry => entry.trim().split(/\s+/)[0])
    );
    const broken = candidates.filter(url => resolveLocal(url, file) === null);
    assert.deepEqual(broken, []);
  });
}

/** @param {string} text */
const decode = text =>
  text
    .replaceAll('&quot;', '"')
    .replaceAll('&#39;', "'")
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>')
    .replaceAll('&amp;', '&');

/** @param {string} source @param {string} name */
const meta = (source, name) =>
  source.match(
    new RegExp(`<meta (?:name|property)="${name}" content="([^"]*)"`)
  )?.[1];

/** @param {string} source */
const jsonLdTypes = source =>
  all(source, /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)
    .map(block => JSON.parse(block))
    .flatMap(data => data['@graph'] ?? [data])
    .map(node => node['@type']);

test('titles and descriptions are unique and within SERP limits', () => {
  const titles = new Set();
  const descriptions = new Set();
  for (const page of indexable) {
    const source = read(page.file);
    const title = decode(source.match(/<title>([^<]*)<\/title>/)?.[1] ?? '');
    const description = decode(meta(source, 'description') ?? '');
    assert.ok(
      title.length > 10 && title.length <= 60,
      `${page.path} title length ${title.length}: ${title}`
    );
    assert.ok(
      description.length >= 70 && description.length <= 160,
      `${page.path} description length ${description.length}`
    );
    assert.ok(!titles.has(title), `duplicate title ${title}`);
    assert.ok(
      !descriptions.has(description),
      `duplicate description on ${page.path}`
    );
    titles.add(title);
    descriptions.add(description);
  }
});

for (const page of indexable) {
  test(`${page.path}: canonical, robots and Open Graph match the URL`, () => {
    const source = read(page.file);
    const url =
      page.path === '/' ? `${site.origin}/` : `${site.origin}${page.path}`;
    assert.equal(
      source.match(/<link rel="canonical" href="([^"]*)"/)?.[1],
      url
    );
    assert.equal(meta(source, 'og:url'), url);
    assert.ok(meta(source, 'og:image')?.startsWith(`${site.origin}/`));
    assert.doesNotMatch(source, /noindex/);
    assert.doesNotMatch(source, /name="keywords"/);
  });

  test(`${page.path}: structured data parses and names the business`, () => {
    const types = jsonLdTypes(read(page.file));
    assert.ok(types.includes('LocalBusiness'), 'LocalBusiness');
    assert.ok(types.includes('WebSite'), 'WebSite');
  });
}

for (const page of generated) {
  test(`${page.path}: service/hub schema, FAQ and images`, () => {
    const source = read(page.file);
    const types = jsonLdTypes(source);
    assert.ok(types.includes('BreadcrumbList'), 'BreadcrumbList');
    assert.ok(types.includes('FAQPage'), 'FAQPage');
    assert.ok(
      types.includes('Service') || types.includes('ItemList'),
      'Service or ItemList'
    );

    // Every FAQ question in the markup is visible on the page.
    const faqData = all(
      source,
      /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g
    )
      .map(block => JSON.parse(block)['@graph'])
      .flat()
      .find(node => node['@type'] === 'FAQPage');
    const visible = all(source, /<summary>([^<]*)<\/summary>/g);
    assert.deepEqual(
      faqData.mainEntity.map(q => q.name),
      visible.map(decode)
    );

    for (const tag of all(source, /(<img\b[^>]*>)/g)) {
      assert.match(tag, /\swidth="\d+"/, `width missing: ${tag}`);
      assert.match(tag, /\sheight="\d+"/, `height missing: ${tag}`);
    }

    // Placeholder or draft text must never ship.
    assert.doesNotMatch(source, /TODO|\[[A-ZÄÖÜ][^\]]*\]/);
  });
}

test('sitemap lists exactly the indexable pages', () => {
  const sitemap = fs.readFileSync(path.join(DIST, 'sitemap.xml'), 'utf8');
  const locs = all(sitemap, /<loc>([^<]*)<\/loc>/g).sort();
  const expected = indexable
    .map(page =>
      page.path === '/' ? `${site.origin}/` : `${site.origin}${page.path}`
    )
    .sort();
  assert.deepEqual(locs, expected);
});

test('robots.txt allows crawling and points to the sitemap', () => {
  const robots = fs.readFileSync(path.join(DIST, 'robots.txt'), 'utf8');
  assert.match(robots, /^Allow: \/$/m);
  assert.match(
    robots,
    new RegExp(`^Sitemap: ${site.origin}/sitemap.xml$`, 'm')
  );
});

test('every homepage service card links to its page', () => {
  const source = read('index.html');
  const cardLinks = all(source, /<h4>\s*<a href="\/([^"]+)"/g);
  const serviceFiles = PAGES.filter(page => page.lastmod).map(page =>
    page.path.slice(1)
  );
  assert.equal(cardLinks.length, 10);
  for (const slug of cardLinks) assert.ok(serviceFiles.includes(slug), slug);
});
