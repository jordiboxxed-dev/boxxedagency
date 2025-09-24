import { Search, DraftingCompass, Code, TestTube, Rocket } from "lucide-react";
import RadialOrbitalTimeline from "@/components/landing/RadialOrbitalTimeline";

const timelineData = [
  {
    id: 1,
    title: "Paso 1",
    cardTitle: "Descubrimiento",
    date: "Paso 1",
    content: "Analizamos tus objetivos y desafíos para definir una hoja de ruta de IA clara y efectiva.",
    category: "Proceso",
    icon: Search,
    relatedIds: [2, 5],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 2,
    title: "Paso 2",
    cardTitle: "Diseño",
    date: "Paso 2",
    content: "Creamos un prototipo funcional para validar la solución y refinar los requisitos.",
    category: "Proceso",
    icon: DraftingCompass,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 3,
    title: "Paso 3",
    cardTitle: "Desarrollo",
    date: "Paso 3",
    content: "Nuestro equipo de expertos construye e integra la solución de IA en tus sistemas existentes.",
    category: "Proceso",
    icon: Code,
    relatedIds: [2, 4],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 4,
    title: "Paso 4",
    cardTitle: "Pruebas",
    date: "Paso 4",
    content: "Realizamos pruebas exhaustivas para garantizar el rendimiento, la precisión y la seguridad.",
    category: "Proceso",
    icon: TestTube,
    relatedIds: [3, 5],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 5,
    title: "Paso 5",
    cardTitle: "Soporte",
    date: "Paso 5",
    content: "Ofrecemos soporte continuo y te ayudamos a escalar la solución a medida que tu negocio crece.",
    category: "Proceso",
    icon: Rocket,
    relatedIds: [4, 1],
    status: "completed" as const,
    energy: 100,
  },
];

const OrbitalProcess = () => {
  return (
    <section id="orbital-process" className="py-16 md:py-24 bg-deep-black">
        <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestro Proceso de Trabajo</h2>
                <p className="text-lg text-gray-400">
                    Explora las fases de nuestro trabajo. Haz clic en un nodo para ver los detalles.
                </p>
            </div>
            <div className="relative w-full h-[600px]">
                <RadialOrbitalTimeline timelineData={timelineData} />
            </div>
        </div>
    </section>
  );
};

export default OrbitalProcess;