import { Button } from "@/components/ui/button";
import { ThemeToggle } from "../theme-toggle";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <a href="#" className="flex items-center gap-2 text-xl sm:text-2xl font-bold">
          <img src="/logo.png" alt="Boxxed Agency Logo" className="h-10 w-10" />
          <span>
            Boxxed <span className="text-neon-purple">Agency</span>
          </span>
        </a>
        <nav className="hidden md:flex gap-6 items-center">
          <a href="#services" className="text-sm font-medium hover:text-neon-purple transition-colors">Servicios</a>
          <a href="#featured-case-study" className="text-sm font-medium hover:text-neon-purple transition-colors">Casos de Éxito</a>
          <a href="#orbital-process" className="text-sm font-medium hover:text-neon-purple transition-colors">Proceso</a>
          <a href="#faq" className="text-sm font-medium hover:text-neon-purple transition-colors">FAQ</a>
          <a href="#contact" className="text-sm font-medium hover:text-neon-purple transition-colors">Contacto</a>
        </nav>
        <div className="flex items-center gap-2 sm:gap-4">
          <a href="#contact" className="hidden sm:block">
            <Button className="bg-neon-purple hover:brightness-110 text-white hover:text-black font-bold transition-all duration-300 hover:shadow-glow-purple">
              Agenda tu Consultoría
            </Button>
          </a>
          <ThemeToggle />
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;