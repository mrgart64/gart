export const runtime = 'edge';

import React from 'react';
import { D1Database } from '@cloudflare/workers-types';

import Navbar from '@/components/Navbar';
import HeroSection from './components/HeroSection';
import dynamic from 'next/dynamic';

// TAMBAHKAN BARIS INI SEBAGAI PENGGANTI:
const TrafficSection = dynamic(() => import('./components/TrafficSection'), {
  ssr: false, // Memaksa komponen hanya dimuat 100% di browser client
  loading: () => <div className="h-36 w-full animate-pulse bg-white/5 rounded-2xl" /> // Tampilan loading sementara
});
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

// Interface untuk tipe data outputnya
interface TrafficData {
  label: string;
  value: number;
}

// Interface internal untuk hasil query SQL
interface RawQueryResult {
  tanggal: string;
  total: number;
}

async function getTrafficData(): Promise<TrafficData[]> {
  const query = `
  SELECT 
    date(created_at, '+8 hours') AS tanggal,
    COUNT(*) AS total
  FROM gart_basis64_com
  WHERE created_at >= datetime('now', '+8 hours', '-6 days', 'start of day', '-8 hours')
  GROUP BY tanggal;
`;
  // 1. Fetch data via CloudAdapter (Otomatis D1 di Production, SQLite di Lokal)
  const results = await CloudAdapter.D1<RawQueryResult>(query) || [];

  console.log(results)

  // 2. Map data DB ke Object JavaScript { "YYYY-MM-DD": total }
  const dataMap = new Map<string, number>();
  results.forEach((row) => dataMap.set(row.tanggal, row.total));

  // 3. Generate Array TrafficData (H-6 sampai Hari Ini)
  const trafficData: TrafficData[] = [];
  const now = new Date();

  for (let i = 6; i >= 0; i--) {
    const d = new Date(now);
    d.setDate(d.getDate() - i);

    // Format ISO untuk pencocokan key Map: "YYYY-MM-DD"
    const dateKey = d.toISOString().split('T')[0];

    // Format label untuk tampilan UI: "DD MMM" (Contoh: "04 Jan", "23 Jul")
    const label = d.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
    });

    trafficData.push({
      label: label, // e.g. "04 Jan"
      value: dataMap.get(dateKey) || 0, // Nilai total dari D1 (default 0 jika tidak ada data)
    });
  }

  return trafficData;
}

async function putTraffic() {
  // Insert 1 row dengan waktu saat ini
  await CloudAdapter.D1("INSERT INTO gart_basis64_com (created_at) VALUES (datetime('now'));");
}

export default async function TestingPage() {
  await putTraffic();
  const analyticsData = await getTrafficData();

  return (
    <>
      <StarField />
      <Navbar />

      <div className='max-w-7xl mx-auto'>
        {/* <PortfolioGalleryModal isOpen={true} /> */}
        {/* <ImageViewerModal isOpen={true}/> */}
        <div className="justify-center">

          {/* Kartu Utama */}
          <HeroSection trafficData={analyticsData} />
          {/* <ServicesSection /> */}
          <PortfolioSection />
          <FeaturesSection />
          <EducationSection />
          <AchievementSection />
          <TrafficSection trafficData={analyticsData} />

          <ContactSection />

          <Footer />

        </div>
      </div>
    </>

  );
}