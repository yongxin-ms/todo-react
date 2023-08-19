import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    "Read a book",
    "Write a blog",
    "Make a video",
    "Reply a comment",
  ]);

  const [todo, setTodo] = useState("");

  const handleClick = () => {
    if (!todo) {
      return;
    }

    const newTodos = todos.concat([todo]);
    setTodos(newTodos);
    setTodo("");
  };

  const handleChange = (e) => {
    const todo = e.target.value;
    setTodo(todo);
    console.log(e.target.value);
    console.log({ todo });
  };

  return (
    <div className="App">
      <h1>My Todo List</h1>
      <div>
        <input type="text" onChange={handleChange} />
        <button onClick={handleClick}>Add</button>
      </div>
      <ul>
        {todos.map((todo) => {
          return <li>{todo}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
