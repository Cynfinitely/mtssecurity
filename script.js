// Language translations
const translations = {
  de: {
    home: "STARTSEITE",
    about: "ÜBER UNS",
    services: "UNSERE LEISTUNGEN",
    work: "UNSERE ARBEIT",
    contact: "KOMMUNIKATION",
    welcome: "WILLKOMMEN BEI MTS SECURITY!",
    subtitle:
      "Ihr starker Partner für Sicherheit und Dienstleistungen in Bayern",
    who: "MTS SECURITY WER?",
    "about-text":
      "MTS SECURITY – Ihr starker Partner für Sicherheit und Dienstleistungen in Bayern",
    competence: "Kompetenz. Vertrauen. Qualität.",
    "about-description":
      "Willkommen bei MTS SECURITY, Ihrem zuverlässigen Partner für maßgeschneiderte Sicherheitslösungen und hochwertige Dienstleistungen in ganz Bayern. Seit unserer Gründung verfolgen wir ein klares Ziel: höchste Qualität, maximale Kundenzufriedenheit und ein Service, der weit über das Übliche hinausgeht.",
    "our-services": "UNSERE LEISTUNGEN",
    "security-services": "SICHERHEITSDIENSTE",
    "object-protection": "Objektschutz",
    asylum: "Asylunterkünfte",
    "event-security": "Veranstaltungssicherheit",
    "personal-protection": "Personenschutz",
    cleaning: "Büro- und Unterhaltsreinigung",
    "completed-projects": "ABGESCHLOSSENES PROJEKT",
    "satisfied-customers": "ZUFRIEDENE KUNDEN",
    "ongoing-projects": "LAUFENDES PROJEKT",
    "positive-comments": "POSITIVER KOMMENTAR",
    "call-us": "WIR RUFEN SIE AN",
    name: "Name Nachname*",
    phone: "Telefonnummer*",
    message: "Ihre Nachricht*",
    send: "Senden",
  },
  en: {
    home: "HOMEPAGE",
    about: "ABOUT US",
    services: "SERVICES",
    work: "OUR WORK",
    contact: "CONTACT",
    welcome: "WELCOME TO MTS SECURITY!",
    subtitle: "Your Strong Partner for Security and Services in Bavaria",
    who: "WHO IS MTS SECURITY?",
    "about-text":
      "MTS SECURITY – Your Strong Partner for Security and Services in Bavaria",
    competence: "Competence. Trust. Quality.",
    "about-description":
      "Welcome to MTS SECURITY, your reliable partner for customized security solutions and high-quality services throughout Bavaria. Since our founding, we have pursued a clear goal: highest quality, maximum customer satisfaction, and service that goes far beyond the usual.",
    "our-services": "OUR SERVICES",
    "security-services": "SECURITY SERVICES",
    "object-protection": "Object Protection",
    asylum: "Asylum Facilities",
    "event-security": "Event Security",
    "personal-protection": "Personal Protection",
    cleaning: "Office and Maintenance Cleaning",
    "completed-projects": "COMPLETED PROJECTS",
    "satisfied-customers": "SATISFIED CUSTOMERS",
    "ongoing-projects": "ONGOING PROJECTS",
    "positive-comments": "POSITIVE COMMENTS",
    "call-us": "CALL US",
    name: "Full Name*",
    phone: "Phone Number*",
    message: "Your Message*",
    send: "Send",
  },
};

// Function to switch language
function switchLanguage(lang) {
  // Update active state
  document.querySelectorAll(".language-selector a").forEach((link) => {
    link.classList.remove("active");
    if (link.dataset.lang === lang) {
      link.classList.add("active");
    }
  });

  // Update all translatable elements
  document.querySelectorAll("[data-translate]").forEach((element) => {
    const key = element.dataset.translate;
    if (translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });

  // Update input placeholders
  document
    .querySelectorAll("[data-translate-placeholder]")
    .forEach((element) => {
      const key = element.dataset.translatePlaceholder;
      if (translations[lang][key]) {
        element.placeholder = translations[lang][key];
      }
    });
}

// Mobile menu functionality
document.addEventListener("DOMContentLoaded", () => {
  // Language selector
  document.querySelectorAll(".language-selector a").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const lang = link.dataset.lang;
      switchLanguage(lang);
    });
  });

  // Mobile menu
  const mobileMenuBtn = document.createElement("button");
  mobileMenuBtn.className = "mobile-menu-btn";
  mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';

  const navbar = document.querySelector(".navbar .container");
  const navLinks = document.querySelector(".nav-links");

  // Insert mobile menu button before nav links
  navbar.insertBefore(mobileMenuBtn, navLinks);

  // Toggle mobile menu
  mobileMenuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    navLinks.classList.toggle("active");
    mobileMenuBtn.innerHTML = navLinks.classList.contains("active")
      ? '<i class="fas fa-times"></i>'
      : '<i class="fas fa-bars"></i>';
  });

  // Close mobile menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".navbar") && navLinks.classList.contains("active")) {
      navLinks.classList.remove("active");
      mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    }
  });

  // Close mobile menu when clicking a link
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    });
  });

  // Prevent clicks inside mobile menu from closing it
  navLinks.addEventListener("click", (e) => {
    e.stopPropagation();
  });
});
