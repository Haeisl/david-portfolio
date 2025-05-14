"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useState } from "react";

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
    <section className="flex min-h-[90svh] flex-col items-center justify-center text-center">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 2, opacity: 0.25 }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "mirror" }}
        className="z-0 absolute inset-auto h-96 w-96 rounded-full bg-gradient-to-r bg-primary dark:bg-primarydark blur-3xl"
      />

      <h1 className="z-1 text-balance text-5xl font-extrabold sm:text-6xl">
        {t("title")}
        <span className="z-1 text-primary dark:text-primarydark">
          David Hasse
        </span>
      </h1>

      {/* Static line */}
      <p className="z-1 mt-6 text-2xl text-slate-400">{t("subtitle")}</p>

      {/* Dynamic typewriter line — fixed width so nothing shifts */}
      <p
        className="z-1 text-3xl font-semibold font-courier"
        style={{ width: `${MAX_LEN_A}ch` }}
      >
        {typed}
        <span className="z-1 animate-caret">|</span>
      </p>
      <div className="z-1 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Link
          href={`/${locale}/projects`}
          className="inline-flex items-center gap-2 hover:text-textdark dark:hover:text-textlight rounded-2xl border border-slate-400/50 bg-transparent px-6 py-3 text-base font-semibold outline-none transition duration-300 hover:scale-105 hover:border-slate-400 hover:bg-primary dark:hover:bg-primarydark focus-visible:ring-2 focus-visible:ring-slate-300"
        >
          {t("links.projects")} <ArrowRight size={18} />
        </Link>
        <Link
          href={`/${locale}/about`}
          className="inline-flex items-center gap-2 hover:text-textdark dark:hover:text-textlight rounded-2xl border border-slate-400/50 bg-transparent px-6 py-3 text-base font-semibold outline-none transition duration-300 hover:scale-105 hover:border-slate-400 hover:bg-primary dark:hover:bg-primarydark focus-visible:ring-2 focus-visible:ring-slate-300"
        >
          {t("links.about")} <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}
