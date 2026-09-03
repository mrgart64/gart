import { 
  Building2, 
  GraduationCap, 
  ShoppingBag, 
  Monitor, 
  Rocket, 
  Code2 
} from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      title: "Company Profile",
      description: "Hadirkan citra profesional dan bangun kredibilitas bisnis Anda di mata klien secara global.",
      icon: Building2,
    },
    {
      title: "Portal Edukasi & E-Learning",
      description: "Sistem informasi akademik terpadu, pendaftaran online, dan manajemen materi pembelajaran.",
      icon: GraduationCap,
    },
    // {
    //   title: "Toko Online & E-Commerce",
    //   description: "Perluas jangkauan pasar UMKM dengan sistem katalog produk, order, dan pembayaran otomatis.",
    //   icon: ShoppingBag,
    // },
    {
      title: "Sistem Informasi Kustom",
      description: "Solusi manajemen data internal mulai dari inventaris gudang, absensi, hingga aplikasi kasir (POS).",
      icon: Monitor,
    },
    {
      title: "High-Converting Landing Page",
      description: "Halaman penawaran khusus yang didesain interaktif untuk memaksimalkan konversi iklan dan penjualan.",
      icon: Rocket,
    },
    {
      title: "Custom Web Development",
      description: "Pengembangan platform digital dengan fitur khusus yang disesuaikan penuh dengan alur bisnis Anda.",
      icon: Code2,
    },
  ];

  return (
    <section id="services" className="relative max-w-7xl mx-4 xl:mx-auto p-6 md:p-12 bg-white/50 backdrop-blur-xs border border-slate-200 rounded-3xl overflow-hidden shadow-sm mt-6">
      
      {/* Header Utama Section */}
      <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-xs font-semibold text-blue-500">
          Layanan Kami
        </div>
        
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
          Melayani Pembuatan <span className="text-transparent bg-clip-text bg-blue-500">Website</span>
        </h2>
        
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Solusi digital lengkap yang dirancang khusus untuk memenuhi segala kebutuhan digitalisasi bisnis Anda.
        </p>
      </div>

      {/* Grid Layout untuk Card Layanan */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => {
          const IconComponent = service.icon;
          return (
            <div 
              key={index} 
              className="group p-6 bg-white/80 border border-slate-200 rounded-2xl hover:shadow-md hover:border-blue-200 transition-all duration-300 transform active:scale-[0.99]"
            >
              {/* Tempat Wadah Ikon Berwarna Biru Lembut */}
              <div className="w-10 h-10 flex items-center justify-center bg-blue-50 border border-blue-100 rounded-xl text-blue-500 mb-5 group-hover:bg-blue-500 group-hover:text-white group-hover:border-blue-600 transition-all duration-300">
                <IconComponent className="w-5 h-5" />
              </div>

              {/* Judul Layanan */}
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-500 transition-colors duration-200 mb-2">
                {service.title}
              </h3>

              {/* Deskripsi Layanan */}
              <p className="text-sm text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>

    </section>
  );
}