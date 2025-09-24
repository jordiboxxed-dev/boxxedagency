import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";

const projects = [
  {
    title: "Proyecto 1",
  },
  {
    title: "Proyecto 2",
  },
  {
    title: "Proyecto 3",
  },
  {
    title: "Proyecto 4",
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
            <Card
              key={index}
              className="bg-gradient-to-br from-electric-blue/10 to-neon-purple/10 backdrop-blur-sm border border-white/10 rounded-lg p-8 flex flex-col justify-center items-center aspect-square transition-all duration-300 hover:border-electric-blue hover:scale-105 hover:shadow-glow-blue"
            >
              <CardContent className="p-0 flex flex-col items-center gap-6">
                <div className="bg-deep-black/50 p-4 rounded-lg">
                  <TrendingUp className="h-10 w-10 text-electric-blue" />
                </div>
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-16">
          <Button variant="outline" size="lg" className="border-neon-purple text-neon-purple hover:bg-neon-purple/10 hover:text-neon-purple font-bold text-lg px-8 py-6">
            Ver portafolio completo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RecentWork;