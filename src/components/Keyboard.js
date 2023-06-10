import React from 'react';

const result = Math.random().toString(36).substring(2,20);


const Keyboard = ({ nextKeys }) => {
  return (
    <div>
      <h3 >
      {result}
      </h3>
      <p>{nextKeys}</p>
    </div>
  );
};

export default Keyboard;
