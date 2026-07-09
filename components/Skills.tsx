"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const skillsRow1 = [
    { name: "Next.js 16", category: "Framework", icon: "https://cdn.simpleicons.org/nextdotjs/white" },
    { name: "TypeScript", category: "Language", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
    { name: "ReactJS", category: "Frontend", icon: "https://cdn.simpleicons.org/react/61DAFB" },
    { name: "Tailwind CSS", category: "Styling", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
    { name: "Gemini AI API", category: "AI SDK", icon: "https://cdn.simpleicons.org/googlegemini/8E75B2" },
    { name: "Stockfish AI", category: "Engine", icon: "https://cdn.simpleicons.org/chessdotcom/36B37E" },
    { name: "Supabase", category: "Database", icon: "https://cdn.simpleicons.org/supabase/3ECF8E" },
    { name: "Framer Motion", category: "Animation", icon: "https://cdn.simpleicons.org/framer/0055FF" },
  ];

  const skillsRow2 = [
    { name: "Adobe Photoshop", category: "Design", icon: "https://cdn.simpleicons.org/adobephotoshop/31A8FF" },
    { name: "Premiere Pro", category: "Video", icon: "https://cdn.simpleicons.org/adobepremierepro/9999FF" },
    { name: "Alight Motion", category: "Editing", icon: "https://cdn.simpleicons.org/alightmotion/00D2FF" },
    { name: "CapCut Pro", category: "Video", icon: "https://cdn.simpleicons.org/capcut/white" },
    { name: "IT Support", category: "System", icon: "https://cdn.simpleicons.org/linux/FCC624" },
    { name: "Git & GitHub", category: "Version Control", icon: "https://cdn.simpleicons.org/git/F05032" },
    { name: "Figma", category: "UI/UX", icon: "https://cdn.simpleicons.org/figma/F24E1E" },
    { name: "OCR Automation", category: "Automation", icon: "https://cdn.simpleicons.org/python/3776AB" },
  ];

  // Duplikasi array agar looping marquee bergerak terus tanpa celah kosong
  const duplicatedRow1 = [...skillsRow1, ...skillsRow1, ...skillsRow1];
  const duplicatedRow2 = [...skillsRow2, ...skillsRow2, ...skillsRow2];

  return (
    <section id="skills" className="py-20 overflow-hidden scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6 text-center space-y-4 mb-14">
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
          Tech Stack & Capabilities
        </span>
        <h2 className="text-5xl md:text-5xl font-extrabold tracking-tight text-slate-100">
          Keahlian{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-purple-400 bg-clip-text text-transparent">
            Teknis
          </span>
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base">
          Kumpulan teknologi, tools, dan ekosistem software yang biasa saya gunakan sehari-hari.
        </p>
      </div>

      {/* Wrapper Marquee dengan Fade Gradient Kiri-Kanan */}
      <div className="relative flex flex-col gap-6 select-none">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 sm:w-48 bg-gradient-to-r from-[#0b0f19] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 sm:w-48 bg-gradient-to-l from-[#0b0f19] to-transparent" />

        {/* Baris 1: Berjalan Ke Kiri */}
        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-4 min-w-full flex-shrink-0"
            animate={{ x: ["0%", "-33.333%"] }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {duplicatedRow1.map((skill, index) => (
              <div
                key={index}
                className="group flex items-center gap-3 px-5 py-3 bg-slate-900/60 border border-slate-800 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/50 hover:bg-slate-900/90 hover:scale-105"
              >
                {/* Logo Per Apps / Tools */}
                <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-full h-full object-contain filter group-hover:brightness-125 transition-all"
                    loading="lazy"
                  />
                </div>
                <span className="text-sm font-semibold text-slate-200 group-hover:text-cyan-300 whitespace-nowrap">
                  {skill.name}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 whitespace-nowrap">
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
              duration: 32,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {duplicatedRow2.map((skill, index) => (
              <div
                key={index}
                className="group flex items-center gap-3 px-5 py-3 bg-slate-900/60 border border-slate-800 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:border-emerald-400/50 hover:bg-slate-900/90 hover:scale-105"
              >
                {/* Logo Per Apps / Tools */}
                <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-full h-full object-contain filter group-hover:brightness-125 transition-all"
                    loading="lazy"
                  />
                </div>
                <span className="text-sm font-semibold text-slate-200 group-hover:text-emerald-300 whitespace-nowrap">
                  {skill.name}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 whitespace-nowrap">
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