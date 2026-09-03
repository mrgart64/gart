import { Check, X, ShieldCheck, Zap, Building2, HelpCircle } from 'lucide-react';

export default function PricingSection() {
  const tiers = [
    {
      name: "Paket Hemat",
      price: "Rp 700.000",
      description: "Solusi instan dan terjangkau untuk kebutuhan landing page atau portofolio sederhana.",
      icon: Zap,
      badge: null,
      isPopular: false,
      features: [
        { text: "Optimasi Multi-Device (Mobile Friendly)", included: true },
        { text: "Sistem CMS & Hak Akses Admin", included: true },
        { text: "Gratis Setup Cloud Hosting & Domain (.my.id)", included: true },
        { text: "Garansi Maintenance (1 Bulan)", included: true },
        { text: "Manajemen Data Interaktif (CRUD System)", included: false },
        { text: "Dashboard Analitik & Statistik Real-Time", included: false },
        { text: "Arsitektur Database Kustom", included: false },
        { text: "Optimized SEO", included: false },
      ]
    },
    {
      name: "Paket Standar",
      price: "Rp 2.500.000",
      description: "Pilihan terbaik untuk bisnis, UMKM, dan profil perusahaan yang sedang berkembang.",
      icon: ShieldCheck,
      badge: "Paling Populer",
      isPopular: true,
      features: [
        { text: "Optimasi Multi-Device (Mobile Friendly)", included: true },
        { text: "Sistem CMS & Hak Akses Admin", included: true },
        { text: "Gratis Setup Cloud Hosting & Domain (.com)", included: true },
        { text: "Garansi Maintenance (3 Bulan)", included: true },
        { text: "Manajemen Data Interaktif (CRUD System)", included: true },
        { text: "Dashboard Analitik & Statistik Real-Time", included: true },
        { text: "Optimized SEO", included: true },
        { text: "Arsitektur Database Kustom", included: false },
      ]
    },
    {
      name: "Paket Business",
      price: "Rp 5.000.000",
      description: "Didesain khusus untuk platform yang berfokus pada kepuasan pelanggan.",
      icon: Building2,
      badge: "Skala Enterprise",
      isPopular: false,
      features: [
        { text: "Integrasi dengan asisten AI customer service", included: true },
        { text: "Optimasi Multi-Device (Mobile Friendly)", included: true },
        { text: "Sistem CMS & Hak Akses Admin Secure", included: true },
        { text: "Gratis Setup Cloud Hosting & Domain (.com, .id, atau .co.id)", included: true },
        { text: "Garansi Maintenance (6 Bulan)", included: true },
        { text: "Manajemen Data Interaktif (CRUD System)", included: true },
        { text: "Dashboard Analitik & Statistik Real-Time", included: true },
        { text: "Optimized SEO", included: true },
        { text: "Arsitektur Database Kustom", included: true },
      ]
    },
    {
      name: "Paket Custom",
      price: "Hubungi Kami",
      description: "Punya kebutuhan spesifik? Diskusikan fitur kustom Anda dan dapatkan penawaran terbaik.",
      icon: HelpCircle,
      badge: "Kustom Penuh",
      isPopular: false,
      features: [
        { text: "Fitur & Desain Sesuai Permintaan", included: true },
        { text: "Integrasi API Pihak Ketiga (Payment/Logistik)", included: true },
        { text: "Arsitektur Database Kompleks & Skalabel", included: true },
        { text: "Garansi Maintenance Sistem Eksklusif", included: true },
        { text: "Sesi Konsultasi Khusus & Dedicated Dev Team", included: true },
      ]
    }
  ];

  return (
    <section id="pricing" className="relative max-w-7xl mx-4 xl:mx-auto p-6 md:p-12 bg-white/50 backdrop-blur-xs border border-slate-200 rounded-3xl overflow-hidden shadow-sm mt-6">
      
      {/* Header Utama Section */}
      <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-xs font-semibold text-blue-500 uppercase tracking-wider">
          Harga
        </div>
        
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
          Pilihan Paket <span className="text-transparent bg-clip-text bg-blue-500">Harga</span>
        </h2>
        
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Pilih paket investasi digital yang paling sesuai dengan skala kebutuhan dan budget bisnis Anda saat ini.
        </p>
      </div>

      {/* Grid Layout untuk 4 Paket Kartu Harga */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        {tiers.map((tier, index) => {
          const IconHeader = tier.icon;
          return (
            <div 
              key={index} 
              className={`relative flex flex-col p-6 bg-white/80 border rounded-2xl transition-all duration-300 ${
                tier.isPopular 
                  ? 'border-blue-500 shadow-lg shadow-blue-500/5 ring-1 ring-blue-500 scale-[1.02] md:scale-100 lg:scale-[1.03] z-10' 
                  : 'border-slate-100 shadow-sm hover:shadow-md hover:border-slate-200'
              }`}
            >
              {/* Bagian Atas Kartu */}
              <div className="space-y-4 flex-shrink-0">
                <div className="flex items-center justify-between">
                  {/* Wadah Ikon Mini Paket */}
                  <div className={`w-9 h-9 flex items-center justify-center border rounded-xl ${
                    tier.isPopular ? 'bg-blue-500 text-white border-blue-600' : 'bg-blue-50 text-blue-500 border-blue-100'
                  }`}>
                    <IconHeader className="w-4 h-4" />
                  </div>
                  {/* Badge Atas */}
                  {tier.badge && (
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${
                      tier.isPopular ? 'bg-blue-50 border-blue-100 text-blue-500' : 'bg-slate-50 border-slate-200 text-slate-500'
                    }`}>
                      {tier.badge}
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-base font-bold text-slate-900">{tier.name}</h3>
                  <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed min-h-[32px]">{tier.description}</p>
                </div>

                <div className="pt-2 border-b border-slate-100 pb-4">
                  <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    {tier.price}
                  </span>
                  {tier.price !== "Hubungi Kami" && <span className="text-xs text-slate-400 font-normal"> /proyek</span>}
                </div>
              </div>

              {/* DAFTAR FITUR (DENGAN 2 MODE IKON: HIJAU VS ABU-ABU) */}
              <ul className="space-y-3 my-6 flex-1 text-xs">
                {tier.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-2.5">
                    {feature.included ? (
                      /* MODE 1: Ikon Hijau Centang Aktif */
                      <div className="flex-shrink-0 mt-0.5 w-4 h-4 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-500">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                    ) : (
                      /* MODE 2: Ikon Abu-abu Silang Non-aktif */
                      <div className="flex-shrink-0 mt-0.5 w-4 h-4 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-300">
                        <X className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                    )}
                    <span className={`leading-tight ${feature.included ? 'text-slate-700 font-medium' : 'text-slate-400 line-through decoration-slate-200'}`}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Tombol Aksi (CTA) Paling Bawah */}
              <button className={`w-full py-2.5 text-xs font-bold text-center rounded-xl transition-all active:scale-95 border ${
                tier.isPopular
                  ? 'bg-blue-500 hover:bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-500/10'
                  : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700'
              }`}>
                Pilih Paket
              </button>

            </div>
          );
        })}
      </div>

    </section>
  );
}