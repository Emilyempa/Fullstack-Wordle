import { useState, useEffect } from "react";
import DropDown from "../components/Dropdown.jsx";
import RepeatControl from "../components/RepeatControl.jsx";
import TextBox from "../components/TextBox.jsx";
import StartButton from "../components/StartButton.jsx";
import { fetchWords } from "../api/apiFetch.js";

function Play() {
  const [selectedNumber, setSelectedNumber] = useState(2);
  const [allowRepeats, setAllowRepeats] = useState(true);
  const [correctWord, setCorrectWord] = useState("");
  const [gameStarted, setGameStarted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleRepeatChange = (value) => {
    setAllowRepeats(value);
  };
  useEffect(() => {
    const getRandomWord = async () => {
      if (!gameStarted) return;
      
      setIsLoading(true);
      setError(null);

      try {
        const randomWord = await fetchWords(selectedNumber, allowRepeats);
        setCorrectWord(randomWord);
      } catch (error) {
        console.error("Error fetching word:", error);
        setError("Failed to load word");
      } finally {
        setIsLoading(false);
      }
    };

    getRandomWord();
  }, [gameStarted, selectedNumber, allowRepeats]);


  return (
    <div>
      {!gameStarted ? (
        <>
          <DropDown numberSelected={setSelectedNumber} />
          <RepeatControl onRepeatChange={handleRepeatChange} />
          <StartButton onStart={() => setGameStarted(true)} />
        </>
      ) : (
        <>
          {isLoading && <p>Loading word...</p>}
          {error && <p>Error Loading Word: {error}</p>}
          {!isLoading && !error && correctWord && (
            <TextBox
              selectedNumber={selectedNumber}
              correctWord={correctWord}
              allowRepeats={allowRepeats}
            />
          )}
        </>
      )}
    </div>
  );
}

export default Play;
