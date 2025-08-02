import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Clock, DollarSign, Users, Scale, Shield } from "lucide-react";
import officeInterior from "@/assets/office-interior.jpg";

const features = [
  {
    icon: Award,
    title: "Proven Track Record",
    description: "Over 500 successful cases with a 98% success rate across all practice areas."
  },
  {
    icon: Clock,
    title: "24/7 Availability", 
    description: "Emergency legal support available around the clock when you need it most."
  },
  {
    icon: DollarSign,
    title: "No Win, No Fee",
    description: "For personal injury cases, you only pay if we win your case."
  },
  {
    icon: Users,
    title: "Personalized Service",
    description: "Dedicated attention with tailored legal strategies for each client's unique situation."
  },
  {
    icon: Scale,
    title: "Experienced Team",
    description: "Combined 25+ years of legal expertise across multiple practice areas."
  },
  {
    icon: Shield,
    title: "Confidential & Secure",
    description: "Attorney-client privilege ensures your information remains completely confidential."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Why Choose LawFirm Pro?
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                When your legal rights and future are at stake, you need experienced attorneys 
                who will fight tirelessly for your interests. Here's what sets us apart.
              </p>
            </div>

            <div className="grid gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <Button variant="hero" size="lg">
                Schedule Your Free Consultation
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-professional">
              <img 
                src={officeInterior} 
                alt="Modern Law Office Interior" 
                className="w-full h-96 lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>

            {/* Stats Overlay */}
            <div className="absolute -bottom-6 -left-6 bg-background rounded-lg shadow-professional p-6 border">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">500+</div>
                  <div className="text-sm text-muted-foreground">Cases Won</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">98%</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">25+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">1000+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;