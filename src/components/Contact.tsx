import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-japanese">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Take the first step towards mastering Japanese. Contact us today for a consultation 
              and discover how Nippon Bridge Academy can help you achieve your goals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Get in Touch
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-accent mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">Location</p>
                      <p className="text-muted-foreground">
                        Naivasha, Kenya<br />
                        Available worldwide online
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-accent mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">Phone</p>
                      <p className="text-muted-foreground">+254722143317</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-accent mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">Email</p>
                      <p className="text-muted-foreground">nipponbridgeacademy@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-accent mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">Office Hours</p>
                      <p className="text-muted-foreground">
                        Mon-Fri: 9:00 AM - 5:00 PM EAT<br />
                        Sat: 10:00 AM - 4:00 PM EAT
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-soft">
                <h4 className="text-xl font-semibold text-foreground mb-4">
                  Why Choose Us?
                </h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Connect to work and study opportunities
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Flexible scheduling options
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Cultural immersion activities
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    JLPT exam preparation support
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-medium">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Request Consultation
              </h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name
                    </label>
                    <Input placeholder="Your first name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name
                    </label>
                    <Input placeholder="Your last name" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input type="email" placeholder="your.email@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Current Japanese Level
                  </label>
                  <select className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground">
                    <option>Complete Beginner</option>
                    <option>Some Basic Knowledge</option>
                    <option>Intermediate (N3-N2)</option>
                    <option>Advanced (N1)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Learning Goals
                  </label>
                  <Textarea 
                    placeholder="Tell us about your Japanese learning goals and what program interests you..."
                    rows={4}
                  />
                </div>
                <Button variant="accent" className="w-full" size="lg">
                  Schedule Free Consultation
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;