import React, { useState } from "react";
import pfp from "../assets/test-image.png";

const Feed = () => {
  const [whispers, setWhispers] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addWhisper = () => {
    if (inputValue.trim() !== "") {
      const newWhisper = {
        id: whispers.length + 1,
        text: inputValue,
        done: false,
      };
      setWhispers([...whispers, newWhisper]);
      setInputValue("");
    }
  };

  const updateWhisper = (id, newText) => {
    const updatedWhispers = whispers.map((todo) =>
      whispers.id === id ? { ...whispers, text: newText } : whispers
    );
    setWhispers(updatedWhispers);
  };

  const toggleDone = (id) => {
    const updatedWhispers = whispers.map((whisper) =>
      whisper.id === id ? { ...whisper, done: !whisper.done } : whisper
    );
    setWhispers(updatedWhispers);
  };

  const deleteWhisper = (id) => {
    const filteredWhispers = whispers.filter((whisper) => whisper.id !== id);
    setWhispers(filteredWhispers);
  };

  return (
    <div className="post">
      <div className="post__area">
        <img src={pfp} />
        <div className="input">
          <textarea
            name=""
            id=""
            rows="3"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="What's happening?"
            className="post__input"
          ></textarea>
          <div className="button">
            <button onClick={addWhisper}>Whisper</button>
          </div>
        </div>
      </div>
      <ul>
        {whispers.map((whisper) => (
          <li key={whisper.id}>
            <img src={pfp} className="pfp" />
            <div className="post__content">
              <p>{whisper.text}</p>
              <button onClick={() => deleteWhisper(whisper.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Feed;
