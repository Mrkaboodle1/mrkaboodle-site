import type { Metadata } from "next";
import { Bubblegum_Sans, Open_Sans } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import { siteConfig } from "@/lib/site-config";

const bubblegum = Bubblegum_Sans({
  variable: "--font-bubblegum",
  subsets: ["latin"],
  weight: "400",
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mrkaboodle.com.au"),
  title: {
    default: "Home - Mr Kaboodle",
    template: "%s - Mr Kaboodle",
  },
  description:
    "Mr Kaboodle provides professional and quality entertainment to audiences of all ages — kids parties, corporate events, festivals, schools and shopping centres on the Gold Coast and beyond.",
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://www.mrkaboodle.com.au",
    siteName: "Mr Kaboodle",
    title: "Home - Mr Kaboodle",
    description: "Professional and quality entertainment to audiences of all ages.",
  },
  alternates: {
    canonical: "https://www.mrkaboodle.com.au",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "EntertainmentBusiness",
  name: siteConfig.legalName,
  alternateName: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}${siteConfig.logo}`,
  email: siteConfig.email,
  areaServed: {
    "@type": "Place",
    name: "Gold Coast, Queensland, Australia",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Gold Coast",
    addressRegion: "QLD",
    addressCountry: "AU",
  },
  founder: {
    "@type": "Person",
    name: siteConfig.founder.name,
    jobTitle: siteConfig.founder.title,
  },
  sameAs: [
    siteConfig.social.facebook,
    siteConfig.social.instagram,
    siteConfig.social.vimeo,
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-AU"
      className={`${bubblegum.variable} ${openSans.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white text-[#343434] font-body">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
