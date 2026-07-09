"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// 6 Menu Navigasi Lengkap
const navItems = [
  {
    name: "Beranda",
    href: "#hero",
    icon: (
      <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 00-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 00-1 1m-6 0h6" />
      </svg>
    ),
  },
  {
    name: "Tentang",
    href: "#about",
    icon: (
      <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    name: "Pengalaman",
    href: "#experience",
    icon: (
      <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    name: "Proyek",
    href: "#projects",
    icon: (
      <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
      </svg>
    ),
  },
  {
    name: "Keahlian",
    href: "#skills",
    icon: (
      <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
  },
  {
    name: "Kontak",
    href: "#contact",
    icon: (
      <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "experience", "projects", "skills", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="fixed z-50 left-1/2 -translate-x-1/2 
                 bottom-4 md:bottom-auto md:top-6 
                 max-w-[95vw] md:max-w-fit pointer-events-auto"
    >
      <nav className="flex items-center gap-1 p-1.5 rounded-full bg-[#0b0f19]/90 backdrop-blur-xl border border-slate-800/80 shadow-[0_10px_35px_rgba(0,0,0,0.6)]">
        
        {/* Brand Logo 2OB1T */}
        <a
          href="#hero"
          className="flex items-center pl-3 pr-2 py-1 text-cyan-400 font-black text-xs sm:text-sm tracking-wider border-r border-slate-800/80 mr-0.5 select-none flex-shrink-0"
        >
          2OB1T
        </a>

        {/* Menu Items (Di HP hanya Icon + Active Glow, Teks muncul di Layar Lebih Besar) */}
        <div className="flex items-center gap-0.5 sm:gap-1">
          {navItems.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;

            return (
              <a
                key={item.name}
                href={item.href}
                title={item.name}
                className={`relative flex items-center justify-center gap-1.5 px-2.5 py-2 sm:px-3.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-200 flex-shrink-0 ${
                  isActive
                    ? "text-slate-950 font-bold"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/30"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabPill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 shadow-[0_0_20px_rgba(6,182,212,0.6)] -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 28 }}
                  />
                )}

                <span className={`${isActive ? "text-slate-950" : "text-slate-400"}`}>
                  {item.icon}
                </span>

                {/* Nama Menu HANYA muncul di layar sm/md ke atas */}
                <span className="hidden md:inline whitespace-nowrap">{item.name}</span>
              </a>
            );
          })}
        </div>
      </nav>
    </motion.header>
  );
}