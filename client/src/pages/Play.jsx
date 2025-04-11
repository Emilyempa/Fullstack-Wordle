import { useState } from "react";
import WordList from "../components/WordList.jsx";
import DropDown from "../components/Dropdown.jsx";
import RepeatControl from "../components/RepeatControl.jsx";
import TextBox from "../components/TextBox.jsx";
import StartButton from "../components/StartButton.jsx";

function Play() {
  const [selectedNumber, setSelectedNumber] = useState(2);
  const [allowRepeats, setAllowRepeats] = useState(true);
  const [correctWord, setCorrectWord] = useState("");
  const [gameStarted, setGameStarted] = useState(false);

  const handleRepeatChange = (value) => {
    setAllowRepeats(value);
  };

  return (
    <div>
      {!gameStarted && (
        <>          
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
        </>
      )}
    </div>
  );
}
export default Play;