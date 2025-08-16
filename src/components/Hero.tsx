import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Users, BookOpen } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero text-primary-foreground pt-20">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <img 
              src="/lovable-uploads/cebf270f-63df-42c1-91e1-4dcb6b49145c.png" 
              alt="Nippon Bridge Academy" 
              className="w-32 h-32 animate-fade-in"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up font-japanese">
            Nippon Bridge Academy
          </h1>
          
          <p className="text-xl md:text-2xl mb-4 font-light animate-fade-in-up opacity-90">
            Learn. Experience. Connect.
          </p>
          
          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto animate-fade-in-up opacity-80 leading-relaxed">
            Master Japanese language and culture through immersive learning experiences. 
            Connect with Japan's rich heritage while building your future.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up">
            <Button 
              variant="secondary" 
              size="lg"
              onClick={() => scrollToSection('programs')}
              className="group"
            >
              Explore Programs
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline-hero" 
              size="lg"
              onClick={() => scrollToSection('contact')}
            >
              Schedule Consultation
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto animate-slide-in-right">
            <div className="text-center">
              <Globe className="w-8 h-8 mx-auto mb-3 text-accent-light" />
              <h3 className="font-semibold mb-2">Cultural Immersion</h3>
              <p className="text-sm opacity-80">Experience authentic Japanese culture</p>
            </div>
            <div className="text-center">
              <Users className="w-8 h-8 mx-auto mb-3 text-accent-light" />
              <h3 className="font-semibold mb-2">Expert Instructors</h3>
              <p className="text-sm opacity-80">Learn from native speakers</p>
            </div>
            <div className="text-center">
              <BookOpen className="w-8 h-8 mx-auto mb-3 text-accent-light" />
              <h3 className="font-semibold mb-2">Proven Methods</h3>
              <p className="text-sm opacity-80">Structured learning approach</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;