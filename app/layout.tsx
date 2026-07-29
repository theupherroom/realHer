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
    "Built for More — Leadership & Entrepreneurship for College Women | The UpHer Room",
  description:
    "Indiana's premier leadership and entrepreneurship experience for college women. Discover opportunities, build meaningful relationships, and leave with the confidence and plan to shape what's next. October 9–10, 2026 in Northwest Indiana. Hosted by The UpHer Room Inc.",
  openGraph: {
    title: "Built for More — Leadership & Entrepreneurship for College Women",
    description:
      "Indiana's premier leadership and entrepreneurship experience for college women. October 9–10, 2026 · Northwest Indiana.",
    url: "https://builtformore.theupherroom.com",
    siteName: "The UpHer Room",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Built for More — October 9-10, 2026 · Northwest Indiana",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Built for More — Leadership & Entrepreneurship for College Women",
    description:
      "Indiana's premier leadership and entrepreneurship experience for college women. October 9–10, 2026 · Northwest Indiana.",
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
