import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Authority from "@/components/landing/Authority";
import Services from "@/components/landing/Services";
import FeaturedCaseStudy from "@/components/landing/FeaturedCaseStudy";
import CaseStudies from "@/components/landing/CaseStudies";
import RecentWork from "@/components/landing/RecentWork";
import Process from "@/components/landing/Process";
import OrbitalProcess from "@/components/landing/OrbitalProcess";
import About from "@/components/landing/About";
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
        <Authority />
        <Services />
        <FeaturedCaseStudy />
        <CaseStudies />
        <RecentWork />
        <Process />
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