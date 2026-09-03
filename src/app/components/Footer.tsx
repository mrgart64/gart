import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { label: "Profil", href: "#profile" },
    { label: "Portofolio", href: "#portofolio" },
    { label: "Tech Stack", href: "#tech-stack" },
    { label: "Pendidikan", href: "#education" },
    { label: "Traffic", href: "#traffic" },
    { label: "Prestasi", href: "#achievements" },
    // { label: "Kontak", href: "#contact" }
  ];

  return (
    <footer className="relative max-w-7xl mx-4 xl:mx-auto mt-12 bg-white/5 backdrop-blur-[1px] border-t border-x border-white/10 rounded-t-3xl overflow-hidden shadow-xl shadow-red-500/5">
      {/* Glow Merah Samar di Belakang Footer */}
      {/* <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500/10 via-transparent to-red-500/5 rounded-t-3xl blur-xl -z-10 pointer-events-none" /> */}

      {/* Konten Utama Footer */}
      <div className="p-6 md:p-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">

        {/* KOLOM KIRI: Logo & Identitas */}
        <div className="md:col-span-6 flex items-center gap-4">
          <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center p-1 bg-white/5 border border-white/10 rounded-2xl">
            <Image
              src="/images/logo.webp"
              alt="Logo BASIS-64"
              width={128}
              height={128}
              className="w-12 h-12 object-contain"
              priority
            />
          </div>

          <div className="flex flex-col">
            <span className="text-xl font-extrabold text-white tracking-wider leading-none uppercase">
              BASIS-64
            </span>
            <span className="text-[10px] font-bold text-red-400 tracking-[0.15em] uppercase mt-1 leading-none">
              BUSINESS & DEVELOPMENT
            </span>
          </div>
        </div>

        {/* KOLOM KANAN: Navigasi Cepat */}
        <div className="md:col-span-6 flex flex-wrap justify-start md:justify-end gap-x-6 gap-y-2">
          {navigationLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-xs sm:text-sm font-medium text-gray-300 hover:text-red-400 transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

      </div>

      {/* Baris Hak Cipta (Copyright Bar) */}
      <div className="border-t border-white/10 bg-black/30 backdrop-blur-xs px-6 md:px-12 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-[11px] text-gray-300 text-center sm:text-left">
          &copy; {currentYear} <span className="font-semibold text-white">BASIS-64</span>. Hak Cipta Dilindungi.
        </p>
        <p className="text-[11px] text-gray-300">
          Built with Next.js & Tailwind CSS
        </p>
      </div>

    </footer>
  );
}