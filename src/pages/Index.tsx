import { LanguageProvider } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ConcernsSection from '@/components/ConcernsSection';
import AdvisorySection from '@/components/AdvisorySection';

import FaqSection from '@/components/FaqSection';
import CandidatesSection from '@/components/CandidatesSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <LanguageProvider>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ConcernsSection />
      <AdvisorySection />
      
      <FaqSection />
      <CandidatesSection />
      <Footer />
    </LanguageProvider>
  );
};

export default Index;
