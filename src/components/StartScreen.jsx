// src/components/StartScreen.js

import React, { useState } from 'react';

const StartScreen = () => {
  const [elementOption, setElementOption] = useState('');
  const [modeOption, setModeOption] = useState('');
  const [gridOption, setGridOption] = useState('');

  const handleElementOptionChange = (event) => {
    setElementOption(event.target.value);
  };

  const handleModeOptionChange = (event) => {
    setModeOption(event.target.value);
  };

  const handleGridOptionChange = (event) => {
    setGridOption(event.target.value);
  };

  const handleStartGame = () => {
    // Start the game based on the selected options
    // Implement the logic here
  };

  return (
    <div>
      <h1>Memory Game</h1>
      <div>
        <label>
          Choose Elements:
          <select value={elementOption} onChange={handleElementOptionChange}>
            <option value="">Select</option>
            <option value="number">Number</option>
            <option value="icons">Icons</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Choose Mode:
          <select value={modeOption} onChange={handleModeOptionChange}>
            <option value="">Select</option>
            <option value="solo">Solo</option>
            <option value="multiplayer">Multiplayer</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Choose Grid Size:
          <select value={gridOption} onChange={handleGridOptionChange}>
            <option value="">Select</option>
            <option value="4x4">4x4</option>
            <option value="6x6">6x6</option>
          </select>
        </label>
      </div>
      <button onClick={handleStartGame}>Start Game</button>
    </div>
  );
};

export default StartScreen;