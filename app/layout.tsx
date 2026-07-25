import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "David Haxton — Computer Science Tuition & Practical AI",
  description:
    "One-to-one tuition for GCSE & A-Level computer science, AI tuition for adults at any level, web layout consultation, and free tools for teachers — built and tested in a real classroom.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800;900&family=Inter:wght@400;500;600;700&family=Caveat:wght@500;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
