"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Calendar, MapPin, Activity, Radio, Cpu } from "lucide-react";

interface ExperienceItem {
  index: string;
  category: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  description: string;
  metrics: { label: string; value: string }[];
  bullets: string[];
  skills: string[];
}

function ExperienceCard({ exp, index }: { exp: ExperienceItem; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const spotX = useMotionValue(200);
  const spotY = useMotionValue(150);

  const springConfig = { stiffness: 220, damping: 24, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Subtle 3D Card Tilt on Cursor Move
  const rotateX = useTransform(smoothY, [-0.5, 0.5], ["6deg", "-6deg"]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], ["-6deg", "6deg"]);
  const spotBackground = useTransform(
    [spotX, spotY],
    ([x, y]) => `radial-gradient(circle 350px at ${x}px ${y}px, rgba(6,182,212,0.14), transparent 80%)`
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const xPct = (e.clientX - rect.left) / width - 0.5;
    const yPct = (e.clientY - rect.top) / height - 0.5;

    mouseX.set(xPct);
    mouseY.set(yPct);
    spotX.set(e.clientX - rect.left);
    spotY.set(e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div style={{ perspective: 1200 }}>
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        initial={{ opacity: 0, y: 35, filter: "blur(12px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.85, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ scale: 1.012 }}
        tabIndex={0}
        className="rounded-[32px] bg-slate-900/50 hover:bg-slate-900/80 border border-slate-800/90 hover:border-cyan-500/50 p-6 sm:p-10 transition-all duration-300 backdrop-blur-md group relative overflow-hidden select-none cursor-pointer transform-gpu will-change-transform shadow-2xl focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none"
      >
        {/* Dynamic Cursor Spotlight Beam */}
        <motion.div
          style={{ background: spotBackground }}
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          
          {/* Kolom Kiri: Informasi & Poin Kerja (7 Kolom) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Kategori & Nomor Index */}
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 font-mono text-xs font-semibold uppercase tracking-wider">
                {exp.category}
              </span>
              <span className="font-mono text-xs text-slate-500 font-bold tabular-nums">
                [{exp.index} / 03]
              </span>
            </div>

            {/* Judul Role & Perusahaan */}
            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white group-hover:text-cyan-300 transition-colors duration-300">
                {exp.role}
              </h3>
              <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm font-semibold text-slate-400">
                <span className="text-slate-200">{exp.company}</span>
                <span className="text-slate-600">/</span>
                <span className="flex items-center gap-1.5 text-cyan-400/90 font-mono tabular-nums">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{exp.period}</span>
                </span>
                <span className="text-slate-600">/</span>
                <span className="flex items-center gap-1.5 text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  <span>{exp.location}</span>
                </span>
              </div>
            </div>

            {/* Deskripsi Singkat */}
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium max-w-prose">
              {exp.description}
            </p>

            {/* Bullet Points Kontribusi */}
            <ul className="space-y-2.5 pt-1">
              {exp.bullets.map((bullet, bIdx) => (
                <li key={bIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-400 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            {/* Skill Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {exp.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="px-3 py-1 rounded-lg bg-slate-950/60 border border-slate-800 text-[11px] font-mono text-slate-400 group-hover:text-slate-300 group-hover:border-slate-700 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>

          </div>

          {/* Kolom Kanan: Visual Telemetry Hub (5 Kolom) */}
          <div className="lg:col-span-5 h-full flex flex-col justify-center">
            
            {/* Visual 1: Network Topology Mesh */}
            {exp.type === "network" && (
              <div className="p-5 sm:p-6 rounded-2xl bg-slate-950/80 border border-slate-800/90 space-y-4 shadow-xl">
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-mono font-bold text-slate-300 uppercase">Network Topology</span>
                  </div>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 font-mono text-[10px]">
                    ACTIVE
                  </span>
                </div>

                {/* Animated Topology Nodes */}
                <div className="h-28 relative flex items-center justify-between px-4">
                  {/* Gateway Node */}
                  <div className="flex flex-col items-center gap-1.5 z-10">
                    <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                      <Radio className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-slate-400">Gateway</span>
                  </div>

                  {/* Connecting Line with flowing particle */}
                  <div className="flex-1 h-0.5 bg-gradient-to-r from-cyan-500/40 via-sky-500/20 to-emerald-500/40 mx-2 relative">
                    <motion.div
                      animate={{ x: ["0%", "100%"] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="w-3 h-3 rounded-full bg-cyan-400 -top-1.5 absolute shadow-[0_0_8px_#06b6d4]"
                    />
                  </div>

                  {/* Core Server Node */}
                  <div className="flex flex-col items-center gap-1.5 z-10">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-300">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-slate-400">Core Node</span>
                  </div>
                </div>

                {/* Metrics Footer */}
                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-800/80 text-center font-mono">
                  {exp.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="p-2 rounded-lg bg-slate-900/60 border border-slate-800/60">
                      <span className="text-[10px] text-slate-500 block uppercase">{m.label}</span>
                      <span className="text-xs font-bold text-cyan-400 tabular-nums">{m.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Visual 2: Equalizer Soundwave Spectrum */}
            {exp.type === "media" && (
              <div className="p-5 sm:p-6 rounded-2xl bg-slate-950/80 border border-slate-800/90 space-y-4 shadow-xl">
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                  <div className="flex items-center gap-2">
                    <Radio className="w-4 h-4 text-pink-400" />
                    <span className="text-xs font-mono font-bold text-slate-300 uppercase">Multimedia Timeline</span>
                  </div>
                  <span className="text-[10px] font-mono text-pink-400 bg-pink-500/10 px-2 py-0.5 rounded-md">
                    REC ACTIVE
                  </span>
                </div>

                {/* Animated Equalizer Waves */}
                <div className="h-28 flex items-end justify-center gap-2 px-2 pb-2">
                  {[45, 80, 60, 100, 75, 90, 50, 85, 65, 95, 40, 70].map((height, barIdx) => (
                    <motion.div
                      key={barIdx}
                      animate={{
                        height: [`${height * 0.3}%`, `${height}%`, `${height * 0.4}%`],
                      }}
                      transition={{
                        duration: 1.2 + (barIdx % 4) * 0.2,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                      }}
                      className="w-2 rounded-full bg-gradient-to-t from-pink-500 via-purple-500 to-cyan-400 shadow-[0_0_8px_rgba(219,39,119,0.3)]"
                    />
                  ))}
                </div>

                {/* Metrics Footer */}
                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-800/80 text-center font-mono">
                  {exp.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="p-2 rounded-lg bg-slate-900/60 border border-slate-800/60">
                      <span className="text-[10px] text-slate-500 block uppercase">{m.label}</span>
                      <span className="text-xs font-bold text-pink-400 tabular-nums">{m.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Visual 3: Turbopack Compiler Telemetry */}
            {exp.type === "code" && (
              <div className="p-5 sm:p-6 rounded-2xl bg-slate-950/80 border border-slate-800/90 space-y-4 shadow-xl">
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                  <div className="flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-mono font-bold text-slate-300 uppercase">Architecture Telemetry</span>
                  </div>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 font-mono text-[10px]">
                    READY
                  </span>
                </div>

                {/* Interactive Code Trace Preview */}
                <div className="h-28 bg-slate-900/80 rounded-xl p-3 font-mono text-[11px] text-slate-400 space-y-1.5 overflow-hidden flex flex-col justify-center border border-slate-800/60">
                  <div className="flex items-center justify-between text-cyan-400">
                    <span>next build (Turbopack)</span>
                    <span className="text-slate-500 tabular-nums">0.32s</span>
                  </div>
                  <div className="text-emerald-400">Gemini 2.0 Flash Stream OK</div>
                  <div className="text-slate-500">Serverless Edge Route /api/v1</div>
                  <div className="text-cyan-300/80">Prerendered Static Routes (7/7)</div>
                </div>

                {/* Metrics Footer */}
                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-800/80 text-center font-mono">
                  {exp.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="p-2 rounded-lg bg-slate-900/60 border border-slate-800/60">
                      <span className="text-[10px] text-slate-500 block uppercase">{m.label}</span>
                      <span className="text-xs font-bold text-emerald-400 tabular-nums">{m.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>
      </motion.div>
    </div>
  );
}

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      index: "01",
      category: "Enterprise Infrastructure & Digital Operations",
      role: "Administrative & IT Staff",
      company: "PT. Noreen Surya Perdana",
      period: "2025 – 2026",
      location: "Samarinda, East Kalimantan",
      type: "network",
      description: "Mengoptimalkan ekosistem teknologi informasi kantor, memimpin digitalisasi dokumen kerja, serta merawat stabilitas jaringan lokal dan keamanan data operasional.",
      metrics: [
        { label: "Uptime", value: "99.9%" },
        { label: "Latency", value: "12ms" },
        { label: "Security", value: "Strict Vault" },
      ],
      bullets: [
        "Mengelola dan mengoptimalkan infrastruktur jaringan lokal internal serta pemeliharaan hardware dan software.",
        "Mendigitalisasi alur pendaftaran, rekrutmen, serta manajemen arsip dokumen kerja agar operasional lebih cepat.",
        "Memberikan dukungan IT support reaktif berkala untuk efisiensi seluruh staf perusahaan.",
      ],
      skills: ["IT Support", "Network Management", "System Admin", "Data Security", "Digital Operations"],
    },
    {
      index: "02",
      category: "Digital Media & Video Direction",
      role: "Digital Content Creator & Visual Editor",
      company: "CEES GANK",
      period: "2024 – Sekarang",
      location: "Remote",
      type: "media",
      description: "Merancang konten multimedia berkualitas tinggi dengan alur cerita dinamis, visual modern, dan strategi keterikatan audiens yang terukur.",
      metrics: [
        { label: "Mastering", value: "4K 60fps" },
        { label: "Timeline", value: "Multi-Track" },
        { label: "Color Grading", value: "10-Bit Log" },
      ],
      bullets: [
        "Memproduksi video kreatif bertempo dinamis dan grafis visual berkualitas tinggi untuk platform media digital.",
        "Mengolah aset multimedia kompleks menggunakan Adobe Photoshop, Premiere Pro, dan After Effects.",
        "Menggabungkan estetika visual modern dengan strategi retensi audiens yang konsisten.",
      ],
      skills: ["Adobe Photoshop", "Premiere Pro", "Alight Motion", "CapCut Pro", "Visual Design"],
    },
    {
      index: "03",
      category: "Full-Stack Systems & AI Engineering",
      role: "Fullstack Web & System Engineer",
      company: "Independent Projects & Freelance",
      period: "2023 – Sekarang",
      location: "Remote",
      type: "code",
      description: "Merancang, membangun, dan mendeploy aplikasi web full-stack modern dengan integrasi model kecerdasan buatan cerdas dan arsitektur database cloud terukur.",
      metrics: [
        { label: "Framework", value: "Next.js 16" },
        { label: "Inference", value: "Gemini API" },
        { label: "Response", value: "<100ms" },
      ],
      bullets: [
        "Merancang dan mengembangkan aplikasi web reaktif full-stack berbasis Next.js, TypeScript, dan Supabase.",
        "Mengintegrasikan Gemini AI API untuk otomatisasi analisis dokumen cerdas dan modeler skenario deterministik.",
        "Menerapkan arsitektur clean code, manajemen state reaktif, dan performa tinggi bebas hambatan.",
      ],
      skills: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Gemini AI API", "Git"],
    },
  ];

  return (
    <section id="experience" className="py-28 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto scroll-mt-20 relative z-10">
      
      {/* Header Section Bersih & Editorial */}
      <motion.div
        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-20 text-left"
      >
        <span className="text-xs font-mono font-semibold tracking-widest text-cyan-400 uppercase block mb-3">
          Career Trajectory
        </span>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-4">
          Pengalaman{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent animate-antigravity-shimmer inline-block">
            Kerja.
          </span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed font-normal">
          Rekam jejak profesional dalam bidang rekayasa sistem web, otomatisasi operasional digital, dan produksi multimedia berstandar industri.
        </p>
      </motion.div>

      {/* Experience Cards dengan 3D Cursor Tilt & Spotlight */}
      <div className="space-y-10">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} exp={exp} index={index} />
        ))}
      </div>

    </section>
  );
}
