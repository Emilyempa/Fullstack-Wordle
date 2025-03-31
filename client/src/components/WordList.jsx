import { useEffect, useState } from "react";
import { fetchWords } from "../api/apiFetch.js";

function WordList({ length, allowRepeats }) {
  const [word, setWord] = useState("");

  useEffect(() => {
    const getRandomWord = async () => {
      try {
        const filteredWords = await fetchWords(length, allowRepeats);
        const randomWord =
          filteredWords[Math.floor(Math.random() * filteredWords.length)];
        setWord(randomWord || "No word found");
      } catch (error) {
        console.error("Error:", error);
      }
    };
    getRandomWord();
  }, [length, allowRepeats]);

  return <p>Correct word: {word}</p>;
}

export default WordList;
