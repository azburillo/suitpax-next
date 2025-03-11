"use client"

import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import { PricingToggle } from "@/app/components/pricing-toggle"
import { PricingCard } from "@/app/components/pricing-card"
import { individualPlans } from "@/app/data/individual-plans"
import { enterprisePlans } from "@/app/data/enterprise-plans"
import { vipMembershipPlans } from "@/app/data/vip-membership-plans"
import { Badge } from "@/app/components/ui/badge"
import FAQ from "@/app/components/marketing/faq"
import type { PricingPlan } from "@/types/pricing"

const PricingHeader = () => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
    <h1 className="text-2xl font-medium mb-4 text-emerald-950 tracking-tighter">
      Travel as you know it is about to change. Forever.
    </h1>
    <p className="text-gray-600 text-sm mb-6">Start for free, no credit card required.</p>
    <p className="text-sm text-gray-700 max-w-2xl mx-auto">
      From solo adventurers to global airlines, Suitpax empowers the entire travel ecosystem. Our flexible pricing
      adapts to your needs, whether you're planning a family vacation or managing a fleet of 1000 aircraft.
    </p>
  </motion.div>
)

const faqItems = [
  {
    question: "What is Suitpax?",
    answer:
      "Suitpax is a comprehensive travel management platform designed to streamline and enhance the travel experience for both individual travelers and businesses. It offers features like AI-powered trip planning, real-time flight tracking, expense management, and VIP lounge access.",
  },
  {
    question: "How does the pricing work?",
    answer:
      "We offer various pricing tiers to cater to different needs. Our plans range from a free tier for basic features to premium plans for individuals and enterprises. You can choose between monthly and annual billing, with annual plans offering a discount.",
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle. If you upgrade mid-cycle, you'll be charged the prorated difference.",
  },
  {
    question: "What's included in the VIP Lounge access?",
    answer:
      "VIP Lounge access is available in our premium plans. It provides entry to a network of exclusive airport lounges worldwide, offering amenities like comfortable seating, complimentary food and drinks, Wi-Fi, and sometimes spa services or shower facilities.",
  },
  {
    question: "Is there a free trial for paid plans?",
    answer:
      "Yes, we offer a 14-day free trial for all our paid plans. This allows you to explore the features and determine which plan best suits your needs before committing.",
  },
  {
    question: "How does the AI trip planning feature work?",
    answer:
      "Our AI trip planning feature uses advanced algorithms to analyze your preferences, budget, and travel history to suggest personalized itineraries. It can also adapt to real-time changes in weather, flight schedules, or local events to optimize your travel plans.",
  },
  {
    question: "What kind of customer support do you offer?",
    answer:
      "We provide 24/7 customer support for all our paid plans. This includes email, chat, and phone support. Our free plan users can access email support with a response time of up to 48 hours.",
  },
  {
    question: "Can I use SuitPax for business travel?",
    answer:
      "Absolutely! Our Enterprise plans are specifically designed for business travel management. They include features like team management, corporate policy compliance, advanced reporting, and integration with popular expense management tools.",
  },
]

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false)
  const [activePlanIndex, setActivePlanIndex] = useState(0)
  const [activeTab, setActiveTab] = useState<"individual" | "enterprise" | "vip">("individual")

  const plans = useMemo(() => {
    let sortedPlans: PricingPlan[]
    switch (activeTab) {
      case "individual":
        sortedPlans = [...individualPlans].sort((a, b) => a.price - b.price)
        return sortedPlans
      case "enterprise":
        sortedPlans = [...enterprisePlans].sort((a, b) => a.price - b.price)
        return sortedPlans
      case "vip":
        return vipMembershipPlans
      default:
        sortedPlans = [...individualPlans].sort((a, b) => a.price - b.price)
        return sortedPlans
    }
  }, [activeTab])

  const handlePrevPlan = () => {
    setActivePlanIndex((prev) => (prev > 0 ? prev - 1 : plans.length - 1))
  }

  const handleNextPlan = () => {
    setActivePlanIndex((prev) => (prev < plans.length - 1 ? prev + 1 : 0))
  }

  const handleToggle = () => {
    setIsAnnual((prev) => !prev)
  }

  const handleTabChange = (tab: "individual" | "enterprise" | "vip") => {
    setActiveTab(tab)
    setActivePlanIndex(0)
  }

  const currentPlan = useMemo(() => plans[activePlanIndex], [plans, activePlanIndex])

  return (
    <div className="min-h-screen bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <PricingHeader />

          <p className="text-xs font-light text-center mb-2">Choose your plan</p>
          <div className="flex space-x-2 mb-6 justify-center">
            <Badge
              variant={activeTab === "individual" ? "default" : "outline"}
              onClick={() => handleTabChange("individual")}
              className="hover:bg-gray-300 hover:text-black bg-emerald-950 text-emerald-300 py-0.5 text-xs cursor-pointer"
            >
              Travelers
            </Badge>
            <Badge
              variant={activeTab === "enterprise" ? "default" : "outline"}
              onClick={() => handleTabChange("enterprise")}
              className="hover:bg-gray-300 hover:text-black bg-emerald-950 text-emerald-300 py-0.5 text-xs cursor-pointer"
            >
              Enterprise
            </Badge>
            <Badge
              variant={activeTab === "vip" ? "default" : "outline"}
              onClick={() => handleTabChange("vip")}
              className="hover:bg-gray-300 hover:text-black bg-emerald-950 text-emerald-300 py-0.5 text-xs cursor-pointer"
            >
              VIP Lounge
            </Badge>
          </div>

          <PricingToggle isAnnual={isAnnual} onToggle={handleToggle} />

          <div className="relative">
            <PricingCard
              plan={currentPlan}
              isAnnual={isAnnual}
              onPrevPlan={handlePrevPlan}
              onNextPlan={handleNextPlan}
            />
          </div>

          <FAQ items={faqItems} />
        </div>
      </div>
    </div>
  )
}

