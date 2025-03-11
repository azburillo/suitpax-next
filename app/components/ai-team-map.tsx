"use client"

import { motion, AnimatePresence, useAnimation, type PanInfo } from "framer-motion"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Search, ChevronUp } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"
import { RainbowButton } from "@/app/components/ui/rainbow-button"
import { ArrowRightIcon, SparklesIcon } from "@heroicons/react/24/outline"

interface TeamMember {
  id: number
  name: string
  role: string
  country: string
  image: string
  stats: {
    intelligence: number
    speed: number
    accuracy: number
    learning: number
  }
  specialty: string
  achievements: string[]
  aiModel: string
}

const team: TeamMember[] = [
  {
    id: 1,
    name: "Amara Johnson",
    role: "Customer Experience Lead",
    country: "USA",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/copilot_image_1733258601789-ltw4LyAhNSZRPVAjqqf4ZRgJK0gVax.jpeg",
    stats: {
      intelligence: 94,
      speed: 91,
      accuracy: 89,
      learning: 93,
    },
    specialty: "Client Relations",
    achievements: ["98% satisfaction rate", "500+ VIP clients", "Service Innovation Award"],
    aiModel: "Suitpax Elite",
  },
  {
    id: 2,
    name: "Carlos Rodriguez",
    role: "Destination Expert",
    country: "Spain",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/copilot_image_1733258306688-al7HRFAgfd7AqkjrG0Kk6YZLprfWl5.jpeg",
    stats: {
      intelligence: 96,
      speed: 89,
      accuracy: 94,
      learning: 92,
    },
    specialty: "Cultural Insights",
    achievements: ["1000+ curated experiences", "Local Partnership Program", "Sustainable Tourism Award"],
    aiModel: "Suitpax Pro",
  },
  {
    id: 3,
    name: "David Chen",
    role: "Business Development Director",
    country: "Singapore",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/copilot_image_1733258306688-al7HRFAgfd7AqkjrG0Kk6YZLprfWl5.jpeg",
    stats: {
      intelligence: 95,
      speed: 88,
      accuracy: 92,
      learning: 90,
    },
    specialty: "Strategic Growth",
    achievements: ["200M+ in new revenue", "Market Expansion Lead", "Partnership Excellence"],
    aiModel: "Suitpax Pro",
  },
  {
    id: 4,
    name: "Emma Thompson",
    role: "Service Quality Director",
    country: "Canada",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/copilot_image_1733173245502-OXIsY6wMcdic4XaM1MCrVbL04NTKH5.jpeg",
    stats: {
      intelligence: 94,
      speed: 92,
      accuracy: 97,
      learning: 91,
    },
    specialty: "Quality Assurance",
    achievements: ["ISO 9001 certified", "Quality Excellence", "Training Program Lead"],
    aiModel: "Suitpax Pro",
  },
  {
    id: 5,
    name: "Fatima Al-Sayed",
    role: "Cultural Intelligence Specialist",
    country: "UAE",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/copilot_image_1733258601789-ltw4LyAhNSZRPVAjqqf4ZRgJK0gVax.jpeg",
    stats: {
      intelligence: 97,
      speed: 88,
      accuracy: 95,
      learning: 94,
    },
    specialty: "Cross-Cultural Communication",
    achievements: ["Global Etiquette Program", "Diversity in Travel Award", "Multilingual Support System"],
    aiModel: "Suitpax Elite",
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Operations Manager",
    country: "UK",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/copilot_image_1732826467689-LrUSEdCDpCE6OhjIGS0NfZ9NtqoLLd.jpeg",
    stats: {
      intelligence: 95,
      speed: 95,
      accuracy: 96,
      learning: 94,
    },
    specialty: "Process Optimization",
    achievements: ["30% efficiency increase", "Operations Excellence Award", "Digital Transformation Lead"],
    aiModel: "Suitpax Pro",
  },
  {
    id: 7,
    name: "Ken Yamamoto",
    role: "Product Strategy Lead",
    country: "Japan",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/copilot_image_1733173204242-niYvBeQyP76ZwuZCBVeCJ38udi482Q.jpeg",
    stats: {
      intelligence: 96,
      speed: 93,
      accuracy: 95,
      learning: 94,
    },
    specialty: "Market Analysis",
    achievements: ["10+ successful launches", "Product Innovation Award", "Market Research Expert"],
    aiModel: "Suitpax Elite",
  },
  {
    id: 8,
    name: "Klaudia Weber",
    role: "Compliance Director",
    country: "Germany",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/copilot_image_1733212173672-DsH7UreNSJAZpZH6AndVbpAiG0obcq.jpeg",
    stats: {
      intelligence: 93,
      speed: 87,
      accuracy: 95,
      learning: 94,
    },
    specialty: "Regulatory Compliance",
    achievements: ["Zero compliance incidents", "Risk Management Expert", "Policy Development Lead"],
    aiModel: "Suitpax Pro",
  },
  {
    id: 9,
    name: "Liam O'Connor",
    role: "Sustainability Officer",
    country: "Ireland",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/copilot_image_1732826467689-LrUSEdCDpCE6OhjIGS0NfZ9NtqoLLd.jpeg",
    stats: {
      intelligence: 94,
      speed: 89,
      accuracy: 96,
      learning: 95,
    },
    specialty: "Eco-friendly Travel Solutions",
    achievements: ["Carbon Neutral Certification", "Green Travel Innovation", "Sustainable Tourism Leader"],
    aiModel: "Suitpax Pro",
  },
  {
    id: 10,
    name: "Maya Williams",
    role: "Global Partnerships Manager",
    country: "UK",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/copilot_image_1732835194595-gfyHcZhyuZqt3KfxPyAX06ma5tJFUs.jpeg",
    stats: {
      intelligence: 96,
      speed: 89,
      accuracy: 93,
      learning: 92,
    },
    specialty: "Strategic Alliances",
    achievements: ["50+ partner networks", "Partnership Excellence", "Global Expansion Lead"],
    aiModel: "Suitpax Elite",
  },
  {
    id: 11,
    name: "Olivia Kim",
    role: "User Experience Designer",
    country: "South Korea",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/copilot_image_1733173245502-OXIsY6wMcdic4XaM1MCrVbL04NTKH5.jpeg",
    stats: {
      intelligence: 95,
      speed: 92,
      accuracy: 97,
      learning: 93,
    },
    specialty: "Intuitive Interface Design",
    achievements: ["App Store Editor's Choice", "UX Design Award", "Accessibility Champion"],
    aiModel: "Suitpax Pro",
  },
  {
    id: 12,
    name: "Raj Patel",
    role: "Data Analytics Lead",
    country: "India",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/copilot_image_1733173204242-niYvBeQyP76ZwuZCBVeCJ38udi482Q.jpeg",
    stats: {
      intelligence: 98,
      speed: 94,
      accuracy: 96,
      learning: 95,
    },
    specialty: "Predictive Travel Trends",
    achievements: ["Big Data Excellence Award", "AI-Driven Insights", "Personalization Algorithm Patent"],
    aiModel: "Suitpax Elite",
  },
  {
    id: 13,
    name: "Sarah Chen",
    role: "Travel Operations Manager",
    country: "Singapore",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/copilot_image_1732826490181-4USKUO5y3l6NeDYC3M5Gwz2Lo12PXc.jpeg",
    stats: {
      intelligence: 95,
      speed: 88,
      accuracy: 92,
      learning: 90,
    },
    specialty: "Process Optimization",
    achievements: ["30% efficiency increase", "Team of the Year 2023", "Customer Excellence Award"],
    aiModel: "Suitpax Pro",
  },
  {
    id: 14,
    name: "Sofia Anderson",
    role: "Innovation Strategy Lead",
    country: "Sweden",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/copilot_image_1733253368697-aQN7fWSQN1ixVINQBkn3NEZewFtJVX.jpeg",
    stats: {
      intelligence: 95,
      speed: 90,
      accuracy: 96,
      learning: 93,
    },
    specialty: "Digital Transformation",
    achievements: ["Digital Excellence Award", "Change Management Lead", "Innovation Pioneer"],
    aiModel: "Suitpax Elite",
  },
  {
    id: 15,
    name: "Yuki Tanaka",
    role: "Product Development Director",
    country: "Japan",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/copilot_image_1732746827428-bbbHBRl6EugVikvpW6qoyBlP6SWQLm.jpeg",
    stats: {
      intelligence: 93,
      speed: 87,
      accuracy: 95,
      learning: 94,
    },
    specialty: "User Experience",
    achievements: ["10+ successful launches", "UX Design Award", "Innovation Leader 2023"],
    aiModel: "Suitpax Pro",
  },
]

const StatBar = ({ value, label, color }: { value: number; label: string; color: string }) => (
  <div className="relative w-full mb-1">
    <div className="flex justify-between text-xs mb-1">
      <span className="text-gray-600 dark:text-gray-300">{label}</span>
      <span className="font-medium text-gray-800 dark:text-gray-200">{value}</span>
    </div>
    <div className="h-1.5 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
        className={`h-full ${color}`}
      />
    </div>
  </div>
)

const ImageSkeleton = () => (
  <div className="relative w-full h-full">
    <Skeleton className="absolute inset-0" />
  </div>
)

export function AITeamMap() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const controls = useAnimation()

  useEffect(() => {
    const fetchTeamMembers = async () => {
      setIsLoading(true)
      // Simulating API call with setTimeout
      setTimeout(() => {
        setTeamMembers(team)
        setIsLoading(false)
      }, 1000)
    }

    fetchTeamMembers()
  }, [])

  const filteredTeam = teamMembers.filter(
    (member) =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.country.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.y > 100) {
      setSelectedMember(null)
    } else {
      controls.start({ y: 0 })
    }
  }

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-gray-600/20 to-gray-600 rounded-xl backdrop-blur-sm shadow-xl p-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter text-white mr-4">How can we help?</h2>
              <span className="inline-block px-2 py-1 text-xs font-medium text-emerald-950 bg-emerald-100 rounded-full">
                Travel Center
              </span>
            </div>
            <p className="text-black max-w-2xl mx-auto text-xs sm:text-base mb-8">
              Specialized AI agents working together to revolutionize travel technology
            </p>
            <div className="relative max-w-md mx-auto">
              <input
                type="text"
                placeholder="Ask a question"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-3 py-2 rounded-md bg-transparent backdrop-blur border border-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white placeholder-gray-400 text-sm"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <div className="mt-4">
              <RainbowButton
                href="https://cal.com/suitpax/alberto-zurano"
                className="relative inline-flex items-center rounded-full h-7 px-3 py-1 text-xs sm:text-sm font-medium text-black transition-all duration-200"
                size="sm"
              >
                <SparklesIcon className="h-4 w-4 mr-2" />
                <span className="mr-2">Try Flyn AI</span>
                <ArrowRightIcon className="h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
              </RainbowButton>
            </div>
          </motion.div>

          {/* Featured Members Slider */}
          <div className="mb-10 overflow-hidden">
            <h3 className="text-sm font-semibold mb-6 text-white">AI Travel Specialists</h3>
            <div className="flex flex-nowrap space-x-4 pb-4 overflow-x-auto scrollbar-hide">
              {(isLoading ? Array(5).fill({}) : filteredTeam).map((member, index) => (
                <motion.div
                  key={member.id || index}
                  className="flex-none w-[240px] sm:w-[300px]"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  onClick={() => !isLoading && setSelectedMember(member)}
                >
                  <div className="relative group rounded-xl overflow-hidden cursor-pointer">
                    <div className="relative h-[320px] sm:h-[400px]">
                      {isLoading ? (
                        <ImageSkeleton />
                      ) : (
                        <>
                          <Image
                            src={member.image || "/placeholder.svg"}
                            alt={member.name}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-100 transition-opacity duration-300" />
                          <div className="absolute bottom-4 left-4 right-4 text-white">
                            <h3 className="text-xl sm:text-2xl font-bold">{member.name}</h3>
                            <p className="text-sm sm:text-base text-gray-200">{member.role}</p>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <AnimatePresence>
            {selectedMember && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-end justify-center p-4 sm:p-6 md:p-8"
                onClick={() => setSelectedMember(null)}
              >
                <motion.div
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "100%" }}
                  transition={{ type: "spring", damping: 25, stiffness: 500 }}
                  drag="y"
                  dragConstraints={{ top: 0, bottom: 0 }}
                  dragElastic={0.2}
                  onDragEnd={handleDragEnd}
                  onClick={(e) => e.stopPropagation()}
                  className="bg-white dark:bg-gray-800 rounded-t-2xl overflow-hidden shadow-2xl w-full max-w-lg mx-auto flex flex-col relative"
                >
                  <div className="w-12 h-1 bg-gray-300 dark:bg-gray-600 rounded-full mx-auto my-2" />
                  <motion.div animate={controls} className="relative w-full h-[300px] sm:h-[400px]">
                    <Image
                      src={selectedMember.image || "/placeholder.svg"}
                      alt={selectedMember.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1">
                        {selectedMember.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-300">{selectedMember.role}</p>
                    </div>
                  </motion.div>
                  <div className="p-4 flex-1 overflow-y-auto">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-sm sm:text-base font-bold text-emerald-900 dark:text-emerald-100">
                          {selectedMember.name}
                        </h3>
                        <p className="text-xs text-gray-700 dark:text-gray-300">{selectedMember.role}</p>
                      </div>
                      <span className="px-2 py-1 text-xs font-medium text-emerald-700 bg-emerald-100 rounded-full">
                        {selectedMember.country}
                      </span>
                    </div>
                    <div className="mb-4">
                      <h4 className="text-xs font-semibold text-emerald-900 dark:text-emerald-100 mb-2">
                        AI Capabilities
                      </h4>
                      <div className="space-y-1">
                        <StatBar
                          value={selectedMember.stats.intelligence}
                          label="Intelligence"
                          color="bg-gradient-to-r from-emerald-500 to-emerald-600"
                        />
                        <StatBar
                          value={selectedMember.stats.speed}
                          label="Speed"
                          color="bg-gradient-to-r from-emerald-400 to-emerald-500"
                        />
                        <StatBar
                          value={selectedMember.stats.accuracy}
                          label="Accuracy"
                          color="bg-gradient-to-r from-emerald-600 to-emerald-700"
                        />
                        <StatBar
                          value={selectedMember.stats.learning}
                          label="Learning"
                          color="bg-gradient-to-r from-emerald-500 to-emerald-600"
                        />
                      </div>
                    </div>
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-emerald-900 dark:text-emerald-100 mb-2">Specialty</h4>
                      <p className="text-xs text-gray-700 dark:text-gray-300">{selectedMember.specialty}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-emerald-900 dark:text-emerald-100 mb-2">
                        Achievements
                      </h4>
                      <ul className="list-disc list-inside text-xs text-gray-700 dark:text-gray-300">
                        {selectedMember.achievements.map((achievement, index) => (
                          <li key={index}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-2 flex justify-between items-center text-xs">
                    <span className="text-gray-700 dark:text-gray-300">Platform: {selectedMember.aiModel}</span>
                    <button className="px-2 py-1 bg-emerald-600 text-white rounded-full font-medium hover:bg-emerald-700 transition-colors">
                      Connect
                    </button>
                  </div>
                  <div className="absolute top-2 left-0 right-0 flex justify-center">
                    <ChevronUp className="text-gray-400 animate-bounce" />
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

