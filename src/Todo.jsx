import React from "react";

function Todo() {
  const [todo, setTodo] = React.useState([]);
  const [input, setInput] = React.useState("");
  const [idx, setIdx] = React.useState(null);
  const handleChange = () => {
    if (input.trim()) {
      if (idx !== null) {
        const updateTodo = [...todo];
        updateTodo[idx] = input;
        setTodo(updateTodo);
        setIdx(null);
      } else setTodo([...todo, input]);
    }
    setInput("");
  };
  const handleEdit = (i) => {
    setInput(todo[i]);
    setIdx(i);
  };
  return (
    <>
      <h1>Todo App</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleChange}>{idx !== null ? "Update" : "Add"}</button>
      <ul>
        {todo.map((item, i) => (
          <li key={i}>
            {item}
            <button onClick={() => setTodo(todo.filter((_, j) => j !== i))}>
              Delete
            </button>
            <button onClick={() => handleEdit(i)}>Edit</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todo;
