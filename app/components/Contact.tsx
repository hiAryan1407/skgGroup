"use client";

import Link from "next/link";
import { COLORS, CONTACT } from "@/lib/constants";
import { useState } from "react";
import { ContactFormData, ContactFormResponse } from "@/lib/types";

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<ContactFormResponse | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setResponse(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setResponse(data);

      if (data.success) {
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      }
    } catch (error) {
      setResponse({
        success: false,
        message: "Error sending message",
        error: String(error),
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      style={{
        background: COLORS.paper,
        padding: "80px 0",
        textAlign: "center",
        borderTop: "1px solid #ddd",
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
            fontSize: "2.5rem",
            marginBottom: "20px",
            color: COLORS.dark,
            fontWeight: 700,
            textTransform: "uppercase",
          }}
        >
          Get In Touch
        </h2>

        <form
          onSubmit={handleSubmit}
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            background: COLORS.white,
            padding: "40px",
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          }}
        >
          <div
            style={{
              marginBottom: "20px",
              textAlign: "left",
            }}
          >
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: 600,
                color: COLORS.dark,
              }}
            >
              Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid #ddd",
                borderRadius: "4px",
                fontSize: "1rem",
                fontFamily: "Inter, sans-serif",
              }}
            />
          </div>

          <div
            style={{
              marginBottom: "20px",
              textAlign: "left",
            }}
          >
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: 600,
                color: COLORS.dark,
              }}
            >
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid #ddd",
                borderRadius: "4px",
                fontSize: "1rem",
                fontFamily: "Inter, sans-serif",
              }}
            />
          </div>

          <div
            style={{
              marginBottom: "20px",
              textAlign: "left",
            }}
          >
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: 600,
                color: COLORS.dark,
              }}
            >
              Phone *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid #ddd",
                borderRadius: "4px",
                fontSize: "1rem",
                fontFamily: "Inter, sans-serif",
              }}
            />
          </div>

          <div
            style={{
              marginBottom: "20px",
              textAlign: "left",
            }}
          >
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: 600,
                color: COLORS.dark,
              }}
            >
              Message *
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid #ddd",
                borderRadius: "4px",
                fontSize: "1rem",
                fontFamily: "Inter, sans-serif",
                resize: "vertical",
              }}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              background: loading ? "#999" : COLORS.primary,
              color: COLORS.dark,
              padding: "15px 40px",
              border: "none",
              borderRadius: "4px",
              fontSize: "1rem",
              fontWeight: 700,
              textTransform: "uppercase",
              cursor: loading ? "not-allowed" : "pointer",
              transition: "0.3s",
              fontFamily: "'Oswald', sans-serif",
            }}
            onMouseEnter={(e) => {
              if (!loading) {
                (e.target as HTMLElement).style.background = COLORS.white;
                (e.target as HTMLElement).style.transform = "translateY(-3px)";
              }
            }}
            onMouseLeave={(e) => {
              if (!loading) {
                (e.target as HTMLElement).style.background = COLORS.primary;
                (e.target as HTMLElement).style.transform = "translateY(0)";
              }
            }}
          >
            {loading ? "Sending..." : "Send Inquiry"}
          </button>

          {response && (
            <div
              style={{
                marginTop: "20px",
                padding: "15px",
                borderRadius: "4px",
                backgroundColor: response.success ? "#d4edda" : "#f8d7da",
                color: response.success ? "#155724" : "#721c24",
                border: `1px solid ${response.success ? "#c3e6cb" : "#f5c6cb"}`,
              }}
            >
              {response.message}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}