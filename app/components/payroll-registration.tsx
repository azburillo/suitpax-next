"use client"

import { motion } from "framer-motion"
import { ArrowUpRightIcon } from "@radix-ui/react-icons"
import { ChatBubbleOvalLeftIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import { Card } from "@/components/ui/card"

const employees = [
  {
    name: "Alena Rosser",
    location: "New York, NY",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2025-01-23-07-04-42-863_com.android.chrome.jpg-j6DUfDQFwMwaO8mlLjBKnUyofoNg9f.jpeg",
  },
  {
    name: "Gustavo Curtis",
    location: "New York, NY",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2025-01-23-07-04-42-863_com.android.chrome.jpg-j6DUfDQFwMwaO8mlLjBKnUyofoNg9f.jpeg",
  },
  {
    name: "Miracle Aminoff",
    location: "San Francisco, CA",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2025-01-23-07-04-42-863_com.android.chrome.jpg-j6DUfDQFwMwaO8mlLjBKnUyofoNg9f.jpeg",
  },
  {
    name: "Gustavo Workman",
    location: "Austin, TX",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2025-01-23-07-04-42-863_com.android.chrome.jpg-j6DUfDQFwMwaO8mlLjBKnUyofoNg9f.jpeg",
  },
  {
    name: "Jordyn Gouse",
    location: "San Francisco, CA",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2025-01-23-07-04-42-863_com.android.chrome.jpg-j6DUfDQFwMwaO8mlLjBKnUyofoNg9f.jpeg",
  },
]

export function PayrollRegistration() {
  return (
    <section className="min-h-screen bg-[#020419] text-white py-12">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-3xl sm:text-4xl font-light mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Corporate and personal returns – we've got you covered.
            </h1>
          </div>

          {/* Main Card */}
          <Card className="bg-[#0a0b2e] border-none shadow-2xl overflow-hidden">
            <div className="p-6">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-light">Payroll tax registration</h2>
                <ArrowUpRightIcon className="w-6 h-6" />
              </div>

              {/* Payroll Register Section */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-6">
                  <h3 className="text-xl font-light">Payroll register</h3>
                  <span className="text-indigo-400">• 4 States</span>
                </div>

                <div className="space-y-6">
                  {employees.map((employee, index) => (
                    <motion.div
                      key={employee.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-4"
                    >
                      <div className="relative w-12 h-12">
                        <Image
                          src={employee.image || "/placeholder.svg"}
                          alt={employee.name}
                          fill
                          className="rounded-lg object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-white font-medium">{employee.name}</h4>
                        <p className="text-indigo-400 text-sm">{employee.location}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Footer Text */}
              <div className="space-y-4">
                <p className="text-2xl font-light">
                  Hire from all 50 states.{" "}
                  <span className="text-indigo-400">
                    State and city level payroll registrations. Withholding and unemployment accounts anywhere you hire.
                  </span>
                </p>
                <p className="text-indigo-400 text-xl">Forget outrageous EOR fees.</p>
              </div>
            </div>
          </Card>

          {/* Chat Button */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1 }}
            className="fixed bottom-8 right-8"
          >
            <button className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow">
              <ChatBubbleOvalLeftIcon className="w-6 h-6 text-[#020419]" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

