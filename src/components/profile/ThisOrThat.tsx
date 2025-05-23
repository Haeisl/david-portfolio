"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import HeadingWithLines from "./HeadingWithLines";

type Pair = {
  left: string;
  right: string;
  preferred: "left" | "right";
  explanation: string;
};

export default function ThisOrThat() {
  const t = useTranslations("ThisOrThat");
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  const pairs = t.raw("pairs") as Pair[];

  const handleCardClick = (index: number) => {
    setFlippedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="py-12">
      <HeadingWithLines title={t("title")} description={t("description")} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {pairs.map((p, i) => {
          const isFlipped = flippedIndex === i;
          return (
            <div
              key={i}
              className="relative border rounded-lg p-4 text-center h-36 overflow-hidden cursor-pointer shadow-md"
              onClick={() => handleCardClick(i)}
            >
              {/* Front */}
              <div
                className={`absolute inset-0 flex flex-col justify-center items-center transition-opacity duration-300 ${
                  isFlipped ? "opacity-0" : "opacity-100"
                }`}
              >
                <p className="text-lg">{p.left}</p>
                <span className="inline-block my-2 italic">vs</span>
                <p className="text-lg">{p.right}</p>
              </div>

              {/* Back */}
              <div
                className={`absolute inset-0 flex flex-col justify-center items-center px-4 text-sm transition-opacity duration-300 ${
                  isFlipped ? "opacity-100" : "opacity-0"
                }`}
              >
                <p className="font-semibold text-[var(--color-primary)] dark:text-[var(--color-primarydark)] text-xl">
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
