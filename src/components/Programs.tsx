import { Button } from "@/components/ui/button";
import { Clock, Users, Star, BookOpen, Calendar, Award, Gamepad2, Palette, Smile } from "lucide-react";

const Programs = () => {
  const programs = [
    {
      title: "Beginner's Journey",
      level: "N5-N4",
      duration: "6 months",
      price: "¥180,000",
      features: [
        "Hiragana & Katakana mastery",
        "Basic conversation skills",
        "Cultural introduction",
        "Small group classes",
        "Weekly cultural activities"
      ],
      popular: false
    },
    {
      title: "Intermediate Immersion",
      level: "N3-N2",
      duration: "8 months",
      price: "¥240,000",
      features: [
        "Complex grammar structures",
        "Business Japanese basics",
        "Cultural deep dive",
        "Reading comprehension",
        "Speaking confidence building"
      ],
      popular: true
    },
    {
      title: "Advanced Mastery",
      level: "N1",
      duration: "12 months",
      price: "¥320,000",
      features: [
        "Advanced literature study",
        "Professional communication",
        "Cultural nuances",
        "JLPT N1 preparation",
        "Career guidance"
      ],
      popular: false
    },
    {
      title: "Wakuwaku Club (Exciting Club)",
      level: "Primary & High School",
      duration: "Ongoing",
      price: "¥150,000",
      features: [
        { text: "Fun, interactive Japanese lessons", icon: BookOpen },
        { text: "Games and playful activities", icon: Gamepad2 },
        { text: "Creative projects & cultural exploration", icon: Palette },
        { text: "Friendly group environment", icon: Smile }
      ],
      special: true, // flag for kid-friendly styling
      popular: false
    },
    {
      title: "Individualized Classes",
      level: "All Levels",
      duration: "Flexible",
      price: "¥400,000",
      features: [
        "One-on-one lessons tailored to your goals",
        "Flexible scheduling",
        "Personalized learning plan",
        "Intensive conversation practice"
      ],
      popular: false
    }
  ];

  return (
    <section id="programs" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-japanese">
              Our Programs
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive Japanese language programs designed to take you from beginner 
              to fluent speaker through structured, immersive learning experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {programs.map((program, index) => (
              <div 
                key={index}
                className={`relative bg-card rounded-2xl p-8 shadow-medium hover-lift transition-all duration-300 ${
                  program.popular ? 'ring-2 ring-accent border-accent' : ''
                }`}
              >
                {program.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {program.title}
                  </h3>
                  <p className="text-accent font-semibold text-lg">
                    {program.level}
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="w-5 h-5 mr-3 text-accent" />
                    <span>{program.duration}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Award className="w-5 h-5 mr-3 text-accent" />
                    <span>Certificate included</span>
                  </div>
                </div>

                <div className="border-t border-border pt-6 mb-8">
                  <ul className="space-y-3">
                    {program.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        {typeof feature === "string" ? (
                          <>
                            <Star className="w-4 h-4 mr-3 text-accent fill-current" />
                            {feature}
                          </>
                        ) : (
                          <>
                            <feature.icon className="w-4 h-4 mr-3 text-accent" />
                            {feature.text}
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-center">
                  <div className="text-3xl font-bold text-foreground mb-4">
                    {program.price}
                  </div>
                  <Button 
                    variant={program.popular ? "accent" : "outline"} 
                    className="w-full"
                  >
                    Enroll Now
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center bg-muted rounded-2xl p-8">
            <BookOpen className="w-16 h-16 text-accent mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Custom Programs Available
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Need a specialized program? We offer customized Japanese learning experiences 
              for businesses, academic institutions, and individual goals.
            </p>
            <Button variant="default">
              Discuss Custom Program
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
