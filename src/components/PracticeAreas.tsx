import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Building2, 
  Heart, 
  Car, 
  Home, 
  Briefcase, 
  FileText,
  Users,
  Shield
} from "lucide-react";

const practiceAreas = [
  {
    icon: Heart,
    title: "Family Law",
    description: "Divorce, child custody, adoption, and domestic relations with compassionate guidance.",
    features: ["Divorce & Separation", "Child Custody", "Adoption Services", "Prenuptial Agreements"]
  },
  {
    icon: Building2,
    title: "Corporate Law",
    description: "Business formation, contracts, mergers, and comprehensive corporate legal services.",
    features: ["Business Formation", "Contract Law", "Mergers & Acquisitions", "Corporate Compliance"]
  },
  {
    icon: Car,
    title: "Personal Injury",
    description: "Automobile accidents, workplace injuries, and personal injury claims representation.",
    features: ["Auto Accidents", "Workplace Injuries", "Medical Malpractice", "Slip & Fall Cases"]
  },
  {
    icon: Home,
    title: "Real Estate Law",
    description: "Property transactions, disputes, zoning issues, and real estate litigation.",
    features: ["Property Transactions", "Real Estate Disputes", "Zoning Issues", "Title Disputes"]
  },
  {
    icon: Briefcase,
    title: "Employment Law",
    description: "Workplace disputes, discrimination cases, and employment contract negotiations.",
    features: ["Wrongful Termination", "Discrimination Cases", "Employment Contracts", "Workplace Harassment"]
  },
  {
    icon: FileText,
    title: "Estate Planning",
    description: "Wills, trusts, probate, and comprehensive estate planning services.",
    features: ["Will & Testament", "Trust Administration", "Probate Services", "Estate Tax Planning"]
  }
];

const PracticeAreas = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Our Practice Areas
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide comprehensive legal services across multiple practice areas, 
            ensuring expert representation for all your legal needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreas.map((area, index) => (
            <Card key={index} className="group hover:shadow-professional transition-all duration-300 hover:-translate-y-1 border-border/50">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                  <area.icon className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {area.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {area.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {area.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <Shield className="w-4 h-4 text-accent mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            Schedule Your Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;