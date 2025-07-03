"use client"

import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { Link, useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import { Menu, X, Gamepad2 } from "lucide-react"

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState("/")
  const { scrollY } = useScroll()
  const location = useLocation()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  useEffect(() => {
    setActiveLink(location.pathname)
  }, [location])

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact Us", path: "/contact" },
    { name: "Support Us", path: "/support" },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-gray-900/95 backdrop-blur-md shadow-2xl border-b border-purple-500/20" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex items-center space-x-2">
            <motion.div
              className="relative"
            >
              <img src="/images/logo.png" width={100} height={100} alt="WishAlpha Logo" className="rounded-lg" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              />
            </motion.div>
           
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={item.path}
                  className={`relative px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeLink === item.path ? "text-purple-400" : "text-white hover:text-purple-400"
                  }`}
                >
                  <motion.span whileHover={{ scale: 1.1 }} className="relative z-10">
                    {item.name}
                  </motion.span>

                  {activeLink === item.path && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg border border-purple-500/30"
                      initial={false}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}

                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-lg opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            ))}

            {/* Sign In Button */}
            <motion.a
              href="http://localhost:5174/login?redirect_uri=http://localhost:5173/"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(147, 51, 234, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="relative bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold overflow-hidden group"
            >
              <motion.div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center space-x-2">
                <Gamepad2 className="w-4 h-4" />
                <span>Sign In</span>
              </span>

              <motion.div
                className="absolute top-0 left-0 w-full h-full"
                animate={{
                  background: [
                    "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)",
                    "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)",
                  ],
                  x: ["-100%", "100%"],
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
              />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            <motion.div animate={{ rotate: isMobileMenuOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMobileMenuOpen ? 1 : 0,
            height: isMobileMenuOpen ? "auto" : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-gray-800/95 backdrop-blur-md rounded-lg mt-2"
        >
          <div className="py-4 space-y-2">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ x: -50, opacity: 0 }}
                animate={{
                  x: isMobileMenuOpen ? 0 : -50,
                  opacity: isMobileMenuOpen ? 1 : 0,
                }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-6 py-3 rounded-lg transition-all duration-300 ${
                    activeLink === item.path
                      ? "text-purple-400 bg-purple-500/10"
                      : "text-white hover:text-purple-400 hover:bg-purple-500/5"
                  }`}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}

            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{
                x: isMobileMenuOpen ? 0 : -50,
                opacity: isMobileMenuOpen ? 1 : 0,
              }}
              transition={{ delay: navItems.length * 0.1 }}
              className="px-6 pt-2"
            >
              <a
                href="http://localhost:5174/login?redirect_uri=http://localhost:5173/"
                className="block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-3 rounded-lg font-semibold text-center"
              >
                Sign In
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}

export default Navbar
