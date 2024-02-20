import React, { type FC } from 'react'

import styles from './SocialNetworksWidget.module.css'

import instagramIcon from '../../images/instagram-icon.png'
import telegramIcon from '../../images/telegram-icon.png'
import linkedinIcon from '../../images/linkedin-icon.png'
import facebookIcon from '../../images/facebook-icon.png'
import { Link } from '../Link/Link'

export const SocialNetworksWidget: FC = () => {
  return (
    <footer className={styles.widget}>
      <Link href="/example/change-me" styles={styles.link}>
        <img src={instagramIcon} alt="instagram" className={styles.image}/>
      </Link>
      <Link href="/example/change-me" styles={styles.link}>
        <img src={telegramIcon} alt="telegram" className={styles.image}/>
      </Link>
      <Link href="/example/change-me" styles={styles.link}>
        <img src={linkedinIcon} alt="linkedin" className={styles.image}/>
      </Link>
      <Link href="/example/change-me" styles={styles.link}>
        <img src={facebookIcon} alt="facebook" className={styles.image}/>
      </Link>
    </footer>
  )
}
