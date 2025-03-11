"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { BackgroundBeams } from "@/app/components/backgrounds/background-beams"
import { teamMembers } from "@/app/data/team-members"

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <BackgroundBeams className="absolute inset-0" />
      <div className="relative z-10 container mx-auto px-4 py-16">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-emerald-700">
            About Suitpax
          </h1>
          <p className="text-lg text-emerald-200 max-w-2xl mx-auto">
            Empowering businesses with intelligent travel solutions and seamless experiences
          </p>
        </motion.div>

        <motion.section
          className="mb-16 bg-emerald-950/30 rounded-2xl p-8 backdrop-blur-sm border border-emerald-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-emerald-400">Our Mission</h2>
          <p className="text-lg text-emerald-100">
            At Suitpax, we're on a mission to revolutionize the travel industry through innovative AI-powered solutions.
            We strive to make travel operations more efficient, seamless, and intelligent for businesses and travelers
            alike.
          </p>
        </motion.section>

        <motion.section
          className="mb-16 bg-emerald-950/30 rounded-2xl p-8 backdrop-blur-sm border border-emerald-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-emerald-400">Our Vision</h2>
          <p className="text-lg text-emerald-100">
            We envision a future where travel is effortless, personalized, and sustainable. Through cutting-edge
            technology and data-driven insights, we aim to transform every aspect of the travel experience.
          </p>
        </motion.section>

        <motion.section
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-emerald-400">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                className="bg-emerald-950/30 backdrop-blur-sm border border-emerald-900 rounded-2xl p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-emerald-200">{member.name}</h3>
                <p className="text-emerald-400">{member.position}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="bg-emerald-950/30 rounded-2xl p-8 backdrop-blur-sm border border-emerald-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-emerald-400">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Innovation",
                description: "We constantly push the boundaries of what's possible in travel technology.",
              },
              {
                title: "Customer-Centric",
                description:
                  "Our solutions are designed with the end-user in mind, prioritizing their needs and experiences.",
              },
              {
                title: "Sustainability",
                description: "We're committed to developing eco-friendly travel solutions for a better future.",
              },
              {
                title: "Collaboration",
                description:
                  "We believe in the power of teamwork and partnerships to drive industry-wide improvements.",
              },
              {
                title: "Integrity",
                description: "We uphold the highest standards of honesty and transparency in all our operations.",
              },
            ].map((value, index) => (
              <div key={value.title} className="border border-emerald-900 rounded-xl p-6 bg-emerald-950/50">
                <h3 className="text-xl font-semibold mb-2 text-emerald-400">{value.title}</h3>
                <p className="text-emerald-100">{value.description}</p>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  )
}

