import React, {FC, useState} from 'react';

import styles from './NftCount.module.css';

export const NftCount: FC = () => {
  const [nftCount, setNftCount] = useState<number>(0);
  const tmpMaxNftCount = 5;

  const handleIncreaseNftCount = () => {
    if (nftCount === tmpMaxNftCount) {
      return
    }
    setNftCount(nftCount => nftCount + 1)
  }

  const handleDecreaseNftCount = () => {
    if (nftCount === 0) {
      return
    }
    setNftCount(nftCount => nftCount - 1)
  }

  return (
    <div className={styles['count']}>
      <button className={`${styles['button']} ${styles['button_decrease']}`} onClick={handleDecreaseNftCount}
              disabled={nftCount === 0}></button>
      <p className={styles['count__text']}>{nftCount}/{tmpMaxNftCount}</p>
      <button className={`${styles['button']} ${styles['button_increase']}`} onClick={handleIncreaseNftCount}
              disabled={nftCount === tmpMaxNftCount}></button>
    </div>
  )
}