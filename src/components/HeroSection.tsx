import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { useRef } from "react";

const floatingDots = [
  { size: 6, x: "15%", y: "20%", opacity: 0.4, delay: 0 },
  { size: 4, x: "80%", y: "15%", opacity: 0.3, delay: 1 },
  { size: 8, x: "70%", y: "35%", opacity: 0.2, delay: 2 },
  { size: 5, x: "25%", y: "60%", opacity: 0.35, delay: 0.5 },
  { size: 3, x: "50%", y: "25%", opacity: 0.25, delay: 3 },
  { size: 7, x: "85%", y: "55%", opacity: 0.3, delay: 1.5 },
  { size: 4, x: "10%", y: "40%", opacity: 0.2, delay: 2.5 },
  { size: 5, x: "60%", y: "70%", opacity: 0.3, delay: 0.8 },
  { size: 3, x: "40%", y: "45%", opacity: 0.15, delay: 4 },
  { size: 6, x: "90%", y: "75%", opacity: 0.25, delay: 1.2 },
  { size: 4, x: "35%", y: "80%", opacity: 0.2, delay: 3.5 },
  { size: 5, x: "55%", y: "10%", opacity: 0.3, delay: 2.2 },
];

const FloatingDots = () => (
  <>
    {floatingDots.map((dot, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full bg-primary"
        style={{
          width: dot.size,
          height: dot.size,
          left: dot.x,
          top: dot.y,
          opacity: dot.opacity,
        }}
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          opacity: [dot.opacity, dot.opacity * 1.8, dot.opacity],
        }}
        transition={{
          duration: 6 + i * 0.5,
          repeat: Infinity,
          delay: dot.delay,
          ease: "easeInOut",
        }}
      />
    ))}
  </>
);

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const textY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Floating dots background */}
      <FloatingDots />
      <div className="absolute inset-0 glow-effect" />

      {/* Subtle rotating rings */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-primary/[0.04]"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-primary/[0.04]"
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
      />

      <motion.div style={{ y: textY, opacity }} className="container relative mx-auto px-4 md:px-8 pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary mb-6"
              animate={{ boxShadow: ["0 0 0 0 hsl(var(--primary) / 0)", "0 0 0 8px hsl(var(--primary) / 0.05)", "0 0 0 0 hsl(var(--primary) / 0)"] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <motion.span
                className="w-2 h-2 rounded-full bg-primary mr-2"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              AI-Powered Driving Intelligence Platform
            </motion.span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-4 md:mb-6"
          >
            Smarter driving.{" "}
            <motion.span
              className="gradient-text inline-block"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Safer roads.
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed"
          >
            DriveIQ uses machine learning and LLMs to analyze driving
            behavior, detect abnormal patterns, and generate actionable
            AI feedback — helping driving institutes train better drivers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 w-full"
          >
            <motion.a
              href="#cta"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px hsl(var(--primary) / 0.4)" }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3 md:py-3.5 text-sm font-semibold text-primary-foreground transition-all shadow-lg"
              style={{ boxShadow: "var(--shadow-glow)" }}
            >
              Download App
              <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                <ArrowRight size={16} />
              </motion.span>
            </motion.a>
            <motion.a
              href="#pipeline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background/50 backdrop-blur-sm px-8 py-3 md:py-3.5 text-sm font-semibold text-foreground hover:bg-secondary transition-colors"
            >
              <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }}>
                <Play size={16} />
              </motion.span>
              See ML Pipeline
            </motion.a>
          </motion.div>
        </div>

      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0], opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1.5">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-primary"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
