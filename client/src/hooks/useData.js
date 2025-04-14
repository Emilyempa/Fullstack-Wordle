import { useState } from "react";
import { postApiData } from "../api/apiPost.js";

export const useData = () => {
  const [gameData, setGameData] = useState({
    name: "",
    time: 0,
    guesses: 0,
    wordLength: 0,
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

  const sendGameData = async (extraData = {}) => {
    setGameData((prev) => {
      const updatedData = { ...prev, ...extraData };
      console.log("Preparing to send game data:", updatedData);
      return updatedData;
    });

    await new Promise((resolve) => setTimeout(resolve, 100));

    const latestGameData = { ...gameData, ...extraData };
    console.log("Sending latest game data:", latestGameData);

    try {
      const response = await postApiData("/highscores", latestGameData);
      console.log("Highscore was saved successfully:", response);
    } catch (error) {
      console.error("Error saving game data:", error);
    }
  };

  return { gameData, saveGameResults, setPlayerName, sendGameData };
};
