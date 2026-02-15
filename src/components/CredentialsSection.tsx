import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Stethoscope, Globe, Award, BookOpen, Users } from "lucide-react";

const columns = [
  {
    title: "Education",
    icon: GraduationCap,
    items: [
      "Harvard Medical School Fellowship",
      "Board Certified Plastic Surgeon",
      "Associate Professor of Surgery",
      "International training in Belgium, France & USA",
    ],
  },
  {
    title: "Specializations",
    icon: Stethoscope,
    items: [
      "Rhinoplasty & Facial Aesthetics",
      "Breast Augmentation & Reconstruction",
      "Body Contouring & Liposuction",
      "Reconstructive Surgery",
    ],
  },
  {
    title: "Global Presence",
    icon: Globe,
    items: [
      "Lebanon 🇱🇧 — Beirut",
      "UAE 🇦🇪 — Dubai",
      "Kuwait 🇰🇼 — Kuwait City",
      "Multilingual: English, Arabic, French",
    ],
  },
];

const CredentialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="credentials" ref={ref} className="section-padding bg-cream">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary">
            Credentials & <span className="text-gold-gradient">Expertise</span>
          </h2>
          <div className="mx-auto mt-4 h-0.5 w-16 gold-gradient rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {columns.map((col, i) => (
            <motion.div
              key={col.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="bg-card rounded-2xl p-8 gold-border card-lift"
            >
              <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center mb-5">
                <col.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold text-primary mb-4">{col.title}</h3>
              <ul className="space-y-3">
                {col.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-muted-foreground text-sm">
                    <span className="text-accent mt-0.5">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CredentialsSection;
