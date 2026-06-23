import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-d",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-b",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PANECCI — Premium websites from £15/month",
  description:
    "We design, build, host and maintain your website for one small monthly fee. No four-figure quotes, no maintenance headaches — AI built in at the top tier.",
  openGraph: {
    title: "PANECCI — Premium websites from £15/month",
    description:
      "Design, hosting and maintenance for one flat monthly fee. Start from £15.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
