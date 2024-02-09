import React, {FunctionComponent} from 'react';

import progressBarStyles from './progress-bar.module.css';

export const ProgressBar: FunctionComponent = () => {
  const tmpMintedTokensCount = 57;

  return (
    <div className={progressBarStyles.bar} style={{
      background: `linear-gradient(to right, #6cff47 ${tmpMintedTokensCount <= 10
        ? tmpMintedTokensCount / 10
        : tmpMintedTokensCount < 100
          ? tmpMintedTokensCount - 10
          : tmpMintedTokensCount}%, #000 ${tmpMintedTokensCount}%)`,
    }}>
      <p className={progressBarStyles.text}>{tmpMintedTokensCount}/100 NFT are already minted</p>
    </div>
  )
}