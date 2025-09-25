import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, TrendingUp, Users, Zap } from "lucide-react";

const FeaturedCaseStudy = () => {
  const stats = [
    {
      icon: <TrendingUp className="h-8 w-8 text-neon-purple" />,
      value: "+340%",
      label: "Crecimiento en ventas",
    },
    {
      icon: <Users className="h-8 w-8 text-neon-purple" />,
      value: "+280%",
      label: "Nuevos leads mensuales",
    },
    {
      icon: <Zap className="h-8 w-8 text-neon-purple" />,
      value: "15hs/sem",
      label: "Tiempo ahorrado",
    },
  ];

  return (
    <section id="featured-case-study" className="py-16 md:py-24 bg-anthracite-gray scroll-mt-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Columna de texto y estadísticas */}
          <div className="flex flex-col h-full">
            <div>
              <Badge variant="secondary" className="bg-neon-purple/20 text-neon-purple border border-neon-purple/30 w-fit hover:bg-neon-purple/20">
                Caso de Estudio
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
                De startup caótica a líder del mercado
              </h2>
              <p className="text-lg text-gray-300">
                Ayudamos a un e-commerce de productos naturales a superar el estancamiento. Facturaban $50K/mes, ahogados en procesos manuales y sin una estrategia de crecimiento clara. Nuestro equipo implementó un sistema de automatización integral que transformó su operación. En solo 6 meses, no solo optimizaron su tiempo, sino que dispararon su facturación a $220K/mes, estableciéndose como líderes en su nicho.
              </p>
              <div className="space-y-6 my-8">
                <div className="bg-deep-black/30 border-l-4 border-red-500 p-4 rounded-r-lg">
                  <p className="font-bold text-red-400 text-sm uppercase">Antes</p>
                  <h3 className="font-semibold text-lg">Procesos manuales y desorganizados</h3>
                  <p className="text-gray-400 text-sm">Sin seguimiento, contenido inconsistente, pérdida de leads.</p>
                </div>
                <div className="bg-deep-black/30 border-l-4 border-neon-green p-4 rounded-r-lg">
                  <p className="font-bold text-neon-green text-sm uppercase">Después</p>
                  <h3 className="font-semibold text-lg">Sistema automatizado completo</h3>
                  <p className="text-gray-400 text-sm">CRM integrado, contenido optimizado, nurturing automático.</p>
                </div>
              </div>
            </div>
            
            <div className="flex-grow flex flex-col justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {stats.map((stat, index) => (
                  <Card key={index} className="bg-black/20 backdrop-blur-lg border border-white/10 p-4 text-center transition-all duration-300 hover:border-neon-purple hover:scale-105 hover:shadow-glow-purple">
                    <CardContent className="p-0 flex flex-col items-center justify-center h-full">
                      {stat.icon}
                      <p className="text-2xl font-bold text-white mt-2">{stat.value}</p>
                      <p className="text-xs text-gray-400 mt-1">{stat.label}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="mt-auto pt-8">
              <Button size="lg" className="bg-neon-purple hover:brightness-110 text-white font-bold transition-all duration-300 hover:shadow-glow-purple w-fit">
                Ver caso completo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Columna de imagen */}
          <div className="relative h-full min-h-[400px]">
            <img 
              src="/case-study-dashboard.png" 
              alt="Dashboard de resultados" 
              className="rounded-lg shadow-2xl shadow-electric-blue/10 w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = '/placeholder.svg';
              }}
            />
            <div className="absolute bottom-4 left-4">
              <Card className="bg-black/20 backdrop-blur-lg border border-white/10 p-4 rounded-lg">
                <CardContent className="p-0 text-center">
                  <p className="text-2xl font-bold text-white">6 meses</p>
                  <p className="text-sm text-gray-300">de implementación</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCaseStudy;