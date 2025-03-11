"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp, MapPin, ArrowUpRight, Briefcase, Plane, Users } from "lucide-react"
import { teamMembers } from "@/app/data/team-members"
import { useIsMobile } from "@/app/hooks/useIsMobile"

const membershipPlans = [
  {
    name: "Silver",
    price: "99",
    type: "Basic",
    lounges: "50+",
    image: "https://cdn.simpleicons.org/simpleicons/silver",
  },
  {
    name: "Gold",
    price: "199",
    type: "Premium",
    lounges: "100+",
    image: "https://cdn.simpleicons.org/simpleicons/gold",
  },
  {
    name: "Platinum",
    price: "299",
    type: "Elite",
    lounges: "150+",
    image: "https://cdn.simpleicons.org/simpleicons/platinum",
  },
]

export function DashVIPLounge() {
  const [isProfileExpanded, setIsProfileExpanded] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState(membershipPlans[0])
  const [showMiniCard, setShowMiniCard] = useState(false)
  const [showMembershipCard, setShowMembershipCard] = useState(false)
  const profileMember = teamMembers[1]
  const isMobile = useIsMobile()

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowMiniCard(true)
      setTimeout(() => setShowMiniCard(false), 4000)
    }, 2000)

    const timer2 = setTimeout(() => {
      setShowMembershipCard(true)
      setTimeout(() => setShowMembershipCard(false), 4000)
    }, 6000)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-b from-gray-900/80 to-gray-900/20 backdrop-blur-xl p-3 sm:p-4 md:p-6 border border-gray-800"
    >
      {/* Ambient background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-50" />
      <div className="absolute top-0 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-purple-500/20 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Header y título principal */}
        <div className="mb-4 sm:mb-6 md:mb-8">
          <h2 className="text-lg sm:text-xl md:text-2xl font-medium tracking-tighter text-white mb-1 sm:mb-2">
            VIP Lounge Membership
          </h2>
          <p className="text-xs sm:text-sm md:text-base font-light text-gray-300">
            Choose your exclusive access to premium airport lounges
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
            <div className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 rounded-lg md:rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <Briefcase className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white">Membership</h3>
              <p className="text-[10px] sm:text-xs md:text-sm text-gray-300">VIP Access</p>
            </div>
          </div>
          <button className="p-1 sm:p-2 rounded-md sm:rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
            <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-gray-300" />
          </button>
        </motion.div>

        {/* Membership Selection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="relative grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4 md:mb-6"
        >
          {membershipPlans.map((plan, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-2 sm:p-3 md:p-4 rounded-lg md:rounded-xl bg-white/5 backdrop-blur-sm border cursor-pointer transition-all ${
                selectedPlan.name === plan.name
                  ? "border-purple-500 bg-purple-500/10"
                  : "border-gray-700 hover:border-gray-600"
              }`}
              onClick={() => setSelectedPlan(plan)}
            >
              <img
                src={plan.image || "/placeholder.svg"}
                alt={plan.name}
                className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 mb-1 sm:mb-2"
              />
              <p className="text-[10px] sm:text-xs md:text-sm font-medium text-white">{plan.name}</p>
              <p className="text-[8px] sm:text-[10px] md:text-xs text-gray-400">{plan.type}</p>
            </motion.div>
          ))}

          {/* New Membership Mini-card */}
          <AnimatePresence>
            {showMembershipCard && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md rounded-lg p-2 max-w-[200px]"
              >
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-purple-400" />
                  <div>
                    <p className="text-xs font-medium text-white">Members</p>
                    <p className="text-[10px] text-gray-300">Growing fast!</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Selected Membership Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex-1 rounded-lg md:rounded-xl bg-white/5 backdrop-blur-sm border border-gray-700 p-2 sm:p-3 md:p-4"
        >
          <div className="flex items-center justify-between mb-1 sm:mb-2 md:mb-4">
            <h4 className="text-[10px] sm:text-xs md:text-sm font-medium text-gray-300">Selected Membership</h4>
            <span className="text-[8px] sm:text-[10px] md:text-xs bg-purple-500/20 text-purple-300 px-1 sm:px-2 py-0.5 sm:py-1 rounded-full">
              {selectedPlan.type}
            </span>
          </div>
          <div className="space-y-1 sm:space-y-2">
            <p className="text-xs sm:text-sm md:text-base font-semibold text-white">{selectedPlan.name} Membership</p>
            <div className="flex items-center justify-between text-[8px] sm:text-[10px] md:text-xs">
              <div className="flex items-center space-x-1 sm:space-x-2">
                <Users className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 text-gray-400" />
                <span className="text-gray-300">Access for 2</span>
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2">
                <MapPin className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 text-gray-400" />
                <span className="text-gray-300">Lounges: {selectedPlan.lounges}</span>
              </div>
            </div>
            <p className="text-sm sm:text-base md:text-lg font-bold text-purple-400">
              ${selectedPlan.price}
              <span className="text-[8px] sm:text-[10px] md:text-xs text-gray-400">/year</span>
            </p>
          </div>
        </motion.div>

        {/* Profile Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="relative mt-2 sm:mt-3 md:mt-4"
        >
          <button
            onClick={() => setIsProfileExpanded(!isProfileExpanded)}
            className="w-full p-2 sm:p-3 rounded-lg md:rounded-xl bg-white/5 backdrop-blur-sm border border-gray-700 hover:bg-white/10 transition-colors flex items-center space-x-2 sm:space-x-3"
          >
            <img
              src={profileMember.image || "/placeholder.svg"}
              alt={profileMember.name}
              className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-md md:rounded-lg object-cover"
            />
            <div className="flex-1 text-left">
              <p className="text-[10px] sm:text-xs md:text-sm font-medium text-white">{profileMember.name}</p>
              <p className="text-[8px] sm:text-[10px] md:text-xs text-gray-400">{profileMember.designation}</p>
            </div>
            {isProfileExpanded ? (
              <ChevronUp className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
            ) : (
              <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
            )}
          </button>
          <AnimatePresence>
            {isProfileExpanded && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
                className="mt-1 sm:mt-2 md:mt-3"
              >
                <p className="text-[8px] sm:text-[10px] md:text-xs text-gray-300">{profileMember.bio}</p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Existing Mini-card */}
          <AnimatePresence>
            {showMiniCard && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className="absolute -top-12 right-0 bg-white/10 backdrop-blur-md rounded-lg p-2 max-w-[150px] sm:max-w-[200px]"
              >
                <div className="flex items-center space-x-2">
                  <Plane className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
                  <div>
                    <p className="text-xs font-medium text-white">Next Flight</p>
                    <p className="text-[10px] text-gray-300">In 3 days</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  )
}

