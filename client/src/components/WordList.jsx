import { useEffect, useState } from "react";

function WordList({length}) {
  const [word, setWord] = useState("");

  useEffect(() => {
    const abortController = new AbortController();

    const fetchWords = async () => {
      try {
        const res = await fetch(
          "https://raw.githubusercontent.com/dwyl/english-words/master/words_dictionary.json",
          {
            signal: abortController.signal,
          }
        );
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        const wordArray = Object.keys(data);
        const filteredWords = wordArray.filter((w) => w.length === length);
        const randomWord =
          filteredWords[Math.floor(Math.random() * filteredWords.length)];
        setWord(randomWord || "No word found");
      } catch (error) {
        console.error("Error fetching words:", error);
      }
    };
    fetchWords();
    return () => abortController.abort();
  }, [length]);

  return <p>Correct word: {word}</p>;
}

export default WordList;
