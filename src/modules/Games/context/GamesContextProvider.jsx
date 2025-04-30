import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import GamesContext from "./GamesContext";
import { getAllGamesService } from "../service/game";

const GamesContextProvider = ({ children }) => {
  const [selectedGame, setSelectedGame] = useState(null);
  const exitGame = () => {
    console.log("Exiting game...");
    setSelectedGame(null); 
  };


  // const games = [
  //   {
  //     id: 1,
  //     name: "Reversi",
  //     image: "/images/reversi.png",
  //     src: "/games/reversi/index.html",
  //   },
  //   {
  //     id: 2,
  //     name: "Chess",
  //     image: "/images/chess.png",
  //     src: "https://minesweeper.wishalpha.com/",
  //   },
  //   {
  //     id: 3,
  //     name: "Ludo",
  //     image: "/images/ludo.png",
  //     src: "https://minesweeper.wishalpha.com/",
  //   },
  //   {
  //     id: 4,
  //     name: "MineSweeper",
  //     image: "/images/mines.png",
  //     src: "https://minesweeper.wishalpha.com/",
  //   },
  // ];



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

    const {
      data: gameData,
      isLoading,
      isError,
      isSuccess,
    } = useQuery({
      queryKey: ["docs"],
      queryFn: () => getAllGamesService(),
    });
    if (isLoading) {
      return <>Fetching..</>;
    }
    if (isError) {
      return <>Error...</>;
    }
    if(isSuccess) {
      console.log(gameData);
    }


  const handlePlay = (game) => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      alert("You are not authenticated!");
      return;
    }
    let url;
    try {
      url = new URL(game.projectFilePath);
    } catch {
      url = new URL(game.projectFilePath, window.location.origin);
    }
    url.searchParams.set("accessToken", token);
    setSelectedGame(url.toString());
  };

  return (
    <GamesContext.Provider value={{ handlePlay, selectedGame, gameData ,exitGame}}>
      {children}
    </GamesContext.Provider>
  );
};

export default GamesContextProvider;
