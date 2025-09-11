const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-anthracite-gray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Por qué Boxxed Agency?</h2>
            <p className="text-lg text-gray-300 mb-6">
              No solo construimos tecnología; construimos ventajas competitivas. Nuestro equipo combina una profunda experiencia técnica en IA con una mentalidad estratégica de negocio para entregar soluciones que no solo funcionan, sino que generan un valor medible.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-4xl font-bold text-electric-blue">10+</p>
                <p className="text-gray-400">Años de Experiencia</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-electric-blue">100+</p>
                <p className="text-gray-400">Proyectos Completados</p>
              </div>
            </div>
          </div>
          <div className="bg-deep-black/30 p-8 rounded-lg border border-gray-800">
            <h3 className="text-2xl font-bold mb-4">Nuestro Enfoque Técnico</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2"><span className="text-neon-green">✓</span> Metodologías Ágiles</li>
              <li className="flex items-center gap-2"><span className="text-neon-green">✓</span> Modelos de Lenguaje (LLMs)</li>
              <li className="flex items-center gap-2"><span className="text-neon-green">✓</span> Computer Vision</li>
              <li className="flex items-center gap-2"><span className="text-neon-green">✓</span> MLOps y Despliegue en la Nube</li>
              <li className="flex items-center gap-2"><span className="text-neon-green">✓</span> Arquitecturas Serverless</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;