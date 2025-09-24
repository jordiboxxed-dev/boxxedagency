import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-deep-black/50 backdrop-blur-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <a href="#" className="text-2xl font-bold">
          Boxxed <span className="text-neon-purple">Agency</span>
        </a>
        <nav className="hidden md:flex gap-6 items-center">
          <a href="#services" className="text-sm font-medium hover:text-neon-purple transition-colors">Servicios</a>
          <a href="#cases" className="text-sm font-medium hover:text-neon-purple transition-colors">Casos de Éxito</a>
          <a href="#process" className="text-sm font-medium hover:text-neon-purple transition-colors">Proceso</a>
          <a href="#faq" className="text-sm font-medium hover:text-neon-purple transition-colors">FAQ</a>
          <a href="#contact" className="text-sm font-medium hover:text-neon-purple transition-colors">Contacto</a>
        </nav>
        <Button className="bg-neon-purple hover:brightness-110 text-white font-bold transition-all duration-300 hover:shadow-glow-purple">
          Agenda tu Consultoría
        </Button>
      </div>
    </header>
  );
};

export default Header;