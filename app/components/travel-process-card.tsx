"use client"

import { motion } from "framer-motion"
import { PlaneTakeoffIcon, HotelIcon, MoveIcon as TransferIcon, ClubIcon as VipLoungeIcon } from "lucide-react"
import Image from "next/image"
import type * as HeroIcons from "@heroicons/react/24/outline"
import { useState } from "react"

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const iconVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
}

interface TravelStage {
  icon: keyof typeof HeroIcons | React.ComponentType
  title: string
  description: string
  logo?: string
}

const travelStages: TravelStage[] = [
  {
    icon: PlaneTakeoffIcon,
    title: "Flights",
    description: "Book and manage flights with ease.",
    logo: "https://cdn.simpleicons.org/britishairways/075AAA", // Example: British Airways
  },
  {
    icon: HotelIcon,
    title: "Hotels",
    description: "Find and reserve the perfect stay.",
    logo: "https://cdn.simpleicons.org/marriott/990000", // Example: Marriott
  },
  {
    icon: TransferIcon,
    title: "Traslados",
    description: "Seamless airport to hotel transfers.",
    logo: "https://cdn.simpleicons.org/tesla/FF0000", // Example: Tesla
  },
  {
    icon: VipLoungeIcon,
    title: "VIP Lounges",
    description: "Relax in comfort at airport lounges.",
    logo: "/suitpax-main-logo.svg", // Example: Suitpax logo
  },
]

export function TravelProcessCard() {
  const [isVisible, setIsVisible] = useState(false)

  return isVisible ? (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5 }}
      className="p-4 sm:p-6 rounded-xl bg-emerald-950/10 backdrop-blur-md border border-emerald-950/20 shadow-lg w-full max-w-3xl mx-auto mt-12"
    >
      <h2 className="text-lg sm:text-xl font-semibold text-emerald-950 mb-4">Your Seamless Travel Journey</h2>
      {travelStages.map((stage, index) => (
        <motion.div
          key={stage.title}
          variants={iconVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: index * 0.2, duration: 0.5 }}
          className="flex items-center mb-3"
        >
          {/* Logos are now displayed next to each icon */}
          <div className="w-6 h-6 mr-2 flex items-center justify-center">
            {stage.logo ? (
              <Image src={stage.logo || "/placeholder.svg"} alt={`${stage.title} Logo`} width={24} height={24} />
            ) : (
              <stage.icon className="w-5 h-5 text-emerald-950" />
            )}
          </div>
          <div>
            <h3 className="text-base font-medium text-emerald-950">{stage.title}</h3>
            <p className="text-xs text-emerald-300/80">{stage.description}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  ) : null
}

