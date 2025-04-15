import { useState } from "react";
import { validateInput } from "../utils/ValidateInput";
import { CompareWords } from "../utils/CompareWords";
import { useGameTimer } from "./useGameTimer";

export function useGameLogic(selectedNumber, correctWord) {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [allGuesses, setAllGuesses] = useState([]);
  const [hasWon, setHasWon] = useState(false);

  const { elapsedTime, formattedTime, startTimer, stopTimer, resetTimer } =
    useGameTimer();

  const handleChange = (value) => {
    const trimmedValue = value.trim(); 
    setInput(trimmedValue);
    setError("");
  };

  const handleSubmit = () => {
    if (hasWon) return false;

    const validationMessage = validateInput(input, selectedNumber);
    if (validationMessage) {
      setError(validationMessage);
      return false;
    }

    if (allGuesses.length === 0) {
      startTimer();
    }

    const comparisonResult = CompareWords(input, correctWord);
    const isCorrect = comparisonResult.every(
      (item) => item.result === "correct"
    );

    setAllGuesses((prev) => [...prev, comparisonResult]);
    setInput("");

    if (isCorrect) {
      setHasWon(true);
      stopTimer();
    }

    return isCorrect;
  };

  return {
    input,
    error,
    allGuesses,
    hasWon,
    elapsedTime,
    formattedTime,
    handleChange,
    handleSubmit,
    resetTimer,
  };
}
