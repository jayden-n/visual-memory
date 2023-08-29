import React from 'react';
import PropTypes from 'prop-types';

import styles from './Card.module.css';
import Image from '../Image/Image';

const Card = ({ card, onCardClick }) => {
  const onClick = () => {
    onCardClick(card.uniqueId);
  };
  console.log(card);
  return (
    <div className={`${styles.container}`} onClick={onClick}>
      <div className={`${styles.card} ${card.isShown ? styles.flipped : ''}`}>
        <div className={`${styles.front}`}></div>
        <div className={`${styles.back}`}>
          <Image url={card.url} /> {/* Passing the url prop */}
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.shape({
    uniqueId: PropTypes.number.isRequired,
    isShown: PropTypes.bool.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
  onCardClick: PropTypes.func.isRequired,
};

export default Card;
