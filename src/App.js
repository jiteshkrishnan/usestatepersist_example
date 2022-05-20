import { useCallback } from "react";
import Counter from "./Counter";
import "./styles.css";
import Timer from "./Timer";

export default function App() {
  return (
    <div className="App">
      <Counter />
      <Timer />
    </div>
  );
}
