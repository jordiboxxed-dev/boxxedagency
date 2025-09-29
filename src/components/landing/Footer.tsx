const Footer = () => {
  return (
    <footer className="bg-anthracite-gray border-t">
      <div className="container mx-auto px-4 md:px-6 py-8 flex flex-col md:flex-row justify-center items-center">
        <div className="text-center md:text-left">
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Boxxed Agency. Todos los derechos reservados.</p>
          <div className="space-x-4 mt-2">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground">Política de Privacidad</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground">Términos de Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;