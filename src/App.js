import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [todos, addTodo] = useState([]);
  function setTodo(todo) {
    addTodo([...todos, todo]);
  }
  function deleteTodo(todo) {
    var index = todos.indexOf(todo);
    todos.splice(index, 1);
    addTodo([...todos]);
  }

  useEffect(() => {});

  return (
    <div className="App">
      <input type="text" id="input-todo" />
      <button
        onClick={() => {
          setTodo(document.getElementById("input-todo").value);
        }}
      >
        Añadir tarea
      </button>
      <ul>
        {todos.map((todo) => (
          <div className="todo">
            <li key={todo}>{todo}</li>
            <p onClick={() => deleteTodo(todo)}>Eliminar</p>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default App;
