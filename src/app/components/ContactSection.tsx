'use client';

import { MessageSquare, Mail, CameraIcon, ArrowUpRight } from 'lucide-react';

export default function ContactSection() {
  const contacts = [
    {
      name: "WhatsApp",
      value: "+62 822-1150-9216 (Gabriel)",
      label: "Respons cepat (08:00 - 21:00 WITA)",
      href: "https://wa.me/6282211509216",
      icon: MessageSquare,
      colorClass: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-white"
    },
    {
      name: "Instagram",
      value: "@mrgart64",
      label: "Ikuti portofolio & aktivitas terbaru",
      href: "https://instagram.com/mrgart64",
      icon: CameraIcon,
      colorClass: "text-pink-400 bg-pink-500/10 border-pink-500/20 group-hover:bg-gradient-to-tr group-hover:from-amber-500 group-hover:to-purple-600 group-hover:text-white"
    },
    {
      name: "Official Email",
      value: "official@basis64.com",
      label: "Kirim pesan ke email resmi BASIS-64",
      href: "mailto:official@basis64.com",
      icon: Mail,
      colorClass: "text-red-400 bg-red-500/10 border-red-500/20 group-hover:bg-red-500 group-hover:text-white"
    }
  ];

  return (
    <section
      id="contact"
      className="relative max-w-7xl mx-4 xl:mx-auto p-6 md:p-12 bg-white/5 backdrop-blur-[1px] border border-white/10 rounded-3xl overflow-hidden shadow-xl shadow-red-500/5 mt-6"
    >
      {/* Glow Merah Samar di Belakang Section */}
      {/* <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500/10 via-transparent to-red-500/5 rounded-3xl blur-xl -z-10 pointer-events-none" /> */}

      {/* Header Utama Section */}
      <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
        <span className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/10 border border-red-500/20 rounded-md text-xs font-mono uppercase tracking-wider text-red-500">
          Hubungi Saya
        </span>

        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Informasi Kontak Ada di Sini
          {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-white to-red-500">
            Ada di Sini
          </span> */}
        </h2>

        <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
          Punya pertanyaan, tawaran kerja sama, atau siap membangun platform digital impian Anda? Silakan hubungi melalui kontak di bawah.
        </p>
      </div>

      {/* Grid Kontak Langsung */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {contacts.map((contact, index) => {
          const IconComponent = contact.icon;
          return (
            <a
              key={index}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl shadow-sm hover:border-red-500/30 hover:shadow-lg hover:shadow-red-500/5 transition-all duration-300 active:scale-[0.98]"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  {/* Wadah Ikon */}
                  <div className={`w-12 h-12 flex items-center justify-center border rounded-xl transition-all duration-300 ${contact.colorClass}`}>
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Indikator Panah Keluar */}
                  <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-red-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>

                <h3 className="text-base font-bold text-gray-200 group-hover:text-white transition-colors">
                  {contact.name}
                </h3>

                <p className="text-sm text-white font-semibold mt-1">
                  {contact.value}
                </p>
              </div>

              <p className="text-xs text-gray-300 mt-4 pt-4 border-t border-white/5">
                {contact.label}
              </p>
            </a>
          );
        })}
      </div>

    </section>
  );
}