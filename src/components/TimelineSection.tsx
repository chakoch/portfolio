import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { useI18n } from "@/i18n";

interface TimelineEvent {
  period: string;
  startDate: string;
  endDate: string;
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  tags?: { label: string; emoji?: string }[];
}

const events: TimelineEvent[] = [
  {
    period: "September 2025",
    startDate: "2025-09",
    endDate: "2025-09",
    title: "Starten",
    subtitle: "DevOps-rollen & MakeThePlay",
    description: "Påbörjade min DevOps-bana på Chas Academy. Första kursen fokuserade på DevOps-rollen i teknikbranschen.",
    bullets: [
      "Beskriva DevOps-rollen i systemutvecklingsprojekt och organisationer",
      "Reflektera över DevOps-rollens syfte ur affärs- och entreprenörsperspektiv",
      "Förklara hur moderna IT-system är uppbyggda",
      "Förstå principer för CI/CD",
    ],
  },
  {
    period: "Oktober - November 2025",
    startDate: "2025-10",
    endDate: "2025-11",
    title: "Python & Automation",
    subtitle: "Systemutveckling & GinoNova",
    description: "Python som kompletterande språk inom DevOps för automation. OOP, TDD/BDD och CI/CD-pipelines.",
    bullets: [
      "Grundläggande datastrukturer & objektorienterad programmering",
      "Test-Driven Development (TDD) och Behaviour-Driven Development (BDD)",
      "Automatisering inför CI/CD och vanliga arbetsuppgifter",
      "Grundläggande användning av Git för versionshantering",
    ],
  },
  {
    period: "November 2025 - Januari 2026",
    startDate: "2025-11",
    endDate: "2026-01",
    title: "Linux Administration",
    subtitle: "Linux & Bash Scripting",
    description: "Hantering och administration av Linuxbaserade system samt bash-script.",
    bullets: [
      "Behärska Linux-system (användare, rättigheter, filstruktur)",
      "Skriva och förstå bash-script för automation",
      "Arbeta med Linux-distributioner i virtuella miljöer",
      "Scriptspråk med fokus på systemsäkerhet och övervakning",
      "Introduktion till containerteknik",
    ],
  },
  {
    period: "Januari - Februari 2026",
    startDate: "2026-01",
    endDate: "2026-02",
    title: "Databashantering",
    subtitle: "SQL & Databasdesign",
    description: "Grundläggande kunskaper i databasdesign, SQL och lagringslösningar.",
    bullets: [
      "Grundläggande SQL-programmering",
      "Databashanterare som SQLite och MySQL",
      "Optimering av funktionalitet och prestanda",
      "Databasdesign och relationsdatabaser",
      "Utveckla databaslösningar med Python",
    ],
  },
  {
    period: "Mars - Juni 2026",
    startDate: "2026-03",
    endDate: "2026-06",
    title: "Cloud & Agila Metoder",
    subtitle: "Kubernetes, IaC & Scrum",
    description: "Molninfrastruktur, containerorkestrering, Infrastructure as Code samt agila metoder.",
    bullets: [
      "Kubernetes orchestration och deployment strategies",
      "Infrastructure as Code med Terraform och Ansible",
      "Agila metoder, Scrum och Kanban för teamarbete",
      "Advanced CI/CD med GitHub Actions",
      "Monitoring och observability i produktionsmiljö",
    ],
    tags: [
      { label: "Kubernetes", emoji: "☸️" },
      { label: "Terraform/Ansible", emoji: "🏗️" },
      { label: "Agila metoder", emoji: "🔄" },
    ],
  },
  {
    period: "November 2026 - Maj 2027",
    startDate: "2026-11",
    endDate: "2027-05",
    title: "LIA-praktik",
    subtitle: "Söker LIA-plats",
    description: "Söker praktikplats med fokus på DevOps, AI/ML eller infrastruktur.",
    bullets: [
      "6 månaders LIA med fokus på DevOps/Infrastructure",
      "Söker i Stockholm eller remote",
      "Intresse: DevOps · AI/ML · Cloud Infrastructure",
      "Mål: Fastanställning efter avslutad LIA",
    ],
    tags: [
      { label: "Söker LIA", emoji: "🔍" },
      { label: "Stockholm/Remote", emoji: "📍" },
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
  const { t } = useI18n();
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
                    {ev.period.length > 18 ? ev.period.split("-")[0].trim() : ev.period}
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5">
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
                  {ev.period}
                </span>

                <h4 className="font-display text-lg md:text-xl tracking-wide text-foreground leading-tight">
                  {ev.title}
                </h4>
                <p className="text-xs mt-1 italic text-muted-foreground">
                  {ev.subtitle}
                </p>

                <ul className="mt-3 space-y-1.5">
                  {ev.bullets.slice(0, 2).map((b, j) => (
                    <li key={j} className="text-xs text-muted-foreground flex items-start gap-1.5">
                      <span className="text-primary mt-0.5 shrink-0">→</span>
                      <span className="line-clamp-1">{b}</span>
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
                    {ev.period}
                  </span>

                  <h4 className="font-display text-xl tracking-wide text-foreground leading-tight">
                    {ev.title}
                  </h4>
                  <p className="text-xs text-primary mt-1 italic">{ev.subtitle}</p>

                  <div className="mt-3 pt-3 border-t border-border">
                    <ul className="space-y-1.5">
                      {ev.bullets.map((b, j) => (
                        <li key={j} className="text-xs text-muted-foreground flex items-start gap-1.5 leading-relaxed">
                          <span className="text-primary mt-px shrink-0">→</span>
                          {b}
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
