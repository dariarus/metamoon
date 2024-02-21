import React, { type FC } from 'react'

import styles from './MainPage.module.css'
import logo from '../../../public/images/logo.png'

import { Button } from '../../components/Button/Button'
import { MainPageLayout } from '../../layouts/MainPageLayout/MainPageLayout'

export const MainPage: FC = () => {
  return (
    <MainPageLayout>
      <div className={styles['content']}>
        <h1 className={styles['heading']}>To the<br/>M<span
          className={styles['replaced-letter']}>e
        <img src={logo} alt="e"
             className={styles['replacing-image']}/>
      </span>taMoon
        </h1>
        <p className={styles['subheading']}>From the creators of the first Cardano
          NFT-marketplace</p>
        <div className={styles['content__buttons-wrap']}>
          <Button title="Connect wallet"/>
          <Button title="Get whitelisted for airdrop"/>
        </div>
      </div>
    </MainPageLayout>
  )
}
