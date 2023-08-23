import React from 'react';
import PropTypes from 'prop-types';

import styles from './RadioBox.module.css';

const RadioBox = ({ item, selectedItem, onChange }) => {
  const isChecked = item === selectedItem;

  return (
    <div className={`${styles.radioBox}`}>
      <input
        type='radio'
        name={item}
        id={item}
        value={item}
        checked={isChecked}
        onChange={onChange}
      />
      <label htmlFor={item}>{item}</label>
    </div>
  );
};

export default RadioBox;

RadioBox.propTypes = {
  item: PropTypes.string.isRequired,
  selectedItem: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
