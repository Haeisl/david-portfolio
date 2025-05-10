import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");

  return (
    <>
      <h1 className="flex justify-center items-center text-5xl">
        {t("title")}
      </h1>
    </>
  );
}
