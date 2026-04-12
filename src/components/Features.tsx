import { motion } from "framer-motion";
import {
  Activity,
  AlertTriangle,
  FileText,
  LayoutDashboard,
  Clock,
  Shield,
} from "lucide-react";

const features = [
  { icon: Activity, title: "Real-time Behavior Analysis", description: "Continuous monitoring of driving patterns through sensor data streams." },
  { icon: AlertTriangle, title: "Aggressive & Drowsy Detection", description: "Identify dangerous driving behaviors before they become incidents." },
  { icon: FileText, title: "Evidence-based Feedback", description: "AI-generated coaching backed by explainable feature attribution." },
  { icon: LayoutDashboard, title: "Instructor Insights Dashboard", description: "Comprehensive overview of student progress and behavior trends." },
  { icon: Clock, title: "Session Reports", description: "Detailed post-session analysis with window-level breakdowns." },
  { icon: Shield, title: "Safety Scoring", description: "Objective safety metrics that track improvement over time." },
];

const Features = () => {
  return (
    <section id="features" className="section-padding">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-3 block">Features</span>
          <h2 className="text-2xl md:text-5xl font-bold tracking-tight mb-3 md:mb-4">
            Everything you need to train smarter
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
            A comprehensive toolkit for driving institutes to modernize their training with data-driven insights.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, type: "spring", stiffness: 100 }}
              whileHover={{ y: -6, boxShadow: "var(--shadow-glow)" }}
              className="glass-card p-5 md:p-6 transition-all group cursor-default"
            >
              <motion.div
                className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3 md:mb-4 group-hover:bg-primary/20 transition-colors"
                whileHover={{ rotate: 15, scale: 1.15 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <feature.icon className="text-primary" size={20} />
              </motion.div>
              <h3 className="font-semibold mb-1.5 text-sm md:text-base">{feature.title}</h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
