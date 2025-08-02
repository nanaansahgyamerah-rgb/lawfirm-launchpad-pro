import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Star, 
  Quote, 
  Users, 
  Award, 
  ThumbsUp, 
  Calendar,
  Phone,
  ChevronLeft,
  ChevronRight,
  Play
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Robert Johnson",
      title: "Business Owner",
      caseType: "Corporate Legal Advisory",
      image: "https://images.pexels.com/photos/8815915/pexels-photo-8815915.jpeg",
      rating: 5,
      testimonial: "LawFirm Pro guided us through a complex merger that saved our family business. Their expertise in corporate law and attention to detail was exceptional. Sarah Mitchell and her team made what seemed impossible, possible. We couldn't have asked for better representation, and the outcome exceeded our expectations.",
      outcome: "Successful $2.5M business merger completed",
      date: "March 2024"
    },
    {
      id: 2,
      name: "Dr. Maria Santos",
      title: "Medical Professional",
      caseType: "Personal Injury & Medical Malpractice",
      image: "https://images.pexels.com/photos/6980996/pexels-photo-6980996.jpeg",
      rating: 5,
      testimonial: "After a devastating car accident that affected my medical practice, Michael Rodriguez fought tirelessly for my rights. His dedication and legal expertise resulted in a settlement that covered all my medical expenses and lost income. The compassion shown by the entire team during this difficult time was remarkable.",
      outcome: "$750,000 settlement achieved",
      date: "January 2024"
    },
    {
      id: 3,
      name: "Jennifer & Mark Davis",
      title: "Parents",
      caseType: "Family Law & Child Custody",
      image: "https://images.pexels.com/photos/4427503/pexels-photo-4427503.jpeg",
      rating: 5,
      testimonial: "Jennifer Thompson handled our complicated custody case with incredible sensitivity and professionalism. She understood the emotional toll this was taking on our family and worked diligently to protect our children's best interests. Her expertise in family law gave us peace of mind during a very challenging time.",
      outcome: "Favorable custody arrangement secured",
      date: "November 2023"
    },
    {
      id: 4,
      name: "Thomas Williams",
      title: "Property Developer",
      caseType: "Real Estate Law",
      image: "https://images.pexels.com/photos/7971714/pexels-photo-7971714.jpeg",
      rating: 5,
      testimonial: "David Chen's expertise in real estate law was instrumental in closing our largest development project. His thorough understanding of zoning laws and property regulations saved us months of delays. The attention to detail and proactive communication made this complex transaction seamless.",
      outcome: "$50M commercial development approved",
      date: "February 2024"
    },
    {
      id: 5,
      name: "Elizabeth Moore",
      title: "Retiree",
      caseType: "Estate Planning & Probate",
      image: "https://images.pexels.com/photos/9870151/pexels-photo-9870151.jpeg",
      rating: 5,
      testimonial: "Lisa Anderson helped me create a comprehensive estate plan that protects my family's future. Her knowledge of tax law and estate planning strategies saved my heirs significant money. She explained complex legal concepts in simple terms and made sure I understood every decision.",
      outcome: "Complete estate plan protecting $1.2M in assets",
      date: "December 2023"
    },
    {
      id: 6,
      name: "Carlos Martinez",
      title: "Small Business Owner",
      caseType: "Employment Law",
      image: "https://images.pexels.com/photos/7819749/pexels-photo-7819749.jpeg",
      rating: 5,
      testimonial: "When facing a wrongful termination lawsuit, LawFirm Pro defended our small business with skill and integrity. Their employment law expertise and strategic approach led to a favorable resolution. They protected our business reputation while achieving the best possible outcome.",
      outcome: "Case dismissed with minimal settlement",
      date: "October 2023"
    }
  ];

  const stats = [
    { icon: Users, title: "500+", description: "Happy Clients" },
    { icon: Award, title: "98%", description: "Success Rate" },
    { icon: ThumbsUp, title: "4.9/5", description: "Average Rating" },
    { icon: Star, title: "25+", description: "Years of Excellence" }
  ];

  const practiceAreaTestimonials = [
    {
      area: "Family Law",
      count: 12,
      avgRating: 4.9
    },
    {
      area: "Corporate Law", 
      count: 8,
      avgRating: 5.0
    },
    {
      area: "Personal Injury",
      count: 15,
      avgRating: 4.8
    },
    {
      area: "Real Estate Law",
      count: 10,
      avgRating: 4.9
    },
    {
      area: "Estate Planning",
      count: 18,
      avgRating: 5.0
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`w-4 h-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
    ));
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-hero-gradient py-20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white space-y-6 max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              What Our <span className="text-accent">Clients Say</span> About Us
            </h1>
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
              Real Stories. Real Results. Hear from clients who trusted us with their legal matters 
              and discover why LawFirm Pro is the right choice for your legal needs.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Client Satisfaction is Our Priority
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At LawFirm Pro, we believe that building trust through proven results is the foundation 
              of exceptional legal service. These testimonials reflect real client experiences and 
              showcase our unwavering commitment to achieving the best possible outcomes for every 
              case we handle. Your success is our success.
            </p>
          </div>

          {/* Client Statistics */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
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

      {/* Featured Testimonial Slider */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Featured Client Stories
            </h2>
            <p className="text-lg text-muted-foreground">
              Discover how we've helped clients achieve successful outcomes
            </p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            <Card className="shadow-professional overflow-hidden">
              <CardContent className="p-8 lg:p-12">
                <div className="grid lg:grid-cols-3 gap-8 items-center">
                  {/* Client Photo */}
                  <div className="text-center lg:text-left">
                    <div className="w-32 h-32 lg:w-40 lg:h-40 mx-auto lg:mx-0 rounded-full overflow-hidden shadow-elegant mb-4">
                      <img 
                        src={testimonials[currentTestimonial].image} 
                        alt={testimonials[currentTestimonial].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{testimonials[currentTestimonial].name}</h3>
                      <p className="text-muted-foreground">{testimonials[currentTestimonial].title}</p>
                      <Badge variant="secondary" className="mt-2">
                        {testimonials[currentTestimonial].caseType}
                      </Badge>
                    </div>
                  </div>

                  {/* Testimonial Content */}
                  <div className="lg:col-span-2 space-y-6">
                    <div className="flex justify-center lg:justify-start">
                      {renderStars(testimonials[currentTestimonial].rating)}
                    </div>
                    
                    <Quote className="w-8 h-8 text-accent mx-auto lg:mx-0" />
                    
                    <p className="text-lg text-foreground leading-relaxed italic">
                      "{testimonials[currentTestimonial].testimonial}"
                    </p>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 justify-center lg:justify-start">
                        <Award className="w-4 h-4 text-accent" />
                        <span className="text-sm font-medium text-accent">
                          {testimonials[currentTestimonial].outcome}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground text-center lg:text-left">
                        Case completed: {testimonials[currentTestimonial].date}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 shadow-lg"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 shadow-lg"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-accent' : 'bg-muted-foreground/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              More Client Success Stories
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Read what our clients have to say about their experience working with our legal team
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="shadow-elegant hover:shadow-professional transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 mx-auto rounded-full overflow-hidden shadow-lg mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.title}</CardDescription>
                  <Badge variant="outline" className="mx-auto">
                    {testimonial.caseType}
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-center">
                    {renderStars(testimonial.rating)}
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    "{testimonial.testimonial.substring(0, 150)}..."
                  </p>
                  
                  <div className="pt-2 border-t border-border/50">
                    <p className="text-xs font-medium text-accent">
                      {testimonial.outcome}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.date}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Area Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Testimonials by Practice Area
            </h2>
            <p className="text-lg text-muted-foreground">
              See how we excel across all our legal specializations
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {practiceAreaTestimonials.map((area, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{area.area}</h3>
                  <div className="space-y-2">
                    <div className="flex justify-center">
                      {renderStars(Math.floor(area.avgRating))}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {area.avgRating}/5 • {area.count} reviews
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 bg-hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8 text-white">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Ready to Become Our Next Success Story?
            </h2>
            <p className="text-lg sm:text-xl text-white/90">
              Join hundreds of satisfied clients who have trusted LawFirm Pro with their legal matters. 
              Experience the difference that dedicated, experienced legal representation can make. 
              Contact us today for your free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4" asChild>
                <Link to="/free-consultation">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Free Consultation
                </Link>
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

export default Testimonials;
