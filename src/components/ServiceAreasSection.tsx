
import { MapPin, Clock, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServiceAreasSection = () => {
  const serviceAreas = [
    {
      city: "Port Harcourt",
      state: "Rivers State",
      description: "Our main hub serving the Garden City and surrounding areas",
      highlights: ["Oil & Gas offices", "Residential estates", "Hotels & hospitality"]
    },
    {
      city: "Lagos",
      state: "Lagos State",
      description: "Comprehensive cleaning services across Lagos metropolis",
      highlights: ["Corporate offices", "Shopping malls", "Luxury residences"]
    },
    {
      city: "Delta",
      state: "Delta State",
      description: "Professional cleaning services throughout Delta State",
      highlights: ["Industrial facilities", "Government offices", "Private homes"]
    },
    {
      city: "Bayelsa",
      state: "Bayelsa State",
      description: "Reliable cleaning solutions across Bayelsa State",
      highlights: ["Office complexes", "Educational institutions", "Residential areas"]
    },
    {
      city: "Edo",
      state: "Edo State",
      description: "Quality cleaning services in Benin City and beyond",
      highlights: ["Medical facilities", "Hotels", "Commercial spaces"]
    },
    {
      city: "Akwa Ibom",
      state: "Akwa Ibom State",
      description: "Professional cleaning throughout Akwa Ibom State",
      highlights: ["Corporate buildings", "Hospitality sector", "Residential estates"]
    }
  ];

  return (
    <section id="areas" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              Service <span className="bg-gradient-to-r from-navy-600 to-ocean-600 bg-clip-text text-transparent">Areas</span>
            </h2>
            <p className="text-xl text-navy-600 max-w-3xl mx-auto">
              We proudly serve six major cities across Nigeria, bringing exceptional cleaning services 
              right to your doorstep, 24 hours a day, 7 days a week.
            </p>
          </div>

          {/* Areas Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {serviceAreas.map((area, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-navy-50 to-ocean-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start space-x-3 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-navy-600 to-ocean-600 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy-900">{area.city}</h3>
                    <p className="text-navy-600 text-sm">{area.state}</p>
                  </div>
                </div>
                
                <p className="text-navy-600 mb-4">{area.description}</p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-navy-800 text-sm">Specializing in:</h4>
                  <ul className="space-y-1">
                    {area.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-center space-x-2 text-navy-600 text-sm">
                        <div className="w-1.5 h-1.5 bg-ocean-500 rounded-full"></div>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Coverage Information */}
          <div className="bg-gradient-to-r from-navy-600 to-ocean-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Expanding Our Reach</h3>
            <p className="text-navy-100 mb-6 max-w-3xl mx-auto">
              While we currently serve these six major cities, we're constantly expanding our coverage area. 
              Don't see your location? Contact us to check if we can accommodate your cleaning needs.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Clock className="w-6 h-6 text-ocean-200" />
                <div className="text-left">
                  <div className="font-bold">24/7 Service</div>
                  <div className="text-sm text-navy-100">Always available</div>
                </div>
              </div>
              
              <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Phone className="w-6 h-6 text-ocean-200" />
                <div className="text-left">
                  <div className="font-bold">Quick Response</div>
                  <div className="text-sm text-navy-100">Same day service</div>
                </div>
              </div>
              
              <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <MapPin className="w-6 h-6 text-ocean-200" />
                <div className="text-left">
                  <div className="font-bold">Local Teams</div>
                  <div className="text-sm text-navy-100">In every city</div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a href="tel:09034290772">
                <Button 
                  size="lg"
                  className="bg-white text-navy-600 hover:bg-navy-50 px-8 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300"
                >
                  Call 09034290772 to Check Coverage
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreasSection;
