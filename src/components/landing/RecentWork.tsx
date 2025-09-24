import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";

const projects = [
  {
    title: "BotBoxx - Agente IA",
    link: "https://botboxx-demo-vip.vercel.app/",
    image: "/Screenshot 2025-09-03 at 23.44.47.png",
  },
  {
    title: "Proyecto 2",
    link: "#",
    image: null,
  },
  {
    title: "Proyecto 3",
    link: "#",
    image: null,
  },
  {
    title: "Proyecto 4",
    link: "#",
    image: null,
  },
];

const RecentWork = () => {
  return (
    <section id="work" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Algunos de nuestros trabajos recientes</h2>
          <p className="text-lg text-gray-400">
            Explora cómo hemos ayudado a otras empresas a innovar con IA.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <Card
                className="relative bg-gradient-to-br from-electric-blue/10 to-neon-purple/10 backdrop-blur-sm border border-white/10 rounded-lg flex flex-col justify-center items-center aspect-square transition-all duration-300 group-hover:border-electric-blue group-hover:scale-105 group-hover:shadow-glow-blue overflow-hidden"
              >
                {project.image ? (
                  <>
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                      <h3 className="text-xl font-semibold text-white text-center">{project.title}</h3>
                    </div>
                  </>
                ) : (
                  <CardContent className="p-0 flex flex-col items-center gap-6">
                    <div className="bg-deep-black/50 p-4 rounded-lg">
                      <TrendingUp className="h-10 w-10 text-electric-blue" />
                    </div>
                    <h3 className="text-xl font-semibold text-white text-center">{project.title}</h3>
                  </CardContent>
                )}
              </Card>
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

export default RecentWork;