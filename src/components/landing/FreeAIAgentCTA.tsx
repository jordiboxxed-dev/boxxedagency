import { Button } from "@/components/ui/button";
import { Bot } from "lucide-react";

const FreeAIAgentCTA = () => {
  return (
    <section id="free-ai-agent" className="py-16 md:py-24 bg-anthracite-gray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center bg-card/20 backdrop-blur-lg border rounded-lg p-8 md:p-12 relative overflow-hidden transition-all duration-300 hover:border-brand-lime hover:shadow-glow-lime">
          <div className="absolute -top-20 -left-20 h-40 w-40 rounded-full bg-brand-lime/10 blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-brand-lime/10 blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="flex justify-center mb-4">
              <div className="bg-brand-lime/20 p-3 rounded-full border border-brand-lime/30">
                <Bot className="h-8 w-8 text-brand-lime" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Crea tu Agente de IA Gratis</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Sin experiencia. Sin costo. Lanza tu propio agente de inteligencia artificial en menos de 5 minutos y descubre el poder de la automatización.
            </p>
            <Button asChild size="lg" className="bg-brand-lime hover:brightness-110 text-black font-bold transition-all duration-300 hover:shadow-glow-lime text-lg px-8 py-6">
              <a href="https://botboxxapp.boxxed.agency/" target="_blank" rel="noopener noreferrer">
                Probar Gratis Ahora
                <Bot className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeAIAgentCTA;