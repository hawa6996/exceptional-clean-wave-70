
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Home, Building, HardHat, Sparkles, Sofa, Shield } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Cleaning",
      description: "Complete home cleaning services including kitchens, bathrooms, bedrooms, and living areas.",
      features: ["Deep cleaning", "Regular maintenance", "Move-in/move-out", "One-time service"],
      price: "From ₦15,000"
    },
    {
      icon: Building,
      title: "Office & Commercial",
      description: "Professional cleaning for offices, retail spaces, and commercial buildings.",
      features: ["Daily office cleaning", "Carpet cleaning", "Window washing", "Sanitization"],
      price: "From ₦25,000"
    },
    {
      icon: HardHat,
      title: "Post-Construction",
      description: "Specialized cleaning after construction or renovation projects.",
      features: ["Debris removal", "Dust elimination", "Deep sanitizing", "Final touch-ups"],
      price: "From ₦35,000"
    },
    {
      icon: Sparkles,
      title: "Floor Polishing",
      description: "Professional floor care including polishing, waxing, and maintenance.",
      features: ["Marble polishing", "Tile cleaning", "Wood floor care", "Anti-slip treatment"],
      price: "From ₦20,000"
    },
    {
      icon: Sofa,
      title: "Upholstery & Sofa",
      description: "Deep cleaning and stain removal for furniture and upholstery.",
      features: ["Stain removal", "Odor elimination", "Fabric protection", "Color restoration"],
      price: "From ₦12,000"
    },
    {
      icon: Shield,
      title: "Fumigation & Disinfection",
      description: "Complete pest control and disinfection services for health and safety.",
      features: ["Pest elimination", "Virus disinfection", "Preventive treatment", "Safe chemicals"],
      price: "From ₦18,000"
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-navy-50 to-ocean-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              Our <span className="bg-gradient-to-r from-navy-600 to-ocean-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-navy-600 max-w-3xl mx-auto">
              Comprehensive cleaning solutions tailored to meet your specific needs. 
              From residential homes to commercial spaces, we've got you covered.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="bg-white hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-navy-600 to-ocean-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-navy-900">{service.title}</CardTitle>
                  <CardDescription className="text-navy-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-navy-600">
                        <div className="w-1.5 h-1.5 bg-ocean-500 rounded-full"></div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-navy-900">{service.price}</span>
                      <Button 
                        size="sm"
                        className="bg-gradient-to-r from-navy-600 to-ocean-600 hover:from-navy-700 hover:to-ocean-700 text-white rounded-full"
                        onClick={scrollToContact}
                      >
                        Book Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Custom Service CTA */}
          <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-navy-900 mb-4">
              Don't See What You Need?
            </h3>
            <p className="text-navy-600 mb-6 max-w-2xl mx-auto">
              We offer custom cleaning solutions tailored to your specific requirements. 
              Contact us to discuss your unique cleaning needs and get a personalized quote.
            </p>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-navy-600 to-ocean-600 hover:from-navy-700 hover:to-ocean-700 text-white px-8 py-3 rounded-full font-semibold"
              onClick={scrollToContact}
            >
              Request Custom Service
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
