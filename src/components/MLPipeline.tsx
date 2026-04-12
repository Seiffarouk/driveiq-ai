import { motion } from "framer-motion";
import { Layers, Search, BarChart3, Sparkles } from "lucide-react";

const phases = [
  {
    icon: Layers,
    phase: "Phase 1",
    title: "Classification",
    description:
      "Multi-class driving behavior classification using ensemble ML models trained on labeled sensor data.",
    color: "from-primary/20 to-primary/5",
  },
  {
    icon: Search,
    phase: "Phase 2",
    title: "Anomaly Detection",
    description:
      "Isolation Forest and statistical methods detect abnormal patterns — aggressive braking, drowsy swerving.",
    color: "from-primary/15 to-primary/5",
  },
  {
    icon: BarChart3,
    phase: "Phase 3",
    title: "Feature Attribution",
    description:
      "SHAP-based explainability shows which sensor features contributed most to each classification.",
    color: "from-primary/10 to-primary/5",
  },
  {
    icon: Sparkles,
    phase: "Phase 4",
    title: "AI Feedback",
    description:
      "LLM generates natural language coaching — window-level insights plus overall session summaries.",
    color: "from-primary/5 to-transparent",
  },
];

const MLPipeline = () => {
  return (
    <section id="pipeline" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent hidden md:block" />

          <div className="space-y-8">
            {phases.map((phase, i) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`relative flex flex-col md:flex-row items-start gap-6 ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />

                <div className={`md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className={`glass-card p-6 bg-gradient-to-br ${phase.color}`}>
                    <div className={`flex items-center gap-3 mb-3 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                      <phase.icon className="text-primary" size={20} />
                      <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                        {phase.phase}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{phase.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
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
