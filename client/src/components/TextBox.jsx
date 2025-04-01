import { validateInput } from "../utils/ValidateInput.js";
import { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { CompareWords } from "../utils/compareWords.js";

function TextBox({ selectedNumber, correctWord }) {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

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
    console.log("Comparison Result:", comparisonResult);

    setInput("");
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
    </Box>
  );
}

export default TextBox;
