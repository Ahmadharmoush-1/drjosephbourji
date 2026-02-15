import { useState, useRef, useCallback } from "react";
import { motion, useInView } from "framer-motion";

interface Case {
  id: number;
  procedure: string;
  category: string;
  description: string;
  duration: string;
  recovery: string;
}

const cases: Case[] = [
  { id: 1, procedure: "Rhinoplasty", category: "Face", description: "Refined nasal bridge and tip for harmonious facial proportions.", duration: "2.5 hrs", recovery: "10 days" },
  { id: 2, procedure: "Facelift", category: "Face", description: "Restored youthful contours while maintaining natural expression.", duration: "4 hrs", recovery: "2 weeks" },
  { id: 3, procedure: "Breast Augmentation", category: "Breast", description: "Natural-looking enhancement with perfectly proportioned implants.", duration: "1.5 hrs", recovery: "1 week" },
  { id: 4, procedure: "Liposuction", category: "Body", description: "Sculpted waistline with precise fat removal technique.", duration: "2 hrs", recovery: "10 days" },
  { id: 5, procedure: "Blepharoplasty", category: "Face", description: "Rejuvenated eye area by removing excess skin and fat pads.", duration: "1.5 hrs", recovery: "7 days" },
  { id: 6, procedure: "Tummy Tuck", category: "Body", description: "Flattened and tightened abdomen for a toned, confident profile.", duration: "3 hrs", recovery: "3 weeks" },
];

const categories = ["All", "Face", "Breast", "Body"] as const;

// Gradient placeholders since real patient photos should be added by the doctor
const beforeGradients = [
  "linear-gradient(135deg, hsl(220 15% 70%), hsl(220 10% 55%))",
  "linear-gradient(135deg, hsl(200 15% 68%), hsl(200 10% 52%))",
  "linear-gradient(135deg, hsl(210 12% 72%), hsl(210 8% 56%))",
  "linear-gradient(135deg, hsl(215 14% 66%), hsl(215 10% 50%))",
  "linear-gradient(135deg, hsl(205 13% 71%), hsl(205 9% 54%))",
  "linear-gradient(135deg, hsl(225 15% 69%), hsl(225 11% 53%))",
];

const afterGradients = [
  "linear-gradient(135deg, hsl(43 50% 75%), hsl(43 60% 60%))",
  "linear-gradient(135deg, hsl(40 48% 73%), hsl(40 58% 58%))",
  "linear-gradient(135deg, hsl(45 52% 76%), hsl(45 62% 61%))",
  "linear-gradient(135deg, hsl(42 46% 72%), hsl(42 56% 57%))",
  "linear-gradient(135deg, hsl(44 50% 74%), hsl(44 60% 59%))",
  "linear-gradient(135deg, hsl(41 49% 77%), hsl(41 59% 62%))",
];

const ComparisonSlider = ({ caseData, index }: { caseData: Case; index: number }) => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percent);
  }, []);

  const handleMouseDown = useCallback(() => { isDragging.current = true; }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (isDragging.current) updatePosition(e.clientX);
  }, [updatePosition]);

  const handleMouseUp = useCallback(() => { isDragging.current = false; }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    updatePosition(e.touches[0].clientX);
  }, [updatePosition]);

  return (
    <div className="bg-card rounded-2xl overflow-hidden gold-border card-lift">
      {/* Slider area */}
      <div
        ref={containerRef}
        className="relative aspect-[4/3] cursor-col-resize select-none overflow-hidden"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchMove={handleTouchMove}
      >
        {/* After (full background) */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ background: afterGradients[index % afterGradients.length] }}
        >
          <span className="text-primary/30 font-heading text-5xl font-bold select-none">After</span>
        </div>

        {/* Before (clipped) */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            background: beforeGradients[index % beforeGradients.length],
            clipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
          }}
        >
          <span className="text-primary-foreground/30 font-heading text-5xl font-bold select-none">Before</span>
        </div>

        {/* Divider line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-primary-foreground/90 z-10"
          style={{ left: `${sliderPos}%` }}
        >
          {/* Handle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full gold-gradient shadow-lg flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-primary">
              <path d="M5 3L2 8L5 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M11 3L14 8L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-3 left-3 bg-primary/70 backdrop-blur-sm text-primary-foreground text-xs font-medium px-3 py-1 rounded-full z-20">
          Before
        </div>
        <div className="absolute top-3 right-3 bg-accent/80 backdrop-blur-sm text-primary text-xs font-medium px-3 py-1 rounded-full z-20">
          After
        </div>
      </div>

      {/* Case details */}
      <div className="p-5">
        <div className="text-xs font-medium text-accent uppercase tracking-wider mb-1">{caseData.category}</div>
        <h3 className="font-heading font-bold text-primary text-lg">{caseData.procedure}</h3>
        <p className="text-muted-foreground text-sm mt-1 leading-relaxed">{caseData.description}</p>
        <div className="flex gap-4 mt-3 text-xs text-muted-foreground">
          <span>⏱ {caseData.duration}</span>
          <span>🔄 {caseData.recovery}</span>
        </div>
      </div>
    </div>
  );
};

const BeforeAfterGallery = () => {
  const [filter, setFilter] = useState<typeof categories[number]>("All");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const filtered = filter === "All" ? cases : cases.filter((c) => c.category === filter);

  return (
    <section id="gallery" ref={ref} className="section-padding bg-cream">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary">
            Transformation <span className="text-gold-gradient">Gallery</span>
          </h2>
          <div className="mx-auto mt-4 h-0.5 w-16 gold-gradient rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto text-sm">
            Drag the slider to compare before and after results. All cases shown with patient consent.
          </p>
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
            >
              <ComparisonSlider caseData={c} index={c.id - 1} />
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center text-xs text-muted-foreground mt-10"
        >
          * Results may vary. Individual outcomes depend on multiple factors. All images shown with explicit patient consent.
        </motion.p>
      </div>
    </section>
  );
};

export default BeforeAfterGallery;
