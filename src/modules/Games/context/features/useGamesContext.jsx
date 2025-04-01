import { useContext } from "react";
import GamesContext from "../GamesContext";

const useGamesContext = () => {
  return useContext(GamesContext);
};

export default useGamesContext;
