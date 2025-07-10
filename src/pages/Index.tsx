
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ServiceImages from '@/components/ServiceImages';
import ServiceAreasSection from '@/components/ServiceAreasSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ServiceImages />
      <ServiceAreasSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
