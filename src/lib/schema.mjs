/**
 * schema.org structured data (JSON-LD). Every page gets one @graph with the
 * business and website nodes plus page-specific nodes, linked by @id.
 * Validate changes with https://search.google.com/test/rich-results.
 */
import { serviceArea, site } from '../content/site.mjs';
import { services } from '../content/services.mjs';
import { jsonLd } from './html.mjs';
import { absoluteUrl } from './layout.mjs';

const BUSINESS_ID = `${site.origin}/#business`;
const WEBSITE_ID = `${site.origin}/#website`;

const areaServed = [
  { '@type': 'City', name: serviceArea.city },
  ...serviceArea.surroundings.map(name => ({
    '@type': 'AdministrativeArea',
    name,
  })),
  { '@type': 'State', name: serviceArea.state },
];

function business() {
  const { address, optional } = site;
  return {
    '@type': 'LocalBusiness',
    '@id': BUSINESS_ID,
    name: site.name,
    url: `${site.origin}/`,
    logo: `${site.origin}${site.logo}`,
    image: `${site.origin}/images/opt/og-security.jpg`,
    telephone: site.phone.e164,
    email: site.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: address.street,
      postalCode: address.postalCode,
      addressLocality: address.city,
      addressRegion: address.region,
      addressCountry: address.country,
    },
    areaServed,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Sicherheitsdienste und Gebäudeservice',
      itemListElement: services.map(service => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.serviceType,
          url: absoluteUrl(`/${service.slug}`),
        },
      })),
    },
    // Only confirmed facts (see src/content/site.mjs).
    ...(optional.foundingYear && {
      foundingDate: String(optional.foundingYear),
    }),
    ...(optional.sameAs.length && { sameAs: optional.sameAs }),
    ...(optional.openingHours && {
      openingHoursSpecification: optional.openingHours.map(spec => ({
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: spec.days,
        opens: spec.opens,
        closes: spec.closes,
      })),
    }),
  };
}

function website() {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: `${site.origin}/`,
    name: site.name,
    inLanguage: site.language,
    publisher: { '@id': BUSINESS_ID },
  };
}

/**
 * @param {{ path: string, title: string, description: string, type?: string }} page
 */
function webPage(page) {
  const url = absoluteUrl(page.path);
  return {
    '@type': page.type ?? 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: page.title,
    description: page.description,
    inLanguage: site.language,
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': BUSINESS_ID },
  };
}

/** @param {{ path: string, label: string }[]} trail */
function breadcrumbList(trail) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: absoluteUrl(item.path),
    })),
  };
}

/** @param {{ q: string, a: string }[]} faq */
function faqPage(faq) {
  return {
    '@type': 'FAQPage',
    mainEntity: faq.map(item => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}

/** @param {object[]} nodes */
const graph = nodes =>
  jsonLd({ '@context': 'https://schema.org', '@graph': nodes });

/**
 * Homepage and legal pages.
 * @param {{ path: string, title: string, description: string }} page
 */
export function pageSchema(page) {
  return graph([business(), website(), webPage(page)]);
}

/**
 * @param {import('../content/services.mjs').Service} service
 * @param {import('../content/hubs.mjs').Hub} hub
 */
export function serviceSchema(service, hub) {
  const path = `/${service.slug}`;
  const url = absoluteUrl(path);
  return graph([
    business(),
    website(),
    webPage({ path, title: service.title, description: service.description }),
    {
      '@type': 'Service',
      '@id': `${url}#service`,
      name: service.h1,
      serviceType: service.serviceType,
      description: service.description,
      url,
      provider: { '@id': BUSINESS_ID },
      areaServed,
    },
    breadcrumbList([
      { path: '/', label: 'Startseite' },
      { path: `/${hub.slug}`, label: hub.name },
      { path, label: service.name },
    ]),
    faqPage(service.faq),
  ]);
}

/** @param {import('../content/hubs.mjs').Hub} hub */
export function hubSchema(hub) {
  const path = `/${hub.slug}`;
  return graph([
    business(),
    website(),
    webPage({
      path,
      title: hub.title,
      description: hub.description,
      type: 'CollectionPage',
    }),
    breadcrumbList([
      { path: '/', label: 'Startseite' },
      { path, label: hub.name },
    ]),
    {
      '@type': 'ItemList',
      itemListElement: services
        .filter(service => service.category === hub.category)
        .map((service, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: service.name,
          url: absoluteUrl(`/${service.slug}`),
        })),
    },
    faqPage(hub.faq),
  ]);
}
