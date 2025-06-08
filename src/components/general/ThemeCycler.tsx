"use client";
import { useEffect, useState } from "react";

const themes = [
  {
    name: "Emerald",
    primary: "#10b981",
    primaryDark: "#34d399",
  },
  {
    name: "Amber",
    primary: "#f59e0b",
    primaryDark: "#fbbf24",
  },
  {
    name: "Lavender",
    primary: "#a78bfa",
    primaryDark: "#c4b5fd",
  },
  {
    name: "Clay",
    primary: "#d97706", // deep ochre
    primaryDark: "#f59e0b",
  },
  {
    name: "Indigo",
    primary: "#6366f1",
    primaryDark: "#818cf8",
  },
  {
    name: "Mocha",
    primary: "#8b5e3c",
    primaryDark: "#a47148",
  },
];

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
    <div className="text-center space-y-2 mb-1">
      <button
        onClick={cycleTheme}
        className="text-sm text-[var(--color-primary)] dark:text-[var(--color-primarydark)] hover:underline"
      >
        🎨 Theme: {name}
      </button>
    </div>
  );
}
