import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import ThemeCycler from "./ThemeCycler";

export default function Footer() {
  const t = useTranslations("NavbarLinks");
  const locale = useLocale();

  return (
    <footer className="w-full border-t mt-16 py-4 text-center text-sm text-gray-500 dark:text-gray-400">
      <ThemeCycler />
      <div className="space-x-4">
        <a
          className="hover:underline"
          href="https://github.com/haeisl"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          className="hover:underline"
          href="https://linkedin.com/in/david-hasse-ab0bb11a9"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a className="hover:underline" href={`/${locale}/impressum`}>
          {t("impressum")}
        </a>
      </div>
      <div className="mt-1.5">
        &copy; 2025 David Hasse. All rights reserved.
      </div>
    </footer>
  );
}
