import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { CookieConsent } from "@/components/CookieConsent"
import { Providers } from "@/components/providers"
import { Disclaimer } from "@/components/Disclaimer"
import { DebugPanel, BetaBadge } from "@/components/DebugPanel"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Membership Marketing Agency UK | Grow & Retain Members",
    template: "%s | Membership Marketing Agency"
  },
  description: "Specialist membership marketing agency helping associations, professional bodies, and membership organisations grow and retain members. Expert strategies for acquisition, retention, and engagement.",
  keywords: [
    "membership marketing agency",
    "membership marketing agency uk",
    "association marketing",
    "member acquisition",
    "member retention",
    "membership organisation marketing",
    "professional body marketing",
    "trade association marketing",
    "membership growth",
    "member engagement",
    "membership sector marketing",
    "membership recruitment"
  ],
  authors: [{ name: "Membership Marketing Agency" }],
  creator: "Membership Marketing Agency",
  publisher: "Membership Marketing Agency",
  metadataBase: new URL("https://membership.quest"),
  alternates: {
    canonical: "https://membership.quest",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://membership.quest",
    siteName: "Membership Marketing Agency",
    title: "Membership Marketing Agency UK | Grow & Retain Members",
    description: "Specialist membership marketing agency helping associations and professional bodies grow their membership through expert acquisition, retention, and engagement strategies.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Membership Marketing Agency UK | Grow Members",
    description: "Expert membership marketing for associations, professional bodies, and membership organisations.",
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
  appleWebApp: {
    title: "Membership Marketing Agency",
    capable: true,
    statusBarStyle: "black-translucent",
  },
}

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://membership.quest/#website",
  name: "Membership Marketing Agency",
  alternateName: ["Membership Organisation Marketing", "Association Marketing Agency", "Member Growth Specialists"],
  url: "https://membership.quest",
  description: "Specialist membership marketing agency helping associations, professional bodies, and membership organisations grow and retain members through expert marketing strategies.",
  inLanguage: "en-GB",
  publisher: {
    "@type": "Organization",
    "@id": "https://membership.quest/#organization",
    name: "Membership Marketing Agency",
    url: "https://membership.quest",
    logo: {
      "@type": "ImageObject",
      "@id": "https://membership.quest/#logo",
      url: "https://membership.quest/icon.svg",
      contentUrl: "https://membership.quest/icon.svg",
      width: 512,
      height: 512,
      caption: "Membership Marketing Agency"
    }
  }
}

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://membership.quest/#service",
  name: "Membership Marketing Services",
  alternateName: "Membership Organisation Marketing",
  description: "Expert membership marketing services including member acquisition, retention campaigns, engagement strategies, and content marketing for associations, professional bodies, and membership organisations.",
  provider: {
    "@type": "Organization",
    name: "Membership Marketing Agency"
  },
  areaServed: {
    "@type": "Country",
    name: "United Kingdom"
  },
  serviceType: "Membership Marketing",
  offers: {
    "@type": "Offer",
    description: "Free membership marketing consultation"
  }
}

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Membership Marketing Agency",
      item: "https://membership.quest"
    }
  ]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased bg-slate-900 text-white`}>
        <Providers>
          <BetaBadge />
          <DebugPanel />
          <Disclaimer />
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <CookieConsent />
        </Providers>
      </body>
    </html>
  )
}
