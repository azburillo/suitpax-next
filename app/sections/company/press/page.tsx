"use client"

import { motion } from "framer-motion"
import { BackgroundBeams } from "@/app/components/backgrounds/background-beams"
import { ArrowDownToLine, Newspaper, Radio } from "lucide-react"

const pressReleases = [
  {
    title: "Suitpax Launches Revolutionary AI-Powered Travel Assistant",
    date: "2025-02-15",
    summary:
      "Suitpax introduces a game-changing AI travel assistant, revolutionizing the way business travelers plan and manage their trips.",
  },
  {
    title: "Suitpax Secures $50M in Series B Funding",
    date: "2024-11-30",
    summary:
      "Leading travel tech startup Suitpax announces a successful Series B funding round, accelerating global expansion plans.",
  },
  {
    title: "Suitpax Partners with Major Airlines for Seamless Integration",
    date: "2024-09-01",
    summary:
      "Suitpax forms strategic partnerships with top airlines, enhancing its flight booking and management capabilities.",
  },
]

const mediaFeatures = [
  {
    outlet: "TechCrunch",
    title: "Suitpax: The Future of Business Travel Management",
    date: "2025-01-10",
    link: "#",
  },
  {
    outlet: "Forbes",
    title: "How Suitpax is Disrupting the Corporate Travel Industry",
    date: "2024-12-05",
    link: "#",
  },
  {
    outlet: "The Wall Street Journal",
    title: "Suitpax's AI-Driven Approach to Streamlining Business Travel",
    date: "2024-10-22",
    link: "#",
  },
]

export default function PressPage() {
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
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
              Suitpax Press Room
            </span>
          </h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Stay up to date with the latest news, announcements, and media coverage about Suitpax.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-blue-400 flex items-center">
              <Newspaper className="mr-2" /> Press Releases
            </h2>
            {pressReleases.map((release, index) => (
              <div key={index} className="mb-6 bg-blue-950/30 backdrop-blur-sm border border-blue-900 rounded-lg p-4">
                <h3 className="text-xl font-semibold text-blue-300 mb-2">{release.title}</h3>
                <p className="text-sm text-blue-200 mb-2">{release.date}</p>
                <p className="text-blue-100">{release.summary}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-blue-400 flex items-center">
              <Radio className="mr-2" /> Media Features
            </h2>
            {mediaFeatures.map((feature, index) => (
              <div key={index} className="mb-6 bg-blue-950/30 backdrop-blur-sm border border-blue-900 rounded-lg p-4">
                <h3 className="text-xl font-semibold text-blue-300 mb-2">{feature.title}</h3>
                <p className="text-sm text-blue-200 mb-2">
                  {feature.outlet} - {feature.date}
                </p>
                <a href={feature.link} className="text-blue-400 hover:text-blue-300 transition duration-300">
                  Read Article
                </a>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-4 text-blue-400">Press Kit</h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto mb-8">
            Download our press kit for logos, executive bios, and additional information about Suitpax.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 flex items-center mx-auto">
            <ArrowDownToLine className="mr-2" /> Download Press Kit
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-bold mb-4 text-blue-400">Media Inquiries</h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto mb-8">
            For press inquiries, please contact our media relations team.
          </p>
          <a href="mailto:press@suitpax.com" className="text-blue-400 hover:text-blue-300 transition duration-300">
            press@suitpax.com
          </a>
        </motion.div>
      </div>
    </div>
  )
}

