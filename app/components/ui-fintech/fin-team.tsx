"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/app/components/ui/card"
import { MessageSquare, Users, TrendingUp } from "lucide-react"
import { teamMembers } from "@/app/data/team-members"
import { BarLoader } from "@/app/components/ui/bar-loader"

export function FinTeam() {
  return (
    <Card className="relative overflow-hidden border-none bg-gradient-to-b from-neutral-900 to-neutral-800">
      <CardContent className="p-8">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="absolute inset-0 flex items-center justify-center bg-neutral-900 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <div className="relative z-10 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-2">Our Dynamic Team</h2>
            <p className="text-gray-400">Driving innovation in fintech</p>
          </motion.div>

          <div className="flex justify-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="relative"
            >
              {/* Central avatar */}
              <div className="h-40 w-40 rounded-full overflow-hidden border-4 border-white/10">
                <img
                  src={teamMembers[0].image || "/placeholder.svg"}
                  alt={teamMembers[0].name}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Orbiting avatars */}
              {teamMembers.slice(1, 6).map((member, index) => (
                <motion.div
                  key={index}
                  className="absolute h-20 w-20 rounded-full overflow-hidden border-2 border-white/10"
                  style={{
                    top: `${50 + 45 * Math.sin((index * (2 * Math.PI)) / 5)}%`,
                    left: `${50 + 45 * Math.cos((index * (2 * Math.PI)) / 5)}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
                >
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="h-full w-full object-cover"
                  />
                </motion.div>
              ))}

              {/* Chat icon */}
              <motion.div
                className="absolute top-0 right-0 h-12 w-12 rounded-full bg-yellow-500 flex items-center justify-center"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1, duration: 0.3 }}
              >
                <MessageSquare className="h-6 w-6 text-black" />
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="grid grid-cols-2 gap-4 text-white"
          >
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5" />
              <span>20+ Team Members</span>
            </div>
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5" />
              <span>150% YoY Growth</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.5 }}
          >
            <p className="text-sm text-gray-400 mb-2">Team Productivity</p>
            <BarLoader progress={85} />
          </motion.div>
        </div>

        {/* Glowing effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 blur-3xl" />
      </CardContent>
    </Card>
  )
}

