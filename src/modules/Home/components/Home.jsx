import Carousal from "../../../components/Carousal/Carousal";
import DeveloperTools from "../../../components/DeveloperTools/DeveloperTools";
import Feature from "../../../components/Feature/Feature";
import { motion } from "framer-motion";
import Testimonials from "../../../components/Testimonials/Testimonials";

function Home() {
  return (
    <>
      <div className="min-h-screen bg-gray-900 text-white">
        <Carousal />
        <div className="py-16 px-6 bg-gray-800">
          <motion.h2
            className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Why Choose Us?
          </motion.h2>
          <Feature />
        </div>
        <DeveloperTools />
        <div className="py-16 px-6 bg-gray-800">
          <motion.h2
            className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            What Developers Say
          </motion.h2>
          <Testimonials />
        </div>
      </div>
    </>
  );
}

export default Home;
