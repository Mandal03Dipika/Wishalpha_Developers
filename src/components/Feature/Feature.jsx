"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useState, useRef } from "react"
import { Globe, Wrench, DollarSign, Zap, Users, Trophy, Star, TrendingUp } from "lucide-react"

function Feature() {
  const [hoveredFeature, setHoveredFeature] = useState(null)

  const features = [
    {
      id: 1,
      title: "Global Reach",
      description: "Reach millions of players worldwide with our global distribution network.",
      icon: Globe,
      color: "from-purple-600 to-pink-600",
      hoverColor: "from-purple-500 to-pink-500",
      stats: "195+ Countries",
      details: ["Multi-language support", "Regional optimization", "Global leaderboards", "Cross-platform sync"],
    },
    {
      id: 2,
      title: "Easy to Use",
      description: "Simple, intuitive tools to publish and manage your games effortlessly.",
      icon: Wrench,
      color: "from-blue-600 to-cyan-600",
      hoverColor: "from-blue-500 to-cyan-500",
      stats: "5 Min Setup",
      details: ["Drag & drop interface", "One-click publishing", "Real-time analytics", "Automated testing"],
    },
    {
      id: 3,
      title: "Monetization",
      description: "Maximize revenue through ads, in-game purchases, and premium features.",
      icon: DollarSign,
      color: "from-green-600 to-emerald-600",
      hoverColor: "from-green-500 to-emerald-500",
      stats: "90% Revenue Share",
      details: ["Multiple ad formats", "In-app purchases", "Subscription models", "Premium upgrades"],
    },
  ]

  const additionalFeatures = [
    { icon: Zap, title: "Lightning Fast", value: "99.9% Uptime" },
    { icon: Users, title: "Active Community", value: "5M+ Developers" },
    { icon: Trophy, title: "Success Rate", value: "85% Hit Games" },
    { icon: Star, title: "User Rating", value: "4.9/5 Stars" },
  ]

  return (
    <div className="relative py-12">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20 " />
 <motion.h2
            className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Why Choose Us?
          </motion.h2>
      {/* Main Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
        {features.map((feature, index) => (
          <FeatureCard
            key={feature.id}
            feature={feature}
            index={index}
            isHovered={hoveredFeature === feature.id}
            onHover={() => setHoveredFeature(feature.id)}
            onLeave={() => setHoveredFeature(null)}
          />
        ))}
      </div>

      {/* Stats Section */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        {additionalFeatures.map((stat, index) => (
          <motion.div
            key={stat.title}
            className="text-center group"
            whileHover={{ scale: 1.05, y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <motion.div
              className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-sm border border-purple-500/20 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center group-hover:border-purple-400/50 transition-all duration-300"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <stat.icon className="w-6 h-6 text-purple-400" />
            </motion.div>
            <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
            <div className="text-sm text-gray-400">{stat.title}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

function FeatureCard({ feature, index, isHovered, onHover, onLeave }) {
  const cardRef = useRef(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [10, -10]))
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-10, 10]))

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    mouseX.set(e.clientX - centerX)
    mouseY.set(e.clientY - centerY)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
    onLeave()
  }

  return (
    <motion.div
      ref={cardRef}
      className="relative group cursor-pointer perspective-1000"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={onHover}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
    >
      <motion.div
        className={`relative p-8 rounded-2xl bg-gradient-to-br ${feature.color} shadow-2xl overflow-hidden`}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {/* Animated Background Pattern */}
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            backgroundImage: [
              "radial-gradient(circle at 20% 80%, white 1px, transparent 1px)",
              "radial-gradient(circle at 80% 20%, white 1px, transparent 1px)",
              "radial-gradient(circle at 40% 40%, white 1px, transparent 1px)",
            ],
          }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
          style={{ backgroundSize: "20px 20px" }}
        />

        {/* Floating Particles */}
        {isHovered && (
          <div className="absolute inset-0">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                initial={{
                  x: Math.random() * 300,
                  y: Math.random() * 200,
                  opacity: 0,
                }}
                animate={{
                  y: [null, -100],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        )}

        {/* Icon with 3D Effect */}
        <motion.div
          className="relative z-10 mb-6"
          style={{ transformZ: 50 }}
          whileHover={{
            rotateY: 360,
            scale: 1.1,
          }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-5xl mb-4 relative">
            <motion.div
              className="absolute inset-0 bg-white/20 rounded-full blur-xl"
              animate={{
                scale: isHovered ? [1, 1.2, 1] : 1,
                opacity: isHovered ? [0.2, 0.4, 0.2] : 0.2,
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
            <feature.icon className="w-12 h-12 text-white relative z-10" />
          </div>
        </motion.div>

        {/* Content */}
        <div className="relative z-10" style={{ transformZ: 25 }}>
          <motion.h3 className="text-2xl font-bold mb-3 text-white" whileHover={{ scale: 1.05 }}>
            {feature.title}
          </motion.h3>

          <motion.p
            className="text-white/90 mb-4 leading-relaxed"
            initial={{ opacity: 0.8 }}
            whileHover={{ opacity: 1 }}
          >
            {feature.description}
          </motion.p>

          {/* Stats Badge */}
          <motion.div
            className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.3)" }}
          >
            <TrendingUp className="w-4 h-4 mr-2" />
            <span className="text-sm font-semibold">{feature.stats}</span>
          </motion.div>

          {/* Feature Details */}
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              height: isHovered ? "auto" : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            {feature.details.map((detail, i) => (
              <motion.div
                key={detail}
                className="flex items-center text-sm text-white/80"
                initial={{ x: -20, opacity: 0 }}
                animate={{
                  x: isHovered ? 0 : -20,
                  opacity: isHovered ? 1 : 0,
                }}
                transition={{ delay: i * 0.1 }}
              >
                <motion.div
                  className="w-1 h-1 bg-white rounded-full mr-3"
                  animate={{ scale: isHovered ? [1, 1.5, 1] : 1 }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, delay: i * 0.2 }}
                />
                {detail}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Glow Effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl"
          animate={{
            boxShadow: isHovered
              ? `0 0 50px ${
                  feature.color.includes("purple")
                    ? "rgba(147, 51, 234, 0.4)"
                    : feature.color.includes("blue")
                      ? "rgba(59, 130, 246, 0.4)"
                      : "rgba(34, 197, 94, 0.4)"
                }`
              : "0 0 0px rgba(0,0,0,0)",
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Corner Accent */}
        <motion.div
          className="absolute top-4 right-4 w-8 h-8 border-2 border-white/30 rounded-full"
          animate={{ rotate: isHovered ? 360 : 0 }}
          transition={{ duration: 2, repeat: isHovered ? Number.POSITIVE_INFINITY : 0 }}
        />
      </motion.div>
    </motion.div>
  )
}

export default Feature
