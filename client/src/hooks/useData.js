import { useState } from "react";
import { postApiData } from "../api/apiPost.js";

export const useData = () => {
  const [gameData, setGameData] = useState({
    name: "",
    time: 0,
    guesses: 0,
    WordLength: 0,
    repeat: false,
  });

  const saveGameResults = (results) => {
    setGameData((prev) => ({
      ...prev,
      ...results,
    }));
  };

  const setPlayerName = (name) => {
    setGameData((prev) => {
      const updatedData = { ...prev, name };
      return updatedData;
    });
  };

  const sendGameData = async () => {
    try {
      setGameData((prev) => {
        console.log("Preparing to send game data:", prev);
        return prev; 
      });
      
      const response = await postApiData("/highscores", gameData);
      console.log("Highscore was saved successfully:", response);
    } catch (error) {
      console.error("Error saving game data:", error);
    }
  };

  return { gameData, saveGameResults, setPlayerName, sendGameData };
};
