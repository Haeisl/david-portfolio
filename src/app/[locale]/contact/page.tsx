import { nl2br } from "@/app/utils/nlToBr";
import QRCard from "@/components/contact/QRCard";
import BasedButton from "@/components/general/BasedButton";
import FadeInSection from "@/components/general/FadeInSection";
import {
  Mail,
  Linkedin,
  Github,
  MapPinHouse,
  Earth,
  Languages,
  Briefcase,
  Download,
} from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import { Metadata } from "next";

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations("Meta.contact");

  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: "https://david-hasse.de/en/contact",
    },
    twitter: {
      title: t("title"),
      description: t("description"),
    },
  };
};

export default async function ContactPage() {
  const locale = await getLocale();
  const t = await getTranslations({ locale, namespace: "ContactPage" });

  const encodedEmail = "Y29udGFjdEBkYXZpZC1oYXNzZS5kZQ=="; // base64 of "contact@david-hasse.de"
  const decodedEmail = atob(encodedEmail);
  const subject = encodeURIComponent(t("mailSubject"));
  const mailHref = `mailto:${decodedEmail}?subject=${subject}`;

  return (
    <FadeInSection>
      <main className="mx-auto max-w-6xl px-4 py-14 min-h-[85vh]">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-3xl font-semibold tracking-wide uppercase text-textlight dark:text-textdark">
            {t("factsToContact")}
          </h2>
          <div className="hidden sm:block flex-grow h-px bg-gradient-to-r from-textlight/40 dark:from-textdark/40 to-transparent" />
        </div>

        <section className="grid auto-rows-[minmax(140px,auto)] gap-6 sm:grid-cols-6 lg:grid-cols-12">
          {/* Mini fact cards */}
          <FactCard
            className="sm:col-span-3 lg:col-span-3"
            label={t("facts.location")}
            value={t("facts.locationValue")}
            icon={<MapPinHouse size={22} />}
          />
          <FactCard
            className="sm:col-span-3 lg:col-span-3"
            label={t("facts.openTo")}
            value={t("facts.openValue")}
            icon={<Briefcase size={22} />}
          />
          <FactCard
            className="sm:col-span-3 lg:col-span-3"
            label={t("facts.timezone")}
            value={nl2br(t("facts.timezoneValue"))}
            icon={<Earth size={22} />}
          />
          <FactCard
            className="sm:col-span-3 lg:col-span-3"
            label={t("facts.languages")}
            value={nl2br(t("facts.languagesValue"))}
            icon={<Languages size={22} />}
          />

          {/* Hero + CTA */}
          <Tile className="sm:col-span-6 lg:col-span-8 row-span-2 flex flex-col items-center justify-center text-center space-y-6">
            <h1 className="text-5xl font-semibold tracking-tight">
              {t("title")}
            </h1>
            <p className="text-lg font-medium text-textaltlight dark:text-textaltdark">
              {t("tagline")}
            </p>
            <BasedButton
              href={mailHref}
              icon={<Mail size={28} />}
              label={t("cta")}
              className="px-8 py-4"
            />
          </Tile>

          {/* vCard / QR code */}
          <QRCard vcardLabel={t("vcard")} />

          {/* Social links */}
          <Tile className="sm:col-span-6 lg:col-span-12 row-span-1 flex flex-wrap items-center justify-center gap-10">
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
              icon={<Download size={28} />}
              label={t("resume")}
              download
            />
            <BasedButton
              href="https://www.linkedin.com/in/david-hasse-ab0bb11a9"
              icon={<Linkedin size={28} />}
              label="LinkedIn"
            />
            <BasedButton
              href="https://github.com/haeisl"
              icon={<Github size={28} />}
              label="GitHub"
            />
          </Tile>
        </section>
      </main>
    </FadeInSection>
  );
}

/*──────── helpers ───────*/

function Tile({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`rounded-2xl bg-bgaccentlight dark:bg-bgaccentdark backdrop-blur-sm shadow-md p-6 ${className}`}
    >
      {children}
    </div>
  );
}

function FactCard({
  className = "",
  label,
  value,
  icon,
}: {
  className?: string;
  label: string;
  value: string | React.JSX.Element[];
  icon?: React.ReactNode;
}) {
  return (
    <Tile
      className={`${className} flex flex-col justify-center text-center space-y-1`}
    >
      <span className="flex justify-center text-[var(--color-primary)] dark:text-[var(--color-primarydark)]">
        {icon}
      </span>
      <span className="text-md text-textaltlight dark:text-textaltdark">
        {label}
      </span>
      <span className="font-medium text-lg mt-1">{value}</span>
    </Tile>
  );
}
