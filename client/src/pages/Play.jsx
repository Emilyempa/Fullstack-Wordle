import { useEffect, useState } from "react";
import WordList from "../components/WordList.jsx";
import DropDown from "../components/Dropdown.jsx";
import RepeatControl from "../components/RepeatControl.jsx";
import { fetchApiData } from "../api/apiFetch.js";
import TextBox from "../components/TextBox.jsx";
import StartButton from "../components/StartButton.jsx";

function Play() {
  const [message, setMessage] = useState("");
  const [selectedNumber, setSelectedNumber] = useState(2);
  const [allowRepeats, setAllowRepeats] = useState(true);
  const [correctWord, setCorrectWord] = useState("");
  const [gameStarted, setGameStarted] = useState(false);

  const handleRepeatChange = (value) => {
    setAllowRepeats(value);
  };

  useEffect(() => {
    const getMessage = async () => {
      try {
        const data = await fetchApiData("/api/test-endpoint");
        setMessage(data.message);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    getMessage();
  }, []);

  return (
    <div>
      {!gameStarted && (
        <>
          <h1>Play</h1>
          <DropDown numberSelected={setSelectedNumber} />
          <RepeatControl onRepeatChange={handleRepeatChange} />
          <StartButton onStart={() => setGameStarted(true)} />
        </>
      )}

      {gameStarted && (
        <>
          <TextBox selectedNumber={selectedNumber} correctWord={correctWord} />
          <WordList
            length={selectedNumber}
            allowRepeats={allowRepeats}
            onWordFetched={setCorrectWord}
          />
          <p>{message}</p>
        </>
      )}
    </div>
  );
}
export default Play;