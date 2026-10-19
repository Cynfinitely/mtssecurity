/**
 * Facility service pages (hub: /gebaeudeservice-augsburg). Same copy rules as
 * security.mjs.
 */

/** @typedef {import('./services.mjs').Service} Service */

/** @type {Service[]} */
export const facilityServices = [
  {
    slug: 'bueroreinigung-augsburg',
    category: 'facility',
    name: 'Büro- und Unterhaltsreinigung',
    serviceType: 'Büroreinigung',
    icon: 'M15.5 4 14 6H3v2c2 .5 3.5 2.4 3.5 4.5S5 16.5 3 17v2h18v-2c-2-.5-3.5-2.4-3.5-4.5S19 8.5 21 8V6h-5.5L14 4h1.5z',
    cardText:
      'Regelmäßige Reinigung von Büros, Praxen und Gewerbeflächen nach festem Plan.',
    title: 'Büroreinigung & Unterhaltsreinigung Augsburg | MTS Security',
    description:
      'Büroreinigung und Unterhaltsreinigung in Augsburg: regelmäßige Reinigung von Büros, Praxen und Gewerbeflächen nach festem Plan. Jetzt Angebot anfordern.',
    h1: 'Büro- und Unterhaltsreinigung in Augsburg',
    lead: 'Saubere Büros und Gewerbeflächen nach festem Reinigungsplan – zuverlässig, gründlich und abgestimmt auf Ihre Arbeitszeiten.',
    image: {
      opt: 'work-cleaning-team',
      jpg: 'work/cleaning-team.jpg',
      width: 1200,
      height: 1200,
      alt: 'Reinigungsteam reinigt eine Küche',
    },
    intro: [
      'Ein sauberer Arbeitsplatz tut der Gesundheit Ihrer Mitarbeiter gut und prägt den Eindruck bei Kunden und Besuchern. Mit unserer Unterhaltsreinigung bleiben Büros, Praxen und Gewerbeflächen in Augsburg dauerhaft gepflegt.',
      'Gemeinsam mit Ihnen legen wir fest, welche Bereiche wie oft gereinigt werden – täglich, mehrmals pro Woche oder wöchentlich. Auf Wunsch reinigen wir außerhalb Ihrer Geschäftszeiten, damit Ihr Betrieb ungestört weiterläuft.',
    ],
    tasks: [
      'Reinigung von Arbeitsplätzen, Schreibtischen und Oberflächen',
      'Leeren von Papierkörben und Abfallbehältern',
      'Bodenreinigung: Saugen, Wischen und Pflege verschiedener Beläge',
      'Reinigung von Sanitär- und Sozialräumen, Auffüllen von Verbrauchsmaterial',
      'Reinigung von Küchen und Teeküchen',
      'Reinigung von Glasflächen, Türen und Griffen',
      'Reinigung von Eingangsbereichen und Fluren',
    ],
    audiences: {
      heading: 'Für wen?',
      items: [
        'Büros und Verwaltungen',
        'Arztpraxen, Kanzleien und Agenturen',
        'Einzelhandel und Showrooms',
        'Schulungs- und Besprechungsräume',
      ],
    },
    sections: [
      {
        heading: 'Fester Plan, gleichbleibende Qualität',
        paragraphs: [
          'Ein klar definiertes Leistungsverzeichnis legt fest, was bei jeder Reinigung erledigt wird. So wissen Sie genau, was Sie bekommen – und wir können die Qualität regelmäßig überprüfen.',
        ],
      },
      {
        heading: 'Reinigung und Sicherheit aus einer Hand',
        paragraphs: [
          'Viele Kunden kombinieren die Unterhaltsreinigung mit Objektschutz oder Empfangsdienst. Das spart Abstimmungsaufwand: ein Dienstleister und ein Ansprechpartner für Ihr Gebäude.',
        ],
      },
    ],
    faq: [
      {
        q: 'Wie oft sollte ein Büro gereinigt werden?',
        a: 'Das hängt von Größe, Nutzung und Besucheraufkommen ab. Viele Büros werden zwei- bis fünfmal pro Woche gereinigt, Sanitärräume oft täglich. Nach der Besichtigung empfehlen wir Ihnen einen passenden Rhythmus.',
      },
      {
        q: 'Reinigen Sie auch außerhalb der Geschäftszeiten?',
        a: 'Ja, auf Wunsch reinigen wir früh morgens oder abends, damit Ihr Arbeitsalltag nicht gestört wird.',
      },
      {
        q: 'Was kostet die Büroreinigung?',
        a: 'Der Preis richtet sich nach Fläche, Reinigungsintervall und Leistungsumfang. Nach einer Besichtigung erhalten Sie ein transparentes Angebot.',
      },
    ],
    related: [
      'treppenhausreinigung-augsburg',
      'hausmeisterservice-augsburg',
      'baureinigung-augsburg',
    ],
    updated: '2026-10-19',
  },
  {
    slug: 'hausmeisterservice-augsburg',
    category: 'facility',
    name: 'Hausmeisterservice',
    serviceType: 'Hausmeisterservice',
    icon: 'M22.7 19.3 18 14.6l1.4-1.4-1.8-1.8 1.4-1.4-1.8-1.8 1.4-1.4L14.4 3 3 14.4l3.4 3.4 1.4-1.4 1.8 1.8 1.4-1.4 1.8 1.8 1.4-1.4 4.7 4.7c.4.4 1 .4 1.4 0l2.4-2.4c.4-.4.4-1 0-1.4z',
    cardText:
      'Kontrollgänge, Kleinreparaturen und Betreuung von Haustechnik und Außenanlagen.',
    title: 'Hausmeisterservice in Augsburg & Bayern | MTS Security',
    description:
      'Hausmeisterservice in Augsburg: Kontrollgänge, Kleinreparaturen, Pflege der Außenanlagen und Betreuung der Haustechnik für Wohn- und Gewerbeimmobilien.',
    h1: 'Hausmeisterservice in Augsburg',
    lead: 'Wir kümmern uns um Ihre Immobilie: regelmäßige Kontrollen, kleine Reparaturen und gepflegte Außenanlagen – damit Gebäude und Technik in gutem Zustand bleiben.',
    image: null,
    intro: [
      'Eine Immobilie braucht laufende Aufmerksamkeit. Kleine Mängel, die früh erkannt werden, werden nicht zu großen Schäden. Unser Hausmeisterservice übernimmt die regelmäßige Betreuung von Wohnanlagen und Gewerbeimmobilien in Augsburg und Umgebung.',
      'Sie legen fest, welche Aufgaben wir übernehmen – von festen Kontrollgängen bis zur Betreuung nach Bedarf. Für Eigentümer, Hausverwaltungen und Mieter sind wir ein verlässlicher Ansprechpartner.',
    ],
    tasks: [
      'Regelmäßige Objektbegehungen und Sichtkontrollen',
      'Kleinreparaturen und Austausch von Leuchtmitteln',
      'Kontrolle von Heizung, Beleuchtung und Gemeinschaftsanlagen',
      'Mülltonnenservice und Pflege der Müllplätze',
      'Pflege von Außenanlagen und Grünflächen',
      'Koordination und Begleitung von Handwerkern',
      'Ablesen von Zählerständen',
      'Schließdienste und Schlüsselverwaltung',
    ],
    audiences: {
      heading: 'Für wen?',
      items: [
        'Hausverwaltungen und Eigentümergemeinschaften',
        'Eigentümer von Mehrfamilienhäusern',
        'Gewerbe- und Büroimmobilien',
        'Öffentliche Einrichtungen',
      ],
    },
    sections: [
      {
        heading: 'Alles im Blick, bevor Schäden entstehen',
        paragraphs: [
          'Bei regelmäßigen Rundgängen prüfen wir Treppenhäuser, Keller, Außenanlagen und technische Einrichtungen. Auffälligkeiten melden wir Ihnen umgehend und kümmern uns nach Absprache um kleinere Reparaturen oder die Beauftragung eines Fachbetriebs.',
        ],
      },
      {
        heading: 'Kombinierbar mit Reinigung und Winterdienst',
        paragraphs: [
          'Hausmeisterservice, Treppenhausreinigung, Gartenpflege und Winterdienst lassen sich gut kombinieren. Sie haben einen Dienstleister für Ihr Objekt und sparen Abstimmungsaufwand.',
        ],
      },
    ],
    faq: [
      {
        q: 'Was gehört zu einem Hausmeisterservice?',
        a: 'Typische Leistungen sind Kontrollgänge, kleinere Reparaturen, die Betreuung von Haustechnik und Gemeinschaftsanlagen, der Mülltonnenservice und die Pflege der Außenanlagen. Welche Aufgaben wir übernehmen, legen Sie fest.',
      },
      {
        q: 'Führen Sie auch Reparaturen durch?',
        a: 'Kleinere Reparaturen übernehmen wir selbst. Für Arbeiten, die einen Fachbetrieb erfordern – etwa an Elektrik, Gas oder Heizung – koordinieren wir die passenden Handwerker.',
      },
      {
        q: 'Betreuen Sie auch mehrere Objekte einer Hausverwaltung?',
        a: 'Ja. Wir betreuen auch mehrere Objekte und stimmen Leistungen und Intervalle für jedes Objekt einzeln ab.',
      },
      {
        q: 'Was kostet ein Hausmeisterservice?',
        a: 'Der Preis hängt von der Größe des Objekts, dem Leistungsumfang und der Häufigkeit der Einsätze ab. Nach einer Besichtigung erhalten Sie ein transparentes Angebot.',
      },
    ],
    related: [
      'treppenhausreinigung-augsburg',
      'winterdienst-gartenpflege-augsburg',
      'objektschutz-augsburg',
    ],
    updated: '2026-10-19',
  },
  {
    slug: 'treppenhausreinigung-augsburg',
    category: 'facility',
    name: 'Treppenhausreinigung',
    serviceType: 'Treppenhausreinigung',
    icon: 'M11 21H3v-2h6.6L3 12.4 4.4 11 21 20.2V21h-8l4-7H9l2 7z',
    cardText:
      'Saubere Treppenhäuser, Eingänge und Gemeinschaftsflächen in Wohn- und Geschäftshäusern.',
    title: 'Treppenhausreinigung in Augsburg | MTS Security',
    description:
      'Treppenhausreinigung in Augsburg: regelmäßige Reinigung von Treppenhäusern, Eingängen und Gemeinschaftsflächen in Wohn- und Geschäftshäusern.',
    h1: 'Treppenhausreinigung in Augsburg',
    lead: 'Gepflegte Treppenhäuser, Eingangsbereiche und Gemeinschaftsflächen – regelmäßig gereinigt, damit sich Bewohner und Besucher wohlfühlen.',
    image: {
      opt: 'hero-facility-vacuum',
      jpg: 'hero/facility-vacuum.jpg',
      width: 1600,
      height: 1066,
      alt: 'Reinigungskraft in roter Latzhose mit Staubsauger',
    },
    intro: [
      'Das Treppenhaus ist die Visitenkarte eines Hauses. Saubere Eingänge, Treppen und Flure sorgen für einen guten ersten Eindruck und für zufriedene Mieter. Wir übernehmen die Treppenhausreinigung für Wohn- und Geschäftshäuser in Augsburg und Umgebung.',
      'Gerade in Mehrfamilienhäusern entlastet eine professionelle Reinigung Eigentümer und Bewohner: Niemand muss sich um Putzpläne kümmern, und die Sauberkeit bleibt gleichmäßig hoch.',
    ],
    tasks: [
      'Kehren und Wischen von Treppen, Podesten und Fluren',
      'Reinigung von Handläufen, Geländern und Türgriffen',
      'Reinigung von Eingangstüren, Briefkastenanlagen und Klingeltableaus',
      'Reinigung von Aufzugskabinen',
      'Reinigung von Fensterbänken und Glasflächen im Treppenhaus',
      'Reinigung von Keller-, Dachboden- und Fahrradräumen',
      'Entfernen von Spinnweben',
    ],
    audiences: {
      heading: 'Für wen?',
      items: [
        'Hausverwaltungen und Eigentümergemeinschaften',
        'Vermieter von Mehrfamilienhäusern',
        'Wohn- und Geschäftshäuser',
        'Bürogebäude mit gemeinsamen Fluren',
      ],
    },
    sections: [
      {
        heading: 'Regelmäßig und nachvollziehbar',
        paragraphs: [
          'Wir reinigen in festen Intervallen, zum Beispiel wöchentlich oder alle zwei Wochen. Welche Arbeiten bei jedem Termin erledigt werden und welche in größeren Abständen, legen wir in einem klaren Leistungsverzeichnis fest.',
        ],
      },
      {
        heading: 'Für Hausverwaltungen gut kombinierbar',
        paragraphs: [
          'Zusammen mit Hausmeisterservice, Winterdienst und Gartenpflege erhalten Sie alle Leistungen rund um Ihr Objekt von einem Dienstleister.',
        ],
      },
    ],
    faq: [
      {
        q: 'Wie oft sollte ein Treppenhaus gereinigt werden?',
        a: 'In den meisten Mehrfamilienhäusern ist eine wöchentliche Reinigung sinnvoll. Bei vielen Parteien oder hohem Besucheraufkommen kann eine häufigere Reinigung nötig sein.',
      },
      {
        q: 'Können die Kosten auf die Mieter umgelegt werden?',
        a: 'Kosten der Gebäudereinigung gehören in der Regel zu den umlagefähigen Betriebskosten (§ 2 Nr. 9 Betriebskostenverordnung). Maßgeblich sind die Vereinbarungen im Mietvertrag.',
      },
      {
        q: 'Reinigen Sie auch Aufzüge und Kellerräume?',
        a: 'Ja, auf Wunsch reinigen wir auch Aufzugskabinen sowie Keller-, Dachboden- und Fahrradräume. Den Umfang legen wir gemeinsam fest.',
      },
      {
        q: 'Was kostet die Treppenhausreinigung?',
        a: 'Der Preis richtet sich nach der Größe des Hauses, der Anzahl der Etagen und dem Reinigungsintervall. Nach einer Besichtigung erhalten Sie ein transparentes Angebot.',
      },
    ],
    related: [
      'hausmeisterservice-augsburg',
      'bueroreinigung-augsburg',
      'winterdienst-gartenpflege-augsburg',
    ],
    updated: '2026-10-19',
  },
  {
    slug: 'winterdienst-gartenpflege-augsburg',
    category: 'facility',
    name: 'Winterdienst und Gartenpflege',
    serviceType: 'Winterdienst und Gartenpflege',
    icon: 'M11 2h2v4.1A7 7 0 1 1 5.1 13H2v-2h4.1A7.01 7.01 0 0 1 11 6.1V2zm1 6a5 5 0 1 0 0 10 5 5 0 0 0 0-10z',
    cardText:
      'Schneeräumen und Streuen im Winter, Rasen-, Hecken- und Beetpflege im Sommer.',
    title: 'Winterdienst & Gartenpflege in Augsburg | MTS Security',
    description:
      'Winterdienst und Gartenpflege in Augsburg: Schneeräumen, Streuen, Rasenmähen und Heckenschnitt für Wohnanlagen und Gewerbeflächen – das ganze Jahr.',
    h1: 'Winterdienst und Gartenpflege in Augsburg',
    lead: 'Sichere Wege im Winter, gepflegte Außenanlagen im Sommer – wir kümmern uns das ganze Jahr um die Außenflächen Ihrer Immobilie.',
    image: null,
    intro: [
      'Als Eigentümer oder Verwalter sind Sie für sichere Wege rund um Ihr Grundstück verantwortlich. Mit unserem Winterdienst werden Gehwege, Zugänge und Parkflächen in Augsburg bei Schnee und Glätte geräumt und gestreut.',
      'In der übrigen Zeit des Jahres sorgt unsere Gartenpflege dafür, dass Grünflächen, Hecken und Wege gepflegt aussehen. So bleibt der Außenbereich Ihrer Immobilie das ganze Jahr in gutem Zustand.',
    ],
    tasks: [
      'Schneeräumen von Gehwegen, Zugängen und Parkplätzen',
      'Streuen bei Glätte',
      'Kontrolle der Flächen bei Schneefall und Frost',
      'Dokumentation der Winterdiensteinsätze',
      'Rasenmähen und Rasenpflege',
      'Hecken- und Strauchschnitt',
      'Laubbeseitigung und Beetpflege',
      'Entsorgung von Grünschnitt',
    ],
    audiences: {
      heading: 'Für wen?',
      items: [
        'Hausverwaltungen und Eigentümergemeinschaften',
        'Gewerbe- und Büroimmobilien',
        'Einzelhandel mit Kundenparkplätzen',
        'Öffentliche Einrichtungen',
      ],
    },
    sections: [
      {
        heading: 'Winterdienst: Verkehrssicherungspflicht erfüllen',
        paragraphs: [
          'Wer Gehwege und Zugänge bei Schnee und Eis nicht räumt und streut, kann bei Unfällen haften. Welche Pflichten im Einzelnen gelten, regelt die Satzung der jeweiligen Stadt oder Gemeinde. Wir übernehmen die Räum- und Streuarbeiten und dokumentieren unsere Einsätze, damit Sie nachweisen können, dass geräumt wurde.',
        ],
      },
      {
        heading: 'Gartenpflege nach Saison',
        paragraphs: [
          'Von der Frühjahrspflege über das regelmäßige Mähen bis zum Laub im Herbst: Wir legen gemeinsam fest, welche Arbeiten in welchem Rhythmus anfallen, und erledigen sie zuverlässig.',
        ],
      },
    ],
    faq: [
      {
        q: 'Zu welchen Zeiten muss im Winter geräumt werden?',
        a: 'Die genauen Zeiten legt die Satzung Ihrer Stadt oder Gemeinde fest. Wir richten unsere Einsätze nach den Vorgaben, die für Ihr Objekt gelten.',
      },
      {
        q: 'Welche Flächen übernehmen Sie?',
        a: 'Gehwege vor dem Grundstück, Hauszugänge, Zufahrten, Parkplätze und Hofflächen. Den genauen Umfang legen wir anhand eines Lageplans oder einer Besichtigung fest.',
      },
      {
        q: 'Kann ich Winterdienst und Gartenpflege zusammen beauftragen?',
        a: 'Ja. Viele Kunden beauftragen uns ganzjährig: im Winter mit dem Räum- und Streudienst, in der übrigen Zeit mit der Pflege der Außenanlagen.',
      },
      {
        q: 'Was kosten Winterdienst und Gartenpflege?',
        a: 'Die Kosten hängen von der Größe der Flächen und dem Leistungsumfang ab. Nach einer Besichtigung erhalten Sie ein transparentes Angebot.',
      },
    ],
    related: [
      'hausmeisterservice-augsburg',
      'treppenhausreinigung-augsburg',
      'objektschutz-augsburg',
    ],
    updated: '2026-10-19',
  },
  {
    slug: 'baureinigung-augsburg',
    category: 'facility',
    name: 'Baureinigung',
    serviceType: 'Baureinigung',
    icon: 'M7 3h10l1 4H6l1-4zm-2 6h14v2H5V9zm1 4h12l-1.2 8H7.2L6 13z',
    cardText:
      'Grob-, Zwischen- und Bauendreinigung nach Neubau, Umbau oder Renovierung.',
    title: 'Baureinigung & Bauendreinigung in Augsburg | MTS Security',
    description:
      'Baureinigung in Augsburg: Grob-, Zwischen- und Bauendreinigung nach Neubau, Umbau oder Renovierung – damit Ihre Räume schnell bezugsfertig sind.',
    h1: 'Baureinigung in Augsburg',
    lead: 'Von der Grobreinigung während der Bauphase bis zur Bauendreinigung vor der Übergabe – wir machen Ihre Räume bezugsfertig.',
    image: {
      opt: 'work-facility-cleaning',
      jpg: 'work/facility-cleaning.jpg',
      width: 1200,
      height: 1200,
      alt: 'Reinigungskraft mit Handschuhen hält einen Eimer mit Reinigungsmitteln',
    },
    intro: [
      'Nach Neubau, Umbau oder Renovierung bleiben Staub, Mörtelreste, Farbspritzer und Verpackungsmaterial zurück. Eine gründliche Baureinigung ist die Voraussetzung dafür, dass Räume übergeben und genutzt werden können.',
      'MTS Security übernimmt Baureinigungen für Bauunternehmen, Bauträger, Handwerksbetriebe und private Bauherren in Augsburg und Umgebung – abgestimmt auf Ihren Bauzeitenplan.',
    ],
    tasks: [
      'Baugrobreinigung: Entfernen von Bauschutt, Verpackungen und grobem Schmutz',
      'Bauzwischenreinigung während laufender Arbeiten',
      'Bauendreinigung vor Übergabe oder Einzug',
      'Entfernen von Baustaub auf allen Flächen, auch in schwer zugänglichen Bereichen',
      'Reinigung von Fenstern, Rahmen und Glasflächen inklusive Aufkleberentfernung',
      'Reinigung von Böden, Fliesen, Sanitärobjekten und Heizkörpern',
      'Aufräumarbeiten nach Absprache',
    ],
    audiences: {
      heading: 'Für wen?',
      items: [
        'Bauunternehmen und Bauträger',
        'Handwerksbetriebe',
        'Hausverwaltungen nach Sanierungen',
        'Private Bauherren',
      ],
    },
    sections: [
      {
        heading: 'Grob-, Zwischen- und Endreinigung',
        paragraphs: [
          'Die Baugrobreinigung schafft während der Bauphase Ordnung und sichere Arbeitswege. Die Bauzwischenreinigung hält die Baustelle zwischen einzelnen Gewerken sauber. Die Bauendreinigung entfernt schließlich alle Spuren der Bauarbeiten, sodass die Räume übergeben werden können.',
        ],
      },
      {
        heading: 'Pünktlich zur Übergabe',
        paragraphs: [
          'Bei Bauprojekten zählt jeder Tag. Wir stimmen Termine eng mit Ihrer Bauleitung ab, damit die Reinigung zum geplanten Übergabetermin abgeschlossen ist. Auf Wunsch übernehmen wir zusätzlich die Bewachung der Baustelle.',
        ],
      },
    ],
    faq: [
      {
        q: 'Was ist der Unterschied zwischen Baugrob- und Bauendreinigung?',
        a: 'Die Baugrobreinigung entfernt während der Bauphase groben Schmutz und Bauschutt. Die Bauendreinigung ist die abschließende Feinreinigung vor der Übergabe oder dem Einzug.',
      },
      {
        q: 'Wann sollte die Bauendreinigung eingeplant werden?',
        a: 'Planen Sie die Reinigung möglichst früh in Ihren Bauzeitenplan ein, idealerweise nach Abschluss aller Gewerke und vor der Abnahme. Wir stimmen den Termin mit Ihrer Bauleitung ab.',
      },
      {
        q: 'Was kostet eine Baureinigung?',
        a: 'Der Preis richtet sich nach Fläche, Verschmutzungsgrad und Art der Reinigung. Nach einer Besichtigung erhalten Sie ein transparentes Angebot.',
      },
    ],
    related: [
      'bueroreinigung-augsburg',
      'objektschutz-augsburg',
      'hausmeisterservice-augsburg',
    ],
    updated: '2026-10-19',
  },
];
