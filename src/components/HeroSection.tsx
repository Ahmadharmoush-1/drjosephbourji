import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Award, GraduationCap, BookOpen } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import doctorPortrait from "@/assets/doctor-portrait.jpg";

const Counter = ({ end, label, suffix = "" }: { end: number; label: string; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const counted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true;
          let start = 0;
          const duration = 2000;
          const step = (timestamp: number) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl md:text-4xl font-heading font-bold text-accent">
        {count}{suffix}
      </div>
      <div className="text-primary-foreground/70 text-sm mt-1">{label}</div>
    </div>
  );
};

const credentials = [
  { icon: GraduationCap, label: "Harvard Medical School" },
  { icon: Award, label: "Board Certified" },
  { icon: BookOpen, label: "Assoc. Professor" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 navy-gradient opacity-80" />

      <div className="container mx-auto relative z-10 px-4 md:px-8 pt-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight">
                Sculpting{" "}
                <span className="text-gold-gradient">Excellence</span>
                <br />
                Restoring{" "}
                <span className="text-gold-gradient">Confidence</span>
              </h1>

              <div className="mt-4 h-0.5 w-24 gold-gradient rounded-full" />

              <p className="mt-6 text-primary-foreground/70 text-lg md:text-xl max-w-lg font-body leading-relaxed">
                Harvard-trained plastic surgeon delivering world-class aesthetic
                and reconstructive results across Lebanon, UAE, and Kuwait.
              </p>
            </motion.div>

            {/* Credential badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-wrap gap-3 mt-8"
            >
              {credentials.map((c, i) => (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + i * 0.15 }}
                  className="flex items-center gap-2 gold-border rounded-full px-4 py-2 bg-primary-foreground/5 backdrop-blur-sm"
                >
                  <c.icon className="w-4 h-4 text-accent" />
                  <span className="text-primary-foreground/90 text-sm font-medium">{c.label}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="flex flex-wrap gap-4 mt-10"
            >
              <a
                href="#contact"
                className="gold-gradient text-primary font-semibold px-8 py-3.5 rounded-full text-base transition-transform duration-200 hover:scale-105 shadow-lg"
              >
                Book Consultation
              </a>
              <a
                href="#procedures"
                className="border border-accent/40 text-primary-foreground font-medium px-8 py-3.5 rounded-full text-base transition-all duration-200 hover:bg-accent/10 hover:border-accent"
              >
                View Procedures
              </a>
            </motion.div>

            {/* Counters */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
              className="flex gap-10 mt-14"
            >
              <Counter end={20} suffix="+" label="Years Experience" />
              <Counter end={10000} suffix="+" label="Patients Treated" />
              <Counter end={3} label="Countries" />
            </motion.div>
          </div>

          {/* Doctor portrait */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-3 rounded-2xl gold-gradient opacity-20 blur-xl" />
              <img
                src={doctorPortrait}
                alt="Dr. Bourji - Harvard-trained Plastic Surgeon"
                className="relative rounded-2xl w-[400px] object-cover shadow-2xl gold-border"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 rounded-full border-2 border-accent/40 flex items-start justify-center p-1.5"
        >
          <div className="w-1.5 h-3 rounded-full bg-accent" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
