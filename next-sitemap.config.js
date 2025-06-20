/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://david-hasse.de",
  generateRobotsTxt: true,
  // build an <xhtml:link> block per locale:
  alternateRefs: [
    { href: "https://david-hasse.de/de", hreflang: "de" },
    { href: "https://david-hasse.de/en", hreflang: "en" },
  ],
};
