"use client"

import { motion } from "framer-motion"
import { HelpCircle, FileText, MessageSquare, PhoneCall } from "lucide-react"
import { BackgroundBeams } from "@/app/components/backgrounds/background-beams"
import { Button } from "@/app/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card"

const HelpCenterPage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-emerald-950 via-teal-950 to-black text-white">
      <BackgroundBeams className="absolute inset-0" />
      <div className="relative z-10 container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-200 to-teal-400">
            Help Center
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Find answers, get support, and resolve issues quickly with our comprehensive help resources.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: "FAQs", icon: HelpCircle, description: "Find answers to common questions" },
            { title: "User Guides", icon: FileText, description: "Detailed instructions for using our platform" },
            { title: "Live Chat", icon: MessageSquare, description: "Get real-time assistance from our support team" },
            { title: "Contact Support", icon: PhoneCall, description: "Reach out to us for personalized help" },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-black/50 border-emerald-500/20 hover:border-emerald-500/50 transition-colors h-full">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl text-emerald-400">
                    <item.icon className="w-6 h-6 mr-2" />
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400">{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="outline"
                    className="w-full border-emerald-500 text-emerald-400 hover:bg-emerald-500/10"
                  >
                    Access Now
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-black font-bold">
            Get Help
          </Button>
        </motion.div>
      </div>
    </div>
  )
}

export default HelpCenterPage

