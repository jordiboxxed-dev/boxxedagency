import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";

const caseStudies = [
  {
    title: "Optimización de Logística para E-commerce",
    industry: "E-commerce",
    results: "+40% Eficiencia, -25% Costos",
    image: "/placeholder.svg",
  },
  {
    title: "Detección de Fraude en Tiempo Real para Fintech",
    industry: "Fintech",
    results: "99.8% Precisión, +$5M Ahorro",
    image: "/placeholder.svg",
  },
  {
    title: "Diagnóstico Asistido por IA en Healthcare",
    industry: "Healthcare",
    results: "-30% Tiempo de Diagnóstico",
    image: "/placeholder.svg",
  },
];

const CaseStudies = () => {
  return (
    <section id="cases" className="py-16 md:py-24 bg-anthracite-gray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Casos de Éxito</h2>
          <p className="text-lg text-gray-400">
            Resultados tangibles que hemos generado para nuestros clientes en diversas industrias.
          </p>
        </div>
        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {caseStudies.map((study, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="bg-deep-black/30 border-gray-800 overflow-hidden">
                    <img src={study.image} alt={study.title} className="w-full h-48 object-cover" />
                    <CardContent className="p-6">
                      <Badge variant="secondary" className="mb-2 bg-neon-purple text-white">{study.industry}</Badge>
                      <h3 className="text-lg font-semibold mb-2">{study.title}</h3>
                      <p className="text-neon-green font-bold">{study.results}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-white bg-deep-black/50 border-gray-700 hover:bg-neon-purple" />
          <CarouselNext className="text-white bg-deep-black/50 border-gray-700 hover:bg-neon-purple" />
        </Carousel>
      </div>
    </section>
  );
};

export default CaseStudies;