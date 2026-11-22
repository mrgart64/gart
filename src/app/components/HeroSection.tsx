"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section
      id="profile"
      className="relative flex flex-col items-center justify-center mt-4 pt-4 xl:pt-4 pb-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 z-10 w-full flex flex-col gap-10">

        {/* Bagian Atas: Flex Container untuk Teks & Foto */}
        <div className="flex flex-col lg:flex-row items-center justify-center sm:mx-12 gap-12">

          {/* Teks / Left Side */}
          <div className="flex-1 text-center sm:text-left w-full">
            <div className="flex justify-center sm:justify-start items-center gap-2 mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-neutral-400/10 border border-neutral-200/40 text-neutral-200 text-xs font-mono uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                Full Stack JavaScript Developer • Curriculum Vitae
              </span>
            </div>

            <h1 className="text-2xl sm:text-2xl md:text-5xl font-black italic text-white tracking-tight mb-3 leading-[1.15]">
              Gabriel Ado Ramos Tukan
            </h1>

            <p className="text-sm sm:text-base font-mono text-red-400 uppercase tracking-wider mb-5">
              Full Stack JS Engineer • Frontend & Backend Web Development
            </p>

            <p className="text-gray-300 text-base sm:text-lg mb-8 leading-relaxed max-w-xl mx-auto sm:mx-0">
              Berpengalaman 2 tahun merancang dan mengembangkan aplikasi web berbasis JavaScript dari antarmuka hingga logika server, dengan fokus pada keterbacaan kode, performa, dan pengiriman fitur yang tepat sasaran.
            </p>

            {/* Tombol Aksi (CTA) */}
            <div className="flex flex-wrap justify-center sm:justify-start gap-4">
              <Link
                href="#portfolio"
                className="group px-8 py-4 w-full sm:w-auto bg-red-600/70 border border-red-500/90 hover:bg-red-700 text-white font-bold transition-all shadow-lg shadow-red-500/20 active:scale-95 inline-flex items-center justify-center gap-2"
              >
                <span>Lihat Karya & Proyek</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href="#contact"
                className="px-8 py-4 w-full sm:w-auto bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/25 text-white font-medium transition-all active:scale-95 inline-flex items-center justify-center"
              >
                Kontak Profesional
              </Link>
            </div>
          </div>

          {/* Foto / Right Side */}
          <div className="flex-1 w-full max-w-xs relative group">
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
          </div>

        </div>

        {/* Bagian Bawah: Ringkasan Profil CV */}
        <div className="grid grid-cols-2 gap-6 pt-8 border-t border-white/10 w-full text-center">
          <div>
            <p className="text-2xl sm:text-3xl font-bold text-white">3+</p>
            <p className="text-xs text-gray-300 mt-1">Aplikasi & Website Selesai</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-bold text-white">2 Tahun</p>
            <p className="text-xs text-gray-300 mt-1">Pengalaman Full Stack JS</p>
          </div>
        </div>

      </div>
    </section>
  );
}