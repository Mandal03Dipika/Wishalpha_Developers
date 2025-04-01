import GamesContext from "./GamesContext";
import { useState, useEffect } from "react";

const GamesContextProvider = ({ children }) => {
  const [selectedGame, setSelectedGame] = useState(null);

  const games = [
    {
      id: 1,
      name: "Reversi",
      image: "/images/reversi.png",
      src: "/games/reversi/index.html",
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

  const handlePlay = (game) => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      alert("You are not authenticated!");
      return;
    }
    let url;
    try {
      url = new URL(game.src);
    } catch {
      url = new URL(game.src, window.location.origin);
    }
    url.searchParams.set("accessToken", token);
    setSelectedGame(url.toString());
  };

  useEffect(() => {
    const iframe = document.getElementById("gameIframe");
    if (iframe) {
      console.log(iframe.src);
      iframe.onload = () => {
        iframe.contentWindow.postMessage(
          { token: localStorage.getItem("accessToken") },
          "*"
        );
      };
    }
  }, [selectedGame]);

  return (
    <GamesContext.Provider value={{ handlePlay, games, selectedGame }}>
      {children}
    </GamesContext.Provider>
  );
};

export default GamesContextProvider;
