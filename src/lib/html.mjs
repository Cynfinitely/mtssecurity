/**
 * Minimal HTML templating: `html` escapes interpolated values unless they are
 * wrapped in `raw()` or are themselves `html` results. Arrays are joined.
 */

const ESCAPES = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
};

class Raw {
  /** @param {string} value */
  constructor(value) {
    this.value = value;
  }

  toString() {
    return this.value;
  }
}

/** @param {unknown} value */
export function escape(value) {
  return String(value).replace(/[&<>"']/g, char => ESCAPES[char]);
}

/** Marks a string as trusted HTML. @param {string} value */
export function raw(value) {
  return new Raw(value);
}

/** @param {unknown} value @returns {string} */
function render(value) {
  if (value === null || value === undefined || value === false) return '';
  if (Array.isArray(value)) return value.map(render).join('');
  if (value instanceof Raw) return value.value;
  return escape(value);
}

/**
 * @param {TemplateStringsArray} strings
 * @param {...unknown} values
 */
export function html(strings, ...values) {
  let out = strings[0];
  for (let i = 0; i < values.length; i += 1) {
    out += render(values[i]) + strings[i + 1];
  }
  return raw(out);
}

/**
 * JSON for an inline <script type="application/ld+json"> block. Escapes "<"
 * so content can never close the script element. It is a data block, not
 * executed script, so the CSP (script-src 'self') does not apply.
 * @param {unknown} data
 */
export function jsonLd(data) {
  const json = JSON.stringify(data, null, 2).replace(/</g, '\\u003c');
  return raw(
    `    <script type="application/ld+json">\n${json}\n    </script>\n`
  );
}
