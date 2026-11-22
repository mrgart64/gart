"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const EXPERIENCE_START_DATE = new Date(2024, 6, 11); // 11 Juli 2024 (bulan di JS berbasis 0: 6 = Juli)

function calculateExperienceYears(startDate: Date, referenceDate: Date = new Date()): number {
  let years = referenceDate.getFullYear() - startDate.getFullYear();
  const monthDiff = referenceDate.getMonth() - startDate.getMonth();
  const dayDiff = referenceDate.getDate() - startDate.getDate();

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    years -= 1;
  }

  return Math.max(0, years);
}

export default function HeroSection() {
  const [experienceYears, setExperienceYears] = useState<number>(() =>
    calculateExperienceYears(EXPERIENCE_START_DATE)
  );

  useEffect(() => {
    const updateExperience = () => {
      setExperienceYears(calculateExperienceYears(EXPERIENCE_START_DATE, new Date()));
    };

    updateExperience();
    const interval = setInterval(updateExperience, 1000 * 60 * 60 * 24);
    return () => clearInterval(interval);
  }, []);

  const experienceLabel = `${experienceYears} Tahun`;

  return (
    <section
      id="profile"
      className="relative flex flex-col items-center justify-center sm:mt-4 sm:pt-4 xl:pt-4 pb-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 z-10 w-full flex flex-col gap-10">

        {/* Bagian Atas: Flex Container untuk Teks & Foto */}
        <div className="flex flex-col lg:flex-row items-center justify-center sm:mx-12 gap-12">

          {/* Teks / Left Side */}
          <div className="flex-1 text-center sm:text-left w-full">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-center sm:justify-start items-center gap-2 mb-6"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-neutral-400/10 border border-neutral-200/40 text-neutral-200 text-xs font-mono uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                Full Stack JavaScript Developer • My Profile
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-2xl sm:text-2xl md:text-5xl font-black italic text-white tracking-tight mb-3 leading-[1.15]"
            >
              Gabriel Ado Ramos Tukan
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="text-sm sm:text-base font-mono text-red-400 uppercase tracking-wider mb-5"
            >
              Full Stack JS Engineer • Frontend & Backend Web Development
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="text-gray-300 text-sm sm:text-base mb-8 leading-relaxed max-w-2xl mx-auto sm:mx-0"
            >
              Halo, saya seorang <strong className="text-white font-semibold">Full Stack Web Developer</strong> dengan pengalaman {experienceYears} tahun di bidang rekayasa perangkat lunak. Ketertarikan dan disiplin saya dalam <em>coding</em> sudah diasah sejak masa SMK, dimulai dari membuat{' '}
              <a
                href="https://basis64.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-red-500 transition-colors"
              >
                BASIS-64 Penerjemah Dayak Kenyah
              </a>
              , platform penerjemah bahasa Indonesia-Dayak Kenyah untuk membantu teman-teman sekolah sekaligus melestarikan bahasa daerah lewat teknologi. Saat ini, saya juga mengembangkan{' '}
              <a
                href="https://basis64.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-red-500 transition-colors"
              >
                DaveMod - AI Moderasi Pesan
              </a>
              , sistem deteksi penipuan digital berbasis <em>neural network</em> yang berjalan langsung di browser (<em>client-side</em>) untuk menganalisis apakah sebuah pesan aman atau berpotensi ancaman.
            </motion.p>

            {/* Tombol Aksi (CTA) */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="flex flex-wrap justify-center sm:justify-start gap-4"
            >
              <Link
                href="#portfolio"
                className="group px-8 py-4 w-full sm:w-auto bg-red-600/70 border border-red-500/90 hover:bg-red-700 text-white font-bold transition-all shadow-lg shadow-red-500/20 active:scale-95 inline-flex items-center justify-center gap-2"
              >
                <span>Lihat Karya & Proyek</span>
              </Link>
              <Link
                href="#contact"
                className="px-8 py-4 w-full sm:w-auto bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/25 text-white font-medium transition-all active:scale-95 inline-flex items-center justify-center"
              >
                Kontak Profesional
              </Link>
            </motion.div>
          </div>

          {/* Foto / Right Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: "some" }}
            transition={{ duration: 0.45 }}
            className="flex-1 w-full max-w-xs relative group"
          >
            <div className="group relative bg-[#0d1117] border border-white/40 hover:border-red-500 overflow-hidden shadow-2xl shadow-neutral-500/10 hover:shadow-red-500/15 transition-all duration-500">
              <Image
                src="/images/gart-profile.webp"
                alt="Foto profil Gabriel Ado Ramos Tukan"
                width={320}
                height={320}
                className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                priority
              />
            </div>
          </motion.div>

        </div>

        {/* Bagian Bawah: Ringkasan Profil CV */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: "some" }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-2 gap-6 pt-8 border-t border-white/10 w-full text-center"
        >
          <div>
            <p className="text-2xl sm:text-3xl font-bold text-white">3+</p>
            <p className="text-xs text-gray-300 mt-1">Aplikasi & Website Dibuat</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-bold text-white">{experienceLabel}</p>
            <p className="text-xs text-gray-300 mt-1">Pengalaman Pengembangan Web</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}