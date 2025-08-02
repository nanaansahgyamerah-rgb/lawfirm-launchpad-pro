import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Building2, 
  Heart, 
  Car, 
  Home, 
  Briefcase, 
  FileText,
  Users,
  Shield,
  Scale,
  Clock,
  Award,
  CheckCircle
} from "lucide-react";

const practiceAreas = [
  {
    icon: Heart,
    title: "Family Law",
    description: "Compassionate legal guidance through life's most challenging family transitions and decisions.",
    longDescription: "Our family law practice focuses on protecting your family's best interests during difficult times. We understand that family legal matters are deeply personal and emotionally challenging.",
    features: ["Divorce & Separation", "Child Custody & Support", "Adoption Services", "Prenuptial Agreements", "Domestic Violence Protection", "Paternity Cases"],
    experience: "15+ Years",
    cases: "500+ Cases",
    successRate: "95%"
  },
  {
    icon: Building2,
    title: "Corporate Law",
    description: "Comprehensive business legal services to help your company thrive and stay compliant.",
    longDescription: "From startup formation to complex mergers, we provide strategic legal counsel to businesses of all sizes. Our corporate law team ensures your business operates within legal frameworks while maximizing growth opportunities.",
    features: ["Business Formation", "Contract Negotiation", "Mergers & Acquisitions", "Corporate Compliance", "Employment Law", "Intellectual Property"],
    experience: "20+ Years",
    cases: "300+ Cases",
    successRate: "98%"
  },
  {
    icon: Car,
    title: "Personal Injury",
    description: "Fighting for maximum compensation for accident victims and their families.",
    longDescription: "When you've been injured due to someone else's negligence, we fight tirelessly to ensure you receive the compensation you deserve. No fees unless we win your case.",
    features: ["Auto Accidents", "Workplace Injuries", "Medical Malpractice", "Slip & Fall Cases", "Product Liability", "Wrongful Death"],
    experience: "18+ Years",
    cases: "800+ Cases",
    successRate: "92%"
  },
  {
    icon: Home,
    title: "Real Estate Law",
    description: "Expert guidance through property transactions, disputes, and real estate investments.",
    longDescription: "Whether you're buying your first home or managing a commercial real estate portfolio, our real estate attorneys ensure your interests are protected throughout every transaction.",
    features: ["Property Transactions", "Real Estate Disputes", "Zoning Issues", "Title Disputes", "Landlord-Tenant Law", "Commercial Leasing"],
    experience: "12+ Years",
    cases: "400+ Cases",
    successRate: "97%"
  },
  {
    icon: Briefcase,
    title: "Employment Law",
    description: "Protecting employee rights and helping employers maintain compliant workplaces.",
    longDescription: "We handle both employee and employer matters, ensuring fair treatment in the workplace while helping businesses maintain legal compliance with employment regulations.",
    features: ["Wrongful Termination", "Discrimination Cases", "Employment Contracts", "Workplace Harassment", "Wage & Hour Disputes", "FMLA Claims"],
    experience: "10+ Years",
    cases: "250+ Cases",
    successRate: "94%"
  },
  {
    icon: FileText,
    title: "Estate Planning",
    description: "Secure your family's future with comprehensive estate planning and wealth protection.",
    longDescription: "Our estate planning services help you protect your assets and ensure your wishes are carried out. We make complex legal processes simple and accessible for families.",
    features: ["Will & Testament", "Trust Administration", "Probate Services", "Estate Tax Planning", "Powers of Attorney", "Healthcare Directives"],
    experience: "25+ Years",
    cases: "600+ Cases",
    successRate: "99%"
  }
];

const PracticeAreas = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Our Practice Areas</h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            With decades of combined experience, our legal team provides expert representation 
            across multiple practice areas, ensuring comprehensive legal solutions for all your needs.
          </p>
          <div className="flex justify-center items-center gap-4 sm:gap-8 mt-8 flex-wrap">
            <div className="flex items-center gap-2">
              <Scale className="w-6 h-6 text-accent" />
              <span className="font-semibold text-sm sm:text-base">30+ Years Combined Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-6 h-6 text-accent" />
              <span className="font-semibold text-sm sm:text-base">2000+ Cases Won</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-6 h-6 text-accent" />
              <span className="font-semibold text-sm sm:text-base">5000+ Clients Served</span>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {practiceAreas.map((area, index) => (
              <Card key={index} className="group hover:shadow-professional transition-all duration-300 hover:-translate-y-2 border-border/50 overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-accent/5 to-accent/10 pb-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-accent/20 rounded-full flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                        <area.icon className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
                      </div>
                      <div>
                        <CardTitle className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                          {area.title}
                        </CardTitle>
                        <div className="flex gap-2 flex-wrap">
                          <Badge variant="secondary" className="text-xs">
                            <Clock className="w-3 h-3 mr-1" />
                            {area.experience}
                          </Badge>
                          <Badge variant="secondary" className="text-xs">
                            <CheckCircle className="w-3 h-3 mr-1" />
                            {area.successRate}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                    {area.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-6">
                  <p className="text-muted-foreground mb-6 leading-relaxed text-sm sm:text-base">
                    {area.longDescription}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-4 flex items-center">
                      <Shield className="w-4 h-4 text-accent mr-2" />
                      Services We Provide
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {area.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-accent mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-muted/50 rounded-lg p-4 mb-6">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-xl sm:text-2xl font-bold text-primary">{area.cases}</div>
                        <div className="text-xs text-muted-foreground">Successfully Handled</div>
                      </div>
                      <div>
                        <div className="text-xl sm:text-2xl font-bold text-accent">{area.successRate}</div>
                        <div className="text-xs text-muted-foreground">Success Rate</div>
                      </div>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Schedule Consultation
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Need Legal Assistance?</h2>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
            Don't wait - get the experienced legal representation you deserve. 
            Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              Schedule Free Consultation
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Call (555) 123-4567
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PracticeAreas;
