import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Check, Star, Zap } from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "Ideal para marcas personales",
    price: 297,
    priceDescription: "Perfecto para emprendedores que quieren automatizar lo básico",
    features: [
      "1 automatización simple",
      "5 copys mensuales optimizados",
      "Branding básico + logo",
      "Landing page profesional",
      "Soporte por email",
      "Dashboard de métricas básicas",
    ],
    buttonText: "Empezar ahora",
    isMostPopular: false,
  },
  {
    name: "Pro",
    description: "Para negocios en crecimiento",
    price: 697,
    priceDescription: "La opción más elegida para escalar rápidamente",
    features: [
      "3 automatizaciones avanzadas",
      "Contenido mensual ilimitado",
      "Branding completo + guidelines",
      "CRM + embudo de ventas",
      "Dashboard central unificado",
      "Soporte premium prioritario",
      "Integraciones con tus herramientas",
      "Optimización continua",
    ],
    buttonText: "Probar 7 días gratis",
    isMostPopular: true,
  },
  {
    name: "Escala",
    description: "Todo incluido",
    price: 1497,
    priceDescription: "Para empresas que quieren dominar su mercado",
    features: [
      "Automatizaciones ilimitadas",
      "Contenido y diseño ilimitado",
      "Estrategia personalizada mensual",
      "Integraciones avanzadas",
      "Equipo dedicado",
      "Llamadas estratégicas semanales",
      "A/B testing continuo",
      "Implementación white-label",
      "Acceso anticipado a nuevas features",
    ],
    buttonText: "Reservar llamada",
    isMostPopular: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-anthracite-gray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Planes que se adaptan a tu{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-electric-blue to-neon-purple">
              crecimiento
            </span>
          </h2>
          <p className="text-lg text-gray-400">
            Elegí el plan perfecto para tu etapa actual. Podés cambiar o cancelar cuando quieras.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={cn(
                "bg-deep-black/30 border-gray-800 flex flex-col h-full transition-all duration-300",
                plan.isMostPopular && "border-2 border-neon-purple shadow-glow-purple lg:scale-105"
              )}
            >
              <CardHeader className="relative">
                {plan.isMostPopular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                    <div className="flex items-center gap-2 px-4 py-1.5 text-sm font-semibold text-white bg-gradient-to-r from-electric-blue to-neon-purple rounded-full">
                      <Star className="h-4 w-4" />
                      Más elegido
                    </div>
                  </div>
                )}
                <CardTitle className="text-2xl font-bold pt-4">{plan.name}</CardTitle>
                <CardDescription className="text-gray-400">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="mb-6">
                  <span className="text-5xl font-bold">${plan.price}</span>
                  <span className="text-gray-400">/mes</span>
                </div>
                <p className="text-sm text-gray-400 mb-6 h-10">{plan.priceDescription}</p>
                <ul className="space-y-3 text-left">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-neon-green" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  size="lg"
                  className={cn(
                    "w-full text-lg py-6 font-bold transition-all duration-300",
                    plan.isMostPopular
                      ? "bg-neon-purple hover:brightness-110 text-white hover:shadow-glow-purple"
                      : "bg-transparent border-2 border-gray-700 hover:bg-gray-800 hover:border-gray-600"
                  )}
                >
                  {plan.isMostPopular && <Zap className="mr-2 h-5 w-5" />}
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;