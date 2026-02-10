import { motion } from "framer-motion";
import { useI18n } from "@/i18n";

const AboutSection = () => {
  const { t } = useI18n();

  const stats = [
    { value: "10+", label: t("about.stat1") },
    { value: "Fora AB", label: t("about.stat2") },
    { value: "Kubernetes", label: t("about.stat3") },
    { value: "Azure & GCP", label: t("about.stat4") },
  ];

  return (
    <section id="about" className="section-padding section-alt">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-medium text-label tracking-[0.2em] uppercase">{t("about.tag")}</span>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl mt-3 mb-8">
            {t("about.heading1")} <span className="font-display-italic text-gradient">{t("about.heading2")}</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          <motion.div
            className="md:col-span-2 space-y-5 text-muted-foreground leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p>{t("about.p1")}</p>
            <p>{t("about.p2")}</p>
            <p>{t("about.p3")}</p>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {stats.map((s, i) => (
              <div key={i} className="p-4 rounded-lg bg-card border border-border border-l-2 border-l-primary">
                <span className="font-display text-2xl text-primary">{s.value}</span>
                <span className="block text-xs text-muted-foreground mt-1">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* LIA banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative mt-16 p-8 md:p-12 rounded-2xl overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-red-900"
        >
          <span className="absolute -right-4 top-1/2 -translate-y-1/2 font-display text-[12rem] md:text-[18rem] tracking-wider text-white/5 select-none pointer-events-none leading-none">
            LIA
          </span>
          <div className="relative z-10">
            <h3 className="font-display text-3xl md:text-5xl tracking-wider text-white mb-4">{t("about.lia.heading")}</h3>
            <p className="text-white/80 text-sm leading-relaxed max-w-2xl mb-6">{t("about.lia.desc")}</p>
            <div className="flex flex-wrap gap-8 text-sm">
              <div>
                <span className="text-white/50 text-xs uppercase tracking-wider">{t("about.lia.period")}</span>
                <p className="text-white mt-1">{t("about.lia.periodVal")}</p>
              </div>
              <div>
                <span className="text-white/50 text-xs uppercase tracking-wider">{t("about.lia.place")}</span>
                <p className="text-white mt-1">{t("about.lia.placeVal")}</p>
              </div>
              <div>
                <span className="text-white/50 text-xs uppercase tracking-wider">{t("about.lia.interest")}</span>
                <p className="text-white mt-1">DevOps · Kubernetes · Azure · CI/CD · Terraform</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
