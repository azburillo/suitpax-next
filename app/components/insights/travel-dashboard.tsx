"use client"

import {
  LayoutDashboard,
  Plane,
  Users,
  FileText,
  MessageSquare,
  ChevronRight,
  TrendingUp,
  DollarSign,
} from "lucide-react"

export function TravelDashboard() {
  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden shadow-lg">
        <div className="flex">
          <div className="w-64 border-r border-white/10 p-4">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 rounded bg-blue-500" />
              <span className="text-white font-semibold">SuitPax</span>
            </div>

            {[
              { icon: LayoutDashboard, label: "Dashboard", active: true },
              { icon: Plane, label: "Flights" },
              { icon: Users, label: "Team" },
              { icon: FileText, label: "Documents" },
              { icon: MessageSquare, label: "Support" },
            ].map((item, i) => (
              <div
                key={i}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg mb-1 ${
                  item.active ? "bg-blue-500/20 text-blue-400" : "text-white/60 hover:bg-white/5"
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
                {item.active && (
                  <div className="relative ml-auto">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex-1 p-6">
            <h2 className="text-2xl font-bold text-white mb-6">Travel Overview</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-lg p-4 backdrop-blur-sm">
                <div className="flex justify-between items-center mb-2">
                  <div className="text-white/60 text-sm">Active Trips</div>
                  <Plane className="w-5 h-5 text-blue-400" />
                </div>
                <div className="text-3xl font-semibold text-white">24</div>
                <div className="text-sm text-green-400 mt-2 flex items-center gap-1">
                  <TrendingUp className="w-4 h-4" /> 12% increase
                </div>
              </div>
              <div className="bg-white/5 rounded-lg p-4 backdrop-blur-sm">
                <div className="flex justify-between items-center mb-2">
                  <div className="text-white/60 text-sm">Total Savings</div>
                  <DollarSign className="w-5 h-5 text-green-400" />
                </div>
                <div className="text-3xl font-semibold text-white">$12,450</div>
                <div className="text-sm text-green-400 mt-2 flex items-center gap-1">
                  <TrendingUp className="w-4 h-4" /> 8% increase
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

