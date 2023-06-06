import React, { useState, useRef, useEffect } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";
import './App.css'

let LOCAL_STORAGE_KEY = "myTodos.todos";

function App() {
  const [todos, setTodos] = useState(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    const todos = storedTodos;
    return todos || [];
  });

  const todoNameRef = useRef();

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  // to make update our todolist
  function toogleTodo(id) {
    const newTodos = [...todos];
    newTodos.forEach((todo) => {
      if (todo.id === id) {
        todo.complete = !todo.complete;
        setTodos(newTodos);
      }
    });
  }

  // to handle our input value and set
  const handleAddTodo = (e) => {
    e.preventDefault();
    const name = todoNameRef.current.value;
    if (name === "") return;

    // add new todos
    setTodos((prevTodo) => {
      return [...prevTodo, { id: uuidv4(), name: name, complete: false }];
    });

    // clear input field after submit
    todoNameRef.current.value = null;
  };

  // clear the completed
  const handleClearTodos = () => {
    let newTodos = todos.filter((todo) => !todo.complete);
    setTodos(newTodos);
  };

  return (
    <div className="container text-center mt-5">
      <div className="w-100 mt-5">
        <TodoList todos={todos} toogleTodo={toogleTodo} />
        <input type="text" ref={todoNameRef} className="mt-5 p-1 rounded" />
        <br />
        <button onClick={handleAddTodo} className=" mt-3 p-2 btn text-white mx-2 button">Add Todo</button>
        <button onClick={handleClearTodos} className="mt-3 p-2 btn  text-white mx-2 button">Clear Complete</button>
        <div className="mt-2">
          {todos.filter((leftTodo) => !leftTodo.complete).length} left to do
        </div>
      </div>
    </div>
  );
}

export default App;
