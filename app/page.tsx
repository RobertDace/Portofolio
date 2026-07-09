import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0f19] text-slate-100 relative">
      {/* Kursor & Intro Loading */}
      <CustomCursor />
      <Preloader />

      {/* Floating Navbar */}
      <Navbar />

      {/* Section 1: Hero (Beranda) */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="text-center space-y-4">
          <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            Full-Stack Developer & AI Integrator
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight">
            Selamat Datang di{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-purple-400 bg-clip-text text-transparent">
              2OB1T™ Workspace
            </span>
          </h1>
        </div>
      </section>

      {/* Section 2: Proyek */}
      <Projects />

      {/* Section 3: Keahlian (Marquee) */}
      <Skills />

      {/* Section 4: Kontak */}
      <section id="contact" className="py-24 px-6 max-w-4xl mx-auto text-center space-y-4">
        <h2 className="text-3xl font-bold">Hubungi Saya</h2>
        <p className="text-slate-400 text-sm">Siap untuk kolaborasi proyek baru.</p>
      </section>
    </main>
  );
}