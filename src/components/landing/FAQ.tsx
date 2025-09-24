import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Necesito saber usar herramientas como Make o Airtable?",
    answer:
      "No, en absoluto. Nos encargamos de toda la complejidad técnica. Te entregamos una solución lista para usar, integrada en tus procesos, sin que necesites conocimientos de programación o herramientas de automatización.",
  },
  {
    question: "¿Cuánto tiempo lleva ver resultados?",
    answer:
      "Depende de la complejidad del proyecto, pero muchos de nuestros clientes empiezan a ver un ROI tangible en las primeras 4-6 semanas. Nuestro enfoque ágil nos permite entregar valor de forma incremental desde el principio.",
  },
  {
    question: "¿Puedo pedir tareas personalizadas fuera de los planes?",
    answer:
      "¡Por supuesto! Entendemos que cada negocio es único. Si tienes necesidades específicas que no se ajustan a nuestros planes, podemos crear una propuesta a medida para tu proyecto. La flexibilidad es clave en nuestro servicio.",
  },
  {
    question: "¿Qué diferencia hay entre ustedes y una agencia tradicional?",
    answer:
      "Somos una agencia especializada 100% en Inteligencia Artificial. A diferencia de las agencias tradicionales, no solo nos enfocamos en marketing o diseño, sino en la optimización profunda de procesos de negocio a través de la tecnología más avanzada.",
  },
  {
    question: "¿Qué pasa si no me gusta algo o quiero cambios?",
    answer:
      "Tu satisfacción es nuestra prioridad. Trabajamos con ciclos de feedback cortos y revisiones constantes. Si algo no te convence, lo ajustamos hasta que estés 100% satisfecho con el resultado. Mantenemos una comunicación transparente durante todo el proceso.",
  },
  {
    question: "¿Pueden trabajar con mi industria específica?",
    answer:
      "Sí. Aunque tenemos experiencia en sectores como E-commerce, Fintech y Healthcare, nuestras soluciones de IA son agnósticas a la industria. La clave está en adaptar la tecnología a los procesos específicos de tu negocio, sea cual sea.",
  },
  {
    question: "¿Cómo funciona el soporte y la comunicación?",
    answer:
      "Tendrás un gestor de proyecto dedicado y acceso a un canal de comunicación directo (como Slack o Teams) para resolver dudas en tiempo real. Además, ofrecemos soporte técnico continuo para garantizar que la solución funcione siempre a la perfección.",
  },
  {
    question: "¿Puedo cancelar cuando quiera?",
    answer:
      "Sí, ofrecemos planes flexibles. Dependiendo del acuerdo, puedes cancelar tu suscripción o proyecto con un preaviso. Creemos en construir relaciones a largo plazo basadas en resultados, no en contratos restrictivos.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-16 md:py-24 bg-anthracite-gray scroll-mt-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Preguntas Frecuentes</h2>
          <p className="text-lg text-gray-400">
            Resolvemos tus dudas para que tomes la mejor decisión.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-black/20 backdrop-blur-lg border border-white/10 rounded-lg px-6 transition-all duration-300 hover:border-neon-purple"
              >
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;