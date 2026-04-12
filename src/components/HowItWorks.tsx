import { motion } from "framer-motion";
import { Car, Server, Brain, MessageSquare, Users } from "lucide-react";

const steps = [
  { icon: Car, title: "Session Recorded", description: "Sensor data captured during driving" },
  { icon: Server, title: "Data Processed", description: "Raw data cleaned and windowed" },
  { icon: Brain, title: "ML Detects Behavior", description: "Classification and anomaly detection" },
  { icon: MessageSquare, title: "AI Generates Feedback", description: "LLM creates personalized insights" },
  { icon: Users, title: "Results Delivered", description: "Student and instructor get reports" },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding bg-secondary/30">
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
            From session to insight in minutes
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row items-start justify-center gap-4 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex-1 text-center relative"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <step.icon className="text-primary" size={24} />
              </div>
              <div className="text-xs font-bold text-primary mb-1">Step {i + 1}</div>
              <h3 className="font-semibold mb-1">{step.title}</h3>
              <p className="text-xs text-muted-foreground">{step.description}</p>

              {/* Connector */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-7 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px bg-border" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
