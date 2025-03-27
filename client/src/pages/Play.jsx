import { useEffect, useState } from "react";
import Wordlist from "../components/WordList";

function Play() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const abortController = new AbortController();
    const fetchData = async () => {
      try {
        const res = await fetch("/api/test-endpoint", {
          signal: abortController.signal,
        });
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        setMessage(data.message);
      } catch (error) {
        console.error("Error fetching message:", error);
      }
    };
    fetchData();
    return () => abortController.abort();
  }, []);

  return (
    <div>
      <h1>Play</h1>
      <p>{message}</p>
      <Wordlist />
    </div>
  );
}
export default Play;
