import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center bg-card/20 backdrop-blur-lg border rounded-lg p-8 md:p-12 relative overflow-hidden transition-all duration-300 hover:border-brand-lime hover:shadow-glow-lime">
          <div className="absolute -top-20 -left-20 h-40 w-40 rounded-full bg-brand-lime/10 blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-brand-lime/10 blur-3xl"></div>
          
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Tenés otra pregunta?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Hablemos directo. Agendá una llamada de 15 minutos para que podamos conocer tu caso específico.
            </p>
            <a href="#contact">
              <Button size="lg" className="bg-brand-lime hover:brightness-110 text-black font-bold transition-all duration-300 hover:shadow-glow-lime text-lg px-8 py-6">
                Agendar Llamada Gratuita
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;