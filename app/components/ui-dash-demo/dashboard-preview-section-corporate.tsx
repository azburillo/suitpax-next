"use client"

import React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp, Building, ArrowUpRight, Calendar, MapPin, Users, DollarSign } from "lucide-react"
import { teamMembers } from "@/app/data/team-members"
import { useIsMobile } from "@/app/hooks/useIsMobile"

const corporateOptions = [
  {
    name: "Business Trip",
    description: "Standard corporate travel",
    price: "1,500",
    type: "Economy",
    duration: "3 days",
    image: "/placeholder.svg?height=32&width=32",
  },
  {
    name: "Conference",
    description: "Large group booking",
    price: "5,000",
    type: "Business",
    duration: "5 days",
    image: "/placeholder.svg?height=32&width=32",
  },
  {
    name: "Executive Retreat",
    description: "Luxury corporate event",
    price: "10,000",
    type: "First Class",
    duration: "7 days",
    image: "/placeholder.svg?height=32&width=32",
  },
]

const miniCardData = [
  { icon: Users, text: "Team of 5 booked" },
  { icon: DollarSign, text: "Budget approved" },
  { icon: Calendar, text: "Trip scheduled" },
]

export function DashboardPreviewSectionCorporate() {
  const [isProfileExpanded, setIsProfileExpanded] = useState(false)
  const [selectedOption, setSelectedOption] = useState(corporateOptions[0])
  const [activeMiniCard, setActiveMiniCard] = useState<number | null>(null)
  const profileMember = teamMembers[0]
  const isMobile = useIsMobile()

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMiniCard((prev) => (prev === null || prev >= miniCardData.length - 1 ? 0 : prev + 1))
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative w-full max-w-sm mx-auto aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-b from-zinc-900 to-black p-4 sm:p-6"
    >
      {/* Ambient background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10" />
      <div className="absolute top-0 left-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-purple-500/20 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-between mb-4 sm:mb-6"
        >
          <div className="flex items-center space-x-3">
            <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
              <Building className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-white">Corporate Travel</h3>
              <p className="text-xs sm:text-sm text-zinc-400">Business Solutions</p>
            </div>
          </div>
          <button className="p-1 sm:p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
            <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-400" />
          </button>
        </motion.div>

        {/* Option Selection */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-3 gap-2 sm:gap-4 mb-4 sm:mb-6"
        >
          {corporateOptions.map((option, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-2 sm:p-3 rounded-xl bg-white/5 backdrop-blur-sm border cursor-pointer transition-all ${
                selectedOption.name === option.name
                  ? "border-blue-500 bg-blue-500/10"
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
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex-1 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 p-3 sm:p-4"
        >
          <div className="flex items-center justify-between mb-2 sm:mb-3">
            <h4 className="text-xs sm:text-sm font-medium text-zinc-400">Selected Package</h4>
            <span className="text-[10px] sm:text-xs bg-blue-500/20 text-blue-500 px-2 py-1 rounded-full">
              {selectedOption.type}
            </span>
          </div>
          <div className="space-y-1 sm:space-y-2">
            <p className="text-sm sm:text-base font-semibold text-white">{selectedOption.name}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-1 sm:space-x-2">
                <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-zinc-400" />
                <span className="text-[10px] sm:text-xs text-zinc-400">Duration: {selectedOption.duration}</span>
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-zinc-400" />
                <span className="text-[10px] sm:text-xs text-zinc-400">{selectedOption.type}</span>
              </div>
            </div>
            <p className="text-lg sm:text-xl font-bold text-blue-500">
              ${selectedOption.price}
              <span className="text-xs sm:text-sm text-zinc-400">/package</span>
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
              {React.createElement(miniCardData[activeMiniCard].icon, { className: "w-4 h-4 text-blue-500" })}
              <span className="text-xs text-white">{miniCardData[activeMiniCard].text}</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Profile Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-3 sm:mt-4"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
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
          </motion.button>
          {/* Added this div to conditionally render the profile details */}
          {isProfileExpanded && (
            <div className="mt-2">
              <p className="text-xs text-zinc-400">Email: {profileMember.email}</p>
              <p className="text-xs text-zinc-400">Phone: {profileMember.phone}</p>
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  )
}

