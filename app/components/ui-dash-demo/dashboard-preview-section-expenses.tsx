"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronDown, ChevronUp, DollarSign, Receipt, CreditCard, ArrowUpRight } from "lucide-react"
import { teamMembers } from "@/app/data/team-members"
import { useIsMobile } from "@/app/hooks/useIsMobile"

export function DashboardPreviewSectionExpenses() {
  const [isProfileExpanded, setIsProfileExpanded] = useState(false)
  const profileMember = teamMembers[1]
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
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-blue-500/10" />
      <div className="absolute top-0 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-emerald-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/20 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Header y título principal */}
        <div className="mb-6 sm:mb-8 md:mb-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tighter text-white mb-2 sm:mb-3">
            Smart Expense Management
          </h2>
          <p className="text-sm sm:text-base md:text-lg font-light text-zinc-400">
            Streamline your expense tracking and approval process effortlessly
          </p>
        </div>

        {/* Header */}
        <div className="flex items-center justify-between mb-4 sm:mb-5 md:mb-6">
          <div className="flex items-center space-x-3 sm:space-x-4 md:space-x-5">
            <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center">
              <Receipt className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white">Expense Tracker</h3>
              <p className="text-sm sm:text-base text-zinc-400">February 2025</p>
            </div>
          </div>
          <button className="p-2 sm:p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
            <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-zinc-400" />
          </button>
        </div>

        {/* Expense Summary */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-5 mb-4 sm:mb-5 md:mb-6">
          {[
            { label: "Total Expenses", value: "$3,450", icon: DollarSign },
            { label: "Pending Approvals", value: "5", icon: CreditCard },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-3 sm:p-4 md:p-5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-colors"
            >
              <div className="flex items-center justify-between mb-2 sm:mb-3">
                <span className="text-sm sm:text-base text-zinc-400">{stat.label}</span>
                <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500" />
              </div>
              <div className="text-base sm:text-lg md:text-xl font-semibold text-white">{stat.value}</div>
            </motion.div>
          ))}
        </div>

        {/* Recent Expenses */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex-1 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 p-3 sm:p-4 md:p-5 overflow-hidden"
        >
          <div className="flex items-center justify-between mb-3 sm:mb-4 md:mb-5">
            <h4 className="text-sm sm:text-base font-medium text-zinc-400">Recent Expenses</h4>
            <button className="text-sm sm:text-base text-emerald-500 hover:text-emerald-400">View All</button>
          </div>
          <div className="space-y-3 sm:space-y-4 overflow-y-auto max-h-[calc(100%-3rem)]">
            {[
              { category: "Office Supplies", amount: "$250.00", date: "2025-03-15", status: "Approved" },
              { category: "Client Dinner", amount: "$180.50", date: "2025-03-14", status: "Pending" },
              { category: "Software License", amount: "$599.00", date: "2025-03-13", status: "Approved" },
            ].map((expense, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                className="flex items-center justify-between p-3 sm:p-4 rounded-md sm:rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              >
                <div>
                  <p className="text-sm sm:text-base font-medium text-white">{expense.category}</p>
                  <p className="text-xs sm:text-sm text-zinc-400">{expense.date}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm sm:text-base font-medium text-white">{expense.amount}</p>
                  <p
                    className={`text-xs sm:text-sm ${expense.status === "Approved" ? "text-emerald-500" : "text-yellow-500"}`}
                  >
                    {expense.status}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Profile Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-4 sm:mt-5"
        >
          <button
            onClick={() => setIsProfileExpanded(!isProfileExpanded)}
            className="w-full p-3 sm:p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors flex items-center space-x-3 sm:space-x-4"
          >
            <img
              src={profileMember.image || "/placeholder.svg"}
              alt={profileMember.name}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-md sm:rounded-lg object-cover"
            />
            <div className="flex-1 text-left">
              <p className="text-sm sm:text-base font-medium text-white">{profileMember.name}</p>
              <p className="text-xs sm:text-sm text-zinc-400">{profileMember.designation}</p>
            </div>
            {isProfileExpanded ? (
              <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-400" />
            ) : (
              <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-400" />
            )}
          </button>
          {isProfileExpanded && (
            <div className="mt-3 sm:mt-4">
              <p className="text-xs sm:text-sm text-zinc-300">Email: {profileMember.email}</p>
              <p className="text-xs sm:text-sm text-zinc-300">Phone: {profileMember.phone}</p>
            </div>
          )}
        </motion.div>

        {/* Mini-card */}
        {showMiniCard && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute top-4 right-4 sm:top-5 sm:right-5 bg-emerald-500/90 text-white p-2 sm:p-3 rounded-xl text-sm sm:text-base"
          >
            New expense added!
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

