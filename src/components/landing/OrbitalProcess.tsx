import { Search, DraftingCompass, Code, TestTube, Rocket, LifeBuoy } from "lucide-react";
import RadialOrbitalTimeline from "@/components/landing/RadialOrbitalTimeline";

const timelineData = [
  {
    id: 1,
    title: "1. Descubrimiento",
    cardTitle: "Estrategia",
    date: "Paso 1",
    content: "Analizamos tus objetivos y desafíos para definir una hoja de ruta de IA clara y efectiva.",
    category: "Proceso",
    icon: Search,
    relatedIds: [6, 2],
    status: "completed" as const,
    progress: 17,
    deliverable: "Roadmap de IA y Plan de Acción.",
  },
  {
    id: 2,
    title: "2. Diseño",
    cardTitle: "Prototipado",
    date: "Paso 2",
    content: "Creamos un prototipo funcional para validar la solución y refinar los requisitos.",
    category: "Proceso",
    icon: DraftingCompass,
    relatedIds: [1, 3],
    status: "completed" as const,
    progress: 33,
    deliverable: "Prototipo Interactivo y Diseño de Arquitectura.",
  },
  {
    id: 3,
    title: "3. Desarrollo",
    cardTitle: "Implementación",
    date: "Paso 3",
    content: "Nuestro equipo de expertos construye e integra la solución de IA en tus sistemas existentes.",
    category: "Proceso",
    icon: Code,
    relatedIds: [2, 4],
    status: "completed" as const,
    progress: 50,
    deliverable: "Solución Funcional Integrada.",
  },
  {
    id: 4,
    title: "4. Pruebas",
    cardTitle: "Optimización",
    date: "Paso 4",
    content: "Realizamos pruebas exhaustivas para garantizar el rendimiento, la precisión y la seguridad.",
    category: "Proceso",
    icon: TestTube,
    relatedIds: [3, 5],
    status: "completed" as const,
    progress: 67,
    deliverable: "Informe de Rendimiento y Calidad.",
  },
  {
    id: 5,
    title: "5. Lanzamiento",
    cardTitle: "En Vivo",
    date: "Paso 5",
    content: "Desplegamos la solución en el entorno de producción, asegurando una transición fluida y un rendimiento óptimo.",
    category: "Proceso",
    icon: Rocket,
    relatedIds: [4, 6],
    status: "completed" as const,
    progress: 83,
    deliverable: "Despliegue en Producción.",
  },
  {
    id: 6,
    title: "6. Escalado",
    cardTitle: "Soporte",
    date: "Paso 6",
    content: "Ofrecemos soporte continuo y te ayudamos a escalar la solución a medida que tu negocio crece.",
    category: "Proceso",
    icon: LifeBuoy,
    relatedIds: [5, 1],
    status: "completed" as const,
    progress: 100,
    deliverable: "Plan de Soporte y Mejoras.",
  },
];

const OrbitalProcess = () => {
  return (
    <section id="orbital-process" className="py-16 md:py-24 bg-deep-black scroll-mt-16">
        <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestro Proceso de Trabajo</h2>
                <p className="text-lg text-gray-400">
                    Explora las fases de nuestro trabajo. Haz clic en un nodo para ver los detalles.
                </p>
            </div>
            <div className="relative w-full h-[800px]">
                <RadialOrbitalTimeline timelineData={timelineData} />
            </div>
        </div>
    </section>
  );
};

export default OrbitalProcess;