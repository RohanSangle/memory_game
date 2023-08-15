// src/components/GameOver.js

import React from 'react';
import PropTypes from 'prop-types';

const GameOver = ({ totalTime, totalClicks, restartGame, startNewGame }) => {
  return (
    <div className="game-over">
      <h2>Game Over</h2>
      <p>Total Time: {totalTime}</p>
      <p>Total Clicks: {totalClicks}</p>
      <button onClick={restartGame}>Restart Game</button>
      <button onClick={startNewGame}>Start New Game</button>
    </div>
  );
};

GameOver.propTypes = {
  totalTime: PropTypes.number.isRequired,
  totalClicks: PropTypes.number.isRequired,
  restartGame: PropTypes.func.isRequired,
  startNewGame: PropTypes.func.isRequired,
};

export default GameOver;