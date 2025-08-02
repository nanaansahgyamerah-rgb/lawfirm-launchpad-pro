import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "David Thompson",
    role: "Business Owner",
    content: "LawFirm Pro helped me navigate a complex business acquisition. Their expertise and attention to detail saved me time and money. I couldn't be happier with the outcome.",
    rating: 5,
    case: "Corporate Law"
  },
  {
    name: "Maria Gonzalez", 
    role: "Mother of Two",
    content: "During my difficult divorce, Sarah Mitchell provided compassionate guidance while fighting tirelessly for my children's best interests. Her professionalism was outstanding.",
    rating: 5,
    case: "Family Law"
  },
  {
    name: "Robert Kim",
    role: "Accident Victim",
    content: "After my car accident, Michael Rodriguez secured a settlement that exceeded my expectations. His dedication and expertise made all the difference in my recovery.",
    rating: 5,
    case: "Personal Injury"
  },
  {
    name: "Jennifer Walsh",
    role: "Homeowner",
    content: "The estate planning services were comprehensive and well-explained. Jennifer Chen made sure every detail was covered, giving me peace of mind for my family's future.",
    rating: 5,
    case: "Estate Planning"
  },
  {
    name: "Thomas Anderson",
    role: "Real Estate Investor",
    content: "Their real estate law expertise helped me close multiple property deals smoothly. Professional, knowledgeable, and always available when I needed them.",
    rating: 5,
    case: "Real Estate Law"
  },
  {
    name: "Lisa Brown",
    role: "Employee Rights",
    content: "When I faced workplace discrimination, they stood by me every step of the way. Their employment law expertise led to a favorable resolution and justice.",
    rating: 5,
    case: "Employment Law"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Client Success Stories
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients say about 
            their experience working with our legal team.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-professional transition-all duration-300 hover:-translate-y-1 bg-background">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start justify-between mb-4">
                  <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-accent/60" />
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
                
                <blockquote className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="border-t pt-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-foreground text-sm sm:text-base">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded">
                        {testimonial.case}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Overall Rating */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center bg-background rounded-lg p-4 sm:p-6 shadow-elegant">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">4.9/5</div>
              <div className="flex gap-1 justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">Based on 150+ client reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;