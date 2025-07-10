
import { Button } from '@/components/ui/button';
import { Star, Clock, Phone } from 'lucide-react';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/b3aac4c9-781e-475a-ad7a-4848bc66837f.png" 
          alt="Professional cleaning service" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-900/70"></div>
      </div>
      
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-ocean-200/20 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-navy-200/20 rounded-full opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-20 w-16 h-16 bg-ocean-300/20 rounded-full opacity-40 animate-pulse delay-500"></div>
        <div className="absolute bottom-40 right-10 w-24 h-24 bg-navy-300/20 rounded-full opacity-30 animate-pulse delay-1500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-lg">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-navy-800 font-semibold">Rated #1 Cleaning Service</span>
          </div>

          {/* Main Headlines */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            We Don't Just Clean —{' '}
            <span className="bg-gradient-to-r from-ocean-400 to-ocean-300 bg-clip-text text-transparent">
              We Make It Exceptional
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            24/7 Professional Cleaning Services Across Nigeria's Major Cities. 
            Experience the difference of truly exceptional cleaning.
          </p>

          {/* Service Highlights */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2">
              <Clock className="w-5 h-5 text-navy-600" />
              <span className="text-navy-800 font-medium">24/7 Available</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                <span className="w-2 h-2 bg-white rounded-full"></span>
              </span>
              <span className="text-navy-800 font-medium">Eco-Friendly</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="text-navy-600 font-bold">6</span>
              <span className="text-navy-800 font-medium">Cities Covered</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="tel:09034290772">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-navy-600 to-ocean-600 hover:from-navy-700 hover:to-ocean-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now - 09034290772</span>
              </Button>
            </a>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-navy-600 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 bg-white/10 backdrop-blur-sm"
              onClick={scrollToContact}
            >
              Get Free Quote
            </Button>
          </div>

          {/* Service Areas Quick List */}
          <div className="mt-12 animate-slide-up">
            <p className="text-gray-200 mb-4 font-medium">Serving these major cities:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Port Harcourt', 'Lagos', 'Delta', 'Bayelsa', 'Edo', 'Akwa Ibom'].map((city) => (
                <span 
                  key={city}
                  className="bg-gradient-to-r from-navy-500/80 to-ocean-500/80 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  {city}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
