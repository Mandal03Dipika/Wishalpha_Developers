import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="bg-gray-800 p-3 flex justify-between items-center shadow-lg">
        <motion.h1
          className="text-2xl font-bold text-purple-400"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src="/images/logo.png" width={80} height={30} alt="" />
        </motion.h1>
        <div className="flex space-x-6 items-center">
          <Link
            to="/"
            className="text-white hover:text-purple-400 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white hover:text-purple-400 transition-colors"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-white hover:text-purple-400 transition-colors"
          >
            Contact Us
          </Link>
          <Link
            to="/support"
            className="text-white hover:text-purple-400 transition-colors"
          >
            Support Us
          </Link>
       
            <a
                // href="http://account.wishalpha.com/login?redirect_uri=https://developer.wishalpha.com/"
              href="http://localhost:5174/login?redirect_uri=http://localhost:5173/"
              className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Sign in
            </a>

        </div>
      </nav>
    </>
  );
}

export default Navbar;
