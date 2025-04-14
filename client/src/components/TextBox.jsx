import { Box } from "@mui/material";
import { useGameLogic } from "../hooks/useGameLogic.js";
import { TextField, Button } from "@mui/material";
import { GuessHistory } from "./GuessHistory";
import { useData } from "../hooks/useData"; 

function TextBox({ selectedNumber, correctWord }) {
  const {
    input,
    error,
    allGuesses,
    hasWon, 
    formattedTime,
    handleChange,
    handleSubmit,
  } = useGameLogic(selectedNumber, correctWord);

 
  const { sendGameData, setPlayerName } = useData();   

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
        onChange={(e) => handleChange(e.target.value)}
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

      
      <GuessHistory
        allGuesses={allGuesses}
        getColor={getColor}
        hasWon={hasWon}
        formattedTime={formattedTime}
        sendGameData={sendGameData}       
        setPlayerName={setPlayerName}     
      />
    </Box>
  );
}

export default TextBox;