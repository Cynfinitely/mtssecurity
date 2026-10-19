import { asset } from '../lib/assets.mjs';
import { html, raw } from '../lib/html.mjs';
import { head } from '../lib/layout.mjs';
import { pageSchema } from '../lib/schema.mjs';

const meta = {
  path: '/',
  title: 'Sicherheitsdienst & Gebäudeservice Augsburg | MTS Security',
  description:
    'MTS Security aus Augsburg: Objektschutz, Veranstaltungs- und Personenschutz, Reinigung und Hausmeisterservice in Augsburg und ganz Bayern.',
};

const OG_IMAGE = {
  url: '/images/opt/og-security.jpg',
  width: 1200,
  height: 630,
};

// The first hero photo is the LCP element on mobile; CSS backgrounds are
// discovered late, so start the download early.
const PRELOAD = raw(
  '    <link rel="preload" as="image" href="/images/hero/security-radio.jpg" fetchpriority="high" />\n'
);

/**
 * Homepage. The customer requires it to stay pixel-identical: change only
 * invisible things here (head, alt text, link targets) and run the screenshot
 * comparison described in docs/seo.md.
 */
export default function render() {
  return html`<!doctype html>
<html lang="de">
${head({ ...meta, ogImage: OG_IMAGE, stylesheets: ['styles.css'], head: [PRELOAD, pageSchema(meta)] })}
  <body>
    <a class="skip-link" href="#main" data-translate="skip"
      >Zum Inhalt springen</a
    >

    <header class="navbar">
      <div class="container">
        <a class="logo" href="#home">
          <img src="images/mts-security-logo.png" alt="MTS Security" />
        </a>
        <button
          class="mobile-menu-btn"
          type="button"
          aria-expanded="false"
          aria-controls="nav-links"
          aria-label="Menü öffnen"
        >
          <svg class="icon-bars" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill="currentColor"
              d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"
            />
          </svg>
          <svg class="icon-close" viewBox="0 0 24 24" aria-hidden="true" hidden>
            <path
              fill="currentColor"
              d="M18.3 5.7 12 12l6.3 6.3-1.4 1.4L10.6 13.4 4.3 19.7 2.9 18.3 9.2 12 2.9 5.7 4.3 4.3l6.3 6.3 6.3-6.3z"
            />
          </svg>
        </button>
        <ul id="nav-links" class="nav-links">
          <li>
            <a href="#home" data-translate="home">Startseite</a>
          </li>
          <li>
            <a href="#about" data-translate="about">Über uns</a>
          </li>
          <li>
            <a href="#services" data-translate="services">Leistungen</a>
          </li>
          <li>
            <a href="#work" data-translate="work">Unsere Arbeit</a>
          </li>
          <li>
            <a href="#contact" data-translate="contact">Kontakt</a>
          </li>
        </ul>
        <div class="language-selector">
          <a
            href="#"
            class="active"
            data-lang="de"
            aria-label="Deutsch"
          >
            <img src="images/de-flag.png" alt="" class="flag-icon" />
            <span>DE</span>
          </a>
          <a href="#" data-lang="en" aria-label="English">
            <img src="images/en-flag.png" alt="" class="flag-icon" />
            <span>EN</span>
          </a>
        </div>
      </div>
    </header>

    <main id="main">
      <section id="home" class="hero">
        <div class="hero-background" aria-hidden="true">
          <div class="hero-image hero-image-1"></div>
          <div class="hero-image hero-image-2"></div>
          <div class="hero-image hero-image-3"></div>
          <div class="hero-image hero-image-4"></div>
        </div>
        <div class="container">
          <h1 data-translate="welcome">Willkommen bei MTS Security</h1>
          <p data-translate="subtitle">
            Ihr starker Partner für Sicherheit und Dienstleistungen in Bayern
          </p>
          <a href="#contact" class="btn btn-hero" data-translate="cta"
            >Kontakt aufnehmen</a
          >
        </div>
      </section>

      <section id="about" class="about">
        <div class="container">
          <div class="about-content">
            <div class="about-logo">
              <img src="images/mts-security-logo.png" alt="" />
            </div>
            <div class="about-text">
              <p class="eyebrow" data-translate="about">Über uns</p>
              <h2 data-translate="who">MTS Security</h2>
              <p class="about-values" data-translate="competence">
                Kompetenz. Vertrauen. Qualität.
              </p>
              <p data-translate="about-description">
                Willkommen bei MTS Security, Ihrem zuverlässigen Partner für
                maßgeschneiderte Sicherheitslösungen und hochwertige
                Dienstleistungen in ganz Bayern. Seit unserer Gründung verfolgen
                wir ein klares Ziel: höchste Qualität, maximale
                Kundenzufriedenheit und ein Service, der weit über das Übliche
                hinausgeht. Sitz in Augsburg – Einsatz in ganz Bayern.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" class="services">
        <div class="container">
          <h2 data-translate="our-services">Unsere Leistungen</h2>
          <div class="services-container">
            <div class="service-category">
              <h3><a href="/sicherheitsdienst-augsburg" data-translate="security-services">Sicherheitsdienste</a></h3>
              <div class="services-grid">
                <article class="service-card">
                  <svg class="icon" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fill="currentColor"
                      d="M4 21V3h7v18H4zm9 0V9h7v12h-7zM6 5h3v2H6V5zm0 4h3v2H6V9zm0 4h3v2H6v-2z"
                    />
                  </svg>
                  <h4><a href="/objektschutz-augsburg" data-translate="object-protection">Objektschutz</a></h4>
                  <p data-translate="object-protection-desc">
                    Professioneller Schutz für Ihre Immobilien und Anlagen
                  </p>
                </article>
                <article class="service-card">
                  <svg class="icon" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fill="currentColor"
                      d="M12 3 3 10h2v10h6v-6h2v6h6V10h2L12 3z"
                    />
                  </svg>
                  <h4><a href="/sicherheitsdienst-asylunterkuenfte" data-translate="asylum">Asylunterkünfte</a></h4>
                  <p data-translate="asylum-desc">
                    Sicherheitsdienstleistungen für Asylunterkünfte
                  </p>
                </article>
                <article class="service-card">
                  <svg class="icon" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fill="currentColor"
                      d="M7 2h2v2h6V2h2v2h3v18H4V4h3V2zm13 8H4v10h16V10z"
                    />
                  </svg>
                  <h4>
                    <a href="/veranstaltungsschutz-augsburg" data-translate="event-security">Veranstaltungssicherheit</a>
                  </h4>
                  <p data-translate="event-security-desc">
                    Umfassender Sicherheitsservice für Ihre Veranstaltungen
                  </p>
                </article>
                <article class="service-card">
                  <svg class="icon" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fill="currentColor"
                      d="M12 3 4 7v6c0 5 3.4 8.4 8 9 4.6-.6 8-4 8-9V7l-8-4zm0 10.5-5-2.2V8.4L12 11l5-2.6v2.9l-5 2.2z"
                    />
                  </svg>
                  <h4>
                    <a href="/empfangsdienst-augsburg" data-translate="reception-services">Empfangs- und Doorman-Services</a>
                  </h4>
                  <p data-translate="reception-services-desc">
                    Professioneller Empfangs- und Doorman-Service
                  </p>
                </article>
                <article class="service-card">
                  <svg class="icon" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fill="currentColor"
                      d="M12 2 4 5v6c0 5.25 3.4 10.17 8 11.45C16.6 21.17 20 16.25 20 11V5l-8-3zm-1 14-3.5-3.5 1.4-1.4L11 13.2l5.1-5.1 1.4 1.4L11 16z"
                    />
                  </svg>
                  <h4><a href="/personenschutz-augsburg" data-translate="personal-protection">Personenschutz</a></h4>
                  <p data-translate="personal-protection-desc">
                    Individueller Schutz für Ihre Sicherheit
                  </p>
                </article>
              </div>
            </div>

            <div class="service-category">
              <h3><a href="/gebaeudeservice-augsburg" data-translate="other-services">Dienstleistungen</a></h3>
              <div class="services-grid">
                <article class="service-card">
                  <svg class="icon" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fill="currentColor"
                      d="M15.5 4 14 6H3v2c2 .5 3.5 2.4 3.5 4.5S5 16.5 3 17v2h18v-2c-2-.5-3.5-2.4-3.5-4.5S19 8.5 21 8V6h-5.5L14 4h1.5z"
                    />
                  </svg>
                  <h4>
                    <a href="/bueroreinigung-augsburg" data-translate="office-cleaning">Büro- und Unterhaltsreinigung</a>
                  </h4>
                  <p data-translate="office-cleaning-desc">
                    Professionelle Reinigung für Büros und Gebäude
                  </p>
                </article>
                <article class="service-card">
                  <svg class="icon" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fill="currentColor"
                      d="M22.7 19.3 18 14.6l1.4-1.4-1.8-1.8 1.4-1.4-1.8-1.8 1.4-1.4L14.4 3 3 14.4l3.4 3.4 1.4-1.4 1.8 1.8 1.4-1.4 1.8 1.8 1.4-1.4 4.7 4.7c.4.4 1 .4 1.4 0l2.4-2.4c.4-.4.4-1 0-1.4z"
                    />
                  </svg>
                  <h4>
                    <a href="/hausmeisterservice-augsburg" data-translate="maintenance-service">Hausmeisterservice</a>
                  </h4>
                  <p data-translate="maintenance-service-desc">
                    Umfassender Hausmeisterservice für Ihre Immobilie
                  </p>
                </article>
                <article class="service-card">
                  <svg class="icon" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fill="currentColor"
                      d="M11 21H3v-2h6.6L3 12.4 4.4 11 21 20.2V21h-8l4-7H9l2 7z"
                    />
                  </svg>
                  <h4>
                    <a href="/treppenhausreinigung-augsburg" data-translate="staircase-cleaning">Treppenhaus- und Gemeinschaftsflächen</a>
                  </h4>
                  <p data-translate="staircase-cleaning-desc">
                    Professionelle Reinigung von Treppenhäusern und
                    Gemeinschaftsflächen
                  </p>
                </article>
                <article class="service-card">
                  <svg class="icon" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fill="currentColor"
                      d="M11 2h2v4.1A7 7 0 1 1 5.1 13H2v-2h4.1A7.01 7.01 0 0 1 11 6.1V2zm1 6a5 5 0 1 0 0 10 5 5 0 0 0 0-10z"
                    />
                  </svg>
                  <h4>
                    <a href="/winterdienst-gartenpflege-augsburg" data-translate="winter-service">Winterdienst und Gartenpflege</a>
                  </h4>
                  <p data-translate="winter-service-desc">
                    Winterdienst und professionelle Gartenpflege
                  </p>
                </article>
                <article class="service-card">
                  <svg class="icon" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fill="currentColor"
                      d="M7 3h10l1 4H6l1-4zm-2 6h14v2H5V9zm1 4h12l-1.2 8H7.2L6 13z"
                    />
                  </svg>
                  <h4><a href="/baureinigung-augsburg" data-translate="construction-cleaning">Baureinigung</a></h4>
                  <p data-translate="construction-cleaning-desc">
                    Professionelle Baureinigung und Aufräumarbeiten
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="work" class="work">
        <div class="container">
          <h2 data-translate="service-images">Einblicke in unsere Arbeit</h2>
          <div class="work-grid">
            <figure class="work-item">
              <img
                src="images/work/security-jacket.jpg"
                alt="Sicherheitsmitarbeiter mit Security-Aufdruck auf einem Bahnsteig"
                width="1200"
                height="1200"
                loading="lazy"
              />
            </figure>
            <figure class="work-item">
              <img
                src="images/work/personal-protection.jpg"
                alt="Personenschützer im Anzug mit Ohrhörer vor einem Fahrzeug"
                width="1200"
                height="1200"
                loading="lazy"
              />
            </figure>
            <figure class="work-item">
              <img
                src="images/work/officer.jpg"
                alt="Sicherheitsmitarbeiter bewacht den Eingang eines Gebäudes"
                width="1200"
                height="1200"
                loading="lazy"
              />
            </figure>
            <figure class="work-item">
              <img
                src="images/work/cleaning-team.jpg"
                alt="Reinigungsteam reinigt eine Küche"
                width="1200"
                height="1200"
                loading="lazy"
              />
            </figure>
            <figure class="work-item">
              <img
                src="images/work/facility-cleaning.jpg"
                alt="Reinigungskraft mit Eimer voller Reinigungsmittel"
                width="1200"
                height="1200"
                loading="lazy"
              />
            </figure>
          </div>
        </div>
      </section>

      <section class="stats" aria-label="Kennzahlen">
        <div class="container">
          <div class="stats-grid">
            <div class="stat-item">
              <p class="stat-number">+350</p>
              <p data-translate="completed-projects">Abgeschlossene Projekte</p>
            </div>
            <div class="stat-item">
              <p class="stat-number">+300</p>
              <p data-translate="satisfied-customers">Zufriedene Kunden</p>
            </div>
            <div class="stat-item">
              <p class="stat-number">+5</p>
              <p data-translate="ongoing-projects">Laufende Projekte</p>
            </div>
            <div class="stat-item">
              <p class="stat-number">+100</p>
              <p data-translate="positive-comments">Positive Rückmeldungen</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" class="contact">
        <div class="container">
          <h2 data-translate="call-us">Wir rufen Sie an</h2>
          <p class="contact-lead" data-translate="contact-lead">
            Hinterlassen Sie Ihre Nummer – wir melden uns zeitnah bei Ihnen.
          </p>
          <div class="contact-content">
            <form class="contact-form" method="POST" action="/api/send-email">
              <div class="hp" aria-hidden="true">
                <label for="website">Website</label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  tabindex="-1"
                  autocomplete="off"
                  aria-hidden="true"
                />
              </div>
              <div class="form-group">
                <label for="name" data-translate="name-label">Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  data-translate-placeholder="name"
                  placeholder="Name Nachname"
                  autocomplete="name"
                  required
                />
              </div>
              <div class="form-group">
                <label for="phone" data-translate="phone-label">Telefon</label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  data-translate-placeholder="phone"
                  placeholder="Telefonnummer"
                  autocomplete="tel"
                  required
                />
              </div>
              <div class="form-group">
                <label for="message" data-translate="message-label"
                  >Nachricht</label
                >
                <textarea
                  id="message"
                  name="message"
                  data-translate-placeholder="message"
                  placeholder="Ihre Nachricht"
                  required
                ></textarea>
              </div>
              <div class="form-feedback" hidden></div>
              <button type="submit" class="btn" data-translate="send">
                Senden
              </button>
            </form>
            <div class="contact-info">
              <div class="info-item">
                <svg class="icon" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.2 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8z"
                  />
                </svg>
                <a href="tel:+4917641386420">0176 413 86 420</a>
              </div>
              <div class="info-item">
                <svg class="icon" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5s2.5 1.1 2.5 2.5S13.4 11.5 12 11.5z"
                  />
                </svg>
                <a
                  href="https://maps.google.com/?q=Siegfried-Aufh%C3%A4user+Str.+12B,+86157+Augsburg"
                  target="_blank"
                  rel="noopener noreferrer"
                  >Siegfried-Aufhäuser Str. 12B<br />86157 Augsburg</a
                >
              </div>
              <div class="info-item">
                <svg class="icon" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"
                  />
                </svg>
                <a href="mailto:info@mts-sicherheit.com"
                  >info@mts-sicherheit.com</a
                >
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer>
      <div class="container">
        <p>
          &copy; <span id="year">2026</span> MTS Security.
          <span data-translate="rights">Alle Rechte vorbehalten.</span>
        </p>
        <p class="footer-links">
          <a href="/impressum" data-translate="imprint">Impressum</a>
          <a href="/datenschutz" data-translate="privacy">Datenschutz</a>
        </p>
      </div>
    </footer>

    <script src="${asset('script.js')}"></script>
  </body>
</html>
`;
}
