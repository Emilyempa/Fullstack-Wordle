import { validateInput } from "../utils/ValidateInput.js";
import { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

function TextBox({ selectedNumber }) {
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
