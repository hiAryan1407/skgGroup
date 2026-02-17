"use client";

import { useEffect, ReactNode } from "react";

interface AosWrapperProps {
  children: ReactNode;
}

export default function AosWrapper({ children }: AosWrapperProps) {
  useEffect(() => {
    // Import AOS after client-side hydration
    const initAos = async () => {
      const AOS = (await import("aos")).default;
      AOS.init({ duration: 1000, once: true });
    };
    initAos();
  }, []);

  return <>{children}</>;
}
