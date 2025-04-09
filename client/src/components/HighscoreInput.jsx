import React from "react";
import { Box, Typography, TextField, Button, Paper } from "@mui/material";

function HighscoreInput({ handleSubmit }) {
  return (
    <Box
      component={Paper}
      sx={{
        p: 3,
        maxWidth: 400,
        mx: "auto",
        mt: 3,
        textAlign: "center",
      }}
    >
      <Typography variant="p" gutterBottom>
        Enter your name to add the result to the high score list!
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          mt: 2,
        }}
      >
        <TextField
          name="name"
          label="Your name"
          variant="outlined"
          required
          fullWidth
        />
        <Button type="submit" variant="contained" color="primary" size="medium">
          Save
        </Button>
        <Button type="button" variant="outlined" color="secondary" size="medium"
            onClick={() => window.location.reload()}>
            Exit
        </Button>
      </Box>
    </Box>
  );
}

export default HighscoreInput;
