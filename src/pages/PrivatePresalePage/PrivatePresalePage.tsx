import React, { type FC } from 'react';

import { Button, NftCoast, StatusRectangle } from 'shared/components';

import styles from './PrivatePresalePage.module.css';

type Props = {
  privatePresaleStatus: 'available' | 'soon' | 'finished';
};

export const PrivatePresalePage: FC<Props> = ({ privatePresaleStatus }) => {
  return privatePresaleStatus === 'available' ? (
    <div className={`${styles['content']} ${styles['content_sales-available']}`}>
      <div className={styles['heading-wrap']}>
        <h3 className={`${styles['heading']} ${styles['heading_sales-available']}`}>Be an early bird!</h3>
        <StatusRectangle title="5d 13h 12min 43sec" status="active" />
      </div>
      <div className={styles['text-wrap']}>
        <p className={`${styles['text']}`}>
          Choose the amount of tokens you want to buy and make a payment in any token.
        </p>
      </div>
      <NftCoast infoKind="total" />
      <div className={styles['button-wrap']}>
        <Button title="Mint 2 NFT" />
      </div>
    </div>
  ) : privatePresaleStatus === 'soon' ? (
    <div className={styles['content']}>
      <h3 className={styles['heading']}>Private sale starts soon</h3>
      <div className={styles['text-wrap']}>
        <p className={`${styles['text']}`}>You can buy ut to 5 NFTs for the lowest price of 0.1 Eth per NFT</p>
      </div>
      <NftCoast infoKind="partial" priceKind="presale" />
    </div>
  ) : (
    <div className={styles['content']}>
      <h3 className={styles['heading']}>Private sale is over!</h3>
      <div className={styles['text-wrap']}>
        <p className={`${styles['text']}`}>You can buy NFTs on public sale.</p>
      </div>
    </div>
  );
};
