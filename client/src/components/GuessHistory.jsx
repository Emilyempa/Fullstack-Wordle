import { Box } from "@mui/material";
import HighscoreInput from "./HighscoreInput";

export function GuessHistory({
  allGuesses,
  getColor,
  hasWon,
  formattedTime,
  sendGameData,
  setPlayerName,
  selectedNumber,
  allowRepeats,
}) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
      }}
    >
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

      {hasWon && (
        <Box
          sx={{
            color: "primary.main",
            fontWeight: "bold",
            textAlign: "center",
            mt: 2,
          }}
        >
          Congratulations! You guessed correctly in {allGuesses.length}{" "}
          {allGuesses.length === 1 ? "guess" : "guesses"}!
          <br />
          Time: {formattedTime}
          <HighscoreInput
            onSave={(name) => {
              setPlayerName(name);
              sendGameData({
                name: name,
                guesses: allGuesses.length,
                time: formattedTime,
                wordLength: selectedNumber,
                repeat: allowRepeats,
              });
            }}
          />
        </Box>
      )}
    </Box>
  );
}
