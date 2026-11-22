// export const runtime = 'edge';

import React from 'react';

import Navbar from '@/components/Navbar';
import HeroSection from './components/HeroSection';
// import TrafficSection from './components/TrafficSection';
import ServicesSection from './components/ServicesSection';
import FeaturesSection from './components/FeaturesSection';
import EducationSection from './components/EducationSection';
import PortfolioSection from './components/PortfolioSection';
import PricingSection from './components/PricingSection';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CloudAdapter from '@/utils/CloudAdapter';
import StarField from '@/components/StarField';
import AchievementSection from './components/AchievementSection';
import Divider from './components/Divider';

export default async function Page() {
  // await putTraffic();
  // const analyticsData = await getTrafficData();

  return (
    <main className="min-h-screen w-full">
      <Navbar />

      {/* AREA HERO: StarField dikunci di dalam container ini saja */}
      <section className="relative overflow-hidden text-white">
        <StarField />

        {/* Konten di atas StarField perlu z-10 (atau relative z-10) */}
        <div className="relative z-50">
          <div className="max-w-7xl mx-auto">
            <div className="justify-center">
              {/* Kartu Utama */}
              <HeroSection />
            </div>
          </div>
        </div>
      </section>

      {/* BAGIAN LAIN: Full-width background putih */}
      <div className="relative z-10 w-full bg-white text-slate-900">
        <div className="max-w-7xl mx-auto">
          {/* <ServicesSection /> */}
          <AchievementSection />
          <Divider />
          <PortfolioSection />
          <Divider />
          <EducationSection />
          <Divider />
          <FeaturesSection />

          {/* <TrafficSection trafficData={analyticsData} /> */}
          <ContactSection />
          <Footer />
        </div>
      </div>
    </main>
  );
}