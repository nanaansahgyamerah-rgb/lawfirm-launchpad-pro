import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  Phone, 
  Video, 
  MapPin, 
  Send,
  CheckCircle,
  Clock,
  Users,
  Shield,
  Award,
  Star,
  MessageCircle,
  Timer,
  Quote
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

const FreeConsultation = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    caseType: "",
    consultationMethod: "phone",
    preferredDate: "",
    preferredTime: "",
    legalIssue: ""
  });

  const [timeRemaining, setTimeRemaining] = useState({
    days: 2,
    hours: 14,
    minutes: 23
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Free consultation request:", formData);
    // Handle form submission
  };

  const caseTypes = [
    "Family Law & Divorce",
    "Personal Injury",
    "Criminal Defense", 
    "Corporate Law",
    "Real Estate Law",
    "Estate Planning",
    "Employment Law",
    "Business Litigation",
    "Immigration Law",
    "Other Legal Matter"
  ];

  const timeSlots = [
    "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
    "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM"
  ];

  const processSteps = [
    {
      number: "01",
      title: "Submit Your Request",
      description: "Fill out our simple form with your contact details and brief description of your legal matter.",
      icon: Send
    },
    {
      number: "02", 
      title: "Our Team Will Contact You",
      description: "We'll reach out within 2 hours to schedule your consultation at a time that works for you.",
      icon: Phone
    },
    {
      number: "03",
      title: "Meet with an Attorney",
      description: "Discuss your legal issue with an experienced attorney and get expert guidance on your options.",
      icon: Users
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "Proven Track Record",
      description: "Over 500 successful cases with a 98% client satisfaction rate"
    },
    {
      icon: Shield,
      title: "Confidential & Compassionate",
      description: "All consultations are completely confidential with personalized attention"
    },
    {
      icon: Clock,
      title: "Fast Response Time",
      description: "We respond to consultation requests within 2 hours during business hours"
    },
    {
      icon: Users,
      title: "Decades of Experience",
      description: "Combined 100+ years of legal expertise across all practice areas"
    }
  ];

  const testimonialSnippets = [
    {
      text: "The initial consultation was thorough and gave me the confidence I needed to proceed.",
      author: "Sarah M.",
      caseType: "Family Law"
    },
    {
      text: "They explained everything clearly and made me feel comfortable from the very first meeting.",
      author: "Robert K.",
      caseType: "Personal Injury"
    },
    {
      text: "Professional, knowledgeable, and truly cared about my situation.",
      author: "Maria L.",
      caseType: "Estate Planning"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-hero-gradient py-20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white space-y-6 max-w-4xl mx-auto">
            <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30 mb-4">
              Limited Slots Available This Week
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Schedule a <span className="text-accent">Free Legal</span> Consultation
            </h1>
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
              Facing a legal issue? Get the clarity you need with a free, no-obligation consultation. 
              Our experienced attorneys will listen, evaluate your case, and guide you on the best 
              course of action. Take the first step towards resolving your legal matter—at no cost.
            </p>
            
            {/* Urgency Timer */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-md mx-auto">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Timer className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">Book within:</span>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-accent">{timeRemaining.days}</div>
                  <div className="text-xs text-white/80">Days</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent">{timeRemaining.hours}</div>
                  <div className="text-xs text-white/80">Hours</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent">{timeRemaining.minutes}</div>
                  <div className="text-xs text-white/80">Minutes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Consultation Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  Your First Step to Legal Clarity—At No Cost
                </h2>
                <p className="text-lg text-muted-foreground">
                  Complete the form below and our legal team will contact you within 2 hours 
                  to schedule your free consultation. All information is completely confidential.
                </p>
              </div>

              <Card className="shadow-professional" id="consultation-form">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-accent" />
                    Request Free Consultation
                  </CardTitle>
                  <CardDescription>
                    No fees. No obligations. Confidential discussion.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Full Name */}
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange("fullName", e.target.value)}
                        required
                      />
                    </div>

                    {/* Email and Phone */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="(555) 123-4567"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    {/* Case Type */}
                    <div className="space-y-2">
                      <Label htmlFor="caseType">Case Type / Legal Concern *</Label>
                      <Select onValueChange={(value) => handleInputChange("caseType", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your legal matter" />
                        </SelectTrigger>
                        <SelectContent>
                          {caseTypes.map((type) => (
                            <SelectItem key={type} value={type.toLowerCase().replace(/\s+/g, '-')}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Consultation Method */}
                    <div className="space-y-3">
                      <Label>Preferred Consultation Method *</Label>
                      <RadioGroup
                        value={formData.consultationMethod}
                        onValueChange={(value) => handleInputChange("consultationMethod", value)}
                        className="grid grid-cols-1 sm:grid-cols-3 gap-4"
                      >
                        <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                          <RadioGroupItem value="phone" id="phone-consult" />
                          <Label htmlFor="phone-consult" className="flex items-center gap-2 cursor-pointer">
                            <Phone className="w-4 h-4" />
                            Phone Call
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                          <RadioGroupItem value="video" id="video-consult" />
                          <Label htmlFor="video-consult" className="flex items-center gap-2 cursor-pointer">
                            <Video className="w-4 h-4" />
                            Virtual Meeting
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                          <RadioGroupItem value="in-person" id="in-person-consult" />
                          <Label htmlFor="in-person-consult" className="flex items-center gap-2 cursor-pointer">
                            <MapPin className="w-4 h-4" />
                            In-Person
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    {/* Date and Time */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="preferredDate">Preferred Date *</Label>
                        <Input
                          id="preferredDate"
                          type="date"
                          value={formData.preferredDate}
                          onChange={(e) => handleInputChange("preferredDate", e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="preferredTime">Preferred Time *</Label>
                        <Select onValueChange={(value) => handleInputChange("preferredTime", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            {timeSlots.map((time) => (
                              <SelectItem key={time} value={time}>
                                {time}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Legal Issue Description */}
                    <div className="space-y-2">
                      <Label htmlFor="legalIssue">Brief Description of Legal Issue *</Label>
                      <Textarea
                        id="legalIssue"
                        placeholder="Please provide a brief overview of your legal matter. What challenges are you facing? What outcome are you hoping to achieve?"
                        className="min-h-[120px]"
                        value={formData.legalIssue}
                        onChange={(e) => handleInputChange("legalIssue", e.target.value)}
                        required
                      />
                    </div>

                    {/* Submit Button */}
                    <Button type="submit" className="w-full" size="lg">
                      <Send className="w-5 h-5 mr-2" />
                      Request Free Consultation
                    </Button>

                    {/* Privacy Note */}
                    <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                      <Shield className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <div className="space-y-1">
                        <p className="text-sm font-medium text-foreground">
                          100% Confidential & Secure
                        </p>
                        <p className="text-xs text-muted-foreground">
                          All information shared is protected by attorney-client privilege. 
                          We respect your privacy and will never share your details.
                        </p>
                      </div>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* How It Works & Why Choose Us */}
            <div className="space-y-8">
              {/* How It Works */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">How It Works</h2>
                <div className="space-y-6">
                  {processSteps.map((step, index) => (
                    <Card key={index} className="shadow-elegant border-l-4 border-l-accent">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <step.icon className="w-6 h-6 text-accent" />
                          </div>
                          <div>
                            <div className="flex items-center gap-3 mb-2">
                              <span className="text-2xl font-bold text-accent">{step.number}</span>
                              <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                            </div>
                            <p className="text-muted-foreground">{step.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Why Choose Us */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Why Choose LawFirm Pro</h2>
                <div className="grid gap-4">
                  {whyChooseUs.map((reason, index) => (
                    <Card key={index} className="shadow-elegant hover:shadow-professional transition-all duration-300">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <reason.icon className="w-5 h-5 text-accent" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground mb-1">{reason.title}</h3>
                            <p className="text-sm text-muted-foreground">{reason.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Client Testimonials */}
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4">First Consultation Experiences</h3>
                <div className="space-y-4">
                  {testimonialSnippets.map((testimonial, index) => (
                    <Card key={index} className="shadow-elegant">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <Quote className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                          <div>
                            <p className="text-sm text-muted-foreground italic mb-2">
                              "{testimonial.text}"
                            </p>
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-medium text-foreground">{testimonial.author}</span>
                              <Badge variant="outline" className="text-xs">{testimonial.caseType}</Badge>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
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
              Take the First Step Towards Resolving Your Legal Matter
            </h2>
            <p className="text-lg sm:text-xl text-white/90">
              Don't let legal uncertainty hold you back. Our experienced attorneys are ready to 
              provide you with the guidance and clarity you need. Book your free consultation 
              today and discover how we can help protect your rights and interests.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-4 text-center mb-8">
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span className="text-sm">No fees or obligations</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span className="text-sm">Completely confidential</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span className="text-sm">Expert legal guidance</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="hero" 
                size="lg" 
                className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
                onClick={() => document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Free Consultation Now
              </Button>
              <Button variant="outline" size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 border-white text-white hover:bg-white hover:text-primary" asChild>
                <a href="tel:+15551234567">
                  <Phone className="w-5 h-5 mr-2" />
                  Call (555) 123-4567
                </a>
              </Button>
            </div>
            
            <p className="text-white/80 text-sm">
              Available Monday - Friday, 9:00 AM - 5:00 PM | Emergency consultations available
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FreeConsultation;
