"use client";

import Image from "next/image";
import { COLORS, ENTITIES, LEADERSHIP, VISION, SAFETY } from "@/lib/constants";
import { useState } from "react";

export default function LeadershipSection() {
  const [hoveredEntityId, setHoveredEntityId] = useState<string | null>(null);
  const [hoveredLeaderIndex, setHoveredLeaderIndex] = useState<number | null>(null);

  return (
    <section
      style={{
        padding: "100px 0",
        background: COLORS.paper,
      }}
      id="about"
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px",
        }}
      >
        {/* Company Entities Section */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "60px",
          }}
        >
          <h2
            style={{
              fontSize: "2rem",
              marginBottom: "10px",
              color: COLORS.dark,
              fontWeight: 700,
              textTransform: "uppercase",
            }}
          >
            Our Group Companies & Leadership
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: "#666",
              marginBottom: "50px",
            }}
          >
            Built on trust, driven by modern management, and powered by field expertise.
          </p>
        </div>

        {/* Entities Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "40px",
            marginBottom: "80px",
          }}
        >
          {ENTITIES.map((entity) => (
            <div
              key={entity.id}
              suppressHydrationWarning
              style={{
                background: COLORS.white,
                padding: "20px",
                border: "1px solid #ddd",
                textAlign: "center",
                transition: "0.3s",
                borderBottom: hoveredEntityId === entity.id ? `4px solid ${COLORS.primary}` : "4px solid transparent",
                transform: hoveredEntityId === entity.id ? "translateY(-5px)" : "translateY(0)",
                boxShadow: hoveredEntityId === entity.id ? "0 10px 30px rgba(0,0,0,0.1)" : "none",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              onMouseEnter={() => setHoveredEntityId(entity.id)}
              onMouseLeave={() => setHoveredEntityId(null)}
              data-aos="fade-up"
            >
              <div
                style={{
                  height: "150px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#f9f9f9",
                  width: "100%",
                  marginBottom: "20px",
                }}
              >
                <h3
                  style={{
                    color: COLORS.primary,
                    fontSize: "3rem",
                    margin: 0,
                  }}
                >
                  {entity.acronym}
                </h3>
              </div>
              <h4
                style={{
                  fontSize: "1.4rem",
                  marginBottom: "5px",
                  color: COLORS.dark,
                  fontWeight: 700,
                  textTransform: "uppercase",
                }}
              >
                {entity.name}
              </h4>
              <span
                style={{
                  color: COLORS.primary,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  fontSize: "0.85rem",
                  letterSpacing: "1px",
                  display: "block",
                  marginBottom: "15px",
                }}
              >
                {entity.role}
              </span>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "#555",
                  lineHeight: "1.5",
                  maxWidth: "90%",
                }}
              >
                {entity.description}
              </p>
            </div>
          ))}
        </div>

        {/* Leadership Section */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "50px",
          }}
        >
          <h2
            style={{
              fontSize: "2rem",
              marginBottom: "10px",
              color: COLORS.dark,
              fontWeight: 700,
              textTransform: "uppercase",
            }}
          >
            Our Leadership
          </h2>
        </div>

        {/* Leadership Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "40px",
            marginBottom: "50px",
          }}
        >
          {LEADERSHIP.map((member, index) => (
            <div
              key={index}
              suppressHydrationWarning
              style={{
                background: COLORS.white,
                padding: "20px",
                border: "1px solid #ddd",
                textAlign: "center",
                transition: "0.3s",
                borderBottom: hoveredLeaderIndex === index ? `4px solid ${COLORS.primary}` : "4px solid transparent",
                transform: hoveredLeaderIndex === index ? "translateY(-5px)" : "translateY(0)",
                boxShadow: hoveredLeaderIndex === index ? "0 10px 30px rgba(0,0,0,0.1)" : "none",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              onMouseEnter={() => setHoveredLeaderIndex(index)}
              onMouseLeave={() => setHoveredLeaderIndex(null)}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div
                style={{
                  width: "100%",
                  height: "250px",
                  position: "relative",
                  marginBottom: "20px",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
              </div>
              <h4
                style={{
                  fontSize: "1.4rem",
                  marginBottom: "5px",
                  color: COLORS.dark,
                  fontWeight: 700,
                  textTransform: "uppercase",
                }}
              >
                {member.name}
              </h4>
              <span
                style={{
                  color: COLORS.primary,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  fontSize: "0.85rem",
                  letterSpacing: "1px",
                  display: "block",
                  marginBottom: "15px",
                }}
              >
                {member.role}
              </span>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "#555",
                  lineHeight: "1.5",
                  maxWidth: "90%",
                }}
              >
                {member.description}
              </p>
            </div>
          ))}
        </div>

        {/* Vision and Safety */}
        <div
          style={{
            marginTop: "50px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "30px",
          }}
        >
          <div
            style={{
              background: COLORS.white,
              padding: "30px",
              borderLeft: `5px solid ${COLORS.primary}`,
            }}
          >
            <p
              style={{
                fontSize: "1rem",
                lineHeight: "1.6",
              }}
            >
              <strong style={{ fontSize: "1.1rem" }}>VISION: </strong>
              {VISION}
            </p>
          </div>
          <div
            style={{
              background: COLORS.white,
              padding: "40px",
              borderBottom: `8px solid ${COLORS.primary}`,
            }}
          >
            <h3
              style={{
                fontSize: "1.5rem",
                marginBottom: "15px",
                color: COLORS.dark,
                fontWeight: 700,
                textTransform: "uppercase",
              }}
            >
              Safety & Compliance
            </h3>
            <ul
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "10px",
                listStyle: "none",
                marginTop: "20px",
              }}
            >
              {SAFETY.map((item, index) => (
                <li
                  key={index}
                  style={{
                    fontSize: "0.95rem",
                    color: "#666",
                  }}
                >
                  <span
                    style={{
                      color: COLORS.primary,
                      marginRight: "8px",
                    }}
                  >
                    ■
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}