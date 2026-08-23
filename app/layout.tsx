import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.davidhaxton.co.uk"),
  title: {
    default: "David Haxton — Serious Computer Science, Practical AI",
    template: "%s — David Haxton",
  },
  description:
    "One-to-one GCSE & A-Level computer science tuition, AI tuition for adults, and web work built end to end.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        {/*
          The no-page-custom-font rule targets the Pages Router; a <head> in
          the App Router root layout applies to every route, so this does load
          site-wide.
        */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {/*
          The whole document sits inside a 14px wrapper, so the header's border
          and shadow float inset from the viewport edge.
        */}
        <div style={{ minHeight: "100vh", padding: 14 }}>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
