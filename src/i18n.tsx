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
    se: "Studerande DevOps Engineer med praktisk erfarenhet från LIA hos Fora AB, där jag arbetade med Azure, CI/CD-pipelines, microservices och containerteknologi.\nStuderar på Chas Academy med fokus på Kubernetes, Docker, Infrastructure as Code och automatisering. Bakgrund inom .NET-utveckling och systemutveckling kompletterar en bred teknisk kompetens som sträcker sig från kod till produktion.",
    en: "DevOps Engineering student with practical experience from an internship at Fora AB, working with Azure, CI/CD pipelines, microservices, and container technology.\nStudying at Chas Academy with focus on Kubernetes, Docker, Infrastructure as Code, and automation. A background in .NET development and systems engineering complements a broad technical skill set spanning from code to production.",
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
    se: "Med över tio års arbetslivserfarenhet inom teamledning, försäljning och organisationsarbete har jag byggt en stark grund i att strukturera, leda och leverera. Nu kombinerar jag den erfarenheten med modern teknik genom en pågående DevOps-utbildning på Chas Academy.",
    en: "With over ten years of experience in team leadership, sales, and organizational work, I have built a strong foundation in structuring, leading, and delivering. Now I combine that experience with modern technology through an ongoing DevOps program at Chas Academy.",
  },
  "about.p2": {
    se: "Min tekniska resa började med en tvåårig .NET-utbildning på Nackademin, där jag arbetade med C#, ASP.NET Core, Entity Framework och databashantering. Parallellt arbetade jag deltid som systemutvecklare på Lucli AB med C# och .NET-baserade lösningar, API-utveckling och databasoptimering. Under min praktik på Fora AB fick jag arbeta hands-on med produktionsmiljöer: microservices i Azure, CI/CD-pipelines med Azure DevOps, PowerShell- och Python-automation och containerisering med Docker.",
    en: "My technical journey started with a two-year .NET program at Nackademin, where I worked with C#, ASP.NET Core, Entity Framework, and database management. Alongside my studies, I worked part-time as a systems developer at Lucli AB with C# and .NET-based solutions, API development, and database optimization. During my internship at Fora AB, I worked hands-on with production environments: microservices in Azure, CI/CD pipelines with Azure DevOps, PowerShell and Python automation, and containerization with Docker.",
  },
  "about.p3": {
    se: "Just nu fördjupar jag mig i containerorkestrering med Kubernetes, Infrastructure as Code med Terraform och molnplattformar som Azure och Google Cloud Platform. Jag har även genomfört egna projekt med GCP och Terraform för att bygga och automatisera infrastruktur. Jag trivs i skärningspunkten mellan utveckling och drift, och drivs av att skapa stabila, automatiserade och skalbara lösningar.",
    en: "Currently, I am deepening my skills in container orchestration with Kubernetes, Infrastructure as Code with Terraform, and cloud platforms like Azure and Google Cloud Platform. I have also completed personal projects with GCP and Terraform to build and automate infrastructure. I thrive at the intersection of development and operations, driven by building stable, automated, and scalable solutions.",
  },
  "about.stat1": { se: "Års arbetslivserfarenhet", en: "Years of experience" },
  "about.stat2": { se: "DevOps Praktik 2023 till 2024", en: "DevOps Internship 2023 to 2024" },
  "about.stat3": { se: "Containerorkestrering", en: "Container Orchestration" },
  "about.stat4": { se: "Molnplattformar", en: "Cloud Platforms" },
  "about.lia.heading": { se: "SÖKER LIA-PLATS", en: "SEEKING INTERNSHIP" },
  "about.lia.desc": {
    se: "Jag har praktisk erfarenhet från Fora AB och en solid grund i DevOps, Kubernetes och .NET. Nu söker jag en LIA-plats där jag kan bidra direkt och fortsätta utvecklas.",
    en: "I have practical experience from Fora AB and a solid foundation in DevOps, Kubernetes, and .NET. Now I'm seeking an internship where I can contribute directly and continue to grow.",
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
  "edu.devops.date": { se: "September 2025 till Juni 2027", en: "September 2025 to June 2027" },
  "edu.devops.desc": {
    se: "Tvåårig yrkeshögskoleutbildning på Chas Academy med fokus på CI/CD, containerorkestrering, Infrastructure as Code och automationsdriven drift. Omfattar Python, Linux/Bash, Kubernetes, databashantering, agila metoder, testautomation, övervakning och konfigurationshantering. Fördjupning inom containertekniker, byggsystem, releasehantering och moln.",
    en: "Two-year vocational education at Chas Academy focused on CI/CD, container orchestration, Infrastructure as Code, and automation-driven operations. Covers Python, Linux/Bash, Kubernetes, database management, agile methods, test automation, monitoring, and configuration management. Specialization in container technologies, build systems, release management, and cloud.",
  },
  "edu.fora.title": { se: "Praktik – DevOps Engineer", en: "Internship – DevOps Engineer" },
  "edu.fora.date": { se: "November 2023 till Oktober 2024", en: "November 2023 to October 2024" },
  "edu.fora.desc": {
    se: "Utvecklade skalbara företagslösningar med fokus på microservices-arkitektur. Implementerade och underhöll system med PowerShell och Python, automatiserade CI/CD-pipelines och utvecklade molnlösningar med Azure DevOps. Optimerade och övervakade Microsoft Azure-infrastruktur för ökad tillgänglighet och prestanda.",
    en: "Developed scalable enterprise solutions focused on microservices architecture. Implemented and maintained systems with PowerShell and Python, automated CI/CD pipelines, and developed cloud solutions with Azure DevOps. Optimized and monitored Microsoft Azure infrastructure for improved availability and performance.",
  },
  "edu.azure.date": { se: "Februari 2025", en: "February 2025" },
  "edu.azure.desc": {
    se: "Fördjupade kunskaper i Azure Functions, Active Directory, säkerhet och kostnadsoptimering, samt praktisk erfarenhet av PaaS, IaaS, SaaS och Azure Kubernetes Service. Implementering av CI/CD-pipelines och versionshantering med Git för automatiserad distribution.",
    en: "Advanced knowledge in Azure Functions, Active Directory, security, and cost optimization, along with practical experience in PaaS, IaaS, SaaS, and Azure Kubernetes Service. Implementation of CI/CD pipelines and version control with Git for automated deployment.",
  },
  "edu.dotnet.title": { se: "Webbutvecklare .NET", en: "Web Developer .NET" },
  "edu.dotnet.date": { se: "Augusti 2022 till Juni 2024", en: "August 2022 to June 2024" },
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
    se: "Över tio års arbetslivserfarenhet kombinerat med modern DevOps-kompetens. Från ledande positioner inom försäljning och organisationsarbete till praktisk DevOps-erfarenhet på Fora AB och pågående fördjupning inom Kubernetes, containerorkestrering och molninfrastruktur.",
    en: "Over ten years of professional experience combined with modern DevOps expertise. From leadership positions in sales and organizational work to practical DevOps experience at Fora AB and ongoing specialization in Kubernetes, container orchestration, and cloud infrastructure.",
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
    se: "Bred teknisk kompetens inom DevOps, containerorkestrering och molninfrastruktur, kombinerat med en solid grund i .NET-utveckling. Arbetar med Kubernetes, Docker, Terraform, CI/CD och molnplattformar som Azure och Google Cloud Platform för att bygga skalbara och automatiserade lösningar.",
    en: "Broad technical expertise in DevOps, container orchestration, and cloud infrastructure, combined with a solid foundation in .NET development. Working with Kubernetes, Docker, Terraform, CI/CD, and cloud platforms like Azure and Google Cloud Platform to build scalable and automated solutions.",
  },

  // Projects
  "nav.projects": { se: "PROJEKT", en: "PROJECTS" },
  "projects.tag": { se: "Projekt", en: "Projects" },
  "projects.heading1": { se: "MINA", en: "MY" },
  "projects.heading2": { se: "PROJEKT", en: "PROJECTS" },
  "projects.desc": {
    se: "Egna projekt som visar praktisk erfarenhet inom DevOps, automation och infrastruktur.",
    en: "Personal projects demonstrating practical experience in DevOps, automation, and infrastructure.",
  },
  "projects.code": { se: "Kod", en: "Code" },
  "projects.github": { se: "Se alla projekt på GitHub", en: "View all projects on GitHub" },

  // Contact
  "contact.heading1": { se: "LÅT OSS", en: "LET'S" },
  "contact.heading2": { se: "HÖRAS", en: "CONNECT" },
  "contact.sub": { se: "Hör av dig om LIA eller samarbete", en: "Get in touch about internship or collaboration" },
  "contact.reply": { se: "Jag hör av mig omgående", en: "I will get back to you promptly" },
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
