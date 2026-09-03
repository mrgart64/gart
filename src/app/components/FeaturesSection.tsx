import {
  Smartphone,
  UserCheck,
  Database,
  BarChart3,
  HardDrive,
  Globe,
  Wrench
} from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    { text: "Full-stack JavaScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { text: "Python", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { text: "ReactJS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { text: "NextJS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { text: "Tailwind CSS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { text: "PHP", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    { text: "Laravel", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
    { text: "Cloudflare", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg" },
    { text: "AWS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },];

  return (
    <section
      id="tech-stack"
      className="relative max-w-7xl mx-4 xl:mx-auto p-6 md:p-12 bg-white/5 backdrop-blur-[1px] border border-white/10 rounded-3xl overflow-hidden shadow-xl shadow-red-500/5 mt-6"
    >
      {/* Header Utama */}
      <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-mono uppercase tracking-wider">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          Tech Stack
        </span>

        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Kemampuan yang Saya Miliki
        </h2>

        <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
          Di bawah ini adalah tech stack yang pernah saya gunakan
        </p>
      </div>

      {/* Grid Layout untuk Fitur */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-red-500/30 transition-all duration-300 active:scale-[0.98]"
          >
            {/* Wadah Gambar */}
            <div className="flex-shrink-0 w-9 h-9 flex items-center justify-center bg-red-500/10 border border-red-500/20 rounded-xl transition-all duration-300 shadow-sm shadow-red-500/20 overflow-hidden p-1.5">
              <img
                src={feature.image}
                alt={feature.text}
                className="w-full h-full object-contain filter group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            {/* Teks Keunggulan */}
            <span className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors duration-200">
              {feature.text}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}