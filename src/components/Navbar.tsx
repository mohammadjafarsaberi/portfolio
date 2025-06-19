import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const NavLinks = [
  { title: "Home", href: "#home" },
  { title: "About", href: "#about" },
  { title: "Projects", href: "#projects" },
  { title: "Contact", href: "#contact" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isOpen ? 'bg-card shadow-lg py-4' : 'py-6 bg-transparent'}`}>
      <div className="container mx-auto flex justify-between items-center px-6">
        <a href="#home" className="text-2xl font-bold font-poppins gradient-text">
          Mohammad Jafar Saberi
        </a>
        <div className="hidden md:flex space-x-6 items-center">
          {NavLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              {link.title}
            </a>
          ))}
          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <a href="#contact">Hire Me</a>
          </Button>
        </div>
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isOpen ? <X className="h-6 w-6 text-primary" /> : <Menu className="h-6 w-6 text-primary" />}
          </Button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-card shadow-lg py-4 animate-accordion-down">
          <div className="flex flex-col items-center space-y-4">
            {NavLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium text-lg"
              >
                {link.title}
              </a>
            ))}
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-3/4">
              <a href="#contact" onClick={() => setIsOpen(false)}>Hire Me</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
