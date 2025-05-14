"use client";

import { nl2br } from "@/app/utils/nlToBr";
import { Mail, Linkedin, Github, FileText, QrCode } from "lucide-react";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import { useState } from "react";

const VCardQRCode = dynamic(() => import("@/components/contact/VCardQRCode"), {
  loading: () => <p className="mt-4">Loading QR Code...</p>,
  ssr: false, // Disable server side rendering for this dynamic component
});

export default function ContactPage() {
  const t = useTranslations("ContactPage");
  const [showQRCode, setShowQRCode] = useState(false);

  const handleQRClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowQRCode(true);
  };

  return (
    <main className="mx-auto max-w-6xl px-4 py-14 space-y-24 text-lg sm:text-xl">
      {/* ── Hero ───────────────────────────────────── */}
      <section className="text-center space-y-4">
        <h1 className="text-5xl font-semibold tracking-tight">{t("title")}</h1>
        <p className="text-lg font-medium text-neutral-600 dark:text-neutral-400">
          {t("tagline")}
        </p>

        <a
          href={`mailto:contact@david-hasse.de?subject=${encodeURIComponent(
            t("mailSubject")
          )}`}
          className="inline-flex items-center gap-2 mt-2 rounded-xl border border-bgaccentdark bg-accentlight
          dark:border-bgaccentlight dark:bg-bgaccentdark px-5 py-3 text-textlight dark:text-textdark shadow-md transition
          hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-neutral-400
          duration-200 hover:scale-105"
        >
          <Mail size={20} />
          {t("cta")}
        </a>
      </section>

      {/* ── Fast facts grid ────────────────────────── */}
      <section className="grid grid-cols-2 text-center gap-6 text-textlight dark:text-textdark">
        <Fact label={t("facts.location")} value={t("facts.locationValue")} />
        <Fact label={t("facts.openTo")} value={t("facts.openValue")} />
        <Fact
          label={t("facts.timezone")}
          value={nl2br(t("facts.timezoneValue"))}
        />
        <Fact
          label={t("facts.languages")}
          value={nl2br(t("facts.languagesValue"))}
        />
      </section>

      {/* ── Links row ──────────────────────────────── */}
      <section className="flex flex-wrap items-center justify-center gap-6">
        <a
          href="https://www.linkedin.com/in/david-hasse-ab0bb11a9"
          target="_blank"
          rel="noopener"
          aria-label="LinkedIn"
          className="flex items-center gap-2 hover:underline"
        >
          <Linkedin size={28} />
          LinkedIn
        </a>
        <a
          href="https://github.com/haeisl"
          target="_blank"
          rel="noopener"
          aria-label="GitHub"
          className="flex items-center gap-2 hover:underline"
        >
          <Github size={28} />
          GitHub
        </a>
        <a
          href="/test.txt"
          download
          target="_blank"
          rel="noopener"
          className="flex items-center gap-2 hover:underline"
        >
          <FileText size={28} />
          {t("resume")}
        </a>
        <a
          href="#"
          onClick={handleQRClick}
          className="flex items-center gap-2 hover:underline"
        >
          <QrCode size={28} />
          {t("vcard")}
        </a>
      </section>
      {/* Conditionally render the QR Code */}
      {showQRCode && (
        <section className="flex flex-col items-center space-y-4">
          <VCardQRCode />
          <a
            href="/david-hasse.vcf"
            download
            target="_blank"
            rel="noopener"
            className="flex items-center text-center hover:underline gap-2"
          >
            <FileText size={28} />
            vCard
          </a>
        </section>
      )}
    </main>
  );
}

function Fact({
  label,
  value,
}: {
  label: string;
  value: string | React.JSX.Element[];
}) {
  return (
    <div className="flex flex-col py-6">
      <span className="text-textaltlight dark:text-textaltdark">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}
