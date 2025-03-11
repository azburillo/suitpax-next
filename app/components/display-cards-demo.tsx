"use client"
import DisplayCards from "@/app/components/ui/display-cards"
import { Card as AnotherCard } from "@/components/ui/card"
import Image from "next/image"

const customCards = [
  {
    icon: <Image src="https://cdn.simpleicons.org/react/61DAFB" alt="React" width={20} height={20} />,
    title: "Launch",
    description: "Ready for takeoff",
    date: "Today",
    iconClassName: "text-black",
    titleClassName: "text-blue-500",
    className:
      "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <Image src="https://cdn.simpleicons.org/nextdotjs/000000" alt="Next.js" width={20} height={20} />,
    title: "Featured",
    description: "Top rated content",
    date: "2 days ago",
    iconClassName: "text-b",
    titleClassName: "text-emerald-950",
    className:
      "[grid-area:stack] translate-x-12 translate-y-6 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <Image src="https://cdn.simpleicons.org/tailwindcss/06B6D4" alt="Tailwind CSS" width={20} height={20} />,
    title: "Trending",
    description: "Most popular this week",
    date: "Last week",
    iconClassName: "text-gray-500",
    titleClassName: "text-gray-500",
    className: "[grid-area:stack] translate-x-24 translate-y-12 hover:translate-y-6",
  },
]

export function DisplayCardsDemo() {
  return (
    <div className="flex min-h-[400px] w-full items-center justify-center py-40">
      <div className="w-full max-w-4xl">
        <AnotherCard className="p-10 h-[500px]">
          <div className="space-y-10">
            <div className="space-y-2">
              <h4 className="text-xl font-semibold tracking-tighter">Try our powered travel stack</h4>
              <p className="text-sm text-muted-foreground" >Smart airport access. Get your membership plan and enjoy in VIP airport lounge</p>
            </div>
            <div className="-ml-12">
              <DisplayCards cards={customCards} />
            </div>
          </div>
        </AnotherCard>
      </div>
    </div>
  )
}

