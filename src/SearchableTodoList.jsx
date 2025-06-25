import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";

function SearchableTodoList() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => setTodos(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const filterTodo = useMemo(() => {
    const searchQuery = input.toLowerCase();
    return searchQuery
      ? todos.filter((todo) => todo.title.toLowerCase().includes(searchQuery))
      : [];
  }, [input, todos]);
  return (
    <div>
      <h1>Searchable Todo</h1>
      <input
        type="text"
        placeholder="Search Here"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <ul>
        {filterTodo.map((item, idx) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchableTodoList;
