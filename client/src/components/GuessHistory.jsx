import { Box } from "@mui/material";

export function GuessHistory({ allGuesses, getColor, hasWon }) {
  return (
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

      {hasWon && (
        <Box
          sx={{
            color: "success.main",
            fontWeight: "bold",
            textAlign: "center",
            mt: 2,
          }}
        >
          Congratulations! You guessed correctly in {allGuesses.length}{" "}
          {allGuesses.length === 1 ? "guess" : "guesses"}!
        </Box>
      )}
    </Box>
  );
}
