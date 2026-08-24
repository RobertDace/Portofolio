"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    {
      name: t.nav.hero,
      id: "hero",
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 00-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 00-1 1m-6 0h6" />
        </svg>
      ),
    },
    {
      name: t.nav.about,
      id: "about",
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
    {
      name: t.nav.experience,
      id: "experience",
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      name: t.nav.projects,
      id: "projects",
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
        </svg>
      ),
    },
    {
      name: t.nav.skills,
      id: "skills",
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
    },
    {
      name: t.nav.contact,
      id: "contact",
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPos = window.scrollY + window.innerHeight * 0.35;
          const sectionIds = ["contact", "skills", "projects", "experience", "about", "hero"];

          for (const id of sectionIds) {
            const el = document.getElementById(id);
            if (el) {
              const top = el.offsetTop;
              if (scrollPos >= top) {
                setActiveSection(id);
                break;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -20;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed z-50 left-1/2 -translate-x-1/2 bottom-5 md:bottom-auto md:top-6 max-w-[96vw] md:max-w-fit pointer-events-auto select-none"
    >
      <nav className="flex items-center gap-1 sm:gap-1.5 px-2 py-1.5 rounded-full bg-[#0b0f19]/90 backdrop-blur-xl border border-slate-800/90 shadow-[0_12px_40px_rgba(0,0,0,0.7)]">
        
        {/* Brand Logo */}
        <button
          onClick={() => scrollTo("hero")}
          className="flex items-center pl-2.5 pr-2 py-1 text-cyan-400 font-black text-xs sm:text-sm tracking-wider border-r border-slate-800 mr-1 cursor-pointer transition-transform active:scale-95 flex-shrink-0 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none rounded-lg"
          aria-label={t.nav.backToTop}
        >
          2OB1T
        </button>

        {/* Navigation Items (Stable Fixed Touch Targets on Mobile) */}
        <div className="flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`relative w-8 h-8 sm:w-9 sm:h-9 md:w-auto md:h-auto flex items-center justify-center gap-1.5 md:px-3 md:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer active:scale-90 flex-shrink-0 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none ${
                  isActive
                    ? "text-slate-950 font-bold"
                    : "text-slate-400 hover:text-slate-100 hover:bg-slate-800/40"
                }`}
                aria-label={item.name}
                title={item.name}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-emerald-400 shadow-[0_0_15px_rgba(6,182,212,0.6)] -z-10 transform-gpu"
                    transition={{ type: "spring", stiffness: 420, damping: 30 }}
                  />
                )}

                <span className={`flex items-center justify-center ${isActive ? "text-slate-950" : "text-slate-400"}`}>
                  {item.icon}
                </span>

                {/* Menu Name shown only on desktop */}
                <span className="hidden md:inline whitespace-nowrap">{item.name}</span>
              </button>
            );
          })}
        </div>

        {/* Language Switcher Segmented Control */}
        <div className="pl-1.5 ml-1 border-l border-slate-800 flex items-center">
          <div className="flex items-center p-0.5 rounded-full bg-slate-950 border border-slate-800 relative">
            <button
              onClick={() => setLanguage("id")}
              className={`relative px-2 py-1 rounded-full text-[10px] sm:text-xs font-mono font-bold transition-colors cursor-pointer z-10 ${
                language === "id" ? "text-slate-950" : "text-slate-400 hover:text-slate-200"
              }`}
              title="Bahasa Indonesia"
              aria-label="Ubah ke Bahasa Indonesia"
            >
              {language === "id" && (
                <motion.div
                  layoutId="languageIndicator"
                  className="absolute inset-0 rounded-full bg-cyan-400 -z-10 shadow-sm"
                  transition={{ type: "spring", stiffness: 420, damping: 30 }}
                />
              )}
              ID
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={`relative px-2 py-1 rounded-full text-[10px] sm:text-xs font-mono font-bold transition-colors cursor-pointer z-10 ${
                language === "en" ? "text-slate-950" : "text-slate-400 hover:text-slate-200"
              }`}
              title="English"
              aria-label="Switch to English"
            >
              {language === "en" && (
                <motion.div
                  layoutId="languageIndicator"
                  className="absolute inset-0 rounded-full bg-cyan-400 -z-10 shadow-sm"
                  transition={{ type: "spring", stiffness: 420, damping: 30 }}
                />
              )}
              EN
            </button>
          </div>
        </div>

      </nav>
    </motion.header>
  );
}
