import { motion } from "framer-motion";
import useGamesContext from "../context/features/useGamesContext";
import { useEffect, useState } from "react";

function Games() {
  const { handlePlay, gameData, selectedGame, exitGame } = useGamesContext();
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleKeyDown = async (e) => {
      if (e.key === "Escape" && selectedGame) {
        if (isFullscreen && document.fullscreenElement) {
          try {
            await document.exitFullscreen();
          } catch (err) {
            console.error("Error exiting fullscreen:", err);
          }
        }
        exitGame();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedGame, isFullscreen, exitGame]);

  const toggleFullscreen = () => {
    const iframe = document.getElementById("gameIframe");

    if (!isFullscreen) {
      if (iframe.requestFullscreen) {
        iframe.requestFullscreen().catch((err) => {
          console.error("Error attempting to enable fullscreen:", err);
        });
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch((err) => {
          console.error("Error attempting to exit fullscreen:", err);
        });
      }
    }

    setIsFullscreen((prev) => !prev);
  };

  const handleExitGame = async () => {
    try {
      if (isFullscreen && document.fullscreenElement) {
        console.log("Exiting fullscreen...");
        await document.exitFullscreen();
      }
    } catch (err) {
      console.error("Error exiting fullscreen:", err);
    } finally {
      console.log("Calling exitGame...");
      exitGame();
    }
  };

  return (
    <>
      <div className="relative h-screen overflow-hidden">
        {!selectedGame && (
          <>
            <div className="absolute top-0 left-0 w-full h-full bg-[url(/images/2.png)] bg-cover bg-center bg-fixed"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-0"></div>
          </>
        )}

        <div className="relative flex flex-col h-full ">
          {selectedGame ? (
            <div className="flex flex-col h-full w-full">
              <div className="flex justify-between items-center p-4 bg-gray-900/80 text-white">
                <button
                  onClick={handleExitGame}
                  className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Exit Game
                </button>
                <button
                  onClick={toggleFullscreen}
                  className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    {isFullscreen ? (
                      <path
                        fillRule="evenodd"
                        d="M5 16h3v3a1 1 0 102 0v-3h3a1 1 0 100-2h-3v-3a1 1 0 10-2 0v3H5a1 1 0 100 2zm7-13H9V0a1 1 0 10-2 0v3H4a1 1 0 100 2h3v3a1 1 0 102 0V5h3a1 1 0 100-2z"
                        clipRule="evenodd"
                      />
                    ) : (
                      <path
                        fillRule="evenodd"
                        d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    )}
                  </svg>
                  {isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
                </button>
              </div>
              <iframe
                src={selectedGame}
                className="w-full h-full border-0"
                id="gameIframe"
                title="Game Frame"
                allow="fullscreen"
                scrolling="yes"
                sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
              ></iframe>
            </div>
          ) : (
            <>
              <motion.h1
                className="text-4xl md:text-6xl font-bold p-4 mb-6 text-center text-transparent bg-gradient-to-r from-purple-400 to-gray-200 bg-clip-text"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Games
              </motion.h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 overflow-y-auto pb-8">
                {gameData.data.map((game) => (
                  <motion.div
                    key={game.projectID}
                    className="p-5 rounded-lg bg-white/10 border border-gray-200/20 shadow-lg backdrop-blur-sm hover:bg-white/20 transition-all"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <img
                      src={game.image || "/images/gameImg.png"}
                      alt={game.projectName || "Game Image"}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/images/gameImg.png";
                      }}
                      className="w-[70%] h-48   flex justify-center items-center mx-auto "
                    />
                    <div className="text-center mt-4">
                      <h2 className="text-xl font-semibold text-white mb-2">
                        {game.projectName || "Unnamed Game"}
                      </h2>
                      <button
                        className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded w-full transition-colors"
                        onClick={() => handlePlay(game)}
                      >
                        Play
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Games;
