"use client";

import { COLORS, SERVICES } from "@/lib/constants";
import { useState } from "react";

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      style={{
        padding: "100px 0",
        background: "#e9e8e3",
      }}
      id="services"
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "60px",
          }}
        >
          <h2
            style={{
              fontSize: "3rem",
              marginBottom: "10px",
              color: COLORS.dark,
              fontWeight: 700,
              textTransform: "uppercase",
            }}
          >
            Our Work Portfolio
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: "#666",
            }}
          >
            Specialized Technical Services
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gap: "30px",
          }}
        >
          {SERVICES.map((service, index) => (
            <div
              key={index}
              style={{
                background: COLORS.white,
                padding: "40px",
                transition: "0.4s",
                borderLeft: hoveredIndex === index ? `10px solid ${COLORS.primary}` : `0 solid ${COLORS.primary}`,
                borderRadius: "4px",
                transform: hoveredIndex === index ? "translateY(-10px)" : "translateY(0)",
                boxShadow: hoveredIndex === index ? "20px 20px 50px rgba(0,0,0,0.08)" : "none",
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <h3
                style={{
                  fontSize: "1.8rem",
                  marginBottom: "25px",
                  color: COLORS.dark,
                  borderBottom: "2px solid #eee",
                  paddingBottom: "15px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                }}
              >
                {service.title}
              </h3>
              <ul
                style={{
                  listStyle: "none",
                }}
              >
                {service.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    style={{
                      marginBottom: "15px",
                      fontSize: "0.95rem",
                      lineHeight: "1.6",
                      color: "#444",
                      display: "flex",
                      alignItems: "flex-start",
                    }}
                  >
                    <span
                      style={{
                        color: COLORS.primary,
                        marginRight: "12px",
                        fontSize: "0.8rem",
                        marginTop: "4px",
                        flexShrink: 0,
                      }}
                    >
                      ➤
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}