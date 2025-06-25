import React from "react";
import { useState } from "react";
function Counter1() {
  const [count, setCount] = useState(0);
  const decbutton = () => {
    count > 0 ? setCount(count - 1) : alert("Values can not be negative");
  };
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Inc</button>
      <button onClick={() => decbutton()}>DEc</button>
    </>
  );
}

export default Counter1;
