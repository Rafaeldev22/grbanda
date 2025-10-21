import { useState } from 'react';
import { Music, Download, Users, Heart, Menu, X } from 'lucide-react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import VideoSection from './components/VideoSection';
import PhotoSection from './components/PhotoSection';
import AboutSection from './components/AboutSection';
import ThanksSection from './components/ThanksSection';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header
        scrollToSection={scrollToSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <main>
        <HeroSection />
        <VideoSection />
        <PhotoSection />
        <AboutSection />
        <ThanksSection />
      </main>

      <WhatsAppButton />
    </div>
  );
}

export default App;
