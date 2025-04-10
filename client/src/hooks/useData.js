import { useState } from 'react';

export const useData=() => {
    const [gameData, setGameData] = useState({
        name: "",
        time: 0,
        guesses: 0,
        wordLength: 0,
        repeate: false,        
    });

    const saveGameResults = (results) => {
        setGameData(prev => ({
          ...prev,
          ...results
        }));
      };
    
      return { gameData, saveGameResults };
    };
