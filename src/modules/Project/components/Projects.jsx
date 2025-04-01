import { motion } from "framer-motion";

function Projects() {
  const games = [
    {
      id: 1,
      name: "Reversi",
      image: "/images/reversi.png",
      src: "/games/67da84e9bf4f253af79c72b1-reversi/dist/index.html",
    },
    {
      id: 2,
      name: "Chess",
      image: "/images/chess.png",
      src: "https://minesweeper.wishalpha.com/",
    },
    {
      id: 3,
      name: "Ludo",
      image: "/images/ludo.png",
      src: "https://minesweeper.wishalpha.com/",
    },
    {
      id: 4,
      name: "MineSweeper",
      image: "/images/mines.png",
      src: "https://minesweeper.wishalpha.com/",
    },
  ];

  return (
    <>
      <div className="relative h-screen overflow-hidden">
        <div
          id="parallax-bg"
          className="absolute top-0 left-0 w-full h-full bg-[url(/images/2.png)] bg-cover bg-center bg-fixed"
        ></div>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-0"></div>
        <div className="relative flex flex-col h-full px-4">
          <motion.h1
            className="text-4xl md:text-6xl font-bold p-4 mb-6 text-center bg-gradient-to-r from-purple-400 to-gray-200 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Projects
          </motion.h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {games.map((game) => (
              <div
                key={game.id}
                className="p-5 rounded-lg backdrop-blur-lg bg-white/10 border border-gray-200 border-opacity-20 shadow-lg hover:border-purple-400 hover:scale-105 transition-all"
              >
                <img
                  src={game.image}
                  alt={game.name}
                  className="w-full h-48 object-cover rounded-xl"
                />
                <div className="text-center mt-4">
                  <h2 className="text-xl font-semibold text-white mb-2">
                    {game.name}
                  </h2>
                  <button className="bg-purple-600 cursor-pointer hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 w-full">
                    Play
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
