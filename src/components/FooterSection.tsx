import { Phone, Mail, Instagram, Facebook, Youtube } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="font-heading text-2xl font-bold mb-3">
              Dr. <span className="text-gold-gradient">Bourji</span>
            </div>
            <p className="text-primary-foreground/50 text-sm leading-relaxed">
              Harvard-trained plastic surgeon. Sculpting excellence across the Middle East.
            </p>
            <div className="flex gap-3 mt-5">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full gold-border flex items-center justify-center text-accent hover:bg-accent/10 transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-accent mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5">
              {["About", "Credentials", "Procedures", "Testimonials", "Contact"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-primary-foreground/60 hover:text-accent text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Procedures */}
          <div>
            <h4 className="font-heading font-semibold text-accent mb-4 text-sm uppercase tracking-wider">Procedures</h4>
            <ul className="space-y-2.5">
              {["Rhinoplasty", "Facelift", "Breast Augmentation", "Liposuction", "Tummy Tuck"].map((p) => (
                <li key={p}>
                  <a href="#procedures" className="text-primary-foreground/60 hover:text-accent text-sm transition-colors">
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-accent mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-primary-foreground/60 text-sm">
                <Phone className="w-4 h-4 text-accent" /> +961 70 427 277
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/60 text-sm">
                <Phone className="w-4 h-4 text-accent" /> +961 81 544 679
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/60 text-sm">
                <Mail className="w-4 h-4 text-accent" /> info@drbourji.com
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/40">
          <p>© 2025 Dr. Bourji. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-accent transition-colors">Medical Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
