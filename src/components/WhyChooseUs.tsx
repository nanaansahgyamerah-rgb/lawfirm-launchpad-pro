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
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Why Choose LawFirm Pro?
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                When your legal rights and future are at stake, you need experienced attorneys 
                who will fight tirelessly for your interests. Here's what sets us apart.
              </p>
            </div>

            <div className="grid gap-4 sm:gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 sm:gap-4 group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors flex-shrink-0">
                    <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2 text-base sm:text-lg">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm sm:text-base">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <Button variant="hero" size="lg" className="w-full sm:w-auto">
                Schedule Your Free Consultation
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative order-first lg:order-last">
            <div className="relative rounded-lg overflow-hidden shadow-professional">
              <img 
                src={officeInterior} 
                alt="Modern Law Office Interior" 
                className="w-full h-64 sm:h-80 lg:h-[500px] xl:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>

            {/* Stats Overlay */}
            <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-background rounded-lg shadow-professional p-4 sm:p-6 border">
              <div className="grid grid-cols-2 gap-3 sm:gap-6">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-accent">500+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Cases Won</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-accent">98%</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-accent">25+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-accent">1000+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Happy Clients</div>
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