import React, {FC} from 'react';

import styles from './ScrollingText.module.css';

export const ScrollingText: FC = () => {
  const tmpNews = [
    'FIRST0xv8...12tk claimed free 1-week period',
    '0xv8...12tk claimed free 1-week period',
    // '0xv8...12tk claimed free 1-week period',
    // '0xv8...12tk claimed free 1-week period',
    // '0xv8...12tk claimed free 1-week period',
    // '0xv8...12tk claimed free 1-week period',
    // '0xv8...12tk claimed free 1-week period',
    // '0xv8...12tk claimed free 1-week period',
    // '0xv8...12tk claimed free 1-week period',
    // '0xv8...12tk claimed free 1-week period',
    'FIN0xv8...12tk claimed free 1-week period',
  ]

  return (
    <div className={styles['tape']}>
      <div className={styles['list-container']}>
        <ul className={styles['list']}>
          {
            tmpNews.map(news => (
              <li className={styles['list-item']}>{news}</li>
            ))
          }
        </ul>
        <ul className={styles['list']}>
          {
            tmpNews.map(news => (
              <li className={styles['list-item']}>{news}</li>
            ))
          }
        </ul>
        <ul className={styles['list']}>
          {
            tmpNews.map(news => (
              <li className={styles['list-item']}>{news}</li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}