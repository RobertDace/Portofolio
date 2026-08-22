import { ImageResponse } from "next/og";

export const alt = "2OB1T — Full-Stack Developer & AI Integrator";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0b0f19 0%, #030712 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* Ambient Glow */}
        <div
          style={{
            position: "absolute",
            width: 650,
            height: 350,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(6,182,212,0.3) 0%, rgba(16,185,129,0.15) 45%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />

        {/* 2OB1T Typography Logo */}
        <div
          style={{
            fontSize: 130,
            fontWeight: 900,
            letterSpacing: "-0.04em",
            backgroundImage: "linear-gradient(90deg, #22d3ee, #38bdf8, #34d399)",
            backgroundClip: "text",
            color: "transparent",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          2OB1T
        </div>

        <div
          style={{
            fontSize: 32,
            fontWeight: 800,
            color: "#f8fafc",
            marginTop: 15,
            letterSpacing: "-0.01em",
          }}
        >
          ALFIAN NADIFI MASYHUDI
        </div>

        <div
          style={{
            fontSize: 20,
            fontWeight: 500,
            color: "#94a3b8",
            marginTop: 10,
            display: "flex",
            gap: "10px",
          }}
        >
          <span>Full-Stack Web Developer</span>
          <span>•</span>
          <span>AI Systems Integrator</span>
        </div>

        <div
          style={{
            marginTop: 32,
            padding: "10px 24px",
            borderRadius: 9999,
            background: "rgba(15, 23, 42, 0.9)",
            border: "1px solid rgba(6, 182, 212, 0.5)",
            color: "#22d3ee",
            fontSize: 16,
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          PORTFOLIO &amp; ENGINEERING JOURNAL
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
