"use client"

import { motion } from "framer-motion"
import { WifiIcon, CreditCardIcon, SparklesIcon } from "@heroicons/react/24/outline"

const features = [
  {
    icon: WifiIcon,
    title: "High-Speed Wi-Fi",
    description: "Stay connected with complimentary high-speed internet access in all our properties.",
  },
  {
    icon: CreditCardIcon,
    title: "Flexible Payment",
    description: "Choose from a variety of payment options to suit your needs and preferences.",
  },
  {
    icon: SparklesIcon,
    title: "Premium Amenities",
    description: "Enjoy top-notch facilities and services designed for your utmost comfort and convenience.",
  },
]

export function StaysFeatures() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Exceptional Stays, Exceptional Features</h2>
          <p className="mt-4 text-xl text-gray-500">
            Experience the best in hospitality with our curated selection of amenities and services.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="pt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-teal-500 rounded-md shadow-lg">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{feature.title}</h3>
                    <p className="mt-5 text-base text-gray-500">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

