"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { ArrowRight } from "lucide-react";

export default function CallToAction() {
  const t = useTranslations("Landing.cta");
  const locale = useLocale();
  return (
    <section className="relative mx-auto mb-20 mt-20 max-w-4xl bg-gradient-to-br rounded-3xl bg-bgaccentlight dark:bg-bgaccentdark px-10 py-16 text-center shadow-2xl">
      <h2 className="text-3xl font-extrabold sm:text-4xl">{t("title")}</h2>
      <p className="mx-auto mt-4 max-w-2xl text-lg">{t("subtitle")}</p>
      <Link
        href={`${locale}/contact`}
        className="group inline-flex items-center mt-6 gap-2 rounded-2xl border hover:text-textdark dark:hover:text-textlight border-slate-400/50 bg-transparent px-6 py-3 text-base font-semibold outline-none transition duration-300 hover:scale-105 hover:border-slate-400 hover:bg-[var(--color-primary)] dark:hover:bg-[var(--color-primarydark)] focus-visible:ring-2 focus-visible:ring-slate-300"
      >
        {t("contact")} <ArrowRight size={24} />
      </Link>
    </section>
  );
}
