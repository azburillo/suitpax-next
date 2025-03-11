"use client"

import { motion } from "framer-motion"
import { Menu, Share2, Bookmark, MoreVertical, ChevronDown } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const StatusTag = ({ children, color }: { children: React.ReactNode; color: string }) => (
  <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${color}`}>{children}</span>
)

const ProgressBar = ({ progress }: { progress: number }) => (
  <div className="h-1 w-full bg-gray-800 rounded-full overflow-hidden">
    <motion.div
      className="h-full bg-blue-500"
      initial={{ width: 0 }}
      animate={{ width: `${progress}%` }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    />
  </div>
)

export function LinearProject() {
  return (
    <div className="min-h-screen bg-[#000000] text-white">
      {/* Mobile Status Bar */}
      <div className="flex justify-between items-center px-4 py-2 bg-gray-900">
        <div className="text-sm">6:24</div>
        <div className="flex items-center space-x-2">
          <div className="w-6 h-4 bg-green-500 rounded text-xs flex items-center justify-center text-black">62</div>
          <div className="text-xs">▲</div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="flex items-center justify-between px-4 py-3 bg-gray-900/50 backdrop-blur-md">
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-800 rounded-full">
            <Menu className="w-5 h-5" />
          </button>
          <ChevronDown className="w-5 h-5" />
          <button className="p-2 hover:bg-gray-800 rounded-full">
            <Menu className="w-5 h-5" />
          </button>
        </div>
        <div className="flex-1 mx-4">
          <h1 className="text-sm font-medium">Linear – Plan and manage projects</h1>
          <p className="text-xs text-gray-400">linear.app</p>
        </div>
        <div className="flex items-center space-x-4">
          <Share2 className="w-5 h-5" />
          <Bookmark className="w-5 h-5" />
          <MoreVertical className="w-5 h-5" />
        </div>
      </nav>

      {/* Header */}
      <header className="flex items-center justify-between px-4 py-4 border-b border-gray-800">
        <div className="flex items-center space-x-2">
          <Image
            src="https://cdn.simpleicons.org/linear/white"
            alt="Linear"
            width={24}
            height={24}
            className="rounded"
          />
          <span className="font-medium">Linear</span>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="secondary" className="bg-gray-800 text-white hover:bg-gray-700">
            Log in
          </Button>
          <Button className="bg-white text-black hover:bg-gray-200">Sign up</Button>
          <Button variant="ghost" size="icon">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 py-12 space-y-16">
        <section>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold mb-4">
            Manage projects end-to-end
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg mb-8"
          >
            Consolidate specs, milestones, tasks, and other documentation in one centralized location.
          </motion.p>
        </section>

        <section className="bg-gray-900 rounded-lg p-6 space-y-8">
          <h3 className="text-2xl font-semibold mb-6">Project Overview</h3>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <StatusTag color="bg-yellow-500/20 text-yellow-500">In Progress</StatusTag>
              <StatusTag color="bg-blue-500/20 text-blue-500">ENG</StatusTag>
              <div className="flex items-center space-x-2">
                <span className="w-6 h-6 rounded-full bg-gray-700" />
                <span className="w-6 h-6 rounded-full bg-gray-700" />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Properties</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Resources</span>
                <div className="flex items-center space-x-2">
                  <span className="w-4 h-4 bg-purple-500 rounded" />
                  <span className="text-sm">Exploration</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-gray-400">Milestones</h4>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="w-3 h-3 bg-blue-500 rounded-sm transform rotate-45" />
                      <span>Design Review</span>
                    </div>
                    <span className="text-green-500">100%</span>
                  </div>
                  <ProgressBar progress={100} />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="w-3 h-3 bg-blue-500 rounded-sm transform rotate-45" />
                      <span>Internal Alpha</span>
                    </div>
                    <span className="text-green-500">100%</span>
                  </div>
                  <ProgressBar progress={100} />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="w-3 h-3 bg-yellow-500 rounded-sm transform rotate-45" />
                      <span>GA</span>
                    </div>
                    <span className="text-yellow-500">25%</span>
                  </div>
                  <ProgressBar progress={25} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-2xl font-bold mb-4">
            Project updates
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400"
          >
            Communicate progress and project health with built-in project updates.
          </motion.p>
        </section>
      </main>

      {/* Mobile Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 h-16 bg-gray-900 border-t border-gray-800 flex items-center justify-around">
        <button className="p-2 rounded-lg bg-gray-800">
          <div className="w-4 h-4 bg-gray-600 rounded" />
        </button>
        <button className="p-2 rounded-full bg-gray-800">
          <div className="w-4 h-4 bg-gray-600 rounded-full" />
        </button>
        <button className="p-2">
          <div className="w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8 border-b-gray-600" />
        </button>
      </nav>
    </div>
  )
}

