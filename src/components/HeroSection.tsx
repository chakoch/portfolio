import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, FileText, ChevronDown, Download, X } from "lucide-react";
import { useI18n } from "@/i18n";
import samImg from "@/assets/sam.jpg";

const HeroSection = () => {
  const { t } = useI18n();
  const [showCV, setShowCV] = useState(false);
  const cvUrl = "/CV_Sam_Jaudat.pdf";

  return (
    <>
      <section className="relative min-h-screen flex items-center section-padding pt-32">
        {/* Subtle grid bg */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }} />

        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 md:gap-16 items-center relative z-10">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-px bg-primary" />
              <span className="text-sm font-medium text-label tracking-[0.2em] uppercase">
                {t("hero.tag")}
              </span>
            </div>

            <h1 className="font-display leading-[0.85] mb-6">
              <span className="block text-6xl md:text-8xl lg:text-9xl text-outline tracking-wider">SAM</span>
              <span className="block text-6xl md:text-8xl lg:text-9xl text-foreground tracking-wider">JAUDAT</span>
            </h1>

            <button
              onClick={() => setShowCV(true)}
              className="inline-flex items-center gap-3 group mb-8"
            >
              <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
              <span className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-full text-sm font-medium text-foreground hover:border-primary transition-colors">
                <FileText className="w-4 h-4" />
                {t("hero.cv")}
              </span>
            </button>

          <p className="text-muted-foreground leading-relaxed max-w-md mb-8 whitespace-pre-line">
            {t("hero.desc")}
          </p>

          <div className="flex gap-12">
            <div>
              <span className="text-xs font-medium text-label tracking-[0.15em] uppercase block mb-1">{t("hero.education")}</span>
              <span className="text-sm text-foreground">DevOps Engineer @ Chas Academy</span>
            </div>
            <div>
              <span className="text-xs font-medium text-label tracking-[0.15em] uppercase block mb-1">{t("hero.focus")}</span>
              <span className="text-sm text-foreground">Kubernetes · CI/CD · Terraform · Docker · Azure · GCP</span>
            </div>
          </div>
        </motion.div>

        {/* Right – Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 via-primary/10 to-transparent blur-3xl" />
            <img
              src={samImg}
              alt="Sam Jaudat"
              className="relative w-full h-full rounded-full object-cover border-2 border-border glow-border"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
      >
        <ChevronDown className="w-5 h-5 animate-bounce" />
        <span className="text-xs tracking-[0.2em] uppercase">{t("hero.scroll")}</span>
      </motion.div>
    </section>

      {/* CV Modal */}
      <AnimatePresence>
        {showCV && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-sm p-4"
            onClick={() => setShowCV(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-4xl h-[85vh] bg-card border border-border rounded-xl overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-border">
                <span className="font-display text-foreground">Curriculum Vitae</span>
                <div className="flex items-center gap-3">
                  <a
                    href={cvUrl}
                    download="CV_Sam_Jaudat.pdf"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
                  >
                    <Download className="w-4 h-4" />
                    {t("hero.download")}
                  </a>
                  <button
                    onClick={() => setShowCV(false)}
                    className="p-2 rounded-lg text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
              {/* PDF embed */}
              <div className="flex-1">
                <iframe
                  src={cvUrl}
                  className="w-full h-full"
                  title="CV Sam Jaudat"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HeroSection;
