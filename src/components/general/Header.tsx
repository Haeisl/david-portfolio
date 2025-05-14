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
    <header className="sticky top-0 z-100 mb-8 py-4 px-2 sm:px-4 md:px-6 sm:text-xl xl:text-3xl text-textlight dark:text-textdark bg-bgaccentlight dark:bg-bgaccentdark shadow-xl">
      <nav
        className="flex items-center w-full px-2"
        aria-label="Main navigation"
      >
        {/* Left: Logo */}
        <Link
          className={`pr-3 flex-1 font-logo font-bold text-2xl sm:text-2xl xl:text-4xl whitespace-nowrap hover:text-primary hover:dark:text-primarydark transition-colors duration-300
        ${isActive(`/${locale}`) ? "text-primary dark:text-primarydark" : ""}`}
          href={`/${locale}/`}
        >
          David Hasse
        </Link>

        {/* Center: Nav Links (desktop only) */}
        <div className="hidden sm:flex justify-center whitespace-nowrap transition-all duration-500 ease-in-out responsive-gap ">
          {navigation.map((item: NavigationType) => (
            <Link
              key={item.name}
              className={`hover:text-primary hover:dark:text-primarydark transition-colors duration-300
          ${isActive(item.href) ? "text-primary dark:text-primarydark" : ""}`}
              href={item.href}
            >
              {item.name}
            </Link>
          ))}
        </div>
        {/* Mobile Hamburger */}
        <button
          className="pl-2 sm:hidden"
          onClick={() => setIsOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Right: Toggles */}
        <div className="flex-1 flex items-center justify-end space-x-2">
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
            className={`border p-2 font-bold rounded-md text-sm cursor-pointer ${
              locale === "en" &&
              "bg-bgaccentdark dark:bg-bgaccentlight text-textdark dark:text-textlight"
            }`}
            onClick={() => handleLanguageChange("en")}
          >
            EN
          </button>
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
