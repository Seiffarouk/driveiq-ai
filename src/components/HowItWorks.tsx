import { motion } from "framer-motion";
import { Car, Settings, Brain, MessageSquare, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: Car,
    title: "Drive session recorded",
    description: "Sensor data is captured during each driving session automatically.",
  },
  {
    icon: Settings,
    title: "Data processed offline",
    description: "Raw signals are cleaned, windowed, and feature-engineered for ML.",
  },
  {
    icon: Brain,
    title: "ML detects behavior",
    description: "Classification and anomaly models identify driving patterns.",
  },
  {
    icon: MessageSquare,
    title: "AI generates feedback",
    description: "LLMs produce human-readable coaching based on ML outputs.",
  },
  {
    icon: BarChart3,
    title: "Results delivered",
    description: "Students and instructors see reports, timelines, and actionable insights.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Background decorative dots */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-primary/20"
            style={{
              top: `${15 + i * 15}%`,
              right: `${10 + (i % 3) * 8}%`,
            }}
            animate={{ opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
          />
        ))}
      </div>

      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-3 block">
            How It Works
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Five steps to better driving
          </h2>
        </motion.div>

        <div className="relative max-w-2xl mx-auto">
          {/* Vertical timeline line */}
          <motion.div
            className="absolute left-8 top-0 bottom-0 w-px origin-top"
            style={{
              background:
                "linear-gradient(to bottom, hsl(var(--primary) / 0.4), hsl(var(--primary) / 0.1), transparent)",
            }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />

          <div className="space-y-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, type: "spring", stiffness: 120 }}
                className="relative flex items-start gap-6 pl-0"
              >
                {/* Icon circle on timeline */}
                <motion.div
                  className="relative z-10 w-16 h-16 rounded-full bg-secondary flex items-center justify-center border border-border/50 shrink-0"
                  whileHover={{ scale: 1.1, borderColor: "hsl(var(--primary) / 0.5)" }}
                  transition={{ type: "spring" }}
                >
                  <step.icon className="text-primary" size={24} />
                  {/* Pulse ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full border border-primary/20"
                    animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
                  />
                </motion.div>

                {/* Content */}
                <div className="pt-2">
                  <h3 className="text-lg font-bold mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
