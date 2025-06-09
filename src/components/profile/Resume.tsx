import { getLocale, getTranslations } from "next-intl/server";
import HeadingWithLines from "./HeadingWithLines";
import { Download } from "lucide-react";
import BasedButton from "../general/BasedButton";

export default async function Resume() {
  const locale = await getLocale();
  const t = await getTranslations({ locale, namespace: "Resume" });
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
