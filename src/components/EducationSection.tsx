import { motion } from "framer-motion";
import { useI18n } from "@/i18n";

const EducationSection = () => {
  const { t } = useI18n();

  const items = [
    {
      title: "DevOps Engineer",
      badge: t("edu.ongoing"),
      description: t("edu.devops.desc"),
      tags: ["Kubernetes", "Docker", "Terraform", "CI/CD", "GCP", "Python", "Linux", "IaC", "Bash", "Agile"],
      date: t("edu.devops.date"),
      place: "Chas Academy, Stockholm",
    },
    {
      title: t("edu.fora.title"),
      badge: t("edu.internship"),
      description: t("edu.fora.desc"),
      tags: ["DevOps", "CI/CD", "Docker", "Azure", "Terraform", "Agile"],
      date: t("edu.fora.date"),
      place: "Fora AB, Stockholm",
    },
    {
      title: "Cloud Development with Azure",
      badge: t("edu.completed"),
      description: t("edu.azure.desc"),
      tags: ["Azure", "Azure Functions", "AKS", "Active Directory", "CI/CD", "Git"],
      date: t("edu.azure.date"),
      place: t("edu.azure.place"),
    },
    {
      title: t("edu.dotnet.title"),
      badge: t("edu.completed"),
      description: t("edu.dotnet.desc"),
      tags: ["C#", ".NET", "ASP.NET Core", "Entity Framework", "SQL", "REST API"],
      date: t("edu.dotnet.date"),
      place: "Nackademin, Solna",
    },
  ];

  return (
    <section id="education" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-medium text-label tracking-[0.2em] uppercase">{t("edu.tag")}</span>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl mt-3 mb-12">
            {t("edu.heading1")} <span className="font-display-italic text-gradient">{t("edu.heading2")}</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 md:p-8 rounded-xl bg-card border border-border hover:border-primary/30 transition-all flex flex-col"
            >
              <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                <h3 className="font-display text-2xl tracking-wide text-foreground">{item.title}</h3>
                <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {item.badge}
                </span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{item.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {item.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="pt-4 border-t border-border mt-auto">
                <p className="text-xs text-muted-foreground">{item.date}</p>
                <p className="text-xs text-muted-foreground mt-1">{item.place}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
