"use client"

import { motion } from "framer-motion"
import { Badge } from "@/app/components/ui/badge"
import { ConnectionLine } from "@/app/components/ui/connection-line"
import Image from "next/image"
import { Boxes } from "lucide-react"

const tools = [
  { name: "Outlook", icon: "/placeholder.svg?height=40&width=40" },
  { name: "Gmail", icon: "/placeholder.svg?height=40&width=40" },
  { name: "Salesforce", icon: "/placeholder.svg?height=40&width=40" },
  { name: "HubSpot", icon: "/placeholder.svg?height=40&width=40" },
  { name: "LinkedIn", icon: "/placeholder.svg?height=40&width=40" },
  { name: "Calendar", icon: "/placeholder.svg?height=40&width=40" },
]

export const IntegrationsHubCard = () => {
  return (
    <div className="w-full max-w-md aspect-[4/5] bg-gradient-to-b from-black to-gray-900 rounded-3xl p-8 flex flex-col justify-between overflow-hidden border border-white/10">
      <div className="space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3"
        >
          <div className="p-2 rounded-xl bg-blue-500/10">
            <Boxes className="w-6 h-6 text-blue-400" />
          </div>
          <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20">Enterprise</Badge>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent"
        >
          Integrations Hub
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-white/60"
        >
          Connect your tools seamlessly
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="relative mt-8"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent blur-2xl" />
        <div className="relative">
          {/* Central Suitpax Logo */}
          <div className="w-16 h-16 mx-auto mb-8 relative">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/suitpax-symbol-mFCuYjDJUpjJDTLCOwgTySIN8O5Kg4.png"
              alt="Suitpax"
              width={64}
              height={64}
              className="opacity-80"
            />
          </div>

          {/* Connection Lines */}
          <div className="absolute inset-0 pointer-events-none">
            {tools.map((_, index) => (
              <ConnectionLine
                key={index}
                direction={index % 2 === 0 ? "horizontal" : "vertical"}
                className="opacity-20"
              />
            ))}
          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-3 gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                className="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
              >
                <Image
                  src={tool.icon || "/placeholder.svg"}
                  alt={tool.name}
                  width={40}
                  height={40}
                  className="w-full h-auto"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

