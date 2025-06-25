import React, { useReducer } from "react";

const initialState = {
  todo: [],
  index: null,
};
function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return { ...state, todo: [...state.todo, action.payload] };
    case "SET_INDEX":
      return { ...state, index: action.payload };
    case "UPDATE":
      const updateTodo = [...state.todo];
      updateTodo[state.index] = action.payload;
      return { ...state, todo: updateTodo, index: null };
    case "DELETE":
      return {
        ...state,
        todo: state.todo.filter((_, i) => i !== action.payload),
      };
    default:
      return state;
  }
}
function TodoReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [input, setInput] = React.useState("");
  const handleChange = () => {
    if (input.trim()) {
      if (state.index !== null) {
        dispatch({ type: "UPDATE", payload: input });
      } else dispatch({ type: "ADD", payload: input });
      setInput("");
    }
  };
  const handleEdit = (idx) => {
    setInput(state.todo[idx]);
    dispatch({ type: "SET_INDEX", payload: idx });
  };
  return (
    <>
      <h1>Todo UseReducer</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleChange}>
        {state.index !== null ? "update" : "Add"}
      </button>
      <ul>
        {state.todo.map((item, idx) => (
          <li key={idx}>
            {item}
            <button onClick={() => dispatch({ type: "DELETE", payload: idx })}>
              Delete
            </button>
            <button onClick={() => handleEdit(idx)}>Edit</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoReducer;
