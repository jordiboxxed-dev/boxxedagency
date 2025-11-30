import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import AIBranding from "@/components/landing/AIBranding";
import FeaturedCaseStudy from "@/components/landing/FeaturedCaseStudy";
import OrbitalProcess from "@/components/landing/OrbitalProcess";
import About from "@/components/landing/About";
import CTASection from "@/components/landing/CTASection";
import FAQ from "@/components/landing/FAQ";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="bg-background text-foreground overflow-x-hidden antialiased">
      <Header />
      <main>
        <Hero />
        <Services />
        <AIBranding />
        <FeaturedCaseStudy />
        <OrbitalProcess />
        <About />
        <CTASection />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;