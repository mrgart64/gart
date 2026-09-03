'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home,
  Briefcase,
  FolderKanban,
  Tag,
  MessageCircle,
  GraduationCap,
  Menu,
  X,
  User,
  Medal,
  Contact,
} from 'lucide-react';
import { Graduate } from 'next/font/google';

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}

const navLinks: NavItem[] = [
  { label: 'Profil', href: '/#profile', icon: <User className="w-4 h-4" /> },
  { label: 'Portofolio', href: '/#portfolio', icon: <FolderKanban className="w-4 h-4" /> },
  { label: 'Pendidikan', href: '/#education', icon: <GraduationCap className="w-4 h-4" /> },
  { label: 'Prestasi', href: '/#achievements', icon: <Medal className="w-4 h-4" /> },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="sticky top-0 z-50 w-full p-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-neutral-950/70 border border-white/10 backdrop-blur-[3px] rounded-2xl px-6 py-2 shadow-[0_0.5rem_2rem_0_rgba(0,0,0,0.8)]">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center gap-3 group cursor-pointer">
                <div className="relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-red-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000" />
                  <Image
                    src="/images/logo-red.webp"
                    alt="Logo BASIS-64"
                    width={128}
                    height={128}
                    className="relative w-12 h-12 object-contain rounded-full  border-white/20"
                    priority
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold tracking-tighter text-white leading-none">
                    GART-64
                  </span>
                  <span className="text-[0.625rem] text-red-400 font-mono tracking-widest uppercase mt-1">
                    Hall of Fame
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8 font-medium text-sm text-neutral-300">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="group relative flex items-center gap-2 hover:text-white transition-colors cursor-pointer"
                >
                  {link.icon}
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-800 to-red-700 transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* Desktop Action Button */}
            <div className="hidden md:flex items-center">
              <a
                href="#contact"
                className="flex items-center gap-2 px-5 py-2 text-xs font-bold text-white bg-red-700/70 border border-red-500/90 rounded-xl hover:scale-105 active:scale-95 transition-all shadow-lg shadow-red-500/20"
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
                className="text-neutral-300 hover:text-white p-2 focus:outline-none"
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
              className="md:hidden mt-2 p-4 bg-neutral-950/80 border border-white/10 backdrop-blur-2xl rounded-2xl flex flex-col gap-2 text-white"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-3 p-3 text-sm font-medium text-neutral-300 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  {link.icon}
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 border-t border-white/10 mt-2">
                <a
                  href="#contact"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-red-700/70 border border-red-500/90 text-white font-bold rounded-xl text-xs tracking-wider uppercase transition-all active:scale-95 shadow-md shadow-blue-600/20"
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