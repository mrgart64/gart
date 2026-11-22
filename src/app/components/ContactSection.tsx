'use client';

import { MessageSquare, Mail, CameraIcon, ArrowUpRight, PhoneCall, Phone } from 'lucide-react';

export default function ContactSection() {
  const contacts = [
    {
      name: "WhatsApp",
      value: "+62 822-1150-9216 (Gabriel)",
      label: "Respons cepat (08:00 - 21:00 WITA)",
      href: "https://wa.me/6282211509216",
      icon: Phone,
      iconClass: "text-emerald-700 bg-emerald-50 border-emerald-200 group-hover:bg-red-600 group-hover:border-red-600 group-hover:text-white"
    },
    {
      name: "Instagram",
      value: "@mrgart64",
      label: "Ikuti portofolio & aktivitas terbaru",
      href: "https://instagram.com/mrgart64",
      icon: CameraIcon,
      iconClass: "text-pink-700 bg-pink-50 border-pink-200 group-hover:bg-red-600 group-hover:border-red-600 group-hover:text-white"

    },
    {
      name: "Official Email",
      value: "official@basis64.com",
      label: "Kirim pesan ke email resmi BASIS-64",
      href: "mailto:official@basis64.com",
      icon: Mail,
      iconClass: "text-red-600 bg-red-50 border-red-200 group-hover:bg-red-600 group-hover:border-red-600 group-hover:text-white"
    }
  ];

  return (
    <section
      id="contact"
      className="relative max-w-7xl mx-4 xl:mx-auto py-12 md:py-16 px-2 md:px-4"
    >
      {/* Header Utama Section */}
      <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
        <span className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 border border-red-300 text-xs font-mono font-bold uppercase tracking-wider text-red-600">
          Hubungi Saya
        </span>

        <h2 className="text-3xl sm:text-4xl font-bold text-neutral-950 tracking-tight">
          Informasi Kontak Ada di Sini
        </h2>

        <p className="text-sm sm:text-base font-medium text-neutral-700 leading-relaxed">
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
              className="group flex flex-col justify-between p-6 bg-white border border-neutral-300 hover:border-red-600 transition-all duration-300 active:scale-[0.98]"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  {/* Wadah Ikon */}
                  <div className={`w-12 h-12 flex items-center justify-center border transition-all duration-300 ${contact.iconClass}`}>
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Indikator Panah Keluar */}
                  <ArrowUpRight className="w-5 h-5 text-neutral-700 group-hover:text-red-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>

                <h3 className="text-sm font-bold text-neutral-700 group-hover:text-neutral-950 transition-colors">
                  {contact.name}
                </h3>

                <p className="text-base text-neutral-950 font-bold mt-1 break-words">
                  {contact.value}
                </p>
              </div>

              <p className="text-xs font-medium text-neutral-700 mt-4 pt-4 border-t border-neutral-200">
                {contact.label}
              </p>
            </a>
          );
        })}
      </div>
    </section>
  );
}