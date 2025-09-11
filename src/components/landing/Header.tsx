import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-deep-black/50 backdrop-blur-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <a href="#" className="text-2xl font-bold">
          Boxxed <span className="text-electric-blue">Agency</span>
        </a>
        <nav className="hidden md:flex gap-6 items-center">
          <a href="#services" className="text-sm font-medium hover:text-electric-blue transition-colors">Servicios</a>
          <a href="#cases" className="text-sm font-medium hover:text-electric-blue transition-colors">Casos de Éxito</a>
          <a href="#process" className="text-sm font-medium hover:text-electric-blue transition-colors">Proceso</a>
          <a href="#contact" className="text-sm font-medium hover:text-electric-blue transition-colors">Contacto</a>
        </nav>
        <Button className="bg-electric-blue hover:bg-neon-purple text-white font-bold transition-all duration-300 hover:shadow-glow-blue">
          Agenda tu Consultoría
        </Button>
      </div>
    </header>
  );
};

export default Header;