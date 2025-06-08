"use client";

import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import BasedButton from "../general/BasedButton";

type Word = {
  title: string;
};

/**
 * Cycles through `words` with a type‑writer effect.
 * Returns the currently typed string (without the blinking caret).
 */
export function useTypewriter(
  words: Word[],
  {
    typingSpeed = 80, // ms per character while typing
    deletingSpeed = 40, // ms per character while deleting
    holdDuration = 2000, // how long to keep a word fully typed (ms)
  }: {
    typingSpeed?: number;
    deletingSpeed?: number;
    holdDuration?: number;
  } = {}
) {
  const [index, setIndex] = useState(0); // which word
  const [subIndex, setSubIndex] = useState(0); // which letter within word
  const [direction, setDirection] = useState<"forward" | "backward">("forward");

  useEffect(() => {
    const currentWord = words[index].title;
    let timeout: ReturnType<typeof setTimeout>;

    if (direction === "forward") {
      if (subIndex < currentWord.length) {
        // keep typing
        timeout = setTimeout(() => setSubIndex((v) => v + 1), typingSpeed);
      } else {
        // word complete → wait, THEN start deleting
        timeout = setTimeout(() => setDirection("backward"), holdDuration);
      }
    } else {
      // deleting
      if (subIndex > 0) {
        timeout = setTimeout(() => setSubIndex((v) => v - 1), deletingSpeed);
      } else {
        // deletion finished → move to next word and start typing again
        setDirection("forward");
        setIndex((v) => (v + 1) % words.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [
    words,
    index,
    subIndex,
    direction,
    typingSpeed,
    deletingSpeed,
    holdDuration,
  ]);

  return words[index].title.substring(0, subIndex);
}

export function HeroTypewriter() {
  const t = useTranslations("Landing");
  const WORDS_A = t.raw("personaldescriptions") as [];
  const locale = useLocale();

  const MAX_LEN_A = Math.max(...WORDS_A.map((w: Word) => w.title.length + 1));
  // hold the fully-typed word for 3.0 s before deleting
  const typed = useTypewriter(WORDS_A, { holdDuration: 3000 });

  return (
    <section className="relative flex min-h-[95svh] flex-col items-center justify-center text-center overflow-y-visible overflow-x-hidden">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 2, opacity: 0.25 }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "mirror" }}
        className="z-0 absolute left-1/2 top-1/2 h-72 w-72 sm:h-96 sm:w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r bg-[var(--color-primary)] dark:bg-[var(--color-primarydark)] blur-3xl overflow-hidden"
      />

      <h1 className="z-10 text-balance text-5xl font-extrabold sm:text-6xl">
        {t("title")}
        <span className="z-1 text-[var(--color-primary)] dark:text-[var(--color-primarydark)]drk">
          David Hasse
        </span>
      </h1>

      {/* Static line */}
      <p className="z-10 mt-6 text-2xl text-slate-400">{t("subtitle")}</p>

      {/* Dynamic typewriter line — fixed width so nothing shifts */}
      <p
        className="z-10 text-3xl font-semibold font-courier"
        style={{ width: `${MAX_LEN_A}ch` }}
      >
        {typed}
        <span className="z-10 animate-caret">|</span>
      </p>
      <div className="z-10 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <BasedButton
          href={`/${locale}/projects`}
          label={t("links.projects")}
          siteNavigation
        />
        <BasedButton
          href={`/${locale}/about`}
          label={t("links.about")}
          siteNavigation
        />
      </div>
    </section>
  );
}
