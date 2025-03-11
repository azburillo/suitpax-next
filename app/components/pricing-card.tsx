"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import { Card } from "@/components/ui/card"
import { NumberFlow } from "@/app/components/number-flow"
import * as HeroIcons from "@heroicons/react/24/outline"
import type { PricingCardProps } from "@/types/pricing"
import { Switch } from "@/components/ui/switch"

const getPreviousPlanName = (currentPlanName: string): string => {
  const planOrder = ["Free", "Travelers", "Pro", "Business", "Enterprise", "Custom"]
  const currentIndex = planOrder.indexOf(currentPlanName)
  return currentIndex > 0 ? planOrder[currentIndex - 1] : ""
}

export function PricingCard({ plan, isAnnual, onPrevPlan, onNextPlan }: PricingCardProps) {
  const [extraFeatureEnabled, setExtraFeatureEnabled] = useState(false)
  const annualDiscount = 0.3 // 30% discount for annual plans

  const basePrice = isAnnual ? plan.price * 12 * (1 - annualDiscount) : plan.price
  const extraFeaturePrice = plan.extraFeature ? (isAnnual ? plan.extraFeature.price * 12 : plan.extraFeature.price) : 0
  const totalPrice = basePrice + (extraFeatureEnabled ? extraFeaturePrice : 0)

  const monthlyPrice = isAnnual ? totalPrice / 12 : totalPrice
  const annualPrice = monthlyPrice * 12

  const previousPlanName = getPreviousPlanName(plan.name)

  return (
    <Card className="relative bg-[#f8fafc] p-8 rounded-2xl">
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-2">
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm font-medium px-2 py-1 bg-gray-100 rounded-full"
          >
            {plan.name}
          </motion.h3>
          {plan.badge && (
            <span className="px-2 py-0.5 bg-emerald-950 text-emerald-300 text-xs font-medium rounded-full">
              {plan.badge}
            </span>
          )}
        </div>
      </div>

      <p className="text-gray-600 text-sm mb-6">{plan.description}</p>

      <div className="flex items-center justify-between mb-8">
        <div className="flex items-baseline gap-1">
          {plan.name === "Custom" ? (
            <span className="text-3xl font-bold">Contact us</span>
          ) : (
            <>
              <NumberFlow value={monthlyPrice} prefix="$" className="text-3xl font-bold" />
              <span className="text-gray-500 text-sm">per month</span>
            </>
          )}
        </div>
        {isAnnual && plan.name !== "Custom" && (
          <div className="text-xs text-gray-500">
            <span className="line-through">${plan.price}</span> ${(plan.price * 0.7).toFixed(2)} billed monthly
          </div>
        )}
      </div>

      {isAnnual && plan.name !== "Custom" && (
        <div className="mb-8 text-xs text-gray-600">${annualPrice.toFixed(2)} billed annually (Save 30%)</div>
      )}

      <div className="flex items-center gap-2 mb-6">
        <button
          onClick={onPrevPlan}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          <ChevronLeftIcon className="w-4 h-4 text-gray-600" />
        </button>
        <Button className="flex-1 bg-emerald-950 hover:bg-emerald-900 text-white py-2 rounded-lg text-sm font-medium">
          {plan.cta}
        </Button>
        <button
          onClick={onNextPlan}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          <ChevronRightIcon className="w-4 h-4 text-gray-600" />
        </button>
      </div>

      <div className="space-y-4">
        {previousPlanName ? (
          <h4 className="font-medium text-gray-900 text-sm">Everything in {previousPlanName}, plus:</h4>
        ) : (
          <h4 className="font-medium text-gray-900 text-sm">Plan features:</h4>
        )}
        {plan.features.map((feature, index) => {
          const Icon = HeroIcons[feature.icon] as React.ComponentType
          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-2"
            >
              {Icon && <Icon className="w-4 h-4 text-gray-400" />}
              <span className="text-gray-600 text-xs">{feature.title}</span>
              {feature.isNew && (
                <span className="px-2 py-0.5 bg-black text-white text-xs font-medium rounded-full">NEW</span>
              )}
            </motion.div>
          )
        })}
      </div>

      {plan.extraFeature && plan.name !== "Free" && plan.name !== "Custom" && (
        <div className="mt-6 p-3 bg-gradient-to-r from-gray-100 to-teal-950/10 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-gray-700">{plan.extraFeature.name}</span>
            <Switch
              checked={extraFeatureEnabled}
              onCheckedChange={setExtraFeatureEnabled}
              className="bg-teal-950 data-[state=checked]:bg-emerald-950 h-4 w-8"
            >
              <span className="sr-only">Enable {plan.extraFeature.name}</span>
            </Switch>
          </div>
          <p className="text-xs text-gray-600 mb-1">{plan.extraFeature.description}</p>
          <p className="text-xs font-medium text-teal-950">
            +${plan.extraFeature.price}/mo ({extraFeatureEnabled ? "Added" : "Not added"})
          </p>
        </div>
      )}
    </Card>
  )
}

