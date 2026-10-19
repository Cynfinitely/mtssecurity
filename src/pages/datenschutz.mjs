import { html } from '../lib/html.mjs';
import { head } from '../lib/layout.mjs';

/** Legal page; served at /datenschutz (cleanUrls). */
export default function render() {
  return html`<!doctype html>
<html lang="de">
${head({
  path: '/datenschutz',
  title: 'Datenschutzerklärung | MTS Security',
  description:
    'Datenschutzerklärung von MTS Security, Augsburg: Hosting, Kontaktformular, keine Tracking-Cookies und Ihre Rechte nach DSGVO.',
  ogImage: { url: '/images/opt/og-security.jpg', width: 1200, height: 630 },
  stylesheets: ['styles.css'],
})}
  <body>
    <header class="navbar">
      <div class="container">
        <a class="logo" href="/">
          <img src="/images/mts-security-logo.png" alt="MTS Security" />
        </a>
        <a class="btn" href="/">Zur Startseite</a>
      </div>
    </header>
    <main class="legal-page">
      <div class="container">
        <h1>Datenschutzerklärung</h1>
        <p class="notice">
          Diese Erklärung beschreibt den aktuellen, cookiefreien Betrieb der
          Website. Sie ist kein Ersatz für eine anwaltlich geprüfte Fassung und
          sollte nach Ergänzung der Firmendaten rechtlich geprüft werden.
        </p>
        <h2>1. Verantwortlicher</h2>
        <p>
          MTS Security<br />
          Siegfried-Aufhäuser Str. 12B<br />
          86157 Augsburg<br />
          E-Mail:
          <a href="mailto:info@mts-sicherheit.com">info@mts-sicherheit.com</a
          ><br />
          Telefon: <a href="tel:+4917641386420">0176 413 86 420</a>
        </p>
        <h2>2. Hosting</h2>
        <p>
          Diese Website wird bei Vercel Inc. gehostet. Beim Aufruf werden
          technisch notwendige Server-Logfiles (z.&nbsp;B. IP-Adresse,
          Zeitpunkt, aufgerufene Seite) verarbeitet, um den Betrieb und die
          Sicherheit der Website zu gewährleisten (Art. 6 Abs. 1 lit. f DSGVO).
        </p>
        <h2>3. Kontaktformular</h2>
        <p>
          Wenn Sie das Kontaktformular nutzen, verarbeiten wir Name,
          Telefonnummer und Nachricht, um Ihre Anfrage zu beantworten (Art. 6
          Abs. 1 lit. b DSGVO). Die Daten werden per E-Mail an uns übermittelt
          und nicht für andere Zwecke verwendet. Eine Pflicht zur Angabe einer
          E-Mail-Adresse besteht nicht.
        </p>
        <h2>4. Cookies und Analyse</h2>
        <p>
          Diese Website setzt keine Tracking-Cookies und keine Analyse-Tools
          (kein Google Analytics, kein Matomo). Es wird lediglich die von Ihnen
          gewählte Sprache im lokalen Speicher Ihres Browsers (localStorage)
          abgelegt. Diese Information verlässt Ihr Gerät nicht.
        </p>
        <h2>5. Speicherdauer</h2>
        <p>
          Anfragen aus dem Kontaktformular speichern wir, solange dies zur
          Bearbeitung und zu gesetzlichen Aufbewahrungspflichten erforderlich
          ist.
        </p>
        <h2>6. Ihre Rechte</h2>
        <p>Sie haben das Recht auf:</p>
        <ul>
          <li>Auskunft über die zu Ihrer Person gespeicherten Daten</li>
          <li>Berichtigung unrichtiger Daten</li>
          <li>Löschung, soweit keine Aufbewahrungspflicht entgegensteht</li>
          <li>Einschränkung der Verarbeitung</li>
          <li>Widerspruch gegen die Verarbeitung</li>
          <li>Datenübertragbarkeit</li>
        </ul>
        <p>
          Außerdem haben Sie das Recht, sich bei einer
          Datenschutzaufsichtsbehörde zu beschweren, insbesondere bei der für
          Bayern zuständigen Stelle.
        </p>
        <h2>7. Stand</h2>
        <p>September 2026</p>
        <p><a href="/">Zurück zur Startseite</a></p>
      </div>
    </main>
    <footer>
      <div class="container">
        <p>&copy; 2026 MTS Security. Alle Rechte vorbehalten.</p>
        <p class="footer-links">
          <a href="/impressum">Impressum</a>
          <a href="/datenschutz">Datenschutz</a>
        </p>
      </div>
    </footer>
  </body>
</html>
`;
}
