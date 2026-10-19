import { serviceArea } from '../content/site.mjs';
import { hubFor } from '../content/hubs.mjs';
import { serviceBySlug } from '../content/services.mjs';
import { html } from '../lib/html.mjs';
import {
  ctaBand,
  document,
  faqSection,
  pageHero,
  picture,
} from '../lib/layout.mjs';

/** @typedef {import('../content/services.mjs').Service} Service */

/** @param {string[]} items */
const list = items => items.map(item => html`<li>${item}</li>`);

/** @param {Service} service */
function areaText(service) {
  const around = serviceArea.surroundings.join(' und in ');
  return `Unser Sitz ist in ${serviceArea.city}. Wir übernehmen ${service.serviceType} in ${serviceArea.city}, im ${around} sowie nach Absprache in ganz ${serviceArea.state}.`;
}

/** @param {Service} service */
function relatedCards(service) {
  return service.related.map(serviceBySlug).map(
    item => html`
            <a class="link-card" href="/${item.slug}">
              <svg class="icon" viewBox="0 0 24 24" aria-hidden="true">
                <path fill="currentColor" d="${item.icon}" />
              </svg>
              <h3>${item.name}</h3>
              <p>${item.cardText}</p>
            </a>`
  );
}

/**
 * @param {Service} service
 * @param {{ head?: unknown }} [extra]
 */
export default function renderService(service, extra = {}) {
  const hub = hubFor(service.category);
  const path = `/${service.slug}`;

  const body = html`${pageHero({
    eyebrow: `${hub.name} in Augsburg`,
    h1: service.h1,
    lead: service.lead,
    trail: [
      { href: '/', label: 'Startseite' },
      { href: `/${hub.slug}`, label: hub.name },
      { label: service.name },
    ],
  })}

      <section class="page-section">
        <div class="container page-grid${service.image ? '' : ' page-grid--single'}">
          <article class="page-body">
            ${service.intro.map(p => html`<p>${p}</p>`)}

            <h2>Leistungen im Überblick</h2>
            <ul class="check-list">${list(service.tasks)}</ul>

            <h2>${service.audiences.heading}</h2>
            <ul class="tag-list">${list(service.audiences.items)}</ul>
${service.sections.map(
  section => html`
            <h2>${section.heading}</h2>
            ${section.paragraphs.map(p => html`<p>${p}</p>`)}`
)}

            <h2>So läuft die Zusammenarbeit</h2>
            <ol class="steps">${hub.steps.map(
              step =>
                html`<li><strong>${step.title}:</strong> ${step.text}</li>`
            )}</ol>

            <h2>Einsatzgebiet</h2>
            <p>${areaText(service)}</p>
          </article>
${
  service.image
    ? html`          <aside class="page-aside">
            <figure class="page-photo">
            ${picture(service.image, '(max-width: 992px) 100vw, 380px')}
            </figure>
          </aside>`
    : ''
}
        </div>
      </section>

${faqSection(service.faq)}

      <section class="page-section page-related" aria-labelledby="related-heading">
        <div class="container">
          <h2 id="related-heading">Weitere Leistungen</h2>
          <div class="link-grid">${relatedCards(service)}
          </div>
          <p class="hub-link">
            <a href="/${hub.slug}">Alle Leistungen: ${hub.name} in Augsburg</a>
          </p>
        </div>
      </section>

${ctaBand()}`;

  return document({
    path,
    title: service.title,
    description: service.description,
    ogImage: {
      url: `/images/opt/${hub.ogImage}.jpg`,
      width: 1200,
      height: 630,
    },
    head: extra.head,
    body,
  });
}
