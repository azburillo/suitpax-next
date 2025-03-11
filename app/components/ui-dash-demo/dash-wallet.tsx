"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp, Plane, Calendar, MapPin, ArrowUpRight, QrCode } from "lucide-react"
import { teamMembers } from "@/app/data/team-members"
import { useIsMobile } from "@/app/hooks/useIsMobile"

const boardingPasses = [
  {
    airline: "Suitpax Air",
    flightNumber: "SX 1234",
    destination: "Tokyo",
    gate: "A22",
    boardingTime: "10:30 AM",
    seat: "14A",
    image: "/placeholder.svg?height=32&width=32",
  },
  {
    airline: "Suitpax Express",
    flightNumber: "SX 5678",
    destination: "New York",
    gate: "B15",
    boardingTime: "2:45 PM",
    seat: "22C",
    image: "/placeholder.svg?height=32&width=32",
  },
  {
    airline: "Suitpax Connect",
    flightNumber: "SX 9012",
    destination: "London",
    gate: "C08",
    boardingTime: "8:15 AM",
    seat: "18F",
    image: "/placeholder.svg?height=32&width=32",
  },
]

export function DashWallet() {
  const [isProfileExpanded, setIsProfileExpanded] = useState(false)
  const [selectedPass, setSelectedPass] = useState(boardingPasses[0])
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
      className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-b from-gray-900 to-black p-4 sm:p-6"
    >
      {/* Ambient background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10" />
      <div className="absolute top-0 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-purple-500/20 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Header y título principal */}
        <div className="mb-8">
          <h2 className="text-xl font-medium tracking-tighter text-white mb-2">Digital Boarding Pass</h2>
          <p className="text-md font-light text-gray-400">Access your flight information instantly</p>
        </div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex items-center justify-between mb-4 sm:mb-6"
        >
          <div className="flex items-center space-x-3 sm:space-x-4">
            <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <Plane className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-white">Suitpax Wallet</h3>
              <p className="text-xs sm:text-sm text-gray-400">Your Digital Travel Companion</p>
            </div>
          </div>
          <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
            <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
          </button>
        </motion.div>

        {/* Boarding Pass Selection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="grid grid-cols-3 gap-2 sm:gap-4 mb-4 sm:mb-6"
        >
          {boardingPasses.map((pass, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-2 sm:p-4 rounded-xl bg-white/5 backdrop-blur-sm border cursor-pointer transition-all ${
                selectedPass.flightNumber === pass.flightNumber
                  ? "border-blue-500 bg-blue-500/10"
                  : "border-white/10 hover:border-white/20"
              }`}
              onClick={() => setSelectedPass(pass)}
            >
              <img
                src={pass.image || "/placeholder.svg"}
                alt={pass.airline}
                className="w-6 h-6 sm:w-8 sm:h-8 mb-1 sm:mb-2"
              />
              <p className="text-xs sm:text-sm font-medium text-white">{pass.airline}</p>
              <p className="text-[10px] sm:text-xs text-gray-400">{pass.flightNumber}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Selected Boarding Pass Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex-1 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 p-3 sm:p-4"
        >
          <div className="flex items-center justify-between mb-2 sm:mb-4">
            <h4 className="text-xs sm:text-sm font-medium text-gray-400">Flight Details</h4>
            <span className="text-[10px] sm:text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full">
              {selectedPass.flightNumber}
            </span>
          </div>
          <div className="space-y-1 sm:space-y-2">
            <p className="text-sm sm:text-lg font-semibold text-white">{selectedPass.destination}</p>
            <div className="flex items-center justify-between text-[10px] sm:text-sm">
              <div className="flex items-center space-x-1 sm:space-x-2">
                <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
                <span className="text-gray-400">Boarding: {selectedPass.boardingTime}</span>
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
                <span className="text-gray-400">Gate: {selectedPass.gate}</span>
              </div>
            </div>
            <p className="text-xl sm:text-2xl font-bold text-blue-400">
              Seat: {selectedPass.seat}
              <span className="text-xs sm:text-sm text-gray-400 ml-2">Window</span>
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
              <p className="text-[10px] sm:text-xs text-gray-400">{profileMember.designation}</p>
            </div>
            {isProfileExpanded ? (
              <ChevronUp className="w-4 h-4 text-gray-400" />
            ) : (
              <ChevronDown className="w-4 h-4 text-gray-400" />
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
              <QrCode className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
              <div>
                <p className="text-xs sm:text-sm font-medium text-white">Boarding QR</p>
                <p className="text-[10px] sm:text-xs text-gray-400">Scan to board</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

