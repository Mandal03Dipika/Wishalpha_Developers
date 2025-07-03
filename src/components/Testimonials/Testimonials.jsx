"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { Star, Quote, ChevronLeft, ChevronRight, Play, Award, Users } from "lucide-react"

function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      role: "Indie Developer",
      company: "PixelCraft Studios",
      comment:
        "WishAlpha helped me reach millions of players worldwide. The platform is incredibly intuitive and the support team is phenomenal!",
      image: "/images/profile1.jpg",
      rating: 5,
      gameTitle: "Mystic Quest",
      downloads: "2.5M+",
      revenue: "$150K+",
      badge: "Top Developer",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Game Designer",
      company: "Neon Games",
      comment:
        "The platform is easy to use, and the support team is amazing. I've published 5 games and each one has been a success!",
      image: "/images/profile2.jpg",
      rating: 5,
      gameTitle: "Cyber Runner",
      downloads: "1.8M+",
      revenue: "$95K+",
      badge: "Rising Star",
    },
    {
      id: 3,
      name: "Alex Chen",
      role: "Full Stack Developer",
      company: "Dragon Fire Interactive",
      comment:
        "WishAlpha's monetization tools are game-changing. I've tripled my revenue since switching to this platform!",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      gameTitle: "Dragon's Realm",
      downloads: "3.2M+",
      revenue: "$220K+",
      badge: "Elite Creator",
    },
    {
      id: 4,
      name: "Sarah Johnson",
      role: "Mobile Game Developer",
      company: "Stellar Studios",
      comment:
        "The analytics and insights provided by WishAlpha have helped me understand my players better and create more engaging games.",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      gameTitle: "Space Odyssey",
      downloads: "4.1M+",
      revenue: "$310K+",
      badge: "Platinum Developer",
    },
  ]

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, testimonials.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentData = testimonials[currentTestimonial]

  return (
    <div className="relative  mx-auto px-14 py-16  ">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-blue-900/10 " />
<motion.h2
            className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            What Developers Say
          </motion.h2>
      {/* Main Testimonial Display */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Testimonial Content */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              {/* Quote Icon */}
              <motion.div className="relative" whileHover={{ scale: 1.1, rotate: 5 }}>
                <Quote className="w-12 h-12 text-purple-400 opacity-50" />
                <motion.div
                  className="absolute inset-0 bg-purple-400/20 rounded-full blur-xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
              </motion.div>

              {/* Comment */}
              <motion.blockquote
                className="text-xl md:text-2xl text-gray-200 leading-relaxed font-medium"
                whileHover={{ scale: 1.02 }}
              >
                "{currentData.comment}"
              </motion.blockquote>

              {/* Rating */}
              <div className="flex items-center space-x-2">
                {[...Array(currentData.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                  >
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  </motion.div>
                ))}
                <span className="text-gray-400 ml-2">({currentData.rating}.0)</span>
              </div>

              {/* Author Info */}
              <div className="flex items-center space-x-4">
                <motion.div className="relative" whileHover={{ scale: 1.1 }}>
                  <img
                    src={currentData.image || "/placeholder.svg"}
                    alt={currentData.name}
                    className="w-16 h-16 rounded-full border-2 border-purple-400/50"
                  />
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400/20 to-blue-400/20"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  />
                </motion.div>

                <div>
                  <h4 className="text-lg font-bold text-white">{currentData.name}</h4>
                  <p className="text-purple-400 font-medium">{currentData.role}</p>
                  <p className="text-gray-400 text-sm">{currentData.company}</p>
                </div>

                {/* Badge */}
                <motion.div
                  className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-purple-400/30 rounded-full px-3 py-1 ml-auto"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-xs text-purple-300 font-semibold flex items-center">
                    <Award className="w-3 h-3 mr-1" />
                    {currentData.badge}
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <motion.button
                onClick={prevTestimonial}
                whileHover={{ scale: 1.1, x: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-400 hover:bg-purple-500/30 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>

              <motion.button
                onClick={nextTestimonial}
                whileHover={{ scale: 1.1, x: 2 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-400 hover:bg-purple-500/30 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>

              <motion.button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`p-2 rounded-full border transition-colors ${
                  isAutoPlaying
                    ? "bg-purple-500/30 border-purple-400/50 text-purple-300"
                    : "bg-gray-500/20 border-gray-400/30 text-gray-400"
                }`}
              >
                <Play className={`w-4 h-4 ${isAutoPlaying ? "" : "opacity-50"}`} />
              </motion.button>
            </div>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? "bg-purple-400 w-8" : "bg-gray-600"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Stats Card */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg border border-gray-700/50 shadow-2xl"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-2xl" />

              {/* Game Info */}
              <div className="relative z-10 space-y-6">
                <div className="text-center">
                  <motion.h3 className="text-2xl font-bold text-white mb-2" whileHover={{ scale: 1.05 }}>
                    {currentData.gameTitle}
                  </motion.h3>
                  <p className="text-purple-400">Featured Game</p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    className="text-center p-4 rounded-lg bg-purple-500/10 border border-purple-400/20"
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(147, 51, 234, 0.15)" }}
                  >
                    <Users className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                    <div className="text-xl font-bold text-white">{currentData.downloads}</div>
                    <div className="text-xs text-gray-400">Downloads</div>
                  </motion.div>

                  <motion.div
                    className="text-center p-4 rounded-lg bg-green-500/10 border border-green-400/20"
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(34, 197, 94, 0.15)" }}
                  >
                    <Award className="w-6 h-6 text-green-400 mx-auto mb-2" />
                    <div className="text-xl font-bold text-white">{currentData.revenue}</div>
                    <div className="text-xs text-gray-400">Revenue</div>
                  </motion.div>
                </div>

                {/* Success Indicator */}
                <motion.div
                  className="text-center p-4 rounded-lg bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-400/20"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center justify-center mb-2">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    >
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    </motion.div>
                    <span className="text-white font-semibold ml-2">Success Story</span>
                  </div>
                  <p className="text-sm text-gray-400">From indie developer to platform success</p>
                </motion.div>
              </div>

              {/* Floating Elements */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-purple-400 rounded-full"
                    initial={{
                      x: Math.random() * 300,
                      y: Math.random() * 200,
                      opacity: 0,
                    }}
                    animate={{
                      y: [null, -50],
                      opacity: [0, 0.5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: i * 0.8,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      {/* All Testimonials Preview */}
      <motion.div
        className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
              index === currentTestimonial
                ? "bg-purple-500/20 border border-purple-400/50"
                : "bg-gray-800/30 border border-gray-700/30 hover:bg-gray-700/40"
            }`}
            onClick={() => setCurrentTestimonial(index)}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center space-x-3">
              <img
                src={testimonial.image || "/placeholder.svg"}
                alt={testimonial.name}
                className="w-10 h-10 rounded-full"
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-white truncate">{testimonial.name}</p>
                <p className="text-xs text-gray-400 truncate">{testimonial.gameTitle}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Testimonials
