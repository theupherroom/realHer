import type { Metadata } from "next";
import { DM_Sans, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://builtformore.theupherroom.com"),
  title:
    "Built for More — A Leadership Experience for Women Who Build | The UpHer Room",
  description:
    "A two-day leadership experience for women navigating misalignment, fragmentation, and the realities of building inside systems that need redesign. May 29–30, 2026 in Indianapolis, Indiana. Hosted by The UpHer Room Inc.",
  openGraph: {
    title: "Built for More — A Leadership Experience for Women Who Build",
    description:
      "A two-day leadership experience for women building inside systems that need redesign. May 29–30, 2026 · Indianapolis, Indiana.",
    url: "https://builtformore.theupherroom.com",
    siteName: "The UpHer Room",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Built for More — May 29-30, 2026 · Indianapolis, Indiana",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Built for More — A Leadership Experience for Women Who Build",
    description:
      "A two-day leadership experience for women building inside systems that need redesign. May 29–30, 2026 · Indianapolis, Indiana.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${sourceSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
