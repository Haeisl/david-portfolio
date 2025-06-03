"use client";

import { useTranslations } from "next-intl";
import HeadingWithLines from "./HeadingWithLines";
import { Download } from "lucide-react";

export default function Resume() {
  const t = useTranslations("Resume");
  return (
    <section className="py-12">
      <HeadingWithLines title={t("title")} description={t("description")} />
      <div className="flex justify-center items-center">
        <a
          href="/test.txt"
          download
          className="group relative inline-flex items-center gap-3 rounded-2xl border border-slate-400/50 bg-transparent
      px-6 py-3 text-base font-semibold  outline-none transition duration-300
      hover:scale-105 hover:border-slate-400 hover:bg-[var(--color-primary)] dark:hover:bg-[var(--color-primarydark)]
      hover:text-textdark dark:hover:text-textlight
      focus-visible:ring-2 focus-visible:ring-slate-300"
        >
          <span className="w-6 h-6 flex-shrink-0 transition-colors text-[var(--color-primary)] dark:text-[var(--color-primarydark)] group-hover:text-textdark dark:group-hover:text-textlight">
            <Download size={24} />
          </span>
          {t("title")}
        </a>
      </div>
    </section>
  );
}
