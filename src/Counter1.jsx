import React from "react";
import { useState } from "react";
function Counter1() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Inc</button>
      <button onClick={() => setCount(count - 1)} disabled={count < 1}>
        DEC
      </button>
    </>
  );
}

export default Counter1;
