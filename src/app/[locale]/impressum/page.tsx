import { useTranslations } from "next-intl";
import { Metadata } from "next";
import { nl2br } from "@/app/utils/nlToBr";

export const metadata: Metadata = { title: "Impressum / Legal notice" };

export default function ImprintPage() {
  const t = useTranslations("Imprint");

  return (
    <main className="mx-auto max-w-3xl px-4 py-12 space-y-6 text-sm leading-relaxed">
      <h1 className="text-2xl font-semibold">{t("title")}</h1>

      <section>
        <p className="font-medium">{t("intro")}</p>
      </section>

      <section>
        <p>{t("name")}</p>
        <p>{nl2br(t("address"))}</p>
      </section>

      <section>
        <p>{nl2br(t("contact"))}</p>
      </section>

      <section>
        <p>{nl2br(t("disclaimer"))}</p>
      </section>
    </main>
  );
}
