import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/cebf270f-63df-42c1-91e1-4dcb6b49145c.png" 
              alt="Nippon Bridge Academy Logo" 
              className="w-12 h-12"
            />
            <div>
              <h1 className="font-japanese font-semibold text-lg text-foreground">
                Nippon Bridge Academy
              </h1>
              <p className="text-xs text-muted-foreground font-light">
                Learn. Experience. Connect.
              </p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-accent transition-colors duration-300 font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('programs')}
              className="text-foreground hover:text-accent transition-colors duration-300 font-medium"
            >
              Programs
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-accent transition-colors duration-300 font-medium"
            >
              Contact
            </button>
            {/* <Button variant="accent" size="sm">
              Apply Now
            </Button> */}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;