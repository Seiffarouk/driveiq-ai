import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 glow-effect" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl animate-pulse-glow" />

      <div className="container relative mx-auto px-4 md:px-8 pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary mb-6">
              AI-Powered Driving Intelligence
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
          >
            Smarter driving.{" "}
            <span className="gradient-text">Safer roads.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            DriveIQ combines machine learning, anomaly detection, and LLM-powered
            feedback to transform how driving institutes train the next generation
            of safe drivers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#cta"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity shadow-lg"
              style={{ boxShadow: "var(--shadow-glow)" }}
            >
              Download App
              <ArrowRight size={16} />
            </a>
            <a
              href="#pipeline"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background/50 backdrop-blur-sm px-8 py-3.5 text-sm font-semibold text-foreground hover:bg-secondary transition-colors"
            >
              <Play size={16} />
              See ML Pipeline
            </a>
          </motion.div>
        </div>

        {/* Floating metrics */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {[
            { value: "99.2%", label: "Detection Accuracy" },
            { value: "4-Phase", label: "ML Pipeline" },
            { value: "<2s", label: "Feedback Latency" },
            { value: "50K+", label: "Sessions Analyzed" },
          ].map((stat, i) => (
            <div key={i} className="glass-card p-4 text-center">
              <div className="text-2xl font-bold gradient-text">{stat.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
