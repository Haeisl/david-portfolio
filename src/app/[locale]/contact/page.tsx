"use client";

import { nl2br } from "@/app/utils/nlToBr";
import FadeInSection from "@/components/general/FadeInSection";
import {
  Mail,
  Linkedin,
  Github,
  FileText,
  QrCode,
  MapPinHouse,
  Earth,
  Languages,
  Briefcase,
} from "lucide-react";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import { useState } from "react";

const VCardQRCode = dynamic(() => import("@/components/contact/VCardQRCode"), {
  loading: () => <p className="mt-4">Loading QR Code…</p>,
  ssr: false,
});

export default function ContactPage() {
  const t = useTranslations("ContactPage");
  const [showQRCode, setShowQRCode] = useState(false);

  const handleQRClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowQRCode(true);
  };

  return (
    <FadeInSection>
      <main className="mx-auto max-w-6xl px-4 py-14 min-h-[85vh]">
        {/* ── Section header ───────────────────────────────────── */}
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-3xl font-semibold tracking-wide uppercase text-textlight dark:text-textdark">
            {t("factsToContact")}
          </h2>
          <div className="hidden sm:block flex-grow h-px bg-gradient-to-r from-textlight/40 dark:from-textdark/40 to-transparent" />
        </div>

        <section
          className="
          grid auto-rows-[minmax(140px,auto)] gap-6
          sm:grid-cols-6
          lg:grid-cols-12
        "
        >
          {/* ── Mini fact cards ─────────────────────────── */}
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

          {/* ── Hero + CTA ───────────────────────────────── */}
          <Tile className="sm:col-span-6 lg:col-span-8 row-span-2 flex flex-col items-center justify-center text-center space-y-6">
            <h1 className="text-5xl font-semibold tracking-tight">
              {t("title")}
            </h1>
            <p className="text-lg font-medium text-textaltlight dark:text-textaltdark">
              {t("tagline")}
            </p>

            <a
              href={`mailto:contact@david-hasse.de?subject=${encodeURIComponent(
                t("mailSubject")
              )}`}
              className="group inline-flex items-center gap-2 rounded-2xl border hover:text-textdark dark:hover:text-textlight border-slate-400/50 bg-transparent px-8 py-4 font-semibold transition duration-300 hover:scale-105 hover:border-slate-400 hover:bg-[var(--color-primary)] dark:hover:bg-[var(--color-primarydark)] focus-visible:ring-2 focus-visible:ring-slate-300"
            >
              <Mail
                size={30}
                className="text-[var(--color-primary)] dark:text-[var(--color-primarydark)] group-hover:text-textdark group-hover:dark:text-textlight"
              />
              {t("cta")}
            </a>
          </Tile>

          {/* ── vCard / QR code ─────────────────────────── */}
          <Tile className="sm:col-span-6 lg:col-span-4 row-span-2 flex flex-col items-center justify-center space-y-4">
            {showQRCode ? (
              <>
                <VCardQRCode />
                <a
                  href="/david-hasse.vcf"
                  download
                  className="flex items-center mt-2 gap-2 hover:text-[var(--color-primary)] dark:hover:text-[var(--color-primarydark)]"
                >
                  <FileText
                    size={24}
                    className="text-[var(--color-primary)] dark:text-[var(--color-primarydark)]"
                  />
                  vCard
                </a>
              </>
            ) : (
              <button
                className="flex items-center gap-2 font-medium hover:text-[var(--color-primary)] dark:hover:text-[var(--color-primarydark)] hover:cursor-pointer"
                onClick={handleQRClick}
              >
                <QrCode
                  size={28}
                  className="text-[var(--color-primary)] dark:text-[var(--color-primarydark)]"
                />
                {t("vcard")}
              </button>
            )}
          </Tile>

          {/* ── Social links + CV ───────────────────────── */}
          <Tile className="sm:col-span-6 lg:col-span-12 row-span-1 flex flex-wrap items-center justify-center gap-10">
            <SocialLink
              href="https://www.linkedin.com/in/david-hasse-ab0bb11a9"
              icon={<Linkedin size={28} />}
              label="LinkedIn"
            />
            <SocialLink
              href="https://github.com/haeisl"
              icon={<Github size={28} />}
              label="GitHub"
            />
            {/* Add CV back in when ready */}
          </Tile>
        </section>
      </main>
    </FadeInSection>
  );
}

/*──────── shared helpers ───────*/

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

function SocialLink({
  href,
  icon,
  label,
  download,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  download?: boolean;
}) {
  return (
    <a
      href={href}
      download={download}
      target="_blank"
      rel="noopener"
      className="group relative inline-flex items-center gap-3 rounded-2xl border border-slate-400/50 bg-transparent
      px-6 py-3 text-base font-semibold  outline-none transition duration-300
      hover:scale-105 hover:border-slate-400 hover:bg-[var(--color-primary)] dark:hover:bg-[var(--color-primarydark)] hover:text-surface
      hover:text-textdark dark:hover:text-textlight
      dark:hover:text-surface focus-visible:ring-2 focus-visible:ring-slate-300"
    >
      {/* icon — inherits currentColor by default, swaps to surface on hover */}
      <span className="w-6 h-6 flex-shrink-0 transition-colors text-[var(--color-primary)] dark:text-[var(--color-primarydark)] group-hover:text-textdark dark:group-hover:text-textlight">
        {icon}
      </span>
      {label}
    </a>
  );
}

/*
    <a
      href={href}
      download={download}
      target="_blank"
      rel="noopener"
      className="flex items-center gap-3 text-lg text-textlight dark:text-textdark hover:text-[var(--color-primary)] dark:hover:text-[var(--color-primarydark)] transition-colors"
    >
      {icon}
      {label}
    </a>
*/
