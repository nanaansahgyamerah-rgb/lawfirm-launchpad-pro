import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Scale, Shield, Users } from "lucide-react";
import courthouseHero from "@/assets/courthouse-hero.jpg";

const Hero = () => {
  return (
    <section className="relative bg-hero-gradient min-h-[80vh] sm:min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${courthouseHero})` }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-white space-y-6 lg:space-y-8 animate-fade-in-up text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Your Trusted Legal
              <span className="block text-accent"> Advocates</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              With over 25 years of combined experience, we provide exceptional legal representation 
              with personalized attention to every case. Your success is our priority.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4">
                Free Consultation
              </Button>
              <Button variant="outline" size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 border-white text-white hover:bg-white hover:text-primary">
                Our Practice Areas
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-6 sm:pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-accent">500+</div>
                <div className="text-sm sm:text-base text-white/80">Cases Won</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-accent">25+</div>
                <div className="text-sm sm:text-base text-white/80">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-accent">98%</div>
                <div className="text-sm sm:text-base text-white/80">Success Rate</div>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex justify-center">
            <div className="grid grid-cols-1 gap-6 max-w-md">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                <Scale className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Expert Legal Counsel</h3>
                <p className="text-white/80">Comprehensive legal expertise across multiple practice areas.</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                <Shield className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Proven Track Record</h3>
                <p className="text-white/80">Decades of successful case outcomes and client satisfaction.</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                <Users className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Personalized Service</h3>
                <p className="text-white/80">Dedicated attention and tailored strategies for each client.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
