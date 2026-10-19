/**
 * Content-hashed CSS/JS. The build writes each source file to
 * dist/assets/<name>.<hash>.<ext> and pages reference it through asset(), so
 * the files can be cached forever (see the /assets header in vercel.json).
 */
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';

/** @type {Record<string, string>} */
let manifest = {};

/**
 * @param {string} rootDir repo root
 * @param {string} distDir output dir
 * @param {Record<string, (source: string) => string>} sources file name → transform
 */
export function writeHashedAssets(rootDir, distDir, sources) {
  manifest = {};
  fs.mkdirSync(path.join(distDir, 'assets'), { recursive: true });
  for (const [file, transform] of Object.entries(sources)) {
    const content = transform(
      fs.readFileSync(path.join(rootDir, file), 'utf8')
    );
    const hash = crypto
      .createHash('sha256')
      .update(content)
      .digest('hex')
      .slice(0, 10);
    const ext = path.extname(file);
    const hashed = `assets/${path.basename(file, ext)}.${hash}${ext}`;
    fs.writeFileSync(path.join(distDir, hashed), content);
    manifest[file] = `/${hashed}`;
  }
}

/** Absolute URL of a hashed asset, e.g. asset('styles.css'). @param {string} file */
export function asset(file) {
  const url = manifest[file];
  if (!url)
    throw new Error(`Unknown asset ${file}; was it registered in build.mjs?`);
  return url;
}
