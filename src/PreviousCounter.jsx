import React, { useEffect, useRef } from "react";

function PreviousCounter() {
  const [count, setCount] = React.useState(1);
  let btn = useRef();
  useEffect(() => {
    btn.current.style.backgroundColor = "red";
    btn.current.style.color = "black";
  });
  return (
    <>
      <h1>UseRef</h1>
      <h1>{count}</h1>
      <button ref={btn} onClick={() => setCount(count + 1)}>
        Inc
      </button>
    </>
  );
}

export default PreviousCounter;
