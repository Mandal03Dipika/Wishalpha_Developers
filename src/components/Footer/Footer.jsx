"use client"

import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Mail, Phone, MapPin, Github, Twitter, DiscIcon as Discord, Gamepad2, Sparkles, Heart } from "lucide-react"
import { useState } from "react"

function Footer() {
  const [hoveredSocial, setHoveredSocial] = useState(null)

  const socialLinks = [
    { icon: Github, href: "#", color: "hover:text-gray-400", name: "GitHub" },
    { icon: Twitter, href: "#", color: "hover:text-blue-400", name: "Twitter" },
    { icon: Discord, href: "#", color: "hover:text-indigo-400", name: "Discord" },
  ]

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Contact Us", path: "/contact" },
    { name: "About Us", path: "/about" },
    { name: "Support Us", path: "/support" },
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/terms" },
  ]

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              "radial-gradient(circle at 20% 80%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 40% 40%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
        />

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1920),
              y: Math.random() * 400,
              opacity: Math.random() * 0.5,
            }}
            animate={{
              y: [null, -100],
              opacity: [null, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-3 mb-6">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="relative"
              >
                <Gamepad2 className="w-10 h-10 text-purple-400" />
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(147, 51, 234, 0.3)",
                      "0 0 40px rgba(147, 51, 234, 0.6)",
                      "0 0 20px rgba(147, 51, 234, 0.3)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
              </motion.div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                WishAlpha
              </h3>
            </motion.div>

            <motion.p
              className="text-gray-300 text-lg mb-6 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              The ultimate platform for game developers and players. Join our community and experience the future of
              gaming.
            </motion.p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.2, y: -5 }}
                  onHoverStart={() => setHoveredSocial(social.name)}
                  onHoverEnd={() => setHoveredSocial(null)}
                  className={`relative p-3 bg-gray-800 rounded-full transition-all duration-300 ${social.color} group`}
                >
                  <social.icon className="w-5 h-5" />

                  {hoveredSocial === social.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white px-2 py-1 rounded text-sm whitespace-nowrap"
                    >
                      {social.name}
                    </motion.div>
                  )}

                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-purple-400 mb-6 flex items-center">
              <Sparkles className="w-5 h-5 mr-2" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-purple-400 transition-all duration-300 flex items-center group"
                  >
                    <motion.span
                      className="w-2 h-2 bg-purple-400 rounded-full mr-3 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.5 }}
                    />
                    <span className="group-hover:translate-x-2 transition-transform duration-300">{link.name}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-bold text-purple-400 mb-6 flex items-center">
              <MapPin className="w-5 h-5 mr-2" />
              Contact Us
            </h3>
            <div className="space-y-4">
              <motion.div whileHover={{ x: 5 }} className="flex items-center text-gray-300 group">
                <Mail className="w-5 h-5 mr-3 text-purple-400 group-hover:text-blue-400 transition-colors" />
                <span>wishalpha25@gmail.com</span>
              </motion.div>
              <motion.div whileHover={{ x: 5 }} className="flex items-center text-gray-300 group">
                <Phone className="w-5 h-5 mr-3 text-purple-400 group-hover:text-blue-400 transition-colors" />
                <span>+91 8240707689</span>
              </motion.div>
            </div>

            {/* Newsletter Signup */}
            <motion.div
              className="mt-8 p-4 bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-lg border border-purple-500/20"
              whileHover={{ scale: 1.02 }}
            >
              <h4 className="text-sm font-semibold text-purple-400 mb-2">Stay Updated</h4>
              <p className="text-xs text-gray-400 mb-3">Get the latest gaming news and updates</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-gray-800 text-white px-3 py-2 rounded-l-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-2 rounded-r-lg text-sm font-semibold"
                >
                  Join
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 pt-8 border-t border-gray-700"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p className="text-gray-400 text-center md:text-left flex items-center" whileHover={{ scale: 1.05 }}>
              &copy; 2025 WishAlpha. Made with{" "}
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                className="mx-1"
              >
                <Heart className="w-4 h-4 text-red-500 fill-current" />
              </motion.span>
              for gamers worldwide.
            </motion.p>

            <motion.div
              className="mt-4 md:mt-0 flex items-center space-x-4 text-sm text-gray-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <span>Powered by wish technology</span>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Sparkles className="w-4 h-4 text-purple-400" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
