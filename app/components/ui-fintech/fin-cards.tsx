"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp, CreditCard, Calendar, Shield, ArrowUpRight, Bell } from "lucide-react"
import { teamMembers } from "@/app/data/team-members"
import { useIsMobile } from "@/app/hooks/useIsMobile"

const cardTypes = [
  {
    name: "Platinum",
    description: "Premium Card",
    price: "0",
    type: "Premium",
    limit: "25,000",
    image: "https://cdn.simpleicons.org/mastercard/ffffff",
  },
  {
    name: "Business",
    description: "Corporate Card",
    price: "15",
    type: "Business",
    limit: "50,000",
    image: "https://cdn.simpleicons.org/visa/ffffff",
  },
  {
    name: "Travel",
    description: "Rewards Card",
    price: "10",
    type: "Rewards",
    limit: "15,000",
    image: "https://cdn.simpleicons.org/americanexpress/ffffff",
  },
]

export function FinCards() {
  const [isProfileExpanded, setIsProfileExpanded] = useState(false)
  const [selectedCard, setSelectedCard] = useState(cardTypes[0])
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
      className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-b from-zinc-900 to-black p-4 sm:p-6"
    >
      {/* Ambient background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10" />
      <div className="absolute top-0 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-purple-500/20 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Header y título principal */}
        <div className="mb-8">
          <h2 className="text-xl font-medium tracking-tighter text-white mb-2">Card Management</h2>
          <p className="text-md font-light text-zinc-400">Manage your financial cards in one place</p>
        </div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex items-center justify-between mb-4 sm:mb-6"
        >
          <div className="flex items-center space-x-3 sm:space-x-4">
            <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
              <CreditCard className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-white">Payment Cards</h3>
              <p className="text-xs sm:text-sm text-zinc-400">Premium Selection</p>
            </div>
          </div>
          <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
            <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-400" />
          </button>
        </motion.div>

        {/* Card Selection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="grid grid-cols-3 gap-2 sm:gap-4 mb-4 sm:mb-6"
        >
          {cardTypes.map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-2 sm:p-4 rounded-xl bg-white/5 backdrop-blur-sm border cursor-pointer transition-all ${
                selectedCard.name === card.name
                  ? "border-blue-500 bg-blue-500/10"
                  : "border-white/10 hover:border-white/20"
              }`}
              onClick={() => setSelectedCard(card)}
            >
              <img
                src={card.image || "/placeholder.svg"}
                alt={card.name}
                className="w-6 h-6 sm:w-8 sm:h-8 mb-1 sm:mb-2"
              />
              <p className="text-xs sm:text-sm font-medium text-white">{card.name}</p>
              <p className="text-[10px] sm:text-xs text-zinc-400">{card.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Selected Card Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex-1 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 p-3 sm:p-4"
        >
          <div className="flex items-center justify-between mb-2 sm:mb-4">
            <h4 className="text-xs sm:text-sm font-medium text-zinc-400">Selected Card</h4>
            <span className="text-[10px] sm:text-xs bg-blue-500/20 text-blue-500 px-2 py-1 rounded-full">
              {selectedCard.type}
            </span>
          </div>
          <div className="space-y-1 sm:space-y-2">
            <p className="text-sm sm:text-lg font-semibold text-white">{selectedCard.name} Card</p>
            <div className="flex items-center justify-between text-[10px] sm:text-sm">
              <div className="flex items-center space-x-1 sm:space-x-2">
                <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-zinc-400" />
                <span className="text-zinc-400">Active</span>
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2">
                <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-zinc-400" />
                <span className="text-zinc-400">Limit: ${selectedCard.limit}</span>
              </div>
            </div>
            <p className="text-xl sm:text-2xl font-bold text-blue-500">
              ${selectedCard.price}
              <span className="text-xs sm:text-sm text-zinc-400">/month</span>
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
            className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-md rounded-lg p-2 sm:p-3 max-w-[150px] sm:max-w-[200px]"
          >
            <div className="flex items-center space-x-2">
              <Bell className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
              <div>
                <p className="text-xs sm:text-sm font-medium text-white">Transaction Alert</p>
                <p className="text-[10px] sm:text-xs text-zinc-400">$250 at Amazon</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

