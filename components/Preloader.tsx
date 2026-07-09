"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Daftar sapaan dengan Aksara / Huruf Asli Negara masing-masing
const words = [
  "Halo",         // Indonesia
  "Hello",        // Inggris
  "こんにちは",    // Jepang (Hiragana)
  "안녕하세요",    // Korea (Hangul)
  "你好",         // Tiongkok (Hanzi)
  "مرحباً",       // Arab
  "Привет",       // Rusia (Cyrillic)
  "Bonjour",      // Prancis
  "Hola",         // Spanyol
  "नमस्ते",       // India (Devanagari)
  "สวัสดี",       // Thailand (Thai)
  "2OB1T™",       // Brand Signature
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

    // Interval pergantian kata (180ms per kata agar transisi aksara terasa makin cepat & reaktif)
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

            {/* Teks Animasi Berganti Aksara/Bahasa */}
            <motion.h1
              key={index}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.1 }}
              className="text-3xl sm:text-5xl font-bold tracking-tight font-sans text-slate-100"
            >
              {words[index]}
            </motion.h1>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}