import { Button } from "@mui/material";

function StartButton({ onStart }) {
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={onStart}
      sx={{
        padding: "10px 20px",
        fontSize: "16px",
        fontWeight: "bold",
        borderRadius: "8px",
        textTransform: "none",
      }}
    >
      Start playing
    </Button>
  );
}

export default StartButton;
