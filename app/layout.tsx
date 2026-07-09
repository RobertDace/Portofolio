import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

// Load Font Plus Jakarta Sans
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "2OB1T — Full-Stack Developer & AI Integrator",
  description: "Portofolio karya, sistem, dan proyek AI buatan 2OB1T.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      {/* Dipasang langsung via plusJakartaSans.className agar 100% Teraplikasikan */}
      <body
        className={`${plusJakartaSans.className} bg-[#0b0f19] text-slate-100 antialiased selection:bg-cyan-500/30 selection:text-cyan-300`}
      >
        {children}
      </body>
    </html>
  );
}