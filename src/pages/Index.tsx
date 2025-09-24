import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Authority from "@/components/landing/Authority";
import Services from "@/components/landing/Services";
import CaseStudies from "@/components/landing/CaseStudies";
import RecentWork from "@/components/landing/RecentWork";
import Process from "@/components/landing/Process";
import About from "@/components/landing/About";
import CTASection from "@/components/landing/CTASection";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="bg-deep-black text-white overflow-x-hidden antialiased">
      <Header />
      <main>
        <Hero />
        <Authority />
        <Services />
        <CaseStudies />
        <RecentWork />
        <Process />
        <About />
        <CTASection />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;