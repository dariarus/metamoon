import React, {FC} from 'react';

import styles from './PrivatePresaleProfile.module.css'
// import {Button} from '../button/button';
import {StatusRectangle} from '../StatusRectangle/StatusRectangle';

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
          <p className={`${styles['text']} ${styles['text_mod']}`}>Choose the amount of tokens you want to buy and make a payment in any token.</p>
          <div>
            <div className={styles['coast-info']}>
              <p className={styles['text']}>Your balance</p>
              <span className={styles['coast-info__decor']}></span>
              <p className={styles['text']}>1 ETH ($1700)</p>
            </div>
            <div className={styles['coast-info']}>
              <p className={styles['text']}>Your balance</p>
              <span className={styles['coast-info__decor']}></span>
              <p className={styles['text']}>1 ETH ($1700)</p>
            </div>
            <div className={styles['coast-info']}>
              <p className={styles['text']}>Amount of NFT</p>
              <span className={styles['coast-info__decor']}></span>
              <p className={styles['text']}>2/5</p>
            </div>
            <div className={styles['coast-info']}>
              <p className={styles['text']}>Your balance</p>
              <span className={styles['coast-info__decor']}></span>
              <p className={styles['text']}>1 ETH ($1700)</p>
            </div>
          </div>
        </>
      }
      {/*<h3 className={styles['heading']}>*/}
      {/*  ? "Be an early bird!"*/}
      {/*  : "You’re not whitelisted yet :("}</h3>*/}
      {/*<p className={styles['text']}>{props.isUserActive*/}
      {/*  ? "Your wallet has been whitelisted! Claim your NFT now!"*/}
      {/*  : "To participate in AirDrop please send us an information about your project"}</p>*/}
      {/*<Button name={props.isUserActive*/}
      {/*  ? "Claim NFT"*/}
      {/*  : "Get whitelisted"}*/}
      {/*        isWithBackground={false}/>*/}
    </div>
  )
}