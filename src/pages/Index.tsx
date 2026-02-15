import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HarvardSection from "@/components/HarvardSection";
import CredentialsSection from "@/components/CredentialsSection";
import ProceduresSection from "@/components/ProceduresSection";
import BeforeAfterGallery from "@/components/BeforeAfterGallery";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <HarvardSection />
      <AboutSection />
      <CredentialsSection />
      <ProceduresSection />
      <BeforeAfterGallery />
      <TestimonialsSection />
      <ContactSection />
      <FooterSection />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
};

export default Index;
