"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

export default function Hero() {
  const t = useTranslations("Landing");
  const locale = useLocale();

  return (
    <section className="relative flex h-[90vh] w-full items-center justify-center overflow-hidden">
      {/* Background gradient blob */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 2, opacity: 0.25 }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "mirror" }}
        className="absolute inset-auto h-96 w-96 rounded-full bg-gradient-to-r bg-primary dark:bg-primarydark blur-3xl"
      />

      {/* Content */}
      <div className="z-10 mx-auto max-w-3xl px-6 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
          {t("title")}
          <span className="text-primary dark:text-primarydark">
            David&nbsp;Hasse
          </span>
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-300">{t("subtitle")}</p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href={`/${locale}/projects`}
            className="inline-flex items-center gap-2 rounded-2xl border border-slate-600/60 bg-transparent px-6 py-3 text-base font-semibold outline-none transition duration-300 hover:scale-105 hover:border-slate-400 hover:bg-primary dark:hover:bg-primarydark focus-visible:ring-2 focus-visible:ring-slate-300"
          >
            {t("links.projects")} <ArrowRight size={18} />
          </Link>
          <Link
            href={`/${locale}/about`}
            className="inline-flex items-center gap-2 rounded-2xl border border-slate-600/60 bg-transparent px-6 py-3 text-base font-semibold outline-none transition duration-300 hover:scale-105 hover:border-slate-400 hover:bg-primary dark:hover:bg-primarydark focus-visible:ring-2 focus-visible:ring-slate-300"
          >
            {t("links.about")} <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
