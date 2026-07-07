"use client";

import { motion, Variants } from "framer-motion";

export default function Skills() {
  // Data Keahlian yang dikelompokkan berdasarkan kategori
  const skillCategories = [
    {
      title: "Web Development",
      skills: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "React"],
    },
    {
      title: "Creative Design & Media",
      skills: ["Adobe Photoshop", "Premiere Pro", "Alight Motion", "Canva", "CapCut"],
    },
    {
      title: "Tools & Utilities",
      skills: ["Docker", "XAMPP", "Git & GitHub", "VS Code"],
    },
  ];

  // Animasi untuk kontainer utama (mengatur jeda kemunculan kategori)
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  // Animasi untuk setiap baris kategori
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto scroll-mt-10">
      {/* Header Section */}
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-100">
          Skills &{" "}
          <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            Expertise
          </span>
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base">
          Kombinasi Teknologi, Tools, dan Keahlian visual yang saya gunakan untuk menyelesaikan berbagai proyek digital.
        </p>
      </div>

      {/* Grid Kategori Skills */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {skillCategories.map((category, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="p-6 bg-slate-900/30 border border-slate-800/60 rounded-2xl backdrop-blur-sm relative group overflow-hidden"
          >
            {/* Dekorasi Garis Cahaya di Samping Kartu */}
            <div className="absolute top-0 bottom-0 left-0 w-[2px] bg-gradient-to-b from-blue-500 to-emerald-500 opacity-40 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Nama Kategori */}
            <h3 className="text-lg font-bold text-slate-200 mb-4 group-hover:text-emerald-400 transition-colors">
              {category.title}
            </h3>

            {/* Kumpulan Badge Skill */}
            <div className="flex flex-wrap gap-2.5">
              {category.skills.map((skill, skillIdx) => (
                <motion.span
                  key={skillIdx}
                  whileHover={{ scale: 1.08, y: -2 }}
                  className="text-xs md:text-sm px-3 py-1.5 font-medium bg-slate-950/60 text-slate-300 border border-slate-800 rounded-lg cursor-default hover:border-emerald-500/40 hover:text-emerald-400 transition-colors duration-200"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}