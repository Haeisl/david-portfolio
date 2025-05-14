import type { Metadata } from "next";
import {
  Inter,
  Playfair_Display,
  Caveat,
  Courier_Prime,
  Major_Mono_Display,
  Julius_Sans_One,
  Doto,
} from "next/font/google";
import "../globals.css";
import Header from "../../components/general/Header";
import Footer from "../../components/general/Footer";
import ThemeProvider from "@/theme/theme-provider";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-playfair",
});
const caveat = Caveat({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-caveat",
});
const courier_prime = Courier_Prime({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-courier-prime",
});
const major_mono_display = Major_Mono_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-major-mono-display",
});
const julius_sans_one = Julius_Sans_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-julius-sans-one",
});
const doto = Doto({
  subsets: ["latin"],
  weight: "500",
  variable: "--font-doto",
});
export const metadata: Metadata = {
  title: "Portfolio - David Hasse",
  description: "Portfolio Website von David Hasse",
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
      className={`${inter.variable} ${doto.variable} ${julius_sans_one.variable} ${playfair.variable} ${caveat.variable} ${courier_prime.variable} ${major_mono_display.variable} ${inter.className}`}
    >
      <body className="font-main bg-bglight text-textlight dark:bg-bgdark dark:text-textdark antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages} locale={locale}>
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
