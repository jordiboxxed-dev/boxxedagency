import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit, Bot, Zap, Briefcase, Sparkles } from "lucide-react";

const services = [
  {
    icon: <Sparkles className="h-10 w-10 text-neon-purple" />,
    title: "Infraestructuras de IA",
    description: "Diseñamos y desplegamos arquitecturas de IA robustas y escalables, personalizadas para tus necesidades.",
  },
  {
    icon: <BrainCircuit className="h-10 w-10 text-neon-purple" />,
    title: "Automatizaciones Inteligentes",
    description: "Optimizamos tus flujos de trabajo con automatizaciones que ahorran tiempo y reducen errores.",
  },
  {
    icon: <Bot className="h-10 w-10 text-neon-purple" />,
    title: "Agentes y Chatbots de IA",
    description: "Creamos agentes conversacionales avanzados que mejoran la experiencia del cliente y la eficiencia interna.",
  },
  {
    icon: <Briefcase className="h-10 w-10 text-neon-purple" />,
    title: "Consultoría Estratégica",
    description: "Te guiamos en la adopción de la IA, desde la estrategia hasta la implementación y la medición de resultados.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 scroll-mt-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestras Soluciones de IA</h2>
          <p className="text-lg text-muted-foreground">
            Potenciamos tu empresa con tecnología de vanguardia, diseñada para generar un impacto real.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-card backdrop-blur-lg border rounded-lg p-6 text-center transition-all duration-300 hover:border-neon-purple hover:scale-105 hover:shadow-glow-purple"
            >
              <CardHeader className="p-0 mb-4 flex justify-center items-center">
                {service.icon}
              </CardHeader>
              <CardContent className="p-0">
                <CardTitle className="text-xl font-semibold mb-2 text-card-foreground">{service.title}</CardTitle>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;