import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
import { nl2br } from "@/app/utils/nlToBr";

export const metadata: Metadata = { title: "Impressum / Legal notice" };

export default async function ImprintPage() {
  const t = await getTranslations("Imprint");

  return (
    <article className="mx-auto max-w-3xl px-4 py-10 space-y-6 text-md text-textlight dark:text-textdark">
      <h1 className="text-3xl font-bold tracking-tight">{t("title")}</h1>

      <section>
        <p className="text-xl font-semibold leading-relaxed">{t("intro")}</p>
      </section>

      <section className="leading-relaxed">
        <p>{t("name")}</p>
        <p>{nl2br(t("address"))}</p>
      </section>

      <section className="leading-relaxed">
        <p>{nl2br(t("contact"))}</p>
      </section>

      <section className="leading-relaxed">
        <p>{nl2br(t("disclaimer"))}</p>
      </section>
    </article>
  );
}
