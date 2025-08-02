import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Award, 
  GraduationCap, 
  Scale, 
  Mail, 
  Phone, 
  Download,
  MapPin,
  Users,
  Trophy,
  BookOpen,
  Calendar,
  FileText
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Attorneys = () => {
  const attorneys = [
    {
      id: 1,
      name: "Sarah Mitchell",
      title: "Senior Partner & Managing Attorney",
      image: "https://images.pexels.com/photos/4427610/pexels-photo-4427610.jpeg",
      education: [
        "J.D., Harvard Law School, 1995",
        "B.A. Political Science, Yale University, 1992"
      ],
      barAdmissions: [
        "California State Bar (1995)",
        "Federal District Court (1996)",
        "U.S. Supreme Court (2000)"
      ],
      experience: "28+ Years",
      practiceAreas: [
        "Corporate Law",
        "Mergers & Acquisitions",
        "Securities Law",
        "Business Litigation"
      ],
      notableAchievements: [
        "Successfully represented Fortune 500 companies in $2B+ acquisitions",
        "Named 'Attorney of the Year' by State Bar Association (2018, 2021)",
        "Featured in 'Top 100 Corporate Lawyers' by Legal Magazine"
      ],
      associations: [
        "American Bar Association",
        "State Bar Corporate Law Section",
        "International Association of Corporate Counsel"
      ],
      email: "sarah.mitchell@lawfirmpro.com",
      phone: "(555) 123-4568"
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      title: "Partner - Litigation Department",
      image: "https://images.pexels.com/photos/7841782/pexels-photo-7841782.jpeg",
      education: [
        "J.D., Stanford Law School, 1998",
        "B.S. Criminal Justice, UC Berkeley, 1995"
      ],
      barAdmissions: [
        "California State Bar (1998)",
        "Federal District Court (1999)",
        "Court of Appeals (2001)"
      ],
      experience: "25+ Years",
      practiceAreas: [
        "Criminal Defense",
        "Civil Litigation",
        "Personal Injury",
        "Employment Law"
      ],
      notableAchievements: [
        "98% success rate in criminal defense cases",
        "Secured $15M settlement in landmark personal injury case",
        "Recognized as 'Trial Lawyer of the Year' (2019)"
      ],
      associations: [
        "California Trial Lawyers Association",
        "National Association of Criminal Defense Lawyers",
        "American College of Trial Lawyers"
      ],
      email: "michael.rodriguez@lawfirmpro.com",
      phone: "(555) 123-4569"
    },
    {
      id: 3,
      name: "Jennifer Thompson",
      title: "Partner - Family Law",
      image: "/placeholder.svg",
      education: [
        "J.D., UCLA School of Law, 2001",
        "M.S.W., USC School of Social Work, 1998",
        "B.A. Psychology, UCLA, 1996"
      ],
      barAdmissions: [
        "California State Bar (2001)",
        "Family Court Certification (2002)"
      ],
      experience: "22+ Years",
      practiceAreas: [
        "Family Law",
        "Divorce & Separation",
        "Child Custody",
        "Adoption"
      ],
      notableAchievements: [
        "Successfully handled 500+ family law cases",
        "Board Certified Family Law Specialist",
        "Featured expert on family law matters in local media"
      ],
      associations: [
        "California Family Law Section",
        "American Academy of Matrimonial Lawyers",
        "Association of Certified Family Law Specialists"
      ],
      email: "jennifer.thompson@lawfirmpro.com",
      phone: "(555) 123-4570"
    },
    {
      id: 4,
      name: "David Chen",
      title: "Associate Attorney - Real Estate Law",
      image: "/placeholder.svg",
      education: [
        "J.D., USC Gould School of Law, 2010",
        "M.B.A., USC Marshall School of Business, 2008",
        "B.A. Economics, UC San Diego, 2006"
      ],
      barAdmissions: [
        "California State Bar (2010)",
        "Real Estate Law Certification (2012)"
      ],
      experience: "13+ Years",
      practiceAreas: [
        "Real Estate Law",
        "Property Transactions",
        "Zoning & Land Use",
        "Construction Law"
      ],
      notableAchievements: [
        "Facilitated $500M+ in real estate transactions",
        "Expert in complex commercial real estate deals",
        "Rising Star Award - Super Lawyers (2018-2023)"
      ],
      associations: [
        "California Association of Realtors",
        "American College of Real Estate Lawyers",
        "Commercial Real Estate Development Association"
      ],
      email: "david.chen@lawfirmpro.com",
      phone: "(555) 123-4571"
    },
    {
      id: 5,
      name: "Lisa Anderson",
      title: "Associate Attorney - Estate Planning",
      image: "/placeholder.svg",
      education: [
        "J.D., Loyola Law School, 2012",
        "LL.M. Taxation, NYU School of Law, 2013",
        "B.S. Accounting, Cal Poly SLO, 2009"
      ],
      barAdmissions: [
        "California State Bar (2012)",
        "Estate Planning Specialist Certification (2014)"
      ],
      experience: "11+ Years",
      practiceAreas: [
        "Estate Planning",
        "Trust Administration",
        "Probate Law",
        "Tax Planning"
      ],
      notableAchievements: [
        "Drafted estate plans protecting $200M+ in assets",
        "Certified Specialist in Estate Planning, Trust & Probate Law",
        "40 Under 40 Legal Excellence Award (2020)"
      ],
      associations: [
        "Estate Planning Council",
        "American College of Trust and Estate Counsel",
        "California State Bar Trusts and Estates Section"
      ],
      email: "lisa.anderson@lawfirmpro.com",
      phone: "(555) 123-4572"
    }
  ];

  const firmStats = [
    { icon: Users, title: "5", description: "Expert Attorneys" },
    { icon: Award, title: "100+", description: "Years Combined Experience" },
    { icon: Trophy, title: "1000+", description: "Cases Successfully Resolved" },
    { icon: Scale, title: "98%", description: "Client Satisfaction Rate" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-hero-gradient py-20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white space-y-6 max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              Meet Our <span className="text-accent">Expert Attorneys</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
              Your Legal Advocates, Every Step of the Way. Our experienced team of attorneys 
              brings decades of combined expertise, unwavering dedication, and a proven track 
              record of success to every case we handle.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Trusted Legal Experts with Proven Results
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At LawFirm Pro, our attorneys represent the pinnacle of legal excellence. With over 100 years 
              of combined experience across diverse legal specializations, our team is committed to providing 
              personalized legal solutions that protect your interests and secure your future. We pride ourselves 
              on our client-centered approach, innovative legal strategies, and unwavering commitment to justice.
            </p>
          </div>

          {/* Firm Statistics */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {firmStats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-professional transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <stat.icon className="w-10 h-10 sm:w-12 sm:h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">{stat.title}</h3>
                  <p className="text-muted-foreground text-sm sm:text-base">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Attorney Profiles */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Attorney Team
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the dedicated legal professionals who will fight for your rights and guide you 
              through every step of your legal journey.
            </p>
          </div>

          <div className="space-y-12">
            {attorneys.map((attorney, index) => (
              <Card key={attorney.id} className="shadow-professional overflow-hidden">
                <div className="grid lg:grid-cols-3 gap-8 p-6 lg:p-8">
                  {/* Photo and Basic Info */}
                  <div className="text-center lg:text-left space-y-4">
                    <div className="w-48 h-48 mx-auto lg:mx-0 rounded-lg overflow-hidden shadow-elegant">
                      <img 
                        src={attorney.image} 
                        alt={attorney.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground">{attorney.name}</h3>
                      <p className="text-accent font-medium">{attorney.title}</p>
                      <Badge variant="secondary" className="mt-2">{attorney.experience}</Badge>
                    </div>
                    
                    {/* Contact Info */}
                    <div className="space-y-2 pt-4 border-t border-border/50">
                      <div className="flex items-center justify-center lg:justify-start gap-2 text-sm text-muted-foreground">
                        <Mail className="w-4 h-4" />
                        <a href={`mailto:${attorney.email}`} className="hover:text-accent transition-colors">
                          {attorney.email}
                        </a>
                      </div>
                      <div className="flex items-center justify-center lg:justify-start gap-2 text-sm text-muted-foreground">
                        <Phone className="w-4 h-4" />
                        <a href={`tel:${attorney.phone}`} className="hover:text-accent transition-colors">
                          {attorney.phone}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Education and Bar Admissions */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                        <GraduationCap className="w-5 h-5 text-accent" />
                        Education
                      </h4>
                      <ul className="space-y-1">
                        {attorney.education.map((edu, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground">{edu}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Scale className="w-5 h-5 text-accent" />
                        Bar Admissions
                      </h4>
                      <ul className="space-y-1">
                        {attorney.barAdmissions.map((bar, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground">{bar}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                        <BookOpen className="w-5 h-5 text-accent" />
                        Practice Areas
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {attorney.practiceAreas.map((area, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {area}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Achievements and Associations */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Trophy className="w-5 h-5 text-accent" />
                        Notable Achievements
                      </h4>
                      <ul className="space-y-2">
                        {attorney.notableAchievements.map((achievement, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Users className="w-5 h-5 text-accent" />
                        Professional Associations
                      </h4>
                      <ul className="space-y-1">
                        {attorney.associations.map((association, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground">{association}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4">
                      <Button variant="outline" size="sm" className="w-full">
                        <Download className="w-4 h-4 mr-2" />
                        Download Full CV
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Introduction Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              A Message From Our Team
            </h2>
            <p className="text-lg text-muted-foreground">
              Watch our attorneys discuss their commitment to providing exceptional legal service 
              and their passion for protecting clients' rights.
            </p>
            
            {/* Video Placeholder */}
            <div className="relative bg-muted rounded-lg shadow-professional p-8 sm:p-16">
              <div className="aspect-video bg-muted-foreground/10 rounded-lg flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto">
                    <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-foreground">Team Introduction Video</h3>
                    <p className="text-sm text-muted-foreground">Click to play</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 bg-hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8 text-white">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Schedule a Consultation with Our Attorneys
            </h2>
            <p className="text-lg sm:text-xl text-white/90">
              Our experienced legal team is ready to provide you with personalized guidance 
              and aggressive representation. Contact us today to discuss your case and learn 
              how we can help protect your rights and interests.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Free Consultation
              </Button>
              <Button variant="outline" size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 border-white text-white hover:bg-white hover:text-primary">
                <Phone className="w-5 h-5 mr-2" />
                Call (555) 123-4567
              </Button>
            </div>
            
            <div className="pt-8 border-t border-white/20">
              <p className="text-white/80">
                Free initial consultation • No obligation • Confidential discussion
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Attorneys;
