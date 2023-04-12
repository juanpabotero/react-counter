import { useState } from "react";
import "./App.css";

function App() {
  const [counterLocal, setCounterLocal] = useState(0);
  const [counterVisit, setCounterVisit] = useState(0);

  return (
    <section className="counters">
      <div className="counter local">
        <h3>Local</h3>
        <h2>{counterLocal}</h2>
        <div>
          <button
            onClick={() => {
              if (counterLocal <= 0) return;
              setCounterLocal(counterLocal - 1);
            }}
          >
            -1
          </button>
          <button onClick={() => setCounterLocal(0)}>Reset</button>
          <button onClick={() => setCounterLocal(counterLocal + 1)}>+1</button>
        </div>
      </div>
      <div className="counter visit">
        <h3>Visit</h3>
        <h2>{counterVisit}</h2>
        <div>
          <button
            onClick={() => {
              if (counterVisit <= 0) return;
              setCounterVisit(counterVisit - 1);
            }}
          >
            -1
          </button>
          <button onClick={() => setCounterVisit(0)}>Reset</button>
          <button onClick={() => setCounterVisit(counterVisit + 1)}>+1</button>
        </div>
      </div>
    </section>
  );
}

export default App;
