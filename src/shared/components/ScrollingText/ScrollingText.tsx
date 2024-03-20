import React, { type FC, useEffect, useState } from 'react';
import cn from 'classnames';

import styles from './ScrollingText.module.css';

export const ScrollingText: FC = () => {
  const [numberOfBlocks, setNumberOfBlocks] = useState<number>(0);
  const [listLengthModifier, setListLengthModifier] = useState<'single-item' | 'small-list' | 'average-list'>(
    'single-item',
  );

  const tmpNews = [
    'FIRST0xv8...12tk claimed free 1-week period',
    '0xv8...12tk claimed free 1-week period',
    '0xv8...12tk claimed free 1-week period',
    '0xv8...12tk claimed free 1-week period',
    '0xv8...12tk claimed free 1-week period',
    '0xv8...12tk claimed free 1-week period',
    '0xv8...12tk claimed free 1-week period',
    // '0xv8...12tk claimed free 1-week period',
    // '0xv8...12tk claimed free 1-week period',
    // '0xv8...12tk claimed free 1-week period',
    'FIN0xv8...12tk claimed free 1-week period',
  ];

  useEffect(() => {
    if (tmpNews.length >= 8) {
      setNumberOfBlocks(2);
    } else if (tmpNews.length === 1) {
      setNumberOfBlocks(8);
      setListLengthModifier('single-item');
    } else if (tmpNews.length > 1 && tmpNews.length < 4) {
      setNumberOfBlocks(7);
      setListLengthModifier('small-list');
    } else if (tmpNews.length > 3 && tmpNews.length < 8) {
      setNumberOfBlocks(3);
      setListLengthModifier('average-list');
    }
  }, []);

  const listContainerClasses = cn(styles['list-container'], {
    [styles[`list-container_${listLengthModifier}`]]: tmpNews.length < 8,
  });

  return (
    <div className={styles['tape']}>
      <div className={listContainerClasses}>
        {Array.from({ length: numberOfBlocks }, (_, index) => (
          <ul key={index} className={styles['list']}>
            {tmpNews.map((news, index) => (
              <li key={index} className={styles['list-item']}>
                {news}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};
