"use client";

export default function Footer() {
  return (
    <footer className="border-t border-slate-950 bg-slate-950/40 py-8 text-center text-sm text-slate-500">
      <p>© {new Date().getFullYear()} 2OB1T. All rights reserved.</p>
    </footer>
  );
}