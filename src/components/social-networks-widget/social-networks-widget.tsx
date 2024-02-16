import React, { type FC } from 'react'

import styles from './social-networks-widget.module.css'

import instagramIcon from '../../images/instagram-icon.png'
import telegramIcon from '../../images/telegram-icon.png'
import linkedinIcon from '../../images/linkedin-icon.png'
import facebookIcon from '../../images/facebook-icon.png'

export const SocialNetworksWidget: FC = () => {
  return (
    <footer className={styles.widget}>
      <a href="#" className={styles.link}>
        <img src={instagramIcon} alt="instagram" className={styles.image}/>
      </a>
      <a href="#" className={styles.link}>
        <img src={telegramIcon} alt="telegram" className={styles.image}/>
      </a>
      <a href="#" className={styles.link}>
        <img src={linkedinIcon} alt="linkedin" className={styles.image}/>
      </a>
      <a href="#" className={styles.link}>
        <img src={facebookIcon} alt="facebook" className={styles.image}/>
      </a>
    </footer>
  )
}
