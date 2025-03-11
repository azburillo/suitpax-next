"use client"

import { motion } from "framer-motion"
import { ArrowRightIcon, SparklesIcon, StarIcon, BellIcon, PlaneIcon, CreditCardIcon } from "lucide-react"
import { Card, CardContent } from "@/app/components/ui/card"
import Link from "next/link"

export function SidebarOptInForm() {
  const updates = [
    {
      title: "New VIP Lounge Access",
      description: "Exclusive airport experiences now available in 15 new locations",
      icon: StarIcon,
      link: "/platform/airport-vip-lounge",
    },
    {
      title: "AI Travel Assistant",
      description: "Our new AI agents help you plan your perfect trip",
      icon: SparklesIcon,
      link: "/ai-agents",
    },
    {
      title: "Mobile App Update",
      description: "Version 2.4 is now available with offline mode",
      icon: BellIcon,
      link: "/changelog",
    },
    {
      title: "New Flight Partners",
      description: "We've added 12 new airline partners to our global network",
      icon: PlaneIcon,
      link: "/sections/partners",
    },
    {
      title: "Corporate Card Benefits",
      description: "Enhanced rewards program for business travelers",
      icon: CreditCardIcon,
      link: "/sections/services/fintech",
    },
  ]

  // Randomly select one update to display
  const randomUpdate = updates[Math.floor(Math.random() * updates.length)]

  return (
    <Card className="relative overflow-hidden w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto backdrop-blur-xl bg-gradient-to-br from-gray-200/80 via-white/70 to-gray-300/80 border border-white/50 shadow-lg">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-300/40 via-white/30 to-gray-200/40 opacity-70"></div>
      <div className="absolute inset-0 bg-grid-white/[0.2] bg-[length:16px_16px]"></div>
      <CardContent className="relative z-10 p-3 sm:p-4">
        <div className="flex items-start space-x-3">
          <div className="mt-1 p-1.5 rounded-full bg-black/10 backdrop-blur-sm shadow-inner">
            <randomUpdate.icon className="h-4 w-4 text-black/70 stroke-[1.5]" />
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-medium text-black">{randomUpdate.title}</h3>
            <p className="mt-1 text-xs text-gray-700">{randomUpdate.description}</p>
            <motion.div
              className="mt-2"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link
                href={randomUpdate.link}
                className="inline-flex items-center text-xs font-medium text-gray-800 hover:text-black group"
              >
                Learn more <ArrowRightIcon className="ml-1 h-3 w-3 group-hover:text-emerald-600" />
              </Link>
            </motion.div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

