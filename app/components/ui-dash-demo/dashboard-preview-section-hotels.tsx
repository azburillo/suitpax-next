"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, Building2, Star, Calendar, ArrowUpRight } from "lucide-react"
import { teamMembers } from "@/app/data/team-members"

export function DashboardPreviewSectionHotels() {
  const [isProfileExpanded, setIsProfileExpanded] = useState(false)
  const profileMember = teamMembers[2]

  return (
    <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-b from-zinc-900 to-black p-6 sm:p-8">
      {/* Ambient background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10" />
      <div className="absolute top-0 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-purple-500/20 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Header y título principal */}
        <div className="mb-4 sm:mb-6 md:mb-8">
          <h2 className="text-lg sm:text-xl md:text-2xl font-medium tracking-tighter text-white mb-1 sm:mb-2">
            Hotel Booking Dashboard
          </h2>
          <p className="text-sm sm:text-base md:text-lg font-light text-zinc-400">
            Manage reservations and optimize your hotel operations seamlessly
          </p>
        </div>

        {/* Header */}
        <div className="flex items-center justify-between mb-4 sm:mb-6 md:mb-8">
          <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
            <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
              <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white">Hotel Bookings</h3>
              <p className="text-xs sm:text-sm text-zinc-400">Luxury Stays</p>
            </div>
          </div>
          <button className="p-1.5 sm:p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
            <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-400" />
          </button>
        </div>

        {/* Hotel Stats */}
        <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-5 md:mb-6">
          {[
            { label: "Upcoming Stays", value: "3", icon: Calendar },
            { label: "Loyalty Points", value: "12,500", icon: Star },
            { label: "Average Daily Rate", value: "$250", icon: Building2 },
            { label: "Occupancy Rate", value: "85%", icon: Building2 },
          ].map((stat, i) => (
            <div
              key={i}
              className="p-2 sm:p-3 md:p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-colors"
            >
              <div className="flex items-center justify-between mb-1 sm:mb-2">
                <span className="text-sm sm:text-base text-zinc-400">{stat.label}</span>
                <stat.icon className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500" />
              </div>
              <div className="text-sm sm:text-base md:text-lg font-semibold text-white">{stat.value}</div>
            </div>
          ))}
        </div>

        {/* Recent Bookings */}
        <div className="flex-1 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 p-2 sm:p-3 md:p-4 overflow-hidden">
          <div className="flex items-center justify-between mb-2 sm:mb-3 md:mb-4">
            <h4 className="text-sm sm:text-base font-medium text-zinc-400">Recent Bookings</h4>
            <button className="text-sm sm:text-base text-blue-500 hover:text-blue-400">View All</button>
          </div>
          <div className="space-y-2 sm:space-y-3 overflow-y-auto max-h-[calc(100%-2rem)]">
            {[
              { hotel: "Four Seasons", location: "Paris", dates: "2025-04-15", rate: "$850/night" },
              { hotel: "Ritz Carlton", location: "New York", dates: "2025-05-02", rate: "$720/night" },
              { hotel: "Mandarin Oriental", location: "Tokyo", dates: "2025-06-10", rate: "$950/night" },
            ].map((booking, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-2 sm:p-3 rounded-md sm:rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              >
                <div>
                  <p className="text-sm sm:text-base font-medium text-white">{booking.hotel}</p>
                  <p className="text-xs sm:text-sm text-zinc-400">
                    {booking.location} - {booking.dates}
                  </p>
                </div>
                <p className="text-sm sm:text-base font-medium text-blue-500">{booking.rate}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Profile Section */}
        <div className="mt-3 sm:mt-4">
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
              <p className="text-sm sm:text-base font-medium text-white">{profileMember.name}</p>
              <p className="text-xs sm:text-sm text-zinc-400">{profileMember.designation}</p>
            </div>
            {isProfileExpanded ? (
              <ChevronUp className="w-4 h-4 text-zinc-400" />
            ) : (
              <ChevronDown className="w-4 h-4 text-zinc-400" />
            )}
          </button>
          {isProfileExpanded && (
            <div className="mt-2 sm:mt-3 p-2 sm:p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <p className="text-xs sm:text-sm text-zinc-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec enim nec eros consectetur ultricies.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

