"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Outlet, useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"

function GuestLayout() {
  const location = useLocation()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time for smooth transitions
    setIsLoading(true)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-gray-900 flex items-center justify-center"
          >
            <motion.div
              className="flex flex-col items-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <motion.div
                className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />
              <motion.p
                className="mt-4 text-purple-400 font-semibold"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              >
                Loading WishAlpha...
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <Navbar />

      {/* Main Content with Page Transitions */}
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="pt-20" // Account for fixed navbar
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>

      {/* Footer */}
      <Footer />

      {/* Scroll to Top Button */}
      <ScrollToTopButton />
    </div>
  )
}

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 bg-gradient-to-r from-purple-500 to-blue-500 text-white p-3 rounded-full shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
        >
          <motion.div animate={{ y: [-2, 2, -2] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
            ↑
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default GuestLayout
