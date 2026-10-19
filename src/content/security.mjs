/**
 * Security service pages (hub: /sicherheitsdienst-augsburg).
 *
 * Copy rules (docs/seo.md): German, formal "Sie", no invented facts. No
 * certifications, founding year, response times, prices or customer numbers
 * unless the client has confirmed them.
 */

/** @typedef {import('./services.mjs').Service} Service */

/** @type {Service[]} */
export const securityServices = [
  {
    slug: 'objektschutz-augsburg',
    category: 'security',
    name: 'Objektschutz',
    serviceType: 'Objektschutz',
    icon: 'M4 21V3h7v18H4zm9 0V9h7v12h-7zM6 5h3v2H6V5zm0 4h3v2H6V9zm0 4h3v2H6v-2z',
    cardText:
      'Bewachung von Gebäuden, Firmengeländen und Baustellen mit Kontrollgängen und Zugangskontrolle.',
    title: 'Objektschutz in Augsburg & Bayern | MTS Security',
    description:
      'Objektschutz in Augsburg: Bewachung von Gebäuden, Firmengeländen und Baustellen mit Kontrollgängen und Zugangskontrolle. Jetzt unverbindlich anfragen.',
    h1: 'Objektschutz in Augsburg',
    lead: 'Wir schützen Ihre Gebäude, Firmengelände und Baustellen vor Einbruch, Diebstahl und Vandalismus – mit Sicherheitspersonal vor Ort und Kontrollgängen, die zu Ihrem Objekt passen.',
    image: {
      opt: 'work-officer',
      jpg: 'work/officer.jpg',
      width: 1200,
      height: 1200,
      alt: 'Sicherheitsmitarbeiter steht vor dem Eingang eines Gebäudes',
    },
    intro: [
      'Leerstehende Gebäude, Lagerflächen, Baustellen oder ein Firmengelände nach Feierabend: Überall dort, wo Werte unbeaufsichtigt sind, entsteht ein Risiko. Mit unserem Objektschutz sorgen wir dafür, dass Ihr Objekt in Augsburg und Umgebung kontrolliert, gesichert und dokumentiert ist.',
      'Den Einsatz passen wir an Ihr Objekt an: Ob dauerhafte Präsenz eines Sicherheitsmitarbeiters, regelmäßige Kontrollgänge oder Schließdienste am Abend – Sie erhalten genau den Schutz, den Ihr Gebäude braucht.',
    ],
    tasks: [
      'Bewachung von Gebäuden, Hallen und Firmengeländen',
      'Kontrollgänge und Streifen auf dem Gelände',
      'Zugangs- und Zufahrtskontrolle, Besucher- und Lieferantenmanagement',
      'Schließ- und Öffnungsdienste',
      'Kontrolle von Türen, Fenstern, Toren und technischen Anlagen',
      'Baustellenbewachung zum Schutz von Material und Maschinen',
      'Leerstandsbewachung bei unbewohnten oder unvermieteten Immobilien',
      'Dokumentation aller Rundgänge und Vorkommnisse',
    ],
    audiences: {
      heading: 'Für wen eignet sich unser Objektschutz?',
      items: [
        'Unternehmen mit Büro-, Lager- oder Produktionsflächen',
        'Hausverwaltungen und Immobilieneigentümer',
        'Bauherren und Bauunternehmen',
        'Einzelhandel und Gewerbeparks',
        'Öffentliche Einrichtungen und Kommunen',
      ],
    },
    sections: [
      {
        heading: 'Präsenz, die abschreckt',
        paragraphs: [
          'Sichtbares Sicherheitspersonal ist einer der wirksamsten Wege, Einbrüche und Vandalismus zu verhindern. Unsere Mitarbeiter achten auf verdächtige Personen und Fahrzeuge, kontrollieren Zugänge und reagieren bei Auffälligkeiten – vom Ansprechen unbefugter Personen bis zur Alarmierung von Polizei oder Feuerwehr.',
          'Damit Sie wissen, was auf Ihrem Gelände passiert, dokumentieren wir Rundgänge und Vorkommnisse nachvollziehbar und informieren Sie nach den mit Ihnen vereinbarten Abläufen.',
        ],
      },
      {
        heading: 'Einsatzzeiten nach Ihrem Bedarf',
        paragraphs: [
          'Ob einzelne Nächte, Wochenenden, Betriebsferien oder dauerhafter Schutz: Einsatzzeiten und Umfang stimmen wir individuell mit Ihnen ab. So bezahlen Sie nur den Schutz, den Sie tatsächlich benötigen.',
        ],
      },
    ],
    faq: [
      {
        q: 'Was kostet Objektschutz in Augsburg?',
        a: 'Die Kosten hängen vom Objekt, den Einsatzzeiten und dem gewünschten Umfang ab – etwa davon, ob dauerhaft ein Mitarbeiter vor Ort ist oder regelmäßige Kontrollgänge genügen. Nach einer Besichtigung erhalten Sie ein transparentes Angebot.',
      },
      {
        q: 'Bewachen Sie auch Baustellen?',
        a: 'Ja. Wir schützen Baustellen vor Diebstahl von Material, Werkzeug und Maschinen sowie vor Vandalismus – besonders nachts und am Wochenende, wenn nicht gearbeitet wird.',
      },
      {
        q: 'Was passiert bei einem Vorfall?',
        a: 'Unsere Mitarbeiter handeln nach einem vorher mit Ihnen abgestimmten Ablauf: Sie sichern die Situation, verständigen bei Bedarf Polizei oder Rettungsdienst und informieren die von Ihnen benannten Ansprechpartner. Jeder Vorfall wird dokumentiert.',
      },
      {
        q: 'Kann der Objektschutz kurzfristig beginnen?',
        a: 'Sprechen Sie uns an. Wir prüfen Ihre Anfrage zeitnah und sagen Ihnen offen, ab wann wir den Einsatz übernehmen können.',
      },
    ],
    related: [
      'veranstaltungsschutz-augsburg',
      'empfangsdienst-augsburg',
      'hausmeisterservice-augsburg',
    ],
    updated: '2026-10-19',
  },
  {
    slug: 'veranstaltungsschutz-augsburg',
    category: 'security',
    name: 'Veranstaltungsschutz',
    serviceType: 'Veranstaltungsschutz',
    icon: 'M7 2h2v2h6V2h2v2h3v18H4V4h3V2zm13 8H4v10h16V10z',
    cardText:
      'Einlasskontrolle, Ordnerdienst und Besucherlenkung für Feste, Konzerte und Firmenevents.',
    title: 'Veranstaltungsschutz in Augsburg & Bayern | MTS Security',
    description:
      'Sicherheitsdienst für Veranstaltungen in Augsburg: Einlasskontrolle, Ordnerdienst und Besucherlenkung für Feste, Konzerte und Firmenevents.',
    h1: 'Veranstaltungsschutz in Augsburg',
    lead: 'Sicherheitsdienst für Ihre Veranstaltung – von der Einlasskontrolle über den Ordnerdienst bis zur Besucherlenkung, damit Ihre Gäste sicher feiern und Sie sich auf das Programm konzentrieren können.',
    image: {
      opt: 'hero-security-vest',
      jpg: 'hero/security-vest.jpg',
      width: 1001,
      height: 1600,
      alt: 'Sicherheitsmitarbeiter in gelber Warnweste zwischen Passanten',
    },
    intro: [
      'Ob Stadtfest, Konzert, Messe, Sportveranstaltung oder Firmenfeier: Bei jeder Veranstaltung kommen viele Menschen auf engem Raum zusammen. Ein gut geplanter Sicherheitsdienst sorgt dafür, dass Einlass, Besucherströme und Rettungswege unter Kontrolle bleiben.',
      'MTS Security unterstützt Veranstalter in Augsburg und ganz Bayern – von privaten Feiern bis zu öffentlichen Veranstaltungen. Wir planen den Einsatz gemeinsam mit Ihnen und stimmen uns bei Bedarf mit Behörden, Rettungsdiensten und Ihrem Veranstaltungsteam ab.',
    ],
    tasks: [
      'Einlass- und Ticketkontrolle',
      'Taschen- und Personenkontrollen nach Vorgabe des Veranstalters',
      'Ordnerdienst und Besucherlenkung',
      'Absicherung von Bühnen, Backstage- und VIP-Bereichen',
      'Freihalten von Flucht- und Rettungswegen',
      'Parkplatz- und Zufahrtsregelung',
      'Deeskalation bei Konflikten',
      'Unterstützung von Rettungsdienst und Polizei im Ernstfall',
    ],
    audiences: {
      heading: 'Für welche Veranstaltungen?',
      items: [
        'Stadt-, Vereins- und Straßenfeste',
        'Konzerte und Festivals',
        'Messen, Ausstellungen und Kongresse',
        'Firmenfeiern, Jubiläen und Galas',
        'Sportveranstaltungen',
        'Hochzeiten und private Feiern',
      ],
    },
    sections: [
      {
        heading: 'Sicherheit beginnt bei der Planung',
        paragraphs: [
          'Je früher wir eingebunden sind, desto besser lässt sich der Einsatz planen. Gemeinsam mit Ihnen klären wir die erwartete Besucherzahl, das Gelände, Ein- und Ausgänge sowie besondere Risiken. Daraus ergibt sich, wie viele Mitarbeiter wo benötigt werden.',
          'Muss für Ihre Veranstaltung ein Sicherheitskonzept mit Behörden abgestimmt werden, bringen wir die Abläufe des Sicherheitsdienstes in die Planung ein.',
        ],
      },
      {
        heading: 'Freundlich, aber bestimmt',
        paragraphs: [
          'Unsere Mitarbeiter sind für viele Gäste die ersten Ansprechpartner vor Ort. Deshalb legen wir Wert auf ein höfliches, serviceorientiertes Auftreten – und auf ruhiges, klares Handeln, wenn es darauf ankommt.',
        ],
      },
    ],
    faq: [
      {
        q: 'Wie viele Sicherheitskräfte braucht meine Veranstaltung?',
        a: 'Das hängt von Besucherzahl, Gelände, Art der Veranstaltung und behördlichen Auflagen ab. Wir ermitteln den Bedarf gemeinsam mit Ihnen und erklären nachvollziehbar, wie sich die Zahl der Einsatzkräfte ergibt.',
      },
      {
        q: 'Wie früh sollte ich den Sicherheitsdienst buchen?',
        a: 'So früh wie möglich – besonders bei größeren Veranstaltungen und in der Festsaison. Eine frühe Anfrage erleichtert die Planung und die Abstimmung mit Behörden.',
      },
      {
        q: 'Übernehmen Sie auch private Feiern?',
        a: 'Ja. Auch bei Hochzeiten, Geburtstagen oder Firmenfeiern sorgen wir für einen geregelten Einlass und einen ruhigen Ablauf.',
      },
      {
        q: 'Was kostet ein Sicherheitsdienst für eine Veranstaltung?',
        a: 'Der Preis richtet sich nach der Anzahl der Einsatzkräfte, der Dauer und der Art der Veranstaltung. Nach einem kurzen Gespräch erhalten Sie ein transparentes Angebot.',
      },
    ],
    related: [
      'objektschutz-augsburg',
      'personenschutz-augsburg',
      'empfangsdienst-augsburg',
    ],
    updated: '2026-10-19',
  },
  {
    slug: 'personenschutz-augsburg',
    category: 'security',
    name: 'Personenschutz',
    serviceType: 'Personenschutz',
    icon: 'M12 2 4 5v6c0 5.25 3.4 10.17 8 11.45C16.6 21.17 20 16.25 20 11V5l-8-3zm-1 14-3.5-3.5 1.4-1.4L11 13.2l5.1-5.1 1.4 1.4L11 16z',
    cardText:
      'Diskreter Begleitschutz für Privatpersonen, Führungskräfte und Gäste.',
    title: 'Personenschutz in Augsburg & Bayern | MTS Security',
    description:
      'Diskreter Personenschutz in Augsburg und Bayern: Begleitschutz für Privatpersonen, Führungskräfte und Gäste – individuell geplant. Jetzt vertraulich anfragen.',
    h1: 'Personenschutz in Augsburg',
    lead: 'Diskreter und professioneller Schutz für Privatpersonen, Führungskräfte und Gäste – individuell geplant und vertraulich behandelt.',
    image: {
      opt: 'work-personal-protection',
      jpg: 'work/personal-protection.jpg',
      width: 1200,
      height: 1200,
      alt: 'Personenschützer im Anzug mit Ohrhörer vor einem Fahrzeug',
    },
    intro: [
      'Manche Situationen verlangen besondere Aufmerksamkeit für die persönliche Sicherheit: öffentliche Auftritte, Geschäftsreisen, Veranstaltungen oder eine konkrete Bedrohungslage. Unser Personenschutz verbindet Wachsamkeit mit Zurückhaltung – Sie sollen sich sicher fühlen, ohne dass der Schutz im Vordergrund steht.',
      'Jeder Auftrag beginnt mit einem vertraulichen Gespräch. Wir klären Ihre Situation, Termine und Wege und planen den Einsatz so, dass er zu Ihrem Alltag passt.',
    ],
    tasks: [
      'Begleitschutz bei Terminen, Reisen und Veranstaltungen',
      'Schutz von Führungskräften und Geschäftspartnern',
      'Betreuung und Begleitung von VIPs und Gästen',
      'Vorab-Erkundung von Orten und Wegen',
      'Absicherung von Wohn- und Aufenthaltsorten',
      'Abstimmung mit Veranstaltern und dem Sicherheitsdienst vor Ort',
    ],
    audiences: {
      heading: 'Für wen ist Personenschutz sinnvoll?',
      items: [
        'Privatpersonen in besonderen Situationen',
        'Unternehmer und Führungskräfte',
        'Künstler, Redner und Personen des öffentlichen Lebens',
        'Unternehmen, die Gäste oder Delegationen betreuen',
      ],
    },
    sections: [
      {
        heading: 'Diskretion als Grundprinzip',
        paragraphs: [
          'Vertraulichkeit ist im Personenschutz selbstverständlich. Informationen zu Ihrer Person, Ihren Terminen und Aufenthaltsorten behandeln wir streng vertraulich und geben sie nur an die Mitarbeiter weiter, die für Ihren Schutz zuständig sind.',
          'Auftreten und Kleidung unserer Mitarbeiter passen wir dem jeweiligen Anlass an – vom Geschäftstermin bis zur Abendveranstaltung.',
        ],
      },
    ],
    faq: [
      {
        q: 'Wie läuft eine Anfrage für Personenschutz ab?',
        a: 'Rufen Sie uns an oder hinterlassen Sie Ihre Nummer über das Kontaktformular. Wir melden uns für ein vertrauliches Erstgespräch und besprechen Ihre Situation und Ihre Anforderungen.',
      },
      {
        q: 'Ist Personenschutz auch für einzelne Termine möglich?',
        a: 'Ja. Wir übernehmen einzelne Termine und Veranstaltungen ebenso wie längerfristige Einsätze.',
      },
      {
        q: 'Wie diskret ist der Personenschutz?',
        a: 'Sehr diskret. Unsere Mitarbeiter treten zurückhaltend auf und passen sich dem Anlass an. Ihre Daten behandeln wir vertraulich.',
      },
      {
        q: 'Was kostet Personenschutz?',
        a: 'Die Kosten hängen von Dauer, Umfang und der Zahl der eingesetzten Mitarbeiter ab. Nach dem Erstgespräch erhalten Sie ein individuelles Angebot.',
      },
    ],
    related: [
      'veranstaltungsschutz-augsburg',
      'objektschutz-augsburg',
      'empfangsdienst-augsburg',
    ],
    updated: '2026-10-19',
  },
  {
    slug: 'empfangsdienst-augsburg',
    category: 'security',
    name: 'Empfangs- und Doorman-Service',
    serviceType: 'Empfangsdienst',
    icon: 'M12 3 4 7v6c0 5 3.4 8.4 8 9 4.6-.6 8-4 8-9V7l-8-4zm0 10.5-5-2.2V8.4L12 11l5-2.6v2.9l-5 2.2z',
    cardText:
      'Freundlicher Empfang, Pfortendienst und Zutrittskontrolle für Gebäude und Veranstaltungen.',
    title: 'Empfangsdienst & Pfortendienst in Augsburg | MTS Security',
    description:
      'Empfangs-, Pforten- und Doorman-Service in Augsburg: Besucher empfangen, Zutritt kontrollieren, Anfragen koordinieren – freundlich und zuverlässig.',
    h1: 'Empfangs- und Doorman-Service in Augsburg',
    lead: 'Der erste Eindruck zählt: Unsere Mitarbeiter empfangen Ihre Besucher freundlich, behalten den Zutritt im Blick und sorgen für einen reibungslosen Ablauf an Empfang und Eingang.',
    image: {
      opt: 'hero-security-radio',
      jpg: 'hero/security-radio.jpg',
      width: 1600,
      height: 1066,
      alt: 'Sicherheitsmitarbeiter spricht in ein Funkgerät',
    },
    intro: [
      'Am Empfang, an der Pforte und am Eingang treffen Service und Sicherheit aufeinander. Besucher sollen sich willkommen fühlen – und gleichzeitig muss klar sein, wer das Gebäude betritt. Unser Empfangs- und Pfortendienst verbindet beides.',
      'Ob Bürogebäude, Firmengelände, Hotel, Wohnanlage oder Veranstaltung: Wir übernehmen den Empfang dauerhaft, als Vertretung oder für einzelne Anlässe und richten die Abläufe nach Ihren Vorgaben aus.',
    ],
    tasks: [
      'Empfang und Anmeldung von Besuchern',
      'Zutrittskontrolle und Ausgabe von Besucherausweisen',
      'Schlüssel- und Ausweisverwaltung',
      'Annahme von Post und Lieferungen',
      'Telefonannahme und Weiterleitung von Anfragen',
      'Doorman-Service an Eingängen von Gebäuden und Veranstaltungen',
      'Kontrollgänge außerhalb der Stoßzeiten',
    ],
    audiences: {
      heading: 'Für wen?',
      items: [
        'Bürogebäude und Unternehmenszentralen',
        'Gewerbe- und Industriegelände',
        'Hotels, Wohnanlagen und Residenzen',
        'Veranstaltungen, Clubs und Gastronomie',
      ],
    },
    sections: [
      {
        heading: 'Service mit Sicherheitsblick',
        paragraphs: [
          'Unsere Mitarbeiter sind freundliche Gastgeber und aufmerksame Sicherheitskräfte zugleich. Sie erkennen ungewöhnliche Situationen, halten unbefugte Personen fern und wissen, wen sie im Ernstfall informieren.',
        ],
      },
      {
        heading: 'Flexibel einsetzbar',
        paragraphs: [
          'Sie benötigen den Empfang nur zu bestimmten Zeiten, als Urlaubs- und Krankheitsvertretung oder für eine Messe? Wir stimmen Einsatzzeiten und Aufgaben genau auf Ihren Bedarf ab.',
        ],
      },
    ],
    faq: [
      {
        q: 'Was ist der Unterschied zwischen Empfangsdienst und Pfortendienst?',
        a: 'Der Empfangsdienst konzentriert sich auf Besucherbetreuung und Service, der Pfortendienst stärker auf Zutritts- und Zufahrtskontrolle. In der Praxis kombinieren wir beides nach Ihrem Bedarf.',
      },
      {
        q: 'Können Sie unseren Empfang vertretungsweise besetzen?',
        a: 'Ja. Wir übernehmen den Empfang auch zeitweise, zum Beispiel während Urlaub, Krankheit oder in Spitzenzeiten.',
      },
      {
        q: 'Was macht ein Doorman?',
        a: 'Ein Doorman empfängt Gäste am Eingang, kontrolliert bei Bedarf den Einlass und sorgt für einen geordneten, angenehmen Zugang – etwa vor Hotels, Wohnanlagen, Clubs oder bei Veranstaltungen.',
      },
      {
        q: 'Wie schnell kann der Empfangsdienst starten?',
        a: 'Nach einer kurzen Abstimmung der Abläufe vor Ort. Sprechen Sie uns an – wir nennen Ihnen einen realistischen Starttermin.',
      },
    ],
    related: [
      'objektschutz-augsburg',
      'veranstaltungsschutz-augsburg',
      'bueroreinigung-augsburg',
    ],
    updated: '2026-10-19',
  },
  {
    slug: 'sicherheitsdienst-asylunterkuenfte',
    category: 'security',
    name: 'Asylunterkünfte',
    serviceType: 'Sicherheitsdienst für Asyl- und Flüchtlingsunterkünfte',
    icon: 'M12 3 3 10h2v10h6v-6h2v6h6V10h2L12 3z',
    cardText:
      'Zugangskontrolle, Rundgänge und Deeskalation für ein sicheres Zusammenleben in Unterkünften.',
    title: 'Sicherheitsdienst für Asylunterkünfte | MTS Security',
    description:
      'Sicherheitsdienst für Asyl- und Flüchtlingsunterkünfte in Augsburg und Bayern: Zugangskontrolle, Rundgänge und Deeskalation für ein sicheres Miteinander.',
    h1: 'Sicherheitsdienst für Asyl- und Flüchtlingsunterkünfte',
    lead: 'Sicherheit und ein geordnetes Miteinander für Bewohner, Mitarbeitende und Nachbarschaft – mit respektvollem, deeskalierendem Sicherheitspersonal.',
    image: {
      opt: 'work-security-jacket',
      jpg: 'work/security-jacket.jpg',
      width: 1200,
      height: 1200,
      alt: 'Sicherheitsmitarbeiter mit Security-Aufdruck auf dem Rücken',
    },
    intro: [
      'In Gemeinschafts- und Flüchtlingsunterkünften leben viele Menschen mit unterschiedlichen Hintergründen auf engem Raum zusammen. Ein professioneller Sicherheitsdienst trägt dazu bei, dass sich Bewohner, Betreuungspersonal und Nachbarn sicher fühlen und der Alltag in der Unterkunft geordnet abläuft.',
      'MTS Security unterstützt Betreiber, Kommunen und Landkreise in Augsburg und Bayern. Wir arbeiten eng mit der Einrichtungsleitung und den Sozialdiensten zusammen und bei Bedarf mit Polizei und Rettungsdiensten.',
    ],
    tasks: [
      'Zugangskontrolle und Besuchermanagement',
      'Regelmäßige Rundgänge in Gebäuden und auf dem Gelände',
      'Kontrolle von Flucht- und Rettungswegen',
      'Deeskalation und Schlichtung bei Konflikten',
      'Durchsetzung der Hausordnung',
      'Ansprechpartner für Bewohner außerhalb der Bürozeiten',
      'Lückenlose Dokumentation von Vorkommnissen',
    ],
    audiences: {
      heading: 'Für wen?',
      items: [
        'Betreiber von Gemeinschaftsunterkünften',
        'Städte, Gemeinden und Landkreise',
        'Träger von Erstaufnahme- und Anschlussunterbringungen',
      ],
    },
    sections: [
      {
        heading: 'Respekt und Deeskalation',
        paragraphs: [
          'Unsere Mitarbeiter begegnen Bewohnerinnen und Bewohnern respektvoll und mit Verständnis für ihre Situation. Konflikte versuchen wir früh zu erkennen und im Gespräch zu entschärfen, bevor sie eskalieren.',
          'Gleichzeitig setzen wir die Hausordnung konsequent durch und handeln bei Gefahren ruhig und entschlossen.',
        ],
      },
      {
        heading: 'Enge Abstimmung mit der Einrichtung',
        paragraphs: [
          'Feste Abläufe, klare Zuständigkeiten und eine verlässliche Übergabe zwischen den Schichten sind entscheidend. Wir stimmen Dienstanweisungen mit der Einrichtungsleitung ab und informieren zuverlässig über besondere Vorkommnisse.',
        ],
      },
    ],
    faq: [
      {
        q: 'Welche Aufgaben übernimmt der Sicherheitsdienst in einer Unterkunft?',
        a: 'Typische Aufgaben sind Zugangskontrolle, Rundgänge, die Kontrolle von Flucht- und Rettungswegen, Deeskalation bei Konflikten und die Dokumentation von Vorkommnissen. Den genauen Umfang legen wir mit dem Betreiber fest.',
      },
      {
        q: 'Arbeiten Sie mit den Sozialdiensten zusammen?',
        a: 'Ja. Sicherheit funktioniert in Unterkünften nur im Zusammenspiel mit Einrichtungsleitung und Sozialbetreuung. Wir stimmen uns regelmäßig ab und halten uns an die vereinbarten Abläufe.',
      },
      {
        q: 'Übernehmen Sie auch kurzfristige Einsätze?',
        a: 'Sprechen Sie uns an. Wir prüfen Ihre Anfrage zeitnah und sagen Ihnen offen, ab wann und in welchem Umfang wir den Einsatz übernehmen können.',
      },
    ],
    related: [
      'objektschutz-augsburg',
      'empfangsdienst-augsburg',
      'hausmeisterservice-augsburg',
    ],
    updated: '2026-10-19',
  },
];
