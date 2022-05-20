import { useCallback } from "react";
import { useExtendedPersistedState as useState } from "./hooks";

export default function Timer() {
  const [timer, setTimer] = useState("timer", 0);

  let timerIntervalId = null;

  const startTimer = useCallback(() => {
    timerIntervalId = setInterval(() => {
      setTimer((time) => time + 1);
    }, 1);
  }, []);

  const stopTimer = useCallback(() => {
    clearInterval(timerIntervalId);
  }, []);

  return (
    <>
      <h1>Timer {timer}</h1>
      <button onClick={startTimer}>Start Timer </button>
      <button onClick={stopTimer}>Stop Timer </button>
    </>
  );
}
