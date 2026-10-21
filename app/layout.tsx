import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.davidhaxton.co.uk"),
  title: {
    default: "David Haxton · Computer science teacher and builder",
    template: "%s · David Haxton",
  },
  description:
    "One-to-one KS3, GCSE and A-Level computer science tuition and enrichment, AI for adults at any starting point, and web work built end to end.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Schibsted+Grotesk:wght@400;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        {/* Upgrades <dh-island> once the page is interactive. */}
        <Script src="/island.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
