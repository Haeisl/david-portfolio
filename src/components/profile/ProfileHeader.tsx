import { useTranslations } from "next-intl";
import Image from "next/image";

export default function ProfileHeader() {
  const t = useTranslations("ProfileHeader");
  return (
    <section className="text-center">
      <Image
        src="/images/selfie.jpg"
        alt="Profile photo"
        width={200}
        height={200}
        className="rounded-full mx-auto mb-4"
      />
      <h1 className="text-4xl font-bold mb-2 text-textlight dark:text-textdark">
        David Hasse
      </h1>
      <p className="text-lg text-textaltlight dark:text-textaltdark max-w-5xl mx-auto">
        {t("description")}
      </p>
    </section>
  );
}
