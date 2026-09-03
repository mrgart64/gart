'use client';

import { X, ZoomIn, ZoomOut, RotateCw } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface ImageViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt?: string;
}

export default function ImageViewerModal({ isOpen, onClose, imageSrc, imageAlt = "Pratinjau Gambar" }: ImageViewerModalProps) {
  const [scale, setScale] = useState(1);
  const [rotate, setRotate] = useState(0);
  
  // State untuk fitur Drag/Geser Gambar saat di-zoom
  const [isDragging, setIsDragging] = useState(false);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const dragStart = useRef({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Reset state saat modal ditutup atau dibuka kembali
  useEffect(() => {
    if (isOpen) {
      setScale(1);
      setRotate(0);
      setPan({ x: 0, y: 0 });
      document.body.style.overflow = 'hidden'; // Kunci scroll halaman utama
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleClose = () => {
    onClose();
  };

  const handleZoomIn = () => setScale((prev) => Math.min(prev + 0.5, 4));
  const handleZoomOut = () => {
    setScale((prev) => {
      const nextScale = Math.max(prev - 0.5, 1);
      if (nextScale === 1) setPan({ x: 0, y: 0 }); // Reset posisi jika balik ke 100%
      return nextScale;
    });
  };
  const handleRotate = () => setRotate((prev) => (prev + 90) % 360);

  // --- LOGIKA DRAG / GESER GAMBAR ---
  const startDrag = (clientX: number, clientY: number) => {
    if (scale === 1) return; // Jangan geser jika tidak di-zoom
    setIsDragging(true);
    dragStart.current = { x: clientX - pan.x, y: clientY - pan.y };
  };

  const moveDrag = (clientX: number, clientY: number) => {
    if (!isDragging || scale === 1) return;
    
    // Hitung pergeseran baru
    let newX = clientX - dragStart.current.x;
    let newY = clientY - dragStart.current.y;

    // Batasi pergeseran (boundary padding) agar tidak hilang dari layar
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const maxDeltaX = (rect.width * scale - rect.width) / 2;
      const maxDeltaY = (rect.height * scale - rect.height) / 2;
      
      // Mengizinkan geser sedikit melewati batas (mentok halus)
      newX = Math.max(-maxDeltaX - 100, Math.min(maxDeltaX + 100, newX));
      newY = Math.max(-maxDeltaY - 100, Math.min(maxDeltaY + 100, newY));
    }

    setPan({ x: newX, y: newY });
  };

  // Handler untuk Mouse (Desktop)
  const handleMouseDown = (e: React.MouseEvent) => startDrag(e.clientX, e.clientY);
  const handleMouseMove = (e: React.MouseEvent) => {
    e.preventDefault();
    moveDrag(e.clientX, e.clientY);
  };

  // Handler untuk Touch (Mobile)
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) { // Hanya aktif jika 1 jari (menghindari konflik dengan pinch-to-zoom bawaan browser)
      startDrag(e.touches[0].clientX, e.touches[0].clientY);
    }
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      moveDrag(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center p-4 animate-fadeIn select-none">
      
      {/* Backdrop Gelap dengan Efek Blur */}
      <div 
        className="absolute inset-0 bg-slate-950/95 backdrop-blur-md transition-opacity"
        onClick={handleClose}
      />

      {/* TOP FLOATING BAR */}
      <div className="fixed top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
        <div className="bg-slate-900/80 border border-slate-800 text-slate-300 text-xs px-3 py-1.5 rounded-xl backdrop-blur-sm hidden sm:block max-w-xs truncate">
          {imageAlt}
        </div>

        <div className="flex items-center gap-2 pointer-events-auto ml-auto">
          <div className="flex items-center bg-slate-900/80 border border-slate-800 rounded-xl overflow-hidden backdrop-blur-sm p-0.5">
            <button 
              onClick={handleZoomIn}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              title="Perbesar"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button 
              onClick={handleZoomOut}
              disabled={scale === 1}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors disabled:opacity-40"
              title="Perkecil"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <button 
              onClick={handleRotate}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              title="Putar 90°"
            >
              <RotateCw className="w-4 h-4" />
            </button>
          </div>

          <button 
            onClick={handleClose}
            className="p-2.5 bg-rose-500/10 hover:bg-rose-500 border border-rose-500/20 hover:border-rose-600 text-rose-400 hover:text-white rounded-xl transition-all active:scale-95 shadow-lg shadow-rose-950/20"
            title="Tutup"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* KONTEN UTAMA: Area Render Gambar Fleksibel */}
      <div 
        ref={containerRef}
        className={`relative w-full h-full flex items-center justify-center z-10 overflow-hidden touch-none ${
          scale > 1 ? 'cursor-grab active:cursor-grabbing' : 'cursor-default'
        }`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        // Tambahan Event Handler untuk Mobile Screen:
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleDragEnd}
      >
        <div 
          className="relative w-full h-full flex items-center justify-center will-change-transform"
          style={{ 
            transform: `translate(${pan.x}px, ${pan.y}px) scale(${scale}) rotate(${rotate}deg)`,
            transition: isDragging ? 'none' : 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            priority
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-contain pointer-events-none drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)]"
          />
        </div>
      </div>

      {/* BOTTOM FOOTER BAR */}
      <div className="fixed bottom-6 bg-slate-900/80 border border-slate-800 text-slate-400 text-[11px] px-3 py-1 rounded-full backdrop-blur-sm tracking-wide z-20">
        Skala: {Math.round(scale * 100)}% {scale > 1 && '• Seret gambar untuk menggeser'}
      </div>

    </div>
  );
}