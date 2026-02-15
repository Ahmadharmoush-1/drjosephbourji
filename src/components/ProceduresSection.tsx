import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Clock, CalendarCheck } from "lucide-react";

const categories = ["All", "Face", "Breast", "Body"] as const;

const procedures = [
  { name: "Rhinoplasty", category: "Face", desc: "Refine nasal shape for harmonious facial balance.", duration: "2-3 hrs", recovery: "1-2 weeks" },
  { name: "Facelift", category: "Face", desc: "Restore youthful contours with natural-looking results.", duration: "3-5 hrs", recovery: "2-3 weeks" },
  { name: "Blepharoplasty", category: "Face", desc: "Rejuvenate the eyes by removing excess skin and fat.", duration: "1-2 hrs", recovery: "1 week" },
  { name: "Otoplasty", category: "Face", desc: "Reshape and reposition ears for improved symmetry.", duration: "1-2 hrs", recovery: "1 week" },
  { name: "Breast Augmentation", category: "Breast", desc: "Enhance volume and shape with customized implants.", duration: "1-2 hrs", recovery: "1-2 weeks" },
  { name: "Breast Lift", category: "Breast", desc: "Restore firmness and position for a youthful silhouette.", duration: "2-3 hrs", recovery: "2 weeks" },
  { name: "Breast Reduction", category: "Breast", desc: "Alleviate discomfort and achieve proportional balance.", duration: "2-4 hrs", recovery: "2-3 weeks" },
  { name: "Liposuction", category: "Body", desc: "Sculpt targeted areas by removing stubborn fat deposits.", duration: "1-3 hrs", recovery: "1-2 weeks" },
  { name: "Tummy Tuck", category: "Body", desc: "Flatten and tighten the abdomen for a toned profile.", duration: "2-4 hrs", recovery: "3-4 weeks" },
  { name: "Brazilian Butt Lift", category: "Body", desc: "Enhance curves using your own natural fat transfer.", duration: "2-3 hrs", recovery: "2-3 weeks" },
];

const ProceduresSection = () => {
  const [filter, setFilter] = useState<typeof categories[number]>("All");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const filtered = filter === "All" ? procedures : procedures.filter((p) => p.category === filter);

  return (
    <section id="procedures" ref={ref} className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary">
            Our <span className="text-gold-gradient">Procedures</span>
          </h2>
          <div className="mx-auto mt-4 h-0.5 w-16 gold-gradient rounded-full" />
        </motion.div>

        {/* Filters */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                filter === cat
                  ? "gold-gradient text-primary shadow-md"
                  : "bg-secondary text-muted-foreground hover:bg-accent/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((proc, i) => (
            <motion.div
              key={proc.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 * i }}
              className="bg-card rounded-2xl p-6 gold-border card-lift group"
            >
              <div className="text-xs font-medium text-accent uppercase tracking-wider mb-3">
                {proc.category}
              </div>
              <h3 className="text-lg font-heading font-bold text-primary mb-2 group-hover:text-navy-light transition-colors">
                {proc.name}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{proc.desc}</p>
              <div className="flex gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-accent" /> {proc.duration}
                </span>
                <span className="flex items-center gap-1">
                  <CalendarCheck className="w-3.5 h-3.5 text-accent" /> {proc.recovery}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProceduresSection;
