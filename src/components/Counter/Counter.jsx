import React from 'react';
import PropTypes from 'prop-types';

import './Counter.css';

const STEP = 2;

const Counter = ({ cardsCount, onClick }) => {
  const onDecrease = (e) => {
    e.preventDefault();

    onClick((cardsCount) => Math.max(cardsCount - STEP, 2));
  };

  const onIncrease = (e) => {
    e.preventDefault();
    onClick((cardsCount) => Math.min(cardsCount + STEP, 160));
  };

  return (
    <div className='quantity'>
      <button className='minus' onClick={onDecrease}>
        -
      </button>
      <span className='quantity'>{cardsCount}</span>
      <button className='plus' onClick={onIncrease}>
        +
      </button>
    </div>
  );
};

export default Counter;

Counter.propTypes = {
  cardsCount: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};
