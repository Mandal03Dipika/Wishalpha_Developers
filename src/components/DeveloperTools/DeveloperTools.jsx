import { motion } from "framer-motion";

function DeveloperTools() {
  const ToolsIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-12 w-12 mb-4 text-purple-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
      />
    </svg>
  );

  const DocsIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-12 w-12 mb-4 text-blue-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    </svg>
  );

  const SupportIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-12 w-12 mb-4 text-green-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  );

  return (
    <>
      <div className="relative h-[500px] overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('/images/carbg.jpg')",
          }}
        ></div>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-0"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-white">
          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-6 text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Developer Tools
          </motion.h2>
          <motion.p
            className="text-base md:text-lg text-gray-300 mb-8 max-w-2xl text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Access powerful tools to build, test, and publish your games.
          </motion.p>
          <motion.ul
            className="text-base md:text-lg text-gray-300 w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.li
              className="flex flex-col items-center p-8 rounded-lg backdrop-blur-lg bg-white/10 border border-gray-200 border-opacity-20 shadow-lg hover:border-purple-400 transition-all"
              whileHover={{ scale: 1.05 }}
              style={{
                backdropFilter: "blur(7.5px)",
                WebkitBackdropFilter: "blur(7.5px)",
                boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.18)",
                borderRadius: "10px",
                border: "1px solid rgba(255, 255, 255, 0.18)",
              }}
            >
              <ToolsIcon />
              <h3 className="text-xl font-semibold mb-2">
                SDKs for Unity, Unreal, and more
              </h3>
              <p className="text-gray-300 text-center">
                Integrate seamlessly with popular game engines.
              </p>
            </motion.li>
            <motion.li
              className="flex flex-col items-center p-8 rounded-lg backdrop-blur-lg bg-white/10 border border-gray-200 border-opacity-20 shadow-lg hover:border-blue-400 transition-all"
              whileHover={{ scale: 1.05 }}
              style={{
                backdropFilter: "blur(7.5px)",
                WebkitBackdropFilter: "blur(7.5px)",
                boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.18)",
                borderRadius: "10px",
                border: "1px solid rgba(255, 255, 255, 0.18)",
              }}
            >
              <DocsIcon />
              <h3 className="text-xl font-semibold mb-2">
                Comprehensive Documentation
              </h3>
              <p className="text-gray-300 text-center">
                Step-by-step guides and API references.
              </p>
            </motion.li>
            <motion.li
              className="flex flex-col items-center p-8 rounded-lg backdrop-blur-lg bg-white/10  border border-gray-200 border-opacity-20 shadow-lg hover:border-green-400 transition-all"
              whileHover={{ scale: 1.05 }}
              style={{
                backdropFilter: "blur(7.5px)",
                WebkitBackdropFilter: "blur(7.5px)",
                boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.18)",
                borderRadius: "10px",
                border: "1px solid rgba(255, 255, 255, 0.18)",
              }}
            >
              <SupportIcon />
              <h3 className="text-xl font-semibold mb-2">
                24/7 Developer Support
              </h3>
              <p className="text-gray-300 text-center">
                Get help whenever you need it.
              </p>
            </motion.li>
          </motion.ul>
        </div>
      </div>
    </>
  );
}

export default DeveloperTools;
