import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  // Implement functionality to add todo
  const addTodo = () => {};

  // Implement functionality to toggle todo completion
  const toggleTodo = () => {};

  return (
    <div className="App">
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </div>
  );
}

export default App;
