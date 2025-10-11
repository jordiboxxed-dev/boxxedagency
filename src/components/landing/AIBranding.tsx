"use client";

import DisplayCards from "@/components/ui/display-cards";
import { Sparkles, Zap, Brush } from "lucide-react";

const brandingCards = [
  {
    icon: <Zap className="size-4 text-neon-green" />,
    title: "Velocidad Exponencial",
    description: "Lanzamientos en días, no meses.",
    date: "AI-Powered",
    titleClassName: "text-neon-green",
    iconBgClassName: "bg-neon-green/20",
    className:
      "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration:700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <Brush className="size-4 text-brand-lime" />,
    title: "Creatividad Aumentada",
    description: "Conceptos únicos generados por IA.",
    date: "Human-AI Collaboration",
    titleClassName: "text-brand-lime",
    iconBgClassName: "bg-brand-lime/20",
    className:
      "[grid-area:stack] translate-x-12 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration:700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <Sparkles className="size-4 text-brand-lime" />,
    title: "Tecnología de Punta",
    description: "Branding que evoluciona contigo.",
    date: "Future-Proof",
    titleClassName: "text-brand-lime",
    iconBgClassName: "bg-brand-lime/20",
    className:
      "[grid-area:stack] translate-x-24 translate-y-20 hover:translate-y-10",
  },
];

const AIBranding = () => {
  return (
    <section id="ai-branding" className="py-16 md:py-24 bg-anthracite-gray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI First Branding:
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Donde la velocidad, creatividad y tecnología se encuentran.
            </p>
          </div>
          <div className="flex min-h-[300px] w-full items-center justify-center lg:min-h-[400px]">
            <div className="w-full max-w-3xl scale-90 lg:scale-100">
              <DisplayCards cards={brandingCards} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIBranding;