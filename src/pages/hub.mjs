import { reasons } from '../content/hubs.mjs';
import { services } from '../content/services.mjs';
import { html } from '../lib/html.mjs';
import { hubSchema } from '../lib/schema.mjs';
import { ctaBand, document, faqSection, pageHero } from '../lib/layout.mjs';

/** @typedef {import('../content/hubs.mjs').Hub} Hub */

/**
 * @param {Hub} hub
 */
export default function renderHub(hub) {
  const items = services.filter(service => service.category === hub.category);

  const cards = items.map(
    item => html`
            <a class="link-card" href="/${item.slug}">
              <svg class="icon" viewBox="0 0 24 24" aria-hidden="true">
                <path fill="currentColor" d="${item.icon}" />
              </svg>
              <h3>${item.name}</h3>
              <p>${item.cardText}</p>
              <span class="link-card-more">Mehr erfahren</span>
            </a>`
  );

  const reasonItems = reasons.map(
    reason => html`
            <div class="reason">
              <h3>${reason.title}</h3>
              <p>${reason.text}</p>
            </div>`
  );

  const body = html`${pageHero({
    eyebrow: hub.eyebrow,
    h1: hub.h1,
    lead: hub.lead,
    trail: [{ href: '/', label: 'Startseite' }, { label: hub.name }],
  })}

      <section class="page-section">
        <div class="container page-intro">
          ${hub.intro.map(p => html`<p>${p}</p>`)}
        </div>
      </section>

      <section class="page-section page-related" aria-labelledby="services-heading">
        <div class="container">
          <h2 id="services-heading">${hub.servicesHeading}</h2>
          <div class="link-grid">${cards}
          </div>
        </div>
      </section>

      <section class="page-section" aria-labelledby="reasons-heading">
        <div class="container">
          <h2 id="reasons-heading">Warum MTS Security?</h2>
          <div class="reasons">${reasonItems}
          </div>
        </div>
      </section>

      <section class="page-section page-related" aria-labelledby="steps-heading">
        <div class="container page-intro">
          <h2 id="steps-heading">So läuft die Zusammenarbeit</h2>
          <ol class="steps">${hub.steps.map(
            step => html`<li><strong>${step.title}:</strong> ${step.text}</li>`
          )}</ol>
        </div>
      </section>

${faqSection(hub.faq)}

${ctaBand()}`;

  return document({
    path: `/${hub.slug}`,
    title: hub.title,
    description: hub.description,
    ogImage: {
      url: `/images/opt/${hub.ogImage}.jpg`,
      width: 1200,
      height: 630,
    },
    head: hubSchema(hub),
    body,
  });
}
