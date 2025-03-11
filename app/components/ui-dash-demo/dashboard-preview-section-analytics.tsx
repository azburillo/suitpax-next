"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronDown, ChevronUp, TrendingUp, LineChart, PieChart } from "lucide-react"
import { teamMembers } from "@/app/data/team-members"
import { useIsMobile } from "@/app/hooks/useIsMobile"

export function DashboardPreviewSectionAnalytics() {
  const [isProfileExpanded, setIsProfileExpanded] = useState(false)
  const profileMember = teamMembers[0]
  const isMobile = useIsMobile()
  const [showMiniCard, setShowMiniCard] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowMiniCard(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-b from-zinc-900 to-black p-6 sm:p-8"
    >
      {/* Ambient background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-emerald-500/10" />
      <div className="absolute top-0 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-purple-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-emerald-500/20 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Header y título principal */}
        <div className="mb-4 sm:mb-6 md:mb-8">
          <h2 className="text-lg sm:text-xl md:text-2xl font-medium tracking-tighter text-white mb-1 sm:mb-2">
            Real-time Analytics Dashboard
          </h2>
          <p className="text-xs sm:text-sm md:text-base font-light text-zinc-400">
            Track your business performance with powerful analytics and insights
          </p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4 md:mb-6">
          {[
            { metric: "Revenue", value: "$128,450", change: "+12.5%", icon: TrendingUp },
            { metric: "Users", value: "2,854", change: "+8.2%", icon: LineChart },
            { metric: "Conversion", value: "3.2%", change: "+1.5%", icon: PieChart },
          ].map((kpi, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-2 sm:p-3 md:p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-colors"
            >
              <div className="flex items-center justify-between mb-1 sm:mb-2">
                <span className="text-[10px] sm:text-xs md:text-sm text-zinc-400">{kpi.metric}</span>
                <kpi.icon className="w-3 h-3 sm:w-4 sm:h-4 text-purple-500" />
              </div>
              <div className="flex items-baseline space-x-1 sm:space-x-2">
                <span className="text-sm sm:text-base md:text-lg font-semibold text-white">{kpi.value}</span>
                <span className="text-[10px] sm:text-xs md:text-sm text-emerald-500">{kpi.change}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trend Analysis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex-1 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 p-2 sm:p-3 md:p-4"
        >
          <div className="flex items-center justify-between mb-2 sm:mb-3 md:mb-4">
            <h4 className="text-xs sm:text-sm font-medium text-zinc-400">Performance Trends</h4>
            <button className="text-[10px] sm:text-xs text-purple-500 hover:text-purple-400">View Details</button>
          </div>
          <div className="space-y-2 sm:space-y-3 md:space-y-4">
            {[
              { metric: "User Growth", current: "15,234", target: "20,000", progress: 76 },
              { metric: "Revenue Target", current: "$89,450", target: "$100,000", progress: 89 },
              { metric: "Customer Satisfaction", current: "4.5", target: "5.0", progress: 90 },
            ].map((trend, i) => (
              <div key={i} className="space-y-1 sm:space-y-2">
                <div className="flex justify-between items-center">
                  <p className="text-[10px] sm:text-xs md:text-sm text-white">{trend.metric}</p>
                  <span className="text-[8px] sm:text-[10px] md:text-xs text-zinc-400">
                    {trend.current} / {trend.target}
                  </span>
                </div>
                <div className="h-1 sm:h-1.5 md:h-2 rounded-full bg-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${trend.progress}%` }}
                    transition={{ duration: 1, delay: 0.5 + i * 0.2 }}
                    className="h-full rounded-full bg-gradient-to-r from-purple-500 to-emerald-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Profile Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
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
        </motion.div>

        {/* Mini-card */}
        {showMiniCard && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-purple-500/90 text-white p-1.5 sm:p-2 rounded-lg text-[10px] sm:text-xs"
          >
            New insight available!
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

