import React, { type FC } from 'react'

import logo from '../../../public/images/logo.svg'
import { Button } from '../../shared/components'
import { MainPageLayout } from '../../layouts'
import styles from './MainPage.module.css'

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
        <p className={styles['subheading']}>From the creators of the first</p>
        <p className={styles['subheading']}>Cardano NFT&minus;marketplace</p>
        <div className={styles['content__buttons-wrap']}>
          <Button title="Connect wallet"/>
          <Button title="Get whitelisted for airdrop"/>
        </div>
      </div>
    </MainPageLayout>
  )
}
