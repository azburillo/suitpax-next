"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { teamMembers } from "@/app/data/team-members"

export function TeamAvatars() {
  // Take just the first 5 team members
  const displayedMembers = teamMembers.slice(0, 5)

  return (
    <div className="flex flex-col items-center">
      <div className="flex -space-x-2 overflow-hidden">
        {displayedMembers.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
            className="relative inline-block ring-2 ring-white rounded-full shadow-md hover:scale-110 transition-transform"
          >
            <Image
              src={member.image || "/placeholder.svg"}
              alt={member.name}
              width={24}
              height={24}
              className="h-6 w-6 rounded-full object-cover"
              title={member.name}
            />
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.3 }}
        className="mt-1 text-[9px] font-medium bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full shadow-sm"
      >
        Launching soon!
      </motion.div>
    </div>
  )
}

