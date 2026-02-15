import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Download } from "lucide-react";

const trainingPath = [
  { country: "Belgium 🇧🇪", desc: "Foundational Medical Training" },
  { country: "France 🇫🇷", desc: "Advanced Surgical Techniques" },
  { country: "USA 🇺🇸", desc: "Harvard Medical School Fellowship" },
];

const HarvardSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-primary relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--gold)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          {/* Harvard badge */}
          <div className="inline-flex items-center gap-3 gold-border rounded-full px-6 py-3 mb-8 animate-gold-pulse">
            <span className="text-2xl">🎓</span>
            <span className="text-accent font-heading text-lg font-semibold tracking-wide">
              Harvard Medical School Alumnus
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
            Trained by the{" "}
            <span className="text-gold-gradient">World&apos;s Best</span>
          </h2>

          <p className="text-primary-foreground/60 text-lg leading-relaxed max-w-2xl mx-auto">
            &ldquo;My training across three continents has given me a unique perspective on beauty — 
            combining European precision, American innovation, and an intimate understanding of 
            Middle Eastern aesthetics.&rdquo;
          </p>
          <p className="text-accent font-heading text-base mt-3 italic">— Dr. Bourji</p>
        </motion.div>

        {/* Training path */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-4"
        >
          {trainingPath.map((item, i) => (
            <div key={item.country} className="flex items-center gap-4">
              <div className="text-center gold-border rounded-xl px-8 py-6 bg-primary-foreground/5 backdrop-blur-sm card-lift">
                <MapPin className="w-5 h-5 text-accent mx-auto mb-2" />
                <div className="text-primary-foreground font-heading text-xl font-semibold">
                  {item.country}
                </div>
                <div className="text-primary-foreground/50 text-sm mt-1">{item.desc}</div>
              </div>
              {i < trainingPath.length - 1 && (
                <div className="hidden md:block w-12 h-0.5 gold-gradient rounded-full" />
              )}
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <button className="inline-flex items-center gap-2 text-accent hover:text-gold-light transition-colors text-sm font-medium">
            <Download className="w-4 h-4" />
            Download Credentials
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HarvardSection;
