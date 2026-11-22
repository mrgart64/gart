import { GraduationCap } from 'lucide-react';

export default function EducationSection() {
  const educationHistory = [
    {
      period: "2026 - Sekarang",
      institution: "Universitas Mulawarman",
      degree: "S1 Informatika",
      description: "Fokus pada Software Engineering, Algoritma & Struktur Data, serta Pengembangan Web Modern (Full Stack).",
    },
    {
      period: "2023 - 2026",
      institution: "SMK Negeri 7 Samarinda",
      degree: "Teknik Jaringan Komputer & Telekomunikasi (TJKT)",
      description: "Mempelajari dasar-dasar jaringan komputer, Internet of Things (IoT), mempelajari web development secara otodidak, dan mengikuti kegiatan lomba.",
    },
    {
      period: "2020 - 2023",
      institution: "SMP Negeri 16 Samarinda",
      degree: "Sekolah Menengah Pertama (SMP)",
      description: "",
    },
    {
      period: "2014 - 2020",
      institution: "SD Negeri 022 Samarinda",
      degree: "Sekolah Dasar (SD)",
      description: "",
    },
  ];

  return (
    <section
      id="education"
      className="relative max-w-7xl mx-4 xl:mx-auto py-12 md:py-16 px-2 md:px-4"
    >
      {/* Header Utama Section */}
      <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
        <span className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 border border-red-300 text-xs font-mono font-bold uppercase tracking-wider text-red-600">
          <GraduationCap className="w-3.5 h-3.5" />
          Latar Belakang
        </span>

        <h2 className="text-3xl sm:text-4xl font-bold text-neutral-950 tracking-tight">
          Riwayat Pendidikan
        </h2>

        <p className="text-sm sm:text-base font-medium text-neutral-700 leading-relaxed">
          Pondasi akademis dan rekam jejak pendidikan formal yang mendukung karir saya di bidang pengembangan perangkat lunak.
        </p>
      </div>

      {/* Timeline Layout untuk Riwayat Pendidikan */}
      <div className="relative max-w-4xl mx-auto">
        {/* Garis Vertikal Timeline */}
        <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-neutral-300 -translate-x-1/2 hidden sm:block" />

        <div className="space-y-8">
          {educationHistory.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`relative flex flex-col sm:flex-row items-center ${isEven ? 'sm:flex-row-reverse' : ''
                  }`}
              >
                {/* Titik Indikator Timeline */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-red-600 border-2 border-red-600 z-10 hidden sm:block" />

                {/* Card Konten */}
                <div className="w-full sm:w-[calc(50%-2rem)]">
                  <div className="p-6 bg-white border border-neutral-300 hover:border-neutral-400 transition-all duration-300 group">
                    <span className="inline-block px-3 py-1 mb-3 text-xs font-mono font-bold text-red-600 bg-red-50 border border-red-300">
                      {item.period}
                    </span>

                    <h3 className="text-lg font-bold text-neutral-950 group-hover:text-red-600 transition-colors duration-200">
                      {item.degree}
                    </h3>

                    <h4 className="text-sm font-bold text-neutral-700 mt-1">
                      {item.institution}
                    </h4>

                    {item.description && (
                      <p className="text-xs sm:text-sm font-medium text-neutral-700 leading-relaxed mt-3">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}