
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-navy-900 to-navy-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-navy-500 to-ocean-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">E</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Exceptional</h3>
                  <p className="text-navy-300 text-sm -mt-1">Cleaning Services</p>
                </div>
              </div>
              <p className="text-navy-300 mb-6 leading-relaxed">
                Nigeria's premier cleaning service provider, delivering exceptional results 
                24/7 across six major cities. Your satisfaction is our guarantee.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-navy-700 hover:bg-ocean-600 rounded-lg flex items-center justify-center transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-navy-700 hover:bg-ocean-600 rounded-lg flex items-center justify-center transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-navy-700 hover:bg-ocean-600 rounded-lg flex items-center justify-center transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-6">Quick Links</h4>
              <nav className="space-y-3">
                <button 
                  onClick={() => scrollToSection('#home')}
                  className="block text-navy-300 hover:text-white transition-colors"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('#about')}
                  className="block text-navy-300 hover:text-white transition-colors"
                >
                  About Us
                </button>
                <button 
                  onClick={() => scrollToSection('#services')}
                  className="block text-navy-300 hover:text-white transition-colors"
                >
                  Our Services
                </button>
                <button 
                  onClick={() => scrollToSection('#areas')}
                  className="block text-navy-300 hover:text-white transition-colors"
                >
                  Service Areas
                </button>
                <button 
                  onClick={() => scrollToSection('#contact')}
                  className="block text-navy-300 hover:text-white transition-colors"
                >
                  Contact Us
                </button>
              </nav>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-bold mb-6">Our Services</h4>
              <ul className="space-y-3">
                <li className="text-navy-300">Residential Cleaning</li>
                <li className="text-navy-300">Commercial Cleaning</li>
                <li className="text-navy-300">Post-Construction</li>
                <li className="text-navy-300">Floor Polishing</li>
                <li className="text-navy-300">Upholstery Cleaning</li>
                <li className="text-navy-300">Fumigation Services</li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold mb-6">Contact Info</h4>
              <div className="space-y-4">
                <a href="tel:09034290772" className="flex items-center space-x-3 text-navy-300 hover:text-white transition-colors">
                  <Phone className="w-5 h-5 text-ocean-400" />
                  <span>09034290772</span>
                </a>
                
                <div className="flex items-center space-x-3 text-navy-300">
                  <Clock className="w-5 h-5 text-ocean-400" />
                  <span>Available 24/7</span>
                </div>
                
                <div className="flex items-start space-x-3 text-navy-300">
                  <MapPin className="w-5 h-5 text-ocean-400 mt-1 flex-shrink-0" />
                  <div>
                    <div>Port Harcourt, Lagos,</div>
                    <div>Delta, Bayelsa, Edo,</div>
                    <div>Akwa Ibom</div>
                  </div>
                </div>
              </div>

              {/* WhatsApp Button */}
              <a 
                href="https://wa.me/2349034290772?text=Hello! I'd like to request a cleaning service quote."
                target="_blank"
                rel="noopener noreferrer" 
                className="inline-flex items-center space-x-2 mt-6 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full transition-colors"
              >
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Service Areas Banner */}
          <div className="mt-12 pt-8 border-t border-navy-700">
            <div className="text-center">
              <h4 className="text-lg font-bold mb-4">Proudly Serving</h4>
              <div className="flex flex-wrap justify-center gap-3">
                {['Port Harcourt', 'Lagos', 'Delta', 'Bayelsa', 'Edo', 'Akwa Ibom'].map((city) => (
                  <span 
                    key={city}
                    className="bg-navy-700 text-navy-200 px-4 py-2 rounded-full text-sm"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-navy-700 flex flex-col md:flex-row justify-between items-center">
            <div className="text-navy-400 text-sm mb-4 md:mb-0">
              © {currentYear} Exceptional Cleaning Services. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="#" className="text-navy-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-navy-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-navy-400 hover:text-white transition-colors">Careers</a>
            </div>
          </div>

          {/* Final CTA */}
          <div className="mt-8 text-center bg-gradient-to-r from-ocean-600 to-navy-600 rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-2">Get an Exceptional Clean Today!</h3>
            <p className="text-navy-200 mb-4">Experience the difference that truly exceptional cleaning makes.</p>
            <a href="tel:09034290772">
              <button className="bg-white text-navy-600 hover:bg-navy-50 font-bold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
                Call Now - 09034290772
              </button>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
