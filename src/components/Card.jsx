// src/components/Card.js

import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Card = ({ id, value, isFlipped, isMatched, onClick }) => {
  const handleClick = () => {
    if (!isFlipped && !isMatched) {
      onClick(id);
    }
  };

  return (
    <div
      className={`card ${isFlipped ? 'flipped' : ''} ${isMatched ? 'matched' : ''}`}
      onClick={handleClick}
    >
      <div className="card-inner">
        <div className="card-front">
          {isFlipped && !isMatched && <span className="card-value">{value}</span>}
        </div>
        <div className="card-back"></div>
      </div>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  isFlipped: PropTypes.bool.isRequired,
  isMatched: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Card;