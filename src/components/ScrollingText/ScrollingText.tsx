import React, {FC} from 'react';

import styles from './ScrollingText.module.css';

export const ScrollingText: FC = () => {
  const tmpNews = [
    '0xv8...12tk claimed free 1-week period',
    '0xv8...12tk claimed free 1-week period',
    '0xv8...12tk claimed free 1-week period',
    '0xv8...12tk claimed free 1-week period',
    '0xv8...12tk claimed free 1-week period',
    '0xv8...12tk claimed free 1-week period',
    '0xv8...12tk claimed free 1-week period',
    '0xv8...12tk claimed free 1-week period',
    '0xv8...12tk claimed free 1-week period',
  ]

  return (
    <div className={styles['tape']}>
      <div className={styles['text-container']}>
        {
          tmpNews.map(news => (
            <div className={styles['text']}>{news}</div>
          ))
        }
      </div>
    </div>
  )
}