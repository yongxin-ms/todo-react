import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>My Todo List</h1>
      <div>
        <input type="text" />
        <button>Add</button>
      </div>
      <ul>
        <li>Read a book</li>
        <li>Write a blog</li>
        <li>Make a video</li>
      </ul>
    </div>
  );
}

export default App;
