import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "se" | "en";

interface I18nContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Lang, string>> = {
  // Navbar
  "nav.about": { se: "OM MIG", en: "ABOUT" },
  "nav.timeline": { se: "TIMELINE", en: "TIMELINE" },
  "nav.education": { se: "UTBILDNING", en: "EDUCATION" },
  "nav.techstack": { se: "TECH STACK", en: "TECH STACK" },
  "nav.contact": { se: "KONTAKT", en: "CONTACT" },

  // Hero
  "hero.tag": { se: "DevOps Student", en: "DevOps Student" },
  "hero.cv": { se: "CURRICULUM VITAE", en: "CURRICULUM VITAE" },
  "hero.desc": {
    se: "DevOps Engineer med 10+ års arbetslivserfarenhet.\nPraktisk erfarenhet från Fora AB och en solid grund i CI/CD, Azure och .NET.",
    en: "DevOps Engineer with 10+ years of professional experience.\nPractical experience from Fora AB with a solid foundation in CI/CD, Azure, and .NET.",
  },
  "hero.education": { se: "Utbildning", en: "Education" },
  "hero.focus": { se: "Fokus", en: "Focus" },
  "hero.scroll": { se: "Scrolla", en: "Scroll" },
  "hero.download": { se: "Ladda ner PDF", en: "Download PDF" },

  // About
  "about.tag": { se: "Om mig", en: "About me" },
  "about.heading1": { se: "DEVOPS", en: "DEVOPS" },
  "about.heading2": { se: "ENGINEER", en: "ENGINEER" },
  "about.p1": {
    se: "10 år av att driva försäljning, bygga team och leverera resultat som syns. Nu byter jag spår till DevOps – inte för att börja om, utan för att kombinera tekniken med det jag redan kan.",
    en: "10 years of driving sales, building teams, and delivering visible results. Now I'm switching to DevOps – not to start over, but to combine tech with what I already know.",
  },
  "about.p2": {
    se: "Min tekniska resa började med en tvåårig .NET-utbildning där jag lärde mig C#, ASP.NET Core, Entity Framework och databashantering. Under min LIA-praktik hos Fora AB fick jag arbeta med riktiga produktionssystem – microservices i Azure, CI/CD-pipelines med Azure DevOps, PowerShell-automation och containerisering med Docker.",
    en: "My technical journey started with a two-year .NET program where I learned C#, ASP.NET Core, Entity Framework, and database management. During my internship at Fora AB, I worked with real production systems – microservices in Azure, CI/CD pipelines with Azure DevOps, PowerShell automation, and containerization with Docker.",
  },
  "about.p3": {
    se: "Nu söker jag inte bara en LIA-plats – jag söker min framtida arbetsgivare. Ni får en person som levererar från dag ett, tar ansvar och vill vara kvar långsiktigt.",
    en: "I'm not just looking for an internship – I'm looking for my future employer. You'll get someone who delivers from day one, takes responsibility, and wants to stay long-term.",
  },
  "about.stat1": { se: "Års arbetslivserfarenhet", en: "Years of experience" },
  "about.stat2": { se: "LIA-praktik 2025-2026", en: "Internship 2025-2026" },
  "about.lia.heading": { se: "SÖKER LIA-PLATS", en: "SEEKING INTERNSHIP" },
  "about.lia.desc": {
    se: "Jag har praktisk erfarenhet från Fora AB och en solid grund i både DevOps och .NET. Nu söker jag en LIA-plats där jag kan bidra från dag ett och fortsätta växa.",
    en: "I have practical experience from Fora AB and a solid foundation in both DevOps and .NET. Now I'm seeking an internship where I can contribute from day one and keep growing.",
  },
  "about.lia.period": { se: "Period", en: "Period" },
  "about.lia.periodVal": { se: "November 2026 till Maj 2027", en: "November 2026 to May 2027" },
  "about.lia.place": { se: "Plats", en: "Location" },
  "about.lia.placeVal": { se: "Stockholm / Remote", en: "Stockholm / Remote" },
  "about.lia.interest": { se: "Intresse", en: "Interest" },

  // Education
  "edu.tag": { se: "Portfolio", en: "Portfolio" },
  "edu.heading1": { se: "UTBILDNING", en: "EDUCATION" },
  "edu.heading2": { se: "& ERFARENHET", en: "& EXPERIENCE" },
  "edu.ongoing": { se: "PÅGÅENDE", en: "ONGOING" },
  "edu.internship": { se: "PRAKTIK", en: "INTERNSHIP" },
  "edu.completed": { se: "AVSLUTAD", en: "COMPLETED" },
  "edu.devops.desc": {
    se: "Pågående yrkeshögskoleutbildning på Chas Academy med fokus på automation, CI/CD och molninfrastruktur. Lär mig Docker, Kubernetes, Infrastructure as Code och moderna DevOps-verktyg.",
    en: "Ongoing vocational education at Chas Academy focused on automation, CI/CD, and cloud infrastructure. Learning Docker, Kubernetes, Infrastructure as Code, and modern DevOps tools.",
  },
  "edu.fora.title": { se: "Praktik – DevOps Engineer", en: "Internship – DevOps Engineer" },
  "edu.fora.desc": {
    se: "DevOps-praktik på Fora AB med fokus på CI/CD-pipelines, containerisering och molninfrastruktur. Arbete i tvärfunktionella team med automation och deployment.",
    en: "DevOps internship at Fora AB focused on CI/CD pipelines, containerization, and cloud infrastructure. Working in cross-functional teams with automation and deployment.",
  },
  "edu.azure.desc": {
    se: "Fördjupningskurs i Microsoft Azure med fokus på molnarkitektur och DevOps. Arbetade med Azure Functions, Active Directory, säkerhet och kostnadsoptimering.",
    en: "Advanced course in Microsoft Azure focusing on cloud architecture and DevOps. Worked with Azure Functions, Active Directory, security, and cost optimization.",
  },
  "edu.dotnet.desc": {
    se: "Tvåårig yrkeshögskoleutbildning med huvudfokus på .NET-plattformen och C#. Utvecklade komplexa webblösningar med ASP.NET Core, Entity Framework och moderna CMS-system.",
    en: "Two-year vocational education focusing on the .NET platform and C#. Developed complex web solutions with ASP.NET Core, Entity Framework, and modern CMS systems.",
  },
  "edu.azure.place": { se: "Certifieringskurs", en: "Certification course" },

  // Timeline
  "timeline.tag": { se: "Min Resa", en: "My Journey" },
  "timeline.heading1": { se: "DEVOPS", en: "DEVOPS" },
  "timeline.heading2": { se: "JOURNEY", en: "JOURNEY" },
  "timeline.desc": {
    se: "Jag har jobbat med människor i tio år – byggt team, sålt, rekryterat och lett. När jag bestämde mig för att byta spår till tech så tog jag med mig det jag lärt mig om samarbete och problemlösning. Här är min resa från butikschef till DevOps Engineer.",
    en: "I've worked with people for ten years – built teams, sold, recruited, and led. When I decided to switch to tech, I brought everything I learned about collaboration and problem-solving. Here is my journey from store manager to DevOps Engineer.",
  },
  "timeline.now": { se: "JUST NU", en: "RIGHT NOW" },
  "timeline.ongoing": { se: "PÅGÅR", en: "CURRENT" },
  "timeline.active": { se: "PÅGÅENDE", en: "ONGOING" },
  "timeline.more": { se: "mer...", en: "more..." },
  "timeline.cta": { se: "HITTA MIG", en: "FIND ME" },

  // Tech Stack
  "tech.tag": { se: "Tech Stack", en: "Tech Stack" },
  "tech.heading1": { se: "TEKNISK", en: "TECHNICAL" },
  "tech.heading2": { se: "KOMPETENS", en: "SKILLS" },
  "tech.desc": {
    se: "Bred teknisk kompetens från både .NET-utveckling och modern DevOps. Kombinerar programmeringsspråk med molnplattformar, containertekniker och CI/CD-verktyg.",
    en: "Broad technical expertise from both .NET development and modern DevOps. Combining programming languages with cloud platforms, container technologies, and CI/CD tools.",
  },

  // Contact
  "contact.heading1": { se: "LÅT OSS", en: "LET'S" },
  "contact.heading2": { se: "PRATA", en: "TALK" },
  "contact.sub": { se: "Hör av dig om LIA eller samarbete", en: "Get in touch about internship or collaboration" },
  "contact.reply": { se: "Jag svarar inom 24 timmar", en: "I respond within 24 hours" },
  "contact.copy": { se: "Alla rättigheter förbehållna.", en: "All rights reserved." },
};

const I18nContext = createContext<I18nContextType>({
  lang: "se",
  setLang: () => {},
  t: (key: string) => key,
});

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("se");

  const t = (key: string): string => {
    return translations[key]?.[lang] ?? key;
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => useContext(I18nContext);
