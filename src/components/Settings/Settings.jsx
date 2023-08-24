import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

import { CATEGORIES, INITIAL_CARDS_COUNT, LEVEL } from '../../constants';

import styles from './Settings.module.css';
import RadioBox from '../RadioBox';
import Counter from '../Counter/Counter';

const Settings = ({ startGame }) => {
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [level, setLevel] = useState(LEVEL[0]);
  const [cardsCount, setCardsCount] = useState(INITIAL_CARDS_COUNT);

  const onStartGameClick = () => {
    startGame({ category, level, cardsCount });
  };

  return (
    <div className={`${styles.settings} frosted`}>
      <h2>Settings</h2>

      <h4>Category:</h4>

      <div className={`${styles.setting}`}>
        {CATEGORIES.map((item) => (
          <RadioBox
            item={item}
            key={item}
            selectedItem={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        ))}
      </div>
      <h4>Amount of cards:</h4>
      <div className={`${styles.setting}`}>
        <Counter cardsCount={cardsCount} onClick={setCardsCount} />
      </div>
      <h4>Level:</h4>
      <div className={`${styles.setting}`}>
        {LEVEL.map((item) => (
          <RadioBox
            item={item}
            key={item}
            selectedItem={level}
            onChange={(e) => setLevel(e.target.value)}
          />
        ))}
      </div>
      <button className={`${styles.button} frosted`} onClick={onStartGameClick}>
        Start
      </button>
    </div>
  );
};

export default Settings;
Settings.propTypes = {
  startGame: PropTypes.func.isRequired,
};
