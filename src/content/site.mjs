/**
 * Business facts used on every page and in structured data. Single source of
 * truth: change NAP (name, address, phone) here only, and keep it identical to
 * the Google Business Profile and directory listings.
 */
export const site = {
  name: 'MTS Security',
  origin: 'https://www.mts-sicherheit.com',
  language: 'de-DE',
  phone: {
    display: '0176 413 86 420',
    href: 'tel:+4917641386420',
    e164: '+4917641386420',
  },
  email: 'info@mts-sicherheit.com',
  address: {
    street: 'Siegfried-Aufhäuser Str. 12B',
    postalCode: '86157',
    city: 'Augsburg',
    region: 'Bayern',
    country: 'DE',
    mapsUrl:
      'https://maps.google.com/?q=Siegfried-Aufh%C3%A4user+Str.+12B,+86157+Augsburg',
  },
  logo: '/images/mts-security-logo.png',
  // Confirmed facts only. Add these once the client confirms them; the schema
  // builder includes them automatically when set.
  optional: {
    foundingYear: null,
    openingHours: null, // e.g. [{ days: ['Monday', ...], opens: '08:00', closes: '18:00' }]
    sameAs: [], // Google Business Profile, social profiles
  },
};

/** Areas named in copy and in `areaServed`. */
export const serviceArea = {
  city: 'Augsburg',
  surroundings: ['Landkreis Augsburg', 'Aichach-Friedberg'],
  state: 'Bayern',
};
