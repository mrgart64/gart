'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageCircle,
  FolderKanban,
  GraduationCap,
  Menu,
  X,
  User,
  Medal,
  Contact,
} from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}

const navLinks: NavItem[] = [
  { label: 'Profil', href: '/#profile', icon: <User className="w-4 h-4" /> },
  { label: 'Prestasi', href: '/#achievements', icon: <Medal className="w-4 h-4" /> },
  { label: 'Portofolio', href: '/#portfolio', icon: <FolderKanban className="w-4 h-4" /> },
  { label: 'Pendidikan', href: '/#education', icon: <GraduationCap className="w-4 h-4" /> },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled
        ? 'py-2.5 px-4 bg-white/95 backdrop-blur-md border-b border-neutral-300 shadow-xs'
        : 'p-4 bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className={isScrolled ? 'px-2 sm:px-4 py-1' : 'px-6 py-2'}>
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center gap-3 group cursor-pointer">
                <div className="relative">
                  <Image
                    src="/images/logo-red.webp"
                    alt="Logo BASIS-64"
                    width={128}
                    height={128}
                    className={`relative w-12 h-12 object-contain transition-all duration-300 ${isScrolled
                      ? ''
                      : ''
                      }`}
                    priority
                  />
                </div>
                <div className="flex flex-col">
                  <span
                    className={`text-lg font-extrabold italic tracking-tighter leading-none transition-colors duration-300 ${isScrolled ? 'text-neutral-950' : 'text-white'
                      }`}
                  >
                    GART-64
                  </span>
                  <span
                    className={`text-xs font-mono tracking-widest uppercase mt-1 transition-colors duration-300 ${isScrolled ? 'text-red-700 font-bold' : 'text-red-500'
                      }`}
                  >
                    Hall of Fame
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div
              className={`hidden md:flex items-center gap-8 font-medium text-sm transition-colors duration-300 ${isScrolled ? 'text-neutral-700 font-bold' : 'text-neutral-300'
                }`}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`group relative flex items-center gap-2 transition-colors cursor-pointer ${isScrolled ? 'hover:text-neutral-950' : 'hover:text-white'
                    }`}
                >
                  {link.icon}
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${isScrolled
                      ? 'bg-red-600'
                      : 'bg-gradient-to-r from-red-800 to-red-700'
                      }`}
                  />
                </Link>
              ))}
            </div>

            {/* Desktop Action Button */}
            <div className="hidden md:flex items-center">
              <a
                href="#contact"
                className={`flex items-center gap-2 px-5 py-2 text-xs font-bold text-white transition-all active:scale-95 ${isScrolled
                  ? 'bg-red-500 hover:bg-red-600 border border-red-700'
                  : 'bg-red-600/70 border border-red-500/90 hover:scale-105 shadow-lg shadow-red-500/20'
                  }`}
              >
                <MessageCircle className="w-4 h-4" />
                Hubungi Saya
              </a>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className={`p-2 focus:outline-none transition-colors ${isScrolled
                  ? 'text-neutral-700 hover:text-neutral-950'
                  : 'text-neutral-300 hover:text-white'
                  }`}
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`md:hidden mt-2 p-4 flex flex-col gap-2 transition-colors ${isScrolled
                ? 'bg-white border border-neutral-300 text-neutral-950 shadow-md'
                : 'bg-neutral-950/80 border border-white/10 backdrop-blur-2xl rounded-2xl text-white'
                }`}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`flex items-center gap-3 p-3 text-sm font-medium transition-all ${isScrolled
                    ? 'text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100 font-bold'
                    : 'text-neutral-300 hover:text-white hover:bg-white/5 rounded-xl'
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.icon}
                  {link.label}
                </Link>
              ))}
              <div
                className={`pt-2 mt-2 ${isScrolled ? 'border-t border-neutral-200' : 'border-t border-white/10'
                  }`}
              >
                <a
                  href="#contact"
                  className={`flex items-center justify-center gap-2 w-full py-3 text-white font-bold text-xs tracking-wider uppercase transition-all active:scale-95 ${isScrolled
                    ? 'bg-red-500 hover:bg-red-600 border border-red-700'
                    : 'bg-red-700/70 border border-red-500/90 rounded-xl shadow-md shadow-blue-600/20'
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  <Contact className="w-4 h-4" />
                  Hubungi Saya
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}