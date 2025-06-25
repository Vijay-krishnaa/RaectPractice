import React from "react";
import { useContext } from "react";
import { counterContext } from "./context";

function contextApi() {
  const { count, setCount } = useContext(counterContext); // this reads the value from the nearest provider.This line accesses and destructures the values provided by a React Context. It’s used when a component needs to consume shared state or functionality from a context provider.
  return (
    <div>
      <h1>Context Api</h1>
      {count}
      <button onClick={() => setCount(count + 1)}>Inc</button>
    </div>
  );
}

export default contextApi;
