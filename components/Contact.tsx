"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const emailAddress = "alfiantu@gmail.com";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status !== "idle") {
      setStatus("idle");
      setStatusMessage("");
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setStatusMessage("Mohon lengkapi nama, email, dan pesan Anda.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus("error");
      setStatusMessage("Format email yang Anda masukkan tidak valid.");
      return;
    }

    setStatus("loading");

    setTimeout(() => {
      const subjectEncoded = encodeURIComponent(
        formData.subject.trim() || `Pesan Portofolio dari ${formData.name}`
      );
      const bodyEncoded = encodeURIComponent(
        `Halo 2OB1T,\n\nNama: ${formData.name}\nEmail: ${formData.email}\n\nPesan:\n${formData.message}`
      );
      
      window.location.href = `mailto:${emailAddress}?subject=${subjectEncoded}&body=${bodyEncoded}`;
      
      setStatus("success");
      setStatusMessage("Aplikasi email Anda dibuka untuk mengirim pesan ini. Terima kasih!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 600);
  };

  return (
    <section
      id="contact"
      className="py-20 bg-transparent text-white relative z-10 scroll-mt-20 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12">
        
        {/* LAYOUT GRID 12 KOLOM */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          
          {/* KOLOM KIRI: Judul, Deskripsi, Info Utama, dan Barisan Sosmed */}
          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-5 space-y-6"
          >
            {/* Teks Judul & Deskripsi Rata Kiri */}
            <div className="space-y-3">
              <span className="text-xs font-mono font-semibold tracking-widest text-cyan-400 uppercase block mb-1">
                Direct Communication
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
                Get In{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent animate-antigravity-shimmer inline-block">
                  Touch.
                </span>
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-medium max-w-prose">
                Punya ide proyek, pertanyaan, atau ingin mendiskusikan peluang kolaborasi sistem AI dan web? Silakan kirimkan pesan langsung melalui form atau kontak di bawah ini.
              </p>
            </div>

            {/* Info Kontak Ramping */}
            <div className="space-y-3">
              {/* Email Info */}
              <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-900/40 border border-slate-800/60 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 flex-shrink-0">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[9px] font-bold tracking-wider text-slate-500 block uppercase font-mono">EMAIL</span>
                    <span className="text-xs sm:text-sm font-bold text-slate-200 break-all">{emailAddress}</span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="ml-2 px-3 py-1.5 rounded-lg bg-slate-800/60 hover:bg-slate-800 text-[10px] font-mono font-bold text-cyan-400 transition-colors flex-shrink-0 border border-slate-700/50 cursor-pointer focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none"
                  aria-label="Salin email"
                >
                  {copied ? "Disalin!" : "Salin"}
                </button>
              </div>

              {/* Lokasi Info */}
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-900/40 border border-slate-800/60 shadow-sm">
                <div className="w-9 h-9 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <span className="text-[9px] font-bold tracking-wider text-slate-500 block uppercase font-mono">LOKASI</span>
                  <span className="text-xs sm:text-sm font-bold text-slate-200">Probolinggo, Jawa Timur</span>
                </div>
              </div>
            </div>

            {/* 3 TOMBOL SOSMED */}
            <div className="grid grid-cols-3 gap-3">
              {/* Instagram */}
              <motion.a
                href="https://instagram.com/alfrbtt"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.02, borderColor: "rgba(219, 39, 119, 0.4)" }}
                whileTap={{ scale: 0.97 }}
                className="py-3 rounded-2xl bg-slate-900/40 border border-slate-800/80 flex flex-col items-center justify-center gap-1.5 shadow-md text-slate-400 hover:text-pink-400 transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:outline-none"
                title="Instagram @alfrbtt"
                aria-label="Kunjungi Instagram @alfrbtt"
              >
                <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4h10a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01" />
                </svg>
                <span className="text-[10px] font-bold tracking-wide">Instagram</span>
              </motion.a>

              {/* GitHub */}
              <motion.a
                href="https://github.com/RobertDace"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.02, borderColor: "rgba(255, 255, 255, 0.2)" }}
                whileTap={{ scale: 0.97 }}
                className="py-3 rounded-2xl bg-slate-900/40 border border-slate-800/80 flex flex-col items-center justify-center gap-1.5 shadow-md text-slate-400 hover:text-white transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none"
                title="GitHub RobertDace"
                aria-label="Kunjungi GitHub RobertDace"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.008.069-.008 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
                <span className="text-[10px] font-bold tracking-wide">GitHub</span>
              </motion.a>

              {/* WhatsApp */}
              <motion.a
                href="https://wa.me/6282232813197"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.02, borderColor: "rgba(34, 197, 94, 0.4)" }}
                whileTap={{ scale: 0.97 }}
                className="py-3 rounded-2xl bg-slate-900/40 border border-slate-800/80 flex flex-col items-center justify-center gap-1.5 shadow-md text-slate-400 hover:text-emerald-400 transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none"
                title="Hubungi via WhatsApp"
                aria-label="Hubungi via WhatsApp"
              >
                <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.454 5.709 1.455h.008c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span className="text-[10px] font-bold tracking-wide">WhatsApp</span>
              </motion.a>
            </div>

          </motion.div>

          {/* KOLOM KANAN: Form Pengiriman Pesan */}
          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="p-5 sm:p-7 rounded-[28px] bg-slate-900/40 border border-slate-800/80 shadow-2xl space-y-4"
            >
              {/* Notifikasi Status */}
              {status === "success" && (
                <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-2.5 text-emerald-400 text-xs sm:text-sm font-medium">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <span>{statusMessage}</span>
                </div>
              )}

              {status === "error" && (
                <div className="p-3.5 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-center gap-2.5 text-rose-400 text-xs sm:text-sm font-medium">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <span>{statusMessage}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="contact-name" className="text-xs font-bold text-slate-400 tracking-wide">
                    Nama Lengkap <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/60 border border-slate-800 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500 focus-visible:ring-2 focus-visible:ring-cyan-400 transition-all duration-200"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="contact-email" className="text-xs font-bold text-slate-400 tracking-wide">
                    Email Anda <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="nama@email.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/60 border border-slate-800 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500 focus-visible:ring-2 focus-visible:ring-cyan-400 transition-all duration-200"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="contact-subject" className="text-xs font-bold text-slate-400 tracking-wide">
                  Subjek
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Diskusi Proyek Web / Penawaran Kerjasama"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950/60 border border-slate-800 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500 focus-visible:ring-2 focus-visible:ring-cyan-400 transition-all duration-200"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="contact-message" className="text-xs font-bold text-slate-400 tracking-wide">
                  Pesan <span className="text-cyan-400">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tuliskan detail ide atau pertanyaan Anda di sini..."
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950/60 border border-slate-800 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500 focus-visible:ring-2 focus-visible:ring-cyan-400 transition-all duration-200 resize-none"
                />
              </div>

              {/* TOMBOL KIRIM PESAN */}
              <motion.button
                type="submit"
                disabled={status === "loading"}
                whileHover={{ scale: 1.01, boxShadow: "0 0 15px rgba(6, 182, 212, 0.25)" }}
                whileTap={{ scale: 0.99 }}
                className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-cyan-400 via-sky-400 to-emerald-400 hover:from-cyan-500 hover:to-emerald-500 text-slate-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition-all disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Memproses Pengiriman...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Kirim Pesan</span>
                  </>
                )}
              </motion.button>

              <p className="text-[11px] text-slate-400 text-center pt-1 font-medium">
                Membuka aplikasi email default Anda atau hubungi langsung via WhatsApp di samping.
              </p>

            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
