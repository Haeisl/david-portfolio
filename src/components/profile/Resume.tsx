"use client";

import { useTranslations } from "next-intl";
import HeadingWithLines from "./HeadingWithLines";
import { Download } from "lucide-react";
import BasedButton from "../general/BasedButton";

export default function Resume() {
  const t = useTranslations("Resume");
  return (
    <section className="py-12">
      <HeadingWithLines title={t("title")} description={t("description")} />
      <BasedButton
        href="/test.txt"
        icon={<Download size={24} />}
        label={t("downloadtitle")}
        download
      />
    </section>
  );
}
