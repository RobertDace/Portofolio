"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Custom SVG Icons for stacks that need crisp high-resolution rendering
const ClaudeIcon = () => (
  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
    <path
      d="M16.5 4.5C15.8 4.1 14.8 4 13.7 4.2C12.4 4.5 11.3 5.4 10.8 6.6L4.5 19.5H8.2L9.6 16.5H16.4L17.8 19.5H21.5L16.5 4.5ZM11.1 13.5L13.5 8.2L15.9 13.5H11.1Z"
      fill="#D97706"
    />
    <path
      d="M13.5 8.2L15.9 13.5H11.1L13.5 8.2Z"
      fill="#F59E0B"
    />
  </svg>
);

const NeonIcon = () => (
  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 2L3 7V17L12 22L21 17V7L12 2Z"
      stroke="#00E599"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 6L7 9V15L12 18L17 15V9L12 6Z"
      fill="#00E599"
      fillOpacity="0.25"
      stroke="#00E599"
      strokeWidth="1.5"
    />
    <path
      d="M12 10L9.5 11.5V14.5L12 16L14.5 14.5V11.5L12 10Z"
      fill="#00E599"
    />
  </svg>
);

const ClerkIcon = () => (
  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
    <path
      d="M6 8C6 5.79086 7.79086 4 10 4H14C16.2091 4 18 5.79086 18 8V16C18 18.2091 16.2091 20 14 20H10C7.79086 20 6 18.2091 6 16V8Z"
      stroke="#6C47FF"
      strokeWidth="2"
    />
    <path
      d="M10 9L14 15M14 9L10 15"
      stroke="#6C47FF"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

interface SkillItem {
  name: string;
  logo?: string;
  customIcon?: React.ReactNode;
}

// Tech stack yang dianalisis dari seluruh proyek nyata (Jastip, Klasim, TK Cahaya Hati, SenKuni, SheTI, SemarMaca, Snacky, My Orbit)
const skillsRow1: SkillItem[] = [
  {
    name: "Next.js 16",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "React 19",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "TypeScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  {
    name: "Claude AI",
    customIcon: <ClaudeIcon />,
  },
  {
    name: "Gemini AI",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg",
  },
  {
    name: "Neon DB",
    customIcon: <NeonIcon />,
  },
  {
    name: "Supabase",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
  },
  {
    name: "Tailwind CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
];

const skillsRow2: SkillItem[] = [
  {
    name: "Prisma ORM",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
  },
  {
    name: "PostgreSQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "Clerk Auth",
    customIcon: <ClerkIcon />,
  },
  {
    name: "Python",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  },
  {
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
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
    name: "Git & GitHub",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  },
];

export default function Skills() {
  const doubleRow1 = [...skillsRow1, ...skillsRow1];
  const doubleRow2 = [...skillsRow2, ...skillsRow2];

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
          Teknologi, serverless database, dan ekosistem AI modern yang saya gunakan untuk merancang dan mendeploy aplikasi web berperforma tinggi.
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
                <div className="w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0 transition-transform duration-200 group-hover/item:scale-110 flex items-center justify-center">
                  {skill.customIcon ? (
                    skill.customIcon
                  ) : (
                    <Image
                      src={skill.logo!}
                      alt={skill.name}
                      width={32}
                      height={32}
                      unoptimized
                      className="w-full h-full object-contain"
                    />
                  )}
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
                <div className="w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0 transition-transform duration-200 group-hover/item:scale-110 flex items-center justify-center">
                  {skill.customIcon ? (
                    skill.customIcon
                  ) : (
                    <Image
                      src={skill.logo!}
                      alt={skill.name}
                      width={32}
                      height={32}
                      unoptimized
                      className="w-full h-full object-contain"
                    />
                  )}
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
