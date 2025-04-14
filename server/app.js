import { client } from "./db.js";
import express from "express";
import { getWordList } from "./fetchWordList.js";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(express.json());

app.set("view engine", "ejs");

app.use(express.static(join(__dirname, "public")));
app.use(express.static('../client/dist'));

app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.get('/about', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.post("/highscores", async (req, res) => {
  try {
    const { name, time, guesses, wordLength, repeat } = req.body;

    if (
      !name ||
      time === undefined ||
      guesses === undefined ||
      wordLength === undefined ||
      repeat === undefined
    ) {
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
      repeat,
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

    const highscores = await collection
      .find()
      .sort({ guesses: 1, time: 1, wordLength: -1, repeat: 1 })
      .toArray();
    res.status(200).render("index", {
      highscores,
      pages: [
        { label: "Play", path: "/" },
        { label: "About", path: "/about" },
        { label: "Highest Scores", path: "/highest-scores" },
      ],
    });
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
        word.length === Number(length) &&
        (allowRepeats === "true" || !hasRepeats)
      );
    });

    const randomWord =
      filteredWords.length > 0
        ? filteredWords[Math.floor(Math.random() * filteredWords.length)]
        : "No word found";

    res.status(200).json({ word: randomWord });
  } catch (error) {
    console.error("Error in /api/random-word:", error);
    res.status(500).json({ error: "Failed to get random word" });
  }
});


export default app;
