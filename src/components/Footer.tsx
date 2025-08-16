import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/lovable-uploads/cebf270f-63df-42c1-91e1-4dcb6b49145c.png" 
                  alt="Nippon Bridge Academy Logo" 
                  className="w-10 h-10"
                />
                <div>
                  <h3 className="font-japanese font-semibold text-lg">
                    Nippon Bridge Academy
                  </h3>
                  <p className="text-sm opacity-80">Learn. Experience. Connect.</p>
                </div>
              </div>
              <p className="text-sm opacity-80 leading-relaxed max-w-md">
                Building bridges between cultures through Japanese language education. 
                Empowering students to connect with Japan's rich heritage and modern opportunities.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#about" className="hover:text-accent-light transition-colors">About Us</a></li>
                <li><a href="#programs" className="hover:text-accent-light transition-colors">Programs</a></li>
                <li><a href="#contact" className="hover:text-accent-light transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-accent-light transition-colors">Apply Now</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Programs</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#" className="hover:text-accent-light transition-colors">Beginner's Journey</a></li>
                <li><a href="#" className="hover:text-accent-light transition-colors">Intermediate Immersion</a></li>
                <li><a href="#" className="hover:text-accent-light transition-colors">Advanced Mastery</a></li>
                <li><a href="#" className="hover:text-accent-light transition-colors">Custom Programs</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-primary-light pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm opacity-80 mb-4 md:mb-0">
                © 2024 Nippon Bridge Academy. All rights reserved.
              </p>
              <div className="flex items-center text-sm opacity-80">
                <span>Made with</span>
                <Heart className="w-4 h-4 mx-1 text-accent-light fill-current" />
                <span>for Japanese learners worldwide</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;