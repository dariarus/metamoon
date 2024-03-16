import React, {FC} from 'react';

import styles from './PrivatePresaleProfile.module.css'
import {StatusRectangle} from '../StatusRectangle/StatusRectangle';
import {Button} from '../button/button';
import {NftCount} from '../NftCount/NftCount';

type Props = {
  privateSalesStatus: 'available' | 'soon' | 'finished';
}

export const PrivatePresaleProfile: FC<Props> = ({privateSalesStatus}) => {
  return (
    <div className={styles['content']}>
      {
        privateSalesStatus === 'available'
        &&
        <>
          <div className={styles['heading-wrap']}>
            <h3 className={styles['heading']}>
              Be an early bird!
            </h3>
            <StatusRectangle title="5d 13h 12min 43sec" status="active"/>
          </div>
          <div className={styles['text-wrap']}>
            <p className={`${styles['text']}`}>Choose the amount of tokens you want to buy and make a payment in any
              token.</p>
          </div>
          <div className={styles['coast-info']}>
            <div className={styles['coast-item']}>
              <p className={styles['text']}>Your balance</p>
              <span className={styles['coast-item__decor']}></span>
              <p className={styles['text']}>1 ETH ($1700)</p>
            </div>
            <div className={styles['coast-item']}>
              <p className={styles['text']}>Presale Price</p>
              <span className={styles['coast-item__decor']}></span>
              <p className={styles['text']}>0.2 ETH ($340)</p>
            </div>
            <div className={styles['coast-item']}>
              <p className={styles['text']}>Amount of NFT</p>
              <span className={styles['coast-item__decor']}></span>
              <NftCount/>
              {/*<p className={styles['text']}>2/5</p>*/}

            </div>
            <div className={styles['coast-item']}>
              <p className={styles['text']}>Total coast</p>
              <span className={styles['coast-item__decor']}></span>
              <p className={styles['text']}>0.2 ETH ($340)</p>
            </div>
          </div>
          <div className={styles['button-wrap']}>
            <Button name="Mint 2 NFT" isWithBackground={false}/>
          </div>
        </>
      }
    </div>
  )
}