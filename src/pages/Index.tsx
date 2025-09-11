import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Authority from "@/components/landing/Authority";
import Services from "@/components/landing/Services";
import CaseStudies from "@/components/landing/CaseStudies";
import Process from "@/components/landing/Process";
import About from "@/components/landing/About";
import CTASection from "@/components/landing/CTASection";
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
        <Process />
        <About />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;