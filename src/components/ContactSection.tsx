import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Mail, MessageCircle, Clock } from "lucide-react";

const locations = [
  {
    city: "Beirut",
    country: "Lebanon 🇱🇧",
    phone: "+961 70 427 277",
    hours: "Mon–Fri: 9AM–6PM",
  },
  {
    city: "Dubai",
    country: "UAE 🇦🇪",
    phone: "+961 81 544 679",
    hours: "By appointment",
  },
  {
    city: "Kuwait City",
    country: "Kuwait 🇰🇼",
    phone: "+961 81 544 679",
    hours: "By appointment",
  },
];

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" ref={ref} className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary">
            Book Your <span className="text-gold-gradient">Consultation</span>
          </h2>
          <div className="mx-auto mt-4 h-0.5 w-16 gold-gradient rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Begin your transformation journey. Schedule a private consultation with Dr. Bourji.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Locations */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {locations.map((loc, i) => (
              <div key={loc.city} className="bg-card rounded-2xl p-6 gold-border card-lift">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg gold-gradient flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-primary text-lg">
                      {loc.city} — {loc.country}
                    </h3>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mt-2">
                      <Phone className="w-3.5 h-3.5 text-accent" /> {loc.phone}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mt-1">
                      <Clock className="w-3.5 h-3.5 text-accent" /> {loc.hours}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/96170427277"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[hsl(142,70%,45%)] text-[hsl(0,0%,100%)] font-semibold py-4 rounded-2xl transition-transform hover:scale-[1.02]"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form className="bg-card rounded-2xl p-8 gold-border space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Name</label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="w-full border border-border rounded-lg px-4 py-3 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Phone</label>
                  <input
                    type="tel"
                    placeholder="+961 XX XXX XXX"
                    className="w-full border border-border rounded-lg px-4 py-3 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full border border-border rounded-lg px-4 py-3 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Procedure of Interest</label>
                <select className="w-full border border-border rounded-lg px-4 py-3 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition">
                  <option value="">Select a procedure</option>
                  <option>Rhinoplasty</option>
                  <option>Facelift</option>
                  <option>Breast Augmentation</option>
                  <option>Breast Lift</option>
                  <option>Liposuction</option>
                  <option>Tummy Tuck</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Preferred Location</label>
                <select className="w-full border border-border rounded-lg px-4 py-3 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition">
                  <option>Beirut, Lebanon</option>
                  <option>Dubai, UAE</option>
                  <option>Kuwait City, Kuwait</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your goals..."
                  className="w-full border border-border rounded-lg px-4 py-3 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full gold-gradient text-primary font-semibold py-3.5 rounded-lg transition-transform hover:scale-[1.02] shadow-md"
              >
                Request Consultation
              </button>
              <p className="text-xs text-muted-foreground text-center">
                Your information is kept strictly confidential.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
