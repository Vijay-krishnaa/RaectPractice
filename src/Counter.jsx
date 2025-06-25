import React from "react";
function Counter() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>inc</button>
    </div>
  );
}
export default Counter;
