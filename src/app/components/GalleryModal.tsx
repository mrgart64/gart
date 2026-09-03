'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, ImageIcon, Monitor, ExternalLink, Maximize2 } from 'lucide-react';
import ImageViewerModal from './ImageViewerModal';

interface GalleryItem {
  title: string;
  subtitle: string;
  image: string;
  siteUrl: string;
}

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  galleryItems: GalleryItem[];
}

export default function GalleryModal({ isOpen, onClose, galleryItems }: GalleryModalProps) {
  if (!isOpen || !galleryItems || galleryItems.length === 0) {
    return null;
  }

  const [activeItem, setActiveItem] = useState<GalleryItem>(galleryItems[0]);
  const [activeId, setActiveId] = useState(0);
  const [imageModal, setImageModal] = useState(false);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <ImageViewerModal isOpen={imageModal} onClose={() => setImageModal(false)} imageSrc={activeItem.image} />

      {/* Backdrop Kaca Blur Transparan Hitam */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Kontainer Utama Modal (Glassmorphism Gelap) */}
      <div className="relative w-full max-w-5xl h-[85vh] md:h-[75vh] bg-[#0d1117]/90 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl shadow-red-500/10 overflow-hidden flex flex-col z-10 animate-fadeIn">

        {/* Glow Merah Samar di Belakang Modal */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500/10 via-transparent to-red-500/5 rounded-3xl blur-xl -z-10 pointer-events-none" />

        {/* Header Modal */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/5 backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500">
              <ImageIcon className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">Galeri Prestasi</h3>
              <p className="text-[11px] text-gray-300">Klik gambar di daftar di sini untuk melihat detail gambar.</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="cursor-pointer p-1.5 hover:bg-white/10 border border-transparent hover:border-white/10 text-gray-300 hover:text-white rounded-xl transition-all active:scale-95"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Area Konten Utama */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden bg-black/20">

          {/* SISI KIRI: Barisan Thumbnail Vertikal */}
          <div className="w-full md:w-80 border-b md:border-b-0 md:border-r border-white/10 bg-white/5 backdrop-blur-sm overflow-y-auto p-4 space-y-2 flex-shrink-0 max-h-[25vh] md:max-h-full">
            <span className="block text-[10px] font-bold text-gray-300 uppercase tracking-wider px-2 mb-2">
              Daftar Gambar ({galleryItems.length})
            </span>

            {galleryItems.map((item, index) => {
              const isActive = index === activeId;
              return (
                <button
                  key={index}
                  onClick={() => { setActiveItem(item); setActiveId(index); }}
                  className={`cursor-pointer w-full flex items-center gap-3 p-2.5 rounded-xl border text-left transition-all duration-200 group ${isActive
                    ? 'bg-red-500/15 border-red-500/30 shadow-sm'
                    : 'bg-transparent border-transparent hover:bg-white/5 hover:border-white/10'
                    }`}
                >
                  <div className="relative w-16 h-10 rounded-md overflow-hidden bg-black/40 border border-white/10 flex-shrink-0">
                    <Image src={item.image} alt={item.title} fill className="object-cover" />
                  </div>

                  <div className="overflow-hidden">
                    <h4 className={`text-xs font-bold truncate transition-colors ${isActive ? 'text-red-400' : 'text-gray-200 group-hover:text-red-400'
                      }`}>
                      {item.title}
                    </h4>
                    <p className="text-[10px] text-gray-300 truncate mt-0.5">
                      {item.subtitle}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* SISI TENGAH/KANAN: Preview Gambar Utama Besar */}
          <div className="flex-1 flex flex-col p-4 md:p-6 items-center justify-between overflow-hidden">

            {/* Bingkai Mockup Browser */}
            <div className="relative w-full flex-1 max-w-3xl bg-[#050505] border border-white/10 shadow-md rounded-xl overflow-hidden flex flex-col group/image">

              {/* Mini Toolbar Browser */}
              <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-white/5 flex-shrink-0">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                </div>
                <div className="inline-flex items-center gap-1 text-[10px] text-gray-300 font-medium bg-black/40 px-2 py-0.5 rounded border border-white/10">
                  <Monitor className="w-3 h-3 text-red-400" /> Live Preview
                </div>
              </div>

              {/* Tempat Gambar Utama + Tombol Overlay */}
              <div className="relative flex-1 w-full bg-black/40 overflow-hidden flex items-center justify-center">
                <Image
                  src={activeItem.image}
                  alt={activeItem.title}
                  fill
                  priority
                  className="object-contain p-2 transition-all duration-300"
                />

                {/* Overlay Tombol "Lihat" saat hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/image:opacity-100 flex items-center justify-center backdrop-blur-xs transition-all duration-300">
                  <button
                    onClick={() => setImageModal(true)}
                    className="cursor-pointer inline-flex items-center gap-1.5 px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-xl shadow-md border border-white/20 backdrop-blur-md transition-all transform translate-y-2 group-hover/image:translate-y-0 active:scale-95"
                  >
                    <Maximize2 className="w-3.5 h-3.5 text-red-400" />
                    <span>Lihat Gambar Penuh</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Informasi Bagian Bawah + Tombol Aksi Kunjungi Website */}
            <div className="w-full max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4 mt-4 pt-4 border-t border-white/10">
              <div className="text-center sm:text-left space-y-0.5">
                <h2 className="text-sm sm:text-base font-bold text-white tracking-tight">
                  {activeItem.title}
                </h2>
                <p className="text-xs text-gray-300">
                  {activeItem.subtitle}
                </p>
              </div>

              {/* Tombol Kunjungi Website */}
              {/* <a
                href={activeItem.siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-red-500 hover:bg-red-600 border border-red-600 text-white font-semibold text-xs rounded-xl shadow-sm shadow-red-500/20 transition-all active:scale-95 w-full sm:w-auto justify-center"
              >
                <span>Kunjungi Website</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a> */}
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}