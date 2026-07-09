"use client";

import { useState } from "react";
import { motion } from "framer-motion";

// Data Skills Baris 1
const row1Skills = [
  {
    name: "Adobe Photoshop",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg",
  },
  {
    name: "Premiere Pro",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/premierepro/premierepro-original.svg",
  },
  {
    name: "CapCut",
    logo: "https://images-eds-ssl.xboxlive.com/image?url=4rt9.lXDC4H_93laV1_eHM0OYfiFeMI2p9MWie0CvL99U4GA1gf6_kayTt_kBblFwHwo8BW8JXlqfnYxKPmmBaQDG.nPeYqpMXSUQbV6ZbDqKB2cfxC8XGBuMMG2wnfQDreT0rlqZucFHBfMnKmf9jEjSzK_3h4euGl2PWZ9ggU-&format=source",
  },
  {
    name: "Alight Motion",
    logo: "https://play-lh.googleusercontent.com/LRjRXaVEtoeHyiFcnMLCHs1ZJV8Q4q70PggflRDAfgOkulzFTbJg65y0drg6Yapo22Xoos_XCbyh7EgycBhQ",
  },
  {
    name: "After Effects",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/aftereffects/aftereffects-original.svg",
  },
  {
    name: "Canva",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg",
  },
];

// Data Skills Baris 2
const row2Skills = [
  {
    name: "Alight Motion",
    logo: "https://play-lh.googleusercontent.com/LRjRXaVEtoeHyiFcnMLCHs1ZJV8Q4q70PggflRDAfgOkulzFTbJg65y0drg6Yapo22Xoos_XCbyh7EgycBhQ",
  },
  {
    name: "CapCut",
    logo: "https://images-eds-ssl.xboxlive.com/image?url=4rt9.lXDC4H_93laV1_eHM0OYfiFeMI2p9MWie0CvL99U4GA1gf6_kayTt_kBblFwHwo8BW8JXlqfnYxKPmmBaQDG.nPeYqpMXSUQbV6ZbDqKB2cfxC8XGBuMMG2wnfQDreT0rlqZucFHBfMnKmf9jEjSzK_3h4euGl2PWZ9ggU-&format=source",
  },
  {
    name: "Adobe Photoshop",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg",
  },
  {
    name: "Premiere Pro",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/premierepro/premierepro-original.svg",
  },
  {
    name: "Figma",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
  },
  {
    name: "DaVinci Resolve",
    logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/davinciresolve.svg",
  },
];

export default function Skills() {
  const [isRow1Hovered, setIsRow1Hovered] = useState(false);
  const [isRow2Hovered, setIsRow2Hovered] = useState(false);

  return (
    <section
      id="skills"
      className="py-20 bg-[#0b0f19] text-white overflow-hidden select-none relative scroll-mt-20"
    >
      {/* Header Judul */}
      <div className="max-w-7xl mx-auto px-4 mb-14 text-center">
        <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white inline-flex items-center gap-2">
          Keahlian{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
            Teknis
          </span>
        </h2>
      </div>

      {/* Outer Container dengan Masking Fade Halus di Kiri & Kanan */}
      <div className="relative w-full flex flex-col gap-7">
        {/* Gradient Mask Overlay Kiri & Kanan */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-44 bg-gradient-to-r from-[#0b0f19] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-44 bg-gradient-to-l from-[#0b0f19] to-transparent z-20 pointer-events-none" />

        {/* BARIS 1: Marquee Jalan ke Kiri */}
        <div
          className="flex overflow-hidden py-3"
          onMouseEnter={() => setIsRow1Hovered(true)}
          onMouseLeave={() => setIsRow1Hovered(false)}
        >
          <motion.div
            className="flex gap-6 items-center flex-nowrap whitespace-nowrap"
            animate={{
              x: isRow1Hovered ? undefined : ["0%", "-50%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 22,
                ease: "linear",
              },
            }}
            style={{
              animationPlayState: isRow1Hovered ? "paused" : "running",
            }}
          >
            {[...row1Skills, ...row1Skills, ...row1Skills, ...row1Skills].map(
              (skill, idx) => (
                <div
                  key={`row1-${idx}`}
                  className="flex items-center gap-4 px-7 py-5 sm:py-6 rounded-[28px] bg-slate-900/90 border border-slate-800/80 hover:border-cyan-400/60 shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 cursor-pointer flex-shrink-0 group"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-full h-full object-contain filter drop-shadow"
                      loading="lazy"
                    />
                  </div>
                  <span className="font-bold text-lg sm:text-xl text-slate-100 group-hover:text-cyan-400 transition-colors">
                    {skill.name}
                  </span>
                </div>
              )
            )}
          </motion.div>
        </div>

        {/* BARIS 2: Marquee Jalan ke Kanan */}
        <div
          className="flex overflow-hidden py-3"
          onMouseEnter={() => setIsRow2Hovered(true)}
          onMouseLeave={() => setIsRow2Hovered(false)}
        >
          <motion.div
            className="flex gap-6 items-center flex-nowrap whitespace-nowrap"
            animate={{
              x: isRow2Hovered ? undefined : ["-50%", "0%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
            style={{
              animationPlayState: isRow2Hovered ? "paused" : "running",
            }}
          >
            {[...row2Skills, ...row2Skills, ...row2Skills, ...row2Skills].map(
              (skill, idx) => (
                <div
                  key={`row2-${idx}`}
                  className="flex items-center gap-4 px-7 py-5 sm:py-6 rounded-[28px] bg-slate-900/90 border border-slate-800/80 hover:border-cyan-400/60 shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 cursor-pointer flex-shrink-0 group"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-full h-full object-contain filter drop-shadow"
                      loading="lazy"
                    />
                  </div>
                  <span className="font-bold text-lg sm:text-xl text-slate-100 group-hover:text-cyan-400 transition-colors">
                    {skill.name}
                  </span>
                </div>
              )
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}