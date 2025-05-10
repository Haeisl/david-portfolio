"use client";

import Link from "next/link";
import ThemeToggle from "@/theme/theme-toggle";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { useLocale } from "next-intl";
import { Menu, X } from "lucide-react";

type NavigationType = {
  name: string;
  href: string;
};

export default function Header() {
  const t = useTranslations("NavbarLinks");
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  const [isOpen, setIsOpen] = useState(false);

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
        className="grid grid-cols-3 items-center w-full px-2"
        aria-label="Main navigation"
      >
        {/* logo */}
        <Link
          className="justify-self-start font-logo text-3xl sm:text-4xl whitespace-nowrap"
          href={`/${locale}/`}
        >
          David Hasse
        </Link>

        {/* desktop links */}
        <div className="hidden sm:flex flex-2 justify-self-center justify-between">
          {navigation.map((item: NavigationType) => (
            <Link
              key={item.name}
              className={`p-2 hover:text-primary hover:dark:text-primarydark transition-colors duration-300
                ${
                  isActive(item.href) &&
                  "text-primary dark:text-primarydark border rounded-lg border-primary dark:border-primarydark"
                }`}
              href={item.href}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* mobile hamburger */}
        <button
          className="justify-self-center sm:hidden p-2 cursor-pointer"
          onClick={() => setIsOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* right side (lang + theme) */}
        <div className="flex justify-end items-center space-x-2">
          {/* language toggle */}
          <button
            className={`border p-2 font-bold rounded-md text-sm cursor-pointer ${
              locale === "de" &&
              "bg-bgaccentdark dark:bg-bgaccentlight text-textdark dark:text-textlight"
            }`}
            onClick={() => handleLanguageChange("de")}
          >
            DE
          </button>

          <button
            className={`border p-2 font-bold rounded-md text-sm mr-4 cursor-pointer ${
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
      {isOpen && (
        <div className="sm:hidden mt-2 px-4">
          <div className="flex flex-col my-2 bg-bgaccentlight dark:bg-bgaccentdark border rounded-lg shadow-md">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`
                  block px-4 py-2 hover:text-primary hover:dark:text-primarydark transition-colors duration-300
                  ${
                    isActive(item.href)
                      ? "text-primary dark:text-primarydark"
                      : ""
                  }
                `}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
