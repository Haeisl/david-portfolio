import "./globals.css";
import { Inter, Doto, Courier_Prime } from "next/font/google";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="de"
      className={`${courierPrime.variable} ${inter.variable} ${doto.variable}`}
      suppressHydrationWarning
    >
      <body className="font-main bg-bglight text-textlight dark:bg-bgdark dark:text-textdark antialiased">
        {children}
      </body>
    </html>
  );
}
