// src/hooks/useWordleGame.js
import { useState } from "react";
import { validateInput } from "../utils/ValidateInput";
import { CompareWords } from "../utils/compareWords";

export function GameLogic(selectedNumber, correctWord) {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [allGuesses, setAllGuesses] = useState([]);
  const [hasWon, setHasWon] = useState(false);

  const handleChange = (value) => {
    setInput(value);
    setError("");
  };

  const handleSubmit = () => {
    if (hasWon) return false;

    const validationMessage = validateInput(input, selectedNumber);
    if (validationMessage) {
      setError(validationMessage);
      return false;
    }

    const comparisonResult = CompareWords(input, correctWord);
    const isCorrect = comparisonResult.every(
      (item) => item.result === "correct"
    );

    setAllGuesses((prev) => [...prev, comparisonResult]);
    setInput("");

    if (isCorrect) {
      setHasWon(true);
    }

    return isCorrect;
  };

  return {
    input,
    error,
    allGuesses,
    hasWon,
    handleChange,
    handleSubmit,
  };
}
