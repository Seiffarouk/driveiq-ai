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
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-3 block">
            ML Pipeline
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Four phases. One insight engine.
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Every driving session flows through our multi-phase machine learning
            pipeline for comprehensive analysis.
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Animated vertical line */}
          <motion.div
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px hidden md:block origin-top"
            style={{ background: "linear-gradient(to bottom, hsl(var(--primary) / 0.4), hsl(var(--primary) / 0.1), transparent)" }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />

          <div className="space-y-8">
            {phases.map((phase, i) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.7, type: "spring" }}
                className={`relative flex flex-col md:flex-row items-start gap-6 ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Animated dot */}
                <motion.div
                  className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 + 0.3, type: "spring", stiffness: 300 }}
                >
                  <div className="w-4 h-4 rounded-full bg-primary border-4 border-background" />
                  <motion.div
                    className="absolute inset-0 rounded-full bg-primary/30"
                    animate={{ scale: [1, 2.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                  />
                </motion.div>

                <div className={`md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <motion.div
                    className="glass-card p-6 bg-gradient-to-br from-primary/10 to-transparent"
                    whileHover={{ scale: 1.03, boxShadow: "var(--shadow-glow)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className={`flex items-center gap-3 mb-3 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                      <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                        <phase.icon className="text-primary" size={20} />
                      </motion.div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                        {phase.phase}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{phase.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {phase.description}
                    </p>
                  </motion.div>
                </div>

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
