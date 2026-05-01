import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import {
  businessName,
  contactEmail,
  contactPhoneInternational,
  defaultOgImage,
  serviceKeywords,
  serviceNames,
  siteDescription,
  siteUrl,
} from "./seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: businessName,
  title: {
    default: businessName,
    template: `%s | ${businessName}`,
  },
  description: siteDescription,
  keywords: serviceKeywords,
  authors: [{ name: businessName }],
  creator: businessName,
  publisher: businessName,
  category: "Concrete contractor",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: businessName,
    title: businessName,
    description: siteDescription,
    phoneNumbers: [contactPhoneInternational],
    emails: [contactEmail],
    images: [
      {
        url: defaultOgImage,
        width: 1800,
        height: 1350,
        alt: "Finished concrete slab by Colquitt Concrete and Outdoor Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: businessName,
    description: siteDescription,
    images: [defaultOgImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: false,
  },
  classification: serviceNames.join(", "),
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f7f4" },
    { media: "(prefers-color-scheme: dark)", color: "#0f0f0e" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
