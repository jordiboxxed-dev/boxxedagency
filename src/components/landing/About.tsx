const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-anthracite-gray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Por qué <span className="text-neon-purple">Boxxed Agency</span>?</h2>
            <p className="text-lg text-muted-foreground mb-6">
              No solo construimos tecnología; construimos ventajas competitivas. Nuestro equipo combina una profunda experiencia técnica en IA con una mentalidad estratégica de negocio para entregar soluciones que no solo funcionan, sino que generan un valor medible.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-4xl font-bold text-neon-purple">10+</p>
                <p className="text-muted-foreground">Años de Experiencia</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-neon-purple">100+</p>
                <p className="text-muted-foreground">Proyectos Completados</p>
              </div>
            </div>
          </div>
          <div className="bg-card backdrop-blur-lg border p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Por qué elegirnos</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2"><span className="text-neon-green">✓</span> Estrategias ágiles que se adaptan a tu negocio</li>
              <li className="flex items-center gap-2"><span className="text-neon-green">✓</span> Inteligencia Artificial aplicada de forma práctica</li>
              <li className="flex items-center gap-2"><span className="text-neon-green">✓</span> Soluciones visuales y de análisis automatizado</li>
              <li className="flex items-center gap-2"><span className="text-neon-green">✓</span> Procesos optimizados y escalables en la nube</li>
              <li className="flex items-center gap-2"><span className="text-neon-green">✓</span> Tecnología flexible que crece con tu empresa</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;