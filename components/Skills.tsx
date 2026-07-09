"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const skillsRow1 = [
    { name: "Next.js 16", category: "Framework" },
    { name: "TypeScript", category: "Language" },
    { name: "ReactJS", category: "Frontend" },
    { name: "Tailwind CSS", category: "Styling" },
    { name: "Gemini AI API", category: "AI SDK" },
    { name: "Stockfish AI", category: "Engine" },
    { name: "Supabase", category: "Database" },
    { name: "Framer Motion", category: "Animation" },
  ];

  const skillsRow2 = [
    { name: "Adobe Photoshop", category: "Design" },
    { name: "Premiere Pro", category: "Video" },
    { name: "Alight Motion", category: "Editing" },
    { name: "CapCut Pro", category: "Video" },
    { name: "IT Support", category: "System" },
    { name: "Network Mgmt", category: "Infrastructure" },
    { name: "Git & GitHub", category: "Version Control" },
    { name: "OCR System", category: "Automation" },
  ];

  // Duplikasi array agar looping marquee tidak pernah terputus
  const duplicatedRow1 = [...skillsRow1, ...skillsRow1, ...skillsRow1];
  const duplicatedRow2 = [...skillsRow2, ...skillsRow2, ...skillsRow2];

  return (
    <section id="skills" className="py-20 overflow-hidden scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6 text-center space-y-4 mb-14">
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
          Tech Stack & Capabilities
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-100">
          Keahlian{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-purple-400 bg-clip-text text-transparent">
            Teknis
          </span>
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base">
          Kumpulan teknologi, *tools*, dan ekosistem software yang biasa saya gunakan sehari-hari.
        </p>
      </div>

      {/* Wrapper Marquee dengan Efek Fade Kiri & Kanan */}
      <div className="relative flex flex-col gap-6 select-none">
        {/* Shadow Overlay Gradient (Kiri/Kanan Fade out) */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 sm:w-48 bg-gradient-to-r from-[#0b0f19] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 sm:w-48 bg-gradient-to-l from-[#0b0f19] to-transparent" />

        {/* Baris 1: Berjalan Ke Kiri */}
        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-4 min-w-full flex-shrink-0"
            animate={{ x: ["0%", "-33.333%"] }}
            transition={{
              duration: 25,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {duplicatedRow1.map((skill, index) => (
              <div
                key={index}
                className="group flex items-center gap-3 px-5 py-3 bg-slate-900/60 border border-slate-800 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/50 hover:bg-slate-900/90 hover:scale-105"
              >
                <span className="w-2 h-2 rounded-full bg-cyan-400 group-hover:animate-ping" />
                <span className="text-sm font-semibold text-slate-200 group-hover:text-cyan-300">
                  {skill.name}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                  {skill.category}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Baris 2: Berjalan Ke Kanan */}
        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-4 min-w-full flex-shrink-0"
            animate={{ x: ["-33.333%", "0%"] }}
            transition={{
              duration: 28,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {duplicatedRow2.map((skill, index) => (
              <div
                key={index}
                className="group flex items-center gap-3 px-5 py-3 bg-slate-900/60 border border-slate-800 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:border-emerald-400/50 hover:bg-slate-900/90 hover:scale-105"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 group-hover:animate-ping" />
                <span className="text-sm font-semibold text-slate-200 group-hover:text-emerald-300">
                  {skill.name}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                  {skill.category}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}