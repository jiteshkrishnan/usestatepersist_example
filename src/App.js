import { usePersistedState as useState } from "./hooks";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState("counter", 0);
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => setCount((c) => c + 1)}>Increase count</button>
    </div>
  );
}
