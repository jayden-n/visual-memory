import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import styles from './Board.module.css';
import useGetImages from '../../hooks/useGetImages';
import Loader from '../Loader';

const Board = (gameOptions) => {
  const [isLoading, setIsLoading] = useState(true);

  const images = useGetImages(gameOptions);

  useEffect(() => {
    if (images.length > 0) setIsLoading(false);
  }, [images]);

  return <div>{isLoading && <Loader />}</div>;
};

export default Board;
