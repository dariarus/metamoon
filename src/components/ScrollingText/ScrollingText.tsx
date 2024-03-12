import React, {FC, useEffect, useState} from 'react';

import styles from './ScrollingText.module.css';

export const ScrollingText: FC = () => {
  const [numberOfBlocks, setNumberOfBlocks] = useState(0);
  const [listLengthModifier, setListLengthModifier] = useState('');

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
  ]

  useEffect(() => {
    if (tmpNews.length >= 8) {
      setNumberOfBlocks(2);
    } else if (tmpNews.length === 1) {
      setNumberOfBlocks(8);
      setListLengthModifier('list-container_single-item')
    } else if (tmpNews.length > 1 && tmpNews.length < 4) {
      setNumberOfBlocks(7);
      setListLengthModifier('list-container_small-list')
    } else if (tmpNews.length > 3 && tmpNews.length < 8) {
      setNumberOfBlocks(3);
      setListLengthModifier('list-container_average-list')
    }
  }, [])

  return (
    <div className={styles['tape']}>
      {/*TODO: переделать классы в соответствии с библиотекой classnames*/}
      <div
        className={tmpNews.length < 8 ? `${styles['list-container']} ${styles[`${listLengthModifier}`]}` : `${styles['list-container']}`}>
        {
          Array.from({length: numberOfBlocks}, (_, index) => (
            <ul key={index} className={styles['list']}>
              {
                tmpNews.map((news, index) => (
                  <li key={index} className={styles['list-item']}>{news}</li>
                ))
              }
            </ul>
          ))}
      </div>
    </div>
  )
}