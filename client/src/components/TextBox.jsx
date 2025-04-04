import { validateInput } from "../utils/ValidateInput.js";
import { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { CompareWords } from "../utils/compareWords.js";

function TextBox({ selectedNumber, correctWord }) {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [allGuesses, setAllGuesses] = useState([]);
  const [hasWon, setHasWon] = useState(false);

  const handleChange = (event) => {
    setInput(event.target.value);
    setError("");
  };

  const handleSubmit = () => {
    if (hasWon) return; 

    const validationMessage = validateInput(input, selectedNumber);

    if (validationMessage) {
      setError(validationMessage);
      return;
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
  };

  const getColor = (result) => {
    switch (result) {
      case "correct":
        return "success.main";
      case "misplaced":
        return "warning.light";
      case "incorrect":
        return "error.main";
      default:
        return "grey.500";
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
      }}
    >
      <TextField
        label={hasWon ? "You won!" : "Type your guess"}
        variant="outlined"
        value={input}
        onChange={handleChange}
        error={!!error}
        helperText={error}
        sx={{ width: "250px" }}
        disabled={hasWon}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        sx={{ width: "150px" }}
        disabled={hasWon}
      >
        Submit
      </Button>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {allGuesses.map((guess, guessIndex) => (
          <Box key={guessIndex} sx={{ display: "flex", gap: 1 }}>
            {guess.map((item, index) => (
              <Box
                key={index}
                sx={{
                  color: "white",
                  backgroundColor: getColor(item.result),
                  padding: "4px 8px",
                  borderRadius: "4px",
                  fontWeight: "bold",
                  minWidth: "36px",
                  textAlign: "center",
                }}
              >
                {item.letter}
              </Box>
            ))}
          </Box>
        ))}
      </Box>

      {hasWon && (
        <Box sx={{ color: "success.main", fontWeight: "bold" }}>
          Congratulations! You guessed correctly!
        </Box>
      )}
    </Box>
  );
}

export default TextBox;
