import Image from "next/image";
import Link from "next/link";
import { GALLERY_ITEMS, COLORS } from "@/lib/constants";
import GalleryGrid from "@/app/components/GalleryGrid";

export default function GalleryPage() {
  return (
    <div style={{ minHeight: "100vh", background: COLORS.paper }}>
      {/* Header */}
      <div
        style={{
          padding: "40px 20px",
          textAlign: "center",
          background: COLORS.dark,
          color: COLORS.white,
        }}
      >
        <h1
          style={{
            fontSize: "2.5rem",
            marginBottom: "10px",
            fontWeight: 700,
            textTransform: "uppercase",
            color: COLORS.primary,
          }}
        >
          Gallery
        </h1>
        <p style={{ fontSize: "1rem" }}>On-site execution and machinery showcase</p>
        <Link href="/">
          <span
            style={{
              display: "inline-block",
              marginTop: "20px",
              color: COLORS.primary,
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            ← Back to Home
          </span>
        </Link>
      </div>

      {/* Gallery Grid Client Component */}
      <GalleryGrid items={GALLERY_ITEMS} />
    </div>
  );
}