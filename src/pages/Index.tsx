import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import FeaturedCaseStudy from "@/components/landing/FeaturedCaseStudy";
import Portfolio from "@/components/landing/Portfolio";
import LatestWork from "@/components/landing/LatestWork";
import OrbitalProcess from "@/components/landing/OrbitalProcess";
import About from "@/components/landing/About";
import Pricing from "@/components/landing/Pricing";
import CTASection from "@/components/landing/CTASection";
import FAQ from "@/components/landing/FAQ";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="bg-deep-black text-white overflow-x-hidden antialiased">
      <Header />
      <main>
        <Hero />
        <Services />
        <FeaturedCaseStudy />
        <Portfolio />
        <LatestWork />
        <OrbitalProcess />
        <About />
        <Pricing />
        <CTASection />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;