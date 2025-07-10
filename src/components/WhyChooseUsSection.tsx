
import { Clock, Zap, Star, Users, Shield, Award } from 'lucide-react';

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: Clock,
      title: "Available 24/7",
      description: "Round-the-clock service means we're always ready when you need us most",
      highlight: "Emergency cleaning available"
    },
    {
      icon: Zap,
      title: "Lightning Fast Response",
      description: "Quick response times with same-day service availability in most areas",
      highlight: "Average 2-hour response time"
    },
    {
      icon: Star,
      title: "5-Star Rated Service",
      description: "Consistently rated as the top cleaning service with thousands of satisfied customers",
      highlight: "99.8% customer satisfaction"
    },
    {
      icon: Users,
      title: "Trained Professionals",
      description: "All our staff are thoroughly vetted, trained, and certified cleaning specialists",
      highlight: "Background checked & insured"
    },
    {
      icon: Shield,
      title: "Quality Guaranteed",
      description: "100% satisfaction guarantee - if you're not happy, we'll make it right at no extra cost",
      highlight: "Money-back guarantee"
    },
    {
      icon: Award,
      title: "Award-Winning Excellence",
      description: "Recognition as Nigeria's leading cleaning service provider year after year",
      highlight: "Industry leader since 2010"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-navy-50 to-ocean-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              Why Choose <span className="bg-gradient-to-r from-navy-600 to-ocean-600 bg-clip-text text-transparent">Exceptional</span>
            </h2>
            <p className="text-xl text-navy-600 max-w-3xl mx-auto">
              When it comes to cleaning services, we don't just meet expectations – we exceed them. 
              Here's what sets us apart from the competition.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-up border-l-4 border-navy-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-navy-600 to-ocean-600 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-900">{feature.title}</h3>
                </div>
                
                <p className="text-navy-600 mb-4 leading-relaxed">{feature.description}</p>
                
                <div className="bg-gradient-to-r from-navy-50 to-ocean-50 rounded-lg p-3">
                  <span className="text-sm font-semibold text-navy-800">{feature.highlight}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA Section */}
          <div className="mt-16 text-center bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-3xl font-bold text-navy-900 mb-4">
              Experience the Exceptional Difference
            </h3>
            <p className="text-navy-600 mb-6 max-w-2xl mx-auto text-lg">
              Join thousands of satisfied customers who have made the switch to truly exceptional cleaning services. 
              See why we're Nigeria's most trusted cleaning company.
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-navy-900 mb-2">10,000+</div>
                <div className="text-navy-600 font-medium">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-navy-900 mb-2">24/7</div>
                <div className="text-navy-600 font-medium">Service Hours</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-navy-900 mb-2">6</div>
                <div className="text-navy-600 font-medium">Cities Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-navy-900 mb-2">13+</div>
                <div className="text-navy-600 font-medium">Years Experience</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:09034290772" className="inline-block">
                <button className="bg-gradient-to-r from-navy-600 to-ocean-600 hover:from-navy-700 hover:to-ocean-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  Call Now - 09034290772
                </button>
              </a>
              <button 
                className="border-2 border-navy-600 text-navy-600 hover:bg-navy-600 hover:text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105"
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get Free Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
