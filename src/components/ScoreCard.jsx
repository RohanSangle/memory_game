// src/components/ScoreCard.js

import React from 'react';

const ScoreCard = ({ players }) => {
  return (
    <div className="score-card">
      <h2>Score Card</h2>
      {players.map((player, index) => (
        <div key={index} className="player-score">
          <span className="player-name">{player.name}</span>
          <span className="player-score">{player.score}</span>
        </div>
      ))}
    </div>
  );
};

export default ScoreCard;