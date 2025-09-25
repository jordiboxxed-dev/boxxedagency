import { Card } from "@/components/ui/card";

const latestWorkItems = [
  {
    title: "BotBoxx - Agente IA",
    image: "/BOT BOXXED - 1.png",
  },
  {
    title: "Cuánto Valgo",
    image: "/project-cuanto-valgo.png",
  },
  {
    title: "Brisk AI",
    image: "/project-brisk-ai.png",
  },
  {
    title: "Próximo Proyecto",
    image: "/placeholder.svg",
  },
];

const LatestWork = () => {
  return (
    <section id="latest-work" className="py-16 md:py-24 bg-anthracite-gray scroll-mt-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Últimos Trabajos</h2>
          <p className="text-lg text-gray-400">
            Aquí puedes ver una muestra de nuestros proyectos más recientes.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {latestWorkItems.map((item, index) => (
            <Card
              key={index}
              className="group block aspect-video rounded-lg overflow-hidden relative border border-white/10 bg-black/20 transition-all duration-300 hover:border-neon-purple hover:scale-105 hover:shadow-glow-purple"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/placeholder.svg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestWork;