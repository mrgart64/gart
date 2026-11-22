'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Trophy, Award, GraduationCap, Calendar, MapPin, ArrowUpRight } from 'lucide-react';
import GalleryModal from './GalleryModal';

interface GalleryItem {
    title: string;
    subtitle: string;
    image: string;
    siteUrl: string;
}

interface Achievement {
    title: string;
    event: string;
    year: string;
    level: string;
    location?: string;
    description: string;
    thumbnail: string;
    images?: GalleryItem[];
}

interface EducationGroup {
    levelName: string;
    schoolName: string;
    achievements: Achievement[];
}

export default function AchievementSection() {
    const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);
    const [showModal, setShowModal] = useState(false);

    const educationAchievements: EducationGroup[] = [
        {
            levelName: "Sekolah Menengah Kejuruan (SMK)",
            schoolName: "SMK Negeri 7 Samarinda",
            achievements: [
                {
                    title: "Medallion of Excellence LKSN Cloud Computing 2025",
                    event: "Puspresnas",
                    year: "2025",
                    level: "Nasional",
                    location: "PPSDM Kemendikdasmen",
                    description: "Meraih penghargaan Medallion of Excellence dengan menempati peringkat 10 besar dari 24 peserta di tingkat nasional.",
                    thumbnail: "/achievements/lksn-cloud-2025/thumbnail.webp",
                    images: [
                        {
                            title: "Sertifikat MoE",
                            subtitle: "Sertifikat Medallion of Excellence.",
                            image: "/achievements/lksn-cloud-2025/moe.webp",
                            siteUrl: "#"
                        },
                        {
                            title: "Sertifikat Finalis",
                            subtitle: "Sertifikat Finalis.",
                            image: "/achievements/lksn-cloud-2025/finalis.webp",
                            siteUrl: "#"
                        }
                    ]
                },
                {
                    title: "Juara 1 LKS Provinsi Cloud Computing 2025",
                    event: "Disdikbud Kalimantan Timur",
                    year: "2025",
                    level: "Provinsi",
                    location: "SMKN Negeri 7 Samarinda",
                    description: "Meraih juara 1 dari 4 peserta di tingkat provinsi. Menunjukkan kompetensi unggul dalam mengelola arsitektur cloud.",
                    thumbnail: "/achievements/lksp-cloud-2025/thumbnail.webp",
                    images: [
                        {
                            title: "Sertifikat Juara 1",
                            subtitle: "Sertifikat Juara 1 LKS Cloud Computing tingkat provinsi.",
                            image: "/achievements/lksp-cloud-2025/juara.webp",
                            siteUrl: "#"
                        },
                        {
                            title: "Sertifikat Peserta",
                            subtitle: "Sertifikat peserta LKS Cloud Computing tingkat provinsi.",
                            image: "/achievements/lksp-cloud-2025/peserta.webp",
                            siteUrl: "#"
                        }
                    ]
                },
                {
                    title: "Juara 1 Lomba Cerdas Cermat Mikrotik Fest 2024",
                    event: "Universitas Mulawarman",
                    year: "2024",
                    level: "Kota",
                    location: "HIMAPKOM FKIP UNMUL",
                    description: "Meraih juara 1 dari 3 peserta di lomba cerdas cermat Mikrotik Fest 2024 di Universitas Mulawarman.",
                    thumbnail: "/achievements/mikrotik-fest-2024/thumbnail.webp",
                    images: [
                        {
                            title: "Sertifikat Juara 1",
                            subtitle: "Sertifikat juara 1 lomba cerdas cermat Mikrotik Fest 2024.",
                            image: "/achievements/mikrotik-fest-2024/juara.webp",
                            siteUrl: "#"
                        },
                        {
                            title: "Selamat & Sukses",
                            subtitle: "Foto peserta satu kelompok lomba cerdas cermat Mikrotik Fest 2024.",
                            image: "/achievements/mikrotik-fest-2024/selamat-dan-sukses.webp",
                            siteUrl: "#"
                        },
                        {
                            title: "Dokumentasi Penerimaan Hadiah",
                            subtitle: "Foto dokumentasi kelompok yang juara lomba cerdas cermat Mikrotik Fest 2024.",
                            image: "/achievements/mikrotik-fest-2024/dokumentasi-1.webp",
                            siteUrl: "#"
                        },
                        {
                            title: "Dokumentasi Juara",
                            subtitle: "Foto bersama kelompok yang juara lomba cerdas cermat Mikrotik Fest 2024.",
                            image: "/achievements/mikrotik-fest-2024/dokumentasi-2.webp",
                            siteUrl: "#"
                        }
                    ]
                },
            ]
        }
    ];

    return (
        <>
            <GalleryModal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                galleryItems={selectedAchievement?.images || []}
            />

            <section
                id="achievements"
                className="relative max-w-7xl mx-4 xl:mx-auto py-12 md:py-16 px-2 md:px-4"
            >
                {/* Header Utama Section */}
                <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 border border-red-200 text-xs font-mono font-bold uppercase tracking-wider text-red-600">
                        <Trophy className="w-3.5 h-3.5" />
                        Penghargaan & Prestasi
                    </span>

                    <h2 className="text-3xl sm:text-4xl font-bold text-neutral-950 tracking-tight">
                        Pencapaian Akademik & Non-Akademik
                    </h2>

                    <p className="text-sm sm:text-base font-medium text-neutral-700 leading-relaxed">
                        Berikut adalah rekam jejak kompetisi dan penghargaan yang berhasil saya raih selama menempuh pendidikan.
                    </p>
                </div>

                {/* Grouping Berdasarkan Jenjang Pendidikan */}
                <div className="space-y-12">
                    {educationAchievements.map((edu, eduIdx) => (
                        <div key={eduIdx} className="space-y-6">

                            {/* Sub-Header Jenjang Pendidikan */}
                            <div className="flex items-center gap-3 border-b border-neutral-300 pb-3">
                                <div className="p-2 bg-neutral-100 border border-neutral-300 text-neutral-900">
                                    <GraduationCap className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="text-lg sm:text-xl font-bold text-neutral-950">
                                        {edu.levelName}
                                    </h3>
                                    <p className="text-xs sm:text-sm font-medium text-neutral-700">
                                        {edu.schoolName}
                                    </p>
                                </div>
                            </div>

                            {/* Grid Prestasi Per Jenjang */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {edu.achievements.map((item, achievementIdx) => (
                                    <div
                                        key={achievementIdx}
                                        className="group flex flex-col bg-white border border-neutral-300 overflow-hidden hover:border-neutral-400 transition-all duration-300"
                                    >
                                        {/* Thumbnail Gambar Prestasi Tanpa Bingkai */}
                                        <div className="relative aspect-video w-full overflow-hidden">
                                            <Image
                                                src={item.thumbnail}
                                                alt={item.title}
                                                fill
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                        </div>

                                        {/* Konten Card */}
                                        <div className="p-5 flex flex-col flex-1">
                                            <div className="space-y-4 flex-1">
                                                {/* Badge Level & Tahun */}
                                                <div className="flex items-center justify-between gap-2">
                                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-neutral-100 border border-neutral-300 text-neutral-900 text-xs font-bold">
                                                        <Award className="w-3.5 h-3.5 text-red-600" />
                                                        {item.level}
                                                    </span>
                                                    <span className="inline-flex items-center gap-1 text-xs text-neutral-700 font-mono font-semibold">
                                                        <Calendar className="w-3.5 h-3.5" />
                                                        {item.year}
                                                    </span>
                                                </div>

                                                {/* Judul & Event */}
                                                <div>
                                                    <h4 className="text-base sm:text-lg font-bold text-neutral-950 group-hover:text-red-600 transition-colors duration-200">
                                                        {item.title}
                                                    </h4>
                                                    <p className="text-xs font-bold text-neutral-700 mt-1">
                                                        {item.event}
                                                    </p>
                                                </div>

                                                {/* Deskripsi */}
                                                <p className="text-xs sm:text-sm font-medium text-neutral-700 leading-relaxed">
                                                    {item.description}
                                                </p>
                                            </div>

                                            {/* Footer Card: Lokasi & Tombol CTA */}
                                            <div className="pt-4 mt-4 border-t border-neutral-300 space-y-4">
                                                {item.location && (
                                                    <div className="flex items-center gap-1.5 text-xs font-medium text-neutral-700">
                                                        <MapPin className="w-3.5 h-3.5 text-red-600 flex-shrink-0" />
                                                        <span>{item.location}</span>
                                                    </div>
                                                )}

                                                <button
                                                    onClick={() => { setShowModal(true); setSelectedAchievement(item); }}
                                                    className="cursor-pointer inline-flex items-center justify-center gap-1.5 w-full px-4 py-2.5 bg-red-500 hover:bg-red-600 border border-red-600 text-white font-semibold text-xs transition-all duration-300 active:scale-95 group/btn"
                                                >
                                                    <span>Lihat Selengkapnya</span>
                                                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}