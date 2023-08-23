import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

import { CATEGORIES } from '../../constants';

import styles from './Settings.module.css';
import RadioBox from '../RadioBox';

const Settings = () => {
  const [category, setCategory] = useState(CATEGORIES[0]);

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
    </div>
  );
};

export default Settings;
