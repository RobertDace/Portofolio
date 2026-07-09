"use client";

import { useState } from "react";
import { Mail, Send, MessageSquare, Copy, Check, Sparkles } from "lucide-react";

// Inline SVG untuk Ikon Brand yang tidak ada di Lucide React
const GithubIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const InstagramIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const myEmail = "alfiantu@gmail.com"; // Ganti dengan email utamamu

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(myEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialLinks = [
    {
      name: "Instagram",
      handle: "@2ob1t",
      icon: InstagramIcon,
      url: "https://instagram.com",
      accent: "hover:border-pink-500/40 hover:text-pink-400",
    },
    {
      name: "GitHub",
      handle: "2OB1T",
      icon: GithubIcon,
      url: "https://github.com",
      accent: "hover:border-slate-500/40 hover:text-slate-100",
    },
    {
      name: "Discord",
      handle: "2OB1T Community",
      icon: MessageSquare,
      url: "https://discord.com",
      accent: "hover:border-indigo-500/40 hover:text-indigo-400",
    },
  ];

  return (
    <section id="contact" className="py-24 px-6 max-w-5xl mx-auto scroll-mt-10">
      {/* Header Section */}
      <div className="text-center space-y-4 mb-16">
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
          <Sparkles className="w-3.5 h-3.5" />
          Get In Touch
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-100">
          Mari{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-purple-400 bg-clip-text text-transparent">
            Berkolaborasi
          </span>
        </h2>
        <p className="text-slate-400 max-w-lg mx-auto text-sm md:text-base">
          Punya ide project baru, tawaran kerja sama, atau sekadar mau diskusi teknis? Pintu komunikasi selalu terbuka!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Left Side: Direct Contact Cards (2 Columns) */}
        <div className="lg:col-span-2 space-y-4">
          {/* Quick Email Copy Box */}
          <div className="p-6 bg-slate-900/60 border border-slate-800/80 rounded-2xl backdrop-blur-md relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-500 to-emerald-400" />
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">Email Utama</h4>
                <p className="text-sm font-semibold text-slate-200">{myEmail}</p>
              </div>
            </div>

            <button
              onClick={handleCopyEmail}
              className="w-full mt-3 py-2 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 bg-slate-800/80 hover:bg-slate-800 text-slate-300 border border-slate-700/60 transition-all duration-200 active:scale-95"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">Email Berhasil Disalin!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-cyan-400" />
                  <span>Salin Alamat Email</span>
                </>
              )}
            </button>
          </div>

          {/* Social Links Cards */}
          <div className="grid grid-cols-1 gap-3">
            {socialLinks.map((social, idx) => {
              const Icon = social.icon;
              return (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-between p-4 bg-slate-900/40 border border-slate-800/80 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:bg-slate-900/80 group ${social.accent}`}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-slate-800/60 text-slate-400 group-hover:text-slate-100 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-slate-200">{social.name}</h5>
                      <p className="text-[11px] font-mono text-slate-400">{social.handle}</p>
                    </div>
                  </div>
                  <span className="text-xs text-slate-500 group-hover:translate-x-1 transition-transform">→</span>
                </a>
              );
            })}
          </div>
        </div>

        {/* Right Side: Message Form (3 Columns) */}
        <div className="lg:col-span-3 p-6 sm:p-8 bg-slate-900/60 border border-slate-800/80 rounded-2xl backdrop-blur-md relative">
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">Nama Lengkap</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-2.5 bg-slate-950/60 border border-slate-800 rounded-xl text-xs text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/60 transition-colors"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">Email Anda</label>
                <input
                  type="email"
                  placeholder="nama@email.com"
                  className="w-full px-4 py-2.5 bg-slate-950/60 border border-slate-800 rounded-xl text-xs text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/60 transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">Subjek</label>
              <input
                type="text"
                placeholder="Diskusi Proyek Web / Penawaran Kerjasama"
                className="w-full px-4 py-2.5 bg-slate-950/60 border border-slate-800 rounded-xl text-xs text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/60 transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">Pesan</label>
              <textarea
                rows={4}
                placeholder="Tuliskan detail ide atau pertanyaanmu di sini..."
                className="w-full px-4 py-2.5 bg-slate-950/60 border border-slate-800 rounded-xl text-xs text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/60 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-6 rounded-xl text-xs font-bold bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-300 text-slate-950 flex items-center justify-center gap-2 hover:opacity-90 transition-opacity active:scale-[0.99]"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Kirim Pesan</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}