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
        href={
          locale === "de"
            ? "/CV-DavidHasse-de.pdf"
            : locale === "en"
            ? "/CV-DavidHasse-en.pdf"
            : (console.error(
                `Locale mismatch - No CV matches locale: ${locale}`
              ),
              undefined)
        }
        icon={<Download size={24} />}
        label={t("downloadtitle")}
        download
      />
    </section>
  );
}
