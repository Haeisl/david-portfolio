"use client";

import Link from "next/link";
import ThemeToggle from "@/theme/theme-toggle";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useMemo } from "react";
import { useLocale } from "next-intl";

type NavigationType = {
  name: string;
  href: string;
};

export default function Header() {
  const t = useTranslations("NavbarLinks");
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();

  const isActive = (href: string) => pathname.endsWith(href);

  const navigation = useMemo(
    () => [
      { name: t("about"), href: `/${locale}/about` },
      { name: t("projects"), href: `/${locale}/projects` },
      { name: t("contact"), href: `/${locale}/contact` },
    ],
    [t, locale]
  );

  const handleLanguageChange = (newLocale: string) => {
    const path = pathname.split("/").slice(2).join("/");
    router.push(`/${newLocale}/${path}`);
  };

  return (
    <header className="sticky top-0 z-100 mb-8 py-2 px-4 text-2xl text-textlight dark:text-textdark bg-bgaccentlight dark:bg-bgaccentdark shadow-xl">
      <nav
        className="w-full flex items-center justify-between px-4"
        aria-label="Main navigation"
      >
        {/* logo */}
        <div className="flex-1 flex justify-start font-logo">
          <Link href={`/${locale}/`}>
            <h1>David Hasse</h1>
          </Link>
        </div>

        {/* links */}
        <div className="flex-2 flex justify-between space-x-14 mx-14">
          {navigation.map((item: NavigationType) => (
            <div
              key={item.name}
              className={`p-2 hover:text-primary hover:dark:text-primarydark transition-colors duration-200
                ${
                  isActive(item.href) &&
                  "text-primary dark:text-primarydark underline"
                }`}
            >
              <Link href={item.href}>{item.name}</Link>
            </div>
          ))}
        </div>

        <div className="flex-1 flex justify-end items-center space-x-2">
          {/* language toggle */}
          <button
            className={`border border- p-2 font-bold rounded-md text-sm cursor-pointer ${
              locale === "de" &&
              "bg-bgaccentdark dark:bg-bgaccentlight text-textdark dark:text-textlight"
            }`}
            onClick={() => handleLanguageChange("de")}
          >
            DE
          </button>

          <button
            className={`border p-2 font-bold rounded-md text-sm mr-12 cursor-pointer ${
              locale === "en" &&
              "bg-bgaccentdark dark:bg-bgaccentlight text-textdark dark:text-textlight"
            }`}
            onClick={() => handleLanguageChange("en")}
          >
            EN
          </button>

          {/* darkmode toggle */}
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
