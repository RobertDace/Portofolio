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
        className="rounded-[32px] bg-slate-900/50 hover:bg-slate-900/80 border border-slate-800/90 hover:border-cyan-500/50 p-6 sm:p-10 transition-all duration-300 backdrop-blur-md group relative overflow-hidden select-none cursor-pointer transform-gpu will-change-transform shadow-2xl"
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
              <span className="font-mono text-xs font-bold text-cyan-400 bg-cyan-950/60 px-2.5 py-1 rounded-lg border border-cyan-500/30">
                {exp.index}
              </span>
              <span className="text-xs font-mono font-medium text-slate-400 tracking-wider uppercase">
                {exp.category}
              </span>
            </div>

            {/* Judul Role & Instansi */}
            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-black text-white group-hover:text-cyan-400 transition-colors tracking-tight">
                {exp.role}
              </h3>
              <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-400 font-medium">
                <span className="text-slate-200 font-bold">{exp.company}</span>
                <span className="text-slate-600">•</span>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{exp.period}</span>
                </div>
                <span className="text-slate-600">•</span>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{exp.location}</span>
                </div>
              </div>
            </div>

            {/* Deskripsi */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {exp.description}
            </p>

            {/* Bullets Pencapaian */}
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400 pt-1">
              {exp.bullets.map((bullet, bIndex) => (
                <li key={bIndex} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                  <span className="leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>

            {/* Tech Pills */}
            <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-800/60">
              {exp.skills.map((skill, sIndex) => (
                <span
                  key={sIndex}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-slate-800/50 text-slate-300 border border-slate-700/50 group-hover:border-cyan-500/30 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>

          </div>

          {/* Kolom Kanan: Mini Animasi Estetik Interaktif (5 Kolom) */}
          <div className="lg:col-span-5 bg-slate-950/80 border border-slate-800/80 rounded-2xl p-6 flex flex-col justify-between min-h-[280px] shadow-inner relative overflow-hidden [transform:translateZ(20px)]">
            
            {/* Animasi 1: Live Network Mesh Topology (Untuk IT Staff) */}
            {exp.type === "network" && (
              <div className="space-y-5">
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-cyan-400 animate-pulse" />
                    <span className="font-semibold text-slate-200">Network &amp; Security Node</span>
                  </div>
                  <span className="text-emerald-400 font-bold">Stable</span>
                </div>

                {/* Interactive Animated SVG Topology Mesh */}
                <div className="h-28 w-full relative flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 300 110" fill="none">
                    {/* Grid Circuit Lines */}
                    <path d="M 40 55 H 120 V 25 H 200 V 55 H 260" stroke="#1e293b" strokeWidth="2" />
                    <path d="M 120 55 V 85 H 200 V 55" stroke="#1e293b" strokeWidth="2" />
                    
                    {/* Animated Glowing Signal Pulses */}
                    <motion.circle
                      r="4"
                      fill="#22d3ee"
                      animate={{ cx: [40, 120, 200, 260], cy: [55, 25, 25, 55] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.circle
                      r="4"
                      fill="#34d399"
                      animate={{ cx: [120, 200, 260], cy: [85, 85, 55] }}
                      transition={{ duration: 3.5, repeat: Infinity, ease: "linear", delay: 0.5 }}
                    />

                    {/* Nodes */}
                    <circle cx="40" cy="55" r="10" fill="#0f172a" stroke="#22d3ee" strokeWidth="2" />
                    <circle cx="120" cy="25" r="7" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
                    <circle cx="120" cy="85" r="7" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
                    <circle cx="200" cy="25" r="7" fill="#0f172a" stroke="#34d399" strokeWidth="2" />
                    <circle cx="200" cy="85" r="7" fill="#0f172a" stroke="#34d399" strokeWidth="2" />
                    <circle cx="260" cy="55" r="10" fill="#0f172a" stroke="#10b981" strokeWidth="2" />
                  </svg>
                </div>

                {/* Metrics Footer */}
                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-800/80 text-center font-mono">
                  {exp.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="p-2 rounded-lg bg-slate-900/60 border border-slate-800/60">
                      <span className="text-[10px] text-slate-500 block uppercase">{m.label}</span>
                      <span className="text-xs font-bold text-cyan-400">{m.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Animasi 2: Dynamic Soundwave & Media Timeline (Untuk Video Editor) */}
            {exp.type === "media" && (
              <div className="space-y-5">
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <Radio className="w-4 h-4 text-pink-400" />
                    <span className="font-semibold text-slate-200">Timeline &amp; Frequency</span>
                  </div>
                  <span className="text-pink-400 font-bold">00:24:18</span>
                </div>

                {/* Dynamic Equalizer Bars */}
                <div className="h-28 flex items-end justify-center gap-1.5 px-4 pb-2">
                  {[32, 54, 80, 45, 90, 70, 40, 85, 60, 95, 50, 75, 35, 88, 65, 42].map((height, barIdx) => (
                    <motion.div
                      key={barIdx}
                      className="w-2.5 rounded-full bg-gradient-to-t from-pink-500 to-purple-400"
                      animate={{ height: [`${height * 0.4}%`, `${height}%`, `${height * 0.6}%`] }}
                      transition={{
                        duration: 1.2 + (barIdx % 4) * 0.2,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                        delay: barIdx * 0.05,
                      }}
                    />
                  ))}
                </div>

                {/* Metrics Footer */}
                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-800/80 text-center font-mono">
                  {exp.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="p-2 rounded-lg bg-slate-900/60 border border-slate-800/60">
                      <span className="text-[10px] text-slate-500 block uppercase">{m.label}</span>
                      <span className="text-xs font-bold text-pink-400">{m.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Animasi 3: Next.js + AI Telemetry Compiler (Untuk Fullstack Engineer) */}
            {exp.type === "code" && (
              <div className="space-y-5">
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-emerald-400" />
                    <span className="font-semibold text-slate-200">Compiler &amp; AI Telemetry</span>
                  </div>
                  <span className="text-cyan-400 font-bold">Compiled</span>
                </div>

                {/* Terminal Live Output Lines */}
                <div className="h-28 font-mono text-[11px] space-y-2 p-3 rounded-xl bg-slate-900/60 border border-slate-800/60 text-slate-300">
                  <div className="flex items-center justify-between text-slate-500">
                    <span>ready - turbopack engine</span>
                    <span className="text-emerald-400">active</span>
                  </div>
                  <div className="text-cyan-400">
                    <span>GET /api/inference/gemini</span>
                    <span className="text-slate-400 ml-2">200 OK (38ms)</span>
                  </div>
                  <div className="text-slate-400 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span>listening on http://localhost:3000</span>
                  </div>
                </div>

                {/* Metrics Footer */}
                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-800/80 text-center font-mono">
                  {exp.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="p-2 rounded-lg bg-slate-900/60 border border-slate-800/60">
                      <span className="text-[10px] text-slate-500 block uppercase">{m.label}</span>
                      <span className="text-xs font-bold text-emerald-400">{m.value}</span>
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
      period: "2025 — 2026",
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
      period: "2024 — Sekarang",
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
      period: "2023 — Sekarang",
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
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
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
