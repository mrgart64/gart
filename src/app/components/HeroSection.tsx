"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface TrafficData {
  label: string;
  value: number;
}

interface HeroSectionProps {
  trafficData: TrafficData[];
}

export default function HeroSection({ trafficData }: HeroSectionProps) {
  // Ambil data Hari Ini (H-0) dan Kemarin (H-1) berdasarkan properti .value
  const todayValue = trafficData[trafficData.length - 1]?.value || 0;
  const yesterdayValue = trafficData[trafficData.length - 2]?.value || 0;

  // 1. Cek apakah ada penurunan (minus)
  const isMinus = todayValue < yesterdayValue;

  // 2. Hitung selisih angka absolut
  const diff = Math.abs(todayValue - yesterdayValue);

  // 3. Kalkulasi Persentase Pertumbuhan
  let growthPercentage = "0";
  if (yesterdayValue === 0) {
    growthPercentage = todayValue > 0 ? ((diff / 1) * 100).toFixed(0) : "0";
  } else {
    growthPercentage = ((diff / yesterdayValue) * 100).toFixed(0);
  }

  return (
    <section id="profile" className="relative flex flex-col items-center justify-center mt-4 pt-4 xl:pt-4 pb-12 overflow-hidden">
      {/* Ambient Glows Merah */}
      <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-red-600/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-red-500/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 z-10 w-full flex flex-col gap-10">

        {/* Bagian Atas: Flex Container untuk Teks & Foto */}
        <div className="flex flex-col lg:flex-row items-center justify-center sm:mx-12 gap-12">

          {/* Teks / Left Side */}
          <div className="flex-1 text-center sm:text-left w-full">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="sm:flex items-center gap-2 mb-6"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-mono uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                Profil dan Portofolio Saya
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl sm:text-2xl md:text-5xl font-black italic text-white tracking-tight mb-6 leading-[1.15]"
            >
              Gabriel Ado Ramos Tukan<br />
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-gray-300 text-base sm:text-lg mb-8 leading-relaxed max-w-xl"
            >
              Saya adalah seorang developer full stack JS dengan pengalaman 2 tahun dan saya telah membuat beberapa website.
            </motion.p>

            {/* Tombol Aksi (CTA) */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="#portfolio"
                className="px-8 py-4 w-full sm:w-auto bg-red-700/70 border border-red-500/90 hover:bg-red-700 text-white font-bold rounded-full transition-all shadow-lg shadow-red-500/20 active:scale-95"
              >
                Lihat Portofolio
              </Link>
              <Link
                href="#contact"
                className="px-8 py-4 w-full sm:w-auto bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium rounded-full transition-all active:scale-95"
              >
                Hubungi Saya
              </Link>
            </motion.div>
          </div>

          {/* Foto / Right Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex-1 w-full max-w-xs relative group"
          >
            {/* Subtle Glow di belakang gambar */}
            <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-red-800 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition duration-500" />

            <div className="relative bg-[#0d1117] border border-white/10 rounded-2xl overflow-hidden shadow-2xl shadow-red-500/10">
              <Image
                src="/images/gart-profile.webp"
                alt="Dashboard & Website Development Preview"
                width={320}
                height={320}
                className="w-full h-auto object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105"
                priority
              />
            </div>
          </motion.div>

        </div>

        {/* Bagian Bawah: Grid untuk Statistik */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10 w-full text-center"
        >
          <div>
            <p className="text-2xl sm:text-3xl font-bold text-white">{`${isMinus ? '-' : '+'}${growthPercentage}`}%</p>
            <p className="text-xs text-gray-300 mt-1">Traffic growth</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-bold text-white">2</p>
            <p className="text-xs text-gray-300 mt-1">Website dibuat</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-bold text-white">{todayValue}</p>
            <p className="text-xs text-gray-300 mt-1">Pengunjung hari ini</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}