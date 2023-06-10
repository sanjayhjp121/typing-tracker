import React, { useState, useEffect } from 'react';

const TypingBox = ({ setAccuracy }) => {
  const [input, setInput] = useState('');
  const [keysPressed, setKeysPressed] = useState(0);
  const targetText = 'Type the text you see here...'; // Replace with your own text

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);
    setKeysPressed(value.length);
  };

  useEffect(() => {
    const accuracy = (input.length / targetText.length) * 100;
    setAccuracy(accuracy.toFixed(2));
  }, [input, setAccuracy]);

  return (
    <div>
      <h2>Type Below:</h2> <br></br>
      <textarea className="box" value={input} onChange={handleInputChange} placeholder='Start typing here'/> <br></br><br></br>
      <p>Keys pressed: {keysPressed}</p> <br></br>
    </div>
  );
};

export default TypingBox;
