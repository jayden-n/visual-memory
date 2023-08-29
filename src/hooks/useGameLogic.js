/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect } from 'react';

const useGameLogic = (images) => {
  const prepareCards = () => {
    console.log(images);
  };

  useEffect(() => {
    if (images.length > 0) {
      return prepareCards();
    }
  }, [images]);
};

export default useGameLogic;
