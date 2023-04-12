import { useState } from "react";

export function Counter({ title }) {
  const [counter, setCounter] = useState(0);

  return (
    <div className={`counter ${title === "Local" ? "local" : "visit"}`}>
      <h3>{title}</h3>
      <h2>{counter}</h2>
      <div>
        <button
          onClick={() => {
            if (counter <= 0) return;
            setCounter(counter - 1);
          }}
        >
          -1
        </button>
        <button onClick={() => setCounter(0)}>Reset</button>
        <button onClick={() => setCounter(counter + 1)}>+1</button>
      </div>
    </div>
  );
}
