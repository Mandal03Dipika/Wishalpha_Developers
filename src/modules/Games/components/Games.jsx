import { motion } from "framer-motion";
import useGamesContext from "../context/features/useGamesContext";

function Games() {
  const { handlePlay, games, selectedGame } = useGamesContext();

  return (
    <>
      <div className="relative h-screen overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url(/images/2.png)] bg-cover bg-center bg-fixed"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-0"></div>
        <div className="relative flex flex-col h-full px-4">
          <motion.h1 className="text-4xl md:text-6xl font-bold p-4 mb-6 text-center text-transparent bg-gradient-to-r from-purple-400 to-gray-200 bg-clip-text">
            Games
          </motion.h1>
          {selectedGame ? (
            <iframe
              src={selectedGame}
              className="w-full h-screen"
              id="gameIframe"
              title="Game Frame"
            ></iframe>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {games.map((game) => (
                <div
                  key={game.id}
                  className="p-5 rounded-lg bg-white/10 border border-gray-200 shadow-lg"
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
                    <button
                      className="bg-purple-600 text-white font-bold py-2 px-4 rounded w-full"
                      onClick={() => handlePlay(game)}
                    >
                      Play
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Games;
