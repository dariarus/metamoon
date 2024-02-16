import React, { type FC } from 'react'

import styles from './main-page.module.css'
import logo from '../../images/logo.png'

import { Button } from '../../components/button/button'

export const MainPage: FC = () => {
  return (
    <div className={styles.content}>
      <h1 className={`${styles.text} ${styles.text_header}`}>To the<br/>M<span
        className={styles['replaced-letter']}>e
        <img src={logo} alt="e"
             className={styles['replacing-image']}/>
      </span>taMoon
      </h1>
      <h4 className={`${styles.text} ${styles.text_subheader}`}>From the creators of the first Cardano
        NFT-marketplace</h4>
      <div className={styles['content__buttons-wrap']}>
        <Button name="Connect wallet" isWithBackground={false}/>
        <Button name="Get whitelisted for airdrop" isWithBackground={false}/>
      </div>
    </div>
  )
}
