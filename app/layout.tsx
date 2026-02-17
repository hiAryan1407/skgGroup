import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";
import AosWrapper from "@/app/components/AosWrapper";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "SKG Group - Mining, Civil & Electrical Contract Works",
  description: "Leading provider of contractual services in Mining, Civil Construction, and Electrical Systems. Premium infrastructure solutions with decades of expertise.",
  keywords: "mining contractor, civil construction, electrical works, infrastructure",
  authors: [{ name: "SKG Group" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
        />
      </head>
      <body
        className={`${oswald.variable} ${inter.variable} antialiased`}
      >
        <AosWrapper>
          {children}
        </AosWrapper>
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js" />
      </body>
    </html>
  );
}
