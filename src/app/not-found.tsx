import { getTranslations } from "next-intl/server";
import Link from "next/link";

export default async function NotFound() {
  const t = await getTranslations("NotFound");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-bold mb-4">{t("title")}</h1>
      <p className="text-lg text-gray-600 mb-6">{t("description")}</p>
      <Link href="/" className="text-blue-600 underline">
        {t("homeLink")}
      </Link>
    </div>
  );
}
