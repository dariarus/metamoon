import React, { type FC } from 'react';

import styles from './PrivatePresalePage.module.css';
import { StatusRectangle } from '../../shared/components/StatusRectangle/StatusRectangle';
import { Button } from '../../shared/components/Button/Button';
import { NftCount } from '../../shared/components/NftCount/NftCount';

type Props = {
  privateSalesStatus: 'available' | 'soon' | 'finished';
};

export const PrivatePresalePage: FC<Props> = ({ privateSalesStatus }) => {
  return privateSalesStatus === 'available' ? (
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
      <div className={styles['coast-info']}>
        <div className={styles['coast-item']}>
          <p className={styles['text']}>Your balance</p>
          <span className={styles['coast-item__decor']}></span>
          <div className={styles['coast-item__vertical-alignment-wrap']}>
            <p className={styles['text']}>1 ETH ($1700)</p>
          </div>
        </div>
        <div className={styles['coast-item']}>
          <p className={styles['text']}>Presale Price</p>
          <span className={styles['coast-item__decor']}></span>
          <div className={styles['coast-item__vertical-alignment-wrap']}>
            <p className={styles['text']}>0.2 ETH ($340)</p>
          </div>
        </div>
        <div className={styles['coast-item']}>
          <p className={styles['text']}>Amount of NFT</p>
          <span className={styles['coast-item__decor']}></span>
          <div className={styles['coast-item__vertical-alignment-wrap']}>
            <NftCount />
          </div>
        </div>
        <div className={styles['coast-item']}>
          <p className={styles['text']}>Total coast</p>
          <span className={styles['coast-item__decor']}></span>
          <div className={styles['coast-item__vertical-alignment-wrap']}>
            <p className={styles['text']}>0.2 ETH ($340)</p>
          </div>
        </div>
      </div>
      <div className={styles['button-wrap']}>
        <Button title="Mint 2 NFT" />
      </div>
    </div>
  ) : privateSalesStatus === 'soon' ? (
    <div className={styles['content']}>
      <h3 className={styles['heading']}>Private sale starts soon</h3>
      <div className={styles['text-wrap']}>
        <p className={`${styles['text']}`}>You can buy ut to 5 NFTs for the lowest price of 0.1 Eth per NFT</p>
      </div>
      <div className={styles['coast-item']}>
        <p className={styles['text']}>Presale price</p>
        <span className={styles['coast-item__decor']}></span>
        <div className={styles['coast-item__vertical-alignment-wrap']}>
          <p className={styles['text']}>0.1 ETH ($170)</p>
        </div>
      </div>
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
