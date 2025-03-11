import { Badge } from "@/app/components/ui/badge"
import type React from "react" // Added import for React

interface FeatureItem {
  icon: React.ReactNode
  title: string
  description: string
}

interface FeatureProps {
  badge: string
  title: string
  description: string
  features: FeatureItem[]
}

function Feature({ badge, title, description, features }: FeatureProps) {
  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <div className="flex gap-4 flex-col items-start">
            <div>
              <Badge>{badge}</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">{title}</h2>
              <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground text-left">
                {description}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`bg-muted rounded-md p-6 flex justify-between flex-col ${index === 0 || index === 3 ? "h-full lg:col-span-2 aspect-square lg:aspect-auto" : "aspect-square"}`}
              >
                {feature.icon}
                <div className="flex flex-col">
                  <h3 className="text-xl tracking-tight">{feature.title}</h3>
                  <p className="text-muted-foreground max-w-xs text-base">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export { Feature }

