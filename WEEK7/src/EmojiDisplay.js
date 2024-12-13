import React, { useState, useEffect } from "react";
import Happy from './happy.png';
import Like from './Like.png';
import Sad from './Sad.png';

function EmojiDisplay() {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (text.toLowerCase() === "happy") {
      setImage(Happy);
    } else if (text.toLowerCase() === "like") {
      setImage(Like);
    } else if (text.toLowerCase() === "sad") {
      setImage(Sad);
    } else {
      setImage(null);
    }
  }, [text]);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="App">
      <input type="text" value={text} onChange={handleChange} placeholder="Type 'Happy', 'Like', or 'Sad'" style={{ fontSize: '50px' }}  />
      <label>
        {image && <img src={image} alt={text} style={{ width: '200px' }} />}
      </label>
    </div>
  );
}

export default EmojiDisplay;