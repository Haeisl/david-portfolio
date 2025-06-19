"use client";
import { useEffect, useState } from "react";
import { themes } from "@/data/accents";

export default function ThemeCycler() {
  const [index, setIndex] = useState(0);
  const [name, setName] = useState("Default");

  useEffect(() => {
    const saved = localStorage.getItem("color");
    if (saved) {
      try {
        const theme = JSON.parse(saved);
        const foundIndex = themes.findIndex((t) => t.name === theme.name);
        if (foundIndex !== -1) {
          setIndex(foundIndex);
          setName(theme.name);
        }
      } catch (e) {
        console.error("Failed to parse saved theme:", e);
      }
    }
  }, []);

  const cycleTheme = () => {
    const next = (index + 1) % themes.length;
    const t = themes[next];

    document.documentElement.style.setProperty("--color-primary", t.primary);
    document.documentElement.style.setProperty(
      "--color-primarydark",
      t.primaryDark
    );
    localStorage.setItem("color", JSON.stringify(t));
    setIndex(next);
    setName(t.name);
  };

  return (
    <div className="text-center space-y-2 mb-0.5">
      <button
        onClick={cycleTheme}
        className="text-sm text-[var(--color-primary)] dark:text-[var(--color-primarydark)] hover:underline"
      >
        🎨 Theme: {name}
      </button>
    </div>
  );
}
