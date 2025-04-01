import { validateInput } from "../utils/ValidateInput.js";
import { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { CompareWords } from "../utils/compareWords.js";

function TextBox({ selectedNumber, correctWord }) {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [feedback, setFeedback] = useState([]);

  const handleChange = (event) => {
    setInput(event.target.value);
    setError("");
  };

  const handleSubmit = () => {
    const validationMessage = validateInput(input, selectedNumber);

    if (validationMessage) {
      setError(validationMessage);
      return;
    }

    const comparisonResult = CompareWords(input, correctWord);
    setFeedback(comparisonResult);
    
    setInput("");
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
        m: 2,
        gap: 2,
      }}
    >
      <TextField
        label="Type your guess"
        variant="outlined"
        value={input}
        onChange={handleChange}
        error={!!error}
        helperText={error}
        sx={{ width: "250px" }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        sx={{ width: "150px" }}
      >
        Submit
      </Button>
      {feedback.length > 0 && (
        <Box sx={{ display: "flex", gap: 1 }}>
          {feedback.map((item, index) => {
            const bgColor = getColor(item.result);

            return (
              <Box
                key={index}
                sx={{
                  color: "white",
                  backgroundColor: bgColor,
                  padding: "4px 8px",
                  borderRadius: "4px",
                  fontWeight: "bold",
                  minWidth: "36px",
                  textAlign: "center",
                }}
              >
                {item.letter}
              </Box>
            );
          })}
        </Box>
      )}
    </Box>
  );
}

export default TextBox;
