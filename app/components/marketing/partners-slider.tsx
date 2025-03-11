"use client"

import { Card, CardContent } from "@/app/components/ui/card"
import { LogoCarousel } from "@/app/components/ui/logo-carousel"
import { motion } from "framer-motion"

const demoLogos = [
  {
    id: 1,
    name: "Linear",
    src: "https://cdn.brandfetch.io/linear.app/w/512/h/128/theme/light/logo?c=1idU-l8vdm7C5__3dci",
  },
  {
    id: 2,
    name: "Expedia",
    src: "https://cdn.brandfetch.io/expedia.com/w/512/h/184/theme/light/logo?c=1idU-l8vdm7C5__3dci",
  },
  {
    id: 3,
    name: "Cal.com",
    src: "https://cdn.brandfetch.io/cal.com/w/512/h/106/theme/light/logo?c=1idU-l8vdm7C5__3dci",
  },
  {
    id: 4,
    name: "Slack",
    src: "https://cdn.brandfetch.io/slack.com/w/512/h/331/theme/light/logo?c=1idU-l8vdm7C5__3dci",
  },
  {
    id: 5,
    name: "Tesla",
    src: "https://cdn.brandfetch.io/tesla.com/w/512/h/52/theme/light/logo?c=1idU-l8vdm7C5__3dci",
  },
  {
    id: 6,
    name: "Anthropic",
    src: "https://cdn.brandfetch.io/anthropic.com/w/512/h/58/theme/light/logo?c=1idU-l8vdm7C5__3dci",
  },
  {
    id: 7,
    name: "Iberia",
    src: "https://cdn.brandfetch.io/iberia.com/w/512/h/114/theme/light/logo?c=1idU-l8vdm7C5__3dci",
  },
  { id: 8, name: "Folk", src: "https://cdn.brandfetch.io/folk.app/w/512/h/150/theme/light/logo?c=1idU-l8vdm7C5__3dci" },
  {
    id: 9,
    name: "Heathrow",
    src: "https://cdn.brandfetch.io/heathrow.com/w/512/h/97/theme/light/logo?c=1idU-l8vdm7C5__3dci",
  },
  {
    id: 10,
    name: "SiteMinder",
    src: "https://cdn.brandfetch.io/siteminder.com/w/512/h/72/theme/light/logo?c=1idU-l8vdm7C5__3dci",
  },
  {
    id: 11,
    name: "Lloyds Bank",
    src: "https://cdn.brandfetch.io/lloydsbank.com/w/512/h/139/theme/light/logo?c=1idU-l8vdm7C5__3dci",
  },
  {
    id: 12,
    name: "Superhuman",
    src: "https://cdn.brandfetch.io/superhuman.com/w/512/h/34/theme/light/logo?c=1idU-l8vdm7C5__3dci",
  },
  {
    id: 13,
    name: "Vercel",
    src: "https://cdn.brandfetch.io/vercel.com/w/512/h/115/theme/light/logo?c=1idU-l8vdm7C5__3dci",
  },
  {
    id: 14,
    name: "Puma",
    src: "https://cdn.brandfetch.io/puma.com/w/512/h/254/theme/light/logo?c=1idU-l8vdm7C5__3dci",
  },
  {
    id: 15,
    name: "Ferrari",
    src: "https://cdn.brandfetch.io/ferrari.com/w/369/h/512/theme/light/logo?c=1idU-l8vdm7C5__3dci",
  },
  {
    id: 16,
    name: "Vueling",
    src: "https://cdn.brandfetch.io/vueling.com/w/512/h/169/theme/light/logo?c=1idU-l8vdm7C5__3dci",
  },
  {
    id: 17,
    name: "Air Canada",
    src: "https://cdn.brandfetch.io/aircanada.com/w/512/h/67/theme/light/logo?c=1idU-l8vdm7C5__3dci",
  },
  {
    id: 18,
    name: "Samsung",
    src: "https://cdn.brandfetch.io/samsung.com/w/512/h/78/theme/light/logo?c=1idU-l8vdm7C5__3dci",
  },
  {
    id: 19,
    name: "Notion",
    src: "https://cdn.brandfetch.io/notion.so/w/512/h/178/theme/light/logo?c=1idU-l8vdm7C5__3dci",
  },
]

interface PartnersSliderProps {
  title?: string
  subtitle?: string
  className?: string
}

export function PartnersSlider({
  title = "Powering the next generation of travel tech startups with our AI-powered platform ecosystem.",
  subtitle = "Join the growing network of companies transforming their travel management",
  className = "",
}: PartnersSliderProps) {
  return (
    <section className={`w-full py-12 md:py-16 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title and subtitle moved to page.tsx */}

        <div className="relative w-full max-w-3xl mx-auto">
          <Card className="bg-gradient-to-br from-emerald-950/30 via-black/40 to-black/90 backdrop-blur-md relative border border-emerald-950/10 overflow-hidden w-full rounded-xl shadow-md">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 to-transparent pointer-events-none" />
            <CardContent className="p-4 sm:p-6 md:p-8 lg:p-10 space-y-4 md:space-y-6 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center space-y-2 md:space-y-3"
              >
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="text-xs font-medium tracking-wider text-gray-400 uppercase"
                >
                  TRAVEL PLATFORM FOR EVERYONE
                </motion.p>
                <motion.h2
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="text-base sm:text-lg md:text-xl font-semibold tracking-tighter text-gray-200"
                >
                  Trusted by teams from Y Combinator startups
                </motion.h2>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="py-3 md:py-4 w-full overflow-hidden"
              >
                <LogoCarousel logos={demoLogos} className="filter grayscale opacity-70" />
              </motion.div>

              <div className="space-y-3 md:space-y-4 mt-2 md:mt-4">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="text-xs sm:text-sm text-center text-gray-300 max-w-3xl mx-auto"
                >
                  We're proud to collaborate with the world's most innovative companies to transform corporate travel
                  management.
                </motion.p>

                <div className="grid grid-cols-3 gap-1 sm:gap-2 text-center">
                  <div className="bg-black/30 backdrop-blur-sm rounded-lg p-1.5 sm:p-2 border border-emerald-900/20">
                    <h3 className="text-xs sm:text-sm font-bold text-emerald-400 mb-0.5 sm:mb-1">+500</h3>
                    <p className="text-[10px] sm:text-xs text-gray-400">Companies trust us</p>
                  </div>
                  <div className="bg-black/30 backdrop-blur-sm rounded-lg p-1.5 sm:p-2 border border-emerald-900/20">
                    <h3 className="text-xs sm:text-sm font-bold text-emerald-400 mb-0.5 sm:mb-1">98%</h3>
                    <p className="text-[10px] sm:text-xs text-gray-400">Client retention rate</p>
                  </div>
                  <div className="bg-black/30 backdrop-blur-sm rounded-lg p-1.5 sm:p-2 border border-emerald-900/20">
                    <h3 className="text-xs sm:text-sm font-bold text-emerald-400 mb-0.5 sm:mb-1">24/7</h3>
                    <p className="text-[10px] sm:text-xs text-gray-400">Technical support</p>
                  </div>
                </div>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="text-[10px] sm:text-xs text-center text-gray-400 mt-1 sm:mt-2"
              >
                Join the growing community of innovative companies leveraging our platform for seamless travel
                experiences.
              </motion.p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

