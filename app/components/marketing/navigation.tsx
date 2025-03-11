"use client"
import Link from "next/link"
import type React from "react"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useState, useEffect } from "react"
import {
  ChevronDownIcon,
  GlobeAltIcon,
  MagnifyingGlassIcon,
  BanknotesIcon,
  MapPinIcon,
  ArrowRightOnRectangleIcon,
  BuildingOffice2Icon,
  ShieldCheckIcon,
  LightBulbIcon,
  UserGroupIcon,
  BriefcaseIcon,
  RocketLaunchIcon,
  PaperAirplaneIcon,
  AcademicCapIcon,
  MapIcon,
  QuestionMarkCircleIcon,
  BeakerIcon,
  NewspaperIcon,
  CircleStackIcon,
  ClockIcon,
  UsersIcon,
  StarIcon,
  HomeIcon,
  SparklesIcon,
  CodeBracketIcon,
  PuzzlePieceIcon,
  TruckIcon,
  BuildingStorefrontIcon,
  ServerIcon,
  BookOpenIcon,
  CreditCardIcon,
} from "@heroicons/react/24/outline"
import { useStore } from "@/app/store/useStore"
import { useTheme } from "next-themes"
import { FaLinkedin, FaGithub, FaInstagram, FaProductHunt, FaExternalLinkAlt } from "react-icons/fa"
import { SiG2 } from "react-icons/si"
import { FaXTwitter } from "react-icons/fa6"
import { useRouter } from "next/navigation"
import { SidebarOptInForm } from "@/app/components/ui/sidebar-opt-in-form"
import { ShinyButton } from "@/app/components/ui/shiny-button"
import { AirportTechSlider } from "./airport-tech-slider"
import { TeamAvatars } from "./team-avatars"
import DesktopNav from "./desktop-nav"

const navItems = [
  {
    name: "Platform",
    href: "/platform",
    subsections: [
      {
        name: "Travel Software",
        description: "Streamline your travel operations with our comprehensive software solution",
        badge: null,
        icon: GlobeAltIcon,
        href: "/platform/travel-software",
      },
      {
        name: "Flight Booking",
        description: "Effortless air travel arrangements with our advanced booking system",
        badge: null,
        icon: MagnifyingGlassIcon,
        href: "/platform/flight-booking",
      },
      {
        name: "Expense Management",
        description: "Simplify travel expense tracking and reporting for better financial control",
        badge: null,
        icon: BanknotesIcon,
        href: "/platform/expense-management",
      },
      {
        name: "Airport VIP Lounge",
        description: "Exclusive airport experiences for your premium travelers",
        badge: null,
        icon: MapPinIcon,
        href: "/platform/airport-vip-lounge",
      },
      {
        name: "Corporate Cards",
        description: "Manage and control your corporate expenses with our advanced card solutions",
        badge: "For enterprise",
        icon: CreditCardIcon,
        href: "/platform/corporate-cards",
      },
      {
        name: "AI Agents",
        description: "Intelligent travel assistance powered by cutting-edge AI technology",
        badge: "New",
        icon: SparklesIcon,
        href: "/ai-agents",
        extraComponent: <TeamAvatars />,
      },
      {
        name: "Integrations",
        description: "Seamlessly connect Suitpax with your favorite tools and platforms",
        badge: "New",
        icon: PuzzlePieceIcon,
        href: "/integrations",
      },
    ],
  },
  {
    name: "Services",
    href: "/services",
    subsections: [
      {
        name: "Business Travel",
        description: "Tailored travel solutions designed for corporate needs",
        badge: null,
        icon: BuildingOffice2Icon,
        href: "/services/business-travel",
      },
      {
        name: "Fintech",
        description: "Innovative financial tools for seamless travel transactions",
        badge: null,
        icon: BanknotesIcon,
        href: "/services/fintech",
      },
      {
        name: "Insurance",
        description: "Comprehensive travel protection for peace of mind",
        badge: null,
        icon: ShieldCheckIcon,
        href: "/services/insurance",
      },
      {
        name: "AI Travel Booking",
        description: "Smart, AI-powered booking assistance for optimal travel plans",
        badge: null,
        icon: LightBulbIcon,
        href: "/services/ai-travel-booking",
      },
      {
        name: "Accommodation",
        description: "Find and book the perfect stay for every trip",
        badge: null,
        icon: HomeIcon,
        href: "/stays",
      },
      {
        name: "VIP Membership",
        description: "Exclusive benefits and premium services for frequent travelers",
        badge: "VIP Lounge",
        icon: StarIcon,
        href: "/membership",
      },
      {
        name: "Car Rental",
        description: "Seamless car rental solutions for business trips",
        badge: null,
        icon: TruckIcon,
        href: "/services/car-rental",
      },
    ],
  },
  {
    name: "Solutions",
    href: "/solutions",
    subsections: [
      {
        name: "For Enterprise",
        description: "Comprehensive travel management solutions for large organizations",
        badge: null,
        icon: BuildingOffice2Icon,
        href: "/enterprise",
      },
      {
        name: "For Travelers",
        description: "Personalized travel experiences tailored to individual needs",
        badge: null,
        icon: UserGroupIcon,
        href: "/solutions/for-travelers",
      },
      {
        name: "For Financial Teams",
        description: "Streamlined financial management tools for travel expenses",
        badge: null,
        icon: BriefcaseIcon,
        href: "/solutions/for-financial-teams",
      },
      {
        name: "For Startups",
        description: "Agile travel solutions designed for growing businesses",
        badge: "Popular",
        icon: RocketLaunchIcon,
        href: "/solutions/for-startups",
      },
      {
        name: "For Airlines Teams",
        description: "Specialized tools and services for airline professionals",
        badge: null,
        icon: PaperAirplaneIcon,
        href: "/solutions/for-airlines-teams",
      },
    ],
  },
  {
    name: "Resources",
    href: "/resources",
    subsections: [
      {
        name: "Academy",
        description: "Learn essential travel management skills and best practices",
        badge: null,
        icon: AcademicCapIcon,
        href: "/resources/academy",
      },
      {
        name: "Trip Planning",
        description: "Efficient tools and guides for organizing perfect trips",
        badge: null,
        icon: MapIcon,
        href: "/resources/trip-planning",
      },
      {
        name: "Help Center",
        description: "Get support, answers, and troubleshooting assistance",
        badge: null,
        icon: QuestionMarkCircleIcon,
        href: "/resources/help-center",
      },
      {
        name: "Research",
        description: "Insights and analysis of the latest travel industry trends",
        badge: null,
        icon: BeakerIcon,
        href: "/resources/research",
      },
      {
        name: "Blog",
        description: "Latest news, travel tips, and industry updates",
        badge: null,
        icon: NewspaperIcon,
        href: "/blog",
      },
      {
        name: "Developer Hub",
        description: "Comprehensive resources and documentation for developers",
        badge: "Update",
        icon: CodeBracketIcon,
        href: "https://suitpax.gitbook.io/docs",
        external: true,
      },
    ],
  },
  {
    name: "Company",
    href: "/company",
    subsections: [
      {
        name: "About",
        description: "Learn about our mission, values, and company history",
        badge: null,
        icon: CircleStackIcon,
        href: "/about",
      },
      {
        name: "Careers",
        description: "Explore opportunities to join our growing team",
        badge: "We're Hiring!",
        icon: BuildingOffice2Icon,
        href: "/careers",
      },
      {
        name: "Community",
        description: "Join our thriving community of global travelers",
        badge: "New",
        icon: UsersIcon,
        href: "/community",
      },
      {
        name: "Our Partners",
        description: "Discover our strategic alliances and collaborations",
        badge: null,
        icon: UserGroupIcon,
        href: "/partners",
      },
      {
        name: "Changelog",
        description: "Stay updated with our latest features and improvements",
        badge: "New",
        icon: ClockIcon,
        href: "/changelog",
      },
      {
        name: "Customers",
        description: "See who trusts Suitpax for their business travel needs",
        badge: null,
        icon: BuildingStorefrontIcon,
        href: "/customers",
      },
      {
        name: "Press",
        description: "Access the latest news and media resources about Suitpax",
        badge: null,
        icon: NewspaperIcon,
        href: "/press",
      },
      {
        name: "Subprocessors",
        description: "Information about our data processing partners",
        badge: null,
        icon: ServerIcon,
        href: "/company/subprocessors",
      },
      {
        name: "Training",
        description: "Explore our comprehensive training programs",
        badge: null,
        icon: BookOpenIcon,
        href: "/company/training",
      },
    ],
  },
  {
    name: "Pricing",
    href: "/pricing",
  },
  {
    name: "Log in",
    href: "https://accounts.suitpax.com/sign-in",
  },
]

// LÍNEA DE AYUDA: Componente para mostrar los iconos de redes sociales
const SocialIcons = () => (
  <div className="flex justify-center space-x-4 py-4 bg-gradient-to-r from-gray-50/80 to-gray-100/80 backdrop-blur-sm rounded-xl px-4 mt-6 shadow-sm">
    <a
      href="https://instagram.com/suitpax"
      className="text-gray-600 hover:text-emerald-600 transition-colors p-2 hover:bg-white/80 rounded-full"
    >
      <FaInstagram size={18} aria-label="Suitpax on Instagram" />
      <span className="sr-only">Instagram</span>
    </a>
    <a
      href="https://x.com/suitpax"
      className="text-gray-600 hover:text-emerald-600 transition-colors p-2 hover:bg-white/80 rounded-full"
    >
      <FaXTwitter size={18} aria-label="Suitpax on X (formerly Twitter)" />
      <span className="sr-only">X (Twitter)</span>
    </a>
    <a
      href="https://linkedin.com/company/suitpax"
      className="text-gray-600 hover:text-emerald-600 transition-colors p-2 hover:bg-white/80 rounded-full"
    >
      <FaLinkedin size={18} aria-label="Suitpax on LinkedIn" />
      <span className="sr-only">LinkedIn</span>
    </a>
    <a
      href="https://github.com/suitpax"
      className="text-gray-600 hover:text-emerald-600 transition-colors p-2 hover:bg-white/80 rounded-full"
    >
      <FaGithub size={18} aria-label="Suitpax on GitHub" />
      <span className="sr-only">GitHub</span>
    </a>
    <a
      href="https://www.producthunt.com/products/suitpax-2"
      className="text-gray-600 hover:text-emerald-600 transition-colors p-2 hover:bg-white/80 rounded-full"
    >
      <FaProductHunt size={18} aria-label="Suitpax on Product Hunt" />
      <span className="sr-only">Product Hunt</span>
    </a>
    <a
      href="https://www.g2.com/products/suitpax/reviews"
      className="text-gray-600 hover:text-emerald-600 transition-colors p-2 hover:bg-white/80 rounded-full"
    >
      <SiG2 size={18} aria-label="Suitpax on G2" />
      <span className="sr-only">G2</span>
    </a>
  </div>
)

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
    external?: boolean
  }[]
}

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"
  const { user, logout } = useStore()
  const router = useRouter()

  // LÍNEA DE AYUDA: Función para alternar la apertura/cierre del menú móvil
  const handleMenuToggle = () => {
    setIsOpen(!isOpen)
  }

  // LÍNEA DE AYUDA: Función para controlar la apertura/cierre de los dropdowns
  const toggleDropdown = (itemName: string) => {
    setOpenDropdown((prev) => (prev === itemName ? null : itemName))
  }

  // LÍNEA DE AYUDA: Efecto para controlar el scroll del body cuando el menú móvil está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  // LÍNEA DE AYUDA: Función para manejar el clic en los elementos de navegación
  const handleItemClick = (item: NavItem) => {
    if (item.subsections && item.subsections.length > 0) {
      toggleDropdown(item.name)
    } else {
      setIsOpen(false)
      router.push(item.href)
    }
  }

  // Variantes para las animaciones del menú móvil
  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: "linear",
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.15,
        ease: "linear",
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: -5 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.15,
        ease: "linear",
      },
    },
  }

  const dropdownVariants = {
    hidden: { opacity: 0, height: 0, overflow: "hidden" },
    visible: {
      opacity: 1,
      height: "auto",
      overflow: "hidden",
      transition: {
        height: { duration: 0.2, ease: "linear" },
        opacity: { duration: 0.1, ease: "linear" },
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      overflow: "hidden",
      transition: {
        height: { duration: 0.15, ease: "linear" },
        opacity: { duration: 0.05, ease: "linear" },
      },
    },
  }

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-emerald-950/30 backdrop-blur-md border-b border-gray/90">
        <div className="container mx-auto flex h-14 items-center px-4 sm:px-6 lg:px-8 relative">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-black/70 blur-4xl"></div>
            <div className="absolute -inset-2 bg-gradient-radial from-gray-800/30 to-transparent opacity-70"></div>
          </div>

          <div className="relative z-10 flex-1 flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <Image
                src="https://ny10xbvnsvd5lllr.public.blob.vercel-storage.com/logos/suitpax-cloud-logo-c1XSoVFuanRqhy6EfhFQ6bM9iqXHKh.webp"
                alt="Suitpax"
                width={170}
                height={35}
                priority
                className="h-7 w-auto"
              />
            </Link>

            {/* Desktop Navigation Component */}
            <DesktopNav navItems={navItems} openDropdown={openDropdown} toggleDropdown={toggleDropdown} />

            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                {user.isLoggedIn ? (
                  <span
                    onClick={logout}
                    className="flex items-center bg-white/10 text-white hover:bg-white/20 rounded-md px-3 py-1.5 text-sm backdrop-blur-lg border border-white/20"
                  >
                    <ArrowRightOnRectangleIcon className="w-4 h-4 mr-2" />
                    {user.name}
                  </span>
                ) : (
                  <Link
                    href="https://accounts.suitpax.com/sign-up"
                    className="flex items-center bg-white/10 text-white hover:bg-white/20 rounded-md px-2 py-1.5 text-sm sm:text-sm md:text-base h-7 sm:h-8 md:h-10 lg:h-7 backdrop-blur-lg border border-white/20 font-semibold"
                  >
                    Get started
                  </Link>
                )}
              </div>
              <button
                onClick={handleMenuToggle}
                className="ml-4 lg:hidden bg-white/10 text-white hover:bg-white/20 backdrop-blur-lg border border-white/20 p-2 rounded-md"
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
      {/* LÍNEA DE AYUDA: Menú móvil, visible solo cuando está abierto */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-x-0 top-14 bottom-0 z-40 bg-gradient-to-b from-gray-50 to-white lg:hidden overflow-y-auto"
            role="navigation"
            aria-label="Menú de navegación móvil"
          >
            {/* Elementos decorativos de fondo */}
            <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-br from-gray-50/30 via-transparent to-transparent"></div>
            <div className="absolute top-1/4 right-0 w-64 h-64 rounded-full bg-gradient-to-bl from-blue-50/20 via-transparent to-transparent blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-100/50 to-transparent"></div>

            <div className="relative h-full flex flex-col">
              <nav className="flex-1 pt-6 px-6">
                {navItems.map((item, index) => (
                  <motion.div key={item.name} variants={itemVariants} className="mb-3">
                    {item.name === "Log in" ? (
                      <>
                        <ShinyButton
                          onClick={() => {
                            setIsOpen(false)
                            router.push(item.href)
                          }}
                          className="w-full bg-gray-100 border border-gray-20 hover:bg-gray-300 py-3 font-medium text-lg"
                        >
                          {item.name}
                        </ShinyButton>
                        <div className="mt-2">
                          <iframe
                            src="https://status.suitpax.com/badge?theme=light"
                            width="240"
                            height="30"
                            frameBorder="3"
                            scrolling="no"
                            style={{ colorScheme: "normal" }}
                            title="Suitpax System Status"
                            aria-label="Suitpax System Status"
                          />
                        </div>
                      </>
                    ) : (
                      <div className="rounded-xl overflow-hidden bg-white shadow-sm border border-gray-100">
                        <button
                          onClick={() => handleItemClick(item)}
                          className="flex items-center justify-between w-full font-medium text-left text-gray-800 hover:text-black transition-colors py-3 px-5 hover:bg-gray-50"
                        >
                          <span className="text-base">{item.name}</span>
                          {item.subsections && (
                            <ChevronDownIcon
                              className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${
                                openDropdown === item.name ? "transform rotate-180" : ""
                              }`}
                            />
                          )}
                        </button>

                        <AnimatePresence>
                          {openDropdown === item.name && item.subsections && (
                            <motion.div
                              variants={dropdownVariants}
                              initial="hidden"
                              animate="visible"
                              exit="exit"
                              className="overflow-hidden"
                            >
                              <div className="bg-gray-100 p-4 space-y-2">
                                {item.subsections.map((subsection, subIndex) => (
                                  <motion.div
                                    key={`${subsection.name}-${subIndex}`}
                                    initial={{ opacity: 0, y: -5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                      duration: 0.15,
                                      ease: "linear",
                                    }}
                                  >
                                    <Link
                                      href={
                                        subsection.href ||
                                        `${item.href}/${subsection.name.toLowerCase().replace(/\s+/g, "-")}`
                                      }
                                      className="flex items-start p-3 rounded-lg hover:bg-gray-200/60 backdrop-blur-md transition-all duration-200 group"
                                      onClick={() => setIsOpen(false)}
                                      {...(subsection.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                    >
                                      <div className="flex-shrink-0 p-1.5 rounded-md bg-gradient-to-br from-gray-100 to-white shadow-sm border border-gray-100 group-hover:from-gray-300 group-hover:to-white group-hover:border-gray-700 transition-all duration-200">
                                        {/* LÍNEA DE AYUDA: Efecto de color verde al hacer hover sobre los iconos de subsecciones */}
                                        <subsection.icon
                                          className="h-5 w-5 text-gray-600 group-hover:text-emerald-950 transition-colors duration-200"
                                          aria-hidden="true"
                                        />
                                      </div>
                                      <div className="ml-3 flex-1">
                                        <div className="flex items-center justify-between">
                                          <p className="text-sm font-medium text-gray-800 group-hover:text-black transition-colors duration-200">
                                            {subsection.name}
                                            {subsection.external && (
                                              <FaExternalLinkAlt className="inline-block ml-1 text-xs text-gray-500" />
                                            )}
                                          </p>
                                          <div className="flex items-center">
                                            {subsection.extraComponent && (
                                              <span className="mr-2">{subsection.extraComponent}</span>
                                            )}
                                            {subsection.badge && (
                                              <span className="inline-flex items-center rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-700 border border-emerald-100">
                                                {subsection.badge}
                                              </span>
                                            )}
                                          </div>
                                        </div>
                                        <p className="mt-1 text-xs text-gray-500 group-hover:text-gray-700 transition-colors duration-200">
                                          {subsection.description}
                                        </p>
                                      </div>
                                    </Link>
                                  </motion.div>
                                ))}
                              </div>
                              {item.name === "Platform" && (
                                <div className="mt-3 px-2">
                                  <AirportTechSlider />
                                </div>
                              )}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )}
                  </motion.div>
                ))}
              </nav>

              <motion.div variants={itemVariants} className="px-6 pb-8 mt-4">
                <SocialIcons />
                <div className="mt-6">
                  <SidebarOptInForm />
                </div>
                {user.isLoggedIn && (
                  <motion.div variants={itemVariants} className="mt-6">
                    <button
                      onClick={logout}
                      className="w-full flex items-center justify-center bg-black text-white hover:bg-gray-800 rounded-xl py-3 text-base transition-colors shadow-sm"
                    >
                      <ArrowRightOnRectangleIcon className="w-5 h-5 mr-2" />
                      Logout ({user.name})
                    </button>
                  </motion.div>
                )}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation

