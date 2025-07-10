
import { Card, CardContent } from '@/components/ui/card';
import { Home, Building2, Wrench, Car, Sparkles, ShieldCheck } from 'lucide-react';

const ServiceImages = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Cleaning",
      description: "Complete home cleaning services for apartments, houses, and condos",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=500&q=80"
    },
    {
      icon: Building2,
      title: "Office Cleaning",
      description: "Professional office and commercial space cleaning services",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=500&q=80"
    },
    {
      icon: Wrench,
      title: "Post-Construction",
      description: "Specialized cleaning after construction or renovation projects",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=500&q=80"
    },
    {
      icon: Car,
      title: "Vehicle Cleaning",
      description: "Professional car washing and detailing services",
      image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=500&q=80"
    },
    {
      icon: Sparkles,
      title: "Deep Cleaning",
      description: "Thorough deep cleaning for all types of spaces",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=500&q=80"
    },
    {
      icon: ShieldCheck,
      title: "Sanitization",
      description: "Professional sanitization and disinfection services",
      image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Our Professional Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From residential homes to commercial spaces, we provide comprehensive cleaning solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden">
              <div className="relative">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                  <div className="bg-white/90 p-2 rounded-full">
                    <service.icon className="w-5 h-5 text-navy-600" />
                  </div>
                  <h3 className="text-white font-bold text-lg">{service.title}</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceImages;
