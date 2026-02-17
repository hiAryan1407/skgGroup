import Image from "next/image";
import { CLIENT_LOGOS, COLORS } from "@/lib/constants";

export default function ClientsSlider() {
  return (
    <section
      style={{
        padding: "80px 0 60px",
        background: COLORS.white,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          textAlign: "center",
          marginBottom: "50px",
        }}
      >
        <h2
          style={{
            fontSize: "2.8rem",
            borderBottom: `4px solid ${COLORS.primary}`,
            display: "inline-block",
            paddingBottom: "5px",
            fontWeight: 700,
            textTransform: "uppercase",
            color: COLORS.dark,
          }}
        >
          Our Clients
        </h2>
      </div>
      <div className="slider">
        <div className="slide-track">
          {CLIENT_LOGOS.map((logo, index) => (
            <div key={index} className="slide">
              <Image
                src={logo}
                alt={`Client ${index + 1}`}
                width={150}
                height={80}
                style={{
                  maxWidth: "100%",
                  maxHeight: "80px",
                  objectFit: "contain",
                }}
              />
            </div>
          ))}
          {CLIENT_LOGOS.map((logo, index) => (
            <div key={`repeat-${index}`} className="slide">
              <Image
                src={logo}
                alt={`Client ${index + 1}`}
                width={150}
                height={80}
                style={{
                  maxWidth: "100%",
                  maxHeight: "80px",
                  objectFit: "contain",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}