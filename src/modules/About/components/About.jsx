import { motion } from "framer-motion";

function About() {
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
            About Us
          </motion.h1>
          <motion.p
            className="text-base md:text-lg text-gray-300 mb-8 max-w-2xl text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Welcome to WishAlpha! We are passionate about bringing you the best
            gaming experience without the need for downloads. Our platform
            offers a wide variety of games, from action-packed adventures to
            brain-teasing puzzles. Join us and start playing today!
          </motion.p>
        </div>
      </div>
    </>
  );
}

export default About;
