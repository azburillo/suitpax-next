"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp, Clock, MapPin, Utensils } from "lucide-react"
import { teamMembers } from "@/app/data/team-members"
import { useIsMobile } from "@/app/hooks/useIsMobile"

const loungeOptions = [
  {
    name: "Skyview Lounge",
    description: "Panoramic airport views",
    price: "75",
    type: "Premium",
    duration: "3 hours",
    image: "/placeholder.svg?height=32&width=32",
  },
  {
    name: "Tranquility Spa",
    description: "Relaxation & wellness",
    price: "120",
    type: "Luxury",
    duration: "2 hours",
    image: "/placeholder.svg?height=32&width=32",
  },
  {
    name: "Gourmet Dining",
    description: "Fine dining experience",
    price: "150",
    type: "Exclusive",
    duration: "2 hours",
    image: "/placeholder.svg?height=32&width=32",
  },
]

export function DashboardPreviewSectionVIPLounge() {
  const [isProfileExpanded, setIsProfileExpanded] = useState(false)
  const [selectedOption, setSelectedOption] = useState(loungeOptions[0])
  const [showMiniCard, setShowMiniCard] = useState(false)
  const profileMember = teamMembers[0]
  const isMobile = useIsMobile()

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMiniCard(true)
      setTimeout(() => setShowMiniCard(false), 4000)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-b from-zinc-900 to-black p-3 sm:p-4 md:p-6"
    >
      {/* Ambient background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-purple-500/10" />
      <div className="absolute top-0 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-amber-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-purple-500/20 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Header y título principal */}
        <div className="mb-4 sm:mb-6 md:mb-8">
          <h2 className="text-lg sm:text-xl md:text-2xl font-medium tracking-tighter text-white mb-1 sm:mb-2">
            VIP Lounge Access
          </h2>
          <p className="text-xs sm:text-sm md:text-base font-light text-zinc-400">
            Exclusive airport lounge management and guest tracking
          </p>
        </div>

        {/* Option Selection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4 md:mb-6"
        >
          {loungeOptions.map((option, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl bg-white/5 backdrop-blur-sm border cursor-pointer transition-all ${
                selectedOption.name === option.name
                  ? "border-amber-500 bg-amber-500/10"
                  : "border-white/10 hover:border-white/20"
              }`}
              onClick={() => setSelectedOption(option)}
            >
              <img
                src={option.image || "/placeholder.svg"}
                alt={option.name}
                className="w-6 h-6 sm:w-8 sm:h-8 mb-1 sm:mb-2"
              />
              <p className="text-xs sm:text-sm font-medium text-white">{option.name}</p>
              <p className="text-[10px] sm:text-xs text-zinc-400">{option.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Selected Option Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex-1 rounded-lg sm:rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 p-2 sm:p-3 md:p-4"
        >
          <div className="flex items-center justify-between mb-2 sm:mb-3 md:mb-4">
            <h4 className="text-xs sm:text-sm font-medium text-zinc-400">Selected Experience</h4>
            <span className="text-[10px] sm:text-xs bg-amber-500/20 text-amber-500 px-2 py-1 rounded-full">
              {selectedOption.type}
            </span>
          </div>
          <div className="space-y-1 sm:space-y-2">
            <p className="text-sm sm:text-base md:text-lg font-semibold text-white">{selectedOption.name}</p>
            <div className="flex items-center justify-between text-[10px] sm:text-xs">
              <div className="flex items-center space-x-1 sm:space-x-2">
                <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-zinc-400" />
                <span className="text-zinc-400">Duration: {selectedOption.duration}</span>
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-zinc-400" />
                <span className="text-zinc-400">{selectedOption.type}</span>
              </div>
            </div>
            <p className="text-base sm:text-lg md:text-xl font-bold text-amber-500">
              ${selectedOption.price}
              <span className="text-xs sm:text-sm text-zinc-400">/person</span>
            </p>
          </div>
        </motion.div>

        {/* Profile Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-3 sm:mt-4"
        >
          <button
            onClick={() => setIsProfileExpanded(!isProfileExpanded)}
            className="w-full p-2 sm:p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors flex items-center space-x-2 sm:space-x-3"
          >
            <img
              src={profileMember.image || "/placeholder.svg"}
              alt={profileMember.name}
              className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg object-cover"
            />
            <div className="flex-1 text-left">
              <p className="text-xs sm:text-sm font-medium text-white">{profileMember.name}</p>
              <p className="text-[10px] sm:text-xs text-zinc-400">{profileMember.designation}</p>
            </div>
            {isProfileExpanded ? (
              <ChevronUp className="w-4 h-4 text-zinc-400" />
            ) : (
              <ChevronDown className="w-4 h-4 text-zinc-400" />
            )}
          </button>
        </motion.div>
      </div>

      {/* Mini-card */}
      <AnimatePresence>
        {showMiniCard && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-md rounded-lg p-2 sm:p-3 max-w-[150px] sm:max-w-[200px]"
          >
            <div className="flex items-center space-x-2">
              <Utensils className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
              <div>
                <p className="text-xs sm:text-sm font-medium text-white">Gourmet Menu</p>
                <p className="text-[10px] sm:text-xs text-zinc-400">Updated Today</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

