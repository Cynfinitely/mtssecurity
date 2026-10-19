/**
 * Category hub pages. Each hub lists the services of its category and links
 * to them; service pages link back through the breadcrumb.
 */

/**
 * @typedef {{
 *   slug: string,
 *   category: 'security' | 'facility',
 *   name: string,
 *   eyebrow: string,
 *   title: string,
 *   description: string,
 *   h1: string,
 *   lead: string,
 *   intro: string[],
 *   servicesHeading: string,
 *   steps: { title: string, text: string }[],
 *   faq: { q: string, a: string }[],
 *   ogImage: string,
 *   updated: string,
 * }} Hub
 */

/** Shared reasons on both hubs. Keep these free of unconfirmed facts. */
export const reasons = [
  {
    title: 'Aus Augsburg für Bayern',
    text: 'Als Unternehmen aus Augsburg kennen wir die Region und sind für Kunden in der Stadt, im Umland und in ganz Bayern im Einsatz.',
  },
  {
    title: 'Sicherheit und Gebäudeservice aus einer Hand',
    text: 'Objektschutz, Empfang, Reinigung und Hausmeisterservice lassen sich kombinieren – mit einem Ansprechpartner für alles.',
  },
  {
    title: 'Individuelle Lösungen',
    text: 'Keine Standardpakete: Umfang, Zeiten und Abläufe richten sich nach Ihrem Objekt und Ihren Anforderungen.',
  },
  {
    title: 'Klare Absprachen',
    text: 'Transparente Angebote, feste Abläufe und nachvollziehbare Dokumentation – damit Sie wissen, was Sie bekommen.',
  },
];

/** @type {Hub[]} */
export const hubs = [
  {
    slug: 'sicherheitsdienst-augsburg',
    category: 'security',
    name: 'Sicherheitsdienst',
    eyebrow: 'Sicherheitsdienste',
    title: 'Sicherheitsdienst in Augsburg & Bayern | MTS Security',
    description:
      'Sicherheitsdienst aus Augsburg: Objektschutz, Veranstaltungsschutz, Personenschutz, Empfangsdienst und Schutz von Unterkünften – in ganz Bayern.',
    h1: 'Sicherheitsdienst in Augsburg',
    lead: 'MTS Security ist Ihr Sicherheitsdienst mit Sitz in Augsburg. Wir schützen Gebäude, Veranstaltungen und Menschen – in Augsburg und ganz Bayern.',
    intro: [
      'Sicherheit bedeutet für jeden Kunden etwas anderes: für ein Unternehmen den Schutz des Firmengeländes, für einen Veranstalter einen geordneten Einlass, für eine Hausverwaltung die Kontrolle leerstehender Räume. Deshalb beginnt jeder Auftrag bei uns mit einer genauen Analyse Ihres Bedarfs.',
      'Auf dieser Grundlage stellen wir die passenden Leistungen zusammen – vom einzelnen Einsatz bis zur dauerhaften Betreuung. Sie erhalten ein klares, nachvollziehbares Angebot.',
    ],
    servicesHeading: 'Unsere Sicherheitsdienste',
    steps: [
      {
        title: 'Anfrage',
        text: 'Sie schildern uns telefonisch oder über das Kontaktformular, was Sie schützen möchten.',
      },
      {
        title: 'Bedarfsanalyse',
        text: 'Wir sehen uns Objekt oder Veranstaltung an und klären Risiken, Abläufe und Einsatzzeiten.',
      },
      {
        title: 'Angebot',
        text: 'Sie erhalten ein verständliches Angebot mit einem auf Ihren Bedarf abgestimmten Einsatzkonzept.',
      },
      {
        title: 'Einsatz',
        text: 'Unsere Mitarbeiter übernehmen den Dienst nach den vereinbarten Abläufen.',
      },
      {
        title: 'Betreuung',
        text: 'Wir bleiben für Sie erreichbar und passen den Einsatz bei Bedarf an.',
      },
    ],
    faq: [
      {
        q: 'Welche Sicherheitsdienstleistungen bietet MTS Security an?',
        a: 'Wir bieten Objektschutz, Veranstaltungsschutz, Personenschutz, Empfangs- und Doorman-Services sowie Sicherheitsdienste für Asyl- und Flüchtlingsunterkünfte an.',
      },
      {
        q: 'In welchen Regionen ist MTS Security tätig?',
        a: 'Unser Sitz ist in Augsburg. Wir sind in Augsburg, im Landkreis Augsburg und in Aichach-Friedberg tätig und übernehmen nach Absprache Einsätze in ganz Bayern.',
      },
      {
        q: 'Wie erhalte ich ein Angebot?',
        a: 'Rufen Sie uns an oder hinterlassen Sie Ihre Nummer über das Kontaktformular. Wir melden uns zeitnah, klären Ihren Bedarf und erstellen Ihnen ein individuelles Angebot.',
      },
    ],
    ogImage: 'og-security',
    updated: '2026-10-19',
  },
  {
    slug: 'gebaeudeservice-augsburg',
    category: 'facility',
    name: 'Gebäudeservice',
    eyebrow: 'Dienstleistungen',
    title: 'Gebäudeservice & Reinigung in Augsburg | MTS Security',
    description:
      'Gebäudeservice aus Augsburg: Büroreinigung, Treppenhausreinigung, Hausmeisterservice, Winterdienst, Gartenpflege und Baureinigung aus einer Hand.',
    h1: 'Gebäudeservice in Augsburg',
    lead: 'Reinigung, Hausmeisterservice und Pflege der Außenanlagen – MTS Security kümmert sich um Ihre Immobilie, damit Sie sich auf Ihr Kerngeschäft konzentrieren können.',
    intro: [
      'Gepflegte Gebäude behalten ihren Wert, sorgen für zufriedene Mieter und hinterlassen bei Kunden einen guten Eindruck. Unser Gebäudeservice umfasst die regelmäßigen Arbeiten rund um Ihre Immobilie – innen wie außen.',
      'Sie können einzelne Leistungen beauftragen oder mehrere kombinieren. Gerade für Hausverwaltungen und Unternehmen ist ein Dienstleister für Reinigung, Hausmeisterservice und Winterdienst eine echte Entlastung.',
    ],
    servicesHeading: 'Unsere Dienstleistungen rund ums Gebäude',
    steps: [
      {
        title: 'Anfrage',
        text: 'Sie schildern uns telefonisch oder über das Kontaktformular, welche Leistungen Sie benötigen.',
      },
      {
        title: 'Besichtigung',
        text: 'Wir sehen uns Flächen und Anforderungen vor Ort an.',
      },
      {
        title: 'Angebot',
        text: 'Sie erhalten ein transparentes Angebot mit klar definierten Leistungen und Intervallen.',
      },
      {
        title: 'Start',
        text: 'Unser Team beginnt zum vereinbarten Termin.',
      },
      {
        title: 'Qualitätskontrolle',
        text: 'Wir prüfen die Ergebnisse regelmäßig und bleiben Ihr Ansprechpartner.',
      },
    ],
    faq: [
      {
        q: 'Welche Leistungen umfasst Ihr Gebäudeservice?',
        a: 'Büro- und Unterhaltsreinigung, Treppenhausreinigung, Hausmeisterservice, Winterdienst und Gartenpflege sowie Baureinigung.',
      },
      {
        q: 'Kann ich Gebäudeservice und Sicherheitsdienst kombinieren?',
        a: 'Ja. Viele Kunden beauftragen uns zum Beispiel mit Objektschutz und Unterhaltsreinigung oder mit Empfangsdienst und Hausmeisterservice. Sie haben dann einen Ansprechpartner für alle Leistungen.',
      },
      {
        q: 'Wie erhalte ich ein Angebot?',
        a: 'Rufen Sie uns an oder hinterlassen Sie Ihre Nummer über das Kontaktformular. Wir melden uns zeitnah, sehen uns Ihr Objekt an und erstellen Ihnen ein individuelles Angebot.',
      },
    ],
    ogImage: 'og-facility',
    updated: '2026-10-19',
  },
];

/** @param {'security' | 'facility'} category */
export function hubFor(category) {
  const hub = hubs.find(item => item.category === category);
  if (!hub) throw new Error(`No hub for category ${category}`);
  return hub;
}
