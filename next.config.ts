import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  i18n: {
    locales: ["en", "de"], // add more as needed
    defaultLocale: "en",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "github.com",
        pathname: "/Haeisl/david-portfolio/blob/master/public/gh-content/**",
        //https://github.com/Haeisl/david-portfolio/blob/master/public/images/selfie.jpg?raw=true
      },
    ],
  },
};

export default withNextIntl(nextConfig);
