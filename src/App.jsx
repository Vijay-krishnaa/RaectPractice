import React, { useState } from "react";
import Counter from "./Counter";
import Todo from "./Todo";
import TodoReducer from "./TodoReducer";
import PreviousCounter from "./PreviousCounter.JSX";
import SearchableTodoList from "./SearchableTodoList";
import { counterContext } from "./context";
import ContextApi from "./contextApi";
import Counter1 from "./Counter1";
import FormValidationExample from "./FormValidationExample";
import Comment from "./Comment";
import Auth from "./Auth";
import ProductList from "./ProductList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = React.useState(0);
  return (
    <>
      {/* <FormValidationExample /> */}
      {/* <Counter1 /> */}
      {/* <counterContext.Provider value={{ count, setCount }}>
        <ContextApi />
      </counterContext.Provider> */}
      {/* { <Counter /> */}
      {/* <Todo /> */}
      {/* <TodoReducer /> */}
      {/* <PreviousCounter /> */}
      <SearchableTodoList />
      {/* <Comment /> */}

      {/* <Auth /> */}
      {/* <Router>
        <Routes>
          <Route path="/product" element={<ProductList />} />
        </Routes>
      </Router> */}
    </>
  );
}

export default App;
