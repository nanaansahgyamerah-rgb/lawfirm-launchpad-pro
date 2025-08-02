import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Award, GraduationCap } from "lucide-react";
import teamLawyers from "@/assets/team-lawyers.jpg";

const attorneys = [
  {
    name: "Sarah Mitchell",
    title: "Senior Partner",
    specialization: "Corporate Law & Family Law",
    experience: "15+ Years Experience",
    education: "Harvard Law School, J.D.",
    achievements: ["Super Lawyers Rising Star", "Best Lawyer Award 2023", "ABA Distinguished Service"],
    email: "sarah@lawfirmpro.com",
    phone: "(555) 123-4567",
    bio: "Sarah specializes in complex corporate transactions and sensitive family law matters, bringing a unique blend of business acumen and empathy to every case."
  },
  {
    name: "Michael Rodriguez",
    title: "Partner",
    specialization: "Personal Injury & Employment Law",
    experience: "12+ Years Experience", 
    education: "Stanford Law School, J.D.",
    achievements: ["Multi-Million Dollar Verdict Winner", "Trial Lawyer of the Year", "Client Choice Award"],
    email: "michael@lawfirmpro.com",
    phone: "(555) 123-4568",
    bio: "Michael is known for his aggressive advocacy and has secured over $50 million in settlements and verdicts for his clients in personal injury cases."
  },
  {
    name: "Jennifer Chen",
    title: "Associate",
    specialization: "Real Estate & Estate Planning",
    experience: "8+ Years Experience",
    education: "Yale Law School, J.D.",
    achievements: ["Young Lawyer Excellence Award", "Pro Bono Champion", "Real Estate Expert"],
    email: "jennifer@lawfirmpro.com", 
    phone: "(555) 123-4569",
    bio: "Jennifer provides comprehensive estate planning services and handles complex real estate transactions with meticulous attention to detail."
  }
];

const AttorneyTeam = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Meet Our Expert Legal Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our experienced attorneys bring decades of combined expertise and a proven track record 
            of success across multiple practice areas.
          </p>
        </div>

        {/* Team Photo */}
        <div className="mb-16">
          <div className="relative rounded-lg overflow-hidden shadow-professional">
            <img 
              src={teamLawyers} 
              alt="Our Legal Team" 
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-primary/20"></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {attorneys.map((attorney, index) => (
            <Card key={index} className="group hover:shadow-professional transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-12 h-12 text-accent" />
                </div>
                
                <CardTitle className="text-xl font-bold text-foreground">
                  {attorney.name}
                </CardTitle>
                
                <CardDescription className="text-primary font-semibold">
                  {attorney.title}
                </CardDescription>
                
                <Badge variant="secondary" className="mx-auto mt-2">
                  {attorney.specialization}
                </Badge>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {attorney.bio}
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Award className="w-4 h-4 text-accent mr-2" />
                    {attorney.experience}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <GraduationCap className="w-4 h-4 text-accent mr-2" />
                    {attorney.education}
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-semibold text-sm text-foreground mb-2">Key Achievements:</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {attorney.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-center">
                        <Award className="w-3 h-3 text-accent mr-2 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-2 pt-4 border-t">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Mail className="w-4 h-4 mr-1" />
                    Email
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Phone className="w-4 h-4 mr-1" />
                    Call
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            Schedule a Meeting
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AttorneyTeam;