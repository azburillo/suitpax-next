"use client"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRightIcon } from "@heroicons/react/24/outline"
import { Button } from "@/app/components/ui/button"
import { AnalyticsCard } from "@/app/components/analytics-card"

const integrations = [
  { name: "Hubspot", logo: "/logos/hubspot.svg", description: "Sync customer data and streamline your CRM processes" },
  { name: "Zendesk", logo: "/logos/zendesk.svg", description: "Enhance customer support with integrated ticketing" },
  { name: "Salesforce", logo: "/logos/salesforce.svg", description: "Powerful CRM integration for sales teams" },
  { name: "Slack", logo: "/logos/slack.svg", description: "Real-time notifications and team collaboration" },
  { name: "Zapier", logo: "/logos/zapier.svg", description: "Connect Suitpax with thousands of apps" },
  {
    name: "Microsoft Teams",
    logo: "/logos/microsoft-teams.svg",
    description: "Seamless communication and project management",
  },
  { name: "Jira", logo: "/logos/jira.svg", description: "Integrate travel management with your project workflows" },
  { name: "QuickBooks", logo: "/logos/quickbooks.svg", description: "Streamline expense tracking and accounting" },
]

export default function IntegrationsPage() {
  return (
    <div className="relative overflow-hidden bg-black text-white min-h-screen">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-emerald-500/5 to-black"></div>

      <div className="relative z-10 container mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Integrate Suitpax with Your Favorite Tools
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-300">
            Enhance your travel management experience by connecting Suitpax with the tools you use every day.
          </p>
        </div>

        {/* Analytics Card Section */}
        <div className="mt-12 mb-20">
          <AnalyticsCard
            title="Analytics & Reports"
            description="Advanced insights and reporting tools to track engagement and optimize your community."
            pageViews="37.36K"
            pageViewsIncrease="+12%"
          />
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-lg p-6 flex flex-col items-center text-center"
            >
              <Image
                src={integration.logo || "/placeholder.svg"}
                alt={`${integration.name} logo`}
                width={80}
                height={80}
                className="mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{integration.name}</h3>
              <p className="text-gray-300 mb-4">{integration.description}</p>
              <Button variant="outline" className="mt-auto">
                Learn More
              </Button>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold mb-6">Don't see your tool?</h2>
          <p className="text-xl text-gray-300 mb-8">
            We're constantly adding new integrations. Let us know what you need!
          </p>
          <Link href="/contact" passHref>
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
              Request an Integration <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

