"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Zap, X } from "lucide-react";

const FeaturedCaseStudy = () => {
  const [isImageExpanded, setIsImageExpanded] = useState(false);

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
    <>
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
                  De caos operativo a claridad y resultados
                </h2>
                <p className="text-lg text-muted-foreground">
                  ClimaSoluciones, e-commerce y negocio físico de piscinas, climatización y calefacción, estaba frenado por procesos manuales, sin CRM ni seguimiento, perdiendo leads valiosos todos los días. En solo 2 semanas, con la implementación de automatizaciones, CRM y un sistema de calificación de leads, pasaron de apagar incendios a tener una operación escalable y eficiente, consolidándose como referentes en su industria.
                </p>
                <div className="space-y-6 my-8">
                  <div className="bg-card border-l-4 border-red-500 p-4 rounded-r-lg">
                    <p className="font-bold text-red-400 text-sm uppercase">Antes</p>
                    <h3 className="font-semibold text-lg">Procesos manuales y desordenados</h3>
                    <p className="text-muted-foreground text-sm">Sin CRM ni seguimiento de prospectos. Leads perdidos y respuestas lentas.</p>
                  </div>
                  <div className="bg-card border-l-4 border-neon-green p-4 rounded-r-lg">
                    <p className="font-bold text-neon-green text-sm uppercase">Después</p>
                    <h3 className="font-semibold text-lg">CRM integrado y automatizaciones</h3>
                    <p className="text-muted-foreground text-sm">Calificación y seguimiento de leads en tiempo real. Equipo enfocado en vender, no en tareas repetitivas. Crecimiento sostenido y liderazgo en el sector.</p>
                  </div>
                </div>
              </div>
              
              <div className="flex-grow flex flex-col justify-center mt-8">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {stats.map((stat, index) => (
                    <Card key={index} className="bg-card backdrop-blur-lg border p-4 text-center transition-all duration-300 hover:border-neon-purple hover:scale-105 hover:shadow-glow-purple">
                      <CardContent className="p-0 flex flex-col items-center justify-center h-full">
                        {stat.icon}
                        <p className="text-2xl font-bold text-foreground mt-2">{stat.value}</p>
                        <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Columna de imagen */}
            <div className="relative h-full min-h-[400px] bg-card/50 rounded-lg flex items-center justify-center p-4">
              <img 
                src="/project-botboxx.png" 
                alt="Dashboard de resultados" 
                className="rounded-lg shadow-2xl shadow-electric-blue/10 max-w-full max-h-full object-contain cursor-pointer"
                onClick={() => setIsImageExpanded(true)}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/placeholder.svg';
                }}
              />
              <div className="absolute bottom-4 left-4">
                <Card className="bg-card/20 backdrop-blur-lg border p-4 rounded-lg">
                  <CardContent className="p-0 text-center">
                    <p className="text-2xl font-bold">2 semanas</p>
                    <p className="text-sm text-muted-foreground">de implementación</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {isImageExpanded && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[100] p-4 cursor-zoom-out"
          onClick={() => setIsImageExpanded(false)}
        >
          <button 
            className="absolute top-4 right-4 text-white z-[101] hover:text-neon-purple transition-colors"
            onClick={() => setIsImageExpanded(false)}
          >
            <X className="h-10 w-10" />
          </button>
          <img 
            src="/project-botboxx.png" 
            alt="Dashboard de resultados (ampliado)" 
            className="max-w-[95vw] max-h-[95vh] object-contain cursor-default"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default FeaturedCaseStudy;