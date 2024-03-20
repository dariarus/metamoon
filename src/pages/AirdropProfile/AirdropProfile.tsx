import React, { type FC } from 'react';

import { Button } from 'shared/components';

import styles from './AirdropProfile.module.css';

type Props = {
  isUserActive: boolean;
};

export const AirdropProfile: FC<Props> = ({ isUserActive }) => {
  return (
    <div className={styles['content']}>
      <h3 className={styles['heading']}>{isUserActive ? 'Congratulations!' : 'You’re not whitelisted yet :('}</h3>
      <p className={styles['text']}>
        {isUserActive
          ? 'Your wallet has been whitelisted! Claim your NFT now!'
          : 'To participate in AirDrop please send us an information about your project'}
      </p>
      <div>
        <Button title={isUserActive ? 'Claim NFT' : 'Get whitelisted'} />
      </div>
    </div>
  );
};
