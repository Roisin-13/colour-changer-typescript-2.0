import * as React from 'react';
import './App.css';
import { useState } from 'react';

const white: string = "#ffffff"

const App = () => {

  const [colour, setColour] = useState<string>(white);
  document.body.style.background = colour;

  //--------
  const randNum = (): string => {
    let hexArray: string[] = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
    return hexArray[Math.floor(Math.random() * hexArray.length)];
  };

  const getColour = (): string => {
    let hex = "#" + randNum() + randNum() + randNum() + randNum() + randNum() + randNum();
    return hex;

  };

  //----------------------------

  const handleClick = (): void => {
    setColour(getColour);
  }

  return (
    <div className="App">
      <div className="colourBox">
        <h1>colour is:</h1>
        <h2>{colour}</h2>
        <button onClick={handleClick}>Click Me</button>
      </div>
    </div>
  );
};


export default App;
