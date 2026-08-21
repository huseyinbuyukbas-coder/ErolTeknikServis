/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import TrustStats from './components/TrustStats';
import Services from './components/Services';
import KombiSection from './components/KombiSection';
import BeyazEsyaSection from './components/BeyazEsyaSection';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ServiceProcess from './components/ServiceProcess';
import Brands from './components/Brands';
import QuickCTA from './components/QuickCTA';
import MapAndRegions from './components/MapAndRegions';
import ContactForm from './components/ContactForm';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import MobileBottomCTA from './components/MobileBottomCTA';
import { MessageSquare, PhoneCall, Star } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function App() {
  const [showFloater, setShowFloater] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowFloater(true);
      } else {
        setShowFloater(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0b0f19] text-[#f1f5f9] antialiased selection:bg-amber-500 selection:text-[#0b0f19] overflow-x-hidden">
      
      {/* 1. Header Navigation */}
      <Header />

      {/* 2. Primary Hero Section */}
      <Hero />

      {/* 3. Quick Credibility Trust Stats */}
      <TrustStats />

      {/* 4. Core Services (Uzmanlık Alanlarımız) */}
      <Services />

      {/* 5. Deep-Dive Kombi Services */}
      <KombiSection />

      {/* 6. Deep-Dive Beyaz Esya Services */}
      <BeyazEsyaSection />

      {/* 7. Why Choose Us (Neden Biz?) */}
      <WhyChooseUs />

      {/* 8. Google Business & Customer Testimonials */}
      <Testimonials />

      {/* 9. Interactive Repair Timeline Service Process */}
      <ServiceProcess />

      {/* 10. Core Brand Grid & Clear Transparency Disclaimer */}
      <Brands />

      {/* 11. Mid-Page High-Conversion Quick Call-out */}
      <QuickCTA />

      {/* 12. Local SEO Area & Google Map Embed */}
      <MapAndRegions />

      {/* 13. Service Appointment / Contact Form */}
      <ContactForm />

      {/* 14. Modern Accordion FAQs */}
      <FAQ />

      {/* 15. Premium Dark Theme Footer */}
      <Footer />

      {/* 16. Mobile Bottom Fixed CTA Bar */}
      <MobileBottomCTA />

      {/* 17. Floating Desktop WhatsApp Assist Button */}
      {showFloater && (
        <div className="hidden lg:flex fixed bottom-8 right-8 z-40 flex-col gap-3 animate-fadeIn">
          {/* Quick Call bubble */}
          <a
            href="tel:+905346920123"
            title="Ömer Usta'yı Hemen Ara"
            className="bg-amber-500 hover:bg-amber-400 text-[#0b0f19] p-3.5 rounded-full shadow-2xl shadow-amber-500/20 hover:scale-110 active:scale-95 transition-all flex items-center justify-center"
          >
            <PhoneCall className="h-6 w-6 stroke-[2.5]" />
          </a>

          {/* WhatsApp bubble */}
          <a
            href="https://wa.me/905346920123"
            target="_blank"
            referrerPolicy="no-referrer"
            title="Ömer Usta'ya WhatsApp'tan Yaz"
            className="bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 rounded-full shadow-2xl shadow-emerald-500/20 hover:scale-110 active:scale-95 transition-all flex items-center justify-center relative group"
          >
            {/* Notification pulse tag */}
            <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-red-500 border border-white animate-pulse"></span>
            
            <MessageSquare className="h-6 w-6 fill-current" />
            
            {/* Tooltip bubble on hover */}
            <div className="absolute right-14 bg-[#0f172a] border border-slate-850 text-white text-xs font-bold py-2 px-3.5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
              <span>Hemen Servis İsteyin</span>
            </div>
          </a>
        </div>
      )}

    </div>
  );
}
