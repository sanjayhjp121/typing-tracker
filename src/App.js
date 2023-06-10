import React, { useState } from 'react';
import Keyboard from './components/Keyboard';
import Navbar from './components/Navbar';
// import Timer from  './components/Timer';
import TypingBox from './components/TypingBox';

const App = () => {
  const [accuracy, setAccuracy] = useState(0);

  return (
    <div>
      <Navbar></Navbar>
     
      <p id='demo'></p>
      <div className='main-div'>
      <h1>Generator</h1><br></br>
      <Keyboard></Keyboard> <br></br><br></br><br></br>
      <TypingBox setAccuracy={setAccuracy} />
      <p>Accuracy: {accuracy}%</p>
      </div>
    </div>
  );
};

export default App;