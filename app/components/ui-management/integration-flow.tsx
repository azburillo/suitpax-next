"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/app/components/ui/card"
import { Shield } from "lucide-react"

const integrations = [
  { name: "HubSpot", icon: "/hubspot-icon.png", position: { x: 0, y: 0 } },
  { name: "Slack", icon: "/slack-icon.png", position: { x: 100, y: 50 } },
  { name: "Zendesk", icon: "/zendesk-icon.png", position: { x: 200, y: 0 } },
  { name: "Zapier", icon: "/zapier-icon.png", position: { x: 300, y: 50 } },
]

export function IntegrationFlow() {
  return (
    <Card className="overflow-hidden backdrop-blur-lg bg-black/10 border-0 h-full">
      <CardContent className="p-8 flex flex-col h-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-8 flex-1"
        >
          <div className="relative h-[200px]">
            {integrations.map((integration, index) => (
              <motion.div
                key={integration.name}
                className="absolute"
                initial={{ x: integration.position.x - 50, y: integration.position.y, opacity: 0 }}
                animate={{ x: integration.position.x, y: integration.position.y, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-white/10 backdrop-blur-md">
                  <img src={integration.icon || "/placeholder.svg"} alt={integration.name} className="w-8 h-8" />
                </div>
              </motion.div>
            ))}
            <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
              <path d="M20 100 L380 100" stroke="url(#gradient)" strokeWidth="2" fill="none" strokeDasharray="5,5" />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#4F46E5" />
                  <stop offset="100%" stopColor="#06B6D4" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="flex items-center gap-2 p-4 rounded-lg bg-white/5">
            <Shield className="h-5 w-5 text-green-400" />
            <p className="text-sm text-white">
              Complies with data privacy and security requirements, including GDPR and CCPA
            </p>
          </div>
        </motion.div>
      </CardContent>
    </Card>
  )
}

