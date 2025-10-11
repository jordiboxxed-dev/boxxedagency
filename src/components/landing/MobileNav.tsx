import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Abrir menú</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <nav className="grid gap-6 text-lg font-medium mt-8">
          <a href="#" className="flex items-center gap-2 text-2xl font-bold mb-4">
            <img src="/logo.png" alt="Boxxed Agency Logo" className="h-10 w-10" />
            <span>
              Boxxed <span className="text-brand-lime">Agency</span>
            </span>
          </a>
          <a href="#services" className="text-muted-foreground hover:text-foreground">Servicios</a>
          <a href="#featured-case-study" className="text-muted-foreground hover:text-foreground">Casos de Éxito</a>
          <a href="#orbital-process" className="text-muted-foreground hover:text-foreground">Proceso</a>
          <a href="#faq" className="text-muted-foreground hover:text-foreground">FAQ</a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground">Contacto</a>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;