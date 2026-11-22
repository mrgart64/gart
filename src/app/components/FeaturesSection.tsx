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
    { text: "AWS", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD4feuNsr0VMPuP1orNmAutArzEzQBy9LygNds9lpdbQ&s=10" },
  ];

  return (
    <section
      id="tech-stack"
      className="relative max-w-7xl mx-4 xl:mx-auto py-12 md:py-16 px-2 md:px-4"
    >
      {/* Header Utama */}
      <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
        <span className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 border border-red-300 text-red-600 text-xs font-mono font-bold uppercase tracking-wider">
          <span className="w-2 h-2 bg-red-600 animate-pulse" />
          Tech Stack
        </span>

        <h2 className="text-3xl sm:text-4xl font-bold text-neutral-950 tracking-tight">
          Kemampuan yang Saya Miliki
        </h2>

        <p className="text-sm sm:text-base font-medium text-neutral-700 leading-relaxed">
          Di bawah ini adalah tech stack yang pernah saya gunakan
        </p>
      </div>

      {/* Grid Layout untuk Tech Stack */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group flex items-center gap-4 p-4 bg-white border border-neutral-300 hover:border-neutral-400 transition-all duration-300 active:scale-[0.98]"
          >
            {/* Logo Tanpa Bingkai */}
            <div className="relative flex-shrink-0 w-9 h-9 flex items-center justify-center overflow-hidden">
              <img
                src={feature.image}
                alt={feature.text}
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            {/* Nama Tech Stack */}
            <span className="text-sm font-bold text-neutral-900 group-hover:text-red-600 transition-colors duration-200">
              {feature.text}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}