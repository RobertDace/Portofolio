"use client";

import { motion, Variants } from "framer-motion";

export default function Contact() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-5xl mx-auto scroll-mt-10">
      {/* Header Section */}
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-100">
          Get In{" "}
          <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            Touch
          </span>
        </h2>
        <p className="text-slate-400 max-w-md mx-auto text-sm md:text-base">
          Tertarik untuk berkolaborasi atau sekadar berdiskusi? Hubungi saya langsung melalui platform di bawah ini!
        </p>
      </div>

      {/* Grid Kontak 3 Kolom - Simetris & Responsif */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
      >
        {/* Opsi 1: WhatsApp */}
        <motion.a
          variants={itemVariants}
          whileHover={{ 
            y: -6, 
            scale: 1.02, 
            borderColor: "rgba(34, 197, 94, 0.4)", 
            backgroundColor: "rgba(34, 197, 94, 0.05)" 
          }}
          whileTap={{ scale: 0.98 }}
          href="https://wa.me/6282232813197"
          target="_blank"
          rel="noopener noreferrer"
          className="p-6 bg-slate-900/40 border border-slate-800/80 rounded-2xl backdrop-blur-sm flex items-center gap-4 group transition-all"
        >
          <div className="p-3 bg-green-500/10 text-green-400 rounded-xl group-hover:bg-green-500/20 transition-colors">
            {/* Native SVG WhatsApp */}
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">WhatsApp</h4>
            <p className="text-sm font-bold text-slate-200 group-hover:text-green-400 transition-colors">+62 822-3281-3197</p>
          </div>
        </motion.a>

        {/* Opsi 2: Instagram */}
        <motion.a
          variants={itemVariants}
          whileHover={{ 
            y: -6, 
            scale: 1.02, 
            borderColor: "rgba(244, 63, 94, 0.4)", 
            backgroundColor: "rgba(244, 63, 94, 0.05)" 
          }}
          whileTap={{ scale: 0.98 }}
          href="https://instagram.com/alfrbtt"
          target="_blank"
          rel="noopener noreferrer"
          className="p-6 bg-slate-900/40 border border-slate-800/80 rounded-2xl backdrop-blur-sm flex items-center gap-4 group transition-all"
        >
          <div className="p-3 bg-rose-500/10 text-rose-400 rounded-xl group-hover:bg-rose-500/20 transition-colors">
            {/* Native SVG Instagram */}
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Instagram</h4>
            <p className="text-base font-bold text-slate-200 group-hover:text-rose-400 transition-colors">@alfrbtt</p>
          </div>
        </motion.a>

        {/* Opsi 3: Email */}
        <motion.a
          variants={itemVariants}
          whileHover={{ 
            y: -6, 
            scale: 1.02, 
            borderColor: "rgba(56, 189, 248, 0.4)", 
            backgroundColor: "rgba(56, 189, 248, 0.05)" 
          }}
          whileTap={{ scale: 0.98 }}
          href="mailto:alfiantu@gmail.com"
          className="p-6 bg-slate-900/40 border border-slate-800/80 rounded-2xl backdrop-blur-sm flex items-center gap-4 group transition-all"
        >
          <div className="p-3 bg-sky-500/10 text-sky-400 rounded-xl group-hover:bg-sky-500/20 transition-colors">
            {/* Native SVG Mail */}
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Email</h4>
            <p className="text-xs font-bold text-slate-200 group-hover:text-sky-400 transition-colors break-all">alfiantu@gmail.com</p>
          </div>
        </motion.a>
      </motion.div>
    </section>
  );
}