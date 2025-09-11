import { CheckCircle } from "lucide-react";

const processSteps = [
  {
    title: "1. Descubrimiento y Estrategia",
    description: "Analizamos tus objetivos y desafíos para definir una hoja de ruta de IA clara y efectiva.",
  },
  {
    title: "2. Diseño y Prototipado",
    description: "Creamos un prototipo funcional para validar la solución y refinar los requisitos antes del desarrollo completo.",
  },
  {
    title: "3. Desarrollo e Implementación",
    description: "Nuestro equipo de expertos construye e integra la solución de IA en tus sistemas existentes.",
  },
  {
    title: "4. Pruebas y Optimización",
    description: "Realizamos pruebas exhaustivas para garantizar el rendimiento, la precisión y la seguridad de la solución.",
  },
  {
    title: "5. Soporte y Escalado",
    description: "Ofrecemos soporte continuo y te ayudamos a escalar la solución a medida que tu negocio crece.",
  },
];

const Process = () => {
  return (
    <section id="process" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestro Proceso de Trabajo</h2>
          <p className="text-lg text-gray-400">
            Un enfoque probado en 5 pasos para garantizar el éxito de tu proyecto de IA.
          </p>
        </div>
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-800 hidden md:block"></div>
          {processSteps.map((step, index) => (
            <div key={index} className="md:flex items-center mb-8 w-full">
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left md:ml-auto'}`}>
                <div className="bg-anthracite-gray p-6 rounded-lg border border-gray-800">
                  <h3 className="text-xl font-bold text-neon-purple mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </div>
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 bg-deep-black h-8 w-8 rounded-full border-2 border-neon-purple items-center justify-center">
                <CheckCircle className="h-4 w-4 text-neon-purple" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;