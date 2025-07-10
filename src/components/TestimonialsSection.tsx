
import { Star, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Mrs. Adebayo Olumide",
      location: "Victoria Island, Lagos",
      rating: 5,
      text: "Exceptional Cleaning Services truly lives up to their name! They transformed our office space completely. The attention to detail is remarkable - every corner was spotless. Their 24/7 availability saved us when we had an emergency cleaning before a major client visit. Highly recommended!",
      service: "Commercial Office Cleaning"
    },
    {
      name: "Chief Emeka Okafor",
      location: "GRA, Port Harcourt",
      rating: 5,
      text: "I've used several cleaning services over the years, but none compare to Exceptional. Their team is professional, reliable, and thorough. They cleaned our home after renovation and it looked better than when it was first built. The eco-friendly products they use are a huge plus for our family.",
      service: "Post-Construction Cleaning"
    },
    {
      name: "Dr. Sarah Akpan",
      location: "Uyo, Akwa Ibom",
      rating: 5,
      text: "As a medical professional, cleanliness is paramount. Exceptional Cleaning Services understands this perfectly. They maintain our clinic to the highest standards with their disinfection services. Their staff is well-trained and always punctual. Worth every naira spent!",
      service: "Medical Facility Cleaning"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-r from-navy-600 to-ocean-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Our <span className="text-ocean-200">Clients Say</span>
            </h2>
            <p className="text-xl text-navy-100 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied customers have to say 
              about our exceptional cleaning services.
            </p>
          </div>

          {/* Main Testimonial Display */}
          <div className="relative mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 text-center">
              <Quote className="w-16 h-16 text-ocean-200 mx-auto mb-6 opacity-50" />
              
              <div className="mb-6">
                <div className="flex justify-center space-x-1 mb-4">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-lg md:text-xl leading-relaxed text-navy-50 max-w-4xl mx-auto">
                  "{testimonials[activeTestimonial].text}"
                </blockquote>
              </div>

              <div className="border-t border-white/20 pt-6">
                <div className="font-bold text-xl text-white mb-1">
                  {testimonials[activeTestimonial].name}
                </div>
                <div className="text-navy-200 mb-2">
                  {testimonials[activeTestimonial].location}
                </div>
                <div className="text-sm text-ocean-200 bg-white/10 rounded-full px-4 py-1 inline-block">
                  {testimonials[activeTestimonial].service}
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center space-x-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeTestimonial 
                      ? 'bg-ocean-200 scale-125' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* All Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 transition-all duration-300 hover:bg-white/10 cursor-pointer animate-slide-up ${
                  index === activeTestimonial ? 'ring-2 ring-ocean-200' : ''
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
                onClick={() => setActiveTestimonial(index)}
              >
                <div className="flex justify-center space-x-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-navy-100 text-sm mb-4 line-clamp-3">
                  "{testimonial.text.substring(0, 120)}..."
                </p>
                
                <div className="border-t border-white/20 pt-3">
                  <div className="font-semibold text-white text-sm">{testimonial.name}</div>
                  <div className="text-navy-200 text-xs">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-ocean-200 mb-2">4.9/5</div>
              <div className="text-navy-200 text-sm">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-ocean-200 mb-2">10,000+</div>
              <div className="text-navy-200 text-sm">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-ocean-200 mb-2">99.8%</div>
              <div className="text-navy-200 text-sm">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-ocean-200 mb-2">24/7</div>
              <div className="text-navy-200 text-sm">Customer Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
