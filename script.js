const translations = {
  de: {
    skip: "Zum Inhalt springen",
    home: "Startseite",
    about: "Über uns",
    services: "Leistungen",
    work: "Unsere Arbeit",
    contact: "Kontakt",
    welcome: "Willkommen bei MTS Security",
    subtitle:
      "Ihr starker Partner für Sicherheit und Dienstleistungen in Bayern",
    cta: "Kontakt aufnehmen",
    who: "MTS Security",
    competence: "Kompetenz. Vertrauen. Qualität.",
    "about-description":
      "Willkommen bei MTS Security, Ihrem zuverlässigen Partner für maßgeschneiderte Sicherheitslösungen und hochwertige Dienstleistungen in ganz Bayern. Seit unserer Gründung verfolgen wir ein klares Ziel: höchste Qualität, maximale Kundenzufriedenheit und ein Service, der weit über das Übliche hinausgeht. Sitz in Augsburg – Einsatz in ganz Bayern.",
    "our-services": "Unsere Leistungen",
    "security-services": "Sicherheitsdienste",
    "other-services": "Dienstleistungen",
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
    "staircase-cleaning": "Treppenhaus- und Gemeinschaftsflächen",
    "staircase-cleaning-desc":
      "Professionelle Reinigung von Treppenhäusern und Gemeinschaftsflächen",
    "winter-service": "Winterdienst und Gartenpflege",
    "winter-service-desc": "Winterdienst und professionelle Gartenpflege",
    "construction-cleaning": "Baureinigung",
    "construction-cleaning-desc":
      "Professionelle Baureinigung und Aufräumarbeiten",
    "service-images": "Einblicke in unsere Arbeit",
    "completed-projects": "Abgeschlossene Projekte",
    "satisfied-customers": "Zufriedene Kunden",
    "ongoing-projects": "Laufende Projekte",
    "positive-comments": "Positive Rückmeldungen",
    "call-us": "Wir rufen Sie an",
    "contact-lead":
      "Hinterlassen Sie Ihre Nummer – wir melden uns zeitnah bei Ihnen.",
    "name-label": "Name",
    "phone-label": "Telefon",
    "message-label": "Nachricht",
    name: "Name Nachname",
    phone: "Telefonnummer",
    message: "Ihre Nachricht",
    send: "Senden",
    sending: "Wird gesendet…",
    rights: "Alle Rechte vorbehalten.",
    imprint: "Impressum",
    privacy: "Datenschutz",
    menuOpen: "Menü öffnen",
    menuClose: "Menü schließen",
    formError:
      "Es gab ein Problem beim Senden Ihrer Nachricht. Bitte versuchen Sie es später erneut.",
  },
  en: {
    skip: "Skip to content",
    home: "Home",
    about: "About us",
    services: "Services",
    work: "Our work",
    contact: "Contact",
    welcome: "Welcome to MTS Security",
    subtitle: "Your strong partner for security and services in Bavaria",
    cta: "Get in touch",
    who: "MTS Security",
    competence: "Competence. Trust. Quality.",
    "about-description":
      "Welcome to MTS Security, your reliable partner for customized security solutions and high-quality services throughout Bavaria. Since our founding, we have pursued a clear goal: highest quality, maximum customer satisfaction, and service that goes far beyond the usual. Based in Augsburg – operating across Bavaria.",
    "our-services": "Our services",
    "security-services": "Security services",
    "other-services": "Facility services",
    "object-protection": "Property protection",
    "object-protection-desc":
      "Professional protection for your properties and facilities",
    asylum: "Asylum facilities",
    "asylum-desc": "Security services for asylum facilities",
    "event-security": "Event security",
    "event-security-desc": "Comprehensive security service for your events",
    "reception-services": "Reception and doorman services",
    "reception-services-desc": "Professional reception and doorman service",
    "personal-protection": "Close protection",
    "personal-protection-desc": "Individual protection for your security",
    "office-cleaning": "Office and maintenance cleaning",
    "office-cleaning-desc": "Professional cleaning for offices and buildings",
    "maintenance-service": "Caretaker service",
    "maintenance-service-desc":
      "Comprehensive caretaker service for your property",
    "staircase-cleaning": "Stairwells and common areas",
    "staircase-cleaning-desc":
      "Professional cleaning of stairwells and common areas",
    "winter-service": "Winter service and garden care",
    "winter-service-desc": "Winter service and professional garden maintenance",
    "construction-cleaning": "Construction cleaning",
    "construction-cleaning-desc":
      "Professional construction cleaning and clear-out work",
    "service-images": "A look at our work",
    "completed-projects": "Completed projects",
    "satisfied-customers": "Satisfied customers",
    "ongoing-projects": "Ongoing projects",
    "positive-comments": "Positive reviews",
    "call-us": "We will call you",
    "contact-lead":
      "Leave your number – we will get back to you shortly.",
    "name-label": "Name",
    "phone-label": "Phone",
    "message-label": "Message",
    name: "Full name",
    phone: "Phone number",
    message: "Your message",
    send: "Send",
    sending: "Sending…",
    rights: "All rights reserved.",
    imprint: "Legal notice",
    privacy: "Privacy",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    formError:
      "There was a problem sending your message. Please try again later.",
  },
};

let currentLang = "de";

function switchLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  document.documentElement.lang = lang;
  localStorage.setItem("mts-lang", lang);

  document.querySelectorAll(".language-selector a").forEach((link) => {
    link.classList.toggle("active", link.dataset.lang === lang);
  });

  document.querySelectorAll("[data-translate]").forEach((element) => {
    const key = element.dataset.translate;
    if (translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });

  document.querySelectorAll("[data-translate-placeholder]").forEach((element) => {
    const key = element.dataset.translatePlaceholder;
    if (translations[lang][key]) {
      element.placeholder = translations[lang][key];
    }
  });

  const menuBtn = document.querySelector(".mobile-menu-btn");
  if (menuBtn) {
    const open = menuBtn.getAttribute("aria-expanded") === "true";
    menuBtn.setAttribute(
      "aria-label",
      open ? translations[lang].menuClose : translations[lang].menuOpen
    );
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  const savedLang = localStorage.getItem("mts-lang") || "de";
  switchLanguage(savedLang);

  document.querySelectorAll(".language-selector a").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      switchLanguage(link.dataset.lang);
    });
  });

  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const navLinks = document.querySelector(".nav-links");

  function setMenuOpen(open) {
    if (!navLinks || !mobileMenuBtn) return;
    navLinks.classList.toggle("active", open);
    mobileMenuBtn.classList.toggle("is-open", open);
    mobileMenuBtn.setAttribute("aria-expanded", String(open));
    mobileMenuBtn.setAttribute(
      "aria-label",
      open ? translations[currentLang].menuClose : translations[currentLang].menuOpen
    );
  }

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      setMenuOpen(!navLinks.classList.contains("active"));
    });

    document.addEventListener("click", (e) => {
      if (!e.target.closest(".navbar") && navLinks.classList.contains("active")) {
        setMenuOpen(false);
      }
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setMenuOpen(false));
    });
  }

  const form = document.querySelector(".contact-form");
  if (!form) return;

  const submitBtn = form.querySelector('button[type="submit"]');
  const feedback = form.querySelector(".form-feedback");

  function showFeedback(success, message) {
    if (!feedback) return;
    feedback.hidden = false;
    feedback.className = `form-feedback ${success ? "success" : "error"}`;
    feedback.textContent = message;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!submitBtn) return;

    submitBtn.disabled = true;
    const previousLabel = submitBtn.textContent;
    submitBtn.textContent = translations[currentLang].sending;

    const formData = new FormData(this);
    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      message: formData.get("message"),
      website: formData.get("website"),
    };

    fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        showFeedback(Boolean(result.success), result.message);
        if (result.success) {
          this.reset();
        }
      })
      .catch(() => {
        showFeedback(false, translations[currentLang].formError);
      })
      .finally(() => {
        submitBtn.disabled = false;
        submitBtn.textContent =
          translations[currentLang].send || previousLabel;
      });
  });
});
