"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Zap, BarChart, Users } from "lucide-react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [spotlightOpacity, setSpotlightOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setSpotlightOpacity(1);
  };

  const handleMouseLeave = () => {
    setSpotlightOpacity(0);
  };

  return (
    <section
      id="hero"
      className="relative py-20 md:py-32 text-center overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 z-20"
        style={{
          opacity: spotlightOpacity,
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(138, 43, 226, 0.15), transparent 80%)`,
        }}
      />
      <div className="absolute inset-0 bg-deep-black z-0">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-electric-blue/20 blur-[100px]"></div>
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-neon-purple/20 blur-[100px]"></div>
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 [text-shadow:0_0_10px_rgba(0,102,255,0.5)]">
          Transforma tu Negocio con <span className="text-neon-purple">Inteligencia Artificial</span>
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground mb-8">
          En Boxxed Agency, creamos soluciones de IA a medida que impulsan la eficiencia, la innovación y el crecimiento exponencial.
        </p>
        <Button size="lg" className="bg-neon-purple hover:brightness-110 text-white font-bold transition-all duration-300 hover:shadow-glow-purple text-lg px-8 py-6">
          Agenda tu Consultoría Gratuita
        </Button>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center gap-2">
            <BarChart className="h-10 w-10 text-neon-green" />
            <span className="text-4xl font-bold">+200%</span>
            <span className="text-muted-foreground">ROI Promedio</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Zap className="h-10 w-10 text-neon-green" />
            <span className="text-4xl font-bold">90%</span>
            <span className="text-muted-foreground">Automatización de Procesos</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Users className="h-10 w-10 text-neon-green" />
            <span className="text-4xl font-bold">+50</span>
            <span className="text-muted-foreground">Clientes Satisfechos</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;