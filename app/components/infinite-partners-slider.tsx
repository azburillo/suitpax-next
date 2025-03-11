"use client"

import type React from "react"
import { motion } from "framer-motion"

const partnerLogos = [
  { name: "Linear", url: "https://cdn.brandfetch.io/linear.app/w/512/h/128/theme/light/logo?c=1idU-l8vdm7C5__3dci" },
  { name: "Expedia", url: "https://cdn.brandfetch.io/expedia.com/w/512/h/184/theme/light/logo?c=1idU-l8vdm7C5__3dci" },
  { name: "Cal.com", url: "https://cdn.brandfetch.io/cal.com/w/512/h/106/theme/light/logo?c=1idU-l8vdm7C5__3dci" },
  { name: "Slack", url: "https://cdn.brandfetch.io/slack.com/w/512/h/331/theme/light/logo?c=1idU-l8vdm7C5__3dci" },
  { name: "Tesla", url: "https://cdn.brandfetch.io/tesla.com/w/512/h/52/theme/light/logo?c=1idU-l8vdm7C5__3dci" },
  {
    name: "Anthropic",
    url: "https://cdn.brandfetch.io/anthropic.com/w/512/h/58/theme/light/logo?c=1idU-l8vdm7C5__3dci",
  },
  { name: "Iberia", url: "https://cdn.brandfetch.io/iberia.com/w/512/h/114/theme/light/logo?c=1idU-l8vdm7C5__3dci" },
  { name: "Folk", url: "https://cdn.brandfetch.io/folk.app/w/512/h/150/theme/light/logo?c=1idU-l8vdm7C5__3dci" },
  { name: "Heathrow", url: "https://cdn.brandfetch.io/heathrow.com/w/512/h/97/theme/light/logo?c=1idU-l8vdm7C5__3dci" },
  {
    name: "SiteMinder",
    url: "https://cdn.brandfetch.io/siteminder.com/w/512/h/72/theme/light/logo?c=1idU-l8vdm7C5__3dci",
  },
  {
    name: "Lloyds Bank",
    url: "https://cdn.brandfetch.io/lloydsbank.com/w/512/h/139/theme/light/logo?c=1idU-l8vdm7C5__3dci",
  },
  {
    name: "Superhuman",
    url: "https://cdn.brandfetch.io/superhuman.com/w/512/h/34/theme/light/logo?c=1idU-l8vdm7C5__3dci",
  },
  { name: "Vercel", url: "https://cdn.brandfetch.io/vercel.com/w/512/h/115/theme/light/logo?c=1idU-l8vdm7C5__3dci" },
  { name: "Puma", url: "https://cdn.brandfetch.io/puma.com/w/512/h/254/theme/light/logo?c=1idU-l8vdm7C5__3dci" },
  { name: "Ferrari", url: "https://cdn.brandfetch.io/ferrari.com/w/369/h/512/theme/light/logo?c=1idU-l8vdm7C5__3dci" },
  { name: "Vueling", url: "https://cdn.brandfetch.io/vueling.com/w/512/h/169/theme/light/logo?c=1idU-l8vdm7C5__3dci" },
  {
    name: "Air Canada",
    url: "https://cdn.brandfetch.io/aircanada.com/w/512/h/67/theme/light/logo?c=1idU-l8vdm7C5__3dci",
  },
  { name: "Samsung", url: "https://cdn.brandfetch.io/samsung.com/w/512/h/78/theme/light/logo?c=1idU-l8vdm7C5__3dci" },
  { name: "Notion", url: "https://cdn.brandfetch.io/notion.so/w/512/h/178/theme/light/logo?c=1idU-l8vdm7C5__3dci" },
]

export const InfinitePartnersSlider: React.FC = () => {
  return (
    <div className="w-full overflow-hidden bg-transparent py-4">
      <div className="flex">
        <motion.div
          className="flex space-x-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 60, repeat: Number.POSITIVE_INFINITY }}
        >
          {partnerLogos.concat(partnerLogos).map((logo, index) => (
            <div key={index} className="flex items-center justify-center w-16 h-10">
              <img
                src={logo.url || "/placeholder.svg"}
                alt={logo.name}
                className="max-w-full max-h-full object-contain filter brightness-0 invert opacity-50 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

