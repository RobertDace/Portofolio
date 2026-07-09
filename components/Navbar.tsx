"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");

  const navItems = [
    { id: "hero", label: "Beranda", icon: "" },
    { id: "projects", label: "Proyek", icon: "" },
    { id: "skills", label: "Keahlian", icon: "" },
    { id: "contact", label: "Kontak", icon: "" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed top-5 inset-x-0 z-40 flex justify-center px-4 pointer-events-none">
      <nav className="pointer-events-auto flex items-center gap-1 p-1.5 bg-slate-900/80 border border-slate-800/80 backdrop-blur-md rounded-full shadow-2xl shadow-cyan-950/30">
        {/* Brand Badge */}
        <span className="px-3 py-1.5 text-xs font-black tracking-widest text-cyan-400 border-r border-slate-800 mr-1 select-none">
          2OB1T™
        </span>

        {/* Nav Links */}
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative px-3.5 py-1.5 text-xs font-semibold rounded-full transition-colors duration-200 select-none ${
                isActive ? "text-slate-950 font-bold" : "text-slate-400 hover:text-slate-200"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeNavHighlight"
                  className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-300 rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-1.5">
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}