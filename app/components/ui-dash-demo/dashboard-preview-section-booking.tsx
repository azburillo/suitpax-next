"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp, Plane, Calendar, MapPin, ArrowUpRight, Luggage } from "lucide-react"
import { teamMembers } from "@/app/data/team-members"
import { useIsMobile } from "@/app/hooks/useIsMobile"

const airlines = [
  {
    name: "SuitPax Air",
    model: "A380",
    price: "499",
    type: "First Class",
    range: "8,000",
    image: "/placeholder.svg?height=32&width=32",
  },
  {
    name: "Vercel Airlines",
    model: "Boeing 787",
    price: "399",
    type: "Business",
    range: "7,355",
    image: "/placeholder.svg?height=32&width=32",
  },
  {
    name: "Next.js Airways",
    model: "A350",
    price: "299",
    type: "Premium Economy",
    range: "8,100",
    image: "/placeholder.svg?height=32&width=32",
  },
]

export function DashboardPreviewSectionBooking() {
  const [isProfileExpanded, setIsProfileExpanded] = useState(false)
  const [selectedFlight, setSelectedFlight] = useState(airlines[0])
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
      className="relative w-full max-w-md mx-auto aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-b from-zinc-900 to-black p-4 sm:p-6 md:p-8"
    >
      {/* Ambient background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10" />
      <div className="absolute top-0 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-purple-500/20 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Header y título principal */}
        <div className="mb-4 sm:mb-6">
          <h2 className="text-lg sm:text-xl font-medium tracking-tighter text-white mb-1 sm:mb-2">
            Flight Booking Management
          </h2>
          <p className="text-xs sm:text-sm font-light text-zinc-400">
            Streamline your travel bookings and flight operations
          </p>
        </div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex items-center justify-between mb-3 sm:mb-4"
        >
          <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
            <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
              <Plane className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-semibold text-white">Flight Booking</h3>
              <p className="text-xs sm:text-sm text-zinc-400">Premium Airlines</p>
            </div>
          </div>
          <button className="p-1.5 sm:p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
            <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-400" />
          </button>
        </motion.div>

        {/* Airline Selection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4"
        >
          {airlines.map((airline, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-2 sm:p-3 md:p-4 rounded-xl bg-white/5 backdrop-blur-sm border cursor-pointer transition-all ${
                selectedFlight.name === airline.name
                  ? "border-blue-500 bg-blue-500/10"
                  : "border-white/10 hover:border-white/20"
              }`}
              onClick={() => setSelectedFlight(airline)}
            >
              <img
                src={airline.image || "/placeholder.svg"}
                alt={airline.name}
                className="w-6 h-6 sm:w-8 sm:h-8 mb-1 sm:mb-2"
              />
              <p className="text-xs sm:text-sm font-medium text-white">{airline.name}</p>
              <p className="text-[10px] sm:text-xs text-zinc-400">{airline.model}</p>
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
          <div className="flex items-center justify-between mb-2 sm:mb-3">
            <h4 className="text-xs sm:text-sm font-medium text-zinc-400">Selected Flight</h4>
            <span className="text-[10px] sm:text-xs bg-blue-500/20 text-blue-500 px-2 py-1 rounded-full">
              {selectedFlight.type}
            </span>
          </div>
          <div className="space-y-1 sm:space-y-2">
            <p className="text-sm sm:text-base font-semibold text-white">
              {selectedFlight.name} {selectedFlight.model}
            </p>
            <div className="flex items-center justify-between text-[10px] sm:text-xs">
              <div className="flex items-center space-x-1 sm:space-x-2">
                <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-zinc-400" />
                <span className="text-zinc-400">Available Now</span>
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-zinc-400" />
                <span className="text-zinc-400">Range: {selectedFlight.range} mi</span>
              </div>
            </div>
            <p className="text-base sm:text-lg font-bold text-blue-500">
              ${selectedFlight.price}
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

      {/* Mini-card */}
      <AnimatePresence>
        {showMiniCard && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 bg-white/10 backdrop-blur-md rounded-lg p-2 sm:p-3 max-w-[120px] sm:max-w-[150px] md:max-w-[200px]"
          >
            <div className="flex items-center space-x-2">
              <Luggage className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-blue-400" />
              <div>
                <p className="text-[10px] sm:text-xs md:text-sm font-medium text-white">Luggage Status</p>
                <p className="text-[8px] sm:text-[10px] md:text-xs text-zinc-400">Checked In</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

