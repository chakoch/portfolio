import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { useI18n } from "@/i18n";

type Lang = "se" | "en";
type Translatable = Record<Lang, string>;

interface TimelineEvent {
  period: Translatable;
  startDate: string;
  endDate: string;
  title: Translatable;
  subtitle: Translatable;
  description: Translatable;
  bullets: Translatable[];
  tags?: { label: string; emoji?: string }[];
}

const events: TimelineEvent[] = [
  {
    period: { se: "Sep 2025", en: "Sep 2025" },
    startDate: "2025-09",
    endDate: "2025-09",
    title: { se: "DevOps-rollen", en: "The DevOps Role" },
    subtitle: { se: "Intro till DevOps (15 YH-poäng)", en: "Intro to DevOps (15 credits)" },
    description: { se: "Startade min DevOps-utbildning på Chas Academy.", en: "Started my DevOps program at Chas Academy." },
    bullets: [
      { se: "DevOps i organisationer", en: "DevOps in organizations" },
      { se: "Teknikstackar och yrkesroller", en: "Tech stacks and roles" },
      { se: "Intro till Python", en: "Intro to Python" },
      { se: "Affärs- och teknikperspektiv", en: "Business and tech perspective" },
    ],
  },
  {
    period: { se: "Okt–Nov 2025", en: "Oct–Nov 2025" },
    startDate: "2025-10",
    endDate: "2025-11",
    title: { se: "Python", en: "Python" },
    subtitle: { se: "Automation, OOP och CI/CD (15 YH-poäng)", en: "Automation, OOP and CI/CD (15 credits)" },
    description: { se: "Python som verktyg för automation inom DevOps.", en: "Python as a tool for DevOps automation." },
    bullets: [
      { se: "Datastrukturer och OOP", en: "Data structures and OOP" },
      { se: "TDD och BDD", en: "TDD and BDD" },
      { se: "Automation inför CI/CD", en: "Automation for CI/CD" },
      { se: "Versionshantering med Git", en: "Version control with Git" },
    ],
  },
  {
    period: { se: "Nov 2025–Jan 2026", en: "Nov 2025–Jan 2026" },
    startDate: "2025-11",
    endDate: "2026-01",
    title: { se: "Linux & Bash", en: "Linux & Bash" },
    subtitle: { se: "Systemadmin och skriptning (50 YH-poäng)", en: "Sysadmin and scripting (50 credits)" },
    description: { se: "Hantering och drift av Linuxbaserade system.", en: "Managing and operating Linux-based systems." },
    bullets: [
      { se: "Användare, rättigheter, filstruktur", en: "Users, permissions, file structure" },
      { se: "Bash-script för automation", en: "Bash scripts for automation" },
      { se: "Övervakning och säkerhet", en: "Monitoring and security" },
      { se: "Containerteknik i Linuxmiljö", en: "Container tech in Linux" },
    ],
  },
  {
    period: { se: "Jan–Feb 2026", en: "Jan–Feb 2026" },
    startDate: "2026-01",
    endDate: "2026-02",
    title: { se: "Databaser", en: "Databases" },
    subtitle: { se: "SQL och databasdesign (30 YH-poäng)", en: "SQL and database design (30 credits)" },
    description: { se: "Databasutveckling, SQL och databasdesign.", en: "Database development, SQL, and design." },
    bullets: [
      { se: "SQL och relationsdatabaser", en: "SQL and relational databases" },
      { se: "SQLite och MySQL", en: "SQLite and MySQL" },
      { se: "Optimering och prestanda", en: "Optimization and performance" },
      { se: "Databaslösningar med Python", en: "Database solutions with Python" },
    ],
  },
  {
    period: { se: "Feb–Maj 2026", en: "Feb–May 2026" },
    startDate: "2026-02",
    endDate: "2026-05",
    title: { se: "Agila metoder", en: "Agile Methods" },
    subtitle: { se: "Scrum, Kanban och DevOps (20 YH-poäng)", en: "Scrum, Kanban and DevOps (20 credits)" },
    description: { se: "Agila modeller i systemutvecklingsprojekt med CI/CD.", en: "Agile models in development projects with CI/CD." },
    bullets: [
      { se: "Scrum och Kanban", en: "Scrum and Kanban" },
      { se: "Projektledning inom DevOps", en: "Project management in DevOps" },
      { se: "CI/CD i agila processer", en: "CI/CD in agile processes" },
      { se: "Leda DevOps-team", en: "Leading DevOps teams" },
    ],
  },
  {
    period: { se: "Feb–Jun 2026", en: "Feb–Jun 2026" },
    startDate: "2026-02",
    endDate: "2026-06",
    title: { se: "DevOps", en: "DevOps" },
    subtitle: { se: "Kubernetes och CI/CD (60 YH-poäng)", en: "Kubernetes and CI/CD (60 credits)" },
    description: { se: "Utbildningens första stora DevOps-kurs.", en: "The program's first major DevOps course." },
    bullets: [
      { se: "Kubernetes orchestration", en: "Kubernetes orchestration" },
      { se: "CI/CD: bygg, test, deploy", en: "CI/CD: build, test, deploy" },
      { se: "Övervakning i produktion", en: "Monitoring in production" },
      { se: "Docker och Kubernetes", en: "Docker and Kubernetes" },
    ],
    tags: [
      { label: "Kubernetes", emoji: "📚" },
      { label: "Docker", emoji: "📚" },
      { label: "CI/CD", emoji: "📚" },
    ],
  },
  {
    period: { se: "Sep–Nov 2026", en: "Sep–Nov 2026" },
    startDate: "2026-09",
    endDate: "2026-11",
    title: { se: "Fördjupning DevOps", en: "Advanced DevOps" },
    subtitle: { se: "Kubernetes, IaC och CMT (60 YH-poäng)", en: "Kubernetes, IaC and CMT (60 credits)" },
    description: { se: "Utbildningens andra stora DevOps-kurs.", en: "The program's second major DevOps course." },
    bullets: [
      { se: "Avancerad Kubernetes", en: "Advanced Kubernetes" },
      { se: "Terraform och Ansible", en: "Terraform and Ansible" },
      { se: "Configuration Management", en: "Configuration Management" },
      { se: "Automation: kod till produktion", en: "Automation: code to production" },
    ],
    tags: [
      { label: "Kubernetes", emoji: "📚" },
      { label: "Terraform", emoji: "📚" },
      { label: "Ansible", emoji: "📚" },
    ],
  },
  {
    period: { se: "Nov 2026–Maj 2027", en: "Nov 2026–May 2027" },
    startDate: "2026-11",
    endDate: "2027-05",
    title: { se: "LIA-praktik", en: "Internship (LIA)" },
    subtitle: { se: "Söker LIA-plats (120 YH-poäng)", en: "Seeking internship (120 credits)" },
    description: { se: "Praktik som DevOps Engineer i skarpa projekt.", en: "Internship as a DevOps Engineer in real projects." },
    bullets: [
      { se: "6 månaders praktik", en: "6-month internship" },
      { se: "Stockholm eller remote", en: "Stockholm or remote" },
      { se: "Kubernetes · DevOps · Cloud", en: "Kubernetes · DevOps · Cloud" },
      { se: "Mål: Långsiktig anställning", en: "Goal: Long-term employment" },
    ],
    tags: [
      { label: "Söker LIA", emoji: "🎯" },
      { label: "Stockholm/Remote", emoji: "💼" },
    ],
  },
];

function getCurrentEventIndex(): number {
  const now = new Date();
  const currentYM = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;

  for (let i = events.length - 1; i >= 0; i--) {
    const ev = events[i];
    if (ev.startDate <= currentYM && ev.endDate >= currentYM) {
      return i;
    }
  }
  for (let i = 0; i < events.length; i++) {
    if (events[i].startDate >= currentYM) return i;
  }
  return events.length - 1;
}

const TimelineSection = () => {
  const { lang, t } = useI18n();
  const defaultIndex = useMemo(() => getCurrentEventIndex(), []);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="timeline" className="section-padding section-alt">
      <div className="max-w-[1400px] mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="text-xs font-medium text-label tracking-[0.2em] uppercase">{t("timeline.tag")}</span>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl mt-3">
            {t("timeline.heading1")} <span className="font-display-italic text-gradient">{t("timeline.heading2")}</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground max-w-3xl text-sm leading-relaxed mb-14 md:text-center md:mx-auto"
        >
          {t("timeline.desc")}
        </motion.p>

        {/* Timeline dots row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="relative mb-10"
        >
          {/* "{t("timeline.now")}" badge */}
          <div className="flex justify-end mb-3">
            <button
              onClick={() => setActiveIndex(defaultIndex)}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-accent/10 text-red-accent text-xs font-medium tracking-wider hover:bg-red-accent/20 transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-red-accent animate-pulse" />
              {t("timeline.now")}
            </button>
          </div>

          {/* Horizontal line + dots */}
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-px bg-border -translate-y-1/2" />
            <div
              className="absolute top-1/2 left-0 h-px bg-primary/40 -translate-y-1/2 transition-all duration-700"
              style={{ width: `${((defaultIndex + 0.5) / Math.max(events.length - 1, 1)) * 100}%` }}
            />

            <div className="grid" style={{ gridTemplateColumns: `repeat(${events.length}, 1fr)` }}>
              {events.map((ev, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className="relative flex flex-col items-center gap-2 z-10 group py-3"
                >
                  <div className={`w-3.5 h-3.5 rounded-full border-2 transition-all duration-300 ${
                    activeIndex === i
                      ? "bg-primary border-primary shadow-[0_0_12px_hsl(var(--primary)/0.5)] scale-150"
                      : i === defaultIndex
                        ? "bg-primary border-primary scale-125"
                        : i < defaultIndex
                          ? "bg-primary/30 border-primary/50 group-hover:border-primary group-hover:scale-125"
                          : "bg-background border-border group-hover:border-primary group-hover:scale-125"
                  } ${i === defaultIndex ? "ring-2 ring-red-accent ring-offset-2 ring-offset-[hsl(var(--background-alt))]" : ""}`} />
                  <span className={`text-[9px] md:text-[10px] tracking-wider transition-colors whitespace-nowrap hidden sm:block ${
                    activeIndex === i ? "text-primary font-medium" : "text-muted-foreground group-hover:text-foreground"
                  }`}>
                    {ev.period[lang].length > 18 ? ev.period[lang].split("–")[0].trim() : ev.period[lang]}
                  </span>
                  {i === defaultIndex && (
                    <span className="absolute -top-5 text-[9px] font-medium text-red-accent tracking-wider whitespace-nowrap">
                      {t("timeline.ongoing")}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-8 gap-4 md:gap-5">
          {events.map((ev, i) => (
            <div
              key={i}
              className="relative"
              onMouseEnter={() => setActiveIndex(i)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              {/* Base card — always visible */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`p-4 md:p-5 rounded-xl bg-card border cursor-pointer transition-all duration-300 h-full ${
                  i === defaultIndex
                    ? "border-red-accent/30"
                    : "border-border hover:border-primary/20"
                }`}
              >
                {/* {t("timeline.active")} badge on current course — always visible */}
                {i === defaultIndex && (
                  <div className="absolute -top-3 right-3 px-2.5 py-0.5 rounded bg-card border border-red-accent/40 text-[9px] font-medium text-red-accent tracking-widest uppercase z-10">
                    {t("timeline.active")}
                  </div>
                )}

                <span className="text-[11px] font-medium tracking-wider uppercase block mb-2 text-muted-foreground">
                  {ev.period[lang]}
                </span>

                <h4 className="font-display text-lg md:text-xl tracking-wide text-foreground leading-tight">
                  {ev.title[lang]}
                </h4>
                <p className="text-xs mt-1 italic text-muted-foreground">
                  {ev.subtitle[lang]}
                </p>

                <ul className="mt-3 space-y-1.5">
                  {ev.bullets.slice(0, 2).map((b, j) => (
                    <li key={j} className="text-xs text-muted-foreground flex items-start gap-1.5">
                      <span className="text-primary mt-0.5 shrink-0">→</span>
                      <span className="line-clamp-1">{b[lang]}</span>
                    </li>
                  ))}
                  {ev.bullets.length > 2 && (
                    <li className="text-[11px] text-muted-foreground/50">+{ev.bullets.length - 2} {t("timeline.more")}</li>
                  )}
                </ul>

                {/* Tags on base card */}
                {ev.tags && ev.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-2.5">
                    {ev.tags.slice(0, 2).map((tag, t) => (
                      <span key={t} className="text-[10px] text-primary/60 bg-primary/5 rounded px-1.5 py-0.5">
                        {tag.label}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>

              {/* Expanded overlay — ONLY on hover */}
              {activeIndex === i && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.15 }}
                  className={`absolute top-0 left-0 right-0 z-30 p-4 md:p-5 rounded-xl bg-card border ${
                    i === defaultIndex
                      ? "border-red-accent/40 shadow-[0_0_25px_-5px_hsl(var(--red-accent)/0.3)]"
                      : "border-primary/40 shadow-[0_0_25px_-5px_hsl(var(--primary)/0.3)]"
                  }`}
                >
                  {i === defaultIndex && (
                    <div className="absolute -top-3 right-3 px-2.5 py-0.5 rounded bg-card border border-red-accent/40 text-[9px] font-medium text-red-accent tracking-widest uppercase">
                      {t("timeline.active")}
                    </div>
                  )}

                  <span className="text-[11px] font-medium tracking-wider uppercase block mb-1.5 text-primary">
                    {ev.period[lang]}
                  </span>

                  <h4 className="font-display text-xl tracking-wide text-foreground leading-tight">
                    {ev.title[lang]}
                  </h4>
                  <p className="text-xs text-primary mt-1 italic">{ev.subtitle[lang]}</p>

                  <div className="mt-3 pt-3 border-t border-border">
                    <ul className="space-y-1.5">
                      {ev.bullets.map((b, j) => (
                        <li key={j} className="text-xs text-muted-foreground flex items-start gap-1.5 leading-relaxed">
                          <span className="text-primary mt-px shrink-0">→</span>
                          {b[lang]}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tags in expanded */}
                  {ev.tags && ev.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-border">
                      {ev.tags.map((tag, t) => (
                        <span key={t} className="inline-flex items-center gap-1 text-[11px] text-primary bg-primary/10 rounded px-2 py-0.5 w-fit">
                          {tag.emoji && <span>{tag.emoji}</span>}
                          {tag.label}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* "{t("timeline.cta")}" button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex justify-center mt-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity tracking-wider"
          >
            {t("timeline.cta")}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TimelineSection;
