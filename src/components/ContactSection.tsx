import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { useI18n } from "@/i18n";

const ContactSection = () => {
  const { t } = useI18n();

  const contacts = [
    { icon: Mail, label: "sam.jaudat@gmail.com", href: "mailto:sam.jaudat@gmail.com" },
    { icon: Phone, label: "072-595 87 36", href: "tel:+46725958736" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/samjaudat/" },
    { icon: Github, label: "GitHub", href: "https://github.com/chakoch" },
  ];

  return (
    <section id="contact" className="section-padding section-alt">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-6xl md:text-8xl lg:text-9xl">
            {t("contact.heading1")} <span className="font-display-italic text-gradient">{t("contact.heading2")}</span>
          </h2>
          <p className="text-muted-foreground mt-4 mb-2">{t("contact.sub")}</p>
          <p className="text-xs text-muted-foreground mb-10">{t("contact.reply")}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid sm:grid-cols-2 gap-4"
        >
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center gap-4 p-5 rounded-xl bg-card border border-border hover:border-primary/40 transition-colors group"
            >
              <c.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
              <span className="text-sm text-foreground">{c.label}</span>
            </a>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-xs text-muted-foreground mt-16"
        >
          © {new Date().getFullYear()} Sam Jaudat. {t("contact.copy")}
        </motion.p>
      </div>
    </section>
  );
};

export default ContactSection;
