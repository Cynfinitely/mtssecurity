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
    "other-services": "DIENSTLEISTUNGEN",
    "object-protection": "Objektschutz",
    "object-protection-desc":
      "Professioneller Schutz für Ihre Immobilien und Anlagen",
    asylum: "Asylunterkünfte",
    "asylum-desc": "Sicherheitsdienstleistungen für Asylunterkünfte",
    "event-security": "Veranstaltungssicherheit",
    "event-security-desc":
      "Umfassender Sicherheitsservice für Ihre Veranstaltungen",
    "reception-services": "Empfangs- und Doorman-Services",
    "reception-services-desc": "Professioneller Empfangs- und Doorman-Service",
    "personal-protection": "Personenschutz",
    "personal-protection-desc": "Individueller Schutz für Ihre Sicherheit",
    "office-cleaning": "Büro- und Unterhaltsreinigung",
    "office-cleaning-desc": "Professionelle Reinigung für Büros und Gebäude",
    "maintenance-service": "Hausmeisterservice",
    "maintenance-service-desc":
      "Umfassender Hausmeisterservice für Ihre Immobilie",
    "staircase-cleaning": "Treppenhausreinigung - Gemeinschaftsflächenpflege",
    "staircase-cleaning-desc":
      "Professionelle Reinigung von Treppenhäusern und Gemeinschaftsflächen",
    "winter-service": "Winterdienst - Gartenpflege",
    "winter-service-desc": "Winterdienst und professionelle Gartenpflege",
    "construction-cleaning": "Dienstleistungene Baureinigung",
    "construction-cleaning-desc":
      "Professionelle Baureinigung und Aufräumarbeiten",
    "service-images": "SERVICEBILDER",
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
    "other-services": "SERVICES",
    "object-protection": "Object Protection",
    "object-protection-desc":
      "Professional protection for your properties and facilities",
    asylum: "Asylum Facilities",
    "asylum-desc": "Security services for asylum facilities",
    "event-security": "Event Security",
    "event-security-desc": "Comprehensive security service for your events",
    "reception-services": "Reception and Doorman Services",
    "reception-services-desc": "Professional reception and doorman service",
    "personal-protection": "Personal Protection",
    "personal-protection-desc": "Individual protection for your security",
    "office-cleaning": "Office and Maintenance Cleaning",
    "office-cleaning-desc": "Professional cleaning for offices and buildings",
    "maintenance-service": "Building Maintenance Service",
    "maintenance-service-desc":
      "Comprehensive building maintenance service for your property",
    "staircase-cleaning": "Staircase Cleaning - Common Area Maintenance",
    "staircase-cleaning-desc":
      "Professional cleaning of staircases and common areas",
    "winter-service": "Winter Service - Garden Maintenance",
    "winter-service-desc": "Winter service and professional garden maintenance",
    "construction-cleaning": "Construction Cleaning Services",
    "construction-cleaning-desc":
      "Professional construction cleaning and cleanup work",
    "service-images": "SERVICE IMAGES",
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

// Contact form handling
document
  .querySelector(".contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(this);
    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };

    fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        // Create feedback element
        const feedback = document.createElement("div");
        feedback.className = `form-feedback ${
          data.success ? "success" : "error"
        }`;
        feedback.textContent = data.message;

        // Insert feedback after the form
        this.parentNode.insertBefore(feedback, this.nextSibling);

        // Clear form if successful
        if (data.success) {
          this.reset();
        }

        // Remove feedback after 5 seconds
        setTimeout(() => {
          feedback.remove();
        }, 5000);
      })
      .catch((error) => {
        console.error("Error:", error);
        const feedback = document.createElement("div");
        feedback.className = "form-feedback error";
        feedback.textContent =
          "Es gab ein Problem beim Senden Ihrer Nachricht. Bitte versuchen Sie es später erneut.";
        this.parentNode.insertBefore(feedback, this.nextSibling);

        setTimeout(() => {
          feedback.remove();
        }, 5000);
      });
  });
