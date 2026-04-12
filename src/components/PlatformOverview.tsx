import { motion } from "framer-motion";
import { Database, Brain, MessageSquare, GraduationCap } from "lucide-react";

const layers = [
  {
    icon: Database,
    title: "Data Collection",
    description: "Sensors capture accelerometer, gyroscope, and GPS data during driving sessions in real-time.",
  },
  {
    icon: Brain,
    title: "ML Pipeline",
    description: "Multi-phase classification and anomaly detection identifies driving behavior patterns.",
  },
  {
    icon: MessageSquare,
    title: "AI Feedback Engine",
    description: "LLM-powered insights generate evidence-based, personalized coaching for each session.",
  },
  {
    icon: GraduationCap,
    title: "Instructor Platform",
    description: "Comprehensive dashboards give instructors full visibility into student progress.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { delay: i * 0.15, duration: 0.5, type: "spring", stiffness: 100 },
  }),
};

const PlatformOverview = () => {
  return (
    <section id="platform" className="section-padding relative">
      <div className="absolute inset-0 glow-effect opacity-50" />
      <div className="container relative mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-xs font-semibold uppercase tracking-widest text-primary mb-3 block"
          >
            Platform
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Intelligence at every layer
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            From raw sensor data to actionable coaching — DriveIQ processes
            everything through a sophisticated AI stack.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {layers.map((layer, i) => (
            <motion.div
              key={layer.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -8, boxShadow: "var(--shadow-glow)" }}
              className="glass-card p-8 transition-shadow group cursor-default"
            >
              <motion.div
                className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors"
                whileHover={{ rotate: 10, scale: 1.1 }}
              >
                <layer.icon className="text-primary" size={24} />
              </motion.div>
              <h3 className="text-lg font-semibold mb-2">{layer.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {layer.description}
              </p>
              {/* Animated bottom bar */}
              <motion.div
                className="h-0.5 bg-primary/20 rounded-full mt-5"
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.15, duration: 0.8 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformOverview;
