import { useEffect, useState } from "react";

function Play() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/test-endpoint');
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        setMessage(data.message);
      } catch (error) {
        console.error('Error fetching message:', error);
      }
    };
    fetchData(); 
  }, []); 


  return (
    <div>
      <h1>Play</h1>
      <p>{message}</p>
    </div>
  );
}
export default Play;