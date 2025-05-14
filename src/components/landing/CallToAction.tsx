"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { ArrowRight } from "lucide-react";

export default function CallToAction() {
  const t = useTranslations("Landing.cta");
  const locale = useLocale();
  return (
    <section className="relative mx-auto mb-24 mt-20 max-w-4xl rounded-3xl bg-gradient-to-br bg-primary dark:bg-primarydark px-10 py-16 text-center shadow-2xl shadow-primary/40 dark:shadow-primarydark/40">
      <h2 className="text-3xl font-extrabold sm:text-4xl">{t("title")}</h2>
      <p className="mx-auto mt-4 max-w-2xl text-lg">{t("subtitle")}</p>
      <Link
        href={`${locale}/contact`}
        className="mt-8 gap-3 inline-flex rounded-2xl bg-bgsaccentlight dark:bg-bgaccentdark px-8 py-4 text-base font-semibold transition duration-300 hover:scale-105 focus-visible:ring-2 focus-visible:ring-white"
      >
        {t("contact")} <ArrowRight size={22} />
      </Link>
    </section>
  );
}
