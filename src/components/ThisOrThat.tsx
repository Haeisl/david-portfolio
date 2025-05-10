"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

type Pair = {
  left: string;
  right: string;
  preferred: "left" | "right";
  explanation: string;
};

export default function ThisOrThat() {
  const t = useTranslations("ThisOrThat");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  let timeoutId: NodeJS.Timeout;

  const pairs = t.raw("pairs") as Pair[];

  const handleMouseEnter = (index: number) => {
    clearTimeout(timeoutId);
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setActiveIndex(null);
    }, 400); // delay before fading out
  };

  return (
    <section className="py-12">
      <h2 className="text-2xl font-semibold mb-2 text-center">{t("title")}</h2>
      <h3 className="text-lg mb-6 text-textaltlight dark:text-textaltdark text-center">
        {t("description")}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {pairs.map((p, i) => {
          const isActive = activeIndex === i;
          return (
            <div
              key={i}
              className="relative border rounded-lg p-4 text-center h-36 overflow-hidden cursor-default"
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseLeave={handleMouseLeave}
            >
              {/* Front */}
              <div
                className={`absolute inset-0 flex flex-col justify-center items-center transition-opacity duration-200 ${
                  isActive ? "opacity-0" : "opacity-100"
                }`}
              >
                <p className="text-lg">{p.left}</p>
                <span className="inline-block my-2 italic">vs</span>
                <p className="text-lg">{p.right}</p>
              </div>

              {/* Back */}
              <div
                className={`absolute inset-0 flex flex-col justify-center items-center px-4 text-sm transition-opacity duration-300 ${
                  isActive ? "opacity-100" : "opacity-0"
                }`}
              >
                <p className="font-semibold text-primary dark:text-primarydark text-xl">
                  {p.preferred === "left" ? p.left : p.right}
                </p>
                <p className="text-textaltlight dark:text-textaltdark text-lg italic">
                  {p.explanation}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
