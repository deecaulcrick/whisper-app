import React, { useState } from "react";
import pfp from "../assets/test-image.png";

const Feed = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (inputValue.trim() !== "") {
      const newTodo = {
        id: todos.length + 1,
        text: inputValue,
        done: false,
      };
      setTodos([...todos, newTodo]);
      setInputValue("");
    }
  };

  const updateTodo = (id, newText) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, text: newText } : todo
    );
    setTodos(updatedTodos);
  };

  const toggleDone = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  return (
    <div className="post">
      <div className="post__area">
        <img src={pfp} />
        <div className="input">
          <textarea
            name=""
            id=""
            rows="5"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="What's happening?"
            className="post__input"
          ></textarea>
          <div className="button">
            <button onClick={addTodo}>Whisper</button>
          </div>
        </div>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <img src={pfp} className="pfp" />
            <div className="post__content">
              <p>{todo.text}</p>
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Feed;
