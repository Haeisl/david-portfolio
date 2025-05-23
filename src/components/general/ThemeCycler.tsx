"use client";
import { useState } from "react";

const themes = [
  {
    name: "Emerald",
    primary: "#10b981",
    primaryDark: "#34d399",
  },
  {
    name: "Blue",
    primary: "#3b82f6",
    primaryDark: "#60a5fa",
  },
  {
    name: "Rose",
    primary: "#f43f5e",
    primaryDark: "#fb7185",
  },
  {
    name: "Amber",
    primary: "#f59e0b",
    primaryDark: "#fbbf24",
  },
];

export default function ThemeCycler() {
  const [index, setIndex] = useState(0);

  const cycleTheme = () => {
    const next = (index + 1) % themes.length;
    const t = themes[next];

    document.documentElement.style.setProperty("--color-primary", t.primary);
    document.documentElement.style.setProperty(
      "--color-primarydark",
      t.primaryDark
    );
    setIndex(next);
  };

  return (
    <div className="text-center space-y-2 mb-1">
      <button
        onClick={cycleTheme}
        className="text-sm text-[var(--color-primary)] dark:text-[var(--color-primarydark)] hover:underline"
      >
        🎨 Theme: {themes[index].name}
      </button>
    </div>
  );
}
