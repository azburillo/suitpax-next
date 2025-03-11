"use client"
import Link from "next/link"
import type React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDownIcon } from "@heroicons/react/24/outline"
import { useRouter } from "next/navigation"
// import { ShinyButton } from "@/app/components/ui/shiny-button"
import { AirportTechSlider } from "./airport-tech-slider"

interface NavItem {
  name: string
  href: string
  subsections?: {
    name: string
    description: string
    badge: string | null
    icon: any
    href: string
    extraComponent?: React.ReactNode
  }[]
}

interface DesktopNavProps {
  navItems: NavItem[]
  openDropdown: string | null
  toggleDropdown: (itemName: string) => void
}

const DesktopNav: React.FC<DesktopNavProps> = ({ navItems, openDropdown, toggleDropdown }) => {
  const router = useRouter()

  return (
    <nav className="hidden lg:flex space-x-1">
      {navItems.map((item) => (
        <div key={item.name} className="relative group">
          {item.name === "Log in" ? (
            <Link
              href={item.href}
              className="flex items-center text-white hover:text-gray-300 transition-colors py-2 px-3 text-xs"
            >
              {item.name}
            </Link>
          ) : item.subsections ? (
            <button
              onMouseEnter={() => toggleDropdown(item.name)}
              onMouseLeave={() => toggleDropdown(item.name)}
              className="flex items-center text-white hover:text-gray-300 transition-colors py-2 px-3 text-xs"
            >
              {item.name}
              <ChevronDownIcon className="ml-1 h-3 w-3 transition-transform group-hover:rotate-180" />
            </button>
          ) : (
            <Link
              href={item.href}
              className="flex items-center text-white hover:text-gray-300 transition-colors py-2 px-3 text-xs"
            >
              {item.name}
            </Link>
          )}
          {/* Dropdown menu for items with subsections */}
          <AnimatePresence>
            {item.subsections && openDropdown === item.name && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
                onMouseEnter={() => toggleDropdown(item.name)}
                onMouseLeave={() => toggleDropdown(item.name)}
                className="absolute left-0 mt-2 w-[600px] rounded-xl shadow-lg bg-gray-100 backdrop-blur-md border border-gray-200/20 focus:outline-none overflow-hidden z-50"
                style={{ transform: item.name === "Company" || item.name === "Resources" ? "translateX(-50%)" : "" }}
              >
                <div className="p-4">
                  <div className="grid grid-cols-2 gap-3">
                    {item.subsections.map((subsection, index) => (
                      <Link
                        key={`${subsection.name}-${index}`}
                        href={subsection.href || `${item.href}/${subsection.name.toLowerCase().replace(/\s+/g, "-")}`}
                        className="flex items-start p-3 rounded-lg hover:bg-gray-200/60 backdrop-blur-md transition-all duration-200 group"
                      >
                        <div className="flex-shrink-0 p-1.5 rounded-md bg-gradient-to-br from-gray-100 to-white shadow-sm border border-gray-100 group-hover:from-gray-300 group-hover:to-white group-hover:border-gray-700 transition-all duration-200">
                          <subsection.icon
                            className="h-4 w-4 text-gray-600 group-hover:text-emerald-950 transition-colors duration-200"
                            aria-hidden="true"
                          />
                        </div>
                        <div className="ml-3 flex-1">
                          <div className="flex items-center justify-between">
                            <p className="text-xs font-medium text-gray-800 group-hover:text-black transition-colors duration-200">
                              {subsection.name}
                            </p>
                            <div className="flex items-center">
                              {subsection.extraComponent && <span className="mr-2">{subsection.extraComponent}</span>}
                              {subsection.badge && (
                                <span className="ml-2 inline-flex items-center rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-medium text-emerald-700 border border-emerald-100">
                                  {subsection.badge}
                                </span>
                              )}
                            </div>
                          </div>
                          <p className="mt-1 text-[10px] text-gray-500 group-hover:text-gray-700 transition-colors duration-200">
                            {subsection.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
                {item.name === "Platform" && (
                  <div className="px-4 pb-4">
                    <AirportTechSlider />
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </nav>
  )
}

export default DesktopNav

