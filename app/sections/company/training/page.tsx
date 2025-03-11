"use client"

import { motion } from "framer-motion"
import { BackgroundBeams } from "@/app/components/backgrounds/background-beams"
import { Button } from "@/app/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { ArrowRight, BookOpen, GraduationCap, Users, Calendar, Layout, Clock, CheckCircle2 } from "lucide-react"

const trainingModules = [
  {
    title: "Getting Started",
    icon: BookOpen,
    description: "Learn the basics of Suitpax and set up your first workspace.",
    duration: "15 min",
    difficulty: "Beginner",
  },
  {
    title: "User Management",
    icon: Users,
    description: "Master user roles, permissions, and team collaboration features.",
    duration: "30 min",
    difficulty: "Intermediate",
  },
  {
    title: "Travel Planning",
    icon: Calendar,
    description: "Discover how to efficiently plan and manage business trips.",
    duration: "45 min",
    difficulty: "Intermediate",
  },
  {
    title: "Dashboard Customization",
    icon: Layout,
    description: "Learn to customize dashboards for your specific needs.",
    duration: "25 min",
    difficulty: "Advanced",
  },
]

const learningPath = [
  {
    step: 1,
    title: "Platform Overview",
    description: "Get familiar with the Suitpax interface and core features",
    tasks: ["Navigate the main dashboard", "Understand key metrics", "Access quick actions", "Customize your profile"],
  },
  {
    step: 2,
    title: "Travel Management",
    description: "Master the essential travel management features",
    tasks: [
      "Book flights and accommodations",
      "Manage travel policies",
      "Handle expense reports",
      "Track team movements",
    ],
  },
  {
    step: 3,
    title: "Advanced Features",
    description: "Explore powerful tools for enhanced productivity",
    tasks: [
      "Generate custom reports",
      "Set up automated workflows",
      "Integrate third-party tools",
      "Configure advanced settings",
    ],
  },
]

export default function TrainingPage() {
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
              Suitpax Training Center
            </span>
          </h1>
          <p className="text-xl text-emerald-200 max-w-2xl mx-auto mb-8">
            Master the Suitpax platform with our comprehensive training program. Learn at your own pace and become a
            travel management expert.
          </p>
          <Button className="bg-emerald-600 hover:bg-emerald-700 text-black font-semibold">
            Start Learning Now <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>

        {/* Progress Tracker */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-emerald-950/30 backdrop-blur-sm border border-emerald-900 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-emerald-400">Your Learning Progress</h2>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-emerald-400" />
                <span className="text-emerald-200">4 hours completed</span>
              </div>
            </div>
            <div className="w-full bg-emerald-900/50 rounded-full h-4">
              <div className="bg-emerald-500 h-4 rounded-full" style={{ width: "45%" }}></div>
            </div>
            <div className="flex justify-between mt-2 text-sm text-emerald-300">
              <span>Beginner</span>
              <span>Intermediate</span>
              <span>Advanced</span>
            </div>
          </div>
        </motion.div>

        {/* Training Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {trainingModules.map((module, index) => (
            <motion.div
              key={module.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-emerald-950/30 backdrop-blur-sm border-emerald-900 hover:border-emerald-700 transition-colors cursor-pointer group">
                <CardHeader className="flex flex-row items-center space-x-4">
                  <div className="p-2 rounded-lg bg-emerald-900/50 group-hover:bg-emerald-800/50 transition-colors">
                    <module.icon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <CardTitle className="text-emerald-200 text-xl">{module.title}</CardTitle>
                    <div className="flex space-x-4 mt-1 text-sm text-emerald-300">
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {module.duration}
                      </span>
                      <span className="flex items-center">
                        <GraduationCap className="w-4 h-4 mr-1" />
                        {module.difficulty}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-emerald-100">{module.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Learning Path */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-emerald-400">Your Learning Path</h2>
          <div className="space-y-8">
            {learningPath.map((path, index) => (
              <div key={path.step} className="relative">
                {index !== learningPath.length - 1 && (
                  <div className="absolute left-6 top-20 bottom-0 w-px bg-emerald-800 z-0"></div>
                )}
                <div className="relative z-10 flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-900 flex items-center justify-center">
                    <span className="text-emerald-400 font-bold">{path.step}</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-emerald-300 mb-2">{path.title}</h3>
                    <p className="text-emerald-200 mb-4">{path.description}</p>
                    <div className="bg-emerald-950/30 backdrop-blur-sm border border-emerald-900 rounded-lg p-4">
                      <ul className="space-y-2">
                        {path.tasks.map((task, taskIndex) => (
                          <li key={taskIndex} className="flex items-center text-emerald-100">
                            <CheckCircle2 className="w-4 h-4 mr-2 text-emerald-500" />
                            {task}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-emerald-950/30 backdrop-blur-sm border border-emerald-900 rounded-lg p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-emerald-400">Ready to Become a Suitpax Expert?</h2>
            <p className="text-emerald-200 mb-6">
              Join our community of travel management professionals and get certified in Suitpax platform expertise.
            </p>
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-black font-semibold">
              Get Certified <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

