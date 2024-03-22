import React, { type FC } from 'react';

import styles from './ProgressBar.module.css';

export const ProgressBar: FC = () => {
  const tmpMintedTokensCount = 38;

  return (
    <div
      className={styles['bar']}
      style={{
        background: `linear-gradient(to right, #6cff47 ${
          tmpMintedTokensCount <= 10
            ? tmpMintedTokensCount / 10
            : tmpMintedTokensCount < 100
              ? tmpMintedTokensCount - 10
              : tmpMintedTokensCount
        }%, #000 ${tmpMintedTokensCount}%)`,
      }}
    >
      <p className={styles['text']}>{tmpMintedTokensCount}/100 NFT are already minted</p>
    </div>
  );
};
