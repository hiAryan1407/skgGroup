"use client";

import Image from "next/image";
import Link from "next/link";
import { GALLERY_IMAGES, COLORS } from "@/lib/constants";
import { useState } from "react";

export default function GalleryPreview() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      style={{
        background: "#111",
        padding: "100px 0",
        textAlign: "center",
        color: COLORS.white,
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px",
        }}
      >
        <h2
          style={{
            color: COLORS.primary,
            fontSize: "3rem",
            marginBottom: "20px",
            fontWeight: 700,
            textTransform: "uppercase",
          }}
        >
          Site Gallery
        </h2>
        <p
          style={{
            color: "#aaa",
            marginBottom: "40px",
            fontSize: "1rem",
          }}
        >
          A glimpse into our on-site execution and machinery.
        </p>

        <div
          className="gallery-track"
          style={{
            justifyContent: "center",
          }}
        >
          {GALLERY_IMAGES.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`Gallery ${index + 1}`}
              width={450}
              height={280}
              className="gallery-slide-img"
              style={{
                border: "4px solid #333",
              }}
            />
          ))}
          {GALLERY_IMAGES.map((image, index) => (
            <Image
              key={`repeat-${index}`}
              src={image}
              alt={`Gallery ${index + 1}`}
              width={450}
              height={280}
              className="gallery-slide-img"
              style={{
                border: "4px solid #333",
              }}
            />
          ))}
        </div>

        <Link href="/gallery">
          <span
            style={{
              background: isHovered ? COLORS.white : COLORS.primary,
              color: COLORS.dark,
              padding: "15px 40px",
              textDecoration: "none",
              fontWeight: 700,
              display: "inline-block",
              marginTop: "30px",
              fontSize: "1rem",
              textTransform: "uppercase",
              fontFamily: "'Oswald', sans-serif",
              cursor: "pointer",
              border: "none",
              transition: "0.3s",
              transform: isHovered ? "translateY(-3px)" : "translateY(0)",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Visit Our Gallery
          </span>
        </Link>
      </div>
    </section>
  );
}