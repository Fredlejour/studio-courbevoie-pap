import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { property } from "@/data/property";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: property.title,
  description: property.description,
  metadataBase: new URL(property.canonicalUrl),
  alternates: {
    canonical: property.canonicalUrl,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: property.canonicalUrl,
    siteName: property.siteName,
    title: property.title,
    description: property.description,
    images: [
      {
        url: property.ogImage,
        width: 1200,
        height: 630,
        alt: property.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: property.title,
    description: property.description,
    images: [property.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateListing",
  name: property.property.name,
  description: property.description,
  url: property.canonicalUrl,
  image: `${property.canonicalUrl}${property.ogImage}`,
  datePosted: new Date().toISOString(),
  offers: {
    "@type": "Offer",
    price: property.investment.price,
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
    url: property.canonicalUrl,
  },
  location: {
    "@type": "Place",
    name: property.property.residence,
    address: {
      "@type": "PostalAddress",
      streetAddress: property.property.address,
      addressLocality: property.property.city,
      postalCode: property.property.zipCode,
      addressCountry: "FR",
    },
  },
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <head>
        <Script
          id="jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {children}

        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
