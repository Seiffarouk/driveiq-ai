import { motion } from "framer-motion";

const stats = [
  { value: "99.2%", label: "Detection Accuracy" },
  { value: "4-Phase", label: "ML Pipeline" },
  { value: "<2s", label: "Feedback Latency" },
  { value: "50K+", label: "Sessions Analyzed" },
];

const PlatformOverview = () => {
  return (
    <section id="platform" className="section-padding relative">
      <div className="absolute inset-0 glow-effect opacity-50" />
      <div className="container relative mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, type: "spring", stiffness: 100 }}
              whileHover={{ y: -6, boxShadow: "var(--shadow-glow)" }}
              className="glass-card p-8 text-center group cursor-default"
            >
              <motion.span
                className="text-3xl md:text-4xl font-bold text-primary block mb-2"
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 + 0.2, type: "spring" }}
              >
                {stat.value}
              </motion.span>
              <span className="text-sm text-muted-foreground">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformOverview;
