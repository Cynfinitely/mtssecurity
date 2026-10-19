import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { build, DIST } from './build.mjs';

build();

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
}
