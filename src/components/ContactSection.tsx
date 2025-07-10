
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    location: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Quote Request Sent!",
      description: "We'll contact you within 2 hours to discuss your cleaning needs.",
    });
    
    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: '',
      location: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const services = [
    'Residential Cleaning',
    'Office & Commercial Cleaning',
    'Post-Construction Cleanup',
    'Floor Polishing',
    'Upholstery & Sofa Cleaning',
    'Fumigation & Disinfection',
    'Custom Service'
  ];

  const locations = [
    'Port Harcourt',
    'Lagos',
    'Delta',
    'Bayelsa',
    'Edo',
    'Akwa Ibom'
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              Get Your <span className="bg-gradient-to-r from-navy-600 to-ocean-600 bg-clip-text text-transparent">Free Quote</span>
            </h2>
            <p className="text-xl text-navy-600 max-w-3xl mx-auto">
              Ready for an exceptional clean? Contact us today for a free, no-obligation quote. 
              We're available 24/7 to serve you across Nigeria's major cities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slide-up">
              <div className="bg-gradient-to-br from-navy-50 to-ocean-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-navy-900 mb-6">Request a Quote</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-navy-700 font-semibold mb-2">Full Name *</label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        required
                        className="border-navy-200 focus:border-navy-500"
                      />
                    </div>
                    <div>
                      <label className="block text-navy-700 font-semibold mb-2">Phone Number *</label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g., 09034290772"
                        required
                        className="border-navy-200 focus:border-navy-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-navy-700 font-semibold mb-2">Email Address</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="border-navy-200 focus:border-navy-500"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-navy-700 font-semibold mb-2">Service Needed *</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-navy-200 rounded-lg focus:border-navy-500 focus:outline-none bg-white"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-navy-700 font-semibold mb-2">Location *</label>
                      <select
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-navy-200 rounded-lg focus:border-navy-500 focus:outline-none bg-white"
                      >
                        <option value="">Select your city</option>
                        {locations.map((location) => (
                          <option key={location} value={location}>{location}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-navy-700 font-semibold mb-2">Additional Details</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your cleaning needs, property size, frequency, or any special requirements..."
                      rows={4}
                      className="border-navy-200 focus:border-navy-500"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-navy-600 to-ocean-600 hover:from-navy-700 hover:to-ocean-700 text-white py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    Get My Free Quote
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="animate-scale-in">
              {/* Quick Contact */}
              <div className="bg-gradient-to-r from-navy-600 to-ocean-600 text-white rounded-2xl p-8 mb-8">
                <h3 className="text-2xl font-bold mb-6">Contact Us Directly</h3>
                
                <div className="space-y-6">
                  <a href="tel:09034290772" className="flex items-center space-x-4 hover:bg-white/10 p-3 rounded-lg transition-colors">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold">Call Us Now</div>
                      <div className="text-navy-200">09034290772</div>
                    </div>
                  </a>

                  <a 
                    href="https://wa.me/2349034290772?text=Hello! I'd like to request a cleaning service quote." 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 hover:bg-white/10 p-3 rounded-lg transition-colors"
                  >
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <MessageCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold">WhatsApp</div>
                      <div className="text-navy-200">Chat with us instantly</div>
                    </div>
                  </a>

                  <div className="flex items-center space-x-4 p-3">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold">Available</div>
                      <div className="text-navy-200">24 Hours Daily</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div className="bg-navy-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-navy-900 mb-6">Service Areas</h3>
                <div className="grid grid-cols-2 gap-4">
                  {locations.map((location) => (
                    <div key={location} className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-navy-600" />
                      <span className="text-navy-700 font-medium">{location}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-white rounded-lg">
                  <h4 className="font-bold text-navy-900 mb-2">Response Time Guarantee</h4>
                  <p className="text-navy-600 text-sm">
                    We guarantee to respond to all quote requests within 2 hours during business hours, 
                    and within 4 hours for 24/7 emergency requests.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Emergency Contact Banner */}
          <div className="mt-16 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl p-6 text-center">
            <h3 className="text-xl font-bold mb-2">Emergency Cleaning Service</h3>
            <p className="mb-4">Need immediate cleaning assistance? We're available 24/7 for emergency situations.</p>
            <a href="tel:09034290772">
              <Button className="bg-white text-red-600 hover:bg-red-50 font-bold px-8 py-3 rounded-full">
                Call Emergency Line: 09034290772
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
