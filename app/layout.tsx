import type { Metadata } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";
import "./globals.css";
import "@/components/BorderGlow.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import { ProgressiveBlur } from "@/components/layout/ProgressiveBlur";

const helveticaNeue = localFont({
  src: "../public/helvetica-neue-5/HelveticaNeueMedium.otf",
  variable: "--font-helvetica-neue",
  display: "swap",
  weight: "200"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bigtopsocial.framer.media"),
  title: {
    default: "Home - BIGTOPSOCIAL",
    template: "%s | BIGTOPSOCIAL",
  },
  description:
    "We help ambitious brands scale with performance marketing, creative strategy, and conversion-focused campaigns.",
  openGraph: {
    type: "website",
    siteName: "BIGTOPSOCIAL",
    title: "Home - BIGTOPSOCIAL",
    description:
      "We help ambitious brands scale with performance marketing, creative strategy, and conversion-focused campaigns.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={helveticaNeue.variable}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <SmoothScroll>{children}</SmoothScroll>
        <ProgressiveBlur />
      </body>
    </html>
  );
}
