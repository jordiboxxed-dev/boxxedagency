import { Button } from "@/components/ui/button";
import { MailCheck } from "lucide-react";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center text-center overflow-hidden p-4">
      <div className="absolute inset-0 bg-deep-black z-0">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-brand-lime/20 blur-[100px]"></div>
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-brand-lime/20 blur-[100px]"></div>
      </div>
      <div className="relative z-10 max-w-2xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tighter mb-4 [text-shadow:0_0_10px_hsla(var(--brand-lime),0.5)]">
          ¡Gracias por tu interés!
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-12">
          Hemos recibido tu solicitud correctamente. Nos pondremos en contacto contigo a la brevedad.
        </p>

        <div className="bg-card/50 backdrop-blur-lg border border-brand-lime rounded-lg p-6 md:p-8 text-left transition-all duration-300 shadow-glow-lime">
          <div className="flex items-start gap-4">
            <div className="mt-1">
              <MailCheck className="h-8 w-8 text-brand-lime" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">¡MUY IMPORTANTE! Un último paso...</h2>
              <p className="text-muted-foreground">
                Para poder darte una respuesta 100% personalizada, te hemos enviado un email con un <strong>formulario muy breve</strong>.
              </p>
              <p className="text-muted-foreground mt-2">
                Completarlo es <strong>crucial</strong> para que podamos analizar tu negocio a fondo y preparar nuestra llamada. ¡Revisa tu bandeja de entrada (y spam) ahora mismo!
              </p>
            </div>
          </div>
        </div>

        <Link to="/" className="mt-12 inline-block">
          <Button variant="outline" className="bg-transparent hover:bg-white/10">
            Volver al Inicio
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;