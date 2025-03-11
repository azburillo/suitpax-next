"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Search, Settings, Download, Plus, ChevronDown, Info } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface Company {
  name: string
  logo: string
  domain: string
  deals: string[]
  status: "Excellent" | "Good" | "Medium" | "Low"
  amount?: string
}

const companies: Company[] = [
  {
    name: "Vercel",
    logo: "https://cdn.simpleicons.org/vercel/white",
    domain: "vercel.com",
    deals: ["Vercel", "Vercel - Expansion"],
    status: "Excellent",
    amount: "$10K",
  },
  {
    name: "DigitalOcean",
    logo: "https://cdn.simpleicons.org/digitalocean/white",
    domain: "digitalocean.com",
    deals: ["DigitalOcean"],
    status: "Medium",
    amount: "$50K",
  },
  {
    name: "GitHub",
    logo: "https://cdn.simpleicons.org/github/white",
    domain: "github.com",
    deals: ["GitHub - x20 Enterprise"],
    status: "Good",
    amount: "$18K",
  },
  {
    name: "Stripe",
    logo: "https://cdn.simpleicons.org/stripe/white",
    domain: "stripe.com",
    deals: ["Stripe"],
    status: "Good",
    amount: "$18K",
  },
  {
    name: "Figma",
    logo: "https://cdn.simpleicons.org/figma/white",
    domain: "figma.com",
    deals: ["Figma"],
    status: "Good",
    amount: "$50K",
  },
]

const tabs = ["Data", "Automations", "Pipeline", "Productivity", "Reporting"]

const StatusBadge = ({ status }: { status: Company["status"] }) => {
  const colors = {
    Excellent: "bg-purple-500/10 text-purple-400",
    Good: "bg-emerald-500/10 text-emerald-400",
    Medium: "bg-blue-500/10 text-blue-400",
    Low: "bg-red-500/10 text-red-400",
  }

  return <span className={cn("px-2 py-0.5 rounded-full text-[11px] font-medium", colors[status])}>{status}</span>
}

export function SoftwareShowcase() {
  const [activeTab, setActiveTab] = useState("Data")
  const [sortBy, setSort] = useState("Last email interaction")

  return (
    <section className="w-full py-6 bg-[#0F1115]">
      <div className="container mx-auto px-4">
        <div className="max-w-[90rem] mx-auto">
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            {tabs.map((tab) => (
              <Button
                key={tab}
                variant="ghost"
                className={cn(
                  "rounded-full border border-gray-200/10 hover:bg-white/5 px-4 py-1.5 h-auto text-[13px]",
                  activeTab === tab ? "bg-white/5 text-white" : "text-gray-400",
                )}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </Button>
            ))}
          </div>

          {/* Main Content */}
          <Card className="bg-[#1C1F26] border-gray-800/50">
            <div className="p-3">
              {/* Header */}
              <div className="flex items-center justify-between mb-4 px-2">
                <div className="flex items-center gap-1.5">
                  <h2 className="text-[13px] text-white font-medium">Companies</h2>
                  <Info className="w-3.5 h-3.5 text-gray-400" />
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm" className="text-gray-400 text-xs h-7 px-2">
                    <Settings className="w-3.5 h-3.5 mr-1.5" />
                    View settings
                  </Button>
                  <Button variant="ghost" size="sm" className="text-gray-400 text-xs h-7 px-2">
                    <Download className="w-3.5 h-3.5 mr-1.5" />
                    Import / Export
                  </Button>
                </div>
              </div>

              {/* Sort Controls */}
              <div className="flex items-center gap-2 mb-3 px-2">
                <span className="text-xs text-gray-400">Sorted by</span>
                <Button variant="ghost" size="sm" className="text-xs text-white h-7 px-2">
                  {sortBy}
                  <ChevronDown className="w-3.5 h-3.5 ml-1" />
                </Button>
                <Button variant="ghost" size="sm" className="text-xs text-gray-400 h-7 px-2">
                  Advanced filter
                  <span className="ml-1.5 bg-gray-800 text-gray-400 rounded px-1 text-[10px]">3</span>
                </Button>
                <Button variant="ghost" size="sm" className="text-xs text-gray-400 h-7 px-2 ml-auto">
                  <Plus className="w-3.5 h-3.5" />
                </Button>
              </div>

              {/* Companies List */}
              <div className="min-w-full overflow-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-xs text-gray-400 border-b border-gray-800/50">
                      <th className="p-2 font-normal">
                        <input type="checkbox" className="rounded-sm border-gray-700 bg-gray-800 w-3.5 h-3.5" />
                      </th>
                      <th className="p-2 font-normal">Company</th>
                      <th className="p-2 font-normal">Domains</th>
                      <th className="p-2 font-normal">Associated deals</th>
                      <th className="p-2 font-normal">ICP Fit</th>
                      <th className="p-2 font-normal text-right">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {companies.map((company) => (
                      <motion.tr
                        key={company.name}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="group hover:bg-white/5"
                      >
                        <td className="p-2">
                          <input type="checkbox" className="rounded-sm border-gray-700 bg-gray-800 w-3.5 h-3.5" />
                        </td>
                        <td className="p-2">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-gray-800 rounded-sm p-1.5 flex items-center justify-center">
                              <Image
                                src={company.logo || "/placeholder.svg"}
                                alt={company.name}
                                width={16}
                                height={16}
                                className="w-full h-full"
                              />
                            </div>
                            <span className="text-[13px] text-white">{company.name}</span>
                          </div>
                        </td>
                        <td className="p-2">
                          <span className="text-[13px] text-blue-400">{company.domain}</span>
                        </td>
                        <td className="p-2">
                          <div className="flex items-center gap-1.5 flex-wrap">
                            {company.deals.map((deal) => (
                              <span
                                key={deal}
                                className="px-2 py-0.5 bg-gray-800/50 rounded-full text-[11px] text-gray-300"
                              >
                                {deal}
                              </span>
                            ))}
                          </div>
                        </td>
                        <td className="p-2">
                          <StatusBadge status={company.status} />
                        </td>
                        <td className="p-2 text-right">
                          <span className="text-[13px] text-white">{company.amount}</span>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Footer */}
              <div className="mt-3 pt-3 border-t border-gray-800/50 flex items-center justify-between text-xs px-2">
                <div className="flex items-center gap-1.5">
                  <span className="text-[13px] text-gray-400">1,439</span>
                  <span className="text-[13px] text-gray-600">count</span>
                </div>
                <div className="flex items-center gap-4">
                  <button className="text-[11px] text-gray-400 hover:text-white flex items-center gap-1">
                    <Plus className="w-3 h-3" />
                    Add calculation
                  </button>
                  <button className="text-[11px] text-gray-400 hover:text-white flex items-center gap-1">
                    <Plus className="w-3 h-3" />
                    Add calculation
                  </button>
                  <button className="text-[11px] text-gray-400 hover:text-white flex items-center gap-1">
                    <Plus className="w-3 h-3" />
                    Add calculation
                  </button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

