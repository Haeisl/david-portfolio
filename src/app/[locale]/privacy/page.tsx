import { getTranslations } from "next-intl/server";

export default async function PrivacyPage() {
  const t = await getTranslations("privacy");

  /* Tailwind notes
     ──────────────
     • Wrapper:  max-width, auto side-margins, padding, vertical rhythm → space-y-6
     • Headings: hierarchical font sizes + top/bottom margins
     • Paragraphs: relaxed line-height, bottom margin
     • Lists: disc bullets, indent, vertical gap between <li>
  */

  return (
    <article className="mx-auto max-w-6xl px-4 py-10 space-y-6 text-textlight dark:text-textdark">
      {/* 0 — Title */}
      <h1 className="text-3xl font-bold tracking-tight">{t("title")}</h1>

      {/* 1 — Overview */}
      <h2 className="pt-4 text-2xl font-semibold">{t("s1.title")}</h2>

      <h3 className="pt-2 text-xl font-semibold">{t("s1.generalHeading")}</h3>
      <p className="leading-relaxed">{t("s1.generalText")}</p>

      <h3 className="text-xl font-semibold">{t("s1.collectionHeading")}</h3>

      <h4 className="font-semibold">{t("s1.responsibleSub")}</h4>
      <p className="leading-relaxed">{t("s1.responsibleText")}</p>

      <h4 className="font-semibold">{t("s1.howHeading")}</h4>
      <p className="leading-relaxed">{t("s1.howText1")}</p>
      <p className="leading-relaxed">{t("s1.howText2")}</p>

      <h4 className="font-semibold">{t("s1.purposeHeading")}</h4>
      <p className="leading-relaxed">{t("s1.purposeText")}</p>

      <h4 className="font-semibold">{t("s1.rightsHeading")}</h4>
      <p className="leading-relaxed">{t("s1.rightsText1")}</p>
      <p className="leading-relaxed">{t("s1.rightsText2")}</p>
      <p className="leading-relaxed">{t("s1.rightsText3")}</p>
      <p className="leading-relaxed">{t("s1.rightsText4")}</p>

      {/* Analysis */}
      <h3 className="pt-2 text-xl font-semibold">{t("analysis.heading")}</h3>
      <p className="leading-relaxed">{t("analysis.text1")}</p>
      <p className="leading-relaxed">{t("analysis.text2")}</p>

      {/* 2 — Hosting */}
      <h2 className="pt-6 text-2xl font-semibold">{t("hosting.title")}</h2>
      <p className="leading-relaxed">{t("hosting.intro")}</p>

      <h3 className="text-xl font-semibold">{t("hosting.externalHeading")}</h3>
      <p className="leading-relaxed">{t("hosting.externalText1")}</p>
      <p className="leading-relaxed">{t("hosting.externalText2")}</p>
      <p className="leading-relaxed">{t("hosting.externalText3")}</p>

      <h4 className="font-semibold">{t("hosting.hosterHeading")}</h4>
      <pre className="whitespace-pre-line leading-relaxed">
        {t("hosting.hosterAddress")}
      </pre>

      {/* 3 — General information */}
      <h2 className="pt-6 text-2xl font-semibold">{t("general.title")}</h2>

      <h3 className="pt-2 text-xl font-semibold">
        {t("general.dataProtectionHeading")}
      </h3>
      <p className="leading-relaxed">{t("general.dataProtectionText1")}</p>
      <p className="leading-relaxed">{t("general.dataProtectionText2")}</p>
      <p className="leading-relaxed">{t("general.dataProtectionText3")}</p>

      <h3 className="text-xl font-semibold">
        {t("general.controllerHeading")}
      </h3>
      <p className="leading-relaxed">{t("general.controllerText1")}</p>
      <pre className="whitespace-pre-line leading-relaxed">
        {t("general.controllerAddress")}
      </pre>
      <pre className="whitespace-pre-line leading-relaxed">
        {t("general.controllerContact")}
      </pre>
      <p className="leading-relaxed">{t("general.controllerText2")}</p>

      <h3 className="text-xl font-semibold">{t("general.storageHeading")}</h3>
      <p className="leading-relaxed">{t("general.storageText")}</p>

      <h3 className="text-xl font-semibold">
        {t("general.legalBasisHeading")}
      </h3>
      <p className="leading-relaxed">{t("general.legalBasisText")}</p>

      <h3 className="text-xl font-semibold">
        {t("general.recipientsHeading")}
      </h3>
      <p className="leading-relaxed">{t("general.recipientsText")}</p>

      <h3 className="text-xl font-semibold">
        {t("general.withdrawalHeading")}
      </h3>
      <p className="leading-relaxed">{t("general.withdrawalText")}</p>

      <h3 className="text-xl font-semibold">{t("general.objectionHeading")}</h3>
      <p className="leading-relaxed">{t("general.objectionText1")}</p>
      <p className="leading-relaxed">{t("general.objectionText2")}</p>

      <h3 className="text-xl font-semibold">{t("general.complaintHeading")}</h3>
      <p className="leading-relaxed">{t("general.complaintText")}</p>

      <h3 className="text-xl font-semibold">
        {t("general.dataPortabilityHeading")}
      </h3>
      <p className="leading-relaxed">{t("general.dataPortabilityText")}</p>

      <h3 className="text-xl font-semibold">
        {t("general.informationCorrectionDeletionHeading")}
      </h3>
      <p className="leading-relaxed">
        {t("general.informationCorrectionDeletionText")}
      </p>

      <h3 className="text-xl font-semibold">
        {t("general.restrictionHeading")}
      </h3>
      <p className="leading-relaxed">{t("general.restrictionText1")}</p>

      <ul className="list-disc space-y-2 pl-6">
        <li>{t("general.restrictionBullet1")}</li>
        <li>{t("general.restrictionBullet2")}</li>
        <li>{t("general.restrictionBullet3")}</li>
        <li>{t("general.restrictionBullet4")}</li>
      </ul>

      <p className="leading-relaxed">{t("general.restrictionText2")}</p>

      <h3 className="text-xl font-semibold">{t("general.sslHeading")}</h3>
      <p className="leading-relaxed">{t("general.sslText1")}</p>
      <p className="leading-relaxed">{t("general.sslText2")}</p>

      {/* 4 — Contact requests */}
      <h2 className="pt-6 text-2xl font-semibold">{t("section4.title")}</h2>

      <h3 className="text-xl font-semibold">{t("section4.contactHeading")}</h3>
      <p className="leading-relaxed">{t("section4.contactText1")}</p>
      <p className="leading-relaxed">{t("section4.contactText2")}</p>
      <p className="leading-relaxed">{t("section4.contactText3")}</p>

      {/* 5 — Plugins */}
      <h2 className="pt-6 text-2xl font-semibold">{t("plugins.title")}</h2>

      <h3 className="text-xl font-semibold">
        {t("plugins.googleFontsHeading")}
      </h3>
      <p className="leading-relaxed">{t("plugins.googleFontsText1")}</p>
      <p className="leading-relaxed">{t("plugins.googleFontsText2")}</p>
      <p className="leading-relaxed">{t("plugins.sourceNote")}</p>
    </article>
  );
}
