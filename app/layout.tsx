import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Bible Atlas - Explore Biblical Locations",
    template: "%s | Bible Atlas",
  },
  description:
    "Discover biblical places with interactive maps, archaeological data, and comprehensive scripture references. Explore 2,845+ biblical regions with 98% location accuracy.",
  keywords: [
    "Bible Atlas",
    "Biblical locations",
    "Holy Land map",
    "Scripture geography",
    "Biblical archaeology",
    "Bible study tools",
    "Biblical history",
    "Ancient Israel",
    "Jerusalem map",
    "Galilee locations",
    "Biblical sites",
    "Bible reference",
    "Christian education",
    "Biblical geography",
    "Holy Land tour",
    "Bible maps",
  ],
  authors: [{ name: "Bible Atlas Team" }],
  creator: "Bible Atlas",
  publisher: "Bible Atlas",
  applicationName: "Bible Atlas",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://bible-atlas-cs.vercel.app"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Bible Atlas - Explore Biblical Locations with Interactive Maps",
    description:
      "Discover biblical places with interactive maps, archaeological data, and comprehensive scripture references. Perfect for Bible study and education.",
    url: "https://bible-atlas-cs.vercel.app",
    siteName: "Bible Atlas",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "Bible Atlas - Biblical Location Explorer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bible Atlas - Explore Biblical Locations",
    description:
      "Discover biblical places with interactive maps and archaeological data. Perfect for Bible study.",
    images: ["/icon.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Bible Atlas",
              description:
                "Explore biblical locations with interactive maps and comprehensive data",
              url: "https://bible-atlas-cs.vercel.app",
              applicationCategory: "EducationalApplication",
              operatingSystem: "Web",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              author: {
                "@type": "Organization",
                name: "Bible Atlas Team",
              },
              publisher: {
                "@type": "Organization",
                name: "Bible Atlas",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
