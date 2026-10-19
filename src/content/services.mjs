/**
 * All service pages, plus lookups. Add a service by appending it to
 * security.mjs or facility.mjs; build, sitemap, hubs, homepage links and
 * structured data pick it up from here.
 */
import { facilityServices } from './facility.mjs';
import { securityServices } from './security.mjs';

/**
 * @typedef {{
 *   opt: string,
 *   jpg: string,
 *   width: number,
 *   height: number,
 *   alt: string,
 * }} Photo
 *
 * @typedef {{
 *   slug: string,
 *   category: 'security' | 'facility',
 *   name: string,
 *   serviceType: string,
 *   icon: string,
 *   cardText: string,
 *   title: string,
 *   description: string,
 *   h1: string,
 *   lead: string,
 *   image: Photo | null,
 *   intro: string[],
 *   tasks: string[],
 *   audiences: { heading: string, items: string[] },
 *   sections: { heading: string, paragraphs: string[] }[],
 *   faq: { q: string, a: string }[],
 *   related: string[],
 *   updated: string,
 * }} Service
 */

/** @type {Service[]} */
export const services = [...securityServices, ...facilityServices];

/** @param {string} slug */
export function serviceBySlug(slug) {
  const service = services.find(item => item.slug === slug);
  if (!service) throw new Error(`Unknown service slug: ${slug}`);
  return service;
}
