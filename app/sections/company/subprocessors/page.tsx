"use client"

import { motion } from "framer-motion"
import { BackgroundBeams } from "@/app/components/backgrounds/background-beams"
import { Card } from "@/app/components/ui/card"
import Link from "next/link"

interface Subprocessor {
  name: string
  purpose: string
  location: string
  privacyUrl: string
  description: string
}

const subprocessors: Subprocessor[] = [
  {
    name: "Clerk",
    purpose: "Authentication & User Management",
    location: "United States",
    privacyUrl: "https://clerk.com/privacy",
    description: "Identity management, authentication, and user profile services.",
  },
  {
    name: "Intercom",
    purpose: "Customer Support & Engagement",
    location: "Ireland",
    privacyUrl: "https://www.intercom.com/legal/privacy",
    description: "Customer messaging platform and support system.",
  },
  {
    name: "PostHog",
    purpose: "Analytics",
    location: "United States",
    privacyUrl: "https://posthog.com/privacy",
    description: "Product analytics and user behavior tracking.",
  },
  {
    name: "Vercel",
    purpose: "Hosting & Deployment",
    location: "United States",
    privacyUrl: "https://vercel.com/legal/privacy-policy",
    description: "Application hosting, deployment, and edge functions.",
  },
  {
    name: "Cloudflare",
    purpose: "CDN & Security",
    location: "United States",
    privacyUrl: "https://www.cloudflare.com/privacypolicy/",
    description: "Content delivery network and security services.",
  },
  {
    name: "Google Analytics",
    purpose: "Web Analytics",
    location: "United States",
    privacyUrl: "https://policies.google.com/privacy",
    description: "Website traffic analysis and user behavior tracking.",
  },
  {
    name: "Cookiebot",
    purpose: "Cookie Management",
    location: "Denmark",
    privacyUrl: "https://www.cookiebot.com/en/privacy-policy/",
    description: "Cookie consent and privacy management platform.",
  },
]

export default function SubprocessorsPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />
      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-emerald-700">
              Subprocessors
            </span>
          </h1>
          <p className="text-xl text-emerald-200 max-w-2xl mx-auto mb-8">
            We use the following subprocessors to help us provide our services. These entities process your data on our
            behalf and have access to it to perform specific tasks.
          </p>
        </motion.div>

        <div className="grid gap-6">
          {subprocessors.map((processor, index) => (
            <motion.div
              key={processor.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-emerald-950/30 backdrop-blur-sm border-emerald-900">
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-emerald-400">{processor.name}</h3>
                      <p className="text-gray-300 mt-1">{processor.purpose}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-gray-400 text-sm">{processor.location}</span>
                      <Link
                        href={processor.privacyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-500 hover:text-emerald-400 text-sm underline"
                      >
                        Privacy Policy
                      </Link>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-300 text-sm">{processor.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-300 text-sm">
            For more information about how we handle your data, please read our{" "}
            <Link href="/privacy" className="text-emerald-500 hover:text-emerald-400 underline">
              Privacy Policy
            </Link>
            .
          </p>
        </motion.div>
      </div>
    </div>
  )
}

