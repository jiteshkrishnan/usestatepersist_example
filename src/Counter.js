import { useExtendedPersistedState as useState } from "./hooks";

export default function Counter() {
  const [count, setCount] = useState("counter", 0);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount((c) => c + 1)}>Increase count</button>
    </>
  );
}
