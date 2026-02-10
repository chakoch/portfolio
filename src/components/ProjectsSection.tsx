import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useI18n } from "@/i18n";

const projects = [
  {
    name: "Ubuntu 24 Server Provisioning",
    description: {
      se: "Automatiserad provisionering av Ubuntu 24-servrar med bash-script. Konfigurerar användare, rättigheter, paket och säkerhetsinställningar för produktionsklara servrar.",
      en: "Automated provisioning of Ubuntu 24 servers with bash scripts. Configures users, permissions, packages, and security settings for production-ready servers.",
    },
    tags: ["Bash", "Linux", "Ubuntu", "Automation"],
    github: "https://github.com/chakoch/ubuntu24-server-provisioning",
  },
  {
    name: "Restic Backup Automation",
    description: {
      se: "Automatiserad backup-lösning med Restic. Konfigurerar krypterade, inkrementella backups med stöd för schemaläggning och fjärrlagring.",
      en: "Automated backup solution with Restic. Configures encrypted, incremental backups with support for scheduling and remote storage.",
    },
    tags: ["Bash", "Linux", "Restic", "Automation"],
    github: "https://github.com/chakoch/restic-backup",
  },
  {
    name: {
      se: "Portfolio (denna sajt)",
      en: "Portfolio (this site)",
    },
    description: {
      se: "Personlig portfolio byggd med TypeScript. Presenterar kompetens, utbildning och projekt inom DevOps.",
      en: "Personal portfolio built with TypeScript. Showcases skills, education, and DevOps projects.",
    },
    tags: ["TypeScript", "React", "Tailwind CSS"],
    github: "https://github.com/chakoch/portfolio",
  },
  {
    name: {
      se: "Python Slutprojekt",
      en: "Python Final Project",
    },
    description: {
      se: "Slutprojekt i systemutveckling med Python. Objektorienterad programmering, datastrukturer och automation.",
      en: "Final project in systems development with Python. Object-oriented programming, data structures, and automation.",
    },
    tags: ["Python", "OOP"],
    github: "https://github.com/chakoch/python-final",
  },
  {
    name: "GCP Infrastructure med Terraform",
    description: {
      se: "Infrastrukturprojekt i Google Cloud Platform med Terraform. Automatiserad uppsättning av molnresurser med Infrastructure as Code.",
      en: "Infrastructure project in Google Cloud Platform with Terraform. Automated provisioning of cloud resources with Infrastructure as Code.",
    },
    tags: ["Terraform", "GCP", "IaC"],
    github: "https://github.com/chakoch/TodoApp",
  },
];

const ProjectsSection = () => {
  const { lang, t } = useI18n();

  return (
    <section id="projects" className="section-padding section-alt">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-xs font-medium text-label tracking-[0.2em] uppercase">{t("projects.tag")}</span>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl mt-3">
            {t("projects.heading1")} <span className="font-display-italic text-gradient">{t("projects.heading2")}</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl text-sm leading-relaxed">
            {t("projects.desc")}
          </p>
          <a
            href="https://github.com/chakoch"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity tracking-wider"
          >
            <Github className="w-5 h-5" />
            {t("projects.github")}
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => {
            const name = typeof project.name === "string" ? project.name : project.name[lang];
            const desc = project.description[lang];

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all flex flex-col"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="font-display text-xl tracking-wide text-foreground">{name}</h3>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors shrink-0"
                      title={t("projects.code")}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
