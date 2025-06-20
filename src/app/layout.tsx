import type { Metadata } from "next";
import { Inter, Doto, Courier_Prime } from "next/font/google";
import "./globals.css";
import Header from "../components/general/Header";
import Footer from "../components/general/Footer";
import ThemeProvider from "@/theme/theme-provider";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import ThemeRestorer from "@/components/general/ThemeRestorer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const doto = Doto({
  subsets: ["latin"],
  weight: "500",
  variable: "--font-doto",
});
const courierPrime = Courier_Prime({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-courier-prime",
});

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations("Meta");
  // Global site info
  return {
    title: t("title"),
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
          url: "https://github.com/Haeisl/david-portfolio/blob/master/public/gh-content/og_image.png",
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

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const { locale } = await params;

  const messages = await getMessages({ locale });

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${courierPrime.variable} ${inter.variable} ${doto.variable}`}
    >
      <body className="font-main bg-bglight text-textlight dark:bg-bgdark dark:text-textdark antialiased">
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
      </body>
    </html>
  );
}
