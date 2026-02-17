"use client";

import Link from "next/link";
import { COLORS } from "@/lib/constants";
import { useState } from "react";

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <header
      style={{
        background: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.85)), url('https://images.unsplash.com/photo-1580901368919-7738efb0f87e?q=80&w=2070&auto=format&fit=crop') center/cover no-repeat`,
        height: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: COLORS.white,
        position: "relative",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          padding: "0 20px",
        }}
        data-aos="zoom-out"
      >
        <h1
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4.2rem)",
            lineHeight: 1.1,
            marginBottom: "20px",
            fontWeight: 700,
            fontFamily: "'Oswald', sans-serif",
            textTransform: "uppercase",
          }}
        >
          Premium Contractual Solutions in Infrastructure
        </h1>
        <p
          style={{
            marginBottom: "30px",
            color: "#ddd",
            fontSize: "1.1rem",
          }}
        >
          Mining • Civil Construction • Electrical Systems
        </p>
        <Link href="#contact">
          <span
            style={{
              background: isHovered ? COLORS.white : COLORS.primary,
              color: COLORS.dark,
              padding: "15px 40px",
              textDecoration: "none",
              fontWeight: 700,
              display: "inline-block",
              transition: "0.3s",
              fontSize: "1rem",
              textTransform: "uppercase",
              fontFamily: "'Oswald', sans-serif",
              cursor: "pointer",
              border: "none",
              transform: isHovered ? "translateY(-3px)" : "translateY(0)",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Get in Touch
          </span>
        </Link>
      </div>
    </header>
  );
}