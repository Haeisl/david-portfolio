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
      <div className="flex justify-center items-center gap-2 mb-2">
        <h1 className="text-4xl font-bold text-textlight dark:text-textdark">
          David Hasse
        </h1>
        <span className="text-md text-textaltlight dark:text-textaltdark relative top-[5px]">
          ({t("pronouns")})
        </span>
      </div>
      <p className="text-lg text-textaltlight dark:text-textaltdark max-w-5xl mx-auto">
        {t("description")}
      </p>
    </section>
  );
}
