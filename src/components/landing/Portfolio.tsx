import { Button } from "@/components/ui/button";

const portfolioItems = [
  {
    title: "BotBoxx - Agente IA",
    link: "https://botboxxlanding.boxxed.agency/",
    image: "/BOT BOXXED - 1.PNG",
  },
  {
    title: "Cuánto Valgo",
    link: "https://cuantovalgo.vercel.app/",
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
          <p className="text-lg text-muted-foreground">
            Apps, Agentes, Automatización de contenido & más..
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {portfolioItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block aspect-square rounded-lg overflow-hidden relative border bg-card transition-all duration-300 hover:border-neon-purple hover:scale-105 hover:shadow-glow-purple"
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
                <div className="w-full h-full flex flex-col justify-center items-center text-center p-4 relative overflow-hidden">
                  <span className="absolute text-[12rem] font-bold text-muted-foreground/10 -translate-y-4 blur-sm select-none" aria-hidden="true">?</span>
                  <div className="relative z-10">
                    <h3 className="font-semibold text-xl">{item.title}</h3>
                    <p className="font-bold text-neon-purple mt-1">¿tu proyecto?</p>
                  </div>
                </div>
              )}
            </a>
          ))}
        </div>
        <div className="text-center mt-16">
          <Button className="bg-neon-purple hover:brightness-110 text-white hover:text-black font-bold transition-all duration-300 hover:shadow-glow-purple text-lg px-8 py-6">
            Ver portafolio completo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;