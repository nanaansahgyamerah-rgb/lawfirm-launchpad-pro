import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Award, 
  Users, 
  Calendar, 
  Target, 
  Heart, 
  Shield, 
  Scale, 
  Handshake,
  Building2,
  MapPin,
  Trophy,
  Star
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import teamLawyers from "@/assets/team-lawyers.jpg";
import officeInterior from "@/assets/office-interior.jpg";

const AboutUs = () => {
  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "We uphold the highest ethical standards in all our legal practices and client relationships."
    },
    {
      icon: Heart,
      title: "Compassion",
      description: "We understand that legal issues can be emotionally challenging and approach each case with empathy."
    },
    {
      icon: Scale,
      title: "Justice",
      description: "We are committed to fighting for justice and ensuring fair representation for all our clients."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from legal research to client communication."
    }
  ];

  const achievements = [
    { icon: Trophy, title: "500+ Cases Won", description: "Successfully resolved over 500 legal cases" },
    { icon: Star, title: "98% Success Rate", description: "Consistently achieving favorable outcomes" },
    { icon: Award, title: "25+ Years Experience", description: "Combined decades of legal expertise" },
    { icon: Users, title: "1000+ Happy Clients", description: "Building lasting relationships with clients" }
  ];

  const timeline = [
    {
      year: "1998",
      title: "Firm Founded",
      description: "Started as a small practice focusing on family law and personal injury cases."
    },
    {
      year: "2005",
      title: "Expansion",
      description: "Expanded to include corporate law and real estate practice areas."
    },
    {
      year: "2010",
      title: "Recognition",
      description: "Received our first 'Best Law Firm' award from the state bar association."
    },
    {
      year: "2015",
      title: "Growth",
      description: "Added employment law and estate planning to our comprehensive services."
    },
    {
      year: "2020",
      title: "Digital Innovation",
      description: "Implemented cutting-edge legal technology for better client service."
    },
    {
      year: "2024",
      title: "Today",
      description: "Leading law firm with a reputation for excellence and client satisfaction."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-hero-gradient py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{ backgroundImage: `url(${teamLawyers})` }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white space-y-6 max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              About <span className="text-accent">LawFirm Pro</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
              For over 25 years, we've been dedicated to providing exceptional legal representation 
              with integrity, compassion, and unwavering commitment to our clients' success.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Our Story</h2>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
                  Founded in 1998, LawFirm Pro began as a vision to provide accessible, 
                  high-quality legal services to individuals and businesses in our community. 
                  What started as a small practice has grown into one of the region's most 
                  respected law firms.
                </p>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
                  Our founding partners believed that exceptional legal representation should 
                  be combined with genuine care for clients' well-being. This philosophy 
                  continues to guide everything we do today.
                </p>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Today, we're proud to serve thousands of clients across multiple practice areas, 
                  maintaining the personal touch and dedication that has been our hallmark 
                  for over two decades.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" className="w-full sm:w-auto">
                  Meet Our Team
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Our Practice Areas
                </Button>
              </div>
            </div>

            <div className="relative order-first lg:order-last">
              <img 
                src={officeInterior} 
                alt="Our Law Office" 
                className="w-full h-64 sm:h-80 lg:h-[500px] object-cover rounded-lg shadow-professional"
              />
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-background rounded-lg shadow-elegant p-4 sm:p-6 border">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-accent">25+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Mission & Vision
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              We are guided by our commitment to excellence, integrity, and justice in everything we do.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <Card className="shadow-professional">
              <CardHeader className="text-center">
                <Target className="w-10 h-10 sm:w-12 sm:h-12 text-accent mx-auto mb-4" />
                <CardTitle className="text-xl sm:text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed text-sm sm:text-base">
                  To provide exceptional legal representation that protects our clients' interests, 
                  rights, and futures. We are committed to delivering personalized service, 
                  innovative solutions, and unwavering advocacy for justice.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-professional">
              <CardHeader className="text-center">
                <Building2 className="w-10 h-10 sm:w-12 sm:h-12 text-accent mx-auto mb-4" />
                <CardTitle className="text-xl sm:text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed text-sm sm:text-base">
                  To be the most trusted and respected law firm in our region, known for our 
                  legal excellence, ethical standards, and positive impact on the communities 
                  and clients we serve.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Core Values */}
          <div className="space-y-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-center text-foreground">Our Core Values</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-4 sm:p-6">
                    <value.icon className="w-8 h-8 sm:w-10 sm:h-10 text-accent mx-auto mb-4" />
                    <h4 className="font-semibold text-foreground mb-2 text-base sm:text-lg">{value.title}</h4>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Achievements
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Recognition and results that speak to our commitment to excellence.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center hover:shadow-professional transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-4 sm:p-6">
                  <achievement.icon className="w-10 h-10 sm:w-12 sm:h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">{achievement.title}</h3>
                  <p className="text-muted-foreground text-sm sm:text-base">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Journey
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              A timeline of growth, achievement, and service to our community.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-accent/20 hidden lg:block"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:gap-8`}>
                  <div className="flex-1 lg:text-right lg:pr-8">
                    {index % 2 === 0 && (
                      <Card className="shadow-elegant">
                        <CardHeader>
                          <div className="flex items-center gap-3">
                            <Badge variant="secondary" className="text-accent bg-accent/10">{item.year}</Badge>
                            <CardTitle className="text-lg sm:text-xl">{item.title}</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground text-sm sm:text-base">{item.description}</p>
                        </CardContent>
                      </Card>
                    )}
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="w-4 h-4 bg-accent rounded-full border-4 border-background shadow-lg z-10 hidden lg:block"></div>
                  
                  <div className="flex-1 lg:text-left lg:pl-8">
                    {index % 2 !== 0 && (
                      <Card className="shadow-elegant">
                        <CardHeader>
                          <div className="flex items-center gap-3">
                            <Badge variant="secondary" className="text-accent bg-accent/10">{item.year}</Badge>
                            <CardTitle className="text-lg sm:text-xl">{item.title}</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground text-sm sm:text-base">{item.description}</p>
                        </CardContent>
                      </Card>
                    )}
                  </div>

                  {/* Mobile version */}
                  <div className="lg:hidden w-full">
                    <Card className="shadow-elegant">
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <Badge variant="secondary" className="text-accent bg-accent/10">{item.year}</Badge>
                          <CardTitle className="text-lg sm:text-xl">{item.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground text-sm sm:text-base">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8 text-white">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Ready to Work with Our Team?
            </h2>
            <p className="text-lg sm:text-xl text-white/90">
              Experience the difference that dedicated, experienced legal representation can make. 
              Contact us today for your free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4">
                Schedule Free Consultation
              </Button>
              <Button variant="outline" size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 border-white text-white hover:bg-white hover:text-primary">
                Call (555) 123-4567
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
