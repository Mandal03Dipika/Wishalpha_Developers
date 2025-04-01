import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import useAuthContext from "../context/features/useAuthContext";

function Register() {
  const {
    fullName,
    setFullName,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    handleRegister,
  } = useAuthContext();

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-900 via-gray-900 to-purple-900 px-6">
        <div className="flex flex-col md:flex-row w-full max-w-5xl shadow-xl rounded-2xl overflow-hidden border border-gray-700">
          <div className="md:w-1/2 h-96 md:h-auto">
            <img
              src="/images/carbg.jpg"
              alt="Gaming"
              className="w-full h-full object-cover"
            />
          </div>
          <motion.div
            className="md:w-1/2 bg-gray-900 p-10 text-white flex flex-col justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-pink-500">Sign Up</span>
              <span className="text-white"> to unleash</span> <br />
              <span className="text-purple-400">the Developer within you!</span>
            </h2>
            <form onSubmit={handleRegister}>
              <div className="mb-4">
                <label className="block text-sm mb-1">Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg placeholder-gray-500 focus:outline-none focus:border-orange-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm mb-1">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg placeholder-gray-500 focus:outline-none focus:border-orange-500"
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm mb-1">Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg placeholder-gray-500 focus:outline-none focus:border-orange-500"
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm mb-1">Confirm Password</label>
                <input
                  type="password"
                  placeholder="Re-enter your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg placeholder-gray-500 focus:outline-none focus:border-orange-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-pink-900 text-white py-3 rounded-lg font-semibold text-lg shadow-md hover:bg-orange-600 transition-all duration-300"
              >
                Sign Up
              </button>
            </form>
            <p className="text-center mt-8 text-gray-400"></p>
            Already have an account?
            <Link to="/login" className="text-purple-400 cursor-pointer">
              Login
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Register;
