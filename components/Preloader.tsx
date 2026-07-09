"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Daftar sapaan, aksara, dan warna signature website
const words = [
  { text: "Halo", color: "text-cyan-400" },         // Indonesia (Cyan Signature)
  { text: "Hello", color: "text-emerald-400" },      // Inggris (Emerald Accent)
  { text: "こんにちは", color: "text-purple-400" },    // Jepang (Purple Accent)
  { text: "안녕하세요", color: "text-blue-400" },      // Korea (Blue Accent)
  { text: "你好", color: "text-amber-400" },         // Tiongkok (Amber/Gold Accent)
  { text: "مرحباً", color: "text-teal-300" },       // Arab (Teal Accent)
  { text: "Привет", color: "text-sky-400" },        // Rusia (Sky Blue)
  { text: "Bonjour", color: "text-indigo-400" },    // Prancis (Indigo Accent)
  { text: "Hola", color: "text-rose-400" },         // Spanyol (Rose Accent)
  { text: "नमस्ते", color: "text-emerald-300" },     // India (Mint Emerald)
  { text: "สวัสดี", color: "text-cyan-300" },        // Thailand (Light Cyan)
  { 
    text: "2OB1T™", 
    color: "bg-gradient-to-r from-cyan-400 via-emerald-400 to-purple-400 bg-clip-text text-transparent font-black tracking-wider" 
  }, // Brand Signature (Full Gradient)
];

export default function Preloader() {
  const [index, setIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Kunci scrollbar agar layar tidak bisa di-scroll saat intro berjalan
    document.body.style.overflow = "hidden";

    // Jika sudah mencapai kata/brand terakhir
    if (index === words.length - 1) {
      const timeout = setTimeout(() => {
        setIsLoading(false);
        // Buka kembali kunci scrollbar
        document.body.style.overflow = "auto";
      }, 700);
      return () => clearTimeout(timeout);
    }

    // Interval pergantian kata (180ms per kata)
    const timer = setTimeout(() => {
      setIndex((prevIndex) => prevIndex + 1);
    }, 180);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0b0f19] text-white select-none pointer-events-auto"
        >
          {/* Accent Glow Background */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(6,182,212,0.15),rgba(255,255,255,0))]" />

          <div className="relative z-10 flex items-center gap-3">
            {/* Indikator titik cyan menyala */}
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />

            {/* Teks Animasi Berganti Aksara & Warna */}
            <motion.h1
              key={index}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.1 }}
              className={`text-3xl sm:text-5xl font-bold tracking-tight font-sans transition-colors duration-150 ${words[index].color}`}
            >
              {words[index].text}
            </motion.h1>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}