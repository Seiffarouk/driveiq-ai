import { motion } from "framer-motion";
import { Code, Brain, Layout } from "lucide-react";

const members = [
  { name: "Seifeldin Hassan", id: "8258314", role: "ML Engineer", icon: Brain },
  { name: "Lorna Tarabeh", id: "8752114", role: "ML Engineer", icon: Brain },
  { name: "Ziyan Hashim", id: "8367656", role: "Backend Developer", icon: Code },
  { name: "Ahmad Al Kakuri", id: "7813259", role: "Backend Developer", icon: Code },
  { name: "Zaid Alshareef", id: "7869447", role: "Frontend Developer", icon: Layout },
];

const TeamSection = () => {
  return (
    <section id="team" className="section-padding">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-3 block">
            Our Team
          </span>
          <h2 className="text-2xl md:text-5xl font-bold tracking-tight mb-3 md:mb-4">
            By Team DataSense
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
            The minds behind DriveIQ — passionate about AI, data, and safer roads.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 max-w-4xl mx-auto">
          {members.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
              whileHover={{ y: -8, boxShadow: "var(--shadow-glow)" }}
              className="glass-card p-4 md:p-6 text-center group cursor-default"
            >
              <motion.div
                className="w-11 h-11 md:w-14 md:h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:bg-primary/20 transition-colors"
                whileHover={{ rotate: 15, scale: 1.15 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <member.icon className="text-primary" size={20} />
              </motion.div>
              <h3 className="font-semibold text-sm md:text-lg mb-0.5 md:mb-1">{member.name}</h3>
              <span className="text-[10px] md:text-xs font-medium text-primary mb-1.5 md:mb-2 block">{member.role}</span>
              <span className="text-[10px] md:text-xs text-muted-foreground">ID: {member.id}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
