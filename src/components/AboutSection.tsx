
import { Badge, Shield, Users, Award } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Trusted & Insured",
      description: "Fully licensed and insured for your peace of mind"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Highly trained professionals with years of experience"
    },
    {
      icon: Badge,
      title: "Quality Guaranteed",
      description: "100% satisfaction guarantee on all our services"
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized as Nigeria's premier cleaning service"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              Why We're <span className="bg-gradient-to-r from-navy-600 to-ocean-600 bg-clip-text text-transparent">Exceptional</span>
            </h2>
            <p className="text-xl text-navy-600 max-w-3xl mx-auto">
              For over a decade, we've been setting the standard for professional cleaning services across Nigeria. 
              Our commitment to excellence, attention to detail, and customer satisfaction has made us the trusted choice 
              for thousands of homes and businesses.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="animate-slide-up">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-navy-900 mb-4">
                  Our Story of Excellence
                </h3>
                <p className="text-navy-600 leading-relaxed mb-6">
                  Founded with a simple mission: to provide exceptional cleaning services that exceed expectations. 
                  We understand that a clean environment is essential for health, productivity, and peace of mind.
                </p>
                <p className="text-navy-600 leading-relaxed mb-6">
                  Our team of dedicated professionals uses state-of-the-art equipment, eco-friendly products, 
                  and proven techniques to deliver results that speak for themselves. From residential homes to 
                  commercial offices, we treat every space with the care and attention it deserves.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-gradient-to-br from-navy-50 to-ocean-50 rounded-xl">
                  <div className="text-3xl font-bold text-navy-900 mb-2">10,000+</div>
                  <div className="text-navy-600 font-medium">Happy Customers</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-navy-50 to-ocean-50 rounded-xl">
                  <div className="text-3xl font-bold text-navy-900 mb-2">24/7</div>
                  <div className="text-navy-600 font-medium">Service Available</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-navy-50 to-ocean-50 rounded-xl">
                  <div className="text-3xl font-bold text-navy-900 mb-2">6</div>
                  <div className="text-navy-600 font-medium">Major Cities</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-navy-50 to-ocean-50 rounded-xl">
                  <div className="text-3xl font-bold text-navy-900 mb-2">100%</div>
                  <div className="text-navy-600 font-medium">Satisfaction Rate</div>
                </div>
              </div>
            </div>

            {/* Right Content - Features */}
            <div className="animate-scale-in">
              <div className="grid gap-6">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-start space-x-4 p-6 bg-gradient-to-r from-white to-navy-50 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-navy-600 to-ocean-600 rounded-xl flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-navy-900 mb-2">{feature.title}</h4>
                      <p className="text-navy-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mt-16 text-center">
            <h3 className="text-3xl font-bold text-navy-900 mb-8">Our Core Values</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-gradient-to-br from-navy-50 to-ocean-50 rounded-xl">
                <h4 className="text-xl font-bold text-navy-900 mb-3">Excellence</h4>
                <p className="text-navy-600">We strive for perfection in every detail, ensuring exceptional results every time.</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-navy-50 to-ocean-50 rounded-xl">
                <h4 className="text-xl font-bold text-navy-900 mb-3">Reliability</h4>
                <p className="text-navy-600">Count on us to be there when you need us, 24 hours a day, 7 days a week.</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-navy-50 to-ocean-50 rounded-xl">
                <h4 className="text-xl font-bold text-navy-900 mb-3">Integrity</h4>
                <p className="text-navy-600">Honest, transparent service with respect for your property and privacy.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
