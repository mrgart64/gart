import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { label: "Profil", href: "#profile" },
    { label: "Prestasi", href: "#achievements" },
    { label: "Portofolio", href: "#portofolio" },
    { label: "Pendidikan", href: "#education" },
    { label: "Tech Stack", href: "#tech-stack" },
    { label: "Kontak", href: "#contact" }
  ];

  return (
    <footer className="relative max-w-7xl mx-4 xl:mx-auto mt-12 bg-white border-t border-x border-neutral-300 overflow-hidden">
      {/* Konten Utama Footer */}
      <div className="p-6 md:p-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">

        {/* KOLOM KIRI: Logo & Identitas */}
        <div className="md:col-span-6 flex items-center gap-4">
          <div className="relative flex-shrink-0 w-14 h-14 flex items-center justify-center overflow-hidden">
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
            <span className="text-xl font-extrabold text-neutral-950 tracking-wider leading-none uppercase">
              BASIS-64
            </span>
            <span className="text-[10px] font-bold text-red-600 tracking-[0.15em] uppercase mt-1 leading-none">
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
              className="text-xs sm:text-sm font-bold text-neutral-700 hover:text-red-600 transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

      </div>

      {/* Baris Hak Cipta (Copyright Bar) */}
      <div className="border-t border-neutral-300 bg-neutral-50 px-6 md:px-12 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-[11px] font-medium text-neutral-700 text-center sm:text-left">
          &copy; {currentYear} <span className="font-bold text-neutral-950">BASIS-64</span>. Hak Cipta Dilindungi.
        </p>
        <p className="text-[11px] font-medium text-neutral-700">
          Built with Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}