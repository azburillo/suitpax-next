"use client"

import React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp, Plane, Calendar, MapPin, ArrowUpRight, Users } from "lucide-react"
import { teamMembers } from "@/app/data/team-members"
import { useIsMobile } from "@/app/hooks/useIsMobile"

const flightOptions = [
  {
    name: "Economy",
    description: "Standard flight",
    price: "299",
    type: "Economy",
    duration: "8 hours",
    image: "/placeholder.svg?height=32&width=32",
  },
  {
    name: "Business",
    description: "Enhanced comfort",
    price: "899",
    type: "Business",
    duration: "8 hours",
    image: "/placeholder.svg?height=32&width=32",
  },
  {
    name: "First Class",
    description: "Luxury experience",
    price: "1,499",
    type: "First Class",
    duration: "8 hours",
    image: "/placeholder.svg?height=32&width=32",
  },
]

const miniCardData = [
  { icon: Plane, text: "Flight departed" },
  { icon: Users, text: "Full capacity" },
  { icon: Calendar, text: "On-time arrival" },
]

export function DashboardPreviewSectionFlights() {
  const [isProfileExpanded, setIsProfileExpanded] = useState(false)
  const [selectedFlight, setSelectedFlight] = useState(flightOptions[0])
  const [activeMiniCard, setActiveMiniCard] = useState<number | null>(null)
  const profileMember = teamMembers[3] // Using a different team member
  const isMobile = useIsMobile()

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMiniCard((prev) => (prev === null || prev >= miniCardData.length - 1 ? 0 : prev + 1))
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-b from-zinc-900 to-black p-6 sm:p-8"
    >
      {/* Ambient background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-purple-500/10" />
      <div className="absolute top-0 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-emerald-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-purple-500/20 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Header y título principal */}
        <div className="mb-4 sm:mb-6 md:mb-8">
          <h2 className="text-lg sm:text-xl md:text-2xl font-medium tracking-tighter text-white mb-1 sm:mb-2">
            Flight Operations Center
          </h2>
          <p className="text-xs sm:text-sm md:text-base font-light text-zinc-400">
            Monitor and manage all your flight operations in one place
          </p>
        </div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex items-center justify-between mb-3 sm:mb-4 md:mb-6"
        >
          <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
            <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center">
              <Plane className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white">Flight Overview</h3>
              <p className="text-xs sm:text-sm text-zinc-400">Real-time Monitoring</p>
            </div>
          </div>
          <button className="p-1.5 sm:p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
            <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-400" />
          </button>
        </motion.div>

        {/* Flight Selection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4 md:mb-6"
        >
          {flightOptions.map((flight, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-2 sm:p-3 md:p-4 rounded-xl bg-white/5 backdrop-blur-sm border cursor-pointer transition-all ${
                selectedFlight.name === flight.name
                  ? "border-emerald-500 bg-emerald-500/10"
                  : "border-white/10 hover:border-white/20"
              }`}
              onClick={() => setSelectedFlight(flight)}
            >
              <img
                src={flight.image || "/placeholder.svg"}
                alt={flight.name}
                className="w-6 h-6 sm:w-8 sm:h-8 mb-1 sm:mb-2"
              />
              <p className="text-xs sm:text-sm font-medium text-white">{flight.name}</p>
              <p className="text-[10px] sm:text-xs text-zinc-400">{flight.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Selected Flight Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex-1 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 p-2 sm:p-3 md:p-4"
        >
          <div className="flex items-center justify-between mb-2 sm:mb-3 md:mb-4">
            <h4 className="text-xs sm:text-sm font-medium text-zinc-400">Selected Flight</h4>
            <span className="text-[10px] sm:text-xs bg-emerald-500/20 text-emerald-500 px-2 py-1 rounded-full">
              {selectedFlight.type}
            </span>
          </div>
          <div className="space-y-1 sm:space-y-2">
            <p className="text-sm sm:text-base md:text-lg font-semibold text-white">{selectedFlight.name}</p>
            <div className="flex items-center justify-between text-[10px] sm:text-xs">
              <div className="flex items-center space-x-1 sm:space-x-2">
                <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-zinc-400" />
                <span className="text-zinc-400">Duration: {selectedFlight.duration}</span>
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-zinc-400" />
                <span className="text-zinc-400">{selectedFlight.type}</span>
              </div>
            </div>
            <p className="text-base sm:text-lg md:text-xl font-bold text-emerald-500">
              ${selectedFlight.price}
              <span className="text-xs sm:text-sm text-zinc-400">/person</span>
            </p>
          </div>
        </motion.div>

        {/* Mini-cards */}
        <AnimatePresence>
          {activeMiniCard !== null && (
            <motion.div
              key={activeMiniCard}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-sm rounded-lg p-2 flex items-center space-x-2"
            >
              {React.createElement(miniCardData[activeMiniCard].icon, { className: "w-4 h-4 text-emerald-500" })}
              <span className="text-xs text-white">{miniCardData[activeMiniCard].text}</span>
            </motion.div>
          )}
        </AnimatePresence>

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
              className="w-6 h-6 sm:w-8 sm:h-8 rounded-md sm:rounded-lg object-cover"
            />
            <div className="flex-1 text-left">
              <p className="text-xs sm:text-sm font-medium text-white">{profileMember.name}</p>
              <p className="text-[10px] sm:text-xs text-zinc-400">{profileMember.designation}</p>
            </div>
            {isProfileExpanded ? (
              <ChevronUp className="w-3 h-3 sm:w-4 sm:h-4 text-zinc-400" />
            ) : (
              <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-zinc-400" />
            )}
          </button>
          <AnimatePresence>
            {isProfileExpanded && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
                className="mt-2 sm:mt-3"
              >
                <p className="text-[10px] sm:text-xs text-zinc-400">{profileMember.bio}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  )
}

