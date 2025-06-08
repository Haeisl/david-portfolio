"use client";

import { useEffect } from "react";

export default function ThemeRestorer() {
  useEffect(() => {
    const saved = localStorage.getItem("color");
    if (saved) {
      try {
        const theme = JSON.parse(saved);
        document.documentElement.style.setProperty(
          "--color-primary",
          theme.primary
        );
        document.documentElement.style.setProperty(
          "--color-primarydark",
          theme.primaryDark
        );
      } catch (e) {
        console.error("Failed to parse saved theme:", e);
      }
    }
  }, []);

  return null;
}
