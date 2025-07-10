
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Areas', href: '#areas' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-navy-500 to-ocean-500 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">E</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-navy-900">Exceptional</h1>
              <p className="text-sm text-navy-600 -mt-1">Cleaning Services</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-navy-700 hover:text-navy-900 font-medium transition-colors duration-200 hover:scale-105"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Call Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="tel:09034290772"
              className="flex items-center space-x-2 text-navy-700 hover:text-navy-900 transition-colors"
            >
              <Phone size={16} />
              <span className="font-semibold">09034290772</span>
            </a>
            <Button 
              className="bg-gradient-to-r from-navy-600 to-ocean-600 hover:from-navy-700 hover:to-ocean-700 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection('#contact')}
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-navy-700 hover:text-navy-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-navy-200">
            <nav className="flex flex-col space-y-4 mt-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-navy-700 hover:text-navy-900 font-medium text-left"
                >
                  {item.name}
                </button>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-navy-200">
                <a 
                  href="tel:09034290772"
                  className="flex items-center space-x-2 text-navy-700 hover:text-navy-900"
                >
                  <Phone size={16} />
                  <span className="font-semibold">09034290772</span>
                </a>
                <Button 
                  className="bg-gradient-to-r from-navy-600 to-ocean-600 hover:from-navy-700 hover:to-ocean-700 text-white rounded-full font-semibold w-full"
                  onClick={() => scrollToSection('#contact')}
                >
                  Get Quote
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
