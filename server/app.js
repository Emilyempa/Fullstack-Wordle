import { client } from "./db.js";
import express from "express";
import { getWordList } from "./fetchWordList.js";

const app = express();

app.use(express.json());


// app.set('view engine', 'ejs');
// app.set('views'('./views/ejs'));

// app.use(/assets, express.static('../client/dist/assets');

//app.get('/', async (req, res) => {
// const htmlText = await fs.readFile ('../client/dist');
// res.send(htmlText.toString());
// });

app.post("/highscores", async (req, res) => {
  try {
    await client.connect();

    const { name, time, guesses, wordLength, repeate } = req.body;

    if (!name || !time || !guesses || !wordLength || !repeate) {
      return res
        .status(400)
        .json({ error: "All fields must be sent with POST" });
    }

    const db = client.db("wordle");
    const collection = db.collection("highscores");

    const newHighscore = {
      name,
      time,
      guesses,
      wordLength,
      repeate,
      createdAt: new Date(),
    };

    await collection.insertOne(newHighscore);
    res.status(201).json({ message: "Highscore saved!", data: newHighscore });
  } catch (error) {
    console.error("Error when posting:", error);
    res.status(500).json({ error: "Internal server malfuction" });
  }
});

app.get("/highscores", async (req, res) => {
  try {
    const db = client.db("wordle");
    const collection = db.collection("highscores");

    const highscores = await collection.find().toArray();
    res.status(200).json({ message: "Highscore List!", data: highscores });
  } catch (error) {
    console.error("Error in getting highscores:", error);
    res.status(500).json({ error: "Internal server malfunction" });
  }
});

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

export default app;
