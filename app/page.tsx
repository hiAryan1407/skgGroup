"use client";

import Navigation from "@/app/components/Navigation";
import Hero from "@/app/components/Hero";
import ClientsSlider from "@/app/components/ClientsSlider";
import Services from "@/app/components/Services";
import GalleryPreview from "@/app/components/GalleryPreview";
import Leadership from "@/app/components/Leadership";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";
import WhatsAppFloat from "@/app/components/WhatsAppFloat";

export default function Home() {
  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <Navigation />
      <Hero />
      <ClientsSlider />
      <Services />
      <GalleryPreview />
      <Leadership />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
