import React, { type FC } from 'react';

import { Button, NftCoast } from 'shared/components';

import styles from './PublicSalePage.module.css';

type Props = {
  publicSaleStatus: 'available' | 'soon' | 'finished';
};

export const PublicSalePage: FC<Props> = ({ publicSaleStatus }) => {
  return publicSaleStatus === 'available' ? (
    <div className={`${styles['content']} ${styles['content_sales-available']}`}>
      <h3 className={styles['heading']}>Mint NFTs now!</h3>
      <div className={styles['text-wrap']}>
        <p className={`${styles['text']}`}>You can mint an unlimited amount of NFTs for the market price</p>
      </div>
      <NftCoast infoKind="total" />
      <div className={styles['button-wrap']}>
        <Button title="Mint 2 NFT" />
      </div>
    </div>
  ) : publicSaleStatus === 'soon' ? (
    <div className={styles['content']}>
      <h3 className={styles['heading']}>Subscribe to our news!</h3>
      <div className={styles['text-wrap']}>
        <p className={`${styles['text']}`}>
          We’ll send you a notification when public sale is available to participate
        </p>
      </div>
      <NftCoast infoKind="partial" priceKind="public" />
      <div className={styles['button-wrap']}>
        <Button title="Subscribe" />
      </div>
    </div>
  ) : (
    <div className={styles['content']}>
      <h3 className={styles['heading']}>SOLD OUT</h3>
    </div>
  );
};
