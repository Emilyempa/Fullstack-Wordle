import { useEffect, useState } from "react";

function WordList() {
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
        const randomWord =
          wordArray[Math.floor(Math.random() * wordArray.length)];
        setWord(randomWord);
      } catch (error) {
        console.error("Error fetching words:", error);
      }
    };
    fetchWords();
    return () => abortController.abort();
  }, []);

  return <p>Correct word: {word}</p>;
}

export default WordList;
