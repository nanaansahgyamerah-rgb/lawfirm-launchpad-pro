import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  MessageCircle,
  Calendar,
  Shield,
  CheckCircle
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    caseType: "",
    message: "",
    contactMethod: "email",
    consultationDate: "",
    consultationTime: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You would typically send this data to your backend
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Office Address",
      details: "123 Legal Street, Law City, LC 12345",
      link: "https://maps.google.com/?q=123+Legal+Street,+Law+City,+LC+12345",
      linkText: "View on Google Maps"
    },
    {
      icon: Phone,
      title: "Phone Number",
      details: "(555) 123-4567",
      link: "tel:+15551234567",
      linkText: "Click to Call"
    },
    {
      icon: Mail,
      title: "Email Address",
      details: "info@lawfirmpro.com",
      link: "mailto:info@lawfirmpro.com",
      linkText: "Send Email"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: "Monday – Friday\n9:00 AM – 5:00 PM",
      link: null,
      linkText: null
    }
  ];

  const caseTypes = [
    "Family Law",
    "Corporate Law", 
    "Criminal Defense",
    "Personal Injury",
    "Real Estate Law",
    "Estate Planning",
    "Employment Law",
    "Business Litigation",
    "Immigration Law",
    "Other"
  ];

  const timeSlots = [
    "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
    "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-hero-gradient py-20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white space-y-6 max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              Get in <span className="text-accent">Touch</span> with Us
            </h1>
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
              Have a legal matter you need assistance with? Our experienced attorneys are here to help. 
              Contact us today to schedule a confidential consultation and discover how we can protect 
              your rights and interests.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  Schedule Your Legal Consultation Today
                </h2>
                <p className="text-lg text-muted-foreground">
                  Fill out the form below and our legal team will get back to you within 24 hours 
                  to discuss your case and schedule your consultation.
                </p>
              </div>

              <Card className="shadow-professional">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-accent" />
                    Request Consultation
                  </CardTitle>
                  <CardDescription>
                    All information is confidential and secure
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
                        placeholder="Your full name"
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
                      <Label htmlFor="caseType">Subject / Case Type *</Label>
                      <Select onValueChange={(value) => handleInputChange("caseType", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select the type of legal matter" />
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

                    {/* Message */}
                    <div className="space-y-2">
                      <Label htmlFor="message">Brief Description of Legal Issue *</Label>
                      <Textarea
                        id="message"
                        placeholder="Please provide a brief description of your legal matter. Include any relevant details that would help us understand your situation."
                        className="min-h-[120px]"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        required
                      />
                    </div>

                    {/* Preferred Contact Method */}
                    <div className="space-y-3">
                      <Label>Preferred Contact Method *</Label>
                      <RadioGroup
                        value={formData.contactMethod}
                        onValueChange={(value) => handleInputChange("contactMethod", value)}
                        className="flex flex-row gap-6"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="email" id="email-contact" />
                          <Label htmlFor="email-contact">Email</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="phone" id="phone-contact" />
                          <Label htmlFor="phone-contact">Phone</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    {/* Consultation Date and Time */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="consultationDate">Preferred Date (Optional)</Label>
                        <Input
                          id="consultationDate"
                          type="date"
                          value={formData.consultationDate}
                          onChange={(e) => handleInputChange("consultationDate", e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="consultationTime">Preferred Time (Optional)</Label>
                        <Select onValueChange={(value) => handleInputChange("consultationTime", value)}>
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

                    {/* Submit Button */}
                    <Button type="submit" className="w-full" size="lg">
                      <Send className="w-5 h-5 mr-2" />
                      Request Consultation
                    </Button>

                    {/* Privacy Note */}
                    <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                      <Shield className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">
                        We respect your privacy. All information shared with us is confidential and secure. 
                        By submitting this form, you agree to our privacy policy and terms of service.
                      </p>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  We're Ready to Listen
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Our office is conveniently located and our team is available to assist you 
                  with your legal needs. Reach out to us through any of the methods below.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="shadow-elegant hover:shadow-professional transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-6 h-6 text-accent" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-foreground mb-2">{info.title}</h3>
                          <p className="text-muted-foreground whitespace-pre-line mb-3">{info.details}</p>
                          {info.link && (
                            <a 
                              href={info.link}
                              className="inline-flex items-center text-accent hover:text-accent/80 transition-colors text-sm font-medium"
                              target={info.title === "Office Address" ? "_blank" : undefined}
                              rel={info.title === "Office Address" ? "noopener noreferrer" : undefined}
                            >
                              {info.linkText}
                              {info.title === "Office Address" && (
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                              )}
                            </a>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Quick Contact Options */}
              <Card className="shadow-professional bg-accent/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageCircle className="w-5 h-5 text-accent" />
                    Quick Contact Options
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Button variant="outline" className="w-full" asChild>
                      <a href="tel:+15551234567">
                        <Phone className="w-4 h-4 mr-2" />
                        Call Now
                      </a>
                    </Button>
                    <Button variant="outline" className="w-full" asChild>
                      <a href="mailto:info@lawfirmpro.com">
                        <Mail className="w-4 h-4 mr-2" />
                        Send Email
                      </a>
                    </Button>
                  </div>
                  <div className="text-center pt-4 border-t border-border/50">
                    <p className="text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 inline mr-1 text-accent" />
                      Available for emergency consultations
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Visit Our Office
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our office is conveniently located in the heart of Law City. 
              We offer free parking and easy access for all our clients.
            </p>
          </div>

          <Card className="shadow-professional overflow-hidden">
            <div className="aspect-video bg-muted/50 relative">
              {/* Google Maps Embed - Replace with your actual location */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1!2d-74.0060!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjEiTiA3NMKwMDAnMjEuNiJX!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="LawFirm Pro Office Location"
                className="absolute inset-0"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 text-center shadow-lg">
                  <MapPin className="w-8 h-8 text-accent mx-auto mb-2" />
                  <h3 className="text-lg font-semibold text-foreground mb-1">LawFirm Pro</h3>
                  <p className="text-sm text-muted-foreground">123 Legal Street, Law City, LC 12345</p>
                  <Button variant="outline" size="sm" className="mt-3" asChild>
                    <a 
                      href="https://maps.google.com/?q=123+Legal+Street,+Law+City,+LC+12345"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Directions
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8 text-white">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Ready to Get Started?
            </h2>
            <p className="text-lg sm:text-xl text-white/90">
              Don't wait to protect your rights. Our experienced legal team is standing by 
              to provide you with the guidance and representation you need. Contact us today 
              for your free, confidential consultation.
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
              <div className="grid sm:grid-cols-3 gap-4 text-white/80 text-sm">
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  Free initial consultation
                </div>
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  No obligation
                </div>
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  Confidential discussion
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
