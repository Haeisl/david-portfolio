"use client";

import Link from "next/link";
import ThemeToggle from "@/theme/theme-toggle";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useMemo } from "react";

type NavigationType = {
  name: string;
  href: string;
};

export default function Header({ locale }: { locale: string }) {
  const t = useTranslations("NavbarLinks");
  const pathname = usePathname();
  const router = useRouter();

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
    <header className="sticky top-0 my-8 mx-5 rounded-2xl py-2 pl-2 pr-5 text-2xl text-textlight dark:text-textdark bg-primary dark:bg-primarydark ">
      <nav className="flex justify-around" aria-label="Main navigation">
        {/* logo */}
        <div>
          <Link href={`/${locale}/`}>
            <h1 className="font-logo text-2xl">David Hasse</h1>
          </Link>
        </div>

        {/* links */}
        {navigation.map((item: NavigationType) => (
          <div key={item.name}>
            <Link href={item.href}>{item.name}</Link>
          </div>
        ))}

        {/* darkmode toggle */}

        {/* language toggle */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            className={`border p-2 font-bold rounded-md text-sm ${
              locale === "de" && "bg-white text-black"
            }`}
            onClick={() => handleLanguageChange("de")}
          >
            DE
          </button>
          <button
            className={`border p-2 font-bold rounded-md text-sm ${
              locale === "en" && "bg-white text-black"
            }`}
            onClick={() => handleLanguageChange("en")}
          >
            EN
          </button>
        </div>
      </nav>
    </header>
  );
}
