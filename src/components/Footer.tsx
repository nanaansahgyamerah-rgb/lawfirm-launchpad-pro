import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const practiceAreas = [
    "Family Law",
    "Corporate Law", 
    "Personal Injury",
    "Real Estate Law",
    "Employment Law",
    "Estate Planning"
  ];

  const quickLinks = [
    "About Us",
    "Our Attorneys",
    "Practice Areas",
    "Testimonials",
    "Blog",
    "Contact Us"
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">LawFirm Pro</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Your trusted legal advocates with over 25 years of combined experience. 
              We provide exceptional legal representation with personalized attention.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-accent" />
                <span className="text-sm">123 Legal Street, Law City, LC 12345</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent" />
                <span className="text-sm">(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent" />
                <span className="text-sm">info@lawfirmpro.com</span>
              </div>
            </div>
          </div>

          {/* Practice Areas */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Practice Areas</h4>
            <ul className="space-y-3">
              {practiceAreas.map((area, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {area}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Stay Connected</h4>
            <p className="text-primary-foreground/80 text-sm">
              Subscribe to our newsletter for legal updates and insights.
            </p>
            
            <div className="space-y-3">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 text-sm bg-white/10 border border-white/20 rounded-md text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <Button variant="gold" size="sm">
                  Subscribe
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <h5 className="font-medium">Follow Us</h5>
              <div className="flex gap-3">
                <Button variant="ghost" size="icon" className="hover:bg-white/10 hover:text-accent">
                  <Facebook className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-white/10 hover:text-accent">
                  <Twitter className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-white/10 hover:text-accent">
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-white/10 hover:text-accent">
                  <Instagram className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-white/20" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/80 text-sm">
            © {currentYear} LawFirm Pro. All rights reserved.
          </p>
          
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
              Legal Disclaimer
            </a>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="mt-8 pt-6 border-t border-white/20">
          <p className="text-xs text-primary-foreground/60 leading-relaxed">
            <strong>Attorney Advertising.</strong> This website is designed for general information only. 
            The information presented should not be construed to be formal legal advice nor the formation 
            of a lawyer/client relationship. Prior results do not guarantee a similar outcome.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;