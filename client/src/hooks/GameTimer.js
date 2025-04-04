import { useState, useEffect } from "react";

export function GameTimer() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setElapsedTime((prev) => prev + 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isRunning]);

  const formatTime = () => {
    const mins = Math.floor(elapsedTime / 60);
    const secs = elapsedTime % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const startTimer = () => setIsRunning(true);
  const stopTimer = () => setIsRunning(false);
  const resetTimer = () => {
    setIsRunning(false);
    setElapsedTime(0);
  };

  return {
    elapsedTime,
    formattedTime: formatTime(),
    startTimer,
    stopTimer,
    resetTimer,
  };
}
