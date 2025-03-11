import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "@/app/styles/globals.css"
import { Theme } from "@radix-ui/themes"
import type React from "react"
// import { ClerkProvider } from "@clerk/nextjs"
import Script from "next/script"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

import Navigation from "@/app/components/marketing/navigation"
import { Footer } from "@/app/components/marketing/footer"
import { PostHogProvider } from "@/app/providers/posthog"
import { IntercomProvider } from "@/app/providers/intercom-provider"
import { cookiebotScript } from "@/scripts/cookiebot"
import { schemaOrgScript } from "@/scripts/schema-org"
import { googleAnalyticsScript } from "@/scripts/google-analytics"
import { cloudflareInsightsScript } from "@/scripts/cloudflare-insights"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

import { cn } from "@/app/lib/utils"

export const metadata: Metadata = {
  title: "Suitpax | Where travel meets intelligence",
  siteName: "Suitpax",
  description:
    "Suitpax is an AI-powered travel management software for modern travelers and businesses. Streamline bookings, VIP services, and more.",
  keywords: [
    "travel management",
    "AI travel solutions",
    "business travel",
    "travel efficiency",
    "travel integration",
    "intelligent travel platform",
    "AI travel",
    "airport solutions",
    "flight search",
    "travel software",
    "vip lounge",
    "airport vip lounge",
    "expense management solutions",
    "corporate travel",
    "travel booking",
    "travel technology",
    "AI-powered travel",
    "travel automation",
    "business trip planning",
    "travel expense management",
    "travel analytics",
    "travel policy compliance",
    "duty of care",
    "travel risk management",
    "sustainable travel",
    "bleisure travel",
    "travel cost optimization",
    "travel data insights",
    "travel API integration",
    "travel itinerary management",
  ],
  alternates: {
    canonical: "https://suitpax.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://suitpax.com",
    siteName: "Suitpax",
    title: "Suitpax | Where travel meets intelligence",
    description: "Suitpax is an AI-powered travel management software for modern travelers and businesses.",
    images: [
      {
        url: "https://ny10xbvnsvd5lllr.public.blob.vercel-storage.com/suitpax-art-tech/openart-image_swyVZVu__1738399619340_raw-twjfvulAdbkFblGcNFbPQsMkPGSEto.webp",
        width: 1200,
        height: 630,
        alt: "Suitpax | Where travel meets intelligence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Suitpax | Where travel meets intelligence",
    description: "Revolutionizing travel management with AI-powered solutions for modern travel companies.",
    images: [
      "https://ny10xbvnsvd5lllr.public.blob.vercel-storage.com/Logo_20250115_223551_0000-FXLx1lgioDACS3xtqW4O4hpaa6D7uO.png",
    ],
    creator: "@suitpax",
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
  icons: {
    icon: "https://ny10xbvnsvd5lllr.public.blob.vercel-storage.com/logos/suitpax-symbol",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <Script id="Cookiebot" {...cookiebotScript} strategy="afterInteractive" />
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-C77M03G9MN" />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: googleAnalyticsScript,
          }}
        />
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: schemaOrgScript,
          }}
        />
        <Script
          id="cloudflare-insights"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: cloudflareInsightsScript,
          }}
        />
      </head>
      <body className={cn(inter.variable, "flex flex-col min-h-screen overflow-x-hidden")}>
        <PostHogProvider>
          <IntercomProvider>
            <Theme>
              <Navigation />
              <main className="flex-grow bg-background">{children}</main>
              <Footer />
            </Theme>
          </IntercomProvider>
        </PostHogProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}



import './globals.css'