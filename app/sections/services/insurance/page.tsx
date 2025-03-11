"use client"
import { motion } from "framer-motion"
import { GradientText } from "@/app/components/ui/gradient-text"
import { Button } from "@/app/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Umbrella, Plane, HeartPulse } from "lucide-react"

const InsurancePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-950 via-teal-950 to-black text-white">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <GradientText as="h1" className="text-4xl md:text-6xl font-bold mb-4">
            Travel Insurance
          </GradientText>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive coverage for worry-free travel experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Trip Protection",
              description: "Coverage for trip cancellations, delays, and interruptions.",
              icon: <Umbrella className="h-8 w-8 text-teal-400" />,
            },
            {
              title: "Flight Insurance",
              description: "Protection against flight-related issues and lost luggage.",
              icon: <Plane className="h-8 w-8 text-teal-400" />,
            },
            {
              title: "Medical Coverage",
              description: "Emergency medical coverage for unexpected health issues abroad.",
              icon: <HeartPulse className="h-8 w-8 text-teal-400" />,
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-black/50 border-teal-800">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl font-bold text-teal-400">
                    {item.icon}
                    <span className="ml-2">{item.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300">{item.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-16"
        >
          <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-black font-bold">
            Get Insured Now
          </Button>
        </motion.div>
      </div>
    </div>
  )
}

export default InsurancePage

