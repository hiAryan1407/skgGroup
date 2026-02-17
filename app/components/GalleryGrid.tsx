"use client";

import Image from "next/image";
import { COLORS } from "@/lib/constants";
import { useState } from "react";

interface GalleryGridProps {
  items: Array<{
    src: string;
    title: string;
    desc: string;
  }>;
}

export default function GalleryGrid({ items }: GalleryGridProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      style={{
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "80px 20px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
          gap: "30px",
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            suppressHydrationWarning
            style={{
              position: "relative",
              width: "100%",
              paddingBottom: "66.67%",
              overflow: "hidden",
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            data-aos="fade-up"
            data-aos-delay={index * 50}
          >
            <Image
              src={item.src}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{
                objectFit: "cover",
                objectPosition: "center",
                transition: "transform 0.6s ease, opacity 0.6s ease",
                transform: hoveredIndex === index ? "scale(1.1)" : "scale(1)",
                opacity: hoveredIndex === index ? 0.6 : 0.9,
              }}
            />
            {/* Hover Description Overlay */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                background: "rgba(0,0,0,0.9)",
                color: "white",
                padding: "25px",
                transform: hoveredIndex === index ? "translateY(0)" : "translateY(100%)",
                transition: "transform 0.4s ease",
                borderTop: `4px solid ${COLORS.primary}`,
              }}
            >
              <h4
                style={{
                  color: COLORS.primary,
                  marginBottom: "8px",
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: "1.3rem",
                  textTransform: "uppercase",
                }}
              >
                {item.title}
              </h4>
              <p
                style={{
                  fontSize: "0.9rem",
                  lineHeight: "1.4",
                  color: "#ddd",
                }}
              >
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}