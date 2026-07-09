import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";
import ParticleBackground from "@/components/ParticleBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0f19] text-slate-100 relative overflow-x-hidden">
      {/* Background Reactive Texture, Cursor, & Preloader */}
      <ParticleBackground />
      <CustomCursor />
      <Preloader />

      {/* Floating Capsule Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Projects Showcase */}
      <Projects />

      {/* Technical Skills Marquee */}
      <Skills />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}