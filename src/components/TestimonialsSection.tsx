import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    procedure: "Rhinoplasty",
    location: "Dubai, UAE",
    rating: 5,
    text: "Dr. Bourji's artistry and precision gave me the natural result I always dreamed of. From the first consultation to recovery, the entire experience was world-class.",
  },
  {
    name: "Layla K.",
    procedure: "Breast Augmentation",
    location: "Beirut, Lebanon",
    rating: 5,
    text: "I traveled from Europe specifically for Dr. Bourji. His Harvard training and meticulous approach made me feel completely safe. The results exceeded my expectations.",
  },
  {
    name: "Nadia A.",
    procedure: "Facelift",
    location: "Kuwait City, Kuwait",
    rating: 5,
    text: "The attention to detail is remarkable. Dr. Bourjii took the time to understand exactly what I wanted, and the outcome is so natural — no one can tell I had anything done.",
  },
  {
    name: "Reem H.",
    procedure: "Liposuction",
    location: "Dubai, UAE",
    rating: 5,
    text: "Professional, caring, and incredibly skilled. Dr. Bourji and his team made the entire process seamless. I'm thrilled with my transformation.",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const next = () => setCurrent((p) => (p + 1) % testimonials.length);
  const prev = () => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);
  const t = testimonials[current];

  return (
    <section id="testimonials" ref={ref} className="section-padding bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--gold)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />
      <div className="container mx-auto relative z-10 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground">
            Patient <span className="text-gold-gradient">Stories</span>
          </h2>
          <div className="mx-auto mt-4 h-0.5 w-16 gold-gradient rounded-full" />
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.4 }}
            className="text-center"
          >
            <Quote className="w-10 h-10 text-accent/30 mx-auto mb-6" />
            <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed italic font-body">
              &ldquo;{t.text}&rdquo;
            </p>
            <div className="flex justify-center gap-1 mt-6">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>
            <div className="mt-4">
              <div className="text-primary-foreground font-heading font-semibold text-lg">{t.name}</div>
              <div className="text-accent text-sm">{t.procedure}</div>
              <div className="text-primary-foreground/50 text-xs mt-1">{t.location}</div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center gap-4 mt-10">
          <button onClick={prev} className="w-10 h-10 rounded-full gold-border flex items-center justify-center text-accent hover:bg-accent/10 transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-accent w-6" : "bg-primary-foreground/20"}`}
              />
            ))}
          </div>
          <button onClick={next} className="w-10 h-10 rounded-full gold-border flex items-center justify-center text-accent hover:bg-accent/10 transition-colors">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
