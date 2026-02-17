"use client";
import Image from "next/image";
import Link from "next/link";
import { COLORS, COMPANY } from "@/lib/constants";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .nav-menu {
            display: none !important;
          }
          .nav-menu.open {
            display: flex !important;
          }
          .nav-toggle {
            display: block !important;
          }
        }
        @media (min-width: 769px) {
          .nav-menu {
            display: flex !important;
            flex-direction: row !important;
            position: static !important;
            background-color: transparent !important;
            width: auto !important;
            padding: 0 !important;
            gap: 25px !important;
          }
          .nav-toggle {
            display: none !important;
          }
        }
      `}</style>
      <nav
        style={{
          position: "absolute",
          top: 0,
          width: "100%",
          padding: "30px 6%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 1000,
        }}
      >
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
          <Image
            src="/images/landing/logo-brief.png"
            alt={`${COMPANY.name} Logo`}
            width={50}
            height={50}
            style={{ marginRight: "10px" }}
          />
          <span
            style={{
              color: COLORS.white,
              fontFamily: "'Oswald', sans-serif",
              fontSize: "1.5rem",
              letterSpacing: "1px",
              fontWeight: 700,
            }}
          >
            {COMPANY.name}
          </span>
        </Link>

        <div
          className={`nav-menu ${isOpen ? "open" : ""}`}
          style={{
            flexDirection: "column",
            position: "absolute",
            top: "100%",
            left: 0,
            width: "100%",
            backgroundColor: COLORS.dark,
            padding: "20px",
            gap: "15px",
          }}
        >
          <Link href="#about" onClick={() => setIsOpen(false)}>
            <span
              style={{
                color: COLORS.white,
                textDecoration: "none",
                fontSize: "0.8rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "1.5px",
                cursor: "pointer",
              }}
            >
              About
            </span>
          </Link>
          <Link href="#services" onClick={() => setIsOpen(false)}>
            <span
              style={{
                color: COLORS.white,
                textDecoration: "none",
                fontSize: "0.8rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "1.5px",
                cursor: "pointer",
              }}
            >
              Our Work
            </span>
          </Link>
          <Link href="/gallery" onClick={() => setIsOpen(false)}>
            <span
              style={{
                color: COLORS.white,
                textDecoration: "none",
                fontSize: "0.8rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "1.5px",
                cursor: "pointer",
              }}
            >
              Gallery
            </span>
          </Link>
          <Link href="#contact" onClick={() => setIsOpen(false)}>
            <span
              style={{
                background: COLORS.primary,
                color: COLORS.dark,
                padding: "10px 20px",
                textDecoration: "none",
                fontSize: "0.8rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "1.5px",
                cursor: "pointer",
                display: "inline-block",
              }}
            >
              Contact Us
            </span>
          </Link>
        </div>

        <button
          className="nav-toggle"
          onClick={() => setIsOpen(!isOpen)}
          style={{
            display: "none",
            backgroundColor: "transparent",
            border: "none",
            color: COLORS.white,
            fontSize: "1.5rem",
            cursor: "pointer",
          }}
        >
          ☰
        </button>
      </nav>
    </>
  );
}