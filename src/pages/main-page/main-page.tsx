import React, { type FC } from 'react'

import mainPageStyles from './main-page.module.css'
import logo from '../../images/logo.png'

import { Button } from '../../components/button/button'

export const MainPage: FC = () => {
  return (
    <div className={mainPageStyles.content}>
      <h1 className={`${mainPageStyles.text} ${mainPageStyles.text_header}`}>To the<br/>M<span
        className={mainPageStyles['replaced-letter']}>e
        <img src={logo} alt="e"
             className={mainPageStyles['replacing-image']}/>
      </span>taMoon
      </h1>
      <h4 className={`${mainPageStyles.text} ${mainPageStyles.text_subheader}`}>From the creators of the first Cardano
        NFT-marketplace</h4>
      <div className={mainPageStyles['content__buttons-wrap']}>
        <Button name="Connect wallet" isWithBackground={false}/>
        <Button name="Get whitelisted for airdrop" isWithBackground={false}/>
      </div>
    </div>
  )
}
