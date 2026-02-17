import Link from "next/link";
import { COLORS, COMPANY, CONTACT } from "@/lib/constants";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: COLORS.footerBg,
        color: "#ccc",
        padding: "80px 0 30px",
        fontSize: "0.95rem",
        borderTop: `5px solid ${COLORS.primary}`,
      }}
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
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "40px",
            marginBottom: "50px",
            textAlign: "left",
          }}
        >
          {/* Company Info */}
          <div>
            <h4
              style={{
                color: COLORS.primary,
                fontSize: "1.4rem",
                marginBottom: "25px",
                letterSpacing: "1px",
                fontWeight: 700,
                textTransform: "uppercase",
              }}
            >
              {COMPANY.name}
            </h4>
            <p style={{ marginBottom: "15px", lineHeight: "1.8" }}>
              Leading provider of contractual services in Mining, Civil, and
              Electrical works.
            </p>
            <p style={{ marginBottom: "15px", lineHeight: "1.8" }}>
              <strong style={{ color: COLORS.white }}>Founder:</strong>
              <br />
              {COMPANY.founder}
            </p>
            <p
              style={{
                lineHeight: "1.8",
              }}
            >
              <strong style={{ color: COLORS.white }}>Administrator:</strong>
              <br />
              {COMPANY.administrator}
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4
              style={{
                color: COLORS.primary,
                fontSize: "1.4rem",
                marginBottom: "25px",
                letterSpacing: "1px",
                fontWeight: 700,
                textTransform: "uppercase",
              }}
            >
              Contact Us
            </h4>

            <div style={{ marginBottom: "15px", display: "flex", alignItems: "flex-start" }}>
              <span
                style={{
                  marginRight: "15px",
                  color: COLORS.primary,
                  fontSize: "1.2rem",
                }}
              >
                📍
              </span>
              <div>
                <strong style={{ color: COLORS.white }}>
                  {CONTACT.headOffice.label}
                </strong>
                <p style={{ lineHeight: "1.8" }}>{CONTACT.headOffice.location}</p>
              </div>
            </div>

            <div style={{ marginBottom: "15px", display: "flex", alignItems: "flex-start" }}>
              <span
                style={{
                  marginRight: "15px",
                  color: COLORS.primary,
                  fontSize: "1.2rem",
                }}
              >
                📍
              </span>
              <div>
                <strong style={{ color: COLORS.white }}>
                  {CONTACT.branch1.label}
                </strong>
                <p style={{ lineHeight: "1.8" }}>{CONTACT.branch1.location}</p>
              </div>
            </div>

            <div style={{ marginBottom: "15px", display: "flex", alignItems: "flex-start" }}>
              <span
                style={{
                  marginRight: "15px",
                  color: COLORS.primary,
                  fontSize: "1.2rem",
                }}
              >
                📍
              </span>
              <div>
                <strong style={{ color: COLORS.white }}>
                  {CONTACT.branch2.label}
                </strong>
                <p style={{ lineHeight: "1.8" }}>{CONTACT.branch2.location}</p>
              </div>
            </div>

            <div style={{ marginBottom: "15px", display: "flex", alignItems: "flex-start" }}>
              <span
                style={{
                  marginRight: "15px",
                  color: COLORS.primary,
                  fontSize: "1.2rem",
                }}
              >
                📞
              </span>
              <div>
                {CONTACT.phones.map((phone, index) => (
                  <Link key={index} href={`tel:${phone}`}>
                    <p
                      style={{
                        lineHeight: "1.8",
                        color: "#ccc",
                        cursor: "pointer",
                      }}
                    >
                      {phone}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: "15px", display: "flex", alignItems: "flex-start" }}>
              <span
                style={{
                  marginRight: "15px",
                  color: COLORS.primary,
                  fontSize: "1.2rem",
                }}
              >
                ✉️
              </span>
              <div>
                <Link href={`mailto:${CONTACT.email}`}>
                  <p
                    style={{
                      lineHeight: "1.8",
                      color: "#ccc",
                      cursor: "pointer",
                    }}
                  >
                    {CONTACT.email}
                  </p>
                </Link>
              </div>
            </div>
          </div>

          {/* Socials */}
          <div>
            <h4
              style={{
                color: COLORS.primary,
                fontSize: "1.4rem",
                marginBottom: "25px",
                letterSpacing: "1px",
                fontWeight: 700,
                textTransform: "uppercase",
              }}
            >
              Socials
            </h4>
            <p style={{ marginBottom: "15px", lineHeight: "1.8" }}>
              Instagram : {CONTACT.instagram}
            </p>
            <p
              style={{
                lineHeight: "1.8",
              }}
            >
              <strong style={{ color: COLORS.white }}>Contact Hours:</strong>
              <br />
              Mon - Sat: 10:00 AM - 6:00 PM
            </p>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid #333",
            paddingTop: "30px",
            textAlign: "center",
            fontSize: "0.85rem",
            color: "#777",
          }}
        >
          <p>
            &copy; 2026 {COMPANY.name} of Companies. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}