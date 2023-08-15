// src/components/Stopwatch.js

import React, { useState, useEffect } from 'react';

const Stopwatch = ({ gameOver, restartGame }) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval = null;

    if (!gameOver) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [gameOver]);

  return (
    <div className="stopwatch">
      <span className="stopwatch-label">Time: </span>
      <span className="stopwatch-time">{time}</span>
      {gameOver && (
        <button className="restart-button" onClick={restartGame}>
          Restart Game
        </button>
      )}
    </div>
  );
};

export default Stopwatch;