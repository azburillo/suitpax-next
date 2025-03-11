"use client"

import { motion } from "framer-motion"
import { Mail, MessageSquare, Clock, HandIcon as HandPalm, Zap } from "lucide-react"
import { teamMembers } from "@/app/data/team-members"
import { Card } from "@/components/ui/card"

const AvatarGroup = ({ count, delay = 0 }: { count: number; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay }}
    className="flex items-center bg-white rounded-full px-4 py-2 shadow-lg"
  >
    <div className="flex -space-x-2">
      {teamMembers.slice(0, 3).map((member, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: delay + i * 0.1 }}
          className="relative w-8 h-8 rounded-full border-2 border-white overflow-hidden"
        >
          <img src={member.image || "/placeholder.svg"} alt={member.name} className="w-full h-full object-cover" />
        </motion.div>
      ))}
    </div>
    <span className="ml-2 text-gray-600">+{count}</span>
  </motion.div>
)

const WorkflowNode = ({
  icon: Icon,
  label,
  className = "",
}: {
  icon: any
  label: string
  className?: string
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className={`flex items-center gap-2 px-4 py-2 bg-[#E5EEF3] rounded-full text-gray-700 text-sm ${className}`}
  >
    <Icon className="w-4 h-4" />
    <span>{label}</span>
  </motion.div>
)

export function WorkflowBuilderCard() {
  return (
    <section className="w-full py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="inline-block px-8 py-3 rounded-full border-2 border-[#1B3B36] mb-12"
            >
              <span className="text-xl text-[#1B3B36]">Discover Journeys</span>
            </motion.div>
            <h2 className="text-4xl font-bold text-[#1B3B36] mb-6">Visual workflow builder</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Drag-and-drop interface to easily outline exactly how you want your automations to flow.
            </p>
          </motion.div>

          <Card className="bg-gray-50 p-8 rounded-xl shadow-xl relative">
            <div className="flex justify-center mb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-16 h-16 rounded-full bg-[#1B3B36] flex items-center justify-center"
              >
                <Zap className="w-8 h-8 text-white" />
              </motion.div>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#E5EEF3] -translate-x-1/2" />

              <div className="grid grid-cols-2 gap-24">
                {/* Left Branch */}
                <div className="space-y-8">
                  <WorkflowNode icon={Mail} label="Send Email" />
                  <AvatarGroup count={19} delay={0.2} />
                  <div className="border-2 border-dashed border-[#E5EEF3] h-12 rounded-lg" />
                  <WorkflowNode icon={Clock} label="Time Delay" />
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="bg-[#FFB84C] text-white px-3 py-1 rounded-full text-sm inline-block"
                  >
                    Sam D.
                  </motion.div>
                </div>

                {/* Right Branch */}
                <div className="space-y-8">
                  <WorkflowNode icon={MessageSquare} label="Send SMS" />
                  <AvatarGroup count={38} delay={0.4} />
                  <WorkflowNode icon={HandPalm} label="Wait Until Dismissed" />
                  <WorkflowNode icon={Mail} label="Send Email" />
                  <AvatarGroup count={4} delay={0.8} />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

