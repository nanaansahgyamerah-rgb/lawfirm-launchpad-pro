import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MapPin } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Practice Areas", href: "/practice-areas" },
    { name: "Attorneys", href: "/attorneys" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-background shadow-elegant sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-2 lg:gap-4">
            <div className="flex items-center gap-1">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">(555) 123-4567</span>
              <span className="sm:hidden">Call Us</span>
            </div>
            <div className="flex items-center gap-1 hidden lg:flex">
              <MapPin className="w-4 h-4" />
              <span>123 Legal Street, Law City, LC 12345</span>
            </div>
          </div>
          <div className="text-sm hidden lg:block">Free Consultation Available</div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl sm:text-2xl font-bold text-primary">LawFirm Pro</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium text-sm xl:text-base"
              >
                {item.name}
              </a>
            ))}
            <Button variant="hero" size="default" className="xl:px-6">
              Free Consultation
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button variant="hero" size="default" className="self-start w-full sm:w-auto">
                Free Consultation
              </Button>
              
              {/* Mobile contact info */}
              <div className="pt-4 border-t border-border/50 space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>123 Legal Street, Law City, LC 12345</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
