"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Data Keahlian Nyata Fullstack & AI Engineer
const skills = [
  {
    name: "Next.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "TypeScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  {
    name: "Tailwind CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Python",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  },
  {
    name: "PostgreSQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "Supabase",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
  },
  {
    name: "Prisma",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
  },
  {
    name: "Gemini AI",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg",
  },
  {
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Git",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  },
  {
    name: "Docker",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  },
  {
    name: "Vercel",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
  },
  {
    name: "Figma",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
  },
];

export default function Skills() {
  const row1 = skills.slice(0, 7);
  const row2 = skills.slice(7, 14);

  // Duplikasi 2x sudah cukup untuk perputaran infinite translate3d(-50%)
  const doubleRow1 = [...row1, ...row1];
  const doubleRow2 = [...row2, ...row2];

  return (
    <section
      id="skills"
      className="py-24 bg-transparent text-white relative z-10 scroll-mt-20 overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 mb-16 text-center"
      >
        <span className="text-xs font-mono font-semibold tracking-widest text-cyan-400 uppercase block mb-3">
          Core Capabilities
        </span>

        {/* Judul & Deskripsi */}
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
          Tech Stack &amp;{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent animate-antigravity-shimmer inline-block">
            Expertise.
          </span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Teknologi, bahasa pemrograman, dan ekosistem AI modern yang saya gunakan untuk merancang dan mendeploy aplikasi web berperforma tinggi.
        </p>
      </motion.div>

      {/* Marquee Wrapper dengan Fade Gradient Kiri-Kanan */}
      <div className="relative w-full overflow-hidden">
        {/* Ambient Fade Masking (GPU friendly) */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#0b0f19]/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#0b0f19]/80 to-transparent z-10 pointer-events-none" />

        {/* ROW 1: Marquee Bergerak ke Kiri */}
        <div className="w-full overflow-hidden mb-6">
          <div className="marquee-track-left flex gap-4 sm:gap-6">
            {doubleRow1.map((skill, idx) => (
              <div
                key={`row1-${idx}`}
                className="group/item flex items-center gap-3.5 px-6 py-3.5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/50 hover:bg-slate-900/90 transition-colors duration-200 shadow-md flex-shrink-0 cursor-default backdrop-blur-sm"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0 transition-transform duration-200 group-hover/item:scale-110">
                  <Image
                    src={skill.logo}
                    alt={skill.name}
                    width={32}
                    height={32}
                    unoptimized
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="font-bold text-base sm:text-lg text-slate-100 group-hover/item:text-cyan-400 transition-colors">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ROW 2: Marquee Bergerak ke Kanan */}
        <div className="w-full overflow-hidden">
          <div className="marquee-track-right flex gap-4 sm:gap-6">
            {doubleRow2.map((skill, idx) => (
              <div
                key={`row2-${idx}`}
                className="group/item flex items-center gap-3.5 px-6 py-3.5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/50 hover:bg-slate-900/90 transition-colors duration-200 shadow-md flex-shrink-0 cursor-default backdrop-blur-sm"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0 transition-transform duration-200 group-hover/item:scale-110">
                  <Image
                    src={skill.logo}
                    alt={skill.name}
                    width={32}
                    height={32}
                    unoptimized
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="font-bold text-base sm:text-lg text-slate-100 group-hover/item:text-cyan-400 transition-colors">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
