'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { X, ImageIcon, ExternalLink, Maximize2 } from 'lucide-react';
import ImageViewerModal from './ImageViewerModal';

interface GalleryItem {
  title: string;
  subtitle: string;
  image: string;
  siteUrl: string;
}

interface PortfolioGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  galleryItems: GalleryItem[];
}

export default function PortfolioGalleryModal({
  isOpen,
  onClose,
  galleryItems,
}: PortfolioGalleryModalProps) {
  const [mounted, setMounted] = useState(false);
  const [activeId, setActiveId] = useState(0);
  const [imageModal, setImageModal] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Reset pilihan dan tutup viewer gambar saat modal utama dibuka/ditutup
  useEffect(() => {
    if (isOpen) {
      setActiveId(0);
      setImageModal(false);
    }
  }, [isOpen, galleryItems.length]);

  // Kunci scroll halaman utama saat modal galeri aktif (dan tidak sedang di-handle ImageViewerModal)
  useEffect(() => {
    if (!isOpen || imageModal) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, imageModal]);

  if (!mounted || !isOpen || !galleryItems || galleryItems.length === 0) {
    return null;
  }

  const activeItem = galleryItems[activeId] ?? galleryItems[0];

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <ImageViewerModal
        isOpen={imageModal}
        onClose={() => setImageModal(false)}
        imageSrc={activeItem.image}
        imageAlt={`${activeItem.title} — ${activeItem.subtitle}`}
      />

      {/* Backdrop Terang & Bersih */}
      <div
        className="absolute inset-0 bg-slate-900/35 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Kontainer Utama Modal (White Minimalist) */}
      <div className="relative w-full max-w-5xl h-[85vh] md:h-[75vh] bg-white border border-neutral-200 shadow-xl overflow-hidden flex flex-col z-10 animate-fadeIn">
        {/* Header Modal */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200/80 bg-white">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-neutral-100 border border-neutral-200 text-neutral-800">
              <ImageIcon className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-neutral-950">Galeri Pratinjau Proyek</h3>
              <p className="text-[11px] font-medium text-neutral-700">
                Klik daftar di sini untuk melihat detail screenshot.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup galeri"
            className="cursor-pointer p-1.5 hover:bg-neutral-100 text-neutral-600 hover:text-neutral-950 transition-all active:scale-95"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Area Konten Utama */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden bg-neutral-50/70">
          {/* SISI KIRI: Barisan Thumbnail Vertikal */}
          <div className="w-full md:w-80 border-b md:border-b-0 md:border-r border-neutral-200/80 bg-white overflow-y-auto p-4 space-y-1.5 flex-shrink-0 max-h-[25vh] md:max-h-full">
            <span className="block text-[10px] font-bold text-neutral-600 uppercase tracking-wider px-2 mb-2">
              Daftar Screenshot ({galleryItems.length})
            </span>

            {galleryItems.map((item, index) => {
              const isActive = index === activeId;
              return (
                <button
                  type="button"
                  key={`${item.title}-${index}`}
                  onClick={() => setActiveId(index)}
                  className={`cursor-pointer w-full flex items-center gap-3 p-2.5 border text-left transition-all duration-200 group ${isActive
                    ? 'bg-red-600 border-red-700 shadow-sm'
                    : 'bg-white border-transparent hover:bg-neutral-100 hover:border-neutral-200'
                    }`}
                >
                  <div
                    className={`relative w-16 h-10 overflow-hidden flex-shrink-0 ${isActive ? 'bg-red-700' : 'bg-neutral-100'
                      }`}
                  >
                    <Image src={item.image} alt={item.title} fill className="object-cover" />
                  </div>

                  <div className="overflow-hidden">
                    <h4
                      className={`text-xs font-bold truncate transition-colors ${isActive ? 'text-white' : 'text-neutral-900 group-hover:text-neutral-950'
                        }`}
                    >
                      {item.title}
                    </h4>
                    <p
                      className={`text-[10px] font-medium truncate mt-0.5 ${isActive ? 'text-red-50' : 'text-neutral-700'
                        }`}
                    >
                      {item.subtitle}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* SISI TENGAH/KANAN: Preview Gambar Utama Besar */}
          <div className="flex-1 flex flex-col p-4 md:p-6 items-center justify-between overflow-hidden">
            <div className="relative w-full flex-1 max-w-3xl overflow-hidden flex flex-col group/image">
              <div className="relative flex-1 w-full overflow-hidden flex items-center justify-center">
                <Image
                  src={activeItem.image}
                  alt={activeItem.title}
                  fill
                  priority
                  className="object-contain transition-all duration-300"
                />

                <div className="absolute inset-0 bg-neutral-900/25 opacity-0 group-hover/image:opacity-100 flex items-center justify-center backdrop-blur-xs transition-all duration-300">
                  <button
                    type="button"
                    onClick={() => setImageModal(true)}
                    className="cursor-pointer inline-flex items-center gap-1.5 px-4 py-2 bg-red-500 hover:bg-red-600 border border-red-700 text-white text-xs font-semibold shadow-md transition-all transform translate-y-2 group-hover/image:translate-y-0 active:scale-95"
                  >
                    <Maximize2 className="w-3.5 h-3.5 text-white" />
                    <span>Lihat Gambar Penuh</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="w-full max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4 mt-4 pt-4 border-t border-neutral-200">
              <div className="text-center sm:text-left space-y-0.5">
                <h2 className="text-sm sm:text-base font-bold text-neutral-950 tracking-tight">
                  {activeItem.title}
                </h2>
                <p className="text-xs font-medium text-neutral-700">{activeItem.subtitle}</p>
              </div>

              <a
                href={activeItem.siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-red-500 hover:bg-red-600 border border-red-700 text-white font-semibold text-xs shadow-xs transition-all active:scale-95 w-full sm:w-auto justify-center"
              >
                <span>Kunjungi Website</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}