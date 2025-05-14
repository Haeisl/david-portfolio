import type { Metadata } from "next";
import { Inter, Doto, Courier_Prime } from "next/font/google";
import "../globals.css";
import Header from "../../components/general/Header";
import Footer from "../../components/general/Footer";
import ThemeProvider from "@/theme/theme-provider";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

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
