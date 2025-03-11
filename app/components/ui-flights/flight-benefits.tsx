import { Check } from "lucide-react"

interface Benefit {
  title: string
  description: string
}

interface FlightBenefitsProps {
  benefits: Benefit[]
}

export function FlightBenefits({ benefits }: FlightBenefitsProps) {
  return (
    <div className="space-y-3">
      <h3 className="text-gray-800 dark:text-white font-medium">Included Benefits</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="p-3 rounded-lg bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10"
          >
            <div className="flex items-start gap-2">
              <div className="mt-0.5 h-5 w-5 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center flex-shrink-0">
                <Check className="h-3 w-3 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-800 dark:text-white">{benefit.title}</h4>
                <p className="text-xs text-gray-500 dark:text-white/60 mt-0.5">{benefit.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

