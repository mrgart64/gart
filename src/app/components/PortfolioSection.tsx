'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight, Folder, ChevronDown, ChevronUp } from 'lucide-react';
import PortfolioGalleryModal from './PortfolioGalleryModal';

export default function PortfolioSection() {
  const [showAll, setShowAll] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selected, setSelected] = useState<any>(null);

  const allProjects = [
    {
      title: "BASIS-64 Penerjemah Dayak Kenyah",
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
        className="relative max-w-7xl mx-4 xl:mx-auto p-6 md:p-12 bg-white/5 backdrop-blur-[1px] border border-white/10 rounded-3xl overflow-hidden shadow-xl shadow-red-500/5 mt-6"
      >
        {/* Glow Merah Samar di Belakang Section */}
        {/* <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500/10 via-transparent to-red-500/5 rounded-3xl blur-xl -z-10 pointer-events-none" /> */}

        {/* Header Utama Section */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/10 border border-red-500/20 rounded-md text-xs font-mono uppercase tracking-wider text-red-500">
            <Folder className="w-3.5 h-3.5" />
            Portofolio Terbaru
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Karya & Proyek Pilihan
          </h2>

          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            Lihat beberapa proyek website yang telah saya rancang dan kembangkan untuk memberikan solusi atas permasalahan yang ada.
          </p>
        </div>

        {/* Grid Layout untuk Card Portofolio */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500">
          {visibleProjects.map((project, index) => {
            return (
              <div
                key={index}
                className="group flex flex-col bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden shadow-sm hover:border-red-500/30 hover:shadow-lg hover:shadow-red-500/5 transition-all duration-300 animate-fadeIn"
              >
                {/* 1. Gambar Screenshot Website (Rasio Aspek 16:9) */}
                <div className="relative aspect-video w-full overflow-hidden bg-black/40 border-b border-white/10">
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
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-red-400 transition-colors duration-200">
                    {project.title}
                  </h3>

                  {/* 3. Deskripsi Singkat Website */}
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mt-2 mb-6 flex-1">
                    {project.description}
                  </p>

                  {/* Pembatas Garis Halus */}
                  <div className="border-t border-white/10 my-4" />

                  {/* Bagian Bawah Card */}
                  <div className="flex flex-col gap-4 mt-auto">

                    {/* 4. Logo Instansi + Nama Brand/Website */}
                    <div className="flex items-center gap-2.5">
                      <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-white/10 bg-white/5 flex-shrink-0">
                        <Image
                          src={project.clientLogo}
                          alt={`Logo ${project.clientName}`}
                          fill
                          className="object-contain p-1"
                        />
                      </div>
                      <span className="text-xs font-semibold text-gray-300 tracking-wide">
                        {project.clientName}
                      </span>
                    </div>

                    {/* 5. Tombol Lihat Selengkapnya */}
                    <button
                      onClick={() => buttonHandler(project)}
                      className="cursor-pointer inline-flex items-center justify-center gap-1.5 w-full px-4 py-2.5 bg-white/5 hover:bg-red-500 border border-white/10 hover:border-red-600 text-gray-200 hover:text-white font-semibold text-xs rounded-xl transition-all duration-300 active:scale-95 group/btn shadow-sm"
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
          <div className="flex justify-center pt-12 mt-4 border-t border-white/10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="cursor-pointer inline-flex items-center gap-2 px-6 py-3 bg-red-500 hover:bg-red-600 border border-red-600 text-white font-semibold text-sm rounded-full transition-all shadow-lg shadow-red-500/20 active:scale-95"
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