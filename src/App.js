import React, { useState } from 'react';
import StartScreen from './components/StartScreen';
import GameBoard from './components/GameBoard';
import GameOver from './components/GameOver';

const App = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [gameMode, setGameMode] = useState('');
  const [gridSize, setGridSize] = useState('');

  const handleStartGame = (mode, size) => {
    setGameStarted(true);
    setGameMode(mode);
    setGridSize(size);
  };

  const handleGameOver = () => {
    setGameOver(true);
  };

  const handleRestartGame = () => {
    setGameStarted(false);
    setGameOver(false);
    setGameMode('');
    setGridSize('');
  };

  return (
    <div className="app">
      {!gameStarted && !gameOver && (
        <StartScreen onStartGame={handleStartGame} />
      )}
      {gameStarted && !gameOver && (
        <GameBoard
          gameMode={gameMode}
          gridSize={gridSize}
          onGameOver={handleGameOver}
        />
      )}
      {gameOver && (
        <GameOver onRestartGame={handleRestartGame} />
      )}
    </div>
  );
};

export default App;