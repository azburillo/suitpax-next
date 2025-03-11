"use client"

import { motion } from "framer-motion"
import { Calendar, Mail, Map, FileText, BarChart, Settings } from "lucide-react"

export function IntegrationHub() {
  const apps = [
    { name: "Calendar", icon: Calendar },
    { name: "Email", icon: Mail },
    { name: "Maps", icon: Map },
    { name: "Documents", icon: FileText },
    { name: "Analytics", icon: BarChart },
    { name: "Settings", icon: Settings },
  ]

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl rounded-2xl p-8 border border-white/10 text-center shadow-lg">
        <h2 className="text-4xl font-bold text-white mb-4">Connect your travel tools</h2>
        <p className="text-lg text-white/60 mb-12 max-w-2xl mx-auto">
          SuitPax seamlessly integrates with your favorite tools, providing a centralized hub for all your travel needs
        </p>

        <motion.div
          className="grid grid-cols-3 gap-4 max-w-lg mx-auto"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {apps.map((app, i) => (
            <div
              key={i}
              className="aspect-square bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 p-4 flex flex-col items-center justify-center gap-2 hover:bg-white/10 transition-colors"
            >
              <app.icon className="w-10 h-10 text-blue-400" />
              <span className="text-sm text-white/80">{app.name}</span>
            </div>
          ))}
        </motion.div>

        <div className="mt-12 space-y-4">
          {[
            { title: "One-time Setup", desc: "Quick and easy configuration" },
            { title: "Real-time Sync", desc: "Always up-to-date information" },
            { title: "Secure Integration", desc: "Your data is protected" },
          ].map((item, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-sm rounded-lg p-4 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                <Settings className="w-6 h-6 text-blue-400" />
              </div>
              <div className="text-left">
                <div className="text-white font-medium">{item.title}</div>
                <div className="text-white/60 text-sm">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

