import { useEffect, useState } from "react";
import { fetchWords } from "../api/apiFetch.js";

function WordList({ length, allowRepeats, onWordFetched }) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getRandomWord = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const randomWord = await fetchWords(length, allowRepeats);
        onWordFetched(randomWord); 
      } catch (error) {
        console.error("Error fetching word:", error);
        setError("Failed to load word");
      } finally {
        setIsLoading(false);
      }
    };

    getRandomWord();
  }, [length, allowRepeats, onWordFetched]);

  if (isLoading) return <p>Loading word...</p>;
  if (error) return <p>Error Loading Word: {error}</p>;

  return null; 
}

export default WordList;
