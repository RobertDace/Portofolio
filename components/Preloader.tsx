"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Array sapaan aksara dunia
const greetings = [
  { text: "Halo", color: "text-cyan-400" },         // Indonesia
  { text: "Hello", color: "text-emerald-400" },      // Inggris
  { text: "こんにちは", color: "text-blue-400" },      // Jepang
  { text: "안녕하세요", color: "text-sky-400" },       // Korea
  { text: "你好", color: "text-amber-400" },         // Tiongkok
  { text: "مرحباً", color: "text-teal-300" },       // Arab
  { text: "Bonjour", color: "text-indigo-400" },    // Prancis
  { text: "नमस्ते", color: "text-emerald-300" },     // India
  { text: "สวัสดี", color: "text-cyan-300" },        // Thailand
  { text: "Hola", color: "text-rose-400" },         // Spanyol
  { text: "Привет", color: "text-sky-400" },        // Rusia
];

export default function Preloader() {
  const [index, setIndex] = useState(0);
  const [showBranding, setShowBranding] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // 1. Lock / Unlock Scrollbar
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isLoading]);

  // 2. Loop Sapaan Aksara Berganti Cepat
  useEffect(() => {
    if (showBranding) return;

    if (index < greetings.length - 1) {
      const timer = setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, 140);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setShowBranding(true);
      }, 140);
      return () => clearTimeout(timer);
    }
  }, [index, showBranding]);

  // 3. Durasi Tampil 2OB1T Meledak (1.1 Detik) Sebelum Preloader Fade Out
  useEffect(() => {
    if (!showBranding) return;

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1100);

    return () => clearTimeout(timer);
  }, [showBranding]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="clean-fadeout-preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-[#0b0f19] text-white select-none pointer-events-none font-sans overflow-hidden"
        >
          {/* Light Explosion Flash Background (Cyan & Electric Blue) */}
          {showBranding && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{
                opacity: [0, 1, 1, 0.2],
                scale: [0.6, 2.5, 2.2, 1],
              }}
              transition={{
                duration: 1.1,
                times: [0, 0.2, 0.8, 1],
                ease: "easeOut",
              }}
              className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.9),rgba(59,130,246,0.7),transparent_70%)] pointer-events-none"
            />
          )}

          <div className="relative z-10 flex items-center justify-center text-center">
            {!showBranding ? (
              /* FASE 1: Sapaan Aksara Meluncur Naik (Overflow Hidden khusus di sini saja) */
              <div className="overflow-hidden py-4 px-6">
                <AnimatePresence mode="wait">
                  <motion.h1
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.1, ease: "easeOut" }}
                    className={`text-5xl sm:text-7xl md:text-8xl font-black tracking-tight ${greetings[index]?.color}`}
                  >
                    {greetings[index]?.text}
                  </motion.h1>
                </AnimatePresence>
              </div>
            ) : (
              /* FASE 2: 2OB1T Meledak Bersinar (Bebas dari overflow-hidden agar tidak terpotong) */
              <motion.h1
                initial={{ opacity: 1, scale: 1.35 }}
                animate={{
                  scale: [1.35, 1.5, 1.5, 1.0],
                  filter: [
                    "brightness(3.5) drop-shadow(0 0 70px rgba(6,182,212,1)) drop-shadow(0 0 110px rgba(59,130,246,1))",
                    "brightness(3) drop-shadow(0 0 80px rgba(6,182,212,1)) drop-shadow(0 0 120px rgba(59,130,246,1))",
                    "brightness(3) drop-shadow(0 0 80px rgba(6,182,212,1)) drop-shadow(0 0 120px rgba(59,130,246,1))",
                    "brightness(0.4) drop-shadow(0 0 0px rgba(0,0,0,0))",
                  ],
                }}
                transition={{
                  duration: 1.1,
                  times: [0, 0.25, 0.8, 1],
                  ease: "easeInOut",
                }}
                className="text-5xl sm:text-7xl md:text-8xl font-black tracking-wider bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent px-4 py-2"
              >
                2OB1T
              </motion.h1>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}