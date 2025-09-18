import { motion, useScroll, useTransform } from "framer-motion"
import { useState, useRef } from "react"
import { Code, FileText, Headphones, Zap, Download, Globe, Shield, Cpu } from "lucide-react"

function DeveloperTools() {
  const containerRef = useRef(null)
  const [hoveredTool, setHoveredTool] = useState(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const tools = [
    {
      id: 1,
      icon: Code,
      title: "SDKs for Unity, Unreal, and more",
      description: "Integrate seamlessly with popular game engines and frameworks.",
      color: "from-purple-500 to-pink-500",
      hoverColor: "from-purple-400 to-pink-400",
      features: ["Unity Integration", "Unreal Engine Support", "Custom APIs", "Real-time Sync"],
    },
    {
      id: 2,
      icon: FileText,
      title: "Comprehensive Documentation",
      description: "Step-by-step guides, tutorials, and complete API references.",
      color: "from-blue-500 to-cyan-500",
      hoverColor: "from-blue-400 to-cyan-400",
      features: ["Interactive Tutorials", "Code Examples", "Video Guides", "Community Wiki"],
    },
    {
      id: 3,
      icon: Headphones,
      title: "24/7 Developer Support",
      description: "Get expert help whenever you need it from our dedicated team.",
      color: "from-green-500 to-teal-500",
      hoverColor: "from-green-400 to-teal-400",
      features: ["Live Chat", "Video Calls", "Priority Support", "Community Forums"],
    },
  ]

  const additionalFeatures = [
    { icon: Zap, title: "Lightning Fast", description: "Optimized for performance" },
    { icon: Download, title: "Easy Integration", description: "One-click setup process" },
    { icon: Globe, title: "Global CDN", description: "Worldwide content delivery" },
    { icon: Shield, title: "Enterprise Security", description: "Bank-level encryption" },
  ]

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden">
      {/* Dynamic Background */}
      <motion.div
      
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('/images/carbg.jpg')",
          filter: "brightness(0.4) contrast(1.3)",
        }}
      />

      {/* Animated Gradient Overlay */}
      <motion.div
        className="absolute inset-0 z-10"
        animate={{
          background: [
            "linear-gradient(45deg, rgba(147, 51, 234, 0.4) 0%, rgba(0, 0, 0, 0.8) 50%, rgba(59, 130, 246, 0.4) 100%)",
            "linear-gradient(225deg, rgba(59, 130, 246, 0.4) 0%, rgba(0, 0, 0, 0.8) 50%, rgba(147, 51, 234, 0.4) 100%)",
            "linear-gradient(45deg, rgba(147, 51, 234, 0.4) 0%, rgba(0, 0, 0, 0.8) 50%, rgba(59, 130, 246, 0.4) 100%)",
          ],
        }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
      />

      {/* Floating Code Snippets */}
      <FloatingCodeSnippets />

      <motion.div
        style={{ opacity }}
        className="relative z-20 flex flex-col items-center justify-center min-h-screen px-6 py-20"
      >
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-5xl md:text-7xl font-bold mb-6"
            animate={{
              textShadow: [
                "0 0 20px rgba(147, 51, 234, 0.5)",
                "0 0 40px rgba(59, 130, 246, 0.5)",
                "0 0 20px rgba(147, 51, 234, 0.5)",
              ],
            }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          >
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Developer
            </span>
            <br />
            <motion.span
              className="text-white"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Tools
            </motion.span>
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Access powerful tools to <span className="text-purple-400 font-semibold">build</span>,{" "}
            <span className="text-blue-400 font-semibold">test</span>, and{" "}
            <span className="text-cyan-400 font-semibold">publish</span> your games.
          </motion.p>
        </motion.div>

        {/* Main Tools Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {tools.map((tool, index) => (
            <ToolCard
              key={tool.id}
              tool={tool}
              index={index}
              isHovered={hoveredTool === tool.id}
              onHover={() => setHoveredTool(tool.id)}
              onLeave={() => setHoveredTool(null)}
            />
          ))}
        </div>

        {/* Additional Features */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {additionalFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="flex flex-col items-center p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-400/50 transition-all duration-300 group"
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.div
                className="p-3 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 mb-3 group-hover:from-purple-400/30 group-hover:to-blue-400/30 transition-all duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <feature.icon className="w-6 h-6 text-purple-400" />
              </motion.div>
              <h4 className="text-sm font-semibold text-white mb-1">{feature.title}</h4>
              <p className="text-xs text-gray-400 text-center">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 40px rgba(147, 51, 234, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-10 py-4 rounded-full text-lg font-semibold relative overflow-hidden group"
          >
            <span className="relative z-10 flex items-center space-x-2">
              <Cpu className="w-5 h-5" />
              <span>Start Building Now</span>
            </span>

            <motion.div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  )
}

function ToolCard({ tool, index, isHovered, onHover, onLeave }) {
  return (
    <motion.div
      className="relative group cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ y: -10, scale: 1.02 }}
      onHoverStart={onHover}
      onHoverEnd={onLeave}
    >
      <div className="relative p-8 rounded-2xl backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl hover:border-purple-400/50 transition-all duration-500 overflow-hidden">
        {/* Animated Background */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
        />

        {/* Floating Particles */}
        {isHovered && (
          <div className="absolute inset-0">
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                initial={{
                  x: Math.random() * 300,
                  y: Math.random() * 200,
                  opacity: 0,
                }}
                animate={{
                  y: [null, -50],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        )}

        {/* Icon */}
        <motion.div
          className="relative z-10 mb-6"
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.5 }}
        >
          <div className={`p-4 rounded-full bg-gradient-to-r ${tool.color} inline-block`}>
            <tool.icon className="w-8 h-8 text-white" />
          </div>
        </motion.div>

        {/* Content */}
        <div className="relative z-10">
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
            {tool.title}
          </h3>
          <p className="text-gray-300 mb-6 leading-relaxed">{tool.description}</p>

          {/* Features List */}
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              height: isHovered ? "auto" : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            {tool.features.map((feature, i) => (
              <motion.div
                key={feature}
                className="flex items-center text-sm text-gray-400"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: isHovered ? 0 : -20, opacity: isHovered ? 1 : 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-1 h-1 bg-purple-400 rounded-full mr-2" />
                {feature}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Hover Glow Effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl"
          animate={{
            boxShadow: isHovered ? "0 0 50px rgba(147, 51, 234, 0.3)" : "0 0 0px rgba(147, 51, 234, 0)",
          }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  )
}

function FloatingCodeSnippets() {
  const codeSnippets = [
    "{ game: 'awesome' }",
    "function play() { }",
    "const score = 1000;",
    "if (win) celebrate();",
    "player.levelUp();",
  ]

  return (
    <div className="absolute inset-0 z-15 pointer-events-none">
      {codeSnippets.map((snippet, i) => (
        <motion.div
          key={i}
          className="absolute text-xs text-purple-400/30 font-mono"
          initial={{
            x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1920),
            y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 1080),
            opacity: 0,
          }}
          animate={{
            y: [null, -100],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 2,
          }}
        >
          {snippet}
        </motion.div>
      ))}
    </div>
  )
}

export default DeveloperTools
