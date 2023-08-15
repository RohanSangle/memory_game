// src/components/GameBoard.js

import React, { useState, useEffect } from 'react';
import Card from './Card';
import GameOver from './GameOver';
import ScoreCard from './ScoreCard';
import Stopwatch from './Stopwatch';

const GameBoard = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [moves, setMoves] = useState(0);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    // Generate cards based on grid size
    const gridSize = localStorage.getItem('gridSize');
    const cardPairs = gridSize === '4x4' ? 8 : 18;
    const elements = generateElements(cardPairs);
    const shuffledElements = shuffleArray(elements);
    const generatedCards = generateCards(shuffledElements);
    setCards(generatedCards);
  }, []);

  useEffect(() => {
    // Check for game over condition
    if (matchedCards.length === cards.length) {
      setGameOver(true);
    }
  }, [matchedCards, cards]);

  useEffect(() => {
    // Start the stopwatch
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const generateElements = (cardPairs) => {
    const elements = [];
    const elementTypes = localStorage.getItem('elementType');
    const elementType = elementTypes === 'number' ? 'number' : 'icon';

    for (let i = 1; i <= cardPairs; i++) {
      elements.push({ id: i, type: elementType });
      elements.push({ id: i, type: elementType });
    }

    return elements;
  };

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  const generateCards = (elements) => {
    return elements.map((element) => ({
      ...element,
      flipped: false,
      matched: false,
    }));
  };

  const handleCardClick = (card) => {
    if (flippedCards.length === 2 || card.flipped || card.matched) {
      return;
    }

    const updatedCards = cards.map((c) => {
      if (c.id === card.id) {
        return { ...c, flipped: true };
      }
      return c;
    });

    setCards(updatedCards);
    setFlippedCards([...flippedCards, card]);

    if (flippedCards.length === 1) {
      setMoves((prevMoves) => prevMoves + 1);
      checkForMatch();
    }
  };

  const checkForMatch = () => {
    const [card1, card2] = flippedCards;

    if (card1.id === card2.id) {
      setMatchedCards([...matchedCards, card1, card2]);
      setScore((prevScore) => prevScore + 1);
      setFlippedCards([]);
    } else {
      setTimeout(() => {
        const updatedCards = cards.map((card) => {
          if (card.id === card1.id || card.id === card2.id) {
            return { ...card, flipped: false };
          }
          return card;
        });
        setCards(updatedCards);
        setFlippedCards([]);
      }, 1000);
    }
  };

  const handleRestartGame = () => {
    setCards([]);
    setFlippedCards([]);
    setMatchedCards([]);
    setGameOver(false);
    setScore(0);
    setMoves(0);
    setTimer(0);
  };

  const handleNewGame = () => {
    localStorage.clear();
    handleRestartGame();
  };

  return (
    <div className="game-board">
      {!gameOver && (
        <div className="game-info">
          <Stopwatch timer={timer} />
          <div className="moves">Moves: {moves}</div>
        </div>
      )}
      <div className="cards-grid">
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            onCardClick={handleCardClick}
          />
        ))}
      </div>
      {gameOver && (
        <GameOver
          score={score}
          moves={moves}
          onRestartGame={handleRestartGame}
          onNewGame={handleNewGame}
        />
      )}
      {localStorage.getItem('gameMode') === 'multiplayer' && (
        <ScoreCard />
      )}
    </div>
  );
};

export default GameBoard;