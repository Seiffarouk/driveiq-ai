import { motion } from "framer-motion";
import { Layers, Search, BarChart3, Sparkles } from "lucide-react";

const phases = [
  {
    icon: Layers,
    phase: "Phase 1",
    title: "Classification",
    description:
      "Multi-class driving behavior classification using ensemble ML models trained on labeled sensor data.",
  },
  {
    icon: Search,
    phase: "Phase 2",
    title: "Anomaly Detection",
    description:
      "Isolation Forest and statistical methods detect abnormal patterns — aggressive braking, drowsy swerving.",
  },
  {
    icon: BarChart3,
    phase: "Phase 3",
    title: "Feature Attribution",
    description:
      "SHAP-based explainability shows which sensor features contributed most to each classification.",
  },
  {
    icon: Sparkles,
    phase: "Phase 4",
    title: "AI Feedback",
    description:
      "LLM generates natural language coaching — window-level insights plus overall session summaries.",
  },
];

const MLPipeline = () => {
  return (
    <section id="pipeline" className="section-padding bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-3 block">
            ML Pipeline
          </span>
          <h2 className="text-2xl md:text-5xl font-bold tracking-tight mb-3 md:mb-4">
            Four phases. One insight engine.
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
            Every driving session flows through our multi-phase machine learning
            pipeline for comprehensive analysis.
          </p>
        </motion.div>

        {/* Mobile: vertical stack, Desktop: timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical timeline line - visible on all screens */}
          <motion.div
            className="absolute left-[1.75rem] md:left-1/2 top-0 bottom-0 w-px origin-top"
            style={{ background: "linear-gradient(to bottom, hsl(var(--primary) / 0.4), hsl(var(--primary) / 0.1), transparent)" }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />

          <div className="space-y-6 md:space-y-8">
            {phases.map((phase, i) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5, type: "spring" }}
                className={`relative flex items-start gap-4 md:gap-6 pl-0 ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="relative z-10 shrink-0 w-14 h-14 md:w-auto md:absolute md:left-1/2 md:-translate-x-1/2">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <phase.icon className="text-primary" size={20} />
                  </div>
                  <motion.div
                    className="absolute inset-0 rounded-2xl border border-primary/20"
                    animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0, 0.4] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                  />
                </div>

                {/* Card content */}
                <div className={`flex-1 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <motion.div
                    className="glass-card p-5 md:p-6"
                    whileHover={{ scale: 1.02, boxShadow: "var(--shadow-glow)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-2 block">
                      {phase.phase}
                    </span>
                    <h3 className="text-lg font-bold mb-1.5">{phase.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {phase.description}
                    </p>
                  </motion.div>
                </div>

                {/* Spacer for desktop alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MLPipeline;
