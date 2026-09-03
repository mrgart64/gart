"use client";
import React, { useMemo, useState, useEffect } from 'react';

const StarField = () => {
    // State untuk memastikan komponen sudah terpasang di browser
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const generateStars = (count: number) => {
        const stars = [];
        for (let i = 0; i < count; i++) {
            stars.push(`${Math.floor(Math.random() * 2000)}px ${Math.floor(Math.random() * 2000)}px #FFF`);
        }
        return stars.join(', ');
    };

    // Bintang hanya dihitung saat komponen mounted di client
    const starsSmall = useMemo(() => mounted ? generateStars(700) : "", [mounted]);
    const starsMedium = useMemo(() => mounted ? generateStars(200) : "", [mounted]);
    const starsBig = useMemo(() => mounted ? generateStars(100) : "", [mounted]);

    // Jika belum mounted (masih di server), return div kosong atau hanya gradient saja
    if (!mounted) {
        return (
            <div className="fixed inset-0 z-0 bg-[#090A0F] overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_#35271B_0%,_#090A0F_100%)]" />
            </div>
        );
    }

    return (
        <div className="fixed -z-10 inset-0 z-0 bg-[#0F0A09] overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_#25070B_0%,_#0F0A09_100%)]" />

            {/* Star Layers */}
            <div
                className="stars-layer w-[1px] h-[1px]"
                style={{ boxShadow: starsSmall, animationDuration: '50s' }}
            />
            <div
                className="stars-layer w-[2px] h-[2px]"
                style={{ boxShadow: starsMedium, animationDuration: '100s' }}
            />
            <div
                className="stars-layer w-[3px] h-[3px]"
                style={{ boxShadow: starsBig, animationDuration: '150s' }}
            />

            <style jsx>{`
                .stars-layer {
                    background: transparent;
                    border-radius: 50%;
                    animation: animStar linear infinite;
                }
                @keyframes animStar {
                    from { transform: translateY(0px); }
                    to { transform: translateY(-2000px); }
                }
            `}</style>
        </div>
    );
};

export default StarField;