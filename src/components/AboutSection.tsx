import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import doctorPortrait from "@/assets/doctor-portrait.jpg";

const timeline = [
  { year: "2003", event: "Medical Degree — Belgium" },
  { year: "2008", event: "Surgical Residency — France" },
  { year: "2012", event: "Harvard Fellowship — USA" },
  { year: "2014", event: "Associate Professor of Surgery" },
  { year: "2016", event: "Launched Multi-Country Practice" },
  { year: "2020", event: "10,000+ Successful Procedures" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="section-padding bg-cream">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl gold-gradient opacity-10 blur-2xl" />
              <img
                src={doctorPortrait}
                alt="Dr. Bourji"
                className="relative rounded-2xl w-full max-w-md mx-auto object-cover shadow-xl gold-border"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-6">
              About <span className="text-gold-gradient">Dr. Bourji</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              With over two decades of experience spanning three continents, Dr. Bourji combines the 
              precision of European surgical tradition with the innovation of American medical science. 
              A Harvard Medical School alumnus and associate professor, he is dedicated to delivering 
              results that enhance natural beauty.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              His philosophy centers on understanding each patient&apos;s unique anatomy and aesthetic goals, 
              creating personalized treatment plans that prioritize safety, subtlety, and lasting satisfaction.
            </p>

            {/* Timeline */}
            <div className="relative pl-8 border-l-2 border-accent/30 space-y-6">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="relative"
                >
                  <div className="absolute -left-[calc(1rem+5px)] top-1.5 w-3 h-3 rounded-full gold-gradient" />
                  <div className="text-accent font-heading font-bold text-sm">{item.year}</div>
                  <div className="text-foreground text-sm">{item.event}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
