"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeftIcon, EllipsisHorizontalIcon } from "@heroicons/react/24/outline"
import { FilterIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import Image from "next/image"

const leads = [
  {
    id: 1,
    company: "Stripe",
    logo: "https://cdn.simpleicons.org/stripe/635BFF",
    lastInteraction: "1hr ago",
    status: "Verified",
    statusColor: "emerald",
  },
  {
    id: 2,
    company: "Calendly",
    logo: "https://cdn.simpleicons.org/calendly/006BFF",
    lastInteraction: "Yesterday, 12:36 am",
    status: "Google",
    statusColor: "sky",
  },
  {
    id: 3,
    name: "Bianca Levine",
    avatar: "/placeholder.svg",
    lastInteraction: "March 27, 2022",
    status: "Stripe",
    statusColor: "emerald",
  },
  {
    id: 4,
    company: "Slack",
    logo: "https://cdn.simpleicons.org/slack/4A154B",
    lastInteraction: "Tuesday, 12:41 am",
    status: "Google",
    statusColor: "sky",
  },
  {
    id: 5,
    name: "Jacob Padilla",
    avatar: "/placeholder.svg",
    lastInteraction: "Today, 02:30 am",
    status: "Stripe",
    statusColor: "emerald",
  },
  {
    id: 6,
    name: "Richard Sloan",
    avatar: "/placeholder.svg",
    lastInteraction: "September 13, 2022",
    status: "Waiting",
    statusColor: "orange",
  },
  {
    id: 7,
    name: "Belle Yang",
    avatar: "/placeholder.svg",
    lastInteraction: "September 05, 2022",
    status: "Verified",
    statusColor: "emerald",
  },
  {
    id: 8,
    company: "Linear",
    logo: "https://cdn.simpleicons.org/linear/5E6AD2",
    lastInteraction: "January 19, 2022",
    status: "New",
    statusColor: "gray",
  },
]

export function SalesPipeline() {
  return (
    <section className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <span className="text-sm text-gray-600 mb-4 block">From zero to one</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Build your go-to-market engine.</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Create, iterate and scale everything from sales pipelines to customer success and more.
          </p>
          <Button className="bg-gray-900 text-white hover:bg-gray-800">Start for free</Button>

          <div className="flex justify-center gap-4 mt-12 border-b border-gray-200">
            {["Contacts", "Pipelines", "Activity"].map((tab) => (
              <button
                key={tab}
                className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 border-b-2 border-transparent hover:border-gray-900 transition-colors"
              >
                {tab}
              </button>
            ))}
          </div>
        </motion.div>

        <Card className="bg-white p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <ArrowLeftIcon className="w-5 h-5 text-gray-400" />
              <h2 className="text-lg font-semibold">📈 Sales</h2>
              <div className="flex -space-x-2">
                <div className="w-6 h-6 rounded-full bg-gray-200" />
                <div className="w-6 h-6 rounded-full bg-gray-300" />
                <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs">
                  2
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="text-gray-600">
                <FilterIcon className="w-4 h-4 mr-2" />
                Filter
              </Button>
              <Button variant="outline" size="sm" className="text-gray-600">
                <MagnifyingGlassIcon className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            {leads.map((lead) => (
              <div
                key={lead.id}
                className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg group transition-colors"
              >
                <input type="checkbox" className="rounded border-gray-300" />
                <div className="w-8 h-8 relative">
                  {lead.logo ? (
                    <Image
                      src={lead.logo || "/placeholder.svg"}
                      alt={lead.company}
                      width={32}
                      height={32}
                      className="rounded"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 rounded flex items-center justify-center text-gray-500 text-sm">
                      {lead.name?.[0]}
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <span className="font-medium">{lead.company || lead.name}</span>
                </div>
                <div className="text-sm text-gray-500">{lead.lastInteraction}</div>
                <div
                  className={`px-2 py-1 rounded-full text-xs ${
                    lead.statusColor === "emerald"
                      ? "bg-emerald-100 text-emerald-700"
                      : lead.statusColor === "sky"
                        ? "bg-sky-100 text-sky-700"
                        : lead.statusColor === "orange"
                          ? "bg-orange-100 text-orange-700"
                          : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {lead.status}
                </div>
                <button className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <EllipsisHorizontalIcon className="w-5 h-5 text-gray-400" />
                </button>
              </div>
            ))}
          </div>
        </Card>

        <div className="mt-16">
          <span className="text-sm text-gray-600 mb-4 block">Pipeline management</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Workflows that work for you.</h2>
        </div>
      </div>
    </section>
  )
}

