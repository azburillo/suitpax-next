"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import {
  SiAmericanairlines,
  SiDelta,
  SiUnitedairlines,
  SiBritishairways,
  SiTesla,
  SiMarriott,
  SiWise,
  SiHilton,
} from "react-icons/si"
import { Card } from "@/components/ui/card"

const PartnerLogos = () => {
  const logos = [
    { brand: "American Airlines", Icon: SiAmericanairlines, simpleIcon: true },
    { brand: "Delta Air Lines", Icon: SiDelta, simpleIcon: true },
    { brand: "United Airlines", Icon: SiUnitedairlines, simpleIcon: true },
    { brand: "British Airways", Icon: SiBritishairways, simpleIcon: true },
    { brand: "Tesla", Icon: SiTesla, simpleIcon: true },
    { brand: "Marriott", Icon: SiMarriott, simpleIcon: true },
    { brand: "Wise", Icon: SiWise, simpleIcon: true },
    { brand: "Hilton", Icon: SiHilton, simpleIcon: true },
  ]

  return (
    <div className="grid grid-cols-4 gap-8 px-8 mt-12">
      {logos.map(({ brand, Icon, simpleIcon }, index) => (
        <motion.div
          key={brand}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex flex-col items-center"
        >
          <div className="w-16 h-16 bg-black/40 rounded-2xl border border-white/10 p-4 backdrop-blur-sm relative">
            <Icon className="w-full h-full text-white/70" />
          </div>
          <span className="text-xs text-white/60 mt-2">{brand}</span>
        </motion.div>
      ))}
    </div>
  )
}

const MyStatusCenter = () => {
  const integrations = [
    { name: "Flight Booking", status: "Connected", icon: SiAmericanairlines },
    { name: "Hotel Reservation", status: "Connected", icon: SiMarriott },
    { name: "Car Rental", status: "Connecting...", icon: SiTesla },
    { name: "Travel Insurance", status: "Disconnected", icon: SiWise },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="mt-12"
    >
      <Card className="bg-white/5 p-6 rounded-xl border border-white/10">
        <h2 className="text-2xl font-semibold tracking-tighter text-white mb-6">Passenger Journey Status</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center space-x-4 bg-white/5 p-4 rounded-lg border border-white/10"
            >
              <integration.icon className="w-8 h-8 text-white/70" />
              <div>
                <h3 className="text-sm font-medium text-white tracking-tighter">{integration.name}</h3>
                <p
                  className={`text-xs ${
                    integration.status === "Connected"
                      ? "text-green-400"
                      : integration.status === "Connecting..."
                        ? "text-yellow-400"
                        : "text-red-400"
                  } tracking-tighter`}
                >
                  {integration.status}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Card>
    </motion.div>
  )
}

const PassengerExperience = () => {
  const steps = [
    { title: "Booking", description: "Easy flight and hotel reservation" },
    { title: "Check-in", description: "Seamless online check-in process" },
    { title: "Travel", description: "Real-time updates and assistance" },
    { title: "Arrival", description: "Smooth transition to accommodation" },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      className="mt-12"
    >
      <Card className="bg-white/5 p-6 rounded-xl border border-white/10">
        <h2 className="text-2xl font-semibold tracking-tighter text-white mb-6">Passenger Experience</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + index * 0.1 }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">{index + 1}</span>
              </div>
              <h3 className="text-lg font-medium text-white mb-2">{step.title}</h3>
              <p className="text-sm text-gray-400">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </Card>
    </motion.div>
  )
}

export function IntegrationHero() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center space-y-6"
        >
          <h1 className="text-4xl font-bold tracking-tighter bg-gradient-to-r from-white to-gray-700 bg-clip-text text-transparent">
            Integrate your travel stack
          </h1>

          <p className="text-gray-400 text-lg max-w-md mx-auto tracking-tighter">
            A powerful integration platform that connects with your existing travel systems in minutes. Built for modern
            travel companies.
          </p>
        </motion.div>

        <div className="mt-12">
          <Card className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 shadow-xl">
            <PartnerLogos />
          </Card>
        </div>

        <MyStatusCenter />
        <PassengerExperience />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center space-x-2 text-sm text-white/60">
            <span>Technology by </span>
            <div className="flex -space-x-1">
              <Image src="/suitpax-main-logo.svg" alt="Suitpax" width={26} height={26} className="invert" />
            </div>
            <span></span>
          </div>
        </motion.div>
      </main>
    </div>
  )
}

