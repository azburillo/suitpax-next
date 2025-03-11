"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { MailIcon, ChatBubbleOvalLeftIcon, ClockIcon, HandIcon } from "@heroicons/react/24/outline"
import { teamMembers } from "@/app/data/team-members"

const AvatarGroup = ({ members, count }: { members: typeof teamMembers; count: number }) => (
  <div className="flex items-center">
    <div className="flex -space-x-2">
      {members.slice(0, 3).map((member, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1 }}
          className="relative w-8 h-8 rounded-full border-2 border-white overflow-hidden"
        >
          <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
        </motion.div>
      ))}
    </div>
    {count > 3 && (
      <motion.span
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="ml-2 text-sm text-gray-600"
      >
        +{count - 3}
      </motion.span>
    )}
  </div>
)

const WorkflowNode = ({
  icon: Icon,
  label,
  avatars,
  count,
  className = "",
}: {
  icon: any
  label: string
  avatars: typeof teamMembers
  count: number
  className?: string
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.02 }}
    className={`flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-lg ${className}`}
  >
    <div className="p-1 bg-[#93c572]/10 rounded-full">
      <Icon className="w-4 h-4 text-[#93c572]" />
    </div>
    <span className="text-sm text-gray-200">{label}</span>
    <AvatarGroup members={avatars} count={count} />
  </motion.div>
)

const ConnectingLine = ({ className = "" }: { className?: string }) => (
  <motion.div
    initial={{ height: 0 }}
    animate={{ height: "100%" }}
    transition={{ duration: 0.5 }}
    className={`absolute w-px bg-gradient-to-b from-[#93c572]/20 via-[#93c572]/10 to-transparent ${className}`}
  />
)

export function WorkflowBuilder() {
  return (
    <section className="min-h-screen bg-[#001F1B] py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(147,197,114,0.1),transparent_50%)]" />

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="inline-block px-8 py-3 rounded-full border-2 border-[#93c572] mb-12"
            >
              <span className="text-xl text-[#93c572]">Discover Journeys</span>
            </motion.div>
            <h2 className="text-4xl font-bold text-white mb-6">Visual workflow builder</h2>
            <p className="text-xl text-gray-400">
              Drag-and-drop interface to easily outline exactly how you want your automations to flow.
            </p>
          </motion.div>

          {/* Workflow Diagram */}
          <div className="relative">
            {/* First Branch */}
            <div className="flex justify-center mb-12">
              <WorkflowNode icon={MailIcon} label="Send Email" avatars={teamMembers.slice(0, 3)} count={19} />
            </div>

            <ConnectingLine className="left-1/2 transform -translate-x-1/2" />

            {/* Second Level */}
            <div className="grid grid-cols-2 gap-24 mb-12">
              <div className="flex flex-col items-center">
                <WorkflowNode icon={ClockIcon} label="Time Delay" avatars={teamMembers.slice(3, 6)} count={4} />
              </div>
              <div className="flex flex-col items-center">
                <WorkflowNode
                  icon={ChatBubbleOvalLeftIcon}
                  label="Send SMS"
                  avatars={teamMembers.slice(6, 9)}
                  count={38}
                />
              </div>
            </div>

            {/* Third Level */}
            <div className="grid grid-cols-2 gap-24">
              <div className="flex flex-col items-center">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="w-48 h-12 border-2 border-dashed border-[#93c572]/30 rounded-lg"
                />
              </div>
              <div className="flex flex-col items-center">
                <WorkflowNode
                  icon={HandIcon}
                  label="Wait Until Dismissed"
                  avatars={teamMembers.slice(9, 12)}
                  count={4}
                />
              </div>
            </div>

            {/* Final Level */}
            <div className="mt-12 flex justify-center">
              <WorkflowNode icon={MailIcon} label="Send Email" avatars={teamMembers.slice(12, 15)} count={4} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

