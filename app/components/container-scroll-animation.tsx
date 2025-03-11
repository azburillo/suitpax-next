"use client"
import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { teamMembers } from "@/app/data/team-members"

const Rainbow = () => {
  return (
    <div className="absolute top-0 left-0 right-0 h-1 overflow-hidden">
      <div
        className="h-full w-[200%] animate-move-infinite"
        style={{
          background: "linear-gradient(to right, #00f0ff, #0000ff, #00f0ff, #0000ff)",
          backgroundSize: "50% 100%",
        }}
      />
    </div>
  )
}

export const ContainerScroll = ({
  users = teamMembers,
}: {
  users?: {
    name: string
    designation: string
    image: string
    badge?: string
    progress?: number
    video?: string
  }[]
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
  })
  const [isMobile, setIsMobile] = useState(false)
  const [videoLoaded, setVideoLoaded] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  useEffect(() => {
    const video = document.querySelector("video")
    if (video) {
      video.addEventListener("loadeddata", () => setVideoLoaded(true))
    }
  }, [])

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1]
  }

  const rotate = useSpring(useTransform(scrollYProgress, [0, 1], [20, 0]), {
    stiffness: 50,
    damping: 20,
  })
  const scale = useSpring(useTransform(scrollYProgress, [0, 1], scaleDimensions()), {
    stiffness: 50,
    damping: 20,
  })
  const translate = useSpring(useTransform(scrollYProgress, [0, 1], [0, -100]), {
    stiffness: 50,
    damping: 20,
  })

  // Early return if users is empty or undefined
  if (!users || users.length === 0) {
    return <div>No users to display.</div>
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className="h-[60rem] md:h-[80rem] flex items-center justify-center relative p-2 md:p-20 w-full"
        ref={containerRef}
      >
        <div
          className="py-10 md:py-40 w-full relative"
          style={{
            perspective: "1000px",
          }}
        >
          <Header translate={translate} />
          <Card rotate={rotate} translate={translate} scale={scale} users={users} videoLoaded={videoLoaded} />
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center mb-20">
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
          Our team is composed of highly skilled thinkers who are passionate about revolutionizing the travel industry.
          We partner with innovative companies to deliver cutting-edge travel solutions.
        </p>
      </div>
    </div>
  )
}

export const Header = ({ translate, titleComponent }: any) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="div max-w-5xl mx-auto text-center"
    >
      <h1 className="text-2xl font-semibold tracking-tighter text-emerald-950 dark:text-emerald-50">
        Meet our
        <br />
        <span className="text-7xl font-bold text-emerald-950 dark:text-emerald-400 tracking-tighter">skybots</span>
      </h1>
    </motion.div>
  )
}

export const Card = ({
  rotate,
  scale,
  translate,
  users,
  videoLoaded,
}: {
  rotate: any
  scale: any
  translate: any
  users: {
    name: string
    designation: string
    image: string
    badge?: string
    progress?: number
    video?: string
  }[]
  videoLoaded: boolean
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: videoLoaded ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full border-4 border-[#6C6C6C] p-6 bg-[#222222] rounded-[30px] shadow-2xl overflow-hidden relative"
    >
      <Rainbow />
      <div className="relative h-full w-full rounded-2xl overflow-hidden">
        {/* Conditionally render video if available */}
        {users[0].video ? (
          <video src={users[0].video} className="w-full h-full object-cover" autoPlay loop muted playsInline />
        ) : (
          <img src={users[0].image || "/placeholder.svg"} alt={users[0].name} className="w-full h-full object-cover" />
        )}
      </div>
    </motion.div>
  )
}

