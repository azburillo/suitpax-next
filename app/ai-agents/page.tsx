"use client"

import { motion } from "framer-motion"
import { teamMembers } from "./app/data/team-members"
import { Button } from "./app/components/ui/button"
import { Badge } from "./app/components/ui/badge"
import { ArrowRight } from "lucide-react"
import { InteractiveGlobe } from "@/components/ui/interactive-globe"

export default function AIAgentsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-950 via-teal-950 to-black">
      <div className="relative isolate">
        {/* Background gradient */}
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-emerald-950 via-teal-950 to-black opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>

        {/* Content */}
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
          <motion.div
            className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mt-24 sm:mt-32 lg:mt-16">
              <a href="#" className="inline-flex space-x-6">
                <span className="rounded-full bg-teal-500/10 px-3 py-1 text-sm font-medium text-teal-400 ring-1 ring-inset ring-teal-500/20">
                  AI Agents
                </span>
                <span className="inline-flex items-center space-x-2 text-sm font-medium text-gray-300">
                  <span>Next-gen travel industry</span>
                </span>
              </a>
            </div>
            <h1 className="mt-10 text-4xl font-medium tracking-tight text-white sm:text-6xl">
              AI Agents for the future of travel
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Empower your travel experience with our cutting-edge AI agents. Transform the way you plan, book, and
              manage your journeys with intelligent, personalized assistance.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Button className="bg-teal-600 text-white hover:bg-teal-500">
                Get started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <a href="#" className="text-sm font-medium leading-6 text-gray-300">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Team members section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Meet our AI Agents</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Our team of advanced AI agents is ready to revolutionize your travel experience.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
            {teamMembers.slice(0, 3).map((member, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg shadow-lg p-6 flex flex-col items-center space-y-4 hover:bg-white/20 transition-all duration-300"
              >
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover"
                />
                <div className="text-center">
                  <h3 className="text-xl font-semibold tracking-tight text-white">{member.name}</h3>
                  <p className="text-sm text-gray-300">{member.designation}</p>
                  <Badge variant="outline" className="mt-2 text-xs tracking-wide">
                    {member.badge}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Globe section */}
      <div className="relative h-[600px] overflow-hidden">
        <InteractiveGlobe showHeatmap={true} />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Global Reach, Local Expertise</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI agents leverage data from around the world to provide you with the best travel recommendations and
              insights, no matter where your journey takes you.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

