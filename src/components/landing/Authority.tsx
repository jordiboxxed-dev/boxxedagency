import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Authority = () => {
  const clients = ["ClientA", "ClientB", "ClientC", "ClientD", "ClientE"];
  const testimonials = [
    {
      name: "CEO de TechCorp",
      quote: "Boxxed Agency revolucionó nuestra eficiencia operativa. Su enfoque en IA es simplemente de otro nivel.",
      avatar: "/placeholder.svg",
    },
    {
      name: "Directora de Innovación en FinSol",
      quote: "El equipo de Boxxed no solo entrega tecnología, sino una verdadera asociación estratégica. Los resultados hablan por sí solos.",
      avatar: "/placeholder.svg",
    },
  ];

  return (
    <section id="authority" className="py-16 md:py-24 bg-anthracite-gray">
      <div className="container mx-auto px-4 md:px-6">
        <h3 className="text-center text-lg font-semibold text-gray-400 uppercase tracking-wider mb-12">
          Con la confianza de empresas líderes
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {clients.map((client) => (
            <div key={client} className="text-2xl font-bold text-gray-500 grayscale hover:grayscale-0 transition-all">
              {client}
            </div>
          ))}
        </div>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-deep-black/30 border-gray-800 p-6">
              <CardContent className="p-0">
                <p className="text-gray-300 mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Authority;