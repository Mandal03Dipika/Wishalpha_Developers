import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Carousal() {
  return (
    <>
      <div className="relative h-screen overflow-hidden">
        <div
          id="parallax-bg"
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-fixed bg-[url(/images/carbg.jpg)]"
        ></div>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-0"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 text-center bg-gradient-to-r from-purple-400 to-gray-200 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Build, Publish, and Monetize Your Games
          </motion.h1>
          <motion.p
            className="text-base md:text-lg text-gray-300 mb-8 max-w-2xl text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Join WishAlpha, the leading platform for indie developers to
            showcase their games to millions of players worldwide.
          </motion.p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/register"
              className="bg-purple-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-purple-700 transition-colors"
            >
              Get Started
            </Link>
          </motion.div>
        </div>
        <div className="relative z-10 h-[1000px] bg-red-600 text-white flex items-center justify-center text-4xl">
          Scroll Up and Down this page to see the parallax scrolling effect.
          <br />
          This div is just here to enable scrolling.
          <br />
          Tip: Try to remove the `bg-fixed` property to remove the scrolling
          effect.
        </div>
      </div>
    </>
  );
}

export default Carousal;
