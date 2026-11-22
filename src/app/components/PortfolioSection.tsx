'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight, Folder, ChevronDown, ChevronUp, Calendar } from 'lucide-react';
import PortfolioGalleryModal from './PortfolioGalleryModal';

export default function PortfolioSection() {
  const [showAll, setShowAll] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selected, setSelected] = useState<any>(null);

  const allProjects = [
    {
      title: "DaveMod — AI Moderator & Deteksi Penipuan Digital",
      date: "2026", // Silakan sesuaikan dengan tanggal rilis spesifik
      description: "Aplikasi web asisten moderasi pesan berbasis neural network yang berjalan 100% client-side di browser untuk mendeteksi potensi penipuan digital secara instan dan aman.",
      thumbnail: "/portofolios/davemod-basis64-com/images/screenshot-001.webp",
      images: [
        {
          title: "Bagian Hero",
          subtitle: "Pratinjau bagian hero antarmuka deteksi pesan penipuan dengan visualisasi probabilitas AI.",
          image: "/portofolios/davemod-basis64-com/images/screenshot-003.webp",
          siteUrl: "https://davemod.basis64.com/"
        },
        {
          title: "Bagian Analisis",
          subtitle: "Pratinjau bagian analisis pesan penipuan dengan visualisasi probabilitas AI.",
          image: "/portofolios/davemod-basis64-com/images/screenshot-002.webp",
          siteUrl: "https://davemod.basis64.com/"
        }
      ],
      clientName: "BASIS-64",
      clientLogo: "/portofolios/basis64-com/logo.webp",
      link: "https://davemod.basis64.com/"
    },
    {
      title: "BASIS-64 Penerjemah Dayak Kenyah",
      date: "2 November 2024",
      description: "Sebuah aplikasi web penerjemah yang hadir sebagai solusi atas kesulitan teman-teman SMK dengan mata pelajaran bahasa Dayak Kenyah.",
      thumbnail: "/portofolios/basis64-com/images/screenshot-001.webp",
      images: [
        {
          title: "Halaman Penerjemah",
          subtitle: "Pratinjau halaman penerjemah Dayak Kenyah.",
          image: "/portofolios/basis64-com/images/screenshot-001.webp",
          siteUrl: "https://basis64.com/"
        }
      ],
      clientName: "BASIS-64",
      clientLogo: "/portofolios/basis64-com/logo.webp",
      link: "https://basis64.com/"
    },
    {
      title: "Warung Makan Bang El",
      date: "24 April 2026",
      description: "Proyek pengembangan website untuk Warung Makan Bang El, sebuah platform digital yang menampilkan menu makanan, informasi lokasi, serta fitur pemesanan praktis melalui WhatsApp. Website ini bertujuan untuk meningkatkan visibilitas bisnis lokal dengan tampilan yang informatif dan mudah diakses.",
      thumbnail: "/portofolios/bangel-pages-dev/images/screenshot-001.webp",
      images: [
        {
          title: "Halaman Utama",
          subtitle: "Memperlihatkan hero section pada halaman.",
          image: "/portofolios/bangel-pages-dev/images/screenshot-001.webp",
          siteUrl: "https://bang-el.pages.dev/"
        }
      ],
      clientName: "Bang El",
      clientLogo: "/portofolios/bangel-pages-dev/logo.webp",
      link: "#"
    },
  ];

  const buttonHandler = (project: any) => {
    setSelected(project);
    setShowModal(true);
  };

  const visibleProjects = showAll ? allProjects : allProjects.slice(0, 3);

  return (
    <>
      <PortfolioGalleryModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        galleryItems={selected ? selected.images : []}
      />

      <section
        id="portfolio"
        className="relative max-w-7xl mx-4 xl:mx-auto py-12 md:py-16 px-2 md:px-4"
      >
        {/* Header Utama Section */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 border border-red-200 text-xs font-mono font-bold uppercase tracking-wider text-red-600">
            <Folder className="w-3.5 h-3.5" />
            Portofolio Terbaru
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-950 tracking-tight">
            Karya & Proyek Pilihan
          </h2>

          <p className="text-sm sm:text-base font-medium text-neutral-700 leading-relaxed">
            Lihat beberapa proyek website yang telah saya rancang dan kembangkan untuk memberikan solusi atas permasalahan yang ada.
          </p>
        </div>

        {/* Grid Layout untuk Card Portofolio */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500">
          {visibleProjects.map((project, index) => {
            return (
              <div
                key={index}
                className="group flex flex-col bg-white border border-neutral-300 overflow-hidden hover:border-neutral-400 transition-all duration-300 animate-fadeIn"
              >
                {/* 1. Gambar Screenshot Website Tanpa Bingkai */}
                <div className="relative aspect-video w-full overflow-hidden">
                  <Image
                    src={project.thumbnail}
                    alt={`Screenshot ${project.title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Konten Bagian Dalam Card */}
                <div className="p-5 flex flex-col flex-1">

                  {/* 2. Nama / Judul Website */}
                  <h3 className="text-base sm:text-lg font-bold text-neutral-950 group-hover:text-red-600 transition-colors duration-200">
                    {project.title}
                  </h3>

                  {/* 3. Deskripsi Singkat Website */}
                  <p className="text-xs sm:text-sm font-medium text-neutral-700 leading-relaxed mt-2 mb-6 flex-1">
                    {project.description}
                  </p>

                  {/* Pembatas Garis Halus */}
                  <div className="border-t border-neutral-300 my-4" />

                  {/* Bagian Bawah Card */}
                  <div className="flex flex-col gap-4 mt-auto">

                    {/* 4. Logo Instansi + Nama Brand/Website + Tanggal */}
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="relative w-10 h-10 overflow-hidden flex-shrink-0">
                          <Image
                            src={project.clientLogo}
                            alt={`Logo ${project.clientName}`}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <span className="text-xs font-bold text-neutral-900 tracking-wide truncate">
                          {project.clientName}
                        </span>
                      </div>

                      {project.date && (
                        <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-neutral-700 flex-shrink-0">
                          <Calendar className="w-3.5 h-3.5 text-red-600" />
                          {project.date}
                        </span>
                      )}
                    </div>

                    {/* 5. Tombol CTA Lihat Selengkapnya */}
                    <button
                      onClick={() => buttonHandler(project)}
                      className="cursor-pointer inline-flex items-center justify-center gap-1.5 w-full px-4 py-2.5 bg-red-500 hover:bg-red-600 border border-red-600 text-white font-semibold text-xs transition-all duration-300 active:scale-95 group/btn"
                    >
                      <span>Lihat Selengkapnya</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </button>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* 6. Tombol Utama: Lihat Lebih Banyak / Sembunyikan */}
        {allProjects.length > 3 && (
          <div className="flex justify-center pt-12 mt-4 border-t border-neutral-300">
            <button
              onClick={() => setShowAll(!showAll)}
              className="cursor-pointer inline-flex items-center gap-2 px-6 py-3 bg-red-500 hover:bg-red-600 border border-red-600 text-white font-semibold text-sm transition-all active:scale-95"
            >
              <span>{showAll ? 'Sembunyikan Portofolio' : 'Lihat Lebih Banyak'}</span>
              {showAll ? (
                <ChevronUp className="w-4 h-4 animate-bounce" />
              ) : (
                <ChevronDown className="w-4 h-4 animate-bounce" />
              )}
            </button>
          </div>
        )}

      </section>
    </>
  );
}