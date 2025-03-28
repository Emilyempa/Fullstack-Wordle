import { useEffect, useState } from "react";
import Wordlist from "../components/WordList.jsx";
import DropDown from "../components/Dropdown.jsx";

function Play() {
  const [message, setMessage] = useState("");
  const [selectedNumber, setSelectedNumber] = useState(2);

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
      <DropDown numberSelected={setSelectedNumber} />
      <p>{message}</p>
      <Wordlist length={selectedNumber} />
    </div>
  );
}
export default Play;
