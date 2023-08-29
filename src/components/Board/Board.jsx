import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import styles from './Board.module.css';
import useGetImages from '../../hooks/useGetImages';
import Loader from '../Loader';
import useGameLogic from '../../hooks/useGameLogic';
import Card from '../Card/Card';
import Result from '../Result/Result';

const Board = ({ gameOptions }) => {
  const [isLoading, setIsLoading] = useState(true);

  const images = useGetImages(gameOptions);
  const { cards, onCardClick, isWin } = useGameLogic(images, gameOptions.level);

  useEffect(() => {
    if (images.length > 0) setIsLoading(false);
  }, [images]);

  return (
    <div>
      {isWin && <Result />}
      {isLoading ? (
        <Loader />
      ) : (
        cards.map((card) => (
          <Card key={card.uniqueId} card={card} onCardClick={onCardClick} />
        ))
      )}
    </div>
  );
};

export default Board;

Board.propTypes = {
  gameOptions: PropTypes.shape({
    level: PropTypes.string.isRequired,
    cardsCount: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
  }),
};
