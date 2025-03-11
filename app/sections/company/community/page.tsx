"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { BackgroundBeams } from "@/app/components/backgrounds/background-beams"
import { Button } from "@/app/components/ui/button"
import { Input } from "@/app/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/app/components/ui/avatar"
import { ArrowRight, Users, MessageSquare, Calendar, Globe } from "lucide-react"
import { teamMembers } from "@/app/data/team-members"

const communityFeatures = [
  {
    title: "Networking Hub",
    icon: Users,
    description: "Connect with travel professionals and industry experts worldwide.",
  },
  {
    title: "Knowledge Exchange",
    icon: MessageSquare,
    description: "Share insights, best practices, and learn from peers in the business travel community.",
  },
  {
    title: "Exclusive Events",
    icon: Calendar,
    description: "Access webinars, workshops, and conferences tailored for Suitpax users.",
  },
  {
    title: "Global Perspectives",
    icon: Globe,
    description: "Gain insights into regional travel trends and regulations from our diverse community.",
  },
]

export default function CommunityPage() {
  const [email, setEmail] = useState("")

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />
      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-emerald-700">
              Suitpax Community
            </span>
          </h1>
          <p className="text-xl text-emerald-200 max-w-2xl mx-auto">
            Join a thriving ecosystem of business travel professionals. Share, learn, and grow together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {communityFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-emerald-950/30 backdrop-blur-sm border-emerald-900">
                <CardHeader className="flex flex-row items-center space-x-4">
                  <feature.icon className="w-8 h-8 text-emerald-400" />
                  <CardTitle className="text-emerald-200 text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-emerald-100">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 bg-emerald-950/30 backdrop-blur-sm border border-emerald-900 rounded-lg p-8 max-w-2xl mx-auto"
        >
          <h2 className="text-2xl font-bold mb-4 text-emerald-400">Join Our Community</h2>
          <p className="text-emerald-200 mb-6">
            Be part of the conversation and stay updated on the latest in business travel innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-emerald-950/50 border-emerald-800 text-emerald-100 placeholder:text-emerald-500"
            />
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-black font-semibold">
              Join Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-bold mb-4 text-emerald-400">Community Leaders</h2>
          <div className="flex justify-center space-x-4">
            {teamMembers.slice(0, 4).map((member, index) => (
              <Avatar key={index} className="w-16 h-16 border-2 border-emerald-600">
                <AvatarImage src={member.image} alt={member.name} />
                <AvatarFallback className="bg-emerald-950 text-emerald-400">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

