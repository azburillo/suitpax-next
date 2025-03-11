"use client"

import { motion } from "framer-motion"
import { TeamInvitation } from "@/app/components/ui/team-invitation"

export function TeamInviteSoft() {
  return (
    <section className="py-20 bg-gradient-to-b from-emerald-50 to-white dark:from-emerald-950 dark:to-zinc-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-emerald-800 dark:text-emerald-200 tracking-tighter mb-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Join the Suitpax Team
        </motion.h2>
        <motion.p
          className="text-xl text-emerald-600 dark:text-emerald-300 tracking-tight mb-12 text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Collaborate seamlessly with our intuitive team invitation system
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <InvitationExample
            avatar="/team-avatars/avatar-1.png"
            name="Sarah Chen"
            role="UX Designer"
            team="Design Team"
            inviter="Alex"
            time="5 minutes ago"
          />
          <InvitationExample
            avatar="/team-avatars/avatar-2.png"
            name="John Doe"
            role="Software Engineer"
            team="Development Team"
            inviter="Emma"
            time="2 hours ago"
          />
          <InvitationExample
            avatar="/team-avatars/avatar-3.png"
            name="Maria Garcia"
            role="Product Manager"
            team="Product Team"
            inviter="David"
            time="1 day ago"
          />
          <InvitationExample
            avatar="/team-avatars/avatar-4.png"
            name="Raj Patel"
            role="Data Analyst"
            team="Analytics Team"
            inviter="Sophie"
            time="3 days ago"
          />
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <svg className="w-64 h-64 mx-auto mb-8" viewBox="0 0 200 200">
            <motion.path
              d="M100,20 C120,20 140,40 140,60 C140,80 120,100 100,100 C80,100 60,80 60,60 C60,40 80,20 100,20 Z"
              fill="none"
              stroke="#10b981"
              strokeWidth="4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <motion.circle
              cx="100"
              cy="60"
              r="40"
              fill="#10b981"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 2 }}
            />
          </svg>
          <p className="text-2xl font-semibold text-emerald-700 dark:text-emerald-300 tracking-tight">
            Join forces with the best in the industry
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function InvitationExample({ avatar, name, role, team, inviter, time }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
      <TeamInvitation avatar={avatar} name={name} role={role} team={team} inviter={inviter} time={time} />
    </motion.div>
  )
}

