"use client";

import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import BasedButton from "../general/BasedButton";

export default function CallToAction() {
  const t = useTranslations("Landing.cta");
  const locale = useLocale();
  return (
    <section className="relative mx-auto mb-20 mt-20 max-w-4xl bg-gradient-to-br rounded-3xl bg-bgaccentlight dark:bg-bgaccentdark px-10 py-16 text-center shadow-2xl">
      <h2 className="text-3xl font-extrabold sm:text-4xl">{t("title")}</h2>
      <p className="mx-auto mt-4 max-w-2xl text-lg">{t("subtitle")}</p>

      <BasedButton
        href={`${locale}/contact`}
        label={t("contact")}
        siteNavigation
        className="mt-8"
      />
    </section>
  );
}
