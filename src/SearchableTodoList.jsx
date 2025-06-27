import axios from "axios";
import React, { useEffect, useState } from "react";

function SearchableTodoList() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => setTodo(res.data))
      .catch((err) => console.log(err));
  }, []);
  const filterTodo =
    input.trim() === ""
      ? []
      : todo.filter((todo) =>
          todo.title.toLowerCase().startsWith(input.toLowerCase())
        );

  return (
    <>
      <h1>SearchableTodo</h1>
      <input
        type="text"
        value={input}
        placeholder="Search here...."
        onChange={(e) => setInput(e.target.value)}
      />
      <ul>
        {filterTodo.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </>
  );
}

export default SearchableTodoList;
