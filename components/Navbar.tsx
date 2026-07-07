"use client";

import { motion } from "framer-motion";
import { Menu, X, Home, User, Briefcase, Mail } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "#home", icon: <Home className="w-4 h-4" /> },
    { name: "Projects", href: "#projects", icon: <Briefcase className="w-4 h-4" /> },
    { name: "About", href: "#about", icon: <User className="w-4 h-4" /> },
    { name: "Contact", href: "#contact", icon: <Mail className="w-4 h-4" /> },
  ];

  // Fungsi Sakti untuk Memaksa Browser Scroll Mulus
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault(); // Matikan fungsi anchor bawaan HTML yang suka diintersep Next.js
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl backdrop-blur-md bg-slate-950/60 border border-slate-800/80 rounded-full px-6 py-3 shadow-lg shadow-black/40"
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <span 
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="text-xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent cursor-pointer tracking-wider select-none"
        >
          2OB1T.
        </span>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleScroll(e, item.href)} // <-- Inject fungsi scroll ke desktop
              className="flex items-center gap-2 text-sm text-slate-300 hover:text-emerald-400 transition-colors duration-200 font-medium"
            >
              {item.icon}
              {item.name}
            </a>
          ))}
        </div>

        {/* Tombol Menu Mobile */}
        <button 
          className="md:hidden text-slate-300 hover:text-emerald-400 transition-colors p-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Dropdown Menu Mobile */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="absolute top-16 left-0 right-0 bg-slate-950/95 border border-slate-800 rounded-3xl p-4 flex flex-col gap-3 md:hidden backdrop-blur-lg shadow-xl"
        >
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                handleScroll(e, item.href); // <-- Inject fungsi scroll ke mobile
                setIsOpen(false); // Tutup menu dropdown setelah diklik
              }}
              className="flex items-center gap-3 px-4 py-3 text-slate-300 hover:bg-slate-900 hover:text-emerald-400 rounded-xl transition-all font-medium"
            >
              {item.icon}
              {item.name}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}