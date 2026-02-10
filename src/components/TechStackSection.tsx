import { motion } from "framer-motion";
import { useI18n } from "@/i18n";

const techs = [
  { name: "Kubernetes", category: "Orkestrering", icon: "https://cdn.simpleicons.org/kubernetes/326CE5" },
  { name: "Docker", category: "Containerisering", icon: "https://cdn.simpleicons.org/docker/2496ED" },
  { name: "Terraform", category: "Infrastructure as Code", icon: "https://cdn.simpleicons.org/terraform/844FBA" },
  { name: "Azure", category: "Molnplattform", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
  { name: "Google Cloud", category: "Molnplattform", icon: "https://cdn.simpleicons.org/googlecloud/4285F4" },
  { name: "Azure DevOps", category: "CI/CD", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuredevops/azuredevops-original.svg" },
  { name: "Linux", category: "Serveradministration", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
  { name: "Bash", category: "Skriptning", icon: "https://cdn.simpleicons.org/gnubash/4EAA25" },
  { name: "Python", category: "Automation och DevOps", icon: "https://cdn.simpleicons.org/python/3776AB" },
  { name: "PowerShell", category: "Skriptning", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/powershell/powershell-original.svg" },
  { name: "Git", category: "Versionshantering", icon: "https://cdn.simpleicons.org/git/F05032" },
  { name: "GitHub", category: "Kodhantering", icon: "https://cdn.simpleicons.org/github/ffffff" },
  { name: "C#", category: "Programmeringsspråk", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
  { name: "ASP.NET Core", category: "Ramverk", icon: "https://cdn.simpleicons.org/dotnet/512BD4" },
  { name: "JavaScript", category: "Programmeringsspråk", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
  { name: "TypeScript", category: "Programmeringsspråk", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
  { name: "React", category: "Frontend", icon: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "SQL", category: "Databaser", icon: "https://cdn.simpleicons.org/mysql/4479A1" },
  { name: "Entity Framework", category: "ORM", icon: "https://cdn.simpleicons.org/dotnet/512BD4" },
];

const TechStackSection = () => {
  const { t } = useI18n();

  return (
    <section id="stack" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-xs font-medium text-label tracking-[0.2em] uppercase">{t("tech.tag")}</span>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl mt-3">
            {t("tech.heading1")} <span className="font-display-italic text-gradient">{t("tech.heading2")}</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl text-sm leading-relaxed">
            {t("tech.desc")}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {techs.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              className="group flex flex-col items-center p-5 rounded-xl bg-card border border-border hover:border-primary/40 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_-5px_hsl(var(--primary)/0.2)]"
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform"
                loading="lazy"
              />
              <span className="text-sm font-medium text-foreground text-center">{tech.name}</span>
              <span className="text-[10px] text-muted-foreground mt-1">{tech.category}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
