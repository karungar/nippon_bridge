import { CheckCircle, Target, Heart, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-japanese">
              About Nippon Bridge Academy
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We bridge cultures through language, creating pathways to understanding, 
              opportunity, and connection with Japan's rich heritage.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Our Mission
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Nippon Bridge Academy, we believe language learning is more than grammar and vocabulary. 
                It's about building bridges between cultures, fostering understanding, and opening doors 
                to new opportunities in Japan's dynamic society.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our immersive approach combines traditional Japanese pedagogical methods with 
                modern technology, creating an environment where students don't just learn Japanese—they live it.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-8 shadow-medium hover-lift">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">500+</div>
                  <p className="text-sm text-muted-foreground">Successful Graduates</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">15+</div>
                  <p className="text-sm text-muted-foreground">Expert Instructors</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">95%</div>
                  <p className="text-sm text-muted-foreground">JLPT Pass Rate</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">8</div>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-card rounded-xl shadow-soft hover-lift">
              <Target className="w-12 h-12 text-accent mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-3 text-foreground">Goal-Oriented</h4>
              <p className="text-muted-foreground">
                Structured learning paths designed to achieve your specific Japanese language goals.
              </p>
            </div>
            <div className="text-center p-6 bg-card rounded-xl shadow-soft hover-lift">
              <Heart className="w-12 h-12 text-accent mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-3 text-foreground">Passionate</h4>
              <p className="text-muted-foreground">
                Our instructors bring genuine enthusiasm for Japanese culture and language.
              </p>
            </div>
            <div className="text-center p-6 bg-card rounded-xl shadow-soft hover-lift">
              <Lightbulb className="w-12 h-12 text-accent mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-3 text-foreground">Innovative</h4>
              <p className="text-muted-foreground">
                Cutting-edge teaching methods that make learning Japanese engaging and effective.
              </p>
            </div>
            <div className="text-center p-6 bg-card rounded-xl shadow-soft hover-lift">
              <CheckCircle className="w-12 h-12 text-accent mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-3 text-foreground">Proven</h4>
              <p className="text-muted-foreground">
                Track record of success with students achieving their Japanese proficiency goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;