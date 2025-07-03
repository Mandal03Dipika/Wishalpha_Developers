
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion"
import { Link } from "react-router-dom"
import { useState, useEffect, useRef } from "react"
import { Play, ChevronDown, Sparkles, Gamepad2, Users, Trophy } from "lucide-react"

function Carousal() {
  const containerRef = useRef(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springConfig = { damping: 25, stiffness: 700 }
  const mouseXSpring = useSpring(mouseX, springConfig)
  const mouseYSpring = useSpring(mouseY, springConfig)

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = containerRef.current?.getBoundingClientRect()
      if (rect) {
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        mouseX.set(x)
        mouseY.set(y)
        setMousePosition({
          x: (e.clientX / window.innerWidth) * 100,
          y: (e.clientY / window.innerHeight) * 100,
        })
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener("mousemove", handleMouseMove)
      return () => container.removeEventListener("mousemove", handleMouseMove)
    }
  }, [mouseX, mouseY])

  const stats = [
    { icon: Users, value: "5M+", label: "Active Players" },
    { icon: Gamepad2, value: "10K+", label: "Games Published" },
    { icon: Trophy, value: "1M+", label: "Tournaments" },
  ]

  return (
    <div ref={containerRef} className="relative h-screen overflow-hidden">
      {/* Dynamic Background with Parallax */}
      <motion.div
      
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('/images/carbg.jpg')",
          filter: "brightness(0.7) contrast(1.2)",
        }}
      />

      {/* Animated Overlay */}
      <motion.div
        className="absolute inset-0 z-10"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(147, 51, 234, 0.1) 0%, rgba(0, 0, 0, 0.9) 50%)`,
        }}
      />

      {/* Particle Field */}
      <ParticleField />
      <ParticleField/>

      {/* Floating Elements */}
      <FloatingElements mouseXSpring={mouseXSpring} mouseYSpring={mouseYSpring} />

      {/* Main Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-20 flex flex-col items-center justify-center h-full px-6"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Hero Title */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center mb-8"
        >
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6  leading-tight"
            animate={{
              textShadow: [
                "0 0 20px rgba(147, 51, 234, 0.5)",
                "0 0 40px rgba(59, 130, 246, 0.5)",
                "0 0 20px rgba(147, 51, 234, 0.5)",
              ],
            }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          >
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Build, Publish,
            </span>
            <br />
            <motion.span
              className="text-white"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              & Monetize
            </motion.span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Your Games
            </span>
          </motion.h1>

          <motion.div
            className="flex items-center justify-center mb-6"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, type: "spring", stiffness: 200 }}
          >
            <Sparkles className="w-6 h-6 text-yellow-400 mr-2" />
            <span className="text-yellow-400 font-semibold">Next-Gen Gaming Platform</span>
            <Sparkles className="w-6 h-6 text-yellow-400 ml-2" />
          </motion.div>
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl text-center leading-relaxed"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Join <span className="text-purple-400 font-bold">WishAlpha</span>, the revolutionary platform where indie
          developers showcase their games to{" "}
          <motion.span
            className="text-cyan-400 font-bold"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            millions of players
          </motion.span>{" "}
          worldwide.
        </motion.p>

        {/* CTA Buttons */}
    

        {/* Stats */}
       

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="flex flex-col items-center text-purple-400"
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}

// Particle Field Component
function ParticleField() {
  return (
    <div className="absolute inset-0 z-10">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-purple-400 rounded-full"
          initial={{
            x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1920),
            y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 1080),
            opacity: Math.random(),
          }}
          animate={{
            x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1920),
            y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 1080),
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      ))}
    </div>
  )
}

// Floating Elements Component
function FloatingElements({ mouseXSpring, mouseYSpring }) {
  return (
    <div className="absolute inset-0 z-15 pointer-events-none">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-20 h-20 border border-purple-500/20 rounded-full"
          style={{
            x: mouseXSpring,
            y: mouseYSpring,
            translateX: `-50% + ${i * 20}px`,
            translateY: `-50% + ${i * 20}px`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 3 + i,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 0.5,
          }}
        />
      ))}
    </div>
  )
}

export default Carousal
