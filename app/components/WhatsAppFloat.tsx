import Link from "next/link";
import { COLORS, CONTACT } from "@/lib/constants";

export default function WhatsAppFloat() {
  return (
    <Link
      href={`https://wa.me/${CONTACT.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "30px",
        right: "30px",
        background: COLORS.dark,
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
        border: `2px solid ${COLORS.primary}`,
        textDecoration: "none",
        transition: "0.3s",
      }}
      onMouseEnter={(e) => {
        const target = e.currentTarget;
        target.style.transform = "scale(1.1)";
      }}
      onMouseLeave={(e) => {
        const target = e.currentTarget;
        target.style.transform = "scale(1)";
      }}
    >
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 0C6.72 0 0 6.72 0 15c0 2.64.66 5.16 1.89 7.44L0 30l7.8-2.52C10.2 29.04 12.6 30 15 30c8.28 0 15-6.72 15-15S23.28 0 15 0zm0 27.6c-2.16 0-4.2-.54-6-1.44l-.42-.24-4.44 1.44 1.5-4.26-.3-.48C2.46 19.56 2.4 17.34 2.4 15c0-6.96 5.64-12.6 12.6-12.6 6.96 0 12.6 5.64 12.6 12.6 0 6.96-5.64 12.6-12.6 12.6zm6.12-9.48c-.36-.18-2.04-1.08-2.4-1.2-.36-.18-.66-.18-.96.18-.3.36-1.14 1.5-1.38 1.8-.24.3-.48.36-.84.12-2.16-1.08-3.54-1.62-4.92-3.24-.36-.54.36-.48 1.08-1.62.12-.24.06-.42-.12-.6-.18-.18-1.08-2.64-1.44-3.6-.36-1.02-.72-.84-1.02-.84h-.84c-.3 0-.78.12-1.2.48-.42.36-1.56 1.5-1.56 3.6 0 2.1 1.56 4.14 1.8 4.44.24.3 3.24 5.04 7.8 7.02 3.6 1.56 5.04 1.44 6 1.32 1.02-.18 2.04-.84 2.4-1.62.36-.78.36-1.44.24-1.62-.18-.24-.48-.36-.84-.48z"
          fill={COLORS.primary}
        />
      </svg>
    </Link>
  );
}