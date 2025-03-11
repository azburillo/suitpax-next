"use client"

import type React from "react"
import { UserPlus, Rocket, BarChart, Settings, Sparkles } from "lucide-react"
import { GlowingEffect } from "@/app/components/ui/glowing-effect"

export function GlowCardDemo() {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
      <GridItem
        icon={<UserPlus className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="1. Sign Up"
        description="Create your Suitpax account in minutes. It's quick, easy, and secure."
      />
      <GridItem
        icon={<Settings className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="2. Customize"
        description="Set up your preferences and integrate your existing tools and systems."
      />
      <GridItem
        icon={<Rocket className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="3. Onboarding"
        description="Our team guides you through a smooth onboarding process, ensuring you're ready to go."
      />
      <GridItem
        icon={<BarChart className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="4. Start Managing"
        description="Begin managing your travel and expenses efficiently with our intuitive dashboard."
      />
      <GridItem
        icon={<Sparkles className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="5. Optimize & Grow"
        description="Leverage Suitpax's analytics to continuously improve your travel and expense management."
      />
    </ul>
  )
}

interface GridItemProps {
  icon: React.ReactNode
  title: string
  description: React.ReactNode
}

const GridItem = ({ icon, title, description }: GridItemProps) => {
  return (
    <li className="min-h-[12rem] list-none">
      <div className="relative h-full rounded-xl border p-2">
        <GlowingEffect spread={30} glow={true} disabled={false} proximity={48} inactiveZone={0.01} />
        <div className="relative flex h-full flex-col justify-between gap-4 overflow-hidden rounded-lg border-0.75 p-4 dark:shadow-[0px_0px_20px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col justify-between gap-2">
            <div className="w-fit rounded-lg border border-gray-600 p-2">{icon}</div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-balance text-black dark:text-white">{title}</h3>
              <p className="text-sm text-black dark:text-neutral-400">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}

