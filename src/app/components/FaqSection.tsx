'use client';

import { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

export default function FaqSection() {
  // State untuk menyimpan indeks FAQ yang sedang terbuka (null artinya semua tertutup)
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Daftar Pertanyaan & Jawaban berdasarkan referensi image_c0f90a.png (dengan copywriting yang disempurnakan)
  const faqs: FaqItem[] = [
    {
      question: "Berapa lama proses pembuatan website?",
      answer: "Durasi pengerjaan sangat bergantung pada kompleksitas fitur paket yang Anda pilih. Untuk Landing Page berkisar antara 3-7 hari kerja, sedangkan untuk sistem kustom atau E-Commerce berskala enterprise membutuhkan waktu sekitar 2-4 minggu.",
    },
    {
      question: "Apa saja yang perlu saya siapkan?",
      answer: "Anda hanya perlu menyiapkan data dasar bisnis Anda seperti nama domain yang diinginkan, logo perusahaan, profil singkat, katalog produk atau layanan, serta dokumen tulisan/foto yang ingin dimasukkan ke dalam website.",
    },
    {
      question: "Apakah ada biaya perpanjangan tahunan?",
      answer: "Ya, untuk tahun berikutnya Anda hanya dikenakan biaya sewa domain dan cloud hosting premium. Biaya ini bersifat wajib di seluruh dunia agar website Anda tetap aktif, aman, dan dapat terus diakses oleh publik secara online.",
    },
    {
      question: "Apakah website bisa diedit sendiri nantinya?",
      answer: "Tentu saja! Setiap website yang kami bangun sudah terintegrasi dengan Dashboard CMS (Content Management System) yang ramah pengguna. Kami juga memberikan panduan eksklusif (guided training) agar Anda bisa mengubah teks, gambar, atau produk secara mandiri tanpa perlu keahlian coding.",
    },
  ];

  const toggleFaq = (index: number) => {
    // Jika indeks yang diklik sudah terbuka, maka tutup (set ke null). Jika belum, buka indeks tersebut.
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative max-w-7xl mx-4 xl:mx-auto p-6 md:p-12 bg-white/50 backdrop-blur-xs border border-slate-200 rounded-3xl overflow-hidden shadow-sm mt-6">
      
      {/* Header Utama Section */}
      <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-xs font-semibold text-blue-500 uppercase tracking-wider">
          <HelpCircle className="w-3.5 h-3.5" />
          FAQ
        </div>
        
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
          Pertanyaan <span className="text-transparent bg-clip-text bg-blue-500">Umum</span> (FAQ)
        </h2>
        
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Butuh informasi lebih lanjut? Berikut adalah rangkuman pertanyaan yang paling sering diajukan oleh calon mitra kami.
        </p>
      </div>

      {/* List Akordeon FAQ Berdasarkan Desain Struktur image_c0f90a.png */}
      <div className="max-w-3xl mx-auto space-y-3">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div 
              key={index}
              className={`bg-white/80 border rounded-2xl overflow-hidden transition-all duration-300 ${
                isOpen 
                  ? 'border-blue-200 shadow-sm shadow-blue-500/5 ring-1 ring-blue-500/20' 
                  : 'border-slate-100 shadow-sm hover:border-slate-200'
              }`}
            >
              {/* Tombol Pertanyaan (Header Baris) */}
              <button
                onClick={() => toggleFaq(index)}
                className="cursor-pointer w-full flex items-center justify-between p-5 text-left gap-4 transition-colors focus:outline-none select-none"
              >
                <span className={`text-sm sm:text-base font-bold transition-colors duration-200 ${
                  isOpen ? 'text-blue-500' : 'text-slate-800'
                }`}>
                  {faq.question}
                </span>
                
                {/* Ikon Panah dengan Animasi Rotasi Halus */}
                <ChevronDown className={`w-4 h-4 text-slate-400 flex-shrink-0 transition-transform duration-300 ${
                  isOpen ? 'transform rotate-180 text-blue-500' : ''
                }`} />
              </button>

              {/* Box Jawaban dengan Transisi Tinggi Maksimal (Accordion Expand Effect) */}
              <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                isOpen ? 'max-h-[500px] border-t border-slate-50' : 'max-h-0'
              }`}>
                <p className="p-5 text-xs sm:text-sm text-slate-500 leading-relaxed bg-slate-50/40">
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
