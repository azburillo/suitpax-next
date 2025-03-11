"use client"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import React from "react"
import {
  LightBulbIcon,
  BookOpenIcon,
  CodeBracketIcon,
  CurrencyDollarIcon,
  ChevronDownIcon,
  QuestionMarkCircleIcon,
  AcademicCapIcon,
  ChatBubbleBottomCenterTextIcon,
  GlobeAltIcon,
  MagnifyingGlassIcon,
  DocumentTextIcon,
  InboxIcon,
  CircleStackIcon,
  EnvelopeIcon,
  UserGroupIcon,
  MapPinIcon,
  BanknotesIcon,
  BuildingOffice2Icon,
  UserIcon,
} from "@heroicons/react/24/outline"
import { IoCarSportOutline, IoBusinessOutline, IoPeopleOutline, IoAirplaneOutline } from "react-icons/io5"
import { FaLinkedin, FaGithub, FaInstagram, FaProductHunt } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { BarsButton } from "@/app/components/ui/bars-button"
import { Header } from "@/app/components/header"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/app/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

const navItems = [
  {
    name: "Products",
    href: "/products",
    subsections: [
      {
        name: "Travel Software",
        badge: "New",
        icon: GlobeAltIcon,
        description: "Comprehensive travel management solutions",
      },
      { name: "Airport VIP Lounge", icon: MapPinIcon, description: "Exclusive access to premium airport lounges" },
      {
        name: "Flight Booking",
        badge: null,
        icon: MagnifyingGlassIcon,
        description: "Efficient flight search and booking system",
      },
      {
        name: "Expense Management",
        badge: null,
        icon: BanknotesIcon,
        description: "Streamlined expense tracking and reporting",
      },
      { name: "Package+", badge: null, icon: InboxIcon, description: "All-in-one travel package solutions" },
      {
        name: "Stays",
        badge: null,
        icon: BuildingOffice2Icon,
        description: "Comfortable and convenient accommodation options",
      },
      { name: "Ride", badge: null, icon: IoCarSportOutline, description: "Reliable ground transportation services" },
    ],
  },
  {
    name: "Services",
    href: "/services",
    subsections: [
      {
        name: "Business Travel",
        badge: null,
        icon: BuildingOffice2Icon,
        description: "Tailored solutions for corporate travel needs",
      },
      { name: "AI Travel Booking", badge: null, icon: LightBulbIcon, description: "Intelligent booking powered by AI" },
      {
        name: "Travel Insurance",
        badge: null,
        icon: UserIcon,
        description: "Comprehensive coverage for peace of mind",
      },
      {
        name: "Fintech",
        badge: "New",
        icon: BanknotesIcon,
        description: "Innovative financial solutions for travelers",
      },
      {
        name: "Airport VIP Access",
        icon: MapPinIcon,
        description: "Premium airport experiences and fast-track services",
      },
    ],
  },
  {
    name: "Solutions",
    href: "/for",
    subsections: [
      {
        name: "Large Companies",
        badge: null,
        icon: IoBusinessOutline,
        description: "Enterprise-level travel management",
      },
      {
        name: "Airline Teams",
        badge: "Exclusive",
        icon: IoPeopleOutline,
        description: "Specialized tools for airline professionals",
      },
      {
        name: "Travel Agencies",
        badge: null,
        icon: IoAirplaneOutline,
        description: "Empower your agency with our technology",
      },
      {
        name: "Startups",
        badge: "Popular",
        icon: UserGroupIcon,
        description: "Scalable solutions for growing businesses",
      },
      {
        name: "For Enterprise",
        badge: null,
        icon: BuildingOffice2Icon,
        description: "Customizable solutions for large organizations",
      },
      {
        name: "For Travelers",
        badge: null,
        icon: UserGroupIcon,
        description: "Enhancing individual travel experiences",
      },
      {
        name: "Financial Teams",
        badge: null,
        icon: BanknotesIcon,
        description: "Optimizing travel finance management",
      },
    ],
  },
  {
    name: "Resources",
    href: "/resources",
    subsections: [
      { name: "Blog", badge: "Updated", icon: DocumentTextIcon, description: "Latest insights and travel tips" },
      {
        name: "Trip Planning",
        badge: null,
        icon: BookOpenIcon,
        description: "Comprehensive guides for seamless journeys",
      },
      { name: "Flight Tracker", badge: null, icon: LightBulbIcon, description: "Real-time flight status information" },
      {
        name: "Help Center",
        badge: null,
        icon: QuestionMarkCircleIcon,
        description: "Support and answers to your questions",
      },
      {
        name: "Brand Guideline",
        badge: null,
        icon: LightBulbIcon,
        description: "Our brand identity and usage guidelines",
      },
    ],
  },
  {
    name: "Developers",
    href: "/developers",
    subsections: [
      { name: "Suitpax API", badge: "v2", icon: CodeBracketIcon, description: "Integrate our powerful travel APIs" },
      { name: "Engineering", badge: null, icon: CodeBracketIcon, description: "Behind the scenes of our tech stack" },
      { name: "Community", badge: "Join", icon: UserGroupIcon, description: "Connect with fellow developers" },
      { name: "Docs", badge: null, icon: DocumentTextIcon, description: "Comprehensive API documentation" },
      {
        name: "UI Components",
        badge: "Exclusive",
        icon: BookOpenIcon,
        description: "Ready-to-use UI components for developers",
      },
    ],
  },
  {
    name: "Pricing",
    href: "/pricing",
    subsections: [
      { name: "Plans", badge: "Compare", icon: CurrencyDollarIcon, description: "Find the right plan for your needs" },
      {
        name: "Enterprise",
        badge: "Custom",
        icon: BuildingOffice2Icon,
        description: "Tailored solutions for large organizations",
      },
      { name: "Travelers", badge: null, icon: UserIcon, description: "Individual pricing options" },
      {
        name: "Memberships",
        badge: null,
        icon: BanknotesIcon,
        description: "Exclusive benefits for frequent travelers",
      },
    ],
  },
  {
    name: "Company",
    href: "/company",
    subsections: [
      { name: "About", badge: null, icon: CircleStackIcon, description: "Learn about our mission and values" },
      { name: "Careers", badge: "We're Hiring!", icon: BuildingOffice2Icon, description: "Join our innovative team" },
      { name: "Press", badge: null, icon: EnvelopeIcon, description: "Latest news and media resources" },
      { name: "Our Partners", badge: null, icon: UserGroupIcon, description: "Collaborations powering our solutions" },
    ],
  },
  {
    name: "Support",
    href: "/support",
    subsections: [
      {
        name: "Contact",
        href: "/contact",
        icon: QuestionMarkCircleIcon,
        description: "Get in touch with our support team",
      },
      {
        name: "Academy",
        href: "/academy",
        icon: AcademicCapIcon,
        description: "Learn to maximize your Suitpax experience",
      },
      {
        name: "Flyn AI Agents",
        badge: "Powered by Suitpax",
        href: "/assistant",
        icon: ChatBubbleBottomCenterTextIcon,
        description: "AI-powered travel assistance",
      },
    ],
  },
]

const features = [
  {
    title: "Booking Engine",
    href: "/features/booking-engine",
    description: "Streamline your travel bookings with our powerful engine.",
  },
  {
    title: "AI-Powered Recommendations",
    href: "/features/ai-recommendations",
    description: "Get personalized travel suggestions using advanced AI.",
  },
  {
    title: "VIP Lounge Access",
    href: "/features/vip-lounge",
    description: "Enjoy exclusive access to premium airport lounges worldwide.",
  },
  {
    title: "Flight Management",
    href: "/features/flight-management",
    description: "Effortlessly manage your flights and itineraries.",
  },
]

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"

export function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdowns, setOpenDropdowns] = useState<{ [key: string]: boolean }>({})

  const handleMenuToggle = () => {
    setIsOpen(!isOpen)
  }

  const toggleDropdown = (itemName: string) => {
    setOpenDropdowns((prev) => ({ ...prev, [itemName]: !prev[itemName] }))
  }

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

  const handleItemClick = (item) => {
    if (item.subsections && item.subsections.length > 0) {
      toggleDropdown(item.name)
    }
  }

  return (
    <>
      <Header onMenuToggle={handleMenuToggle} />
      <div className="hidden lg:flex lg:justify-center lg:items-center lg:h-14 lg:bg-black/40 lg:backdrop-blur-xl lg:border-b lg:border-white/10">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Features</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">Suitpax</div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Your all-in-one travel companion for seamless journeys.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  {features.map((feature) => (
                    <ListItem key={feature.title} title={feature.title} href={feature.href}>
                      {feature.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            {navItems.slice(1).map((item) => (
              <NavigationMenuItem key={item.name}>
                <NavigationMenuTrigger>{item.name}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {item.subsections.map((subsection) => (
                      <ListItem
                        key={subsection.name}
                        title={subsection.name}
                        href={`${item.href}/${subsection.name.toLowerCase().replace(/\s+/g, "-")}`}
                      >
                        {subsection.description}
                        {subsection.badge && (
                          <span className="ml-2 inline-flex items-center rounded-md bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/20">
                            {subsection.badge}
                          </span>
                        )}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black backdrop-filter backdrop-blur-3xl lg:hidden"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between px-4 sm:px-6 pt-4 sm:pt-6 pb-2 sm:pb-4">
                <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
                  <Image
                    src="/suitpax-cloud-logo.svg"
                    alt="Suitpax"
                    width={100}
                    height={22}
                    className="h-6 sm:h-6 w-auto"
                  />
                </Link>
                <div className="flex items-center gap-2 sm:gap-3">
                  <Link
                    href="/auth/sign-in"
                    className="px-2 py-1 text-sm sm:text-base font-medium text-black bg-white rounded-md hover:bg-gray-100"
                    onClick={() => setIsOpen(false)}
                  >
                    Log in
                  </Link>
                  <Link
                    href="/auth/sign-up"
                    className="px-2 py-1 text-sm sm:text-base font-medium text-black bg-white rounded-md hover:bg-gray-100"
                    onClick={() => setIsOpen(false)}
                  >
                    Sign up
                  </Link>
                  <BarsButton onClick={() => setIsOpen(false)} isOpen={isOpen} />
                </div>
              </div>
              <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 sm:py-6 space-y-6">
                <nav className="space-y-4">
                  {navItems.map((item) => (
                    <div key={item.name} className="relative group">
                      <button
                        onClick={() => handleItemClick(item)}
                        className="flex items-center justify-between w-full font-semibold text-left text-gray-400 hover:text-gray-400 transition-colors py-2 px-3 rounded-md hover:bg-gray-800/40"
                      >
                        {item.name}
                        <ChevronDownIcon
                          className={`h-5 w-5 transition-transform ${
                            openDropdowns[item.name] ? "transform rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {openDropdowns[item.name] && (
                          <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="mt-2 space-y-2 pl-2 border-l border-gray-900"
                          >
                            {item.subsections.map((subsection, index) => (
                              <Link
                                key={`${subsection.name}-${index}`}
                                href={
                                  typeof subsection.href === "string"
                                    ? subsection.href
                                    : `${item.href}/${subsection.name.toLowerCase().replace(/\s+/g, "-")}`
                                }
                                className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors py-2 px-3 rounded-md hover:bg-white/5 group"
                                onClick={() => setIsOpen(false)}
                              >
                                <span className="p-2 mr-2 rounded-md bg-gray-500/20 backdrop-blur-sm">
                                  <subsection.icon className="w-6 h-6" />
                                </span>
                                {subsection.name}
                                {subsection.icon && subsection.badge && (
                                  <span className="ml-auto inline-flex items-center gap-x-1.5 rounded-md bg-emerald-950 px-1.5 py-0.5 text-xs font-medium text-emerald-400 ring-1 ring-inset ring-emerald-900/20">
                                    {subsection.badge}
                                  </span>
                                )}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </nav>
                <Card className="mt-6 p-4 bg-gray-400/60 overflow:hidden rounded-lg border border-transparent">
                  <CardContent>
                    <div className="mb-3 text-justify-left">
                      {" "}
                      <span className="px-1.5 py-0.5 bg-orange-300 text-black text-[10px] font-semibold rounded-xl">
                        Development mode
                      </span>
                      <h3 className="text-xs font-medium text-white mt-1.5">
                        This site is under development. Browse with consideration. Check the main page for the remaining
                        days until launch.
                      </h3>
                      <p className="text-xs text-gray-300 mt-1">Experience the next level of travel software.</p>
                    </div>
                    <h4 className="text-xs font-semibold text-white mb-1.5">What's New:</h4>
                    <ul className="text-[11px] text-gray-400 mb-3 list-disc list-inside">
                      <li>Enhanced AI-powered itinerary planning</li>
                      <li>Real-time flight tracking</li>
                      <li>Scalable solutions for global partnerships</li>
                      <li>Groundbreaking travel management technology</li>
                    </ul>
                    <h4 className="text-xs font-medium text-white mb-1.5">Let's collaborate</h4>
                    <p className="text-[11px] text-gray-400 mb-3">
                      Contact us to explore investment opportunities and be part of the revolution in the travel
                      industry. Reach out through the chat widget below or by email for more information
                      <br />
                      <a
                        href="mailto:hello@suitpax.com"
                        className="font-medium text-emerald-400 hover:underline inline-flex items-center px-3 py-0.5 rounded text-xs font-medium bg-emerald-100 text-emerald-700 mt-1"
                      >
                        hello@suitpax.com
                      </a>
                    </p>
                  </CardContent>
                </Card>
                <div className="mt-auto zinc-800">
                  <div className="flex items-center justify-left p-4 space-x-4">
                    <a href="https://x.com/suitpax" target="_blank" rel="noopener noreferrer">
                      <FaXTwitter className="text-gray-400 hover:text-white text-lg" />
                    </a>
                    <a href="https://linkedin.com/company/suitpax" target="_blank" rel="noopener noreferrer">
                      <FaLinkedin className="text-gray-400 hover:text-white text-lg" />
                    </a>
                    <a href="https://github.com/suitpax" target="_blank" rel="noopener noreferrer">
                      <FaGithub className="text-gray-400 hover:text-white text-lg" />
                    </a>
                    <a href="https://instagram.com/suitpax" target="_blank" rel="noopener noreferrer">
                      <FaInstagram className="text-gray-400 hover:text-white text-lg" />
                    </a>
                    <a href="https://www.producthunt.com/posts/suitpax" target="_blank" rel="noopener noreferrer">
                      <FaProductHunt className="text-gray-400 hover:text-white text-lg" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

