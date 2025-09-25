import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";

const portfolioItems = [
  {
    title: "BotBoxx - Agente IA",
    link: "https://botboxx-demo-vip.vercel.app/",
    image: "/project-botboxx-new.png",
  },
  {
    title: "Cuánto Valgo",
    link: "#",
    image: "/project-cuanto-valgo.png",
  },
  {
    title: "Brisk AI",
    link: "#",
    image: "/project-brisk-ai.png",
  },
  {
    title: "Próximamente",
    link: "#",
    image: null,
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Algunos de nuestros trabajos recientes</h2>
          <p className="text-lg text-gray-400">
            Explora cómo hemos ayudado a otras empresas a innovar con IA.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {portfolioItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block aspect-square rounded-lg overflow-hidden relative border border-white/10 bg-black/20 transition-all duration-300 hover:border-neon-purple hover:scale-105 hover:shadow-glow-purple"
            >
              {item.image ? (
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover" 
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/placeholder.svg';
                  }}
                />
              ) : (
                <div className="w-full h-full flex flex-col justify-center items-center text-center p-4">
                  <TrendingUp className="h-10 w-10 text-neon-purple mb-4" />
                  <h3 className="font-semibold text-white">{item.title}</h3>
                </div>
              )}
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-semibold text-white text-center">{item.title}</h3>
              </div>
            </a>
          ))}
        </div>
        <div className="text-center mt-16">
          <Button className="bg-neon-purple hover:brightness-110 text-white font-bold transition-all duration-300 hover:shadow-glow-purple text-lg px-8 py-6">
            Ver portafolio completo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;