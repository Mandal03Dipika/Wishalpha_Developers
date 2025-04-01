import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Support() {
  return (
    <>
      <div className="relative h-screen overflow-hidden">
        <div
          id="parallax-bg"
          className="absolute top-0 left-0 w-full h-full bg-[url(/images/carbg.jpg)] bg-cover bg-center bg-fixed"
        ></div>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-0"></div>
        <div className="relative flex flex-col items-center justify-center h-full px-4">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 text-center bg-gradient-to-r from-purple-400 to-gray-200 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Support Us
          </motion.h1>
          <motion.p
            className="text-base md:text-lg text-gray-300 mb-8 max-w-2xl text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            If you enjoy our platform, consider supporting us to keep it running
            and ad-free. Your support helps us bring more awesome games to you!
          </motion.p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to=""
              className="bg-purple-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-purple-700 transition-colors"
            >
              Donate Now
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Support;
