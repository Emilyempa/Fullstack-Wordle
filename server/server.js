const express = require("express");
const { getWordList } = require("./fetchWordList.js");
const app = express();
const port = 5080;

// app.set('view engine', 'ejs');
// app.set('views'('./views/ejs'));

// app.use(express.json());

// app.use(/assets, express.static('../client/dist/assets');

//app.get('/', async (req, res) => {
  // const htmlText = await fs.readFile ('../client/dist');
  // res.send(htmlText.toString());
// });


app.get("/api/random-word", async (req, res) => {
  try {
    const { length, allowRepeats } = req.query;
    const wordList = await getWordList();

    const filteredWords = wordList.filter((word) => {
      const hasRepeats = new Set(word).size !== word.length;
      return (
        word.length === parseInt(length) &&
        (allowRepeats === "true" || !hasRepeats)
      );
    });

    const randomWord =
      filteredWords.length > 0
        ? filteredWords[Math.floor(Math.random() * filteredWords.length)]
        : "No word found";

    res.json({ word: randomWord });
  } catch (error) {
    console.error("Error in /api/random-word:", error);
    res.status(500).json({ error: "Failed to get random word" });
  }
});

app.get("/", (req, res) => {
  res.send("<h1>Hello, server!</h1>");
});

app.get("/api/test-endpoint", (req, res) => {
  const resMessage = { message: "Hello from the server!" };
  res.json(resMessage);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
