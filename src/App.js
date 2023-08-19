import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    { name: "Read a book", done: false },
    { name: "Write a blog", done: true },
    { name: "Make a video", done: false },
    { name: "Reply a comment", done: true },
  ]);

  const [todoName, setTodoName] = useState("");

  const handleClick = () => {
    if (!todoName) {
      return;
    }

    const newTodos = todos.concat([{ name: todoName, done: false }]);
    setTodos(newTodos);
    setTodoName("");
  };

  const handleChange = (e) => {
    const name = e.target.value;
    setTodoName(name);
    console.log(e.target.value);
    console.log({ todoName });
  };

  const toggleDone = (e, index) => {
    const newTodos = todos.map((todo, i) => {
      if (i !== index) {
        return todo;
      }
      return { name: todo.name, done: !todo.done };
    });
    setTodos(newTodos);
  };

  const totalRemaining = todos.filter((todo) => {
    return !todo.done;
  }).length;

  return (
    <div className="App">
      <h1>My Todo List</h1>
      <div>TotalRemaining: {totalRemaining}</div>
      <div>
        <input type="text" onChange={handleChange} />
        <button onClick={handleClick}>Add</button>
      </div>
      <ul>
        {todos.map((todo, i) => {
          return (
            <li>
              <input
                type="checkbox"
                onClick={(e) => toggleDone(e, i)}
                checked={todo.done ? "checked" : ""}
              ></input>
              {todo.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
