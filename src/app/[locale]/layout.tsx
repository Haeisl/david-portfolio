import type { Metadata } from "next";

import "../globals.css";
import Header from "@/components/general/Header";
import Footer from "@/components/general/Footer";
import ThemeProvider from "@/theme/theme-provider";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import ThemeRestorer from "@/components/general/ThemeRestorer";
import { notFound } from "next/navigation";

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations("Meta");
  // Global site info
  return {
    title: t("title"),
    alternates: {
      languages: {
        de: "https://david-hasse.de/de",
        en: "https://david-hasse.de/en",
      },
    },
    description: t("description"),
    keywords: [
      "David Hasse",
      "Web Developer",
      "Frontend",
      "Backend",
      "Full Stack",
      "Bachelor of Science",
      "Portfolio",
      "React",
      "JavaScript",
      "Docker",
      "Unreal Engine",
      "C++",
      "Python",
      "Visualization",
    ],
    authors: [{ name: "David Hasse", url: "https://david-hasse.de" }],

    // Global OG/Twitter fallback
    openGraph: {
      siteName: "David Hasse Portfolio",
      locale: "en_US",
      type: "website",
      url: "https://david-hasse.de",
      images: [
        {
          url: "/og_image.png",
          width: 1200,
          height: 630,
          alt: "David Hasse Portfolio Preview",
        },
      ],
    },
    // twitter: {
    //   card: "summary_large_image",
    //   site: "@yourtwitter",
    //   creator: "@yourtwitter",
    //   images: ["https://david-hasse.de/og-image.jpg"],
    // },
    icons: {
      icon: "/favicon.ico",
      // apple: "/apple-touch-icon.png",
    },
    // manifest: "/site.webmanifest",
  };
};

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const { locale } = await params;

  if (!["en", "de"].includes(locale)) notFound();

  const messages = await getMessages({ locale });

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <NextIntlClientProvider messages={messages} locale={locale}>
        <ThemeRestorer />
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </NextIntlClientProvider>
    </ThemeProvider>
  );
}
